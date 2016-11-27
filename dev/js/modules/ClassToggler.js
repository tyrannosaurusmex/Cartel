import * as salsa from '../library/salsa';

export default class ClassToggler {
    constructor(options) {
        this.trigger = options.trigger;
        this.target = options.target;
        this.triggerDOM = document.getElementById(this.trigger);
        this.targetDOM = document.getElementById(this.target);
        this.triggerToggle = options.triggerToggle;
        this.targetToggle = options.targetToggle;
        this.outsideClear = options.outsideClear;

        this.triggerDOM.addEventListener('click', this.toggleClass.bind(this), false);

        // Remove Class if outer DOM is clicked
        // Excludes targetDOM
        if (this.outsideClear === true) {
            document.body.addEventListener('click', this.removeClass.bind(this), false);          
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
        
        let isDescendant = salsa.checkIfDescendant(this.targetDOM, event.target);

        if(event.target !== this.triggerDOM && event.target !== this.targetDOM && !isDescendant) {
           this.targetDOM.classList.remove(this.targetToggle);
        }  

    }
}