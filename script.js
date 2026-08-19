/* ============================================================
   Nikhil — Data Analyst Portfolio (plain JS)
   EDIT the value below with your email address.
   ============================================================ */
var MY_EMAIL = "gangwarmuneesh96@gmail.com"; // e.g. "nikhil@example.com"

/* ---------- sticky nav shadow ---------- */
var nav = document.getElementById("nav");
function onScroll() {
  nav.classList.toggle("is-scrolled", window.scrollY > 12);
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- mobile menu ---------- */
var toggle = document.getElementById("navToggle");
var mobile = document.getElementById("navMobile");
toggle.addEventListener("click", function () {
  var open = mobile.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "✕" : "☰";
});
mobile.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    mobile.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }
});

/* ---------- scroll reveal animation ---------- */
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var items = document.querySelectorAll(".reveal");
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach(function (el) {
    el.classList.add("is-visible");
  });
} else {
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );
  items.forEach(function (el) {
    io.observe(el);
  });
}

/* ---------- hiring query box -> opens email app ---------- */
var form = document.getElementById("queryForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var data = new FormData(form);
  var name = data.get("name") || "a visitor";
  var subject = "Hiring query from " + name;
  var lines = ["Name: " + data.get("name"), "Email: " + data.get("email")];
  if (data.get("company")) lines.push("Company: " + data.get("company"));
  lines.push("", data.get("message"));
  window.location.href =
    "mailto:" +
    MY_EMAIL +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(lines.join("\n"));
});

/* ---------- footer year ---------- */
document.getElementById("year").textContent = String(new Date().getFullYear());
