let prevScrollPos = window.pageYOffset;
const topHeader = document.getElementById("top-header");
const bottomHeader = document.getElementById("bottom-header");
const logo = document.querySelector(".small-logo");
const name = document.querySelector(".name");
const burger = document.querySelector('.burger');
const homebar = document.querySelector('.home-bar');
const navlist = document.querySelector('.v-resp');

function updateScreenSize() {
  return window.innerWidth;
}

let screenWidth = updateScreenSize(); // Initial screen width

if (screenWidth <= 480) {
  burger.addEventListener('click', () => {
    navlist.classList.toggle('active');
  });
}

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  screenWidth = updateScreenSize(); // Update screen width on every scroll

  if (screenWidth > 425) {
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up: Reveal the top header and reset the bottom header
      topHeader.style.visibility = "visible";
      bottomHeader.style.position = "static";
      bottomHeader.style.justifyContent = "center"; // Align links to the center
      bottomHeader.style.backgroundColor = "#0166B4";
      const links = document.querySelectorAll('.home-bar a');
      links.forEach(link => {
        link.style.color = '#fff';
      });
      logo.style.display = "none";
      name.style.display = "none";
    } else {
      // Scrolling down: Hide the top header and fix the position of the bottom header
      topHeader.style.visibility = "hidden";
      bottomHeader.style.backgroundColor = "white";

      bottomHeader.style.position = "fixed";
      bottomHeader.style.top = "0";
      bottomHeader.style.width = "100%";
      bottomHeader.style.justifyContent = "flex-end"; // Align links to the right
      const links = document.querySelectorAll('.home-bar a');
      links.forEach(link => {
        link.style.color = '#0166B4';
      });

      logo.style.display = "flex";
      name.style.display = "flex";
    }

    prevScrollPos = currentScrollPos;
  }
};

// Apply smooth transition using CSS
const headerElements = [topHeader, bottomHeader, logo, name];
headerElements.forEach(element => {
  element.style.transition = "visibility 0.3s ease, background-color 0.3s ease, color 0.3s ease, display 0.5s ease";
});
