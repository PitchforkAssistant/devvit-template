import {AppInstall, AppUpgrade} from "@devvit/protos";
import {TriggerContext} from "@devvit/public-api";
import {startSingletonJob} from "devvit-helpers";

/**
 * This function accepts both the "AppInstall" and "AppUpgrade" events.
 * You could use these trigger separately too. For example, you could send a welcome message to new users on install and migrate existing stored data on upgrade.
 * In this example, we're just scheduling a recurring job. You only really need to do this once, but doing it again in AppUpgrade will let you adjust the schedule if needed.
 */

export async function onAppChanged (event: AppInstall | AppUpgrade, context: TriggerContext) {
    console.log(`onAppChanged\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
    try {
        // This function from devvit-helpers will start a job, but it terminates any other jobs with the same name first.
        await startSingletonJob(context.scheduler, "someRecurringTask", "*/5 * * * *", {});
    } catch (e) {
        console.error("Failed to schedule someRecurringTask job", e);
        throw e;
    }
}
