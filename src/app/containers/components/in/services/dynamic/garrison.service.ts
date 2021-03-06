import { AuthService } from 'src/app/shared/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IBuildingCreate } from 'src/models/dynamic/payloads/IBuildingCreate';
import { IBuildingConstructionCancel } from 'src/models/dynamic/payloads/IBuildingConstructionCancel';
import { ICharacter } from 'src/models/dynamic/ICharacter';
import { IGarrison } from 'src/models/dynamic/IGarrison';
import { IGarrisonCreate } from 'src/models/dynamic/payloads/IGarrisonCreate';
import { Injectable } from '@angular/core';
import { IUnitAssign } from 'src/models/dynamic/payloads/IUnitAssign';
import { IBuildingUpgradeOrExtend } from 'src/models/dynamic/payloads/IBuildingUpgradeOrExtend';
import { IResearchCancel } from 'src/models/dynamic/payloads/IResearchCancel';
import { IResearchCreate } from 'src/models/dynamic/payloads/IResearchCreate';
import { IUnitCreate } from 'src/models/dynamic/payloads/IUnitCreate';
import { IUnitTrainingCancel } from 'src/models/dynamic/payloads/IUnitTrainingCancel';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { RegisterService } from './register.service';
import { tap } from 'rxjs/operators';

type GarrisonRepoResponse = { garrison: IGarrison; character?: ICharacter };

@Injectable()
export class GarrisonService {
  private _endpoint = 'garrison';

  private _garrison!: IGarrison;
  garrisonSubject = new BehaviorSubject(this.garrison);
  
  set garrison(value: IGarrison | undefined) {
    if (!value) return;

    this.garrisonSubject.next(value);
  }

  get garrison() {
    return this._garrison;
  }
  
  constructor(
    private _authService: AuthService,
    private _client: HttpClient,
    private _localStorageService: LocalStorageService,
    private _registerService: RegisterService
  ) {}

  addGarrisonIdToLocalStorage(id: IGarrison['_id']) {
    this._localStorageService.garrisonId = id;
    return this._localStorageService.garrisonId;
  }

  assignUnit(payload: IUnitAssign) {
    return this._client.put<IGarrison>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/unit/assign`,
      payload
    ).pipe(
      tap((garrison: IGarrison) => this.garrison = garrison)
    );
  }

  cancelConstruction(payload: IBuildingConstructionCancel) {
    return this._client.put<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/building/cancel`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
        
        this
          ._registerService
          .getFromGarrison(response.garrison._id)
          .subscribe();
      })
    );
  }

  cancelResearch(payload: IResearchCancel) {
    return this._client.put<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/research/cancel`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
        
        this
          ._registerService
          .getFromGarrison(response.garrison._id)
          .subscribe();
      })
    );
  }

  cancelTraining(payload: IUnitTrainingCancel) {
    return this._client.put<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/unit/cancel`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
        
        this
          ._registerService
          .getFromGarrison(response.garrison._id)
          .subscribe();
      })
    );
  }
  
  create(payload: IGarrisonCreate) {
    return this._client.post<IGarrison>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}`,
      payload
    );
  }

  createBuilding(payload: IBuildingCreate) {
    return this._client.post<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/building`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
      })
    );
  }

  extendBuilding(payload: IBuildingUpgradeOrExtend) {
    return this._client.put<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/building/extend`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
      })
    );
  }

  launchResearch(payload: IResearchCreate) {
    return this._client.post<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/research`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
      })
    );
  }

  getCurrentGarrison() {
    const userFromStorage = this._authService.getCurrentUserFromStorage();
    if (!userFromStorage) {
      throw new Error(
        'Method was called but process has been canceled because no user could be found.'
      );
    }

    return this._client.get<IGarrison>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/${userFromStorage._id}`
    ).pipe(
      tap((garrison: IGarrison) => this.garrison = garrison)
    );
  }

  getCurrentGarrisonIdFromStorage() {
    return this._localStorageService.garrisonId;
  }

  trainUnit(payload: IUnitCreate) {
    return this._client.post<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/unit`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
      })
    );
  }

  unassignUnit(payload: IUnitAssign) {
    return this._client.put<IGarrison>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/unit/unassign`,
      payload
    ).pipe(
      tap((garrison: IGarrison) => this.garrison = garrison)
    );
  }

  upgradeBuilding(payload: IBuildingUpgradeOrExtend) {
    return this._client.put<GarrisonRepoResponse>(
      `${environment.apiUrl}/${environment.dbNameDynamic}/${this._endpoint}/building/upgrade`,
      payload
    ).pipe(
      tap((response: GarrisonRepoResponse) => {
        this.garrison = response.garrison;
        this._localStorageService.character = response.character;
      })
    );
  }
}