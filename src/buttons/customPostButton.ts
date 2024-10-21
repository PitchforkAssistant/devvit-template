import {Context, Devvit, MenuItemOnPressEvent} from "@devvit/public-api";
import {LABELS} from "../constants.js";
import {createPostForm} from "../main.js";

const onPress = async (event: MenuItemOnPressEvent, context: Context) => {
    context.ui.showForm(createPostForm);
};

export const customPostButton = Devvit.addMenuItem({
    location: ["subreddit", "post", "comment"],
    label: LABELS.CUSTOM_POST_BUTTON,
    onPress,
});
