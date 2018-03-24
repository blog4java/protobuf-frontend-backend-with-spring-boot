import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class NgHttpInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpResponse<any>> | Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/x-protobuf;utf-8'),
      responseType: 'arraybuffer'
    });
    console.log('INTERCEPTING REQUEST >', req);
    return next.handle(req).catch((response) => {
      console.log('REQUEST FAILED > ', response);
      if (response instanceof HttpErrorResponse) {
        if (response.status === 400 || response.status === 415) {
          alert("RESPONSE > " + JSON.stringify(response.error));
        }
      }
      return Observable.throw(response);
    });
  }
}
