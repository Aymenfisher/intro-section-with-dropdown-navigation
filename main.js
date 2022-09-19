//////////// Toggling Drop down menus //////////////



let dropdown = document.querySelectorAll('.dropdown  button'); // selecting buttons


function showDropdownMenu(menu,iconParent){
    menu.style.display = 'grid';  // since we are using grid, you can modify it
    iconParent.querySelector('#arrow-up').style.display = '';  // icons
    iconParent.querySelector('#arrow-down').style.display = 'none';
}

function hideDropdownMenu(menu,iconParent){
    menu.style.display = 'none';
    iconParent.querySelector('#arrow-up').style.display = 'none';  // icons
    iconParent.querySelector('#arrow-down').style.display = '';
}

function showHideDropdownMenu (e){
    let menu = e.target.nextElementSibling // the dropdown menu is the next sibling element of the button
    let menuComputedDisplay = window.getComputedStyle(menu).display;  // getting the computed display since we set it with css stylesheet
    if (menuComputedDisplay == 'none'){
        showDropdownMenu(menu,e.target);
    } else{
        hideDropdownMenu(menu,e.target);
    }
}

dropdown.forEach((dropdownButton) => dropdownButton.addEventListener('click',showHideDropdownMenu))


///// Toggling Navigation Bar on Mobile

openMenuIcon = document.getElementById('open-img');
closeMenuIcon = document.getElementById('close-img');

navigationBar = document.querySelector('nav')

openMenuIcon.addEventListener('click', (e)=> {
    navigationBar.style.right = '0'; // slide the navigation menu
    navigationBar.style.boxShadow = '0px 0px 100rem 100rem hsl(0, 0%, 8%,.8)';
})

closeMenuIcon.addEventListener('click', (e)=> {
    navigationBar.style.right = '-100%'; // hide the navigation bar
    navigationBar.style.boxShadow = 'none';
})