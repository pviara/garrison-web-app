import { AuthComponent } from './containers/components/public/components/containers/auth.component';
import { BannerResolver } from './containers/components/in/resolvers/static/banner.resolver';
import {
  BuildingInstanceComponent
} from './containers/components/in/containers/play/containers/instances/building-overview/components/building-instance/building-instance.component';
import {
  BuildingInstanceGuard
} from './containers/components/in/containers/play/containers/instances/building-overview/components/building-instance/building-instance.guard';
import { BuildingOverviewComponent } from './containers/components/in/containers/play/containers/instances/building-overview/building-overview.component';
import { BuildingResolver } from './containers/components/in/resolvers/static/building.resolver';
import { CharacterComponent } from './containers/components/in/containers/play/containers/character/character.component';
import {
  CharacterComponent as CreateCharacterComponent
} from './containers/components/in/containers/create/components/character/character.component';
import {
  CharacterGuard as CreateCharacterGuard
} from './containers/components/in/containers/create/components/character/character.guard';
import { CharacterResolver } from './containers/components/in/resolvers/dynamic/character.resolver';
import { CreateComponent } from './containers/components/in/containers/create/create.component';
import { FactionResolver } from './containers/components/in/resolvers/static/faction.resolver';
import {
  GarrisonComponent as CreateGarrisonComponent
} from './containers/components/in/containers/create/components/garrison/garrison.component';
import {
  GarrisonGuard as CreateGarrisonGuard
} from './containers/components/in/containers/create/components/garrison/garrison.guard';
import { GarrisonIdResolver } from './containers/components/in/resolvers/dynamic/garrison-id.resolver';
import { GarrisonResolver } from './containers/components/in/resolvers/dynamic/garrison.resolver';
import { InComponent } from './containers/components/in/in.component';
import { InGuard } from './containers/components/in/in.guard';
import { LandingComponent as PublicLandingComponent } from './containers/components/public/components/landing.component';
import { LandingComponent as InLandingComponent } from './containers/components/in/components/landing.component';
import { NgModule } from '@angular/core';
import { PlayComponent } from './containers/components/in/containers/play/play.component';
import { PublicComponent } from './containers/components/public/public.component';
import { PublicGuard } from './containers/components/public/public.guard';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { RegisterComponent } from './containers/components/in/containers/play/containers/register/register.component';
import { RegisterResolver } from './containers/components/in/resolvers/dynamic/register.resolver';
import { ResearchInstanceComponent } from './containers/components/in/containers/play/containers/instances/research-overview/components/research-instance/research-instance.component';
import { ResearchInstanceGuard } from './containers/components/in/containers/play/containers/instances/research-overview/components/research-instance/research-instance.guard';
import { ResearchOverviewComponent } from './containers/components/in/containers/play/containers/instances/research-overview/research-overview.component';
import { ResearchResolver } from './containers/components/in/resolvers/static/research.resolver';
import { SignInComponent } from './containers/components/public/components/containers/components/sign-in/sign-in.component';
import { SignUpComponent } from './containers/components/public/components/containers/components/sign-up/sign-up.component';
import { UnitInstanceComponent } from './containers/components/in/containers/play/containers/instances/unit-overview/components/unit-instance/unit-instance.component';
import { UnitInstanceGuard } from './containers/components/in/containers/play/containers/instances/unit-overview/components/unit-instance/unit-instance.guard';
import { UnitOverviewComponent } from './containers/components/in/containers/play/containers/instances/unit-overview/unit-overview.component';
import { UnitResolver } from './containers/components/in/resolvers/static/unit.resolver';
import { ZoneResolver } from './containers/components/in/resolvers/static/zone.resolver';

const routes: Routes = [{
    path: 'public',
    canActivate: [PublicGuard],
    component: PublicComponent,
    children: [{
      path: '',
      children: [{
          path: '',
          component: PublicLandingComponent
        },
        {
          path: 'auth',
          component: AuthComponent,
          children: [{
              path: '',
              component: SignInComponent
            },
            {
              path: 'sign-up',
              component: SignUpComponent
            }
          ]
        }
      ]
    }]
  },
  {
    path: 'in',
    canActivate: [InGuard],
    component: InComponent,
    children: [{
      path: '',
      children: [{
          path: '',
          component: InLandingComponent,
          resolve: {
            character: CharacterResolver,
            garrisonId: GarrisonIdResolver
          }
        },
        {
          path: 'create',
          component: CreateComponent,
          children: [{
              path: 'character',
              canActivate: [CreateCharacterGuard],
              component: CreateCharacterComponent,
              resolve: {
                factions: FactionResolver
              }
            },
            {
              path: 'garrison',
              canActivate: [CreateGarrisonGuard],
              component: CreateGarrisonComponent,
              resolve: {
                character: CharacterResolver,
                zones: ZoneResolver
              }
            }
          ]
        },
        {
          path: 'play',
          children: [{
            path: '',
            component: PlayComponent,
            resolve: {
              character: CharacterResolver,
              banners: BannerResolver,
              buildings: BuildingResolver,
              factions: FactionResolver,
              garrison: GarrisonResolver,
              researches: ResearchResolver,
              units: UnitResolver,
              zones: ZoneResolver
            },
            children: [{
                path: 'buildings',
                children: [{
                  path: '',
                  component: BuildingOverviewComponent,
                  resolve: {
                    buildings: BuildingResolver,
                    character: CharacterResolver,
                    units: UnitResolver
                  },
                  children: [{
                    path: ':code',
                    canActivate: [BuildingInstanceGuard],
                    component: BuildingInstanceComponent,
                    resolve: {
                      character: CharacterResolver
                    }
                  }]
                }]
              },
              // {
              //   path: 'character',
              //   children: [{
              //     path: '',
              //     component: CharacterComponent,
              //     resolve: {
              //       character: CharacterResolver
              //     }
              //   }]
              // },
              {
                path: 'register',
                children: [{
                  path: '',
                  component: RegisterComponent,
                  resolve: {
                    buildings: BuildingResolver,
                    character: CharacterResolver,
                    garrisonId: GarrisonIdResolver,
                    records: RegisterResolver,
                    researches: ResearchResolver,
                    units: UnitResolver
                  }
                }]
              },
              {
                path: 'researches',
                children: [{
                  path: '',
                  component: ResearchOverviewComponent,
                  resolve: {
                    character: CharacterResolver,
                    researches: ResearchResolver
                  },
                  children: [{
                    path: ':code',
                    canActivate: [ResearchInstanceGuard],
                    component: ResearchInstanceComponent,
                    resolve: {
                      character: CharacterResolver
                    }
                  }]
                }]
              },
              {
                path: 'units',
                children: [{
                  path: '',
                  component: UnitOverviewComponent,
                  resolve: {
                    character: CharacterResolver,
                    units: UnitResolver
                  },
                  children: [{
                    path: ':code',
                    canActivate: [UnitInstanceGuard],
                    component: UnitInstanceComponent,
                    resolve: {
                      character: CharacterResolver
                    }
                  }]
                }]
              }
            ]
          }]
        }
      ]
    }]
  },
  {
    path: '**',
    redirectTo: '/public'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
