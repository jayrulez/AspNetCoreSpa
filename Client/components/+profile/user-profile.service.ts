import { Injectable } from '@angular/core';

import { DataService } from '../shared';
import { ChangePasswordModel } from './change-password.model';
import { UserNameModel } from './user-name.model';

@Injectable()
export class UserProfileService {

    private userNameApi: string = 'api/profile/username/';
    private changePasswordApi: string = 'api/profile/changepassword/';

    constructor(private dataService: DataService) { }

    changePassword(changePasswordModel: ChangePasswordModel) {
        return this.dataService.post(this.changePasswordApi, changePasswordModel);
    }

    userName(userNameModel?: UserNameModel) {
        if (userNameModel) {
            return this.dataService.post(this.userNameApi, userNameModel);
        } else {
            return this.dataService.get(this.userNameApi);
        }
    }
}
