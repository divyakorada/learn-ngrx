import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  counterInput!: number; 
  actionType: string = 'add';

  constructor(private store: Store<{xyz: CounterModel}>) {}

  onCustomIncrement() {
   this.store.dispatch(customIncrement({value:  +this.counterInput, action: this.actionType}));
  }

}