export function isUnlocked() {
  const now = new Date();
  const releaseDate = new Date("2026-06-26T00:00:00");

  // allow manual testing
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === "true") return true;
  }

  return now >= releaseDate;
}