import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {IPerson, Person} from "../protobufs";

@Injectable()
export class PersonService {

  private personUri = `/api/persons`;

  constructor(private readonly http: HttpClient) {
  }

  addPerson(person: IPerson): Observable<Iterable<number>> {
    let body = Person.encodeDelimited(person).finish();
    return this.http.post<Iterable<number>>(this.personUri, body.buffer);
  }

  findAllPersonNames(): Observable<Iterable<number>> {
    return this.http.get<Iterable<number>>(this.personUri);
  }

}
