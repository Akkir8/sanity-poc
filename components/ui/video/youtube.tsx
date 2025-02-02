"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import { useRef } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Youtube({
  title,
  videoId,
}: Partial<{
  title: string;
  videoId: any;
}>) {
  const ref = useRef(null);
  return (
    <div className="w-full" ref={ref}>
      <div className="max-w-3xl w-full mx-auto">
        {title}
        <div className="aspect-video">
          <YouTubeEmbed videoid={videoId} params="rel=0" />
        </div>
      </div>
    </div>
  );
}
