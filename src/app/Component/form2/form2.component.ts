import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ApiService } from '../../service/API Service/APIService';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  

  public QuestionaireForm: FormGroup;
  model: any = {};
  constructor(private router: Router) { }

  ngOnInit() { 
    this.QuestionaireFormControls();
   
}
     
QuestionaireFormControls() {
this.QuestionaireForm= new FormGroup({ });  
}

  loadQuestionaireForm(){
    
    this.router.navigate(['form3']);
  }
}
