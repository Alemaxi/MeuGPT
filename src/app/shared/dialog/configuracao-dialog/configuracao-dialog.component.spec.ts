import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoDialogComponent } from './configuracao-dialog.component';

describe('ConfiguracaoDialogComponent', () => {
  let component: ConfiguracaoDialogComponent;
  let fixture: ComponentFixture<ConfiguracaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConfiguracaoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
