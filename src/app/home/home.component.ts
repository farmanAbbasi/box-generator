import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';

export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,
  DELETE_BUTTON=46
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  startX:any = [];
  startY:any = [];
  width:number = 50;
  height:number = 50;
  counterOfBox:number = -1;
  selectedDiv:number = 0//id 0 when none is selected
  bgColor:any = []
  title:string = 'BOXgeneratOR';
  divs: number[] = [];
  untoggle:boolean=true;
  toggleMessage:string="Input On";

  constructor(private renderer: Renderer2) { }
  ngOnInit() { }

  //handle key events
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    
    if(this.untoggle==false){
      return;
    }
   
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      console.log("left")
      const parent: HTMLElement = document.getElementById(this.selectedDiv + "");
      this.startX[this.selectedDiv] += -20
      this.renderer.setStyle(parent, 'left', this.startX[this.selectedDiv] + 'px');

    }

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      console.log("right")
      const parent: HTMLElement = document.getElementById(this.selectedDiv + "");
      this.startX[this.selectedDiv] += 20
      this.renderer.setStyle(parent, 'left', this.startX[this.selectedDiv] + 'px');

    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      console.log("up")
      const parent: HTMLElement = document.getElementById(this.selectedDiv + "");
      this.startY[this.selectedDiv] += -20
      this.renderer.setStyle(parent, 'top', this.startY[this.selectedDiv] + 'px');

    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      console.log("down")
      const parent: HTMLElement = document.getElementById(this.selectedDiv + "");
      this.startY[this.selectedDiv] += 20
      this.renderer.setStyle(parent, 'top', this.startY[this.selectedDiv] + 'px');

    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      console.log("down")
      const parent: HTMLElement = document.getElementById(this.selectedDiv + "");
      this.startY[this.selectedDiv] += 20
      this.renderer.setStyle(parent, 'top', this.startY[this.selectedDiv] + 'px');

    }
    if (event.keyCode === KEY_CODE.DELETE_BUTTON) {
      console.log("delete button clicked")
      this.removeABox()
    }
  }

  //add a box on click of button
  addABox(): void {
    if(this.untoggle==false){
      return;
    }
    this.divs.push(this.divs.length);
    //add in startX and startY
    this.startX.push(this.divs.length)
    this.startY.push(this.divs.length)
    this.bgColor.push(this.getRandomColor())
  }
 
  //get the particular box clicked
  getTheClickedBox(id): void {
    if(this.untoggle==false){
      return;
    }
    this.selectedDiv = id
    // console.log(this.selectedDiv)
    // console.log(id)
  }

  //get random color for the boxes
  getRandomColor(): string {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
 
  //remove a box on click of delete key
  removeABox():void {
    //console.log(this.selectedDiv)
    //giving a negative number in order to delete from screen
    this.divs[this.selectedDiv]=-999
  }

  //toggle button to turn on and off of input
  callToggle():void{
    //console.log(this.untoggle)'
    if(this.untoggle==false){
       //Allow innput operations
       this.toggleMessage="Input On"
    }
    else{
      //Dont allow any input operations
      this.toggleMessage="Input Off"
    }
  }


}
