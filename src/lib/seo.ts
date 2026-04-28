import type { Metadata } from "next";

export function marketingMetadata({
  title,
  description,
  canonical
}: {
  title: string;
  description: string;
  canonical?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

