import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {IPerson, Person} from "../protobufs";

@Injectable()
export class PersonService {

  private personUri = `/api/persons`;

  constructor(private readonly http: HttpClient) {
  }

  addPerson(person: IPerson) {
    let body = Person.encode(person).finish();
    return this.http.post(this.personUri, body.buffer);
  }

  findAllPersonNames(): Observable<any> {
    return this.http.get(this.personUri);
  }

}
