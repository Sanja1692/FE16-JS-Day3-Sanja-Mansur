function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  if (getRandomInt(-5,26) <= 10) {
      console.log("The weather is cold")
  } else {
      console.log("The weather is morderate")
  }

var array = [1, 7, -3, 9];

function maxNumber(Array) {
    return Math.max.apply(null, Array);

}

console.log(maxNumber(array));


let div = document.getElementById('weather');
let image = document.getElementById("img");

if (getRandomInt(-5,35) <= 0) {
    div.innerHTML = "The weather is really cold. Feels like winter weather"
    image.setAttribute("src", "https://i.inews.co.uk/content/uploads/2019/01/GettyImages-925843548.jpg")
    image.setAttribute("width", "100%")

} else if (getRandomInt(-5,35) <= 10) {
    div.innerHTML = "The weather is kind of cold"
    image.setAttribute("src", "https://th.bing.com/th/id/OIP.OIs7PFkJfFFmvXLT2vxpBgHaFj?pid=ImgDet&rs=1")
    image.setAttribute("width", "100%")
} else if (getRandomInt(-5,35) <= 15) {
    div.innerHTML = "The weather is nice but I'll still need a jacket"
    image.setAttribute("src", "https://newsimage.radio.gov.pk/20200510/3124793131589087765.jpg")
    image.setAttribute("width", "100%")

} else if (getRandomInt(-5,35) <= 20) {
    div.innerHTML = "The weather is comfortably warm"
    image.setAttribute("src", "https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgHaEc?pid=ImgDet&rs=1")
    image.setAttribute("width", "100%")

} else if (getRandomInt(-5,35) <= 25) {
    div.innerHTML = "The weather is beautiful"
    image.setAttribute("src", "https://i.inews.co.uk/content/uploads/2019/01/GettyImages-925843548.jpg")
    image.setAttribute("width", "100%")

} else if (getRandomInt(-5,35) <= 30) {
    div.innerHTML = "The weather is getting hot. Maybe a good time to go swimming?"
    image.setAttribute("src", "https://th.bing.com/th/id/R.15b2562897def34c57b6649755f452f5?rik=NoaunSbjHorESw&pid=ImgRaw&r=0")
    image.setAttribute("width", "100%")

} else if (getRandomInt(-5,35) <= 35) {
    div.innerHTML = "The weather is really hot outside"
    image.setAttribute("src", "https://timesofislamabad.com/digital_images/large/2020-06-20/hot-and-dry-weather-expected-in-most-parts-of-country-1592635187-6870.jpg")
    image.setAttribute("width", "100%")

}


