import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

@Component({
  selector: 'app-pdf-to-image',
  templateUrl: './pdf-to-image.component.html',
  styleUrls: ['./pdf-to-image.component.scss']
})
export class PdfToImageComponent {
  @ViewChild('pdfViewer', { static: true }) pdfViewer: ElementRef;

  pdfSrc: string;
  pdfDoc: PDFDocumentProxy;

  constructor(){}

  loadPdf(pdfUrl: string){
    pdfjsLib.getDocument(pdfUrl).promise.then((pdfDoc: PDFDocumentProxy) => {
      this.pdfDoc = pdfDoc
      this.renderPage(1);
    })
  }

  renderPage(pageNumber: number){
    this.pdfDoc.getPage(pageNumber).then(page => {
      const canvas = this.pdfViewer.nativeElement;
      const viewport = page.getViewport({scale: 1});
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    })
  }


}
