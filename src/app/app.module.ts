import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfToImageComponent } from './pdf-to-image/pdf-to-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfToImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, PdfToImageComponent]
})
export class AppModule { }
