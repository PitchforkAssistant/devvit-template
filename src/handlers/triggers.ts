import {
    AppInstall, AppUpgrade, ModAction, ModMail,
    PostSubmit, PostCreate, PostUpdate, PostDelete, PostReport, PostFlairUpdate,
    CommentSubmit, CommentCreate, CommentUpdate, CommentDelete, CommentReport,
} from "@devvit/protos";
import {TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog, startSingletonJob} from "devvit-helpers";

// ! If you end up using multiple triggers with long handler functions, you may want to split them into separate files for ease of editing.

// #region Post Triggers
/**
 * The "PostSubmit" trigger fires immediately after a user submits a post.
 * This trigger may fire before the post has been fully created and passed the various sitewide safety checks. Consider using "PostCreate" instead.
 */
export async function onPostSubmit (event: PostSubmit, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "PostCreate" trigger fires after a post has been successfully created and passed the various sitewide safety checks.
 * This trigger usually fires several seconds later than the "PostSubmit" trigger.
 */
export async function onPostCreate (event: PostCreate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "PostUpdate" trigger fires after a post has been edited.
 */
export async function onPostUpdate (event: PostUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "PostDelete" trigger fires after a post has been deleted or removed.
 * You will want to check the event.source and event.reason properties to determine if the post was deleted or removed and why.
 */
export async function onPostDelete (event: PostDelete, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "PostReport" trigger fires every time a post is reported
 */
export async function onPostReport (event: PostReport, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "PostFlairUpdate" trigger fires after a post's flair has been changed.
 * This trigger fires both when the author changes the flair and when a moderator changes the flair.
 * Use the event.author property to determine the author of the flair change (not the author of the post).
 */
export async function onPostFlairUpdate (event: PostFlairUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}
// #endregion

// #region Comment Triggers
/**
 * The "CommentSubmit" trigger fires immediately after a user submits a comment.
 * The comment may not be fully created yet and the sitewide safety checks may not have been completed. Consider using "CommentCreate" instead.
 */
export async function onCommentSubmit (event: CommentSubmit, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "CommentCreate" trigger fires after a comment has been successfully created and passed the various sitewide safety checks.
 * This trigger usually fires several seconds after the "CommentSubmit" trigger.
 */
export async function onCommentCreate (event: CommentCreate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "CommentUpdate" trigger fires after a comment has been edited.
 */
export async function onCommentUpdate (event: CommentUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "CommentDelete" trigger fires after a comment has been deleted or removed.
 * You will want to check the event.source and event.reason properties to determine if the comment was deleted or removed and why.
 */
export async function onCommentDelete (event: CommentDelete, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "CommentReport" trigger fires every time a comment is reported.
 */
export async function onCommentReport (event: CommentReport, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}
// #endregion

// #region Mod Triggers
/**
 * The "ModMail" trigger fires every time a modmail message is sent or received.
 * This trigger fires for both new modmail messages and replies to existing modmail threads.
 * You'll probably want to use context.reddit.modMail.getConversation({conversationId:event.conversationId}) to get the full conversation.
 */
export async function onModMail (event: ModMail, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

/**
 * The "ModAction" trigger fires for every new entry in the subreddit's moderation log.
 * Some of the normal limitations of the modlog apply here (such as some automod actions not being logged).
 * Actions taken by the app itself will also be logged here, you may want to ignore those to avoid infinite loops.
 */
export async function onModAction (event: ModAction, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}
// #endregion

// All triggers above are there as examples, they all call another function that takes any trigger event and just logs it.
// I have found myself using this function a lot for figuring out how things work, so I've included it in devvit-helpers.
// The simplified version of the function is below, but the one in devvit-helpers also splits the strings into multiple logs if they're too long.
// export async function onAnyTriggerConsoleLog (event: OnTriggerEvent<TriggerEventType[TriggerEvent]>, context: TriggerContext) {
//     console.log(`type: ${event.type}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
// }

// #region App Meta Triggers
/**
 * This function accepts both the "AppInstall" and "AppUpgrade" events.
 * You could use these trigger separately too. For example, you could send a welcome message to new users on install and migrate existing stored data on upgrade.
 * In this example, we're just scheduling a recurring job. You only really need to do this once, but doing it again in AppUpgrade will let you adjust the schedule if needed.
 */
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
// #endregion
