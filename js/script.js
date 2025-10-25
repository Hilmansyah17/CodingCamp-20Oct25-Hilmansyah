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

   // Function to toggle mobile menu with slide animation from left and staggered item animation
   function toggleMenu() {
       const menu = document.getElementById('mobile-nav');
       const links = menu.querySelectorAll('a'); // Get all links in the menu
       if (menu.classList.contains('hidden')) {
           // Show menu: remove hidden, then animate in
           menu.classList.remove('hidden');
           setTimeout(() => {
               menu.style.transform = 'translateX(0)';
               menu.style.opacity = '1';
               // Animate links staggered
               links.forEach((link, index) => {
                   setTimeout(() => {
                       link.classList.add('animate-stagger');
                   }, index * 100); // 100ms delay between each link
               });
           }, 10); // Small delay to allow display change
       } else {
           // Hide menu: animate out, then add hidden
           menu.style.transform = 'translateX(-100%)';
           menu.style.opacity = '0';
           // Remove staggered animation from links
           links.forEach(link => {
               link.classList.remove('animate-stagger');
           });
           setTimeout(() => {
               menu.classList.add('hidden');
           }, 300); // Match transition duration
       }
   }

   // Smooth scroll ke section target, berhenti di atas tulisan judul (h2), tanpa efek fade-in yang menyebabkan blink
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           const target = document.querySelector(this.getAttribute('href'));
           if (target) {
               // Hitung offset berdasarkan tinggi header sticky secara dinamis
               const header = document.querySelector('header');
               const headerHeight = header ? header.offsetHeight : 0;
               const offset = headerHeight + 20; // Tambah 20px untuk jarak aman agar judul terlihat di bawah header

               // Scroll ke section dengan offset
               const targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
               window.scrollTo({
                   top: targetTop,
                   behavior: 'smooth'
               });
           }
       });
   });

   // Efek fade-in awal saat halaman load (hanya sekali, bukan setiap klik)
   document.addEventListener('DOMContentLoaded', () => {
       const sections = document.querySelectorAll('section');
       sections.forEach((section, index) => {
           section.style.opacity = '0';
           section.style.transform = 'translateY(20px)';
           setTimeout(() => {
               section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
               section.style.opacity = '1';
               section.style.transform = 'translateY(0)';
           }, index * 200); // Delay staggered untuk efek awal
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
   