import { Injectable } from '@angular/core';
import { Polls } from '../Models/polls';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private polls: Polls[] =[]

  constructor() { }

  addPolls(polls: Polls): Observable<any> {

    console.log('Adding polls:' , polls)

    this.polls.push(polls)

    return of ({ success: true, message:'Poll added successfully'})

  } 

  displayPolls():Observable<Polls[]>{

    console.log('Displaying poll results:', this.polls)

    return of(this.polls)
  }
}
