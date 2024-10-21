import {CommentSubmit} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "CommentSubmit" trigger fires immediately after a user submits a comment.
 * The comment may not be fully created yet and the sitewide safety checks may not have been completed. Consider using "CommentCreate" instead.
 */

export async function onCommentSubmit (event: CommentSubmit, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const commentSubmitTrigger = Devvit.addTrigger({
    event: "CommentSubmit",
    onEvent: onCommentSubmit,
});
