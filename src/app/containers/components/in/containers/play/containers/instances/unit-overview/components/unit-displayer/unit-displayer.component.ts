import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import {
  GarrisonBuilding,
  GarrisonResearch,
  GarrisonResources,
  GarrisonUnit
} from 'src/models/dynamic/IGarrison';
import { ICharacter } from 'src/models/dynamic/ICharacter';
import { IStaticEntity } from 'src/models/static/IStaticEntity';
import { IUnitCreate } from 'src/models/dynamic/payloads/IUnitCreate';

@Component({
  selector: 'garrison-in-play-unit-displayer',
  templateUrl: './unit-displayer.component.html',
  styleUrls: ['./unit-displayer.component.scss']
})
export class UnitDisplayerComponent implements OnDestroy, OnInit {
  @Input()
  character!: ICharacter;
  
  @Output()
  createUnit = new EventEmitter<IUnitCreate>();

  @Input()
  dynamicBuildings!: GarrisonBuilding[];

  @Input()
  dynamicResearches!: GarrisonResearch[];

  @Input()
  dynamicUnits!: GarrisonUnit[];

  @Input()
  resources!: GarrisonResources;

  now = new Date();
  
  @Input()
  staticEntity!: IStaticEntity;

  private _timer: any;
  
  ngOnDestroy() {
    clearInterval(this._timer);
  }
  
  ngOnInit() {
    this._timer = setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  onUnitTraining(payload: IUnitCreate) {
    this.createUnit.emit(payload);
  }
}