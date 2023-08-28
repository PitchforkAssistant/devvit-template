import {Devvit} from "@devvit/public-api";
import {someRecurringTask} from "./handlers/jobs.js";
import {validateDiceRoll} from "./handlers/validators.js";
import {DEFAULTS, HELP_TEXTS, LABELS, OPTIONS} from "./constants.js";
import {formActionPressed, formOnSubmit, menuActionPressed, menuLoggedOutPressed, menuMemberPressed, menuModActionPressed} from "./handlers/menus.js";
import {onAppChanged, onCommentCreate, onCommentDelete, onCommentReport, onCommentSubmit, onCommentUpdate, onModAction, onModMail, onPostCreate, onPostDelete, onPostFlairUpdate, onPostReport, onPostSubmit, onPostUpdate} from "./handlers/triggers.js";
import {customPost} from "./handlers/customPosts.js";

// Enable any Devvit features you might need.
Devvit.configure({
    redditAPI: true,
    kvStore: true,
    media: false,
    http: false,
});

// Custom post stuff
Devvit.addCustomPostType(customPost);
Devvit.addMenuItem({
    location: "subreddit",
    label: LABELS.CUSTOM_POST_BUTTON,
    description: HELP_TEXTS.CUSTOM_POST_BUTTON,
    onPress: formActionPressed,
});
export const submitPostFormKey = Devvit.createForm(
    {
        fields: [
            {
                type: "string",
                name: "title",
                label: LABELS.CUSTOM_POST_TITLE,
                helpText: HELP_TEXTS.CUSTOM_POST_TITLE,
            },
        ],
        title: LABELS.FORM,
        acceptLabel: LABELS.FORM_ACCEPT,
        cancelLabel: LABELS.FORM_CANCEL,
    },
    formOnSubmit
);

// Set up the configuration field presented to the user for each installation (subreddit) of the app.
Devvit.addSettings([
    {
        type: "number",
        name: "diceRoll",
        label: LABELS.DICE_ROLL,
        helpText: HELP_TEXTS.DICE_ROLL,
        defaultValue: DEFAULTS.DICE_ROLL,
        onValidate: validateDiceRoll,
    },
    {
        type: "boolean",
        name: "toggle",
        label: LABELS.TOGGLE,
        helpText: HELP_TEXTS.TOGGLE,
        defaultValue: DEFAULTS.TOGGLE,
    },
    {
        type: "select",
        name: "dropdownSelect",
        label: LABELS.DROPDOWN_SELECT,
        helpText: HELP_TEXTS.DROPDOWN_SELECT,
        defaultValue: DEFAULTS.SELECT,
        options: OPTIONS.SELECT,
    },
    {
        type: "select",
        name: "multiSelect",
        label: LABELS.MULTI_SELECT,
        helpText: HELP_TEXTS.MULTI_SELECT,
        defaultValue: DEFAULTS.SELECT,
        options: OPTIONS.SELECT,
        multiSelect: true,
    },
    {
        type: "group",
        label: LABELS.GROUP,
        helpText: HELP_TEXTS.GROUP,
        fields: [
            {
                type: "string",
                name: "shortText",
                label: LABELS.SHORT_TEXT,
                helpText: HELP_TEXTS.SHORT_TEXT,
            },
            {
                type: "paragraph",
                name: "longText",
                label: LABELS.LONG_TEXT,
                helpText: HELP_TEXTS.LONG_TEXT,
            },
        ],
    },
]);

// Set up the menu items added by the app.
Devvit.addMenuItem({
    location: "post",
    label: LABELS.GENERAL_POST_ACTION,
    description: HELP_TEXTS.GENERAL_POST_ACTION,
    onPress: menuActionPressed,
});
Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.LOGGED_OUT_ACTION,
    forUserType: "loggedOut",
    onPress: menuLoggedOutPressed,
});
Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.MOD_ACTION,
    forUserType: "moderator",
    onPress: menuModActionPressed,
});
Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.MEMBER_ACTION,
    forUserType: "member",
    onPress: menuMemberPressed,
});

// Define scheduler jobs
Devvit.addSchedulerJob({
    name: "someRecurringTask",
    onRun: someRecurringTask,
});

// AppInstall and AppUpgrade are useful for scheduling recurring actions.
Devvit.addTrigger({
    events: ["AppInstall", "AppUpgrade"],
    onEvent: onAppChanged,
});

// Register any of the other triggers that you want to use. You can register multiple triggers for the same event handler.
// These ones are here as examples, they could technically be combined into one trigger with the onTrigger function as their handler.
Devvit.addTrigger({
    event: "PostSubmit",
    onEvent: onPostSubmit,
});
Devvit.addTrigger({
    event: "PostCreate",
    onEvent: onPostCreate,
});
Devvit.addTrigger({
    event: "PostUpdate",
    onEvent: onPostUpdate,
});
Devvit.addTrigger({
    event: "PostDelete",
    onEvent: onPostDelete,
});
Devvit.addTrigger({
    event: "PostReport",
    onEvent: onPostReport,
});
Devvit.addTrigger({
    event: "PostFlairUpdate",
    onEvent: onPostFlairUpdate,
});
Devvit.addTrigger({
    event: "CommentSubmit",
    onEvent: onCommentSubmit,
});
Devvit.addTrigger({
    event: "CommentCreate",
    onEvent: onCommentCreate,
});
Devvit.addTrigger({
    event: "CommentUpdate",
    onEvent: onCommentUpdate,
});
Devvit.addTrigger({
    event: "CommentDelete",
    onEvent: onCommentDelete,
});
Devvit.addTrigger({
    event: "CommentReport",
    onEvent: onCommentReport,
});
Devvit.addTrigger({
    event: "ModMail",
    onEvent: onModMail,
});
Devvit.addTrigger({
    event: "ModAction",
    onEvent: onModAction,
});

export default Devvit;
