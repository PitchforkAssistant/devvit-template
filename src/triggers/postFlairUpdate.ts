import {PostFlairUpdate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "PostFlairUpdate" trigger fires after a post's flair has been changed.
 * This trigger fires both when the author changes the flair and when a moderator changes the flair.
 * Use the event.author property to determine the author of the flair change (not the author of the post).
 */

export async function onPostFlairUpdate (event: PostFlairUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postFlairUpdateTrigger = Devvit.addTrigger({
    event: "PostFlairUpdate",
    onEvent: onPostFlairUpdate,
});
