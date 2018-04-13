import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { EncargoModel } from '../../models/EncargosModel';

@Component({
    selector: 'app-exportboard',
    templateUrl: './exportboard.component.html',
    styleUrls: ['./exportboard.component.css']
})
export class ExportboardComponent {
    private correctInputControl : FormControl;
    private incorrectInputControl : FormControl;
    private tableColumnsNames: string[];

    private exampleData: EncargoModel[] = [{
        EncargoId: 0,
        Albaran: "Albaran1",
        Destinatario: "Destinatario1",
        Direccion: "Direccion1",
        Poblacion: "Poblacion1",
        CP: "CP1",
        Provincia: "Provincia1",
        Telefono: "Telefono1",
        Observaciones: "Observaciones1",
        Fecha: "Fecha1"
    }, {
        EncargoId: 0,
        Albaran: "Albaran2",
        Destinatario: "Destinatario2",
        Direccion: "Direccion2",
        Poblacion: "Poblacion2",
        CP: "CP2",
        Provincia: "Provincia2",
        Telefono: "Telefono2",
        Observaciones: "Observaciones2",
        Fecha: "Fecha2"
    }, {
        EncargoId: 0,
        Albaran: "Albaran3",
        Destinatario: "Destinatario3",
        Direccion: "Direccion3",
        Poblacion: "Poblacion3",
        CP: "CP3",
        Provincia: "Provincia3",
        Telefono: "Telefono3",
        Observaciones: "Observaciones3",
        Fecha: "Fecha3"
    }];

    constructor() {

    }

    ngOnInit() {
        this.correctInputControl = new FormControl();
        this.incorrectInputControl = new FormControl();

        this.tableColumnsNames = ["albaran", "destinatario", "direccion", "poblacion", "cp", "provincia", "telefono", "observaciones", "fecha"];
    }

    OnKeyPress(event: Event): void {
        event.preventDefault();
    }

    OnExportData(event: Event) {

    }
}