import {PostNsfwUpdate} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

export async function onPostNsfwUpdate (event: PostNsfwUpdate, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const postNsfwUpdateTrigger = Devvit.addTrigger({
    event: "PostNsfwUpdate",
    onEvent: onPostNsfwUpdate,
});
