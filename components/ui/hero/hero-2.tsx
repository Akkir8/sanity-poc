"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { urlFor } from "@/sanity/lib/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Hero2({
  title,
  body,
  links,
  image,
}: Partial<{
  tagLine: string;
  title: string;
  body: any;
  image: Sanity.Image;
  links: {
    title: string;
    href: string;
    target?: boolean;
    buttonVariant:
      | "default"
      | "secondary"
      | "link"
      | "destructive"
      | "outline"
      | "ghost"
      | null
      | undefined;
  }[];
}>) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative h-screen w-full" ref={ref}>
      {image && image.asset?._id && (
        <img
          className="absolute inset-0 w-full h-full object-cover filter"
          src={urlFor(image.asset).url()}
          alt={image.alt || ""}
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {title && (
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
              }
            }
            transition={{
              delay: 0.1,
              duration: 0.4,
              ease: [0.21, 0.45, 0.27, 0.9],
            }}
            className="text-4xl text-white font-bold"
          >
            {title}
          </motion.h2>
        )}
        {body && (
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
              }
            }
            transition={{
              delay: 0.2,
              duration: 0.4,
              ease: [0.21, 0.45, 0.27, 0.9],
            }}
            className="text-xl text-white mt-4"
          >
            <PortableTextRenderer value={body} />
          </motion.p>
        )}
        {links && links.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
              }
            }
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            {links.map((link) => (
              <Button
                key={link.title}
                variant={stegaClean(link?.buttonVariant)}
                asChild
              >
                <Link
                  href={link.href as string}
                  target={link.target ? "_blank" : undefined}
                  rel={link.target ? "noopener" : undefined}
                >
                  {link.title}
                </Link>
              </Button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
