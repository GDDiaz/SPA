import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-filter-heroes',
  templateUrl: './filter-heroes.component.html',
  styleUrls: ['./filter-heroes.component.css']
})
export class FilterHeroesComponent implements OnInit {
  heroes:any[] = [];
  constructor( private activatedRoute:ActivatedRoute, private heroesService:HeroesService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.bucarHeroe(params['query']);
      console.log(this.heroes );
    } );
  }

}
