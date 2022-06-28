import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Observer, take } from 'rxjs';

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
    const observable: Observable<number> = interval(1000).pipe(
      take(10),
      map(elt => elt + 3),
      filter(elt => elt % 2 == 0)
    );
    // écriture récurrente
    observable.subscribe({
      next: (val) => this.tab.push(val),
      error: (err) => this.status = err,
      complete: () => this.status = 'fini'
    });
    // const observer: Observer<number> = {
    //   next: (val) => this.tab.push(val),
    //   error: (err) => this.status = err,
    //   complete: () => this.status = 'fini'
    // }
    // observable.subscribe(observer);
  }

}
