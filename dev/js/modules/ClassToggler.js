import * as salsa from '../library/salsa';

export default class ClassToggler {
    constructor(options) {
        this.trigger = options.trigger;
        this.target = options.target;
        this.triggerDOM =  document.getElementById(this.trigger);
        this.targetDOM =  document.getElementById(this.target);
        this.triggerToggle = options.triggerToggle;
        this.targetToggle = options.targetToggle;
        this.outsideClear = options.outsideClear;

       this.triggerDOM.onclick = () => {
            this.toggleClass();
        };

        // Remove Class if outer DOM is clicked
        // Excludes targetDOM
        if (this.outsideClear) {
            document.getElementsByTagName('body')[0].onclick = (e) => {
                let isDescendant = salsa.checkIfDescendant(this.targetDOM, e.target);
                console.log(this.targetDOM);

                if(e.target !== this.triggerDOM && e.target !== this.targetDOM && !isDescendant) {
                    this.removeClass();
                }  
            };
        }
    }

    toggleClass() {
        if (this.triggerToggle.length) {
            this.triggerDOM.classList.toggle(this.triggerToggle);
        }
        
        this.targetDOM.classList.toggle(this.targetToggle);
    }

    removeClass() {
        if (this.triggerToggle.length) {
            this.triggerDOM.classList.remove(this.triggerToggle);
        }
        
        this.targetDOM.classList.remove(this.targetToggle);
    }

    get
}