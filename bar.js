const progress  = document.getElementById("progress");
const previous  = document.getElementById("prevButton");
const next  = document.getElementById("nextButton");
const circles = document.querySelectorAll(".circles");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length        
    }
    update();
});

previous.addEventListener("click", () => {
    currentActive--;

    if (currentActive > 1) {
        currentActive = 1        
    }
    update();
});

function update(){
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");           
        } else {
            circle.classList.remove("active");
        }
    });
}