import {MenuItemOnPressEvent, MenuItemUserType, FormOnSubmitEvent} from "@devvit/public-api";
import {Context} from "@devvit/public-api";
import {submitPostFormKey} from "../main.js";
import {customPostFormSubmitted} from "./customPosts.js";

export async function formActionPressed (event: MenuItemOnPressEvent, context: Context) {
    context.ui.showForm(submitPostFormKey);
}

export async function formOnSubmit (event: FormOnSubmitEvent, context: Context) {
    const message = `You submitted the form with values ${JSON.stringify(event.values)}`;
    console.log(message);
    context.ui.showToast(message);

    // Otherwise we'd perform the rest of the logic here, but we are using this to submit a custom post and that needs tsx.
    return customPostFormSubmitted(event, context);
}

// MenuItemOnPressEvent doesn't have a userType property, so we have to pass it in separately based on the menu item.
export async function menuActionPressed (event: MenuItemOnPressEvent, context: Context) {
    return menuItemPressed(event, context);
}
export async function menuModActionPressed (event: MenuItemOnPressEvent, context: Context) {
    return menuItemPressed(event, context, "moderator");
}
export async function menuLoggedOutPressed (event: MenuItemOnPressEvent, context: Context) {
    return menuItemPressed(event, context, "loggedOut");
}
export async function menuMemberPressed (event: MenuItemOnPressEvent, context: Context) {
    return menuItemPressed(event, context, "member");
}
export async function menuItemPressed (event: MenuItemOnPressEvent, context: Context, userType?: MenuItemUserType) {
    const message = `You pressed a ${event.location} button! (userType: ${userType ?? ""}, targetId: ${event.targetId})\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`;
    console.log(message);
    context.ui.showToast(message);
}
