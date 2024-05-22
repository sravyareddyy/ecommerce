let prevScrollPos = window.pageYOffset;
    const topHeader = document.getElementById("top-header");
    const bottomHeader = document.getElementById("bottom-header");
    const logo = document.querySelector(".small-logo");
    const name = document.querySelector(".name");
    const burger = document.querySelector('.burger');
    const homebar = document.querySelector('.home-bar');
    const navlist = document.querySelector('.v-resp');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      burger.addEventListener('click', () => {
        navlist.classList.toggle('active');
      });
    }

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (screenWidth > 425) {
        // Execute JavaScript for screens wider than 425px

        if (prevScrollPos > currentScrollPos) {
          // Scroll up
          topHeader.style.visibility = "visible";
          bottomHeader.style.position = "static";
          bottomHeader.style.justifyContent = "center";
          bottomHeader.style.backgroundColor = "#0166B4";
          setLinkColor('#fff');
          hideElements();
        } else {
          // Scroll down
          topHeader.style.visibility = "hidden";
          bottomHeader.style.backgroundColor = "white";
          bottomHeader.style.position = "fixed";
          bottomHeader.style.top = "0";
          bottomHeader.style.width = "100%";
          bottomHeader.style.justifyContent = "flex-end";
          setLinkColor('#0166B4');
          showElements();
        }

        prevScrollPos = currentScrollPos;
      }
    };

    function setLinkColor(color) {
      const links = document.querySelectorAll('.home-bar a');
      links.forEach(link => {
        link.style.color = color;
      });
    }

    function hideElements() {
      logo.style.display = "none";
      name.style.display = "none";
    }

    function showElements() {
      logo.style.display = "flex";
      name.style.display = "flex";
    }

    const headerElements = [topHeader, bottomHeader, logo, name];
    headerElements.forEach(element => {
      element.style.transition = "visibility 0.3s ease, background-color 0.3s ease, color 0.3s ease, display 0.5s ease";
    });