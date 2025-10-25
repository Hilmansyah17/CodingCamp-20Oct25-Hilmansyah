welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

/// Function to validate form inputs
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// Show alert if any field is empty
        alert("All fields are required!");
    } else {
        /// Show success message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }
}

// Function to toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobile-nav');
    menu.classList.toggle('hidden');
}

// Smooth scroll dengan efek fade-in saat section muncul
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Tambahkan efek fade-in pada section target
            target.style.opacity = '0';
            target.style.transform = 'translateY(20px)';
            setTimeout(() => {
                target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
            }, 100);
        }
    });
});

const modal = document.getElementById('projectModal');
    const viewBtn = document.getElementById('viewProjectBtn');
    const closeBtn = document.getElementById('closeModalBtn');

    viewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
