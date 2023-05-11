var button = document.querySelector(".accordion-button");
var accordionContent = document.getElementById("accordion-content");
var orderSummaryDiv = document.querySelector(".custom-summary");
var clickCount = 0;
button.addEventListener("click", function () {
  var span = this.querySelector(".show-order-summary");
  var text = span.textContent;
  
  var icon = this.querySelector(".icon-show-hide");
  if (text == "Show order summary") {
    accordionContent.classList.add("show");
    span.textContent = "Hide order summary";
    orderSummaryDiv.style.display = "block";
  } else {
    span.textContent = "Show order summary";
    orderSummaryDiv.style.display = "none";
  }

  if (clickCount % 2 == 0) {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  } else {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }
  clickCount++;
});

function toggleAccordion() {
    if (window.innerWidth < 768) { 
        accordionContent.classList.remove("show");
        orderSummaryDiv.style.display = "none";
    } else {
        accordionContent.classList.add("show");
    }
}
toggleAccordion(); 
window.addEventListener("resize", toggleAccordion);