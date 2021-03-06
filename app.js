var button = document.getElementById("getQuote");
var container = document.getElementById("container");
const img = document.createElement("img");
const photoContainer = document.getElementById("photoContainer");


function getQuote(){
    var url = "https://api.breakingbadquotes.xyz/v1/quotes";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      const data = JSON.parse(xhr.responseText);
     const node = document.createTextNode(data[0].quote);
     const h1 = document.createElement("h1")
     const oldNode= container.firstChild;
     const quote = document.getElementById("quote");
    h1.appendChild(node);
    container.appendChild(h1);
    container.removeChild(oldNode);
    if (data[0].author == "Walter White") {
        const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/walter.png";
        
        } else if (data[0].author == "Jesse Pinkman") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/jesse.png";
        }  else if (data[0].author == "Saul Goodman") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/saul.jpg"
        } else if (data[0].author == "Gustavo Fring") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/gus.png"
        } else if (data[0].author == "Hank Schrader") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/hank.png"
        } else if (data[0].author == "Walter White Jr.") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/flynn.png"
        } else if (data[0].author == "Badger") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/badger.jpg"
        } else if (data[0].author == "Skyler White") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/skyler.png"
        } else if (data[0].author == "Mike Ehrmantraut") {
            const oldImgNode = photoContainer.firstChild;
        photoContainer.appendChild(img);
        img.src = "/resources/mike.png"
        }
        quote.innerHTML = data[0].author;
        
    
        return data[0].author;
       
   }};

   xhr.send();
   getCount();


};

function getCount() {
    const quote = document.getElementById("quote").innerHTML; 
    if (quote == "Walter White") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Walter+White";
    } else if (quote == "Jesse Pinkman") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Jesse+Pinkman";
    } else if (quote == "Gustavo Fring") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Gustavo+Fring";
    } else if (quote == "Saul Goodman") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Saul+Goodman";
    } else if (quote == "Hank Schrader") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Hank+Schrader";
    } else if (quote == "Walter White Jr.") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Walter+White+Jr";
    } else if (quote == "Skyler White") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Skyler+White";
    } else if (quote == "Mike Ehrmantraut") {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Mike+Ehrmantraut";
    } else if (quote == "Badger") {
        document.getElementById("killCount").innerHTML = "lmao c'mon now"
    } else {
        var url = "https://www.breakingbadapi.com/api/death-count?name=Walter+White";

    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
         
          datas = JSON.parse(xhr.responseText);
          document.getElementById("killCount").innerHTML = datas[0].deathCount;
       }};
    
    xhr.send();
}



button.addEventListener("click", function() {
    getQuote();
    
   });



