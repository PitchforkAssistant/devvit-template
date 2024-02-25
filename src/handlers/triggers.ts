import {
    AppInstall, AppUpgrade, ModAction, ModMail,
    PostSubmit, PostCreate, PostUpdate, PostDelete, PostReport, PostFlairUpdate,
    CommentSubmit, CommentCreate, CommentUpdate, CommentDelete, CommentReport,
} from "@devvit/protos";
import {TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog, startSingletonJob} from "devvit-helpers";

// Post Triggers

export async function onPostSubmit (event: PostSubmit, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostCreate (event: PostCreate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostUpdate (event: PostUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostDelete (event: PostDelete, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostReport (event: PostReport, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostFlairUpdate (event: PostFlairUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// Comment Triggers

export async function onCommentSubmit (event: CommentSubmit, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentCreate (event: CommentCreate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentUpdate (event: CommentUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentDelete (event: CommentDelete, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentReport (event: CommentReport, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// Mod Triggers
export async function onModMail (event: ModMail, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onModAction (event: ModAction, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// All triggers above are there as examples, they all call this function that takes any trigger event and just logs it.
// I have found myself using this function a lot for figuring out how things work, so I've included it in devvit-helpers.
// export async function onAnyTriggerConsoleLog (event: OnTriggerEvent<TriggerEventType[TriggerEvent]>, context: TriggerContext) {
//     console.log(`type: ${event.type}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
// }

// App Meta Triggers

export async function onAppChanged (event: AppInstall | AppUpgrade, context: TriggerContext) {
    console.log(`onAppChanged\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
    try {
        // This function from devvit-helpers will start a job, but it terminates any other jobs with the same name first.
        await startSingletonJob(context.scheduler, "someRecurringTask", "*/5 * * * *", {});
    } catch (e) {
        console.error("Failed to schedule someRecurringTask job", e);
        throw e;
    }
}
