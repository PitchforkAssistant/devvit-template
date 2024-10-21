import {ModMail} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";

/**
 * The "ModMail" trigger fires every time a modmail message is sent or received.
 * This trigger fires for both new modmail messages and replies to existing modmail threads.
 * You'll probably want to use context.reddit.modMail.getConversation({conversationId:event.conversationId}) to get the full conversation.
 */

export async function onModMail (event: ModMail, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

export const modMailTrigger = Devvit.addTrigger({
    event: "ModMail",
    onEvent: onModMail,
});
