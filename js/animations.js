const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if(i <= endNumber) {
        if(i === endNumber) 
            element.innerText = i + '+';
        else
            element.innerText = i;
        i++;
    }
    setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if(event.target.value === 'other') {
        let formContainer = document.createElement('div');
        formContainer.classList.add('form__group', 'form__other-input');

        let input = document.createElement('input');
        input.placeholder = 'Введите ваш вариант';
        input.type = 'text';

        formContainer.appendChild(input);

        document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'));
    }

    let otherInput = document.querySelector('.form__other-input');

    if(event.target.value !== 'other' && Boolean(otherInput)) {
        document.querySelector('.form form').removeChild(otherInput);
    }
});

function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(a => addSmoothScroll(a));
addSmoothScroll(document.querySelector('.more-button'));