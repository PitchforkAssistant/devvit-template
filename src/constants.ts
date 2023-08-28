// Keeping all of the labels, help texts, error messages, and default values in one place makes keeps main.ts cleaner and makes them easier to change.
// It also opens up the possibility of internationalization in the future.

export const LABELS = {
    DICE_ROLL: "Dice Roll",
    TOGGLE: "Toggle",
    DROPDOWN_SELECT: "Dropdown",
    MULTI_SELECT: "Multi-Select",
    GROUP: "Group",
    SHORT_TEXT: "String Input",
    LONG_TEXT: "Paragraph Input",
    MOD_ACTION: "Template Action (Mod)",
    MEMBER_ACTION: "Template Action (Member)",
    LOGGED_OUT_ACTION: "Template Action (Logged Out)",
    GENERAL_POST_ACTION: "Template Action (Unspecified)",
    FORM: "Custom Post Form",
    FORM_ACCEPT: "Submit Custom Post",
    FORM_CANCEL: "Cancel",
    CUSTOM_POST_BUTTON: "Create a Custom Post",
    CUSTOM_POST_TITLE: "Title",
};

export const HELP_TEXTS = {
    DICE_ROLL: "This is an example number field, please enter a number between 1 and 6.",
    TOGGLE: "Literally just an on or off switch.",
    DROPDOWN_SELECT: "This is an example of a dropdown field, the user can select one of the predefined options.",
    MULTI_SELECT: "This is an example of a multi-select field, the user can select multiple of the predefined options.",
    GROUP: "This is an example of a group of fields, here we're just showing a string and a paragraph field.",
    SHORT_TEXT: "This is just a field for text, but it's tiny.",
    LONG_TEXT: "This is just a field for text, but it's a bigger box.",
    GENERAL_POST_ACTION: "This is an example of a menu item without a forUserType property, it will show up for all users.",
    SHOW_FORM_ACTION: "This is an example of a menu item that shows a form.",
    FORM: "This is an example of a form, it has a custom submit and cancel button. The fields are the same as the app settings, but that's just because I was too lazy to define two separate forms.",
    CUSTOM_POST_BUTTON: "This is a of a menu item that submits a custom post example.",
    CUSTOM_POST_TITLE: "This is used as the title of the custom post.",
};

export const ERRORS = {
    DICE_ROLL_NAN: "Your dice roll must be a number.",
    DICE_ROLL_OUT_OF_RANGE: "Your dice roll must be between 1 and 6.",
    DICE_ROLL_NOT_INTEGER: "Your dice roll must be an integer.",
    DICE_ROLL_UNLUCKY: "Your number does not match the random number chosen by a fair dice roll. (Hint: https://xkcd.com/221/)",
    CUSTOM_POST_FAILED: "Failed to submit custom post.",
};

export const DEFAULTS = {
    DICE_ROLL: 6,
    TOGGLE: false,
    SELECT: ["Label 1", "value1"],
    CUSTOM_POST_TITLE: "Custom Post",
};

export const OPTIONS = {
    SELECT: [
        {label: "Label 0", value: "value0"},
        {label: "Label 1", value: "value1"},
        {label: "Label 2", value: "value2"},
        {label: "Label 3", value: "value3"},
        {label: "Label 4", value: "value4"},
        {label: "Label 5", value: "value5"},
        {label: "Label 6", value: "value6"},
        {label: "Label 7", value: "value7"},
        {label: "Label 8", value: "value8"},
        {label: "Label 9", value: "value9"},
    ],
};
