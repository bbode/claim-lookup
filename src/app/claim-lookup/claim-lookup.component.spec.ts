import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimLookupComponent } from './claim-lookup.component';

describe('ClaimLookupComponent', () => {
  let component: ClaimLookupComponent;
  let fixture: ComponentFixture<ClaimLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
