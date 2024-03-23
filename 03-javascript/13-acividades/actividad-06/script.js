let minimalMatchPointsToWin = 20;
let minimalMatchPointsToDraw = 30;

function matchResults(){

    let points = [Math.round(Math.random()*51), Math.round(Math.random()*51), Math.round(Math.random()*51)];
    return points;
    }


function compareTeamAverages(){

    let patsMatches = matchResults();
    let broncosMatches = matchResults();

    let patsTotal = 0;
    let broncosTotal = 0;

    for (let i = 0; i < patsMatches.length; i++){
        patsTotal += patsMatches[i];
        broncosTotal+= broncosMatches[i];
    }

    let averagePats = Math.round(patsTotal / patsMatches.length);
    let averageBroncos = Math.round(broncosTotal / broncosMatches.length);

    if(averagePats > averageBroncos && averagePats >= minimalMatchPointsToWin){
        console.log(`${averagePats} - ${averageBroncos} Los Pats ganan`)
    } else if (averagePats === averageBroncos && averagePats >= minimalMatchPointsToDraw){
        console.log(`En promedio quedaron ${averagePats} - ${averageBroncos} Hay un empate`)
    } else if (averagePats < averageBroncos && averageBroncos >= minimalMatchPointsToWin){
        console.log(`En promedio quedaron ${averagePats} - ${averageBroncos} Los Broncos ganan`)
    } else {
        
        console.log(`En promedio quedaron ${averagePats} - ${averageBroncos} No anotaron los suficientes puntos para promediar, ambos equipos pierden`);
    }
} 

compareTeamAverages()


