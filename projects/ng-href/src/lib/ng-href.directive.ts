import { OnInit, Directive, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector: '.ng-href'
})

export class NgHrefDirective implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        document.addEventListener('click', (event: any) => {
            event.preventDefault();
            if (Array.from(document.querySelectorAll('.ng-href')).indexOf(event.target) > -1) {
                this.router.navigateByUrl(event.target.getAttribute('href'));
            }
        });
    }
}
