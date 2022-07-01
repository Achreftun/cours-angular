import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css']
})
export class DetailsPersonneComponent implements OnInit {
  id = 0;
  personne: Personne = {};
  constructor(
    private route: ActivatedRoute,
    private ps: PersonneService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = +(res.get('id') ?? "0");
      this.personne = this.ps.getPersonneById(this.id) ?? {};

    });
  }
  modifierPersonne(form: any) {
    this.ps.updatePersonne(this.personne);
    this.router.navigateByUrl('/cours/personne');
  }

}
