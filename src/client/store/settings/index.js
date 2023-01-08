/* eslint-disable import/no-anonymous-default-export */
import lightMode from './lightMode';
import darkMode from './darkMode';

const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME
  };
};

const initSettings = () => {
  let themeStored = localStorage.getItem('theme');
  let theme;
  if (!themeStored || themeStored === 'light') theme = lightMode;
  else theme = darkMode;
  return { theme };
};
export default function (state = initSettings(), action) {
  let updatedState = { ...state };
  switch (action.type) {
    case TOGGLE_THEME:
      state.theme === lightMode
        ? (updatedState.theme = darkMode)
        : (updatedState.theme = lightMode);
      localStorage.setItem(
        'theme',
        updatedState.theme === lightMode ? 'light' : 'dark'
      );
      return updatedState;
    default:
      return state;
  }
}
