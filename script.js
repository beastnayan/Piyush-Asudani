
// ------------------accordian-property-declareation------------------------

let dropdownbtn = document.querySelectorAll("#drop-down");
let dropdowncontent = document.querySelectorAll("#drop-down-content");

// ------------------section-8 variable ------------------------

let getimages = document.querySelectorAll(".image-1");
let getUsername = document.getElementById("username");
let getStudy = document.getElementById("study");
let getDiscription = document.getElementById("discription");
let getUlList = document.getElementById("ul-list");
let getImageContainer = document.getElementById("img-containers");


// ------------------section-5 variable ------------------------


let currentCardIndex = 0;
const cards = document.querySelectorAll('#cards-block .card');
const circularImgChangers = document.querySelectorAll('#change-img .circular-img-changer');
const totalCards = cards.length;


console.log(dropdownbtn)

// ------------------saccordian logic ------------------------

for (let i = 0; i < dropdownbtn.length; i++) {
    dropdownbtn[i].addEventListener("click", function() {
        // Close all dropdown contents
        for (let j = 0; j < dropdowncontent.length; j++) {
            if (j !== i) {
                dropdowncontent[j].style.display = "none";
                dropdownbtn[j].innerHTML = "+";
            }
        }

        // Toggle the clicked dropdown content
        this.classList.toggle("active");
        if (dropdowncontent[i].style.display === "block") {
            dropdownbtn[i].innerHTML = "+";
            dropdowncontent[i].style.display = "none";
            console.log("if");
        } else {
            dropdownbtn[i].innerHTML = "-";
            dropdowncontent[i].style.display = "block";
            console.log("else");
        }
    });
}


// ------------------section-8  logic ------------------------

let imagedetails = [
    {
        id: 1,
        username: "Tom Holland",
        study: "BA Pass",
        shortdiscription: "Turpis porttitor et turpis sagittis luctus adipiscing duis lacus quis. Risus lorem dolor velit velit laoreet viverra. Adipiscing nec amet sit facilisis. Vestibulum velit consequat lorem maecenas dignissim egestas.",
        stars: 3
    },
    {
        id: 2,
        username: "Lionel Messi",
        study: "Mechanical engg",
        shortdiscription: "Barcelona",
        stars: 5
    },
    {
        id: 3,
        username: "Cristiano Ronaldo",
        study: "10th fail",
        shortdiscription: "America",
        stars: 2
    },
    {
        id: 4,
        username: "Sam Methew",
        study: "Lawyer",
        shortdiscription: "London",
        stars: 1
    },
    {
        id: 5,
        username: "Jerom Fernandis",
        study: "Lecturer",
        shortdiscription: " velit .",
        stars: 4
    }
];

getimages.forEach((eachitem) => {
    eachitem.addEventListener("click", function(e) {
        let id = this.getAttribute("image-id");
        console.log(id);
        let imageData = imagedetails.find(img => img.id == id);

        if (imageData) {
            getUsername.textContent = imageData.username;
            getStudy.textContent = imageData.study;
            getDiscription.textContent = imageData.shortdiscription;
            getUlList.textContent = "";

            let length = imageData.stars;

            for (let i = 0; i < length; i++) {
                let li = document.createElement("li");
                let stars = document.createElement("i");
                stars.classList.add("fa-solid", "fa-star");
                li.appendChild(stars);
                getUlList.appendChild(li);
            }

            // Rearrange images to center the clicked image
            let imgContainers = Array.from(document.getElementById('img-containers').children);
            let index = imgContainers.findIndex(img => img.getAttribute('image-id') == id);
            let centerIndex = Math.floor(imgContainers.length / 2);
            let newOrder = [];

            for (let i = 0; i < imgContainers.length; i++) {
                newOrder[(i + centerIndex - index + imgContainers.length) % imgContainers.length] = imgContainers[i];
            }

            let imgContainersParent = document.getElementById('img-containers');
            imgContainersParent.innerHTML = '';
            newOrder.forEach(img => imgContainersParent.appendChild(img));

            // Apply CSS classes for image sizes
            newOrder.forEach((img, i) => {
                img.classList.remove('img-center', 'img-small');
                if (i === centerIndex) {
                    img.classList.add('img-center');
                } else if (i === 0 || i === newOrder.length - 1) {
                    img.classList.add('img-small');
                }
            });
        }
    });
});


// ------------------section-5 logic ------------------------



function showCard(index) {
    // Hide all cards and show the selected card
    cards.forEach((card, i) => {
        card.style.display = (i === index) ? 'flex' : 'none';
    });

    // Update circular image changers
    circularImgChangers.forEach((circle, i) => {
        if (i === index) {
            circle.classList.add('active'); // Add active class to the current indicator
        } else {
            circle.classList.remove('active'); // Remove active class from inactive indicators
        }
    });
}

// Show the initial card
showCard(currentCardIndex);

document.getElementById('left-btn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex > 0) ? currentCardIndex - 1 : totalCards - 1;
    showCard(currentCardIndex);
});

document.getElementById('right-btn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex < totalCards - 1) ? currentCardIndex + 1 : 0;
    showCard(currentCardIndex);
});