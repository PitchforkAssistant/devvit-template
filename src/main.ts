import {Devvit} from "@devvit/public-api";

// Enable any Devvit features you might need. For example purposes, we'll enable all non-privileged plugins.
Devvit.configure({
    redditAPI: true,
    redis: true,
    media: true,
    http: true,
    kvStore: true,
    realtime: true,
});

// These are exports of Devvit.add... functions contained in other files, which helps with organization.
// It's effectively the same as if you had written the code here.

// Settings
export {devvitAppSettings} from "./settings.js";

// Forms
export {createPostForm} from "./forms/createPostForm.js";

// Buttons
export {modButton} from "./buttons/modButton.js";
export {loggedOutButton} from "./buttons/loggedOutButton.js";
export {customPostButton} from "./buttons/customPostButton.js";
export {generalButton} from "./buttons/generalButton.js";

// Custom Post
export {customPostExample} from "./customPost/index.js";

// Scheduler jobs
export {someRecurringTask} from "./scheduler/someRecurringTask.js";

// Triggers
export {appInstallTrigger} from "./triggers/appInstall.js";
export {appUpgradeTrigger} from "./triggers/appUpgrade.js";
export {commentCreateTrigger} from "./triggers/commentCreate.js";
export {commentDeleteTrigger} from "./triggers/commentDelete.js";
export {commentReportTrigger} from "./triggers/commentReport.js";
export {commentSubmitTrigger} from "./triggers/commentSubmit.js";
export {commentUpdateTrigger} from "./triggers/commentUpdate.js";
export {modActionTrigger} from "./triggers/modAction.js";
export {modMailTrigger} from "./triggers/modMail.js";
export {postCreateTrigger} from "./triggers/postCreate.js";
export {postDeleteTrigger} from "./triggers/postDelete.js";
export {postFlairUpdateTrigger} from "./triggers/postFlairUpdate.js";
export {postReportTrigger} from "./triggers/postReport.js";
export {postSubmitTrigger} from "./triggers/postSubmit.js";
export {postUpdateTrigger} from "./triggers/postUpdate.js";

export default Devvit;
