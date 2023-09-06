import {
    AppInstall, AppUpgrade, ModAction, ModMail,
    PostSubmit, PostCreate, PostUpdate, PostDelete, PostReport, PostFlairUpdate,
    CommentSubmit, CommentCreate, CommentUpdate, CommentDelete, CommentReport,
} from "@devvit/protos";
import {TriggerContext, OnTriggerEvent, TriggerEventType, TriggerEvent} from "@devvit/public-api";

// Post Triggers

export async function onPostSubmit (event: OnTriggerEvent<PostSubmit>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onPostCreate (event: OnTriggerEvent<PostCreate>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onPostUpdate (event: OnTriggerEvent<PostUpdate>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onPostDelete (event: OnTriggerEvent<PostDelete>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onPostReport (event: OnTriggerEvent<PostReport>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onPostFlairUpdate (event: OnTriggerEvent<PostFlairUpdate>, context: TriggerContext) {
    return onTrigger(event, context);
}

// Comment Triggers

export async function onCommentSubmit (event: OnTriggerEvent<CommentSubmit>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onCommentCreate (event: OnTriggerEvent<CommentCreate>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onCommentUpdate (event: OnTriggerEvent<CommentUpdate>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onCommentDelete (event: OnTriggerEvent<CommentDelete>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onCommentReport (event: OnTriggerEvent<CommentReport>, context: TriggerContext) {
    return onTrigger(event, context);
}

// Mod Triggers
export async function onModMail (event: OnTriggerEvent<ModMail>, context: TriggerContext) {
    return onTrigger(event, context);
}

export async function onModAction (event: OnTriggerEvent<ModAction>, context: TriggerContext) {
    return onTrigger(event, context);
}

// All triggers above are there as examples, they all call this function that takes any trigger event.

export async function onTrigger (event: OnTriggerEvent<TriggerEventType[TriggerEvent]>, context: TriggerContext) {
    console.log(`type: ${event.type}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
}

// App Meta Triggers

export async function onAppChanged (event: OnTriggerEvent<AppInstall | AppUpgrade>, context: TriggerContext) {
    console.log(`onAppChanged\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
    try {
        // Cancel any existing jobs.
        // This lets us update the job scheduling with app updates.
        // It also prevents multiple jobs from running at the same time if the app is upgraded.
        console.log("Clearing existing someRecurringTask jobs");
        const scheduledJobs = await context.scheduler.listJobs();
        for (const job of scheduledJobs) {
            if (job.name === "someRecurringTask") {
                console.log(`Cancelling someRecurringTask job ${job.id}`);
                await context.scheduler.cancelJob(job.id);
            }
        }

        // Schedule a new someRecurringTask job for every 5 minutes.
        console.log("Scheduling new someRecurringTask job");
        const newJob = await context.scheduler.runJob({cron: "*/5 * * * *", name: "someRecurringTask", data: {}});
        console.log(`New someRecurringTask job scheduled ${newJob}`);
    } catch (e) {
        console.error("Failed to schedule someRecurringTask job", e);
        throw e;
    }
}
