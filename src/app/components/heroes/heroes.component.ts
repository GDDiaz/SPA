import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes:Heroe[] = [];
  constructor( private _heroesSerivice:HeroesService,
               private route:Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesSerivice.getHeroes();
  }

  showHeroe( idx:number ) {
    this.route.navigate(['/heroe', idx]);
  }

}
