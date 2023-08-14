import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateComponent } from '../deactivate/deactivate.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<DeactivateComponent> {
  canDeactivate(component: DeactivateComponent): boolean {
    if (component.data !== '') {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
  
}
