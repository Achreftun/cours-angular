import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  status = '';
  tab: number[] = [];
  constructor() { }

  ngOnInit(): void {
    const observable: Observable<number> = interval(2000);
    const observer: Observer<number> = {
      next: (val) => this.tab.push(val),
      error: (err) => this.status = err,
      complete: () => this.status = 'fini'
    }
    observable.subscribe(observer);
  }

}
