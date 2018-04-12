import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as WebApiData from '../utils/develoop.webapi';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient) {

    }

    postFile(excelFile: File): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        let formData: FormData = new FormData();
        formData.append("excelFile", excelFile);

        return this.http.post(WebApiData.getFullPath("api/Encargos/UploadFile"), formData, httpOptions);
    }
}