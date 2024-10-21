import {CommentUpdate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "CommentUpdate" trigger fires after a comment has been edited.
 */

export async function onCommentUpdate (event: CommentUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const commentUpdateTrigger = Devvit.addTrigger({
    event: "CommentUpdate",
    onEvent: onCommentUpdate,
});
