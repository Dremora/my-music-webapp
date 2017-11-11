// @flow

export const initialState = {
};

type Action = { type: 'NOP' }

export default function todoApp(
  state: AppState = initialState,
  action: Action
) {
  switch (action.type) {
    default:
      return state;
  }
}
