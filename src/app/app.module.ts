import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MyName1Component } from './my-name1/my-name1.component';
import { MyName2Component } from './my-name2/my-name2.component';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewCharityComponent } from './view-charity/view-charity.component';
import {InputTextModule} from 'primeng/inputtext';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MyName1Component,
    MyName2Component,
    ViewCharityComponent
  ],
  imports: [
    AccordionModule,
    BrowserAnimationsModule,
    // MenuItem,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    RadioButtonModule,
    ToastModule,
    SelectDropDownModule,
    CalendarModule,
    InputTextModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
