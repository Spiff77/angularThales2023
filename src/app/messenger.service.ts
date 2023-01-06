import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private emitter = new EventEmitter<void>()

  constructor() { }

  retrieveEmitter(): EventEmitter<void>{
    return this.emitter
  }

  sendMessage(){
    this.emitter.emit()
  }

}
