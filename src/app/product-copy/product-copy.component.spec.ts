import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCopyComponent } from './product-copy.component';

describe('ProductCopyComponent', () => {
  let component: ProductCopyComponent;
  let fixture: ComponentFixture<ProductCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
