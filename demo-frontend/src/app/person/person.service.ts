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
    let body = Person.create(person);
    return this.http.post(this.personUri, body);
  }

  findAllPersonNames(): Observable<any> {
    return this.http.get(this.personUri);
  }

}
