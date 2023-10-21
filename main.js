function setup(){
 video=createCapture(VIDEO);
 video.size(450,400);
 canvas=createCanvas(450,450);
 canvas.position(550,120);

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background('#367588');
}