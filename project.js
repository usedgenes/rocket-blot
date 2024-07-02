const width = 150;
const height = 130;

const rocketWidth = 20;

const noseconeHeight = 30;
const payloadHeight = 40;
const boosterHeight = 40;
const engineHeight = 10;
const topEngineWidth = 5;
const bottomEngineWidth = 10;
const flameHeight = 10;
const flameFirstWidth = 6;
const flameSecondWidth = 10;
const flameThirdWidth = 1;
const finWidth = 10;
const finBottomHeight = 10;
const finTopHeight = 15;
const finDepth = 2;
const finOffset = 3;
const noseconeCurveCoefficient = 20;
const payloadCurveCoefficient = 20;
const innerWindowRadius = 4;
const outerWindowRadius = 6;

const rotateDegrees = 0;
const rotatePoint = [50,30]

setDocDimensions(width, height);
const rocketHeight = noseconeHeight + payloadHeight + boosterHeight + engineHeight + flameHeight;
const leftMargin = (width-rocketWidth)/2;
const rightMargin = (width-rocketWidth)/2+rocketWidth;
const bottomMargin = (height-rocketHeight)/2;
const topMargin = (height-rocketHeight)/2+rocketHeight;

const heightWithoutNosecone = bottomMargin+payloadHeight+boosterHeight+engineHeight+flameHeight;
const leftNoseCone = [bt.nurbs([[leftMargin, heightWithoutNosecone],[leftMargin+rocketWidth/4, heightWithoutNosecone + 5*noseconeHeight/6],[leftMargin+rocketWidth/2, heightWithoutNosecone + noseconeHeight]],{steps: 100, degree: 2})];
const rightNoseCone = [bt.nurbs([[leftMargin+rocketWidth, heightWithoutNosecone],[leftMargin+3*rocketWidth/4, heightWithoutNosecone + 5*noseconeHeight/6],[leftMargin+rocketWidth/2, heightWithoutNosecone + noseconeHeight]],{steps: 100, degree: 2})];

const noseconeCurve = [bt.nurbs([[leftMargin, heightWithoutNosecone],[leftMargin+rocketWidth/2, heightWithoutNosecone + noseconeHeight/noseconeCurveCoefficient],[leftMargin+rocketWidth, heightWithoutNosecone]],{steps: 100, degree: 2})];
const leftPayload = [[leftMargin, heightWithoutNosecone], [leftMargin, heightWithoutNosecone-payloadHeight]]; 
const rightPayload = [[leftMargin + rocketWidth, heightWithoutNosecone - payloadHeight], [leftMargin + rocketWidth, heightWithoutNosecone]];

const innerWindow = [bt.nurbs([[leftMargin + rocketWidth/2, heightWithoutNosecone - payloadHeight/2+innerWindowRadius],[leftMargin+rocketWidth/2+innerWindowRadius, heightWithoutNosecone - payloadHeight/2],[leftMargin+rocketWidth/2, heightWithoutNosecone - payloadHeight/2-innerWindowRadius],[leftMargin+rocketWidth/2-innerWindowRadius, heightWithoutNosecone-payloadHeight/2],[leftMargin + rocketWidth/2, heightWithoutNosecone - payloadHeight/2+innerWindowRadius]],{steps: 100, degree: 3})];
const outerWindow = [bt.nurbs([[leftMargin + rocketWidth/2, heightWithoutNosecone - payloadHeight/2+outerWindowRadius],[leftMargin+rocketWidth/2+outerWindowRadius, heightWithoutNosecone - payloadHeight/2],[leftMargin+rocketWidth/2, heightWithoutNosecone - payloadHeight/2-outerWindowRadius],[leftMargin+rocketWidth/2-outerWindowRadius, heightWithoutNosecone-payloadHeight/2],[leftMargin + rocketWidth/2, heightWithoutNosecone - payloadHeight/2+outerWindowRadius]],{steps: 100, degree: 3})];

const heightWithoutBooster = bottomMargin+engineHeight+flameHeight;
const payloadCurve = [bt.nurbs([[leftMargin, heightWithoutBooster + boosterHeight],[leftMargin+rocketWidth/2, heightWithoutBooster + boosterHeight + payloadHeight/payloadCurveCoefficient],[leftMargin+rocketWidth, heightWithoutBooster + boosterHeight]],{steps: 100, degree: 2})];
const booster = [[leftMargin, heightWithoutBooster+boosterHeight], [leftMargin, heightWithoutBooster], [leftMargin + rocketWidth, heightWithoutBooster], [leftMargin + rocketWidth, heightWithoutBooster + boosterHeight]];

const leftFin = [[leftMargin, heightWithoutBooster+finOffset], [leftMargin-finWidth, heightWithoutBooster+finOffset], [leftMargin-finWidth, heightWithoutBooster+finBottomHeight+finOffset], [leftMargin, heightWithoutBooster+finBottomHeight+finTopHeight+finOffset]];
const rightFin = [[rightMargin, heightWithoutBooster+finOffset], [rightMargin+finWidth, heightWithoutBooster+finOffset], [rightMargin+finWidth, heightWithoutBooster+finBottomHeight+finOffset], [rightMargin, heightWithoutBooster+finBottomHeight+finTopHeight+finOffset]];
const middleFinBottomPart = [[leftMargin+rocketWidth/2-finDepth/2, heightWithoutBooster+finOffset], [leftMargin+rocketWidth/2-finDepth/2, heightWithoutBooster+finOffset+finBottomHeight], [leftMargin+rocketWidth/2+finDepth/2, heightWithoutBooster+finBottomHeight+finOffset], [leftMargin+rocketWidth/2+finDepth/2, heightWithoutBooster+finOffset],[leftMargin+rocketWidth/2-finDepth/2, heightWithoutBooster+finOffset]];
const middleFinTopPart = [[leftMargin+rocketWidth/2-finDepth/2, heightWithoutBooster+finOffset+finBottomHeight], [leftMargin+rocketWidth/2-finDepth/2, heightWithoutBooster+finOffset+finBottomHeight+finTopHeight], [leftMargin+rocketWidth/2+finDepth/2, heightWithoutBooster+finOffset+finBottomHeight+finTopHeight],[leftMargin+rocketWidth/2+finDepth/2, heightWithoutBooster+finOffset+finBottomHeight]];

const engine = [[leftMargin+(rocketWidth-topEngineWidth)/2, heightWithoutBooster], [leftMargin+(rocketWidth-bottomEngineWidth)/2, heightWithoutBooster-engineHeight], [leftMargin+(rocketWidth-bottomEngineWidth)/2+bottomEngineWidth, heightWithoutBooster-engineHeight],[leftMargin+(rocketWidth-topEngineWidth)/2+topEngineWidth, heightWithoutBooster]];

const heightWithoutEngine = bottomMargin + flameHeight;
const center = leftMargin + rocketWidth/2
const flameLeft1 = [bt.nurbs([[center - flameFirstWidth/2, heightWithoutEngine],[center - flameFirstWidth/2 - flameSecondWidth/5, heightWithoutEngine - flameHeight/6],[center - flameSecondWidth/2, heightWithoutEngine - flameHeight/3]],{steps: 100, degree: 2})];
const flameLeft2 = [bt.nurbs([[center - flameSecondWidth/2, heightWithoutEngine - flameHeight/3], [center - flameSecondWidth/2 + flameFirstWidth/5, heightWithoutEngine - flameHeight/3 + flameHeight/6], [center - flameSecondWidth/2 + 2*flameFirstWidth/5, heightWithoutEngine - flameHeight/3 + flameHeight/5]],{steps: 100, degree: 2})];
// const flameLeft3 = [bt.nurbs([[center - flameFirstWidth/2, heightWithoutEngine],[center - flameFirstWidth/2 - flameSecondWidth/3, heightWithoutEngine - flameHeight/6],[center - flameSecondWidth/2, heightWithoutEngine - flameHeight/3]],{steps: 100, degree: 2})];
// const flameLeft4 = [bt.nurbs([[center - flameFirstWidth/2, heightWithoutEngine],[center - flameFirstWidth/2 - flameSecondWidth/3, heightWithoutEngine - flameHeight/6],[center - flameSecondWidth/2, heightWithoutEngine - flameHeight/3]],{steps: 100, degree: 2})];

bt.rotate(leftNoseCone, rotateDegrees, rotatePoint);
bt.rotate(rightNoseCone, rotateDegrees, rotatePoint);
bt.rotate(noseconeCurve, rotateDegrees, rotatePoint);
bt.rotate(payloadCurve, rotateDegrees, rotatePoint);
bt.rotate(innerWindow, rotateDegrees, rotatePoint);
bt.rotate(outerWindow, rotateDegrees, rotatePoint);
bt.rotate([leftPayload, rightPayload, booster, leftFin, rightFin, middleFinBottomPart, middleFinTopPart, engine], rotateDegrees, rotatePoint);

drawLines(leftNoseCone);
drawLines(rightNoseCone);
drawLines(noseconeCurve);
drawLines(payloadCurve);
drawLines(innerWindow);
drawLines(outerWindow);
drawLines(flameLeft1);
drawLines(flameLeft2);
// drawLines(flameLeft3);
// drawLines(flameLeft4);

drawLines([leftPayload, rightPayload, booster, leftFin, rightFin, middleFinBottomPart, middleFinTopPart, engine]);
