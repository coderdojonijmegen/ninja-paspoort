/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Ninja } from '../models/ninja';
import { Achievement } from '../models/achievement';

/**
 * Rest API for the ninja passport
 */
@Injectable({
  providedIn: 'root',
})
class NinjaResourceService extends __BaseService {
  static readonly findNinjaUsingGETPath = '/paspoort/';
  static readonly postNinjaUsingPOSTPath = '/paspoort/';
  static readonly addAchievementUsingPUTPath = '/paspoort/';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param ninja-id ninja-id
   * @return OK
   */
  findNinjaUsingGETResponse(ninjaId: string): __Observable<__StrictHttpResponse<Ninja>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ninjaId != null) __params = __params.set('ninja-id', ninjaId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/paspoort/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Ninja>;
      })
    );
  }
  /**
   * @param ninja-id ninja-id
   * @return OK
   */
  findNinjaUsingGET(ninjaId: string): __Observable<Ninja> {
    return this.findNinjaUsingGETResponse(ninjaId).pipe(
      __map(_r => _r.body as Ninja)
    );
  }

  /**
   * @param ninja-id ninja-id
   */
  postNinjaUsingPOSTResponse(ninjaId: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (ninjaId != null) __params = __params.set('ninja-id', ninjaId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/paspoort/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param ninja-id ninja-id
   */
  postNinjaUsingPOST(ninjaId: string): __Observable<null> {
    return this.postNinjaUsingPOSTResponse(ninjaId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `NinjaResourceService.AddAchievementUsingPUTParams` containing the following parameters:
   *
   * - `ninja-id`: ninja-id
   *
   * - `achievement`: achievement
   */
  addAchievementUsingPUTResponse(params: NinjaResourceService.AddAchievementUsingPUTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ninjaId != null) __params = __params.set('ninja-id', params.ninjaId.toString());
    __body = params.achievement;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/paspoort/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `NinjaResourceService.AddAchievementUsingPUTParams` containing the following parameters:
   *
   * - `ninja-id`: ninja-id
   *
   * - `achievement`: achievement
   */
  addAchievementUsingPUT(params: NinjaResourceService.AddAchievementUsingPUTParams): __Observable<null> {
    return this.addAchievementUsingPUTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module NinjaResourceService {

  /**
   * Parameters for addAchievementUsingPUT
   */
  export interface AddAchievementUsingPUTParams {

    /**
     * ninja-id
     */
    ninjaId: string;

    /**
     * achievement
     */
    achievement: Achievement;
  }
}

export { NinjaResourceService }
