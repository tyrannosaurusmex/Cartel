import * as salsa from '../library/salsa';

let ClassTogglerModules = {};

class ClassToggler {
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

    toggleClass(event) {
        event.preventDefault();
        if (this.triggerToggle.length) {
            this.triggerDOM.classList.toggle(this.triggerToggle);
        }
        this.targetDOM.classList.toggle(this.targetToggle);
    }

    removeClass() {
        let isDescendant = salsa.checkIfDescendant(this.targetDOM, event.target);

        if(event.target !== this.triggerDOM && event.target !== this.targetDOM && !isDescendant) {
           this.targetDOM.classList.remove(this.targetToggle);

            if (this.triggerToggle.length) {
                this.triggerDOM.classList.remove(this.triggerToggle);
            }
        }  

    }
}

// Class Toggler Initialise
/*
    trigger: the element being clicked
    target: the element to be affected
    triggerToggle: class name to add to trigger element
    targetToggle: class name to add to the target element
    outsideClear: remove class on outside click (excluding target element)
*/

ClassTogglerModules.NavCurrLangOptions = new ClassToggler({
    trigger: 'NavCurrLangOptions-trigger',
    target: 'NavCurrLangOptions-target',
    triggerToggle: 'Nav_options_item-active',
    targetToggle: 'Nav_currLangOptions-active',
    outsideClear: true
});

ClassTogglerModules.NavSocial = new ClassToggler({
    trigger: 'NavSocial-trigger',
    target: 'NavSocial-target', 
    triggerToggle: 'Nav_options_item-active',
    targetToggle: 'Nav_social-active',
    outsideClear: true
});

ClassTogglerModules.MegaMenu = new ClassToggler({
    trigger: 'MegaMenu-trigger',
    target: 'MegaMenu-target',
    triggerToggle: 'Nav_menu_item-active',
    targetToggle: 'MegaMenu-active',
    outsideClear: true
})

export { ClassTogglerModules };