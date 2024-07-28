
let dropdownbtn = document.querySelectorAll("#drop-down")
let dropdowncontent = document.querySelectorAll("#drop-down-content")

let getimages = document.querySelectorAll("#image-1")
let getUsername = document.getElementById("username")
let getStudy = document.getElementById("study")
let getDiscription = document.getElementById("discription")
let getUlList = document.getElementById("ul-list")
let getMainStarDiv = document.getElementById("rating-star")


console.log(getMainStarDiv)


for (let i = 0; i < dropdownbtn.length; i++) {
    
    dropdownbtn[i].addEventListener("click" , function(){
        this.classList.toggle("active")
      

        if( dropdowncontent[i].style.display == "block"){
            dropdownbtn[i].innerHTML = "+"
            dropdowncontent[i].style.display = "none";
        }else{
            dropdownbtn[i].innerHTML = "-"
            dropdowncontent[i].style.display = "block";
        }
        
    })
}


let imagedetails = [

    {
        id: 1,
        username : "Tom Holland",
        study : "BA PAss",
        img : "./images/adidas.png",
        shortdiscription : "Turpis porttitor et turpis sagittis luctus adipiscing duis lacus quis. Risus lorem dolor velit velit laoreet viverra. Adipiscing nec amet sit facilisis. Vestibulum velit consequat lorem maecenas dignissim egestas.",
        stars: 3

    },
    {
        id: 2,
        username : "lionel Messi",
        study : "Mechanical engg",
        img : "./images/ibm.png",
        shortdiscription : "Barcelona",
        stars: 5

    },
    {
        id: 3,
        username : "cristiano Ronaldo",
        study : "10th fail",
        img : "./images/isweel.png",
        shortdiscription :"America",
        stars: 2

    },
    {
        id: 4,
        username : "Sam Methew",
        study : "Lawyer",
        img : "./images/adidas.png",
        shortdiscription : "London",
        stars: 1


    },
    {
        id: 5,
        username : "Jerom Fernandis",
        study : "Lecturer",
        img : "./images/adidas.png",
        shortdiscription : " velit .",
        stars: 4

    }
]



getimages.forEach((eachitem) =>{


    eachitem.addEventListener("click" , function(){
        let id = this.getAttribute("image-id")
        let imageData = imagedetails.find(img => img.id == id)

        if(imageData){
            getUsername.textContent= imageData.username;
            getStudy.textContent = imageData.study;
            getDiscription.textContent = imageData.shortdiscription
            getUlList.textContent = "";


            let length = imageData.stars;
            console.log(length)

            for (let i = 0; i < length ; i++) {
                let li = document.createElement("li")
                let stars = document.createElement("i")
                stars.classList.add("fa-solid", "fa-star")
                li.appendChild(stars)
                getUlList.appendChild(li)

            }

        }
    })
})