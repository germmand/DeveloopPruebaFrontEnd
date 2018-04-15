import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material';

import { EncargoModel } from '../../models/EncargosModel';
import { SharedDataService } from '../../services/shareddata.service'; 
import { ValidacionEncargoModel } from '../../models/ValidacionEncargoModel';
import { EditRowModel } from '../../models/EditRowModel';
import { DashboardService } from '../../services/dashboard.service';

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
                private snackBar: MatSnackBar,
                private dashboardService: DashboardService,
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

        this.correctInputControl.setValue(corrects);
        this.incorrectInputControl.setValue(incorrects);
    }

    OnKeyPress(event: Event): void {
        event.preventDefault();
    }

    OnExportData(event: Event): void {
        if(this.incorrectInputControl.value != 0) {
            this.snackBar.open("Todos los errores deben corregirse antes de exportar.", "Entendido.", {
                duration: 2500
            });

            return;
        }
    }

    OnRowChange(element: EncargoModel) {
        this.dashboardService.checkEncargoModel(element).subscribe(response => {
            // La razón por la que sólo actualizamos el arreglo de ValidationErrors del elemento
            // es porque existe "Two way binding" con el input, por lo que una vez se cambie en la fila
            // se cambia en el arreglo del DataSource, siendo éste mismo el elemento que se valida en el servidor de igual forma.
            // Por lo que sería innecesario recrear otro elemento.
            // Por ende, sólo es necesario actualizar su arreglo de "ValidationErrors" con la respuesta del servidor y recalcular los errores totales.
            element.ValidationErrors = response["ValidationErrors"];
            this.computeCorrectsAndIncorrects();
        }, errorResponse => {
            console.log("Error: " + errorResponse);
        });
    }

    HasErrorOnProperty(element: EncargoModel, property: string) {
        for(let i = 0; i < element.ValidationErrors.length; i++) {
            if(element.ValidationErrors[i].PropertyName == property) {
                return true;
            }
        }

        return false;
    }

    FindErrorMessage(element: EncargoModel, property: string): string {
        for(let i = 0; i < element.ValidationErrors.length; i++) {
            if(element.ValidationErrors[i].PropertyName == property) {
                return element.ValidationErrors[i].ErrorDescription;
            }
        }

        return "";
    }

    splitString(cadena: string, index: number): string[] {
        if(cadena == null) return ["", ""];
        
        return cadena.length > index ? [cadena.substr(0, index), cadena.substr(index)] : [cadena, ""];
    }
}