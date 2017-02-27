"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var egg_component_1 = require("./egg/egg.component");
var buddy_component_1 = require("./buddy/buddy.component");
var event_component_1 = require("./event/event.component");
var evolve_component_1 = require("./evolve/evolve.component");
var pokemon_component_1 = require("./pokemon/pokemon.component");
var pokedata_component_1 = require("./pokemon/pokedata/pokedata.component");
var moves_component_1 = require("./moves/moves.component");
/* Feature Modules */
var product_module_1 = require("./products/product.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'egg', component: egg_component_1.EggComponent },
                { path: 'buddy', component: buddy_component_1.BuddyComponent },
                { path: 'event', component: event_component_1.EventComponent },
                { path: 'evolve', component: evolve_component_1.EvolveComponent },
                { path: 'pokemon', component: pokemon_component_1.PokemonComponent },
                { path: 'pokemon/pokedata', component: pokedata_component_1.PokedataComponent },
                { path: 'moves', component: moves_component_1.MovesComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            product_module_1.ProductModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            egg_component_1.EggComponent,
            buddy_component_1.BuddyComponent,
            event_component_1.EventComponent,
            evolve_component_1.EvolveComponent,
            pokemon_component_1.PokemonComponent,
            pokedata_component_1.PokedataComponent,
            moves_component_1.MovesComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map