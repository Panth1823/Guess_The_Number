const SPEEDLIMIT = 70;
const KMPERPOINT = 5;

function checkSpeedLimit(curSpeed) {
  if (curSpeed <= SPEEDLIMIT) {
    return ('Good Safe Driving!');
  } else {
    let penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
    if (penaltyPoint < 10) {
      return ('Speed Limit Crossed by Penalty Point: ' + penaltyPoint);
    } else {
      return ('License Suspended!');
    }
  }
}

let checkPoin1 = checkSpeedLimit(40);
console.log(checkPoin1);

let checkPoin2 = checkSpeedLimit(70);
console.log(checkPoin2);

let checkPoin3 = checkSpeedLimit(75);
console.log(checkPoin3);

let checkPoin4 = checkSpeedLimit(99);
console.log(checkPoin4);

let checkPoin5 = checkSpeedLimit(120);
console.log(checkPoin5);