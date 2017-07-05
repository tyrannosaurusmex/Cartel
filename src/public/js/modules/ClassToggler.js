import * as salsa from '../library/salsa';

export default class ClassToggler {
    constructor(options) {
        this.trigger = options.trigger;
        this.target = options.target;
        this.triggerDOM = document.getElementById(this.trigger);
        this.targetDOM = document.getElementById(this.target);
        this.triggerToggle = options.triggerToggle || '';
        this.targetToggle = options.targetToggle;
        this.outsideClear = options.outsideClear || false;
        this.insideCloser = options.insideCloser || '';
        this.insideCloserDOM = document.getElementById(this.insideCloser) || '';

        this.triggerDOM.addEventListener('click', this.toggleClass.bind(this), false);

        if (this.insideCloser.length) {
            this.insideCloserDOM.addEventListener('click', this.removeClass.bind(this), false);
        }

        // Remove Class if outer DOM is clicked
        // Excludes targetDOM
        if (this.outsideClear === true) {
            document.body.addEventListener('click', this.removeClass.bind(this), false);          
        }
    }

    toggleClass(event) {
        event.preventDefault();
        if (this.triggerToggle.length) {
            this.triggerDOM.classList.toggle(this.triggerToggle);
        }
        this.targetDOM.classList.toggle(this.targetToggle);
    }

    removeClass() {
        let isDescendant;
        // Override isDescendant check if specified 'closer' DOM element
        if (event.target !== this.insideCloserDOM) {
            isDescendant = salsa.checkIfDescendant(this.targetDOM, event.target);
        } else {
            isDescendant =  false;
        }
        

        if(event.target !== this.triggerDOM && event.target !== this.targetDOM && !isDescendant) {
           this.targetDOM.classList.remove(this.targetToggle);

            if (this.triggerToggle.length) {
                this.triggerDOM.classList.remove(this.triggerToggle);
            }
        }  

    }
}