import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {IPersonRequest, PersonRequest} from "../protobufs";

@Injectable()
export class PersonService {

  private personUri = `/api/persons`;

  constructor(private http: HttpClient) {
  }

  addPerson(person: IPersonRequest) {
    console.log("request", person);
    let body = PersonRequest.encode(person).finish();
    return this.http.post(this.personUri, body.buffer);
  }

  findAllPersonNames(): Observable<string[]> {
    return this.http.get<string[]>(this.personUri);
  }

}
