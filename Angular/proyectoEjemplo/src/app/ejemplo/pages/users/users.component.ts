import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  users: User[] = [];

  user = signal<User>({ id: null, name: '', email: '' });
  name = signal<string>('');
  email = signal<string>('');

  constructor(private userService: UsersService) {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  saveUser() {
    if (this.user().id) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.loadUsers();
        this.user.set({ id: null, name: '', email: '' });
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        this.loadUsers();
        this.user.set({ id: null, name: '', email: '' });
      });
    }
  }

  edit(user: User) {
    this.user.set({ ...user });
  }

  delete(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
