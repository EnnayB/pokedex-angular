import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonListComponent } from './favorite-pokemon-list.component';

describe('FavoritePokemonListComponent', () => {
  let component: FavoritePokemonListComponent;
  let fixture: ComponentFixture<FavoritePokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritePokemonListComponent]
    });
    fixture = TestBed.createComponent(FavoritePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
