import {Context, ScheduledJobEvent} from "@devvit/public-api";

export async function someRecurringTask (event: ScheduledJobEvent, context: Context) {
    console.log(`someRecurringTask job ran at ${new Date().toISOString()}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
}
