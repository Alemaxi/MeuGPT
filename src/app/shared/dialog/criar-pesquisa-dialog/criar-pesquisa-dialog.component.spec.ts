import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPesquisaDialogComponent } from './criar-pesquisa-dialog.component';

describe('CriarPesquisaDialogComponent', () => {
  let component: CriarPesquisaDialogComponent;
  let fixture: ComponentFixture<CriarPesquisaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CriarPesquisaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPesquisaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
