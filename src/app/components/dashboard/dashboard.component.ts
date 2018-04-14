import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { DashboardService } from '../../services/dashboard.service';
import { SharedDataService } from '../../services/shareddata.service'; 
import { ValidacionEncargoModel } from '../../models/ValidacionEncargoModel';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    private uploadFileForm: FormGroup;
    private excelFile: File;
    private processingRequest: boolean;

    constructor(private dashboardService: DashboardService, 
                private snackBar: MatSnackBar, 
                private router: Router, 
                private sharedData : SharedDataService<ValidacionEncargoModel[]>) {
        
    }

    ngOnInit() {
        this.uploadFileForm = new FormGroup({
            inputFilePath: new FormControl(),
            starterRow: new FormControl()
        });

        this.excelFile = null;
        this.processingRequest = false;
        this.uploadFileForm.controls["starterRow"].setValue(0);
    }

    OnSelectFile(event: Event): void {
        (<HTMLInputElement>document.getElementById("inputFile")).click();
    }

    OnFileSelected(files: File[]): void {
        this.uploadFileForm.controls["inputFilePath"].setValue(files[0].name);
        this.excelFile = files[0];
    }

    OnKeyPress(event: Event): void {
        event.preventDefault();
    }

    OnUploadFile(event: Event): void {
        this.processingRequest = true;

        if(this.excelFile == null) {
            this.processingRequest = false;
            this.snackBar.open("Tienes que seleccionar un archivo Excel.", "Entendido.", {
                duration: 2500
            });

            return;
        }
        
        this.dashboardService.postFile(this.excelFile, this.uploadFileForm.controls["starterRow"].value).subscribe(response => {
            let validacionEncargos: ValidacionEncargoModel[] = response["Encargos"];
            this.sharedData.putData(validacionEncargos);

            this.router.navigate(['/Exportboard']);
        }, errorResponse => {
            switch(errorResponse.status) {
                case 400: 
                    this.snackBar.open(errorResponse.error.Message, "Entendido.", {
                        duration: 3500
                    });
                    break;
                case 0:
                    // Éste caso se ejecuta cuando el servidor está apagado.
                    this.snackBar.open("Woops! Un error ha ocurrido. No te preocupes, estamos trabajando en ello.", "Entendido.", {
                        duration: 3500
                    });
                    break;
            }

            this.processingRequest = false;
        });

    }
}