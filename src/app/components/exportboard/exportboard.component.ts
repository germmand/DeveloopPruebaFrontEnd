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
        this.correctInputControl = new FormControl(0);
        this.incorrectInputControl = new FormControl(0);

        this.tableColumnsNames = ["albaran", "destinatario", "direccion", "poblacion", "cp", "provincia", "telefono", "observaciones", "fecha"];
        
        let excelData: ValidacionEncargoModel[] = this.sharedData.fetchData();
        if(excelData == null) {
            this.router.navigate(['/Dashboard']);
            return;
        }

        for(let i = 0; i < excelData.length; i++) {
            let encargo: EncargoModel = excelData[i].Encargo;

            encargo.EditRow = new EditRowModel();
            encargo.ValidationErrors = excelData[i].ValidationErrors;
            encargo.RowIndex = i;

            this.gridData.push(encargo);
        }

        this.computeCorrectsAndIncorrects();
    }

    computeCorrectsAndIncorrects(): void {
        let corrects: number = 0;
        let incorrects: number = 0;

        for(let i = 0; i < this.gridData.length; i++) {
            let currentErrors = this.gridData[i].ValidationErrors.length;
            corrects += 9 - currentErrors;
            incorrects += currentErrors;
        }

        console.log(corrects + " - " + incorrects);

        this.correctInputControl.setValue(corrects);
        this.incorrectInputControl.setValue(incorrects);
    }

    OnKeyPress(event: Event): void {
        event.preventDefault();
    }

    OnExportData(event: Event): void {

    }

    OnRowChange(element: EncargoModel) {
        // Acá se hará la comprobación al backend.
    }

    HasErrorOnProperty(element: EncargoModel, property: string) {
        for(let i = 0; i < element.ValidationErrors.length; i++) {
            if(element.ValidationErrors[i].PropertyName == property) {
                return true;
            }
        }

        return false;
    }

    splitString(cadena: string, index: number): string[] {
        if(cadena == null) return ["", ""];
        
        return cadena.length > index ? [cadena.substr(0, index), cadena.substr(index)] : [cadena, ""];
    }
}