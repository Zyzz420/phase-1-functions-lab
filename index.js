
function distanceFromHqInBlocks(distance) {
    let numberOfBlocks = Math.abs(distance - 42);
    return numberOfBlocks;
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

 function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
   
 }
 function calculatesFarePrice(start, destination) {
    let feet = Math.abs(destination - start) * 264;
    if(feet <= 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return ((feet - 400) * 2)/100;
    }else if (feet > 2000 && feet < 2500) {
        return 25;
    }else if (feet > 2500) {
        return "cannot travel that far";
    }
 }

