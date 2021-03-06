import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {
  private _assetsPath = '../../../assets/sounds';

  private _sounds!: {
    name: string;
    path: string;
  }[];

  constructor() {
    this._sounds = [{
      name: 'alliance_unit',
      path: 'alliance_unit.ogg'
    },
    {
      name: 'building_finished',
      path: 'building_finished.ogg'
    },
    {
      name: 'click',
      path: 'global_button-click.ogg'
    },
    {
      name: 'create',
      path: 'create_passed.ogg'
    },
    {
      name: 'create_human_female',
      path: 'create_human_female.ogg'
    },
    {
      name: 'create_orc_female',
      path: 'create_orc_female.ogg'
    },
    {
      name: 'create_human_male',
      path: 'create_human_male.ogg'
    },
    {
      name: 'create_orc_male',
      path: 'create_orc_male.ogg'
    },
    {
      name: 'error',
      path: 'global_error.ogg'
    },
    {
      name: 'greetings',
      path: 'global_greetings.ogg'
    },
    {
      name: 'horde_unit',
      path: 'horde_unit.ogg'
    },
    {
      name: 'open_register',
      path: 'open_register.ogg'
    },
    {
      name: 'peasant_yes_1',
      path: 'peasant_yes_1.ogg'
    },
    {
      name: 'peasant_yes_2',
      path: 'peasant_yes_2.ogg'
    },
    {
      name: 'peasant_yes_3',
      path: 'peasant_yes_3.ogg'
    },
    {
      name: 'peon_yes_1',
      path: 'peon_yes_1.ogg'
    },
    {
      name: 'peon_yes_2',
      path: 'peon_yes_2.ogg'
    },
    {
      name: 'peon_yes_3',
      path: 'peon_yes_3.ogg'
    }];
  }

  play(sound: string) {
    const fromAssets = this._sounds.find(s => s.name === sound);
    if (!fromAssets) {
      throw new Error(`No sound was found with the name '${sound}'.`);
    }

    const audio = new Audio(`${this._assetsPath}/${fromAssets.path}`);
    audio.volume = 0.3;
    audio.play();
  }

  playRandomly(sound: string, min: number, max: number) {
    const random = Math.floor(Math.random() * (max - min) + min);
    sound = `${sound}_${random}`;
    
    this.play(sound);
  }
}
