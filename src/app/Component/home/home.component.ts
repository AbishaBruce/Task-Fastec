import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ApiService } from '../../service/API Service/APIService';
import { Router, ActivatedRoute } from "@angular/router";
import { Form2Component } from '../form2/form2.component';
import { saveService }  from '../../service/API Service/save.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  public ApplicationForm: FormGroup;
  model: any = {};
  countries:any;
  genderType: string;
  genders: string[] = ['Male', 'Female', 'Other'];

  email = new FormControl('', [Validators.required, Validators.email]);
   
   constructor( private apiService: ApiService,
                 private _data: saveService,
                 private router: Router,
                 ) { }
 
 
   ngOnInit() { 
         this.applicationFormControls();
         this.getErrorMessage();
         this.loadCountryFn();
     }
          
   applicationFormControls() {
     this.ApplicationForm = new FormGroup({
       FirstName: new FormControl('', [<any>Validators.required]),
       LastName: new FormControl('', [<any>Validators.required]),
       DOB: new FormControl('', [<any>Validators.required],),
       userName: new FormControl('', [<any>Validators.required]),
       Gender: new FormControl('', [<any>Validators.required]),
       Nationality: new FormControl('', [<any>Validators.required]),
       Residence: new FormControl('', [<any>Validators.required]),
        mobileNumber: new FormControl('', [<any>Validators.required,Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),]),
        // email: new FormControl('', [Validators.required, Validators.email])
   
     });  
    }
 
    loadCountryFn(){
      this.apiService.getFileContent("countries.json").subscribe(
        success => {

            this.countries = success['myArray'];
            console.log(this.countries);

        }, error => {
            console.log(error);
        }
    )
 
    }
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
  
    loadApplicationForm(){
         console.log(this.model);
         this.router.navigate(['form2']);
      //    let addConfigResponse =
      //                    this._data.addApplicationnService(this.model)
  
      // .subscribe(
      //     success => {
  
      //             console.log(success);
               
      //             if (success['errorCode'] == 200) {
      //               //  this.toastr.success(success['message']);
      //             } else  {
      //               //  this.toastr.error(success['message']);
      //             }
            
  
      //            }, error => {
      //             console.log(error);
      //            if (error.error.errorCode == 403) {
      //                // this.toastr.error(error.error.errorMessage);
      //             } else {
      //                 //this.toastr.error(error.error.errors[0].userMessage);
      //             }
      //         }
      //     );    
   }
  
   onReset() {
      this.ApplicationForm.reset();
      this.email.reset();
   }
}
