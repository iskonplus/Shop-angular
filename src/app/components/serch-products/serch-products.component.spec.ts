import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchProductsComponent } from './serch-products.component';

describe('SerchProductsComponent', () => {
  let component: SerchProductsComponent;
  let fixture: ComponentFixture<SerchProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerchProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
