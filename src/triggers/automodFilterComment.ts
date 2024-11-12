import {AutomoderatorFilterComment} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

export async function onAutomodFilterComment (event: AutomoderatorFilterComment, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const automodFilterCommentTrigger = Devvit.addTrigger({
    event: "AutomoderatorFilterComment",
    onEvent: onAutomodFilterComment,
});
