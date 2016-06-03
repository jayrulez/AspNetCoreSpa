import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { UserProfileService } from './user-profile.service';
import { UserNameModel } from './user-name.model';
import { PageHeading } from '../shared';

@Component({
    selector: 'sd-change-name',
    directives: [PageHeading],
    template: require('./change-name.component.html')
})
export class ChangeNameComponent implements OnInit {
    userNameModel: UserNameModel = new UserNameModel('', '');
    @Output() notification = new EventEmitter<string>();

    constructor(private profileService: UserProfileService) {
    }

    ngOnInit() {
        this.profileService.userName()
            .subscribe((res: any) => {
                this.userNameModel.firstName = res.firstName;
                this.userNameModel.lastName = res.lastName;
            },
            (errors: any) => this.notification.emit(errors[0])
            );
    }

    save(): void {
        this.profileService.userName(this.userNameModel)
            .subscribe((res: any) => {
                this.userNameModel.firstName = res.firstName;
                this.userNameModel.lastName = res.lastName;
                this.notification.emit(`Profile name changed to ${res.firstName} ${res.lastName}`);
            },
            (errors: any) => this.notification.emit(errors[0])
            );

    }

}
