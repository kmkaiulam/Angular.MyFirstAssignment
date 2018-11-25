import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-alerts',
    template: `<app-warning-alert></app-warning-alert>
               <app-success-alert></app-success-alert>`,
    styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
}