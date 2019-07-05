import { StackActions, NavigationActions } from "react-navigation";

export const createResetAction = navigationOpts => {
  return StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate(navigationOpts)]
  });
};

export const mockFetch = response => {
  const mockSuccessResponse = response;
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  return Promise.resolve({
    json: () => mockJsonPromise
  });
};
