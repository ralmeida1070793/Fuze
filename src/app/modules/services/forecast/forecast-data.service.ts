import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ForecastModel} from '../../models/entities/forecast';

@Injectable()
export class ForecastDataService {
  private api: string;
  private apiKey: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.api = 'https://api.weather.gov/stations/KBOS/observations/latest';
  }

  public getForecast(station: string): Observable<ForecastModel>
  {
    const endpoint = `${this.api}/conversations`;

    return this.httpClient.get<any>(endpoint).pipe(map(response => {
        return {
          station: response.properties.station,
          timestamp: response.properties.timestamp,
          rawMessage: response.properties.rawMessage,
          textDescription: response.properties.textDescription,
          icon: response.properties.icon
        } as ForecastModel;
      }
    ));
  }
}
