import angular from 'angular';
import ngRoute from 'angular-route';
import { AppComponent } from './app.component';
import { DealItemAngular } from './deal-item.component';

angular.module('app', [ngRoute])
  .component('dealItemAngular', DealItemAngular)
  .component('appComponent', AppComponent);