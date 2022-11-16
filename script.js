// */camel Notation: oneTwoThreeFour */ for factor function
// */pascal Notation: OneTwoThreeFour */ for constructor function
const radius = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  draw: function draw() {
    console.log('Draw circle');
  }
}
radius.draw()
// factory function example used for stop multiple time repeat of the object.
function createCircle(radius) {
  return radius = {
    //radius: radius, #in the modern javascript key and value are same then we can only pass the key that is equlient.
    radius,
    draw() {
      console.log('Draw circle new');
    }
  }
}

const circle_1 = createCircle(1);
console.log(circle_1);
const circle_2 = createCircle(2);
console.log(circle_2);


// #Constructor function /*the constructor function job is to construct or create an new object*/
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('constructor Draw circle');
  }
}
const another = new Circle(25);
console.log(another.draw);
//# call method
Circle.call({}, 1)
//# apply method
Circle.apply({}, [1])
//# bind method
const box = {
  name: 'boxObject',
  ages: 1,
}
box.color = "Yellow";//add new property of object
box.size = "2x";//add new property of object
box.draw = function() { console.log('Box draw xxxx') }
//delete
delete box.size;
console.log(box.draw())

// constructor property

for (let key in box) {
  console.log(key, box[key])
}
console.log('object key')
for (let key of Object.keys(box))
  console.log(key)

for (let entry of Object.entries(box))
  console.log(entry)
if ('color' in box) console.log('say: yes')
//# copy an object in to another object
const circleNew = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}
// const anotherOne = {};
// for (let key in circleNew)
//   anotherOne[key] = circleNew[key];
console.log('line-change')
//const anotherOne = Object.assign = ({}, circleNew) /*Morden way*/
/*another simple way*/
const anotherOne = { ...circleNew, coloe: 'yellow', }
console.log(anotherOne)

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}
let firstEpisode = new Episode('Dark Side', 45, true);
let secondEpisode = new Episode('The Mystery', 15, false);
let thirdEpisode = new Episode('The Unexpected Climax', 25, true);
//
document.querySelector('#firstEpisodeInfo').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration}
Already watxhed: ${firstEpisode.hasBeenWatched}: `;
document.querySelector('#secondEpisodeInfo').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration}
Already watxhed: ${firstEpisode.hasBeenWatched}: `;
document.querySelector('#thirdEpisodeInfo').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration}
Already watxhed: ${firstEpisode.hasBeenWatched}: `;