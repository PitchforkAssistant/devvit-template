import {Devvit} from "@devvit/public-api";
import {CustomPostState} from "../state.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HelpPage = (state: CustomPostState) => (
    <vstack alignment="top center" gap="small" padding="small" grow>
        <vstack alignment="center middle" gap="none">
            <text style="heading" wrap alignment="center">What is this?</text>
            <text style="body" wrap alignment="center">
                This is an example of a custom post included with devvit-template.
            </text>
        </vstack>
    </vstack>
);

