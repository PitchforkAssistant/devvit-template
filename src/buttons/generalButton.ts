import {Context, Devvit, MenuItemOnPressEvent, MenuItemUserType} from "@devvit/public-api";
import {LABELS} from "../constants.js";

export async function exampleMenuItemPressed (event: MenuItemOnPressEvent, context: Context, userType?: MenuItemUserType) {
    const message = `You pressed a ${event.location} button! (userType: ${userType ?? ""}, targetId: ${event.targetId})\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`;
    console.log(message);
    context.ui.showToast(message);
}

const onPress = async (event: MenuItemOnPressEvent, context: Context) => exampleMenuItemPressed(event, context);

export const generalButton = Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.GENERAL_BUTTON,
    onPress,
});
