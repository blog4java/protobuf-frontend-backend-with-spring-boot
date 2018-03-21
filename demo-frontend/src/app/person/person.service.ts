import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {IPersonRequest, PersonRequest} from "../protobufs/demo_service";

@Injectable()
export class PersonService {

  private personUri = `/api/persons`;

  constructor(private http: HttpClient) {
  }

  addPerson(person: IPersonRequest) {
    return this.http.post(this.personUri, PersonRequest.fromObject(person));
  }

  findAllPersonNames(): Observable<string[]> {
    return this.http.get<string[]>(this.personUri);
  }

}
