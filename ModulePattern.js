// Basic structure

// (function() {
//     // Declare private vars and functions

//     return {
//         // Declare public vars and functions
//     }
// })();

// STANDAR MODULE PATTERN
// const UICtrl = (function() {
//     let text = 'Hello World';
    
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText(); // 'Hello World'

// console.log(UICtrl.text); // undefined


// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return { // This one makes modules public!
        add: add,
        get: get
    }

})();

ItemCtrl.add({id: 1, name: 'chris'});
ItemCtrl.get(1);