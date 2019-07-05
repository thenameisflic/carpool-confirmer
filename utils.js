import { StackActions, NavigationActions } from "react-navigation";

export const createResetAction = navigationOpts => {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate(navigationOpts)]
  });
};
