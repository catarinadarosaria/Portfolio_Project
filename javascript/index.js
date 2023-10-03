document.addEventListener("DOMContentLoaded", function () {
  let path = window.location.pathname;

  // Get all navigation links and nav items
  let navLinks = document.querySelectorAll(".nav-link");
  let navItems = document.querySelectorAll(".navbar-nav .nav-item");

  // Reset all nav items and links to remove the "active" class
  navLinks.forEach(function (link, index) {
    link.classList.remove("active");
    navItems[index].classList.remove("active-nav-item");
  });

  // Loop through each link and compare the href with the current path
  navLinks.forEach(function (link, index) {
    let linkPath = link.getAttribute("href");

    // Check if the current path matches the link's href
    if (path === linkPath) {
      link.classList.add("active");
      navItems[index].classList.add("active-nav-item");
    } else if (
      path === "/" &&
      (linkPath === "/" || linkPath === "/index.html")
    ) {
      // Special case for the homepage
      link.classList.add("active");
      navItems[index].classList.add("active-nav-item");
    }
  });

  // Check if the current URL contains "/project-" (indicating a project page)
  if (path.includes("/project-")) {
    // Get the "GRAPHIC DESIGN" nav item element by its ID and add "active-nav-item" class
    let graphicDesignNavItem = document.querySelector("#graphic-design-nav");
    if (graphicDesignNavItem) {
      graphicDesignNavItem.classList.add("active-nav-item");
    }
  }
});
