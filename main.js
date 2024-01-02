function preload() {}

function setup() {

    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw() {

    image(video, 30, 30, 595, 430);
    tint(tint_color);

    fill("red");
    circle(30, 30, 80);
    circle(30, 470, 80);
    circle(615, 30, 80);
    circle(610, 470, 80);


    fill("green");
    rect(15, 0, 20, 500);
    rect(605, 0, 20, 500);
    rect(0, 15, 700, 20);
    rect(0, 450, 700, 20);

}

function take_snapshot() {

    save('student_name.png')

}

function filter_tint() {

    tint_color = document.getElementById("color_name").value;

}