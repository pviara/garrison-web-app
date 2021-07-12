import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2
} from "@angular/core";
import { Subscription } from "rxjs";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Component({
  selector: 'garrison-in-play-global-resource-displayer',
  templateUrl: './global-resource-displayer.component.html',
  styleUrls: ['./global-resource-displayer.component.scss']
})
export class GlobalResourceDisplayerComponent implements AfterViewChecked, OnDestroy, OnInit {
  characterSubscription!: Subscription;

  color!: string;

  private _timer: any;
  
  value = 0;

  constructor(private _localStorageService: LocalStorageService) {}

  ngAfterViewChecked() {
    this.characterSubscription.unsubscribe();
  }

  ngOnDestroy() {
    clearInterval(this._timer);
  }

  ngOnInit() {
    this._initTextColor();
    this._timer = setInterval((_: any) => {
      this.value++;
    }, 1000);
  }

  private _initTextColor() {
    this.characterSubscription = this
      ._localStorageService
      .characterSubject
      .subscribe(character => {
        if (!character) return;

        if (character.side.faction === 'alliance') {
          this.color = '#8da3af';
        } else if (character.side.faction === 'horde') {
          this.color = '#af8d8d';
        } else throw new Error("Character's faction is not valid.");
      });
  }
}