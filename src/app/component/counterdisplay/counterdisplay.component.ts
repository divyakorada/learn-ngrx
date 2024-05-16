import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit{


counterDisplay: number = 0;
  constructor(private store: Store<{xyz: {counter: number}}>) {}

  ngOnInit() {
    this.store.select('xyz').subscribe(res => {
      this.counterDisplay = res.counter;
       console.log('counterDisplay', this.counterDisplay);
    })
  }

}
