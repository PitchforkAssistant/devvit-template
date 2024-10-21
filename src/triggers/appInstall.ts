import {AppInstall} from "@devvit/protos";
import {Devvit, TriggerContext} from "@devvit/public-api";
import {onAnyTriggerConsoleLog} from "devvit-helpers";
import {onAppChanged} from "./appChanged.js";

/**
 * The "AppInstall" event fires after the app has been upgraded to a new version.
 * You could use this trigger to set up the app, send a setup guide to the installer or adjust the schedule of recurring jobs. We're doing the latter in this example by calling onAppChanged, which is also called from onAppUpgrade.
 */

export async function onAppInstall (event: AppInstall, context: TriggerContext) {
    await onAnyTriggerConsoleLog(event, context);
    await onAppChanged(event, context);
}

export const appInstallTrigger = Devvit.addTrigger({
    event: "AppInstall",
    onEvent: onAppInstall,
});
