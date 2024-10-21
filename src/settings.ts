import {Devvit} from "@devvit/public-api";
import {LABELS, HELP_TEXTS, DEFAULTS, OPTIONS} from "./constants.js";
import {validateDiceRoll} from "./validators/validateDiceRoll.js";

// Set up the configuration field presented to the user for each installation (subreddit) of the app.
export const devvitAppSettings = Devvit.addSettings([
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
