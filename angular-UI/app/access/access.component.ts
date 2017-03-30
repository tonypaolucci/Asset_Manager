import { Component, OnInit } from '@angular/core';
import{AccessService} from './access.service';
import {Access} from './access.model';
import {Router} from'@angular/router';
@Component({
  moduleId: module.id,
  selector: 'access-form',
  templateUrl: 'access.template.html'
  
})
export class AccessComponent implements OnInit{

access:Access;

constructor(private accessService:AccessService,
private router:Router){}
ngOnInit(){
    this.access = new Access();
}
 
  onSubmit() { 

    this.accessService.submitAccessDetails(this.access).subscribe();

  }
 

}
