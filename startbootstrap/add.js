let myItems;

// Retrieves product names from local storage if they exist; if not, creates a new array
if (localStorage.getItem('myItemsList')) {
    myItems = JSON.parse(localStorage.getItem('myItemsList'))
} else {
    myItems = []
}

// Adds an item to the array and stores it into local storage
const addItem = (ev)=>{
    ev.preventDefault();
    let myItem = document.getElementById('name').value;
    myItems.push(myItem);
    document.querySelector('form').reset();
    localStorage.setItem('myItemsList', JSON.stringify(myItems));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click',addItem);
});

// Removes an item from the array and updates the new array in local storage
const removeItem = (ev)=>{
    ev.preventDefault();
    function removeItem(arr, value){
        return arr.filter(function(ele){
            return ele != value;
        });
    }
    let remItem = document.getElementById('name').value;
    myItems = removeItem(myItems, remItem);
    document.querySelector('form').reset();
    localStorage.setItem('myItemsList', JSON.stringify(myItems));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('deleteBtn').addEventListener('click',removeItem);
});

// Sorts the array alphabetically
const sortItem = (ev)=>{
    ev.preventDefault();
    myItems.sort();
    document.querySelector('form').reset();
    localStorage.setItem('myItemsList', JSON.stringify(myItems));
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sortBtn').addEventListener('click',sortItem);
});