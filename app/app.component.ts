import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    
    <div id="bg">
    
    
    </div>
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
               <div id="main">
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Rewards</a></li>
                    <li><a [routerLink]="['/egg']">Egg Chart</a></li>
                    <li><a [routerLink]="['/buddy']">Buddy List</a></li>
                    <li><a [routerLink]="['/event']">Events</a></li>
                    <li><a [routerLink]="['/evolve']">Evolve Calculator</a></li>
                    <li><a [routerLink]="['/pokemon']">Pokemon</a></li>
                    <li><a [routerLink]="['/moves']">Move List</a></li>
                </ul>
                </div>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     
     `

})
export class AppComponent {
    
}
