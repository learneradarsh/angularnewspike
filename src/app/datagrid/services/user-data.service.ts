import { shareReplay, map } from 'rxjs/operators';
import { baseAPIPath } from './../../../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../model/user-dto';
import { GridDataDTO } from '../model/grid-data-dto';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userList$ = this.getUsersDataFromAPI$().pipe(
    map(userList => userList.filter(user => user.id <= 40)),
    map(userList =>  userList.map(user => this.tranformUserData(user))),
    shareReplay(1)
  )
  constructor(private http: HttpClient) { }

  getUsersDataFromAPI$() {
    return this.http.get<UserDTO[]>(`${baseAPIPath}/users`);
  }

  tranformUserData(userInfo: UserDTO) {
    return {
      id: userInfo.id,
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email
    } as GridDataDTO;
  }
}
