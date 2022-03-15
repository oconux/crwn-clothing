import { createSelector } from 'reselect';

const selectTony = state => state.tony;

export const selectTonyHeight = createSelector(
  [selectTony],
  (tony) => tony.height
)

export const selectTonyWeight = createSelector(
  [selectTony],
  (tony) => tony.weight
)

export const selectTonyFood = createSelector(
  [selectTony],
  (tony) => tony.favoriteFood
)
