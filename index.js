function distanceFromHqInBlocks(block){
    if (block >= 42){
        return block - 42;  
    }
   else {
       return 42 - block
   }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block, block2){
    return block <= block2?(block2 - block)*264 : (block - block2)*264;
}
function calculatesFarePrice(start, destination){
    let result = (distanceTravelledInFeet(start, destination) - 400)*0.02;

    if (result >= 32 && result <= 41){
        return 25;
    }
    else if (result >= 42){
        return "cannot travel that far";
    }
    else if (result <= 0){
        return 0;
    }
    else {
        return result;
    }
}