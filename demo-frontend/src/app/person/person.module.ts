import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonComponent} from './person.component';
import {PersonService} from "./person.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgHttpInterceptor} from "./http-interceptor";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PersonComponent],
  exports: [PersonComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgHttpInterceptor,
      multi: true
    },
    PersonService
  ]
})
export class PersonModule {
}
