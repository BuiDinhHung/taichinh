import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCurrentUsername } from "@/lib/server/auth";
import {
  getDailyVisits,
  getTopByDimension,
  getVisitTotals,
  isAnalyticsConfigured,
  type DailyVisitRow,
  type DimensionRow,
} from "@/lib/server/vercel-analytics";

export const metadata: Metadata = {
  title: "Thống kê truy cập - taichinh.de",
  description: "Số liệu truy cập và tương tác của website.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const RANGE_DAYS = 30;

function formatNumber(value: number): string {
  return value.toLocaleString("vi-VN");
}

function toDateParam(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function formatDayLabel(timestamp: string): string {
  const date = new Date(timestamp);
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
}

function regionName(code: string): string {
  if (!code) return "Không rõ";
  try {
    return new Intl.DisplayNames(["vi"], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

const DEVICE_LABELS: Record<string, string> = {
  desktop: "Máy tính",
  mobile: "Điện thoại",
  tablet: "Máy tính bảng",
};

function StatTile({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-border-default bg-white p-5 dark:bg-card">
      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-text-strong dark:text-foreground">{value}</p>
      {hint ? <p className="mt-1 text-xs text-text-muted">{hint}</p> : null}
    </div>
  );
}

function DailyChart({ rows }: { rows: DailyVisitRow[] }) {
  const maxViews = Math.max(...rows.map((row) => row.pageviews), 0);
  if (maxViews === 0) {
    return (
      <p className="py-16 text-center text-sm text-text-muted">
        Chưa có dữ liệu truy cập trong {RANGE_DAYS} ngày qua.
      </p>
    );
  }

  const magnitude = 10 ** Math.floor(Math.log10(maxViews));
  const niceMax = Math.ceil(maxViews / magnitude) * magnitude;
  const peakIndex = rows.findIndex((row) => row.pageviews === maxViews);

  return (
    <div className="mt-6">
      <div className="relative h-64">
        {[1, 0.5, 0].map((fraction) => (
          <div
            key={fraction}
            className="absolute inset-x-0 flex items-center gap-2"
            style={{ bottom: `${fraction * 100}%` }}
          >
            <span className="w-10 -translate-y-1/2 text-right text-[11px] tabular-nums text-text-muted">
              {formatNumber(Math.round(niceMax * fraction))}
            </span>
            <span className="h-px flex-1 bg-border-default/60" />
          </div>
        ))}
        <div className="absolute inset-y-0 left-12 right-0 flex items-end gap-[2px]">
          {rows.map((row, index) => (
            <div key={row.timestamp} className="group relative flex h-full flex-1 items-end justify-center">
              {index === peakIndex ? (
                <span className="absolute -top-5 text-[11px] font-semibold text-text-muted">
                  {formatNumber(row.pageviews)}
                </span>
              ) : null}
              <div
                className="w-full max-w-[24px] rounded-t-[4px] bg-brand-gold-dark transition-colors group-hover:bg-brand-gold-darker dark:bg-brand-gold"
                style={{ height: `${(row.pageviews / niceMax) * 100}%`, minHeight: row.pageviews > 0 ? 2 : 0 }}
              />
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#333333] px-2.5 py-1.5 text-xs text-white shadow-lg group-hover:block">
                <span className="font-semibold">{formatDayLabel(row.timestamp)}</span>
                {" · "}
                {formatNumber(row.pageviews)} lượt xem · {formatNumber(row.visitors)} khách
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-12 mt-2 flex gap-[2px]">
        {rows.map((row, index) => (
          <span key={row.timestamp} className="flex-1 text-center text-[11px] text-text-muted">
            {index % 5 === 0 ? formatDayLabel(row.timestamp) : ""}
          </span>
        ))}
      </div>
    </div>
  );
}

function TopList({
  title,
  rows,
  emptyLabel,
  formatKey,
}: {
  title: string;
  rows: DimensionRow[];
  emptyLabel: string;
  formatKey?: (key: string) => string;
}) {
  const max = Math.max(...rows.map((row) => row.pageviews), 1);

  return (
    <div className="rounded-xl border border-border-default bg-white p-5 dark:bg-card">
      <h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-text-muted">{emptyLabel}</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {rows.map((row) => {
            const label = formatKey ? formatKey(row.key) : row.key;
            return (
              <li key={row.key || "(empty)"}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate text-sm text-text-strong dark:text-foreground" title={label}>
                    {label}
                  </span>
                  <span className="shrink-0 text-sm font-semibold tabular-nums text-text-strong dark:text-foreground">
                    {formatNumber(row.pageviews)}
                  </span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-brand-gold-tint-2 dark:bg-brand-gold/20">
                  <div
                    className="h-full rounded-full bg-brand-gold-dark dark:bg-brand-gold"
                    style={{ width: `${(row.pageviews / max) * 100}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function SetupNotice() {
  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-border-default bg-white p-6 dark:bg-card">
      <h2 className="text-lg font-bold text-text-strong dark:text-foreground">
        Chưa kết nối Vercel Analytics
      </h2>
      <p className="mt-3 text-sm text-text-muted">
        Trang này cần các biến môi trường sau (thêm trong Vercel → Settings → Environment
        Variables, sau đó redeploy):
      </p>
      <ul className="mt-4 space-y-2 text-sm text-text-strong dark:text-foreground">
        <li>
          <code className="rounded bg-brand-gold-tint px-1.5 py-0.5 dark:bg-brand-gold/15">VERCEL_ANALYTICS_TOKEN</code>{" "}
          – access token tạo tại vercel.com/account/settings/tokens
        </li>
        <li>
          <code className="rounded bg-brand-gold-tint px-1.5 py-0.5 dark:bg-brand-gold/15">VERCEL_ANALYTICS_PROJECT_ID</code>{" "}
          – Project ID trong Settings → General của project
        </li>
        <li>
          <code className="rounded bg-brand-gold-tint px-1.5 py-0.5 dark:bg-brand-gold/15">VERCEL_ANALYTICS_TEAM_ID</code>{" "}
          – (tuỳ chọn) chỉ cần nếu project thuộc team
        </li>
      </ul>
    </div>
  );
}

export default async function StatsPage() {
  const username = await getCurrentUsername();
  if (!username) redirect("/login?next=/thong-ke");

  const configured = isAnalyticsConfigured();

  let daily: DailyVisitRow[] = [];
  let topPages: DimensionRow[] = [];
  let topReferrers: DimensionRow[] = [];
  let topCountries: DimensionRow[] = [];
  let devices: DimensionRow[] = [];
  let totals: { pageviews: number; visitors: number } | null = null;
  let loadError: string | null = null;

  if (configured) {
    const until = new Date();
    const since = new Date(until.getTime() - (RANGE_DAYS - 1) * 24 * 60 * 60 * 1000);
    const sinceParam = toDateParam(since);
    const untilParam = toDateParam(until);

    const [dailyRes, pagesRes, referrersRes, countriesRes, devicesRes, totalsRes] =
      await Promise.allSettled([
        getDailyVisits(sinceParam, untilParam),
        getTopByDimension("requestPath", sinceParam, untilParam, 10),
        getTopByDimension("referrerHostname", sinceParam, untilParam, 10),
        getTopByDimension("country", sinceParam, untilParam, 8),
        getTopByDimension("deviceType", sinceParam, untilParam, 5),
        getVisitTotals(sinceParam, untilParam),
      ]);

    if (dailyRes.status === "fulfilled") daily = dailyRes.value;
    else loadError = dailyRes.reason instanceof Error ? dailyRes.reason.message : String(dailyRes.reason);

    if (pagesRes.status === "fulfilled") topPages = pagesRes.value;
    if (referrersRes.status === "fulfilled") topReferrers = referrersRes.value;
    if (countriesRes.status === "fulfilled") topCountries = countriesRes.value;
    if (devicesRes.status === "fulfilled") devices = devicesRes.value;

    if (totalsRes.status === "fulfilled") {
      totals = totalsRes.value;
    } else if (daily.length > 0) {
      totals = {
        pageviews: daily.reduce((sum, row) => sum + row.pageviews, 0),
        visitors: daily.reduce((sum, row) => sum + row.visitors, 0),
      };
    }
  }

  const totalPageviews = totals?.pageviews ?? 0;
  const activeDays = Math.max(daily.length, 1);
  const peak = daily.reduce(
    (best, row) => (row.pageviews > best.pageviews ? row : best),
    { timestamp: "", pageviews: 0, visitors: 0 } as DailyVisitRow,
  );

  return (
    <>
      <Header />
      <main className="flex-1" style={{ paddingTop: "var(--header-height)" }}>
        <section className="py-10 lg:py-14">
          <div className="dvag-container">
            <header className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
                Thống kê
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-strong dark:text-foreground sm:text-4xl">
                Lượt truy cập website
              </h1>
              <p className="mt-3 text-sm text-text-muted sm:text-base">
                Số liệu {RANGE_DAYS} ngày gần nhất, cập nhật mỗi 5 phút từ Vercel Web Analytics.
              </p>
            </header>

            {!configured ? (
              <div className="mt-10">
                <SetupNotice />
              </div>
            ) : loadError ? (
              <div className="mt-10 rounded-xl border border-brand-red/30 bg-brand-red-tint p-6">
                <p className="text-sm font-bold text-brand-red">Không tải được số liệu.</p>
                <p className="mt-2 break-all text-xs text-text-muted">{loadError}</p>
                <p className="mt-3 text-sm text-text-muted">
                  Kiểm tra lại VERCEL_ANALYTICS_TOKEN / VERCEL_ANALYTICS_PROJECT_ID. Nếu lỗi 403,
                  thêm VERCEL_ANALYTICS_TEAM_ID.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  <StatTile label="Tổng lượt xem" value={formatNumber(totalPageviews)} />
                  <StatTile label="Khách truy cập" value={formatNumber(totals?.visitors ?? 0)} />
                  <StatTile
                    label="Lượt xem / ngày"
                    value={formatNumber(Math.round(totalPageviews / activeDays))}
                    hint="trung bình"
                  />
                  <StatTile
                    label="Ngày cao nhất"
                    value={peak.pageviews > 0 ? formatNumber(peak.pageviews) : "–"}
                    hint={peak.pageviews > 0 ? `ngày ${formatDayLabel(peak.timestamp)}` : undefined}
                  />
                </div>

                <div className="mt-6 rounded-xl border border-border-default bg-white p-5 dark:bg-card">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                    Lượt xem trang theo ngày
                  </h2>
                  <DailyChart rows={daily} />
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <TopList
                    title="Trang được xem nhiều"
                    rows={topPages}
                    emptyLabel="Chưa có dữ liệu."
                  />
                  <TopList
                    title="Nguồn truy cập"
                    rows={topReferrers}
                    emptyLabel="Chưa có dữ liệu."
                    formatKey={(key) => (key ? key : "Truy cập trực tiếp")}
                  />
                  <TopList
                    title="Quốc gia"
                    rows={topCountries}
                    emptyLabel="Chưa có dữ liệu."
                    formatKey={regionName}
                  />
                  <TopList
                    title="Thiết bị"
                    rows={devices}
                    emptyLabel="Chưa có dữ liệu."
                    formatKey={(key) => DEVICE_LABELS[key] ?? (key || "Không rõ")}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
