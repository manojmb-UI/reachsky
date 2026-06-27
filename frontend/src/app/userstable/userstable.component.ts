import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-userstable',
  imports: [CommonModule, FormsModule],
  templateUrl: './userstable.component.html',
  styleUrl: './userstable.component.css'

})
export class UsersComponent {
  copy_icon = 'assets/images/icons8-copy-24.png';
  constructor(private commomservice: CommonService) { }
  users: any[] = [];
  filters = {
    id: '',
    name: '',
    email: '',
    phone_number: ''
  };

  currentPage = 1;
  pageSize = 5;
  ngOnInit() {
    this.getAllUsers();
  }

  get filteredUsers() {
    return this.users.filter(user =>
      user.id.toString().includes(this.filters.id) &&
      user.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(this.filters.email.toLowerCase()) &&
      user.phone_number.toLowerCase().includes(this.filters.phone_number.toLowerCase())
    );
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredUsers.length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  copyPhoneNumber(phone: string): void {
  navigator.clipboard.writeText(phone).then(() => {
    console.log('Copied:', phone);

    // Optional
    // this.toastr.success('Phone number copied');
  }).catch(err => {
    console.error('Copy failed', err);
  });
}

  get pages() {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  onFilterChange() {
    this.currentPage = 1;
  }
  getAllUsers(){
    this.commomservice.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    })
  }
}