const menuBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');
const icon = document.querySelector('#menu-icon');

// menuBtn EventListener
menuBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(menuBtn.getAttribute('aria-expanded'));
  menuBtn.setAttribute('aria-expanded', !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');

  icon.classList.toggle('rotate-90', !isExpanded);
});


// Email Validation
let email;

document.getElementById("button").onclick = function() {
  email = document.getElementById("email").value;

  // Regular expression to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    console.log("Valid email:", email);
  } else {
    console.log("Invalid email");
  }
};
