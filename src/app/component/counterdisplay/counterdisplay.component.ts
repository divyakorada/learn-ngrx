import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit, OnDestroy{


counterDisplay: number = 0;
channelName = '';
counterSubscription!: Subscription;
counter$!: Observable<CounterModel>

  constructor(private store: Store<{xyz: CounterModel}>) {}

  ngOnInit() {
    // this.counterSubscription = this.store.select('xyz').subscribe(res => {
    //   this.counterDisplay = res.counter;
    //   this.channelName = res.channelName;
    // });
    this.counter$ = this.store.select('xyz');
  }

  ngOnDestroy() {
    // if(this.counterSubscription) {
    //   this.counterSubscription.unsubscribe();
    // }
  }

}
