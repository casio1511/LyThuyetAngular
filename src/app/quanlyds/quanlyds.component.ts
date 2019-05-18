import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quanlyds',
  templateUrl: './quanlyds.component.html',
  styleUrls: ['./quanlyds.component.css']
})
export class QuanlydsComponent implements OnInit {
  name: string = 'Phuong';
  xinChao: string = '';
  so: number = 3;
  isHien: boolean = true;
  isLogin: boolean = true;
  mang: Array<any> = ['Abc', 'xyz', '123'];
  constructor() { }

  ngOnInit() {
  }
  bamNut(thamso) {
    this.xinChao = thamso;
  }

  anHien() {
    if (this.isHien === true) {
      this.isHien = false;
    } else {
      this.isHien = true; 
    }
  }
  dangNhap() {
  this.isLogin = false;
  }
  dangXuat() {
    this.isLogin = true;
    }

}
