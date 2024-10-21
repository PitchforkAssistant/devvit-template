import {Devvit} from "@devvit/public-api";
import {CustomPostState} from "../state.js";

export const ButtonsPage = (state: CustomPostState) => {
    async function clickCounter () {
        const success = await state.incrementCounter();
        if (!success) {
            state.context.ui.showToast("Failed to increment counter!");
        }
    }

    return (

        <vstack alignment="center middle" gap="large" grow>
            <hstack padding="medium">
                <text style="heading" size="xxlarge">
                    Hello, {state.username ?? "stranger"}!
                </text>
                <avatar size="large" thingId={state.userId ?? "t2_1qwk"} facing="left"/>
            </hstack>

            <vstack gap="medium">
                <text size="large" style="body">{`Click counter: ${state.counter}`}</text>
                <vstack gap="medium" border="thin" padding="medium" cornerRadius="medium" grow>
                    <hstack gap="medium" alignment="center middle">
                        <button appearance="primary" grow onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="secondary" grow onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <hstack gap="medium" alignment="center middle">
                        <button appearance="bordered" grow onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="plain" grow onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <hstack gap="medium" alignment="center middle">
                        <button appearance="media" grow onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="caution" grow onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <hstack gap="medium" alignment="center middle">
                        <button appearance="success" grow onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="destructive" grow onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>
                </vstack>
                <text style="metadata" size="small" alignment="center middle">
                Click a button, you know you want to do it!
                </text>
            </vstack>
        </vstack>
    );
};
