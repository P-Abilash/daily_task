import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-changedetection3',
  template: `
    <p>
      changedetection3 works!
    </p>
    <h4>Child Component</h4>
     {{title}}
  `,
  styles: [
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Changedetection3Component {

title = 0
constructor(private cf: ChangeDetectorRef){
  // this.cf.detach() 
  // detch and detectChanges will used in combine. 
  // detch as frezed our component form the chang detection startegy. 
  // use us detectChanges with detach for detect the change. 
  // while use changeDetection we dosent declare the onPush in top
}

ngOnInit(): void {
  setInterval(()=>{
    this.title = Math.random();
    // this.cf.markForCheck();
    //this.cf.detectChanges(); // we used this only we used detach 
    //this.cf.reattach(); // we only use this on the time of using detch for unfreze our component. 
    
  
  },1000)
  
}
  child(){
    console.log('Child');
    return 'child'
    
  }

}
