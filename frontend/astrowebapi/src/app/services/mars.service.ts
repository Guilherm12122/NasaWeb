import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Mars } from '../models/mars';

@Injectable({
  providedIn: 'root'
})
export class MarsService {

  url = 'http://localhost:8080/v1/mars';

  constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    //obtem todos os dados de astronomia
    getMars(): Observable<Mars[]> {
      return this.httpClient.get<Mars[]>(this.url)
        .pipe(
          retry(2), catchError(this.handleError)
        )
    }

      // Manipulação de erros
    handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
