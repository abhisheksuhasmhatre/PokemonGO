"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PokedataComponent = (function () {
    function PokedataComponent() {
    }
    return PokedataComponent;
}());
PokedataComponent = __decorate([
    core_1.Component({
        template: "  <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a href=\"./app/home/welcome.component.html\"> Home </a></li>\n                    <li><a [routerLink]=\"['/products']\">Rewards</a></li>\n                    <li><a [routerLink]=\"['/egg']\">Egg Chart</a></li>\n                    <li><a [routerLink]=\"['/buddy']\">Buddy List</a></li>\n                    <li><a [routerLink]=\"['/event']\">Events</a></li>\n                    <li><a [routerLink]=\"['/evolve']\">Evolve Calculator</a></li>\n                    <li><a [routerLink]=\"['/pokemon']\">Pokemon</a></li>\n                    <li><a [routerLink]=\"['/pokedata']\">Pokedata</a></li>\n                </ul>\n            </div>\n        </nav>\n        </div>  ",
        styleUrls: ['app/pokemon/pokedata/pokedata.component.css']
    })
], PokedataComponent);
exports.PokedataComponent = PokedataComponent;
//# sourceMappingURL=pokedata.component.js.map