// Open the popup with animation
function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
    setTimeout(() => {
      popup.classList.add('show');
    }, 10); // Allow time for the display to apply
  }
  
  // Close the popup with animation
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 400); // Match the animation duration
  }
  
  // Close the popup when clicking outside the content
  function closePopupOutside(event) {
    const popupContent = document.querySelector('.popup-content');
    if (!popupContent.contains(event.target)) {
      closePopup();
    }
  }
  
// Highlight the active navbar link
document.querySelectorAll('.navbar a').forEach(link => {
    // Get the current page path (e.g., "/index.html" or "/archive.html")
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; // Default to "index.html" if empty
    
    // Get the href of the link and extract its last part (e.g., "index.html")
    const linkPath = link.getAttribute('href').split('/').pop();
    
    // Check if the current page matches the link's href
    if (currentPath === linkPath) {
        link.classList.add('active'); // Add the "active" class to the matching link
    } else {
        link.classList.remove('active'); // Ensure others are not marked active
    }
});

window.onload = function() {
    // Get the current page's filename (e.g., 'index.html' or 'archive.html')
    const currentPage = window.location.pathname.split("/").pop();

    // Get all the links in the navbar
    const navbarLinks = document.querySelectorAll(".navbar a");

    // Loop through each link and check if it matches the current page
    navbarLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        
        // If the link matches the current page, add the 'active' class
        if (linkHref === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};

// JavaScript to add active class based on the current page
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar-link'); // Select all links with navbar-link class

    // Get the current page's filename (index.html or archive.html)
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through each link
    links.forEach(link => {
        // Check if the link's href matches the current page
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");  // Add the 'active' class to the current link
        } else {
            link.classList.remove("active");  // Remove the 'active' class from others
        }
    });
});

