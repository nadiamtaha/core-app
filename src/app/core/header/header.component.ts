import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  heading: string;
  constructor(private router:Router){

   
  }
  @Output()
  toggleSidenav = new EventEmitter<void>();
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
