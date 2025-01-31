import Link from "next/link";
import { LAYOUT_QUERYResult } from "@/sanity/types";
import { useCallback } from "react";

type Props = {
  navItems: LAYOUT_QUERYResult;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function DesktopNav({ navItems }: Props) {
  const renderLinks = useCallback(() => {
    return navItems?.menu?.links?.map((link: any) => {
      if (link._type === "linkExternal") {
        return (
          <div
            className="hidden xl:flex items-center gap-7 text-primary"
            key={link._key}
          >
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-lg"
              href={link.url == null ? "/" : link.url}
              rel="noreferrer"
              target={link.newWindow ? "_blank" : "_self"}
            >
              {link.title}
            </a>
          </div>
        );
      }
      if (link._type === "linkInternal") {
        if (!link?.slug) {
          return null;
        }

        return (
          <div
            className="hidden xl:flex items-center gap-7 text-primary"
            key={link._key}
          >
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-lg"
              href={link.slug}
            >
              {link.title}
            </Link>
          </div>
        );
      }

      return null;
    });
  }, [navItems]);

  return (
    <div className="hidden xl:flex items-center gap-7 text-primary">
      {renderLinks()}
    </div>
  );
}
