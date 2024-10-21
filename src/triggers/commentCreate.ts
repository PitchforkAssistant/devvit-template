import {CommentCreate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "CommentCreate" trigger fires after a comment has been successfully created and passed the various sitewide safety checks.
 * This trigger usually fires several seconds after the "CommentSubmit" trigger.
 */

export async function onCommentCreate (event: CommentCreate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const commentCreateTrigger = Devvit.addTrigger({
    event: "CommentCreate",
    onEvent: onCommentCreate,
});
