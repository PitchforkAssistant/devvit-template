import {AppUpgrade} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";
import {onAppChanged} from "./appChanged.js";

/**
 * The "AppUpgrade" event fires after the app has been upgraded to a new version.
 * You could use this trigger to migrate existing stored data or adjust the schedule of recurring jobs. We're doing the latter in this example by calling onAppChanged, which is also called from onAppInstall.
 */
export async function onAppUpgrade (event: AppUpgrade, context: TriggerContext) {
    await onAnyTriggerConsoleLog(event, context);
    await onAppChanged(event, context);
}

export const appUpgradeTrigger = Devvit.addTrigger({
    event: "AppUpgrade",
    onEvent: onAppUpgrade,
});
