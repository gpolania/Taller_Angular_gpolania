/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { Listar_seriesComponent } from './listar_series.component';
import { Series } from '../series';
import { SeriesService } from '../series.service';

describe('Listar_seriesComponent', () => {
  let component: Listar_seriesComponent;
  let fixture: ComponentFixture<Listar_seriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ Listar_seriesComponent ],
      providers: [ SeriesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listar_seriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
