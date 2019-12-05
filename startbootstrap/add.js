let myItems = [];

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