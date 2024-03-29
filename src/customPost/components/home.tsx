import {Devvit} from "@devvit/public-api";
import {CustomPostState} from "../state.js";

export const HomePage = (state: CustomPostState) => (
    <vstack alignment="center middle" gap="medium" grow>

        <button onPress={() => state.changePage("buttons")}>
            Click Some Buttons
        </button>

        <button onPress={() => state.context.ui.navigateTo("https://github.com/PitchforkAssistant/devvit-template")}>
            View Source Code
        </button>

    </vstack>
);

