import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropSubscriptionsComponent } from './crop-subscriptions.component';

describe('CropSubscriptionsComponent', () => {
  let component: CropSubscriptionsComponent;
  let fixture: ComponentFixture<CropSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropSubscriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
