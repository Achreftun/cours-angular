import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  ville = '';
  codePostal = '';
  rue = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(res => {
    //   this.ville = res.get('ville') ?? '';
    //   this.rue = res.get('rue') ?? '';
    //   this.codePostal = res.get('codePostal') ?? '';
    // })
    this.ville = this.route.snapshot.queryParams['ville'];
    this.rue = this.route.snapshot.queryParams['rue'];
    this.codePostal = this.route.snapshot.queryParams['codePostal'];
  }

}
