
export function domainFromUrlString (urlString: string): string {
    try {
        const url = new URL(urlString);
        return url.hostname;
    } catch (error) {
        return "";
    }
}

export function toNumberOrDefault (input: unknown, defaultValue: number): number {
    try {
        const value = Number(input);
        return isNaN(value) ? defaultValue : value;
    } catch (error) {
        return defaultValue;
    }
}
