import { Component } from '@angular/core';

import { UserProfileService } from './user-profile.service';
import { ChangeNameComponent } from './change-name.component';
import { ChangePasswordComponent } from './change-password.component';

@Component({
    selector: 'sd-user-profile',
    providers: [UserProfileService],
    directives: [ChangeNameComponent, ChangePasswordComponent],
    template: require('./user-profile.component.html')
})
export class UserProfileComponent {
    notificationMessage: string;
    notify(message: string) {
        this.notificationMessage = message;
    }
}
