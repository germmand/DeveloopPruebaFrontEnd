import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as WebApiData from '../utils/develoop.webapi';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient) {

    }
}