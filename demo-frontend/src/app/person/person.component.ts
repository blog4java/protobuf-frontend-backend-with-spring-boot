import {Component, OnInit} from '@angular/core';
import {PersonService} from "./person.service";
import {IPerson, People, Person} from "../protobufs";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  names: IPerson[];
  count: number = 0;

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
      .subscribe(buffer => {
        this.names = People.decode(new Uint8Array(buffer)).person;
        console.log("names", this.names);
      });
  }

  private person(): IPerson {
    this.count = this.count + 1;
    return Person.create({
      firstName: "BHUWAN" + this.count,
      middleName: "PRASAD" + this.count,
      lastName: "UPADHYAY" + this.count
    });
  }

}
