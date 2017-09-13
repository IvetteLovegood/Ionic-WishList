import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PendingPage } from '../pending/pending';
import { CompletedPage } from '../completed/completed';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {

    tab1Root: any = PendingPage;
    tab2Root: any = CompletedPage;
    tab3Root: any = AboutPage;

    constructor() {

    }
}
