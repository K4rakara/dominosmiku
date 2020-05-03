"use strict";
var pizzaType;
(function (pizzaType) {
    pizzaType[pizzaType["leftPizza"] = 0] = "leftPizza";
    pizzaType[pizzaType["rightPizza"] = 1] = "rightPizza";
})(pizzaType || (pizzaType = {}));
const switchDisplay = (target) => {
    let type = '';
    switch (target) {
        case pizzaType.leftPizza:
            type = ' left';
            closeLeft();
            break;
        case pizzaType.rightPizza:
            type = ' right';
            closeRight();
            break;
    }
    const selectPizza = document.querySelector('#select-pizza');
    if (selectPizza != null)
        selectPizza.className = 'select-pizza ' + type;
};
const closeLeft = () => {
    const leftPizza = document.querySelector('#left-pizza');
    const rightPizza = document.querySelector('#right-pizza');
    if (leftPizza != null && rightPizza != null) {
        leftPizza.className = 'hide';
        rightPizza.className = '';
    }
};
const closeRight = () => {
    const leftPizza = document.querySelector('#left-pizza');
    const rightPizza = document.querySelector('#right-pizza');
    if (leftPizza != null && rightPizza != null) {
        leftPizza.className = '';
        rightPizza.className = 'hide';
    }
};
document.addEventListener('load', () => {
    document.documentElement.style.webkitUserSelect = 'none';
    switchDisplay(pizzaType.rightPizza);
    //$changeDisplay -- Possibly a native call?
    location.hash = 'rendered';
    const photoPizzaS1 = document.querySelector('#photo-pizza-s1');
    const photoPizzaS2 = document.querySelector('#photo-pizza-s2');
    if (photoPizzaS1 != null && photoPizzaS2 != null) {
        photoPizzaS1.addEventListener('touchstart', () => switchDisplay(pizzaType.leftPizza));
        photoPizzaS1.addEventListener('mousedown', () => switchDisplay(pizzaType.leftPizza));
        photoPizzaS2.addEventListener('touchstart', () => switchDisplay(pizzaType.rightPizza));
        photoPizzaS2.addEventListener('mousedown', () => switchDisplay(pizzaType.rightPizza));
    }
});
