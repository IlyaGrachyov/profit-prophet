import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://metaproductai.profi-soft.kz";
const DEFAULT_OG = `${SITE_URL}/og-image.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/whatsapp-cloud". Used for canonical + og:url. */
  path: string;
  image?: string;
}

/** Per-page SEO head tags: title, description, canonical, Open Graph, Twitter. */
const Seo = ({ title, description, path, image = DEFAULT_OG }: SeoProps) => {
  const url = `${SITE_URL}${path}`;

  // Belt-and-suspenders: set the tab title directly so client-side navigation
  // always updates it immediately, independent of react-helmet-async's
  // requestAnimationFrame-based commit. (Helmet still owns the full head and
  // the build-time prerender.)
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="WhatsApp Cloud Kazakhstan" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
