let dropdownbtn = document.querySelectorAll("#drop-down button");
let dropdowncontent = document.querySelectorAll("#drop-down-content");

let getimages = document.querySelectorAll(".image-1");
let getUsername = document.getElementById("username");
let getStudy = document.getElementById("study");
let getDiscription = document.getElementById("discription");
let getUlList = document.getElementById("ul-list");
let getImageContainer = document.getElementById("img-containers");

for (let i = 0; i < dropdownbtn.length; i++) {
    dropdownbtn[i].addEventListener("click", function() {
        this.classList.toggle("active");

        if (dropdowncontent[i].style.display == "block") {
            dropdownbtn[i].innerHTML = "+";
            dropdowncontent[i].style.display = "none";
        } else {
            dropdownbtn[i].innerHTML = "-";
            dropdowncontent[i].style.display = "block";
        }
    });
}

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
