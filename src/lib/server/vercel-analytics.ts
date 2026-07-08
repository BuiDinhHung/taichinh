import "server-only";

const API_BASE = "https://api.vercel.com/v1/query/web-analytics";

export type DailyVisitRow = {
  timestamp: string;
  pageviews: number;
  visitors: number;
};

export type DimensionRow = {
  key: string;
  pageviews: number;
  visitors: number;
};

export type VisitTotals = {
  pageviews: number;
  visitors: number;
};

type AnalyticsConfig = {
  token: string;
  projectId: string;
  teamId?: string;
};

function getConfig(): AnalyticsConfig | null {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  const projectId =
    process.env.VERCEL_ANALYTICS_PROJECT_ID || process.env.VERCEL_PROJECT_ID;
  if (!token || !projectId) return null;
  return { token, projectId, teamId: process.env.VERCEL_ANALYTICS_TEAM_ID };
}

export function isAnalyticsConfigured(): boolean {
  return getConfig() !== null;
}

async function queryApi<T>(
  endpoint: "visits/aggregate" | "visits/count",
  params: Record<string, string>,
): Promise<T> {
  const config = getConfig();
  if (!config) throw new Error("Vercel Analytics chưa được cấu hình.");

  const search = new URLSearchParams({ projectId: config.projectId, ...params });
  if (config.teamId) search.set("teamId", config.teamId);

  const res = await fetch(`${API_BASE}/${endpoint}?${search.toString()}`, {
    headers: { Authorization: `Bearer ${config.token}` },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Vercel Analytics API ${res.status}: ${body.slice(0, 300)}`);
  }

  const json = (await res.json()) as { data: T };
  return json.data;
}

export async function getDailyVisits(since: string, until: string): Promise<DailyVisitRow[]> {
  const rows = await queryApi<DailyVisitRow[]>("visits/aggregate", {
    since,
    until,
    by: "day",
  });
  return [...rows].sort((a, b) => a.timestamp.localeCompare(b.timestamp));
}

export async function getVisitTotals(since: string, until: string): Promise<VisitTotals> {
  return queryApi<VisitTotals>("visits/count", { since, until });
}

export async function getTopByDimension(
  dimension: "requestPath" | "referrerHostname" | "country" | "deviceType",
  since: string,
  until: string,
  limit = 10,
): Promise<DimensionRow[]> {
  const rows = await queryApi<Array<Record<string, unknown>>>("visits/aggregate", {
    since,
    until,
    by: dimension,
    limit: String(limit),
  });

  return rows
    .map((row) => ({
      key: String(row[dimension] ?? ""),
      pageviews: Number(row.pageviews ?? 0),
      visitors: Number(row.visitors ?? 0),
    }))
    .sort((a, b) => b.pageviews - a.pageviews);
}
