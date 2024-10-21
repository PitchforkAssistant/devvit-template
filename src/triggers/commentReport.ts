import {CommentReport} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "CommentReport" trigger fires every time a comment is reported.
 */

export async function onCommentReport (event: CommentReport, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const commentReportTrigger = Devvit.addTrigger({
    event: "CommentReport",
    onEvent: onCommentReport,
});
