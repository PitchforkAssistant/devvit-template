import {PostDelete} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "PostDelete" trigger fires after a post has been deleted or removed.
 * You will want to check the event.source and event.reason properties to determine if the post was deleted or removed and why.
 */

export async function onPostDelete (event: PostDelete, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postDeleteTrigger = Devvit.addTrigger({
    event: "PostDelete",
    onEvent: onPostDelete,
});
