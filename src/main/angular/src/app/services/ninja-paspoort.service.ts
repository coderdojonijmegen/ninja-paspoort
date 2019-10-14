import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class NinjaPaspoortService {
  constructor(private http: HttpClient) {
  }

  public getAssignments(data): Observable<HttpResponse<any>> {
    return this.http.post(`./assignments`, data, { headers: {'Content-Type': 'application/json'}, observe: "response" });
  }
}
