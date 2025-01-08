let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Fixed typo: 'windows.scrolly' to 'window.scrollY'
        let offset = sec.offsetTop - 150; // Fixed 'officeTop' to 'offsetTop'
        let height = sec.offsetHeight; // Fixed 'officeHeight' to 'offsetHeight'
        let id = sec.getAttribute('id'); // Correctly retrieve the 'id' attribute

        if (top >= offset && top < offset + height) { // Fixed '_top' to 'top'
            navLinks.forEach(link => {
                link.classList.remove('active'); // Fixed 'renew' to 'remove'
                // Fixed selector syntax for querySelector
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    
    }
    emailjs.send ("service_mnha1g9","template_knhivzj", parms).then(alert("Email Sent!!")
}
