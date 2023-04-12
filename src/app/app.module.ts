import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterPDFComponent } from './converter-pdf/converter-pdf.component';
import { PdfToImageComponentComponent } from './pdf-to-image-component/pdf-to-image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterPDFComponent,
    PdfToImageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
