import Image from "next/image";
import PostDate from "./date";
import { urlFor } from "@/sanity/lib/image";

export default function PostHero({
  title,
  author,
  image,
  _createdAt,
}: Partial<{
  title: string;
  author: Sanity.Author;
  excerpt: string;
  image: Sanity.Image;
  slug: { current: string };
  _createdAt: string;
}>) {
  return (
    <>
      {title && <h1 className="mb-4 md:mb-6 text-3xl lg:text-5xl">{title}</h1>}
      {image && image.asset?._id && (
        <div className="my-4 md:my-6 rounded-2xl overflow-hidden">
          <Image
            src={urlFor(image).auto("format").fit("max").quality(100).url()}
            alt={image.alt || ""}
            placeholder="blur"
            blurDataURL={image.asset?.metadata?.lqip || undefined}
            width={image.asset?.metadata?.dimensions?.width || 1200}
            height={image?.asset?.metadata?.dimensions?.height || 630}
            quality={100}
          />
        </div>
      )}
      <div className="flex items-center justify-between gap-2 text-sm md:text-base">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center gap-2">
            {author?.image && author.image.asset?._id && (
              <div className="relative w-6 h-6 md:w-10 md:h-10">
                <Image
                  src={urlFor(author.image).url()}
                  alt={author.image.alt ? author.image.alt : ""}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                  blurDataURL={author.image.asset?.metadata?.lqip || undefined}
                  sizes="40px"
                  className="w-10 h-10 rounded-full mr-2"
                />
              </div>
            )}
            {author?.name && <div>{author.name}</div>}
            <div className="hidden md:block">•</div>
          </div>
          <PostDate date={_createdAt as string} />
        </div>
      </div>
      <hr className="my-4 md:my-6 border-primary/30" />
    </>
  );
}
