import { Component, OnInit } from '@angular/core';
import { SeriesService} from '../series.service'
import{Series} from '../series'
@Component({
  selector: 'app-listar_series',
  templateUrl: './listar_series.component.html',
  styleUrls: ['./listar_series.component.css']
})
export class Listar_seriesComponent implements OnInit {


    series: Array<Series> = [];
    promedio: number = 0;


    constructor(private SeriesService: SeriesService) { }
    getSeries(): void {
      this.SeriesService.getSeries().subscribe((series) => {
        this.series = series;
      });
    }

    getSeriesSeasons(): void {
      this.SeriesService.getSeries().subscribe((series) => {
        this.series = series;
        this.promedio = 0;
        series.forEach(serie => {
          this.promedio+=serie.seasons;
        })

        this.promedio/=series.length;


      });
    }

    ngOnInit() {

      this.getSeries();
      this.getSeriesSeasons();
    }

  }
