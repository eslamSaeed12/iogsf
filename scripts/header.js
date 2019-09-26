export const header = {
  hdr: document.getElementsByTagName("header"),
  active: function() {
    Array.from(this.hdr).forEach(header_ => {
      if (header_.classList.contains("h-active")) {
        header_.style.display = "block";
      }
    });
  }
};
