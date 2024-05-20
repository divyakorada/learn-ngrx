import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogModel } from "./Blog.model";

 const getBlogState = createFeatureSelector<blogModel[]>('blog');

 export const getBlog = createSelector(getBlogState, (state => {
    return state;
 }));