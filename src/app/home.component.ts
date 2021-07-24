import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  token: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.token = this.activatedRoute.snapshot.queryParams["token"];  
    this.subscription = this.activatedRoute.queryParams.subscribe((queryParams: Params) => this.token = queryParams["token"]);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
