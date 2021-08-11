import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixTuresAndResultsComponent } from './fix-tures-and-results.component';

describe('FixTuresAndResultsComponent', () => {
  let component: FixTuresAndResultsComponent;
  let fixture: ComponentFixture<FixTuresAndResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixTuresAndResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixTuresAndResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
