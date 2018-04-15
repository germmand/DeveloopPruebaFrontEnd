import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as WebApiData from '../utils/develoop.webapi';
import { Observable } from 'rxjs/Observable';
import { EncargoModel } from '../models/EncargosModel';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient) {

    }

    postFile(excelFile: File, starterRow: number): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        let formData: FormData = new FormData();
        formData.append("excelFile", excelFile);

        return this.http.post(WebApiData.getFullPath("api/Encargos/UploadFile?rowIndex=" + starterRow), formData, httpOptions);
    }

    checkEncargoModel(encargoModel: EncargoModel): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.post(WebApiData.getFullPath("api/Encargos/Check"), encargoModel, httpOptions);
    }

    createEncargoEntity(encargoModel: EncargoModel): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.post(WebApiData.getFullPath("api/Encargos"), encargoModel, httpOptions);
    }
}