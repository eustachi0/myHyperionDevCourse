//sides
let side1 = 25;
let side2 = 28;
let side3 = 25;
let side4 = 28;

//corner angles
let corner1 = 80;
let corner2 = 120;
let corner3 = 80;
let corner4 = 120;

//statements to determine what type of shape the quadrilateral is
//checking if it's a square
if (side1 === side2 && side2 === side3 && side3 === side4 && corner1===90 && corner2===90 && corner3===90 && corner4===90) {
    console.log ("It's a square!");
//checking if it's a rectangle
} else if(side1 === side3 && side2 === side4 && corner1===90 && corner2===90 && corner3===90 && corner4===90) {
    console.log("It's a rectangle!");
//checking if it's a rhombus
} else if (side1 === side2 && side2 === side3 && side3 === side4 && corner1 === corner3 && corner2 === corner4 && corner1 != 90 && corner2 != 90 && corner3 != 90 && corner4 != 90) {
    if (corner1 < 90 && corner3 < 90) {
        console.log("It's a rhombus tilted to the right");
    } else {
        console.log("It's a rhombus tilted to the left")
    }
//checking if it's a parallelogram
} else if (side1 === side3 && side2 === side4 && corner1 === corner3 && corner2 === corner4 && corner1 != 90 && corner2 != 90 && corner3 != 90 && corner4 != 90) {
    if (corner1 < 90 && corner3 < 90) {
        console.log("It's a parallelogram tilted to the right");
    } else {
        console.log("It's a parallelogram tilted to the left")
    }
}