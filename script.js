let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
  testimonials.forEach(t => t.classList.remove("active"));
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 3000);
