import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Shivdhara Securities | Premier Financial Services & Advisory",
  description = "Shivdhara Securities offers expert financial advisory, equity trading, mutual funds, and wealth management services to help you achieve your financial goals.",
  ogImage = "/images/og-image.jpg",
  noIndex = false,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
        },
      ],
      type: "website",
      siteName: "Shivdhara Securities",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@shivdharasec",
    },
    icons: {
      icon: "/icons/favicon.png",
      shortcut: "/icons/favicon.png",
      apple: "/icons/favicon.png",
    },
    metadataBase: new URL("https://shivdharasecurities.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
