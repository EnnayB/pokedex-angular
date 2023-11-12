import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonDetailsComponent } from './my-pokemon-details.component';

describe('MyPokemonDetailsComponent', () => {
  let component: MyPokemonDetailsComponent;
  let fixture: ComponentFixture<MyPokemonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPokemonDetailsComponent]
    });
    fixture = TestBed.createComponent(MyPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
