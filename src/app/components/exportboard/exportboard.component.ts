import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router'; 

import { EncargoModel } from '../../models/EncargosModel';
import { SharedDataService } from '../../services/shareddata.service'; 
import { ValidacionEncargoModel } from '../../models/ValidacionEncargoModel';
import { EditRowModel } from '../../models/EditRowModel';

@Component({
    selector: 'app-exportboard',
    templateUrl: './exportboard.component.html',
    styleUrls: ['./exportboard.component.css']
})
export class ExportboardComponent {
    private correctInputControl : FormControl;
    private incorrectInputControl : FormControl;
    private tableColumnsNames: string[];

    private gridData: EncargoModel[];

    constructor(private router: Router, 
                private sharedData: SharedDataService<ValidacionEncargoModel[]>) {
        this.gridData = [];
    }

    ngOnInit() {
        this.correctInputControl = new FormControl();
        this.incorrectInputControl = new FormControl();

        this.tableColumnsNames = ["albaran", "destinatario", "direccion", "poblacion", "cp", "provincia", "telefono", "observaciones", "fecha"];
        
        let excelData: ValidacionEncargoModel[] = this.sharedData.fetchData();
        if(excelData == null) {
            return;
        }

        for(let i = 0; i < excelData.length; i++) {
            let encargo: EncargoModel = excelData[i].Encargo;
            encargo.EditRow = new EditRowModel();

            this.gridData.push(encargo);
        }
    }

    OnKeyPress(event: Event): void {
        event.preventDefault();
    }

    OnExportData(event: Event): void {

    }

    OnRowChange(element: EncargoModel) {
        // Acá se hará la comprobación al backend.
    }
}