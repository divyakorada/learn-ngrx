import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog } from 'src/app/shared/store/Blog/Blog.actions';
import { blogModel } from 'src/app/shared/store/Blog/Blog.model';
import { AppStateModel } from 'src/app/shared/store/Global/appState.model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {

  constructor(private dialogRef: MatDialogRef<AddblogComponent>, 
    private FB: FormBuilder, private store: Store<AppStateModel>) {}

  blogForm = this.FB.group({
    id: this.FB.control(0),
    title: this.FB.control('', Validators.required),
    description: this.FB.control('', Validators.required)
  });

  closePopup() {
    this.dialogRef.close();
  }

  saveBlog() {
    console.log(this.blogForm);
    if(this.blogForm.valid) {
      const _addBlog: blogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      } 
      this.store.dispatch(addBlog({blogInput: _addBlog}));
      this.closePopup();
    }
  }
}
