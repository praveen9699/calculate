import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditdataRoutingModule } from './editdata-routing.module';
import { Dataservice } from '../data.service';

import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditdataRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Dataservice,
    DatePipe
  ]
})
export class EditdataModule { }
