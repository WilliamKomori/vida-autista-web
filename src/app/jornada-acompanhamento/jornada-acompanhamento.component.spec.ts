import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaAcompanhamentoComponent } from './jornada-acompanhamento.component';

describe('JornadaAcompanhamentoComponent', () => {
  let component: JornadaAcompanhamentoComponent;
  let fixture: ComponentFixture<JornadaAcompanhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadaAcompanhamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornadaAcompanhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
