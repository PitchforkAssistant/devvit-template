import {SettingsFormFieldValidatorEvent} from "@devvit/public-api";
import {ERRORS} from "../constants.js";

export async function validateDiceRoll (event: SettingsFormFieldValidatorEvent<number>) {
    const value = Number(event.value);
    if (isNaN(value)) {
        return ERRORS.DICE_ROLL_NAN;
    }
    if (value < 1 || value > 6) {
        return ERRORS.DICE_ROLL_OUT_OF_RANGE;
    }
    if (!Number.isInteger(value)) {
        return ERRORS.DICE_ROLL_NOT_INTEGER;
    }
    if (value !== 4) {
        return ERRORS.DICE_ROLL_UNLUCKY;
    }
}
