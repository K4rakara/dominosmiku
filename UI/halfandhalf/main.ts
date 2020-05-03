enum pizzaType {
	leftPizza = 0,
	rightPizza = 1,
}

const switchDisplay = (target: pizzaType): void => {
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
	const selectPizza: Element|null = document.querySelector('#select-pizza');
	if (selectPizza != null)
		selectPizza.className = 'select-pizza ' + type;
};

const closeLeft = (): void => {
	const leftPizza: Element|null = document.querySelector('#left-pizza');
	const rightPizza: Element|null = document.querySelector('#right-pizza');
	if (leftPizza != null && rightPizza != null) {
		leftPizza.className = 'hide';
		rightPizza.className = '';
	}
};

const closeRight = (): void => {
	const leftPizza: Element|null = document.querySelector('#left-pizza');
	const rightPizza: Element|null = document.querySelector('#right-pizza');
	if (leftPizza != null && rightPizza != null) {
		leftPizza.className = '';
		rightPizza.className = 'hide';
	}
};

document.addEventListener('load', (): void => {
	document.documentElement.style.webkitUserSelect = 'none';
	switchDisplay(pizzaType.rightPizza);
	//$changeDisplay -- Possibly a native call?
	location.hash = 'rendered';
	const photoPizzaS1: Element|null = document.querySelector('#photo-pizza-s1');
	const photoPizzaS2: Element|null = document.querySelector('#photo-pizza-s2');
	if (photoPizzaS1 != null && photoPizzaS2 != null) {
		photoPizzaS1.addEventListener('touchstart', (): void => switchDisplay(pizzaType.leftPizza));
		photoPizzaS1.addEventListener('mousedown', (): void => switchDisplay(pizzaType.leftPizza));
		photoPizzaS2.addEventListener('touchstart', (): void => switchDisplay(pizzaType.rightPizza));
		photoPizzaS2.addEventListener('mousedown', (): void => switchDisplay(pizzaType.rightPizza));
	}
});