import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {IPerson, People} from "../protobufs";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  names: IPerson[];
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
        this.names = People.create(value).person
      });
  }

  private person(): IPerson {
    let number = this.count + 1;
    this.count = number;
    return {
      firstName: "BHUWAN" + number,
      lastName: "PRASAD" + number
    };
  }

}
