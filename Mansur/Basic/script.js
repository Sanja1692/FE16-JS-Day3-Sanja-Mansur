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

if (getRandomInt(-5,35) <= 0) {
    div.innerHTML = "The weather is really cold. Feels like winter weather"
    document.getElementsByClassName("img").write = "<img src='https://i.inews.co.uk/content/uploads/2019/01/GettyImages-925843548.jpg' width='100%'>"
} else if (getRandomInt(-5,35) <= 10) {
    div.innerHTML = "The weather is kind of cold"
    document.getElementsByClassName("img").write = "<img src='https://th.bing.com/th/id/R.d8fa21b9cefd72fa29246303472ed963?rik=c%2fdVmtl4c5Lhmg&pid=ImgRaw&r=0' width='100%'>"
} else if (getRandomInt(-5,35) <= 15) {
    div.innerHTML = "The weather is nice but I'll still need a jacket"
    document.getElementsByClassName("img").write = "<img src='https://th.bing.com/th/id/R.d8fa21b9cefd72fa29246303472ed963?rik=c%2fdVmtl4c5Lhmg&pid=ImgRaw&r=0' width='100%'>"

} else if (getRandomInt(-5,35) <= 20) {
    div.innerHTML = "The weather is comfortably warm"
    document.getElementsByClassName("img").write = "<img src='https://th.bing.com/th/id/R.d8fa21b9cefd72fa29246303472ed963?rik=c%2fdVmtl4c5Lhmg&pid=ImgRaw&r=0' width='100%'>"

} else if (getRandomInt(-5,35) <= 25) {
    div.innerHTML = "The weather is beautiful"
    document.getElementsByClassName("img").write = "<img src='https://th.bing.com/th/id/R.d8fa21b9cefd72fa29246303472ed963?rik=c%2fdVmtl4c5Lhmg&pid=ImgRaw&r=0' width='100%'>"

} else if (getRandomInt(-5,35) <= 30) {
    div.innerHTML = "The weather is getting warm. Maybe a good time to go swimming?"
    document.getElementsByClassName("img").write = "<img src='https://th.bing.com/th/id/R.d8fa21b9cefd72fa29246303472ed963?rik=c%2fdVmtl4c5Lhmg&pid=ImgRaw&r=0' width='100%'>"

} else if (getRandomInt(-5,35) <= 35) {
    div.innerHTML = "The weather is really hot outside"
    document.getElementsByClassName("img").write = "<img src='https://th.bing.com/th/id/R.d8fa21b9cefd72fa29246303472ed963?rik=c%2fdVmtl4c5Lhmg&pid=ImgRaw&r=0' width='100%'>"

}


