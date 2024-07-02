const width = 125;
const height = 125;

const noseconeWidth = 50;
const noseconeHeight = 50;
setDocDimensions(width, height);

const turtle = new bt.Turtle();
turtle.jump([2*width/6,4*height/6]);
turtle.goTo([3*width/6, 5*height/6]);
turtle.goTo([4*width/6, 4*height/6]);
turtle.goTo([4*width/6, 4*height/6]);
turtle.goTo([2*width/6, 4*height/6]);

turtle.goTo([2*width/6,height/6]);
turtle.goTo([4*width/6, height/6]);
turtle.goTo([4*width/6, 4*width/6]);

turtle.jump([3*width/6, 3*height/6]);
turtle.arc(360,5);
turtle.jump([3*width/6, 3*height/6-1]);
turtle.arc(360,6);
const path = turtle.path;
turtle.jump([2*width/6,4*height/6]);
for(let i = turtle.position[0]; i < 3*width/6; i++) {
  turtle.goTo([i, height/6]);
}
drawLines(path);