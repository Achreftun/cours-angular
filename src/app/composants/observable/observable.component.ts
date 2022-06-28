import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Observer, take, count, Subject } from 'rxjs';

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
      take(5),
    );
    const subject = new Subject<number>();
    // subject.next(0);
    subject.subscribe({
      next: (val) => console.log(`A : ${val}`)
    });
    // subject.next(1);
    subject.subscribe({
      next: (val) => console.log(`B : ${val}`)
    });
    observable.subscribe(subject);
    // subject.next(2);
    // const observable: Observable<number> = interval(1000).pipe(
    //   take(15),
    //   filter(elt => elt % 2 == 0 && elt >= 10 && elt < 15),
    // );

    // écriture récurrente
    // observable.subscribe({
    //   next: (val) => this.tab.push(val),
    //   error: (err) => this.status = err,
    //   complete: () => this.status = 'fini'
    // });
    // const observer: Observer<number> = {
    //   next: (val) => this.tab.push(val),
    //   error: (err) => this.status = err,
    //   complete: () => this.status = 'fini'
    // }
    // observable.subscribe(observer);
  }

}
