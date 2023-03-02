//choose your sequence for rects from all numbers allowd exept 0;
sequenceJump = [];

//this num gets ++ until <= sequenceJump.length and comes
//back to = 0 using ternary % (the function is in line 58);
arrayLooper = 0;
//this value gets incremented by the number in the array sequenceJump[arrayLooper];
incAndJump = 0;

//i gets ++ until the end of draw. if i == incAndJump do somthing.
//EX: draw rect/ change color.
i = 0;
//t gets ++ at the end of of the draw function
//we use tt to limit the times of looping the entire draw or each color fill to get more custome results
let t = 0;
tt = 0;

//for color table
function preload() {
  palettes = loadJSON('colors.json');
}

function setup() {
  /*change colorMode for HSB and find json file 
  try to work with gardiant to change background  
 
  **/
  palettesArray = Object.values(palettes);
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  noLoop();
  noStroke();
  // noiseSeed(1);
  sequenceJump = [1, 4, 1, 1, 22];

  for (y = 0; y <= height; y += 25) {
    for (x = 0; x <= width; x += 25) {
      //increment this value by the number inside insequence[jump] location
      if (i == incAndJump) {
        palette1 = floor(random(palettesArray.length));
        fill(
          palettesArray[palette1].rgb[0],
          palettesArray[palette1].rgb[1],
          palettesArray[palette1].rgb[2]
        );
        ellipse(x, y, 65, 65);
        if (sequenceJump[arrayLooper] > 10) {
        } else {
          ellipse(x, y, 50, 50);
        }
        fill(255, random(256));

        incAndJump += sequenceJump[arrayLooper];
        arrayLooper = (arrayLooper + 1) % sequenceJump.length;
      }

      i++;
    }
  }

  t++;
}
