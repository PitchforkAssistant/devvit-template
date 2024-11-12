import {PostSpoilerUpdate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

export async function onPostSpoilerUpdate (event: PostSpoilerUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postSpoilerUpdateTrigger = Devvit.addTrigger({
    event: "PostSpoilerUpdate",
    onEvent: onPostSpoilerUpdate,
});
