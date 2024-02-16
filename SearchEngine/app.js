var car_card = document.getElementById("car-card");
var show_card = document.getElementById("show-card");
var shows =  document.getElementById("show");
var  owner = document.getElementById("disappear");
var choice = document.getElementById("choice")
var showImg = document.getElementById("showImg")
var company = document.getElementById("company");
var model = document.getElementById("model");
var searchBox = document.getElementById("search-box");



var cars =  {
    HYUNDAI:{
        COROLLA:{
            Image:"images/corolla.avif",
            name:"Corolla",
            price:"1050504",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"72 (Ltr)",
            color:["blue","black","red","blueviolet"]

        },
        TUCSON:{
            Image:"images/tucson.jpg",
            name:"TUCSON",
            price:"10050600",
            Speed:"132(160)/6700",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["blue","orange","red","blueviolet"]
        },
        ACCENT:{
            Image:"images/suzukiS-PRESSO.jpg",
            name:"ACCENT",
            price:"1000704",
            Speed:"132(180)/5200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"79 (Ltr)",
            color:["blue","orange","blueviolet","yellow"]
        }
    },
    SUZUKI:{
        ALTO:{
            Image:"images/alto.jpg",
            name:"ALTO",
            price:"10004705",
            Speed:"132(180)/8200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["red","orange","yellow","plum"]
        },
        MEHRAN:{
            Image:"images/mehran.webp",
            name:"MEHRAN",
            price:"2000700",
            Speed:"132(180)/6900",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["blue","purple","plum","yellow"]
        },
        SWIFT:{
            Image:"images/marutiSuzukiWagon.jpg",
            name:"SWIFT",
            price:"400000",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["blue","brown","yellow","plum"]
        },
        CARRY:{
            Image:"images/carrydaba.jpg",
            name:"CARRY",
            price:"3000600",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["plum","blue","brown","red"]

        },
        CULTUS:{
            Image:"images/cultus.jpg",
            name:"CULTUS",
            price:"500000",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["yellow","brown","red","pink"]
        }
    },
    HONDA:{
        CIVIC:{
            Image:"images/corolla.avif",
            name:"CIVIC",
            price:"700000",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["blue","white","red"]
        },
        CITY:{
            Image:"images/hondaci.webp",
            name:"CITY",
            price:"908090",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["blue","brown","red"]
        
        },
        HYBRID:{
            Image:"images/hybrid.jpg",
            name:"HYBRID",
            price:"456790",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"100 (Ltr)",
            color:["blue","aqua","red","orangered"]
        }
    },
    MARUTI:{
        MARUTI_SUZUKI:{
            Image:"images/MarautiSuzuki.jpg",
            name:"MARUTI_SUZUKI",
            price:"5689743",
            Speed:"132(180)/6280",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["blue","aqua","pink"]

        },
        MARUTI_ALTO:{
            Image:"images/marutiAlto.jpg",
            name:"MARUTI_ALTO",
            price:"873311",
            Speed:"132(180)/6200",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"90 (Ltr)",
            color:["red","aqua","pink"]
        },
        MARUTI_WAGON:{
            Image:"images/marutiSuzukiWagon.jpg",
            name:" MARUTI_WAGON",
            price:"234355",
            Speed:"132(180)/6200",
            Speed:"132(180)/6200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"70 (Ltr)",
            color:["red","aqua","orangered","orange"]
        },
    },
    TOYOTA:{
        LAND_CRUISER:{
            Image:"images/landcruiser70.jpg",
            name:" LAND_CRUISER",
            price:"1000000",
            Speed:"130(190)/6200",
            engine: "Smart Stream 2.5 MPi",
            color:["red","blue","orange"]
        },
        CRUISER_VXR:{
            Image:"images/landcruiserVXR.jpg",
            name:"  CRUISER_VXR",
            price:"10000001",
            Speed:"132(150)/6900",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"40 (Ltr)",
            color:["red","aqua","blue","orangered"]
        },
    },
    MERCEDES:{
        MERCEDES_BENZ:{
            Image:"images/mercedes-benz.jpg",
            name:"  MERCEDES_BENZ",
            price:"9800089",
            Speed:"132(180)/7200",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"50 (Ltr)",
            color:["red","aqua","yellow"]
        },
        HYBRID:{
            Image:"images/mercedesBenzSuvHybrid.jpg",
            name:"  HYBRID",
            price:"1000050",
            Speed:"133(180)/6500",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"40 (Ltr)",
            color:["blue","orangered","aqua","orange"]
        },
        MERCEDES_EQS:{
            Image:"images/mercedes-benzEQS.jpg",
            name:"  MERCEDES_EQS",
            price:"1000044",
            Speed:"132(190)/6300",
            engine: "Smart Stream 2.5 MPi",
            fuelTank:"60 (Ltr)",
            color:["red","aqua","blue"]

        }
    }
   
}
for(var key in cars){
   
    
  for(var key1 in cars[key]){

    var alldata = cars[key][key1]
    var colors = ""

    for(var i = 0; i < alldata.color.length;i++){
        colors+=`<div class="colors" style =" background-color:${alldata.color[i]}" ></div>`
    }
    car_card.innerHTML += ` 
    <div class="card  logoName animate__animated animate__zoomIn">
     <img src="${alldata.Image}" alt="" class ="zoom    ">
    <h2>${alldata.name}<i class="tag fa-solid fa-car  "></i></h2>
    <h3> Rs: ${alldata.price}<i class="tag  fa-solid fa-tag"></i></h3>
    <h4> Speed: <i class="fa-solid fa-gauge"></i> ${alldata.Speed}</h4>
    <h5>Engine: ${alldata.engine}</h5>
    <h5>fuelTank: ${alldata.fuelTank} <i class="fa-solid fa-gas-pump"></i></h5>
    <div class="color-div">
  ${colors}
    </div>
    
    </div>
    `
  }
}


company.innerHTML = "<option value=''>Select company</option>"
for (var key in cars) {
    company.innerHTML += `<option value="${key}">${key}</option>`;
}

function modelchange() {
   
    model.innerHTML = "<option value=''>Select Model</option>";

    var selectedCompany = cars[company.value];

    for (var key in selectedCompany) {
        model.innerHTML += `<option value="${key}">${key}</option>`;
    }
}


function searchFavourite(){
    searchBox.style.display ="flex"
    choice.style.display = "none"
    showImg.style.display= "none"
}

function display(){
 shows.style.display="flex";
 owner.style.display="none"
 showImg.style.display= "none"
 choice.style.display = "none"


}
function showChoice(){
    choice.style.display = "flex"
    owner.style.display="none"
    showImg.style.display= "flex"
    
}

function finalSearch() {
    var searchData = cars[company.value][model.value];
    var colors = ""; 
    for (var i = 0; i < searchData.color.length; i++) {
        colors += `<div class="colors" style="background-color:${searchData.color[i]}"></div>`;
    }
    console.log(searchData);
    show_card.innerHTML = ` 
    <div class="finalcard  logoName animate__animated animate__zoomIn">
     <img src="${searchData.Image}" alt="" class="zoom">
    <h2>${searchData.name}<i class="tag fa-solid fa-car"></i></h2>
    <h3> Rs: ${searchData.price}<i class="tag fa-solid fa-tag"></i></h3>
    <h4> Speed: <i class="fa-solid fa-gauge"></i> ${searchData.Speed}</h4>
    <h5>Engine: ${searchData.engine}</h5>
    <h5>fuelTank: ${searchData.fuelTank} <i class="fa-solid fa-gas-pump"></i></h5>
    <div class="color-div">
        ${colors}
    </div>
    
    </div>`;
    searchBox.style.display= "none"
    show_card.style.display="flex"
}
