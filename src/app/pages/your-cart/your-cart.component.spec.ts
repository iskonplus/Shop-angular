import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCartComponent } from './your-cart.component';

describe('YourCartComponent', () => {
  let component: YourCartComponent;
  let fixture: ComponentFixture<YourCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
