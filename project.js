const width = 150;
const height = 130;
setDocDimensions(width, height);

const rocketWidth = 20;

const noseconeHeight = 30;
const payloadHeight = 40;
const boosterHeight = 40;
const engineHeight = 10;
const flameHeight = 10;
const finWidth = 10;
const finBottomHeight = 10;
const finTopHeight = 10;
const rocketHeight = noseconeHeight + payloadHeight + boosterHeight + engineHeight + flameHeight;
const noseconeCurveCoefficient = 20;
const payloadCurveCoefficient = 20;

const leftMargin = (width-rocketWidth)/2;
const rightMargin = (width-rocketWidth)/2+rocketWidth;

const bottomMargin = (height-rocketHeight)/2;
const topMargin = (height-rocketHeight)/2+rocketHeight;

const heightWithoutNosecone = bottomMargin+payloadHeight+boosterHeight+engineHeight+flameHeight;
const leftNoseCone = [bt.nurbs([[leftMargin, heightWithoutNosecone],[leftMargin+rocketWidth/4, heightWithoutNosecone + 5*noseconeHeight/6],[leftMargin+rocketWidth/2, heightWithoutNosecone + noseconeHeight]],{steps: 100, degree: 2})];
const rightNoseCone = [bt.nurbs([[leftMargin+rocketWidth, heightWithoutNosecone],[leftMargin+3*rocketWidth/4, heightWithoutNosecone + 5*noseconeHeight/6],[leftMargin+rocketWidth/2, heightWithoutNosecone + noseconeHeight]],{steps: 100, degree: 2})];

const noseconeCurve = [bt.nurbs([[leftMargin, heightWithoutNosecone],[leftMargin+rocketWidth/2, heightWithoutNosecone + noseconeHeight/noseconeCurveCoefficient],[leftMargin+rocketWidth, heightWithoutNosecone]],{steps: 100, degree: 2})];
const payload = [[leftMargin, heightWithoutNosecone], [leftMargin, heightWithoutNosecone-payloadHeight], [leftMargin + rocketWidth, heightWithoutNosecone - payloadHeight], [leftMargin + rocketWidth, heightWithoutNosecone]];

const heightWithoutBooster = bottomMargin+engineHeight+flameHeight;
const payloadCurve = [bt.nurbs([[leftMargin, heightWithoutBooster + boosterHeight],[leftMargin+rocketWidth/2, heightWithoutBooster + boosterHeight + payloadHeight/payloadCurveCoefficient],[leftMargin+rocketWidth, heightWithoutBooster + boosterHeight]],{steps: 100, degree: 2})];
const booster = [[leftMargin, heightWithoutBooster+boosterHeight], [leftMargin, heightWithoutBooster], [leftMargin + rocketWidth, heightWithoutBooster], [leftMargin, heightWithoutBooster + boosterHeight]];

drawLines(leftNoseCone);
drawLines(rightNoseCone);
drawLines(noseconeCurve);
drawLines(payloadCurve);
drawLines([payload, booster]);
