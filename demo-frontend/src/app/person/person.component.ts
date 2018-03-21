import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {IPersonRequest} from "../protobufs/demo_service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  names: string[];
  count: number;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.loadPersons();
  }

  addPerson() {
    this.personService
      .addPerson(this.person())
      .subscribe(() => this.loadPersons())
  }

  private loadPersons() {
    this.personService.findAllPersonNames()
      .subscribe(value => {
        console.log('persons ', value);
        this.names = value
      });
  }

  private person(): IPersonRequest {
    let number = ++this.count;
    return {
      firstName: "BHUWAN" + number,
      lastName: "PRASAD" + number
    };
  }

}
