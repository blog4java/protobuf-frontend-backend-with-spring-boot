import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {IPersonRequest, PersonRequest} from "../protobufs";

@Injectable()
export class PersonService {

  private personUri = `/api/persons`;

  constructor(private readonly http: HttpClient) {
  }

  addPerson(person: IPersonRequest) {
    console.log("request", person);
    const headers = new HttpHeaders({'Accept': 'application/x-protobuf'});
    let body = PersonRequest.encode(person).finish();
    return this.http.post(this.personUri, body);
  }

  findAllPersonNames(): Observable<string[]> {
    return this.http.get<string[]>(this.personUri);
  }

  parseProtobuf(response: ArrayBuffer): IPersonRequest {
    console.time('decodeprotobuf');
    const personRequest = PersonRequest.decode(new Uint8Array(response))
    console.timeEnd('decodeprotobuf');
    return personRequest;
  }
}
