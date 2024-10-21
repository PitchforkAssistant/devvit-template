import {CommentDelete} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "CommentDelete" trigger fires after a comment has been deleted or removed.
 * You will want to check the event.source and event.reason properties to determine if the comment was deleted or removed and why.
 */

export async function onCommentDelete (event: CommentDelete, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const commentDeleteTrigger = Devvit.addTrigger({
    event: "CommentDelete",
    onEvent: onCommentDelete,
});
