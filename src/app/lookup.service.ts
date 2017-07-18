import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { ClaimInfo } from './claiminfo';

@Injectable()
export class LookupService {

    _myclaim : ClaimInfo;
    _url : string = "http://claimservice20170706033244.azurewebsites.net/api/claim/";

    constructor(private _http : Http){}

    getClaimInfo(claimNumberToCheck:string) : Observable<ClaimInfo>
    {
        let checkUrl = this._url + claimNumberToCheck;
        
        return  this._http.get(checkUrl)
                            .map((response: Response) => <ClaimInfo> response.json())
                            .do(data => console.log('All' + JSON.stringify(data)))
                            .catch(this.getClaimError)
                            ;

         
        
    }

    private getClaimError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}