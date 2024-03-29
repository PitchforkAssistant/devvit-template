import {MenuItemOnPressEvent, MenuItemUserType} from "@devvit/public-api";
import {Context} from "@devvit/public-api";
import {submitPostFormKey} from "../main.js";

export async function generalMenuItemPressed (event: MenuItemOnPressEvent, context: Context) {
    return exampleMenuItemPressed(event, context);
}
export async function loggedOutMenuItemPressed (event: MenuItemOnPressEvent, context: Context) {
    return exampleMenuItemPressed(event, context, "loggedOut");
}
export async function modMenuItemPressed (event: MenuItemOnPressEvent, context: Context) {
    return exampleMenuItemPressed(event, context, "moderator");
}
export async function memberMenuItemPressed (event: MenuItemOnPressEvent, context: Context) {
    return exampleMenuItemPressed(event, context, "member");
}

// MenuItemOnPressEvent doesn't have a userType property, so we have to pass it in separately based on the menu item.
export async function exampleMenuItemPressed (event: MenuItemOnPressEvent, context: Context, userType?: MenuItemUserType) {
    const message = `You pressed a ${event.location} button! (userType: ${userType ?? ""}, targetId: ${event.targetId})\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`;
    console.log(message);
    context.ui.showToast(message);
} export async function formActionPressed (event: MenuItemOnPressEvent, context: Context) {
    context.ui.showForm(submitPostFormKey);
}

