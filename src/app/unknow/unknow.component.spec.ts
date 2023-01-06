import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowComponent } from './unknow.component';

describe('UnknowComponent', () => {
  let component: UnknowComponent;
  let fixture: ComponentFixture<UnknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
