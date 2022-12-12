import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneporductComponent } from './showoneporduct.component';

describe('ShowoneporductComponent', () => {
  let component: ShowoneporductComponent;
  let fixture: ComponentFixture<ShowoneporductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoneporductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoneporductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
