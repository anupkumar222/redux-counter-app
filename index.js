let store = Redux.createStore(reducer)

let counter = store.getState();

let h1 = document.querySelector('h1');

let Increment = document.querySelector('.increment');
let Decrement = document.querySelector('.decrement');
let Reset = document.querySelector('.reset');

h1.innerText = counter;

Increment.addEventListener('click', () => {
    store.dispatch({ type: 'Increment' })

})
Decrement.addEventListener('click', () => {
    store.dispatch({ type: 'Decrement' })

})
Reset.addEventListener('click', () => {
    store.dispatch({ type: 'Reset' })

})

store.subscribe(()=>{
    counter = store.getState();
    h1.innerText = counter

})

store.subscribe

function reducer(state = 0, action) {
    switch (action.type) {
        case 'Increment':
            return state + (action.step || 1)
        case 'Decrement':
            return state - (action.step || 1)
        case 'Reset':
            return 0;
        default:
            return state;
    }
}

