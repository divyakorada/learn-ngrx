import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogModel, blogs } from "./Blog.model";

 const getBlogState = createFeatureSelector<blogs>('blog');

 export const getBlog = createSelector(getBlogState, (state => {
    return state.blogList;
 }));