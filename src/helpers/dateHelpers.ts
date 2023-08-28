
export function isValidDate (date: Date): boolean {
    return !isNaN(date.getTime());
}

export function getTimeDeltaInSeconds (a: Date, b: Date): number {
    if (isValidDate(a) && isValidDate(b)) {
        return Math.abs(a.getTime() - b.getTime()) / 1000;
    }
    return Infinity;
}
