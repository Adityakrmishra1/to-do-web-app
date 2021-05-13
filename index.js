// var books = document.querySelectorAll('.book-name');
// console.log(books);
// books.forEach(function (books) {
//     books.textContent += " Aditya";
// })


// const booklst = document.querySelector('.book-list')


// var btns = document.querySelectorAll('.delete-btn');
// console.log(btns);
// Array.from(btns).forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const li = e.target.parentElement;
//         li.parentElement.removeChild(li);
//     })

// })


//delete books
var list = document.querySelector('.book-list ul');
list.addEventListener('click', function (e) {
    if (e.target.className == 'delete-btn') {

        const li = e.target.parentElement.parentElement;
        list.removeChild(li);
    }
});

//froms 
const addForms = document.forms['add-book'];
addForms.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForms.querySelector('.add_book').value;
    //create element 
    const div = document.createElement('div');
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content 
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    // adding classes

    bookName.classList.add('book-name');
    deleteBtn.classList.add('delete-btn');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    div.appendChild(li);
    list.appendChild(div);
});


// hide all books
var hide = document.querySelector('.hide');
hide.addEventListener('change', function (e) {
    if (hide.checked == true) {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
});

//search box

const searchbox = document.querySelector('.search_box');
searchbox.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function (books) {
        const title = books.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            books.style.display = "block";
        } else {
            books.style.display = "none"
        }
    });

});

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function (e) {
    const targetPanel = document.querySelector(e.target.dataset.target);
    console.log(targetPanel);
    panels.forEach(function (panel) {
        if (panel == targetPanel) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
});