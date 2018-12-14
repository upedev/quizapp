import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent{
  OnChange($event){
    console.log($event); 
    //MatCheckboxChange {checked,MatCheckbox}
  }
}
