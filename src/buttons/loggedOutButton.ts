import {Context, Devvit, MenuItemOnPressEvent} from "@devvit/public-api";
import {LABELS} from "../constants.js";
import {exampleMenuItemPressed} from "./generalButton.js";

const onPress = async (event: MenuItemOnPressEvent, context: Context) => exampleMenuItemPressed(event, context, "loggedOut");

export const loggedOutButton = Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.LOGGED_OUT_BUTTON,
    forUserType: "loggedOut",
    onPress,
});
