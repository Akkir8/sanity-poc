"use client";
import { Button } from "@/components/ui/button";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import Link from "next/link";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <Button asChild>
      <Link href="/api/draft-mode/disable" className="fixed bottom-4 right-4">
        Disable Draft Mode
      </Link>
    </Button>
  );
}
