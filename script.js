// Initialize EmailJS
emailjs.init('oDQ40JHz-VCdjSG19'); // Replace with your EmailJS Public Key

// Menu Toggle (Optional)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight Active Section on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
            });
        }
    });
};

// Send Email Using EmailJS
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs
        .send('service_11d19wi', 'template_uhmbhye', parms)
        .then(() => {
            alert('Email Sent Successfully!');
        })
        .catch(error => {
            alert('Failed to send email: ' + error.text);
        });
});
