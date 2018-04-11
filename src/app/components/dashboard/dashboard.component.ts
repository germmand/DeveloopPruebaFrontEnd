import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    private uploadFileForm: FormGroup;
    private excelFile: File;

    constructor(private dashboardService: DashboardService) {
        
    }

    ngOnInit() {
        this.uploadFileForm = new FormGroup({
            inputFilePath: new FormControl(),
            starterRow: new FormControl()
        });
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
}