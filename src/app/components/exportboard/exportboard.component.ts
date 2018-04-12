import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-exportboard',
    templateUrl: './exportboard.component.html',
    styleUrls: ['./exportboard.component.css']
})
export class ExportboardComponent {
    private correctInputControl : FormControl;
    private incorrectInputControl : FormControl;

    constructor() {

    }

    ngOnInit() {
        this.correctInputControl = new FormControl();
        this.incorrectInputControl = new FormControl();
    }

    OnKeyPress(event: Event): void {
        event.preventDefault();
    }

    OnExportData(event: Event) {

    }
}