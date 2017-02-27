import { Component } from '@angular/core';

@Component({
    template: `  <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a href="./app/home/welcome.component.html"> Home </a></li>
                    <li><a [routerLink]="['/products']">Rewards</a></li>
                    <li><a [routerLink]="['/egg']">Egg Chart</a></li>
                    <li><a [routerLink]="['/buddy']">Buddy List</a></li>
                    <li><a [routerLink]="['/event']">Events</a></li>
                    <li><a [routerLink]="['/evolve']">Evolve Calculator</a></li>
                    <li><a [routerLink]="['/pokemon']">Pokemon</a></li>
                    <li><a [routerLink]="['/pokedata']">Pokedata</a></li>
                </ul>
            </div>
        </nav>
        </div>  `,
    styleUrls: ['app/pokemon/pokedata/pokedata.component.css']
})
export class PokedataComponent {
    
}
