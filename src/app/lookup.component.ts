
import { Component } from '@angular/core';

import { ClaimInfo } from './claiminfo'
import { LookupService} from './lookup.service';

@Component({
  selector: 'clup',
  templateUrl: './lookup.component.html'
})
export class LookupComponent  
{ 
    claimNumber : string = ''; 
    firstName : string = '';
    lastName : string = '';
    ssn : string = '';
    injuryDate : string = '';
    
    _cn='';

    _foundClaim : ClaimInfo = { BodyPart:"", ClaimNumber:"", ClaimStatus:"",  DateOfInjury:"12/01/2001", Employer:"", FirstName:"", LastName:"" };


    constructor(private _lookupService: LookupService) { }

    lookupClaim(cn : string)
    {
        console.log(cn);
        
        this._lookupService.getClaimInfo(cn)
          .subscribe(claim => this._foundClaim = claim);
        }

}