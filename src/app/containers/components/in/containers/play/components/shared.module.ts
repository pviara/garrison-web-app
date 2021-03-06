import { CastToHarvestBuildingPipe } from '../pipes/static/cast-to-harvest-building.pipe';
import { CastToInstantiableBuildingPipe } from '../pipes/static/cast-to-instantiable-building.pipe';
import { CastToInstantiablePipe } from '../pipes/static/cast-to-instantiable.pipe';
import { CastToInstantiableUnitPipe } from '../pipes/static/cast-to-instantiable-unit.pipe';
import { CastToNotDynamicResource } from '../pipes/resource/cast-to-not-dynamic-resource.pipe';
import { CommonModule } from '@angular/common';
import { ComputeConstructionDurationPipe } from '../pipes/dynamic/compute-construction-duration.pipe';
import { ComputeInstantiationRequirementsPipe } from '../pipes/dynamic/compute-instantiation-requirements.pipe';
import { ComputeImagePathPipe } from '../pipes/static/compute-image-path.pipe';
import { ComputeResourceValuePipe } from '../pipes/resource/compute-resource-value.pipe';
import { ComputeTotalAvailableBuildingsPipe } from '../pipes/dynamic/compute-total-available-buildings.pipe';
import { ComputeTotalUnavailableBuildingsPipe } from '../pipes/dynamic/compute-total-unavailable-buildings.pipe';
import { ConvertToReadableDurationPipe } from '../pipes/utils/convert-to-readable-time.pipe';
import { EntityDisplayerComponent } from './entity-displayer/entity-displayer.component';
import { EntityNavigatorComponent } from './entity-navigator/entity-navigator.component';
import { EntityRequirementsComponent } from './entity-requirements/entity-requirements.component';
import { FactionHoverBackgroundDirective } from '../directives/faction-hover-background.directive';
import { FillWithUnusableSlotsPipe } from '../pipes/static/fill-with-unusable-slots.pipe';
import { GlobalResourceDisplayerComponent } from './global-resource-displayer/global-resource-displayer.component';
import { NgModule } from '@angular/core';
import { ResourceDisplayerComponent } from './resource-displayer/resource-displayer.component';
import { RouterModule } from '@angular/router';
import { SharedModule as GlobalSharedModule } from 'src/app/shared/shared.module';
import { SmoothTextChangerDirective } from '../directives/smooth-text-changer.directive';
import { CastToBuildingPipe } from '../pipes/static/cast-to-building.pipe';

@NgModule({
  declarations: [
    CastToBuildingPipe,
    CastToHarvestBuildingPipe,
    CastToInstantiableBuildingPipe,
    CastToInstantiablePipe,
    CastToInstantiableUnitPipe,
    CastToNotDynamicResource,
    ComputeConstructionDurationPipe,
    ComputeInstantiationRequirementsPipe,
    ComputeImagePathPipe,
    ComputeResourceValuePipe,
    ComputeTotalAvailableBuildingsPipe,
    ComputeTotalUnavailableBuildingsPipe,
    ConvertToReadableDurationPipe,
    EntityDisplayerComponent,
    EntityNavigatorComponent,
    EntityRequirementsComponent,
    FactionHoverBackgroundDirective,
    FillWithUnusableSlotsPipe,
    GlobalResourceDisplayerComponent,
    ResourceDisplayerComponent,
    SmoothTextChangerDirective
  ],
  imports: [
    CommonModule,
    GlobalSharedModule,
    RouterModule
  ],
  exports: [
    CastToBuildingPipe,
    CastToHarvestBuildingPipe,
    CastToInstantiableBuildingPipe,
    CastToInstantiablePipe,
    CastToInstantiableUnitPipe,
    CastToNotDynamicResource,
    ComputeConstructionDurationPipe,
    ComputeInstantiationRequirementsPipe,
    ComputeImagePathPipe,
    ComputeResourceValuePipe,
    ComputeTotalAvailableBuildingsPipe,
    ComputeTotalUnavailableBuildingsPipe,
    ConvertToReadableDurationPipe,
    EntityDisplayerComponent,
    EntityNavigatorComponent,
    EntityRequirementsComponent,
    FactionHoverBackgroundDirective,
    FillWithUnusableSlotsPipe,
    GlobalResourceDisplayerComponent,
    ResourceDisplayerComponent,
    SmoothTextChangerDirective
  ]
})
export class SharedModule {}