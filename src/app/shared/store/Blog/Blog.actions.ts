import { createAction, props } from "@ngrx/store";
import { blogModel } from "./Blog.model";

export const loadBlog = createAction('loadBlog');
export const addBlog = createAction('addBlog', props<{blogInput: blogModel}>())