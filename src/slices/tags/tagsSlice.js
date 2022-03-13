import { createSlice } from '@reduxjs/toolkit';

export const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        value: {}
    },
    reducers: {
        add_tag: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1;
            console.log(state)
        },
    }
});

export const { add_tag } = tagsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.tags.value)`
export const selectTags = (state) => state.tags.value;

export default tagsSlice.reducer;
