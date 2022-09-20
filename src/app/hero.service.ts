import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private messageService : MessageService) { }

  //getHeroes is asynchronous when you wrap it with of() method
  //to make it an Observable type
  getHeroes() : Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes")
    return of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(heroe => heroe.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }

}
