

$(document).ready(function () {

    //Votre code JS et jQuery là dedans  ET PAS AILLEURS
    // When the user scrolls the page, execute myFunction

    window.onscroll = function () {

        myFunction();
    };








    // Get the header
    let menu = document.querySelector("#myMenu");

    // Get the offset position of the navbar
    let sticky = menu.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

    function myFunction() {

        if (window.pageYOffset > sticky) {

            menu.classList.add("sticky");

        } else {

            menu.classList.remove("sticky");
        }
    }








    // Get the header
    let menu = document.querySelector("#myMenu");

    // Get the offset position of the navbar
    let sticky = menu.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

    function myFunction() {

        if (window.pageYOffset > sticky) {

            menu.classList.add("sticky");

        } else {

            menu.classList.remove("sticky");
        }
    }

    document.blanc.blanc += ' fade-out';



});