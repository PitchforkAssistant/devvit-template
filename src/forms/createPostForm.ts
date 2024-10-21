import {Context, Devvit, Form, FormKey, FormOnSubmitEvent, FormOnSubmitEventHandler} from "@devvit/public-api";
import {DEFAULTS, ERRORS, HELP_TEXTS, LABELS} from "../constants.js";
import {CustomPostPreview} from "../customPost/components/preview.js";

// If you want to dynamically generate the form, use this:
// const form: FormFunction = (data: Data) => // return form generated from data;
const form: Form = {
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
};

export type CreatePostFormSubmitData = {
    title?: string;
}

const formHandler: FormOnSubmitEventHandler<CreatePostFormSubmitData> = async (event: FormOnSubmitEvent<CreatePostFormSubmitData>, context: Context) => {
    const message = `You submitted the form with values ${JSON.stringify(event.values)}`;
    console.log(message);
    context.ui.showToast(message);

    // The logic for creating a custom post.
    const subredditName = (await context.reddit.getCurrentSubreddit()).name;

    const title = DEFAULTS.CUSTOM_POST_TITLE;
    if (!event.values.title) {
        context.ui.showToast(ERRORS.CUSTOM_POST_TITLE_MISSING);
        return;
    }

    try {
        const newPost = await context.reddit.submitPost({
            title,
            subredditName,
            preview: CustomPostPreview,
            textFallback: {text: "The platform you're using doesn't support custom posts. Please use Shreddit or an up to date app to view this post."},
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
};

export const createPostForm: FormKey = Devvit.createForm(form, formHandler);
