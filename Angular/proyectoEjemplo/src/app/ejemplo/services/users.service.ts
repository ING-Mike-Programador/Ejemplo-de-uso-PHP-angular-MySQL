import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' })
export class UsersService{

  apiUrl = 'http://localhost/PHPEjemplo/';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<any[]>(this.apiUrl + 'read.php');
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl + 'create.php', user);
  }

  updateUser(user: any) {
    return this.http.post(this.apiUrl + 'update.php', user);
  }

  deleteUser(id: number) {
    return this.http.post(this.apiUrl + 'delete.php', { id });
  }
}


