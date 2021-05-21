import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleTraitPage } from './single-trait.page';

describe('SingleTraitPage', () => {
  let component: SingleTraitPage;
  let fixture: ComponentFixture<SingleTraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTraitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleTraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
