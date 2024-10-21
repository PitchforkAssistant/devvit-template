import {PostUpdate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "PostUpdate" trigger fires after a post has been edited.
 */

export async function onPostUpdate (event: PostUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postUpdateTrigger = Devvit.addTrigger({
    event: "PostUpdate",
    onEvent: onPostUpdate,
});
