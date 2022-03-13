import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../slices/tags/tagsSlice';

export default configureStore({
    reducer: {
        tags: tagsReducer
    }
});
