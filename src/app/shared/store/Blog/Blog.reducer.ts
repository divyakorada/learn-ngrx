import { createReducer, on } from "@ngrx/store";
import { blogState } from "./Blog.state";
import { addBlog, loadBlog } from "./Blog.actions";
import { state } from "@angular/animations";

const _blogReducer = createReducer(blogState, 
    on(loadBlog, (state) => {
        return {
            ...state
        }
    }),
    on(addBlog, (state, action) => {
        console.log('state', state);
        console.log('action', action);
        const _blog = {...action.blogInput}
        _blog.id = state.blogList.length + 1;

        return {
            ...state,
            blogList: [...state.blogList, _blog]
        }
    })
)

export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);
}