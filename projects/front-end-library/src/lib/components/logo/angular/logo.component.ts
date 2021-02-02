import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from "@angular/core";

/**
 * API is the same between **Angular** and **Drupal**.
 *
 */
 
@Component({
    selector: "bf-logo",
    templateUrl: './logo.component.html',
    // styleUrls: ['../common/style.scss'],
})
export class LogoComponent implements OnInit {
    constructor() {}

    /** videotron | business */
    @Input() name: string;

    /** medium | small */
    @Input() size: string;

    @Input() textOnly: boolean;

    @Input() reversed: boolean;

    ngOnInit() {
        console.log('logo', this);
    }
    
}
