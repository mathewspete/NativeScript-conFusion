import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { Leader } from "../Shared/leader";
import { LeaderService } from '../services/leader.service';

import { DrawerPage } from '../shared/drawer/drawer.page';

@Component({
    selector: 'app-about',
    moduleId: module.id,
    templateUrl: './about.component.html'
})

export class AboutComponent extends DrawerPage implements OnInit{
    leaders: Leader[];
    errMess : string;
 
    constructor(private leaderservice: LeaderService, 
        private changeDetectorRef: ChangeDetectorRef,
        @Inject('BaseURL') private BaseURL){ 
            super(changeDetectorRef);
        }

    ngOnInit() { 
        this.leaderservice.getLeaders()
            .subscribe(leader => this.leaders = leader,
                errmess => this.errMess = <any> errmess);
    }
}