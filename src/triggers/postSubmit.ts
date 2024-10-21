import {PostSubmit} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "PostSubmit" trigger fires immediately after a user submits a post.
 * This trigger may fire before the post has been fully created and passed the various sitewide safety checks. Consider using "PostCreate" instead.
 */

export async function onPostSubmit (event: PostSubmit, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postSubmitTrigger = Devvit.addTrigger({
    event: "PostSubmit",
    onEvent: onPostSubmit,
});
