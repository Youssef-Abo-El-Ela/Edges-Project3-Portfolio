import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "../layouts/NavBarRouteSlice";
import quoteReducer from "../features/HomePage/quoteSlice";
import blogPageReducer from "../features/BlogPage/BlogPageSlice";

export const store = configureStore({
    reducer: {
        currentRoute :  routeReducer,
        quote: quoteReducer,
        blogs: blogPageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch