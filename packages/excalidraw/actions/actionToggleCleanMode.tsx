import { coffeeIcon } from "../components/icons";
import { CODES, KEYS } from "../keys";
import { StoreAction } from "../store";
import { register } from "./register";

export const actionToggleCleanMode = register({
  name: "cleanMode",
  label: "buttons.cleanMode",
  icon: coffeeIcon,
  paletteName: "Toggle clean mode",
  viewMode: true,
  trackEvent: {
    category: "canvas",
    predicate: (appState) => !appState.cleanModeEnabled,
  },
  perform(elements, appState) {
    return {
      appState: {
        ...appState,
        cleanModeEnabled: !this.checked!(appState),
      },
      storeAction: StoreAction.NONE,
    };
  },
  checked: (appState) => appState.cleanModeEnabled,
  predicate: (elements, appState, appProps) => {
    return typeof appProps.cleanModeEnabled === "undefined";
  },
  keyTest: (event) =>
    !event[KEYS.CTRL_OR_CMD] && event.altKey && event.code === CODES.C,
});
