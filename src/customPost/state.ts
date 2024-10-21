import {Context, UseIntervalResult, UseStateResult} from "@devvit/public-api";
import {PageName} from "./pages.js";

export type SubredditData = {
    name: string;
    id: string;
};

export type UserData = {
    username: string;
    id: string;
};

export class CustomPostState {
    readonly _currentPage: UseStateResult<PageName>;

    readonly _currentSubData: UseStateResult<SubredditData>;
    readonly _currentUserData: UseStateResult<UserData>;

    readonly _counter: UseStateResult<number>;
    readonly counterUpdater: UseIntervalResult;

    constructor (public context: Context, startPage: PageName = "home") {
        this._currentPage = context.useState<PageName>(startPage);

        this._currentSubData = context.useState<SubredditData>(async () => {
            const currentSubreddit = await context.reddit.getCurrentSubreddit();
            return {
                name: currentSubreddit.name,
                id: currentSubreddit.id,
            };
        });

        this._currentUserData = context.useState<UserData>(async () => {
            const currentUser = await context.reddit.getCurrentUser();
            return {
                username: currentUser?.username ?? "unknown",
                id: currentUser?.id ?? "",
            };
        });

        this._counter = context.useState(async () => {
            const counterNumber = parseInt(await context.redis.get("counter") ?? "0");
            return counterNumber ? counterNumber : 0; // Convert potential NaN from parseInt("") to 0
        });

        this.counterUpdater = context.useInterval(async () => {
            await this.refreshCounter();
        }, 1000);
    }

    get currentPage (): PageName {
        return this._currentPage[0];
    }

    protected set currentPage (page: PageName) {
        this._currentPage[1](page);
    }

    get subredditName (): string {
        return this._currentSubData[0].name;
    }

    get subredditId (): string {
        return this._currentSubData[0].id;
    }

    get username (): string {
        return this._currentUserData[0].username;
    }

    get userId (): string {
        return this._currentUserData[0].id;
    }

    public changePage (page: PageName) {
        if (page === this.currentPage) {
            return;
        }

        // We only need to update the counter if we're on the buttons page
        if (page === "buttons") {
            this.counterUpdater.start();
        } else if (this.currentPage === "buttons") {
            this.counterUpdater.stop();
        }

        this.currentPage = page;
    }

    get counter (): number {
        return this._counter[0];
    }

    set counter (value: number) {
        this._counter[1](value);
    }

    public async refreshCounter () {
        const counterNumber = parseInt(await this.context.redis.get("counter") ?? "0");
        this.counter = counterNumber ? counterNumber : 0; // Convert potential NaN from parseInt("") to 0
    }

    public async incrementCounter (increment: number = 1): Promise<boolean> {
        const tx = await this.context.redis.watch("counter");

        // We need to get the current counter value, this.counter is only updated once per second.
        const counterString = await this.context.redis.get("counter");
        const currentCounter = counterString ? parseInt(counterString) : 0; // Protect against NaN

        const newCounter = currentCounter + increment;

        // tx.exec() will fail if the watched key has been modified since the watch
        try {
            await tx.multi();
            await tx.set("counter", newCounter.toFixed(0));
            await tx.exec();
        } catch (e) {
            console.error(e);
            return false;
        }
        this.counter = newCounter;
        return true;
    }
}
