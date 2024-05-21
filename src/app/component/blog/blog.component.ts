import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { blogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getBlog } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/appState.model';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList: blogModel[];

  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.select(getBlog).subscribe(res => {
      this.blogList = res;
    })
    
  }

  addBlog() {
    this.openPopup();
  }

  openPopup() {
    this.dialog.open(AddblogComponent, {
      width: '40%'
    })
  }

}
