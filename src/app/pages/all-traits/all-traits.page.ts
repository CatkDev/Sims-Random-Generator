import { Component, OnInit } from '@angular/core';

import { Trait } from '../../shared/trait';
import { TraitsService } from '../../shared/service/traits.service';

@Component({
    selector: 'app-all-traits',
    templateUrl: './all-traits.page.html',
    styleUrls: ['./all-traits.page.scss'],
})
export class AllTraitsPage implements OnInit {

    traitsOriginalArray: Trait[];
    traitsPrimaryParentArrayCopy: Trait[];
    traitsSecondary: Trait[];
    primaryParentTraits: Trait;

    constructor(private traitService: TraitsService) { }

    ngOnInit() {
        this.traitsOriginalArray = this.traitService.getTraits();
        this.traitsPrimaryParentArrayCopy = this.traitService.getTraits();
        console.log(this.traitsOriginalArray);
        console.log(this.traitsPrimaryParentArrayCopy);
    }

    // Todo: Test Function
    onChangeFirstArray(){
        this.traitsPrimaryParentArrayCopy = this.traitsOriginalArray.filter(value => {
            let hasConflict =
                this.primaryParentTraits.conflict.indexOf(value.id) > -1;
            let isAlreadySelected = value.id == this.primaryParentTraits.id;
            let included = !isAlreadySelected && !hasConflict;
            if (!included) {
                console.log('filtered: ' + value.id + ' ' + value.name);
            }
            return included;
        });
      console.log(this.traitsPrimaryParentArrayCopy);
      return this.traitsPrimaryParentArrayCopy;
    }

}

/*/!*traits: trait[] = [];
    firstTraitsCopyArray: trait[] = [];
    secondTraitsCopyArray: trait[] = [];
    firstTraitPrimaryParent : trait;
    secondTraitPrimaryParent : trait;
    thirdTraitPrimaryParent : trait;

     *!/

    constructor() {
        this.traits = TRAITS;
    }

    getAllTraits() {
        return this.traits;
    }

    // setTrait(id, trait) {
    //     this.trait[id] = trait;
    // }

    // Funktioniert, aber ich muss noch verstehen wie
    // getTraits(): Observable<Trait[]> {
    //     return of(TRAITS);
    // }

    // getTrait(id) {
    //     //this.trait = this.getTraits().[id];
    // }

    // onChangeFirstArray(){
    //     this.firstTraitsCopyArray = this.traits.filter(value => {
    //         let hasConflict =
    //             this.firstTraitPrimaryParent.conflict.indexOf(value.id) > -1;
    //         let isAlreadySelected = value.id == this.firstTraitPrimaryParent.id;
    //         let included = !isAlreadySelected && !hasConflict;
    //         if (!included) {
    //             console.log('filtered: ' + value.id + ' ' + value.name);
    //         }
    //         return included;
    //     });
    //   console.log(this.firstTraitsCopyArray);
    //   return this.firstTraitsCopyArray;
    // }
    //
    // onChangeSecondArray(){
    //     console.log(this.firstTraitsCopyArray);
    //
    //     this.secondTraitsCopyArray = this.firstTraitsCopyArray.filter( value => {
    //
    //     })
    //
    //     /!*this.secondTraitsArray = this.traitsArray.filter( value => {
    //         let hasConflict =
    //             this.secondTraitPrimaryParent.conflict.indexOf(value.id) > -1;
    //         let isAlreadySelected = value.id == this.secondTraitPrimaryParent.id;
    //         let included = !isAlreadySelected && !hasConflict;
    //         if (!included) {
    //             console.log('filtered: ' + value.id + ' ' + value.name);
    //         }
    //         return included;
    //     });
    //     console.log(this.secondTraitsArray);
    //     return this.secondTraitsArray;*!/
    //
    // }
    //
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad SingleTraitPage');
    // }
*/

