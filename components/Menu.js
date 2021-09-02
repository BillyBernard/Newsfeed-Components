// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// wrong

// const header = document.querySelector('.header')
// const menuButton = document.querySelector('.menu-button')

// function menuMaker(menuItems){
//   const menuDiv = document.createElement('div');
//   const menuList = document.createElement('ul');
//   const menuListItem = document.createElement('li');

//   menuDiv.appendChild(menuList);
//   menuList.appendChild(menuListItem);

//   menuDiv.classList.add('menu');
  
//   menuListItem.textContent = menuItems;

//   menuButton.addEventListener('click', () => {
//     menuDiv.classList.toggle('menu--open')
//   })
//   // console.log(menuList)
//   // console.log(menuListItem)
//   return menuDiv

// }

// menuItems.forEach(item => {
//   const linkItem = menuMaker(item);
//   document.querySelector('div').appendChild(linkItem)
// })


function menuMaker(array) {
  const menu = document.createElement("div");
  const ul = document.createElement("ul");

  menu.appendChild(ul);
  menu.classList.add("menu");
  
  array.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  
  const menuButton = document.querySelector(".menu-button");
  
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });
  
  return menu;
}

const header = document.querySelector(".header");

// menuItems.forEach((item) => header.appendChild(menuMaker(item)));
header.appendChild(menuMaker(menuItems));


// function menuMaker(array){
//   const menuItem = document.createElement('div');
//   const menuList = document.createElement('ul');

//   menuItem.appendChild(menuList);
//   menuItem.classList.add('menu');

//   array.ForEach((item) => {
//     const menuListItem = document.createElement('li');
//     menuListItem.textContent = item;
//     menuList.appendChild(menuListItem);
//   });

//   const menuButton = document.querySelector('.menu-button');

//   menuButton.buttonaddEventListener('click', () => {
//     menuItem.classList.toggle('menu--open');
//   });

//   return menuItem;
// }

// const header = document.querySelector('.header');

// header.appendChild(menuMaker(menuItems));

// menuMaker(menuItems);