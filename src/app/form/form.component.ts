import { Component } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {
    username='';
    clickable=false;

    enableButton() {
        console.log(this.username)
        if (this.username !== '') {
            this.clickable = true
        } else this.clickable=false;    
    }
    
    onClick() {
        this.username=''
    }
}