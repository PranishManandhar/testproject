document.addEventListener("DOMContentLoaded", function () {
    const name = document.querySelector('.name');
    const title = document.querySelector('.title');
    const email = document.querySelector('.contact:nth-child(4)');
    const phone = document.querySelector('.contact:nth-child(5)');

    // Example: Change content dynamically
    name.textContent = "Jane Smith";
    title.textContent = "Product Manager";
    email.textContent = "Email: jane.smith@example.com";
    phone.textContent = "Phone: (987) 654-3210";
});
