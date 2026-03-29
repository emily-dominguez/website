export function buildProjectDetailUrl(slug) {
  const base = process.env.PUBLIC_URL || "";
  return `${window.location.origin}${base}/#/project/${slug}`;
}
