import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type StoredReview = {
  name: string;
  location: string;
  stars: number;
  date: string;
  body: string;
};

const reviewsPath = path.join(process.cwd(), "data", "reviews.json");

function cleanText(value: FormDataEntryValue | null, fallback = "") {
  return String(value ?? fallback)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
}

function cleanStars(value: FormDataEntryValue | null) {
  const stars = Number(value);
  if (!Number.isFinite(stars)) return 5;
  return Math.min(5, Math.max(1, Math.round(stars)));
}

export async function getReviews(): Promise<StoredReview[]> {
  try {
    const raw = await readFile(reviewsPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, 20) : [];
  } catch {
    return [];
  }
}

export async function addReview(form: FormData) {
  const body = cleanText(form.get("body"));
  if (!body) return;

  const review: StoredReview = {
    name: cleanText(form.get("name"), "Khách hàng") || "Khách hàng",
    location: cleanText(form.get("location"), "Đức") || "Đức",
    stars: cleanStars(form.get("stars")),
    date: "vừa xong",
    body,
  };

  const current = await getReviews();
  const next = [review, ...current].slice(0, 50);

  await mkdir(path.dirname(reviewsPath), { recursive: true });
  await writeFile(reviewsPath, JSON.stringify(next, null, 2), "utf8");
}
