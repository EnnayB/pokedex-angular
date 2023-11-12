import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonEditComponent } from './my-pokemon-edit.component';

describe('MyPokemonEditComponent', () => {
  let component: MyPokemonEditComponent;
  let fixture: ComponentFixture<MyPokemonEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPokemonEditComponent]
    });
    fixture = TestBed.createComponent(MyPokemonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
