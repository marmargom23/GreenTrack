import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';
import { ObjetivosService } from '../../services/objetivos.service';

import { MatCardModule } from '@angular/material/card';
import { Consumo } from '../../models/consumo.model';

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  consumo: any[] = [];
  objetivos: any[] = [];

  labels: string[] = [];
  chartData: any;

  ultimoConsumo: any = null;
  ultimoObjetivo: any = null;

  constructor(
    private consumoService: ConsumoService,
    private objetivosService: ObjetivosService,
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.consumoService.getConsumo().subscribe((cons) => {
      this.consumo = cons;
      this.ultimoConsumo = cons[cons.length - 1];

      this.labels = cons.map((c: Consumo) => `${c.mes}/${c.anio}`);

      this.chartData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Consumo (kWh)',
            data: cons.map((c: Consumo) => c.kwh),
            borderColor: '#FFB74D',
            backgroundColor: 'rgba(255,183,77,0.25)',
            pointBackgroundColor: '#FFCC80',
            pointBorderColor: '#FFB74D',
            tension: 0.3,
          },
        ],
      };
    });

    this.objetivosService.getObjetivos().subscribe((obj) => {
      this.objetivos = obj;
      this.ultimoObjetivo = obj[obj.length - 1];
    });
  }
}
