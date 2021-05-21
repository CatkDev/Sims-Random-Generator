import { Injectable } from '@angular/core';

import { Trait } from '../trait';
import { TRAITS } from '../trait-data';

@Injectable({
    providedIn: 'root'
})
export class TraitsService {

    //traits = TRAITS;

    constructor() { }

    getTraits(): Trait[] {
        return TRAITS;
    }

    // getTraitsObs(): Observable<Trait[]> {
    //     return of(TRAITS);
    // }

}
