export function formatCompactNumber(value: number) {
	return new Intl.NumberFormat("en", { notation: "compact" }).format(value);
}

export function formatShortTimestamp(value: string) {
	const date = new Date(value);
	// Only surface the year when it differs from the current one, so recent
	// items stay compact while older ones aren't ambiguous.
	const includeYear = date.getFullYear() !== new Date().getFullYear();
	return new Intl.DateTimeFormat("en", {
		hour: "numeric",
		minute: "2-digit",
		month: "short",
		day: "numeric",
		...(includeYear ? { year: "numeric" } : {}),
	}).format(date);
}

export function tweetUrl(handle: string, tweetId: string) {
	return `https://x.com/${handle}/status/${tweetId}`;
}

export function getInitials(value: string) {
	return value
		.split(" ")
		.map((part) => part[0] ?? "")
		.join("")
		.slice(0, 2);
}
