import {ModAction} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "ModAction" trigger fires for every new entry in the subreddit's moderation log.
 * Some of the normal limitations of the modlog apply here (such as some automod actions not being logged).
 * Actions taken by the app itself will also be logged here, you may want to ignore those to avoid infinite loops.
 */

export async function onModAction (event: ModAction, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const modActionTrigger = Devvit.addTrigger({
    event: "ModAction",
    onEvent: onModAction,
});
