import {Context, Devvit, MenuItemOnPressEvent} from "@devvit/public-api";
import {LABELS} from "../constants.js";
import {exampleMenuItemPressed} from "./generalButton.js";

const onPress = async (event: MenuItemOnPressEvent, context: Context) => exampleMenuItemPressed(event, context);

export const memberButton = Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.MEMBER_BUTTON,
    forUserType: "member",
    onPress,
});
