import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllTraitsPage } from './all-traits.page';

describe('AllTraitsPage', () => {
  let component: AllTraitsPage;
  let fixture: ComponentFixture<AllTraitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTraitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllTraitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
