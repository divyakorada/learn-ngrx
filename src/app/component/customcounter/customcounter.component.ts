import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { getChannelName } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit{
  counterInput!: number; 
  actionType: string = 'add';
  channelName = '';
  counterSubscription!: Subscription;

  constructor(private store: Store<{xyz: CounterModel}>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getChannelName).subscribe(res => {
      this.channelName = res;
      console.log('channel name');
    });
  }

  onCustomIncrement() {
   this.store.dispatch(customIncrement({value:  +this.counterInput, action: this.actionType}));
  }

}
