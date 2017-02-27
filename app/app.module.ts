import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { EggComponent } from './egg/egg.component';
import { BuddyComponent } from './buddy/buddy.component';
import { EventComponent } from './event/event.component';
import { EvolveComponent } from './evolve/evolve.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedataComponent } from './pokemon/pokedata/pokedata.component';
import { MovesComponent } from './moves/moves.component';
/* Feature Modules */
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([  
      { path: 'welcome', component: WelcomeComponent },
      { path: 'egg', component: EggComponent },
      { path: 'buddy', component: BuddyComponent },
      { path: 'event', component: EventComponent },
      { path: 'evolve', component: EvolveComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'pokemon/pokedata', component: PokedataComponent },
      { path: 'moves', component: MovesComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    EggComponent,
    BuddyComponent,
    EventComponent,
    EvolveComponent,
    PokemonComponent,
    PokedataComponent,
    MovesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
