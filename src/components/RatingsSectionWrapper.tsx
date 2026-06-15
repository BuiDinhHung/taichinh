import { ratingMocks } from "@/lib/content";
import { getReviews } from "@/lib/server/reviews";
import { RatingsSectionClient } from "@/components/RatingsSection";

export async function RatingsSection() {
  const customRatings = await getReviews();
  const ratings = [...customRatings, ...ratingMocks];
  return <RatingsSectionClient ratings={ratings} />;
}
