import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductHttpService} from '../product-http.service';
import {Router} from '@angular/router';
import {MessengerService} from '../messenger.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{

  form!: FormGroup

  constructor(private fb: FormBuilder,
              private pHttp: ProductHttpService,
              private router: Router,
              private messenger: MessengerService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      category: '',
      description: '',
      price: 0,
      promo: 0,
      active: true,
      supplier: this.fb.group({
        id: ''
      })
    })
  }

  submitData() {
    this.pHttp.add(this.form.value).subscribe(()=> this.messenger.sendMessage())
  }
}
