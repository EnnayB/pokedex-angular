import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonListComponent } from './my-pokemon-list.component';

describe('MyPokemonListComponent', () => {
  let component: MyPokemonListComponent;
  let fixture: ComponentFixture<MyPokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPokemonListComponent]
    });
    fixture = TestBed.createComponent(MyPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
