document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".food-item img");
  images.forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.15)";
      img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      img.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.25)";
      img.style.zIndex = "10";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });
});