import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clavier',
  templateUrl: './clavier.component.html',
  styleUrls: ['./clavier.component.css']
})
export class ClavierComponent implements OnInit {
  lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  constructor() { }

  ngOnInit(): void {
  }

}
