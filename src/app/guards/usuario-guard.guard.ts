import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

export const usuarioGuardGuard: CanActivateFn = (route, state) => {
  
  if(inject(WebsocketService).usuario){
    return true;
  }else{
    inject(Router).navigateByUrl('/');
    return false;
  }
};
