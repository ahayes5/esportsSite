import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGamesComponent } from './comp-games.component';

describe('CompGamesComponent', () => {
  let component: CompGamesComponent;
  let fixture: ComponentFixture<CompGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
