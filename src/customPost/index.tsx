import {Devvit} from "@devvit/public-api";
import {CustomPostState} from "./state.js";
import {Page} from "./pages.js";

export const customPostExample = Devvit.addCustomPostType({
    name: "Custom Post Example",
    description: "An example of a custom post.",
    height: "tall",
    render: context => {
        const state = new CustomPostState(context);
        return (
            <blocks>
                <vstack alignment="center top" width="100%" height="100%">
                    <hstack alignment="center middle" minWidth="100%" padding="small" border="thick">
                        <button icon="home" appearance="plain" disabled={state.currentPage === "home"} onPress={() => state.changePage("home")}>Home</button>
                        <vstack alignment="center middle" grow>
                            <text style="heading">Custom Post Example</text>
                        </vstack>
                        <button icon="help" appearance="plain" disabled={state.currentPage === "help"} onPress={() => state.changePage("help")}>Help</button>
                    </hstack>
                    <vstack alignment="center middle" grow width="100%">
                        <Page state={state} />
                    </vstack>
                </vstack>
            </blocks>
        );
    },
});
