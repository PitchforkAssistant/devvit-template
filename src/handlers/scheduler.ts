import {TriggerContext, ScheduledJobEvent} from "@devvit/public-api";

export async function someRecurringTask (event: ScheduledJobEvent<undefined>, context: TriggerContext) {
    console.log(`someRecurringTask job ran at ${new Date().toISOString()}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
}
