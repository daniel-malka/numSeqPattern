//choose your sequence for rects from all numbers allowd exept 0;
sequenceJump = [];

//this num gets ++ until <= sequenceJump.length and comes
//back to = 0 using ternary % (the function is in line 94);
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
  palette1 = floor(random(palettesArray.length));
  fill(
    palettesArray[palette1].rgb[0],
    palettesArray[palette1].rgb[1],
    palettesArray[palette1].rgb[2]
  );
  noStroke();
  rect(0, 0, windowWidth / 2.2);
  palette2 = floor(random(palettesArray.length));
  fill(
    palettesArray[palette2].rgb[0],
    palettesArray[palette2].rgb[1],
    palettesArray[palette2].rgb[2]
  );
  rect(windowWidth / 2.2, 0, windowWidth / 1.8, height);
  palette3 = floor(random(palettesArray.length));
  fill(
    palettesArray[palette3].rgb[0],
    palettesArray[palette3].rgb[1],
    palettesArray[palette3].rgb[2]
  );
  rect(0, windowHeight - windowWidth / 8.23, width, 233);
}

function draw() {
  noLoop();
  noStroke();
  // noiseSeed(1);
  sequenceJump = [1, 2, 4, 1, 2, 4, 3];

  for (y = 50; y <= height - 50; y += 100) {
    for (x = 50; x <= width; x += 100) {
      // thios if statement checks if its the right time to do somthing acording to  sequence array
      if (i == incAndJump) {
        //random color pallete from the pre loaded json file

        if (random(10) < 5) {
          palette4 = floor(random(palettesArray.length));
          fill(
            palettesArray[palette4].rgb[0],
            palettesArray[palette4].rgb[1],
            palettesArray[palette4].rgb[2]
          );
          if (random(1) > 0.5) {
            rect(x, y - 50, 100, 100);
          } else {
            rect(x, y, 100, 100);
          }
        } else {
          palette5 = floor(random(palettesArray.length));
          fill(
            palettesArray[palette5].rgb[0],
            palettesArray[palette5].rgb[1],
            palettesArray[palette5].rgb[2]
          );
          if (random(1) > 0.5) {
            ellipse(x, y, 100, 100);
          } else {
            ellipse(x + 25, y, 100, 100);
          }
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
