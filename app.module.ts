import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatalistComponent } from './datalist/datalist.component';
import { EditdataComponent } from './editdata/editdata.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { Dataservice } from './data.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    EditdataComponent,
    CheckboxComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [Dataservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
