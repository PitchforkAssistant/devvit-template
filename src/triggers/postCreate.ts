import {PostCreate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "PostCreate" trigger fires after a post has been successfully created and passed the various sitewide safety checks.
 * This trigger usually fires several seconds later than the "PostSubmit" trigger.
 */

export async function onPostCreate (event: PostCreate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postCreateTrigger = Devvit.addTrigger({
    event: "PostCreate",
    onEvent: onPostCreate,
});
