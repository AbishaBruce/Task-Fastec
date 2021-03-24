import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Component/home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
import {MatProgressBarModule} from '@angular/material/progress-bar';

// Mask Phone Number
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { Form2Component } from './Component/form2/form2.component';
import { Form3Component } from './Component/form3/form3.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Form2Component,
    Form3Component,
    
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    WavesModule,
    CollapseModule,
    HttpClientModule ,
     NgxMaskModule.forRoot(maskConfig),
    
   ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],   
  bootstrap: [AppComponent]
})
export class AppModule { }
