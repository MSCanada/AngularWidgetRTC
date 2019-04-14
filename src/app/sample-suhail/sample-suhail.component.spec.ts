import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSuhailComponent } from './sample-suhail.component';

describe('SampleSuhailComponent', () => {
  let component: SampleSuhailComponent;
  let fixture: ComponentFixture<SampleSuhailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSuhailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSuhailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
