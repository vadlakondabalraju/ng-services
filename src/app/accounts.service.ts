import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Hidden Account',
      status: 'inactive',
    },
    {
      name: 'Test Account',
      status: 'unknown',
    },
  ];

  constructor() {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
