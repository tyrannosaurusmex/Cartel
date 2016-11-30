import ClassToggler from './ClassToggler';

// Class Toggler Initialise
/*
    trigger: the element being clicked
    target: the element to be affected
    triggerToggle: class name to add to trigger element
    targetToggle: class name to add to the target element
    outsideClear: remove class on outside click (excluding target element)
*/

let NavCurrLangOptions = new ClassToggler({
    trigger: 'NavCurrLangOptions-trigger',
    target: 'NavCurrLangOptions-target',
    triggerToggle: 'Nav_options_item-active',
    targetToggle: 'Nav_currLangOptions-active',
    outsideClear: true
});

let NavSocial = new ClassToggler({
    trigger: 'NavSocial-trigger',
    target: 'NavSocial-target', 
    triggerToggle: 'Nav_options_item-active',
    targetToggle: 'Nav_social-active',
    outsideClear: true
});

// Remove these and place in module file

export { NavSocial, NavCurrLangOptions }