import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPdfGenComponent } from './my-pdf-gen.component';

describe('MyPdfGenComponent', () => {
  let component: MyPdfGenComponent;
  let fixture: ComponentFixture<MyPdfGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPdfGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPdfGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
