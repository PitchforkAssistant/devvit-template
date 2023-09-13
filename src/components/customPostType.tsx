import {Devvit, CustomPostType} from "@devvit/public-api";

export const customPostPreview = (
    <blocks height="tall" >
        <vstack padding="large" gap="large" alignment="middle center" grow={true}>
            <text style="body" size="large" alignment="middle center" grow={true}>
        Loading custom post example...
            </text>
        </vstack>
    </blocks>
);

export const customPostType: CustomPostType = {
    name: "Custom Post Example",
    render: context => {
        const [currentUsername] = context.useState(async () => {
            const currentUser = await context.reddit.getCurrentUser().catch(() => null);
            return currentUser?.username;
        });
        const [currentUserId] = context.useState(async () => {
            const currentUser = await context.reddit.getCurrentUser().catch(() => null);
            return currentUser?.id;
        });
        const [counter, setCounter] = context.useState(async () => {
            const counterNumber = await context.kvStore.get<number>("counter");
            return counterNumber ?? 0;
        });
        const clickCounter = async () => {
            // Does this cause race conditions when multiple users are clicking at the same time? Probably, but it's just an example.
            const counterNumber = await context.kvStore.get<number>("counter");
            const newCounter = (counterNumber ?? 0) + 1;
            setCounter(newCounter);
            await context.kvStore.put("counter", newCounter);
        };
        return (
            <blocks height="tall">
                <vstack padding="large" gap="large">
                    <hstack gap="large">
                        <vstack gap="medium">
                            <text style="heading" size="xxlarge">
                                Hello, {currentUsername ?? "stranger"}!
                            </text>
                            <text size="large" style="body" outline="thick">{`Click counter: ${counter}`}</text>
                        </vstack>
                        <fullsnoo size="medium" userId={currentUserId ?? "t2_1qwk"} facing="left"/>
                    </hstack>

                    <hstack gap="large" alignment="center middle">
                        <button appearance="primary" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="secondary" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <hstack gap="large" alignment="center middle">
                        <button appearance="bordered" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="plain" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <hstack gap="large" alignment="center middle">
                        <button appearance="media" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="caution" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <hstack gap="large" alignment="center middle">
                        <button appearance="success" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                        <button appearance="destructive" grow={true} onPress={clickCounter}>
                            Button
                        </button>
                    </hstack>

                    <text style="metadata" size="small" alignment="bottom end">
                        Click a button, you know you want to do it!
                    </text>
                </vstack>
            </blocks>
        );
    },

};
