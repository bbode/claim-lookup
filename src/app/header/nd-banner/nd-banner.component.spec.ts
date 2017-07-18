import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdBannerComponent } from './nd-banner.component';

describe('NdBannerComponent', () => {
  let component: NdBannerComponent;
  let fixture: ComponentFixture<NdBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
