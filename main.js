const counterDiv = document.querySelector('.counter__div');
let counter = 0;


document.addEventListener('click', (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains('plus')) {
        counter++;
    }
    if (event.target.classList.contains('minus')) {
        counter--;
    }
    counterDiv.textContent = counter;
});

let cart = {
    'slisl23': 2,
    'simls27': 2,
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
});

function plusFunction(id) {
    cart[id]++;
    renderCart();

}

function minusFunction(id) {
    if (cart[id] - 1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]--;
    renderCart();

}

function deleteFunction(id) {
    delete cart[id];
    renderCart();
}

function renderCart() {
    console.log(cart);
};

renderCart();