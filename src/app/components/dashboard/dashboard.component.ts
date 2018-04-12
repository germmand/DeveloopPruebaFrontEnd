import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    private uploadFileForm: FormGroup;
    private excelFile: File;

    constructor(private dashboardService: DashboardService, private snackBar: MatSnackBar) {
        
    }

    ngOnInit() {
        this.uploadFileForm = new FormGroup({
            inputFilePath: new FormControl(),
            starterRow: new FormControl()
        });

        this.excelFile = null;
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
        if(this.excelFile == null) {
            this.snackBar.open("Tienes que seleccionar un archivo Excel.", "Entendido.", {
                duration: 2500
            });
            return;
        }

        this.dashboardService.postFile(this.excelFile).subscribe(response => {
            console.log(response);
        }, error => {
            this.snackBar.open("Woops! Un error ha ocurrido. No te preocupes, estamos trabajando en ello.", "Entendido.", {
                duration: 3500
            });
        });
    }
}