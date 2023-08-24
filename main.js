
var som1;
var som2;
function preload(){
som1 = loadSound("vagalume.mp3");
som2 = loadSound("osol.mp3")
}

function setup(){
    canvas = createCanvas(450,450)

    video = createCapture(VIDEO)
    video.hide()
    video.size(450,450)

    s= ml5.poseNet(video,modelRealy)
    s.on("pose",gotPoses)
}
function modelRealy(){
    console.log("O modelo está pronto!:D :O D:");
}
var ePntos = 0;
var dPontos = 0;

var XE = 0;
var XD = 0;
var YE = 0;
var YD = 0;
function draw(){
    canvas.position(windowWidth/2-225,windowHeight/2)
    image(video,0,0,450,450)
    fill("blue")
    if(ePntos>0.2){
        som1.setVolume(0.25)
        circle(XE,YE,30)
        som2.stop()
        if(!som1.isPlaying()){
        som1.play()
        document.getElementById("musica").innerHTML = "Valumes!"
    }
    }
    
    fill("green")
    if(dPontos>0.2){
        som2.setVolume(0.25)
    circle(XD,YD,30)
    som1.stop()
    if(!som2.isPlaying()){
    som2.play()
    document.getElementById("musica").innerHTML = "O sol!"
}
 }
    
}
function gotPoses(result){
    if(result.length>0){
    ePntos = result[0].pose.keypoints[9].score;
    dPontos = result[0].pose.keypoints[10].score;

     YD = result[0].pose.rightWrist.y;
     YE = result[0].pose.leftWrist.y;
     XE = result[0].pose.leftWrist.x;
     XD = result[0].pose.rightWrist.x;
    }
}
function Reproduzir(){
    if(som1.isPlaying()||som2.isPlaying()){
        som1.stop();
        som2.stop()
        document.getElementById("b").innerHTML = "Pausado"
    }
}