import {ButtonsPage} from "./components/buttons.js";
import {HelpPage} from "./components/help.js";
import {HomePage} from "./components/home.js";
import {CustomPostState} from "./state.js";

export type PageName = "home" | "help" | "buttons";

export type PageList = {
    [key in PageName]: (state: CustomPostState) => JSX.Element;
};

export const Pages: PageList = {
    home: HomePage,
    help: HelpPage,
    buttons: ButtonsPage,
};

export interface PageProps {
    state: CustomPostState;
}

export const Page = ({state}: PageProps) => Pages[state.currentPage](state);
