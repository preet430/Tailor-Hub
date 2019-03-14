import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtCustomizerComponent } from './shirt-customizer.component';

describe('ShirtCustomizerComponent', () => {
  let component: ShirtCustomizerComponent;
  let fixture: ComponentFixture<ShirtCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirtCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
