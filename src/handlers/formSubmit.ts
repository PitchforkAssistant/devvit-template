import {FormOnSubmitEvent} from "@devvit/public-api";
import {Context} from "@devvit/public-api";
import {DEFAULTS, ERRORS} from "../constants.js";
import {CustomPostPreview} from "../customPost/components/preview.js";

export async function formOnSubmit (event: FormOnSubmitEvent, context: Context) {
    const message = `You submitted the form with values ${JSON.stringify(event.values)}`;
    console.log(message);
    context.ui.showToast(message);

    // The logic for creating a custom post.
    const subredditName = (await context.reddit.getCurrentSubreddit()).name;

    let title = DEFAULTS.CUSTOM_POST_TITLE;
    if (event.values.title) {
        title = String(event.values.title);
    }

    try {
        const newPost = await context.reddit.submitPost({
            title,
            subredditName,
            preview: CustomPostPreview,
        });
        context.ui.showToast({
            text: "Custom post created, redirecting...",
            appearance: "success",
        });
        context.ui.navigateTo(newPost);
    } catch (e) {
        console.error("Error creating custom post", e);
        context.ui.showToast(ERRORS.CUSTOM_POST_FAILED);
    }
}

