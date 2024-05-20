import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/appState.model';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getCounter } from 'src/app/shared/store/counter.selector';

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

  constructor(private store: Store<AppStateModel>) {}

  ngOnInit() {
    this.counterSubscription = this.store.select(getCounter).subscribe(res => {
      this.counterDisplay = res;
      console.log('counter');
    });
   // this.counter$ = this.store.select('xyz');
  }

  ngOnDestroy() {
    if(this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
