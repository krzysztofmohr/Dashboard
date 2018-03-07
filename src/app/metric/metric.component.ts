import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
  @Input() title: string; // don't forget to sanitize
  @Input() description: string;
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  constructor() { }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
