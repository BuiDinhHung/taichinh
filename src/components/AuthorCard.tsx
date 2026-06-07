import Image from "next/image";
import { author } from "@/lib/content";

export function AuthorCard() {
  return (
    <section className="border-t border-border py-10 lg:py-14">
      <div className="tc-container">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold tracking-tight">{author.name}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{author.postCount} posts</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
