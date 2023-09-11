import {
    AppInstall, AppUpgrade, ModAction, ModMail,
    PostSubmit, PostCreate, PostUpdate, PostDelete, PostReport, PostFlairUpdate,
    CommentSubmit, CommentCreate, CommentUpdate, CommentDelete, CommentReport,
} from "@devvit/protos";
import {TriggerContext, OnTriggerEvent} from "@devvit/public-api";
import {onAnyTriggerConsoleLog, startSingletonJob} from "devvit-helpers";

// Post Triggers

export async function onPostSubmit (event: OnTriggerEvent<PostSubmit>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostCreate (event: OnTriggerEvent<PostCreate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostUpdate (event: OnTriggerEvent<PostUpdate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostDelete (event: OnTriggerEvent<PostDelete>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostReport (event: OnTriggerEvent<PostReport>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onPostFlairUpdate (event: OnTriggerEvent<PostFlairUpdate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// Comment Triggers

export async function onCommentSubmit (event: OnTriggerEvent<CommentSubmit>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentCreate (event: OnTriggerEvent<CommentCreate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentUpdate (event: OnTriggerEvent<CommentUpdate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentDelete (event: OnTriggerEvent<CommentDelete>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onCommentReport (event: OnTriggerEvent<CommentReport>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// Mod Triggers
export async function onModMail (event: OnTriggerEvent<ModMail>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export async function onModAction (event: OnTriggerEvent<ModAction>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// All triggers above are there as examples, they all call this function that takes any trigger event and just logs it.
// I have found myself using this function a lot for figuring out how things work, so I've included it in devvit-helpers.
// export async function onAnyTriggerConsoleLog (event: OnTriggerEvent<TriggerEventType[TriggerEvent]>, context: TriggerContext) {
//     console.log(`type: ${event.type}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
// }

// App Meta Triggers

export async function onAppChanged (event: OnTriggerEvent<AppInstall | AppUpgrade>, context: TriggerContext) {
    console.log(`onAppChanged\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
    try {
        // This function from devvit-helpers will start a job, but it terminates any other jobs with the same name first.
        await startSingletonJob(context.scheduler, "someRecurringTask", "*/5 * * * *", {});
    } catch (e) {
        console.error("Failed to schedule someRecurringTask job", e);
        throw e;
    }
}
