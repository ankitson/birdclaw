import { describe, expect, it } from "vitest";
import {
	formatCompactNumber,
	formatShortTimestamp,
	getInitials,
	tweetUrl,
} from "./present";

describe("present helpers", () => {
	it("formats compact counts, short timestamps, and initials", () => {
		expect(formatCompactNumber(12_300)).toBe("12K");
		const currentYear = new Date().getFullYear();
		const thisYearNoon = new Date(currentYear, 2, 8, 12, 0, 0).toISOString();
		expect(formatShortTimestamp(thisYearNoon)).toBe("Mar 8, 12:00 PM");
		expect(getInitials("Sam Altman")).toBe("SA");
		expect(getInitials("A")).toBe("A");
		expect(getInitials(" Sam")).toBe("S");
	});

	it("includes the year when the timestamp is not the current year", () => {
		const priorYear = new Date().getFullYear() - 1;
		const priorYearNoon = new Date(priorYear, 2, 8, 12, 0, 0).toISOString();
		expect(formatShortTimestamp(priorYearNoon)).toBe(
			`Mar 8, ${priorYear}, 12:00 PM`,
		);
	});

	it("builds a canonical X status url", () => {
		expect(tweetUrl("jack", "20")).toBe("https://x.com/jack/status/20");
	});
});
