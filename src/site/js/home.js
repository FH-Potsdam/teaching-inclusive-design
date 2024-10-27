let sketchWidth = 500;
let sketchHeight = 400;

function updateSize () {
  sketchWidth = window.innerWidth;
  resizeCanvas(sketchWidth, sketchHeight);
}

function debounce(func, time = 100){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
}

window.addEventListener("resize", debounce( updateSize, 150 ));

const radius = 1;
const buffer = 40;
let shapeCount = 1;
const padding = radius;
const divisionSets = [5];
const spheres = [];
let colors = [];

let color1;
let color2;

let cam;

function polar(radius, angle) {
  const rad = Math.PI / 180 * angle;
  const x = Math.round(radius * Math.cos(rad) * 100) / 100;
  const y = Math.round(radius * Math.sin(rad) * 100) / 100;
  return {x, y};
}

function dist0(p1) {
  return Math.sqrt(Math.pow(p1.x, 2) + Math.pow(p1.y, 2));
} 

let rotation = 150;

const rotationOffset = {
  x: 0,
  y: 0,
  z: Math.PI / 4
};

function spherePoly (radius, divisions) {
  const obj = new p5.Geometry(1, 1);

  const shapes = [];
  const points = JSON.parse(JSON.stringify(new Array(divisions).fill(new Array(divisions).fill([]))));
  for (let d1 = 0; d1 < divisions; d1 += 1) {
    const p1 = polar(radius, 180 / (divisions - 1) * d1);
    const shape = [];
    for (let d2 = 0; d2 < divisions; d2 += 1) {
      const p2 = polar(p1.y, 360 / divisions * d2);
      points[d2][d1] = {x: p1.x, y: p2.y, z: p2.x};
      shape.push({x: p1.x, y: p2.y, z: p2.x});
    }
    shape.push(shape[0]);
    shapes.push(shape);
  }

  const vertexMap = {};

  const getVertexId = (x,y) => {
    const id = x + '_' + y;
    if (id in vertexMap)  {
      return vertexMap[id];
    }
    const v = createVector(points[x][y].x, points[x][y].y, points[x][y].z);
    obj.vertices.push(v);
    const idx = obj.vertices.length - 1;
    vertexMap[id] = idx;
    return idx;
  };

  for (let x = 0; x < points.length; x += 1) {
    for (let y = 0; y < points[x].length - 1; y += 1) {
      const nextX = x === points.length - 1 ? 0 : x + 1;
      const nextY = y === points[x].length - 1 ? 0 : y + 1;
      const face = [];
      face.push(getVertexId(x,y));
      face.push(getVertexId(nextX,y));
      face.push(getVertexId(nextX,nextY));
      face.push(getVertexId(x,nextY));
      obj.faces.push(face);
    }
  }

  obj.gid = 'geom_' + divisions;
  // obj.computeNormals();
  return obj;
}

/*--------------------------------------------------*/

let smallSpheres = [];
let numSmallSpheres = 15;
let trailLength = 75; // Number of points in the trail (orbit path)
let sphereMin = 100;
let sphereMax = 190;

function setup() {
  updateSize();

  setAttributes('antialias', true);
  bezierDetail(50);
  curveDetail(50);
  const canvas = createCanvas(sketchWidth, sketchHeight, WEBGL);
  canvas.parent('header-sketch');

  // blue to green
  color1 = color(20,168,115);
  color2 = color(16,139,208);

  noLights();

  colors = [];
  for (let d = 0; d < shapeCount; d += 1) {
    colors.push(lerpColor(color1, color2, shapeCount === 1 ? 0 : d / (shapeCount-1)));
  }

  for (let d = 0; d < divisionSets.length && d < shapeCount; d += 1) {
    spheres.push(spherePoly(radius, divisionSets[d]));
  }  

  // Create small spheres with random starting angles (azimuth and inclination)
  for (let i = 0; i < numSmallSpheres; i++) {
    let azimuth = TWO_PI * (i / numSmallSpheres);  // Horizontal angle
    let inclination = random(0, PI);               // Vertical angle
    let distance = random(sphereMin, sphereMax);               // Distance from the big sphere
    let azimuthSpeed = random(0.01, 0.03);         // Speed of horizontal orbit
    let inclinationSpeed = random(0.005, 0.02);    // Speed of vertical orbit

    // Each sphere has a trail that stores previous positions
    let trail = [];

    smallSpheres.push({
      azimuth,
      inclination,
      distance,
      azimuthSpeed,
      inclinationSpeed,
      trail
    });
  }
}

let centerColor = 0;
let centerAdd = 0.01;

function draw() {
  clear();
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    background("#141414");
  } else {
    background("white");
  }
  

  // Draw the orbit trails and the small spheres
  strokeCap(ROUND);
  for (let i = 0; i < smallSpheres.length; i++) {
    let s = smallSpheres[i];

    // Spherical coordinates to Cartesian
    let x = s.distance * sin(s.inclination) * cos(s.azimuth);
    let y = s.distance * cos(s.inclination);       // Height component
    let z = s.distance * sin(s.inclination) * sin(s.azimuth);

    // Add the current position to the trail
    s.trail.push(createVector(x, y, z));

    // Limit the length of the trail
    if (s.trail.length > trailLength) {
      s.trail.splice(0, 1);
    }

    // Draw the orbit trail (line connecting previous positions)
    noFill();
    for (let j = 0; j < s.trail.length; j++) {
      if (j > 0) {
        let pos1 = s.trail[j-1];
        let pos2 = s.trail[j];

        // if (i === 0 && frameCount === 200) {
        //   console.log(pos1.z);
        // }

        let tc = lerpColor(color2, color1, abs(pos1.z)/sphereMax);
        // tc.setAlpha(255*j/s.trail.length);
        stroke(tc);
        strokeWeight(2*20*abs(pos1.z)/sphereMax * j/s.trail.length);

        line(pos1.x, pos1.y, pos1.z, pos2.x, pos2.y, pos2.z);
      }
    }

    // Draw the small sphere at its current position
    push();
    translate(x, y, z);
    color2.setAlpha(255);
    let tc = lerpColor(color2, color1, abs(z)/sphereMax);
    fill(tc);
    noStroke();
    sphere(2*10*abs(z)/sphereMax); // Small sphere size
    pop();

    // Update angles for orbiting motion
    s.azimuth += s.azimuthSpeed;           // Orbit around Y-axis (azimuth)
    s.inclination += s.inclinationSpeed;   // Orbit up/down (inclination)
  }

}
