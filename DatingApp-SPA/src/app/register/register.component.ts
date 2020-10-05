import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any; // For passing value from Parent to child
  @Output() cancelRegister = new EventEmitter(); // fpr passing values to parent from child
  model: any ={};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      console.log('Reg success');
    }, error => {
      console.log(error);
    });
    // console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
