let bookmarkArray = JSON.parse(localStorage.getItem("bookmarklist")) || [];
let siteName = document.getElementById("nameinput");
let siteUrl = document.getElementById("urlinput");
let errorInput1 = document.getElementById("errorblock1");
let errorInput2 = document.getElementById("errorblock1");
let cardconatiner = document.querySelector(".cardcontainer");

function validate() {
  errorInput1.style.display = "none";
  errorInput2.style.display = "none";
  if (siteName.value.length < 4) {
    errorInput1.style.display = "block";
    errorInput2.style.display = "block";
    let he = (document.querySelector(".formblock").style.height = "270px");
  } else {
    let bookMarkObject = {
      name: "",
      link: "",
    };
    bookMarkObject.name = siteName.value;
    bookMarkObject.link = siteUrl.value;
    bookmarkArray.push(bookMarkObject);
    localStorage.setItem("bookmarklist", JSON.stringify(bookmarkArray));
    display();
  }
}

function display() {
  bookmarkArray.forEach((element, index) => {
    let outerdiv = document.createElement("div");
    outerdiv.classList.add("card");
    let trashImage = document.createElement("img");
    trashImage.src = "./Icons/trash-solid (1).svg";
    trashImage.addEventListener("click", function () {
      deletecard(index);
    });
    let anchorTag = document.createElement("a");
    anchorTag.innerText = `${element.name}`;
    anchorTag.href = `${element.link}`;
    outerdiv.appendChild(trashImage);
    outerdiv.appendChild(anchorTag);
    cardconatiner.appendChild(outerdiv);
  });
}

function deletecard(index) {
  bookmarkArray.splice(index, 1);
  localStorage.setItem("bookmarklist", JSON.stringify(bookmarkArray));
  location.reload();
}

display();
