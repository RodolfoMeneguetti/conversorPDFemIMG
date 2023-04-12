import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToImageComponentComponent } from './pdf-to-image-component.component';

describe('PdfToImageComponentComponent', () => {
  let component: PdfToImageComponentComponent;
  let fixture: ComponentFixture<PdfToImageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfToImageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfToImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
