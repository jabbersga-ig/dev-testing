import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalVersionComponent } from './original-version.component';

describe('OriginalVersionComponent', () => {
  let component: OriginalVersionComponent;
  let fixture: ComponentFixture<OriginalVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginalVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
