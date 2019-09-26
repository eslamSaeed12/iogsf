import { header } from "./header";


// units
const navbar_responsive = {
  btn: document.querySelector("#btn-toggler"),
  section: document.querySelector("#nav_"),
  toggle: function() {
    this.btn.addEventListener("click", () => {
      this.section.classList.toggle("d-toggle");
    });
  }
};

const btns = {
  btn: document.querySelectorAll("nav .nav-link"),
  getPage: function() {
    Array.from(this.btn).forEach(button => {
      Array.from(header.hdr).forEach(head => {
        button.addEventListener("click", event => {
          event.preventDefault();
          if (button.id == head.id) {
            head.classList.add("h-active");
          } else {
            head.classList.remove("h-active");
          }
        });
      });
    });
  }
};
// invoke

navbar_responsive.toggle();
btns.getPage();