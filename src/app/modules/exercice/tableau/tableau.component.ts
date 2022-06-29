import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  numbers = [2, 3, 8, 1, 9];
  id = 0;
  suivant = 0;
  precedent = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = +(res.get('id') ?? '0');
      this.suivant = (this.id + 1) % this.numbers.length;
      // if (this.id >= (this.numbers.length - 1)) {
      //   this.suivant = 0;
      // } else {
      //   this.suivant = this.id + 1;
      // }
      if (this.id == 0) {
        this.precedent = this.numbers.length - 1;
      } else {
        this.precedent = this.id - 1;
      }
    })
  }

}
