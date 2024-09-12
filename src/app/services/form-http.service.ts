import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pessoa} from "../model/form";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormHttpService {

  apiUrl: string = "http://localhost:8080/pessoa";

  constructor(private http: HttpClient) {
  }

  addPesssoa(form: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, form);
  }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  getById(id: number | null): Observable<Pessoa> {
    return this.http.get<Pessoa>( `${this.apiUrl}/${id}`);
  }
}
