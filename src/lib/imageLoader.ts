// Static export (GitHub Pages) has no image optimizer, so this loader just
// prefixes local asset paths with the site's base path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  return `${basePath}${src}`;
}
