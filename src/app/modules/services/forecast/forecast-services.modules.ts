import { NgModule } from '@angular/core';
import { ForecastDataService } from './forecast-data.service';


const DATA_SERVICES = [
  ForecastDataService
];


@NgModule({
  imports: [],
  exports: [],
  providers: [
    ...DATA_SERVICES]
})

export class ForecastServicesModules {

}
