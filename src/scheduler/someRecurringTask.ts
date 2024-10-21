import {TriggerContext, ScheduledJobEvent, Devvit} from "@devvit/public-api";

export async function onSomeRecurringTask (event: ScheduledJobEvent<undefined>, context: TriggerContext) {
    console.log(`someRecurringTask job ran at ${new Date().toISOString()}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
}

export const someRecurringTask = Devvit.addSchedulerJob({
    name: "someRecurringTask",
    onRun: onSomeRecurringTask,
});
