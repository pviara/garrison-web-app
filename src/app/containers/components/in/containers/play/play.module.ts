import { BuildingOverviewModule } from './containers/instances/building-overview/building-overview.module';
import { CharacterModule } from './containers/character/character.module';
import { CommonModule } from '@angular/common';
import { ComputeEntityGlobalStatePipe } from './pipes/dynamic/compute-entity-global-state.pipe';
import { ComputeOccupationRemainingTime } from './pipes/dynamic/compute-occupation-remaining-time.pipe';
import { NgModule } from '@angular/core';
import { PlayComponent } from './play.component';
import { RegisterModule } from './containers/register/register.module';
import { ResearchOverviewModule } from './containers/instances/research-overview/research-overview.module';
import { RouterModule } from '@angular/router';
import { SharedModule as PlaySharedModule } from './components/shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UnitOverviewModule } from './containers/instances/unit-overview/unit-overview.module';

@NgModule({
  declarations: [
    ComputeEntityGlobalStatePipe,
    ComputeOccupationRemainingTime,
    PlayComponent,
  ],
  imports: [
    BuildingOverviewModule,
    CharacterModule,
    CommonModule,
    RouterModule,
    PlaySharedModule,
    RegisterModule,
    ResearchOverviewModule,
    SharedModule,
    UnitOverviewModule
  ]
})
export class PlayModule {}