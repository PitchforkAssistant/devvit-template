import {AutomoderatorFilterPost} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

export async function onAutomodFilterComment (event: AutomoderatorFilterPost, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const automodFilterPostTrigger = Devvit.addTrigger({
    event: "AutomoderatorFilterPost",
    onEvent: onAutomodFilterComment,
});
