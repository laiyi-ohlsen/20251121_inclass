// Sketch One - Gray BG 

var sketch1 = function (p) {

p.setup= function(){
p.createCanvas(400, 400); 
}

p.draw = function() {
p.background(220);
}
}

var sketch1_ = new p5(sketch1, 'sketch1-container');


// Sketch Two - Black BG 

var sketch2 = function(p) {
p.setup = function(){
p.createCanvas(400, 400); 

}

p.draw = function() {
p.background(0);
}
}

var sketch2_ = new p5(sketch2, 'sketch2-container');
        