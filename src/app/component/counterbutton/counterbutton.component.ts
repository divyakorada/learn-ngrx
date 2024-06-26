import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, decrement, increment, reset } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  constructor(private store: Store<{xyz: CounterModel}>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  onRename() {
    this.store.dispatch(changeChannelName({channel: 'Welcome to Nihira Techiees'}));
  }
}
