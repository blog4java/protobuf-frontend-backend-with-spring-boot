import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonComponent} from './person.component';
import {PersonService} from "./person.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PersonComponent],
  exports: [PersonComponent],
  providers: [PersonService]
})
export class PersonModule {
}
