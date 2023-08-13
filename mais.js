function setup() {
canvas = createCanvas (300, 300);
canvas.center();
video = createcapture(VIDEO);
canvas.hide();
classifier = ml5.imageclassifier('Mobilenet',modelLoaded);
}

function modelLoaded() {
console.log('modelLoaded!');
}

function draw() {
image(video, 0, 0, 300, 300);

classifier.classify(video, gotResult);
var previus_result='';


}
