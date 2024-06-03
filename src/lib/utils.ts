export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

let cachedMetaUrl: URL;
export function getMetaUrl(title: string, pubDate: Date) {
  const formattedDAte = pubDate
    .toLocaleString("en-US", { dateStyle: "medium" })
    .replace(/,/g, "");

  if (cachedMetaUrl) {
    cachedMetaUrl.searchParams.set(
      "vars",
      `title:${title},date:${formattedDAte}`,
    );
    return cachedMetaUrl.href;
  }

  cachedMetaUrl = new URL(
    "https://og.wyte.space/api/v1/images/trulyao/preview",
  );
  cachedMetaUrl.searchParams.append("variant", "blog");
  cachedMetaUrl.searchParams.append("style", "blog");
  cachedMetaUrl.searchParams.append("size", "medium");
  cachedMetaUrl.searchParams.append(
    "vars",
    `title:${title},date:${formattedDAte}`,
  );

  return cachedMetaUrl.href;
}
