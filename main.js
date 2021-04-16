canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
roverimg = "rover.png"
nasa_mars_image_array = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
random_number = Math.floor(Math.random()*4)
console.log(random_number)
backgroundimg = nasa_mars_image_array[random_number]
rover_x = 10
rover_y = 10
rover_height = 90
rover_width = 100
function add(){
backgroundimg1 = new Image()
backgroundimg1.onload = uploadBackground
backgroundimg1.src = backgroundimg
roverimg1 = new Image()
roverimg1.onload = uploadRover
roverimg1.src = roverimg
}
function uploadBackground(){
    ctx.drawImage(backgroundimg1,0,0,canvas.width,canvas.height)

}
function uploadRover(){
    ctx.drawImage(roverimg1,rover_x,rover_y,rover_width,rover_height)

}
window.addEventListener("keydown",myKeyDown)
function myKeyDown(e){
keypress = e.keyCode
console.log(keypress)
if(keypress=="37"){
    Left()
    console.log("left")
}
    if(keypress=="38"){
        Up()
        console.log("up")
    }
    if(keypress=="39"){
        Right()
        console.log("right")
    }
    if(keypress=="40"){
        Down()
        console.log("down")
    }
}
function Up(){
    if(rover_y>=0){
rover_y=rover_y-10
uploadBackground()
uploadRover()
    }
}
function Left(){
    if(rover_x>=0){
rover_x=rover_x-10
uploadBackground()
uploadRover()
    }
}
function Right(){
    if(rover_x<=700){
rover_x=rover_x+10
uploadBackground()
uploadRover()
    }
}
function Down(){
    if(rover_y<=500){
rover_y=rover_y+10
uploadBackground()
uploadRover()
    }
}