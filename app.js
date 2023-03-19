const faq_lists = document.querySelectorAll(".faq__inner li");
[...faq_lists].map((a) => {
  a.addEventListener("click", () => {
    let p = a.querySelector("p");
    let icon = a.querySelector("img");
    if (!p.style.height || p.style.height === "0px") {
      p.style.height = p.scrollHeight + "px";
      icon.setAttribute("src", "images/close.svg");
      return;
    }
    icon.setAttribute("src", "images/open.svg");
    p.style.height = "0";
  });
});

// Scroll to(Center)
const links = document.querySelectorAll(".scroll_to");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
