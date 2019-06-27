class Carousel {
    constructor(emps) {
        this.emps = emps;
        this.allEmps = this.emps.querySelectorAll('.empHolder');
        console.log(this.allEmps);
        this.left = this.emps.querySelector('.left-button');
        this.right = this.emps.querySelector('.right-button');
        this.index = 0;
        this.right.addEventListener('click', this.nextR.bind(this));
        this.left.addEventListener('click', this.nextL.bind(this));
        this.allEmps[this.index].style.display = 'flex';
        this.allEmps[this.index].style.justifyContent = 'flex-start';
    }

    nextR() {
        this.allEmps.forEach(emp => emp.style.display = "none");
        if (this.index >=6 ) {
            this.index=0;
        }
        else{
            this.index=this.index+1;
        }
        this.allEmps[this.index].style.display = 'flex';
        this.allEmps[this.index].style.justifyContent = 'flex-start';

    }
    nextL() {
        this.allEmps.forEach(emp => emp.style.display = "none");
        if (this.index <=0 ) {
            this.index=6;
        }
        else{
            this.index=this.index-1;
        }
        this.allEmps[this.index].style.display = 'flex';
        this.allEmps[this.index].style.justifyContent = 'flex-start';
        
    }
}

let SCP = document.querySelector('.SCP');
let createCarousel = new Carousel(SCP);

let JCP = document.querySelector('.JCP');
let create1Carousel = new Carousel(JCP);

let CP = document.querySelector('.CP');
let create2Carousel = new Carousel(CP);