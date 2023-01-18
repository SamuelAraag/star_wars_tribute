import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListaPersonagensComponent } from "./lista-personagens.component";

describe("ListaPessoasComponent", () => {
  let component: ListaPersonagensComponent;
  let fixture: ComponentFixture<ListaPersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPersonagensComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
