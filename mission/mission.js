
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let border =document.getElementById('content')
// let subtitle = document.getElementsByClassName("p.subtitle");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#404040';
        document.body.style.color = "white";
        document.querySelectorAll("p.subtitle").forEach(p => {
            p.style.color = "lightblue";
        }); 
        
        // subtitle.style.color = "lightblue";
        logo.setAttribute('src','images/byui-logo-white.png');
        logo.setAttribute('alt','BYU-Idaho Logo white');
        border.style.borderColor = "white";
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";
         document.querySelectorAll("p.subtitle").forEach(p => {
            p.style.color = "#035f9c";
        });
        logo.setAttribute('src','images/byui-logo-blue.webp');
        logo.setAttribute('alt','BYU-Idaho Logo');
        border.style.borderColor = "black";
    }
}           
                    