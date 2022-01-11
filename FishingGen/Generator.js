////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Functions that create random functions/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

function RandSeq(min, max){             //function that creates a random sequence that python can do on its own :|
    seqArray = Range(min,max);
    randSeq = [];
    for(let i=0; i<max-min+1; i++){
        x = Math.floor((Math.random() * seqArray.length) );
        randSeq.push(seqArray[x]);
        seqArray.splice(x,1);
        
    }
    return randSeq;
}

function Range(min, max){           //function that creates a range for the RandSeq function
    rangeArray = [];
    for(let i=min; i<max+1; i++){
        rangeArray.push(i);
    }
    return rangeArray;
}


function Append(value, myArray){
    myArray.push(value)
}

function shuffle(array) {                           //function to shuffle arrays
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////Code copied from python//////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function randomArrays(){                //creates arrays of random numbers
    Rand1 = RandSeq(1, 12);
    Rand2 = RandSeq(13, 24);
    Rand3 = RandSeq(25, 36);
    Rand4 = RandSeq(37, 54);
}

function createZones(){                 //creates empty arrays for the zones and appends the random values from randomArrays to the zones
    zoneA = [];
    zoneB = [];
    zoneC = [];
    zoneD = [];
    zoneE = [];
    zoneF = [];

    ///////////////////////////////////////////
zoneA.push(Rand1[0]);
zoneA.push(Rand1[1])
zoneA.push(Rand2[0])
zoneA.push(Rand2[1])
zoneA.push(Rand3[0])
zoneA.push(Rand3[1])

zoneA.push(Rand4[0])
zoneA.push(Rand4[1])
zoneA.push(Rand4[2])
///////////////////////////////////////////
zoneB.push(Rand1[2])
zoneB.push(Rand1[3])
zoneB.push(Rand2[2])
zoneB.push(Rand2[3])
zoneB.push(Rand3[2])
zoneB.push(Rand3[3])

zoneB.push(Rand4[3])
zoneB.push(Rand4[4])
zoneB.push(Rand4[5])
///////////////////////////////////////////
zoneC.push(Rand1[4])
zoneC.push(Rand1[5])
zoneC.push(Rand2[4])
zoneC.push(Rand2[5])
zoneC.push(Rand3[4])
zoneC.push(Rand3[5])

zoneC.push(Rand4[6])
zoneC.push(Rand4[7])
zoneC.push(Rand4[8])
///////////////////////////////////////////
zoneD.push(Rand1[6])
zoneD.push(Rand1[7])
zoneD.push(Rand2[6])
zoneD.push(Rand2[7])
zoneD.push(Rand3[6])
zoneD.push(Rand3[7])

zoneD.push(Rand4[9])
zoneD.push(Rand4[10])
zoneD.push(Rand4[11])
///////////////////////////////////////////
zoneE.push(Rand1[8])
zoneE.push(Rand1[9])
zoneE.push(Rand2[8])
zoneE.push(Rand2[9])
zoneE.push(Rand3[8])
zoneE.push(Rand3[9])

zoneE.push(Rand4[12])
zoneE.push(Rand4[13])
zoneE.push(Rand4[14])

zoneF.push(Rand1[10])
zoneF.push(Rand1[11])
zoneF.push(Rand2[10])
zoneF.push(Rand2[11])
zoneF.push(Rand3[10])
zoneF.push(Rand3[11])

zoneF.push(Rand4[15])
zoneF.push(Rand4[16])
zoneF.push(Rand4[17])
}



function shuffleZones(){                    //shuffles the numbers, that have been appended to the zones, inside of the zone arrays
    shuffle(zoneA);
    shuffle(zoneB);
    shuffle(zoneC);
    shuffle(zoneD);
    shuffle(zoneE);
    shuffle(zoneF);
}


// console.log(zoneA);
// console.log(zoneB);
// console.log(zoneC);
// console.log(zoneD);
// console.log(zoneE);
// console.log(zoneF);

// zones = [zoneA,zoneB,zoneC,zoneD,zoneE,zoneF];
// rando = [Rand1, Rand2, Rand3];

// x=0;
// for (i in zones){
//     for (j in rando){
//         i.push(j[x]);
//         i.push(j[x+1]);
//     x+=2
//     }
// }

// y=0;
// for (k in zones){
//    k.push(Rand4[y]) ;
//    k.push(Rand4[y+1]);
//    k.push(Rand4[y+2]);
//    y+=3
// }


// zone1 = [];
// zone2 = [];
// zone3 = [];
// zone4 = [];
// zone5 = [];
// zone6 = [];
// zoneNum = [zone1, zone2, zone3, zone4, zone5, zone6];

// RandSeqArray =  RandSeq(0, 8);

// for (i in RandSeq){
//     zone1.push(zoneA[i]);
//     zone2.push(zoneB[i]);
//     zone3.push(zoneC[i]);
//     zone4.push(zoneD[i]);
//     zone5.push(zoneE[i]);
//     zone6.push(zoneF[i]);
// }





function displayResults(){ 

    randomArrays();
    createZones();
    shuffleZones();

    // document.getElementById('ZoneA').value=zoneA;
    // document.getElementById('ZoneB').value=zoneB;
    // document.getElementById('ZoneC').value=zoneC;
    // document.getElementById('ZoneD').value=zoneD;
    // document.getElementById('ZoneE').value=zoneE;
    // document.getElementById('ZoneF').value=zoneF;

    document.getElementById('A1').value=zoneA[0];
    document.getElementById('A2').value=zoneA[1];
    document.getElementById('A3').value=zoneA[2];
    document.getElementById('A4').value=zoneA[3];
    document.getElementById('A5').value=zoneA[4];
    document.getElementById('A6').value=zoneA[5];
    document.getElementById('A7').value=zoneA[6];
    document.getElementById('A8').value=zoneA[7];
    document.getElementById('A9').value=zoneA[8];

    
    document.getElementById('B1').value=zoneB[0];
    document.getElementById('B2').value=zoneB[1];
    document.getElementById('B3').value=zoneB[2];
    document.getElementById('B4').value=zoneB[3];
    document.getElementById('B5').value=zoneB[4];
    document.getElementById('B6').value=zoneB[5];
    document.getElementById('B7').value=zoneB[6];
    document.getElementById('B8').value=zoneB[7];
    document.getElementById('B9').value=zoneB[8];

    
    document.getElementById('C1').value=zoneC[0];
    document.getElementById('C2').value=zoneC[1];
    document.getElementById('C3').value=zoneC[2];
    document.getElementById('C4').value=zoneC[3];
    document.getElementById('C5').value=zoneC[4];
    document.getElementById('C6').value=zoneC[5];
    document.getElementById('C7').value=zoneC[6];
    document.getElementById('C8').value=zoneC[7];
    document.getElementById('C9').value=zoneC[8];

    
    document.getElementById('D1').value=zoneD[0];
    document.getElementById('D2').value=zoneD[1];
    document.getElementById('D3').value=zoneD[2];
    document.getElementById('D4').value=zoneD[3];
    document.getElementById('D5').value=zoneD[4];
    document.getElementById('D6').value=zoneD[5];
    document.getElementById('D7').value=zoneD[6];
    document.getElementById('D8').value=zoneD[7];
    document.getElementById('D9').value=zoneD[8];

    document.getElementById('E1').value=zoneE[0];
    document.getElementById('E2').value=zoneE[1];
    document.getElementById('E3').value=zoneE[2];
    document.getElementById('E4').value=zoneE[3];
    document.getElementById('E5').value=zoneE[4];
    document.getElementById('E6').value=zoneE[5];
    document.getElementById('E7').value=zoneE[6];
    document.getElementById('E8').value=zoneE[7];
    document.getElementById('E9').value=zoneE[8];

    document.getElementById('F1').value=zoneF[0];
    document.getElementById('F2').value=zoneF[1];
    document.getElementById('F3').value=zoneF[2];
    document.getElementById('F4').value=zoneF[3];
    document.getElementById('F5').value=zoneF[4];
    document.getElementById('F6').value=zoneF[5];
    document.getElementById('F7').value=zoneF[6];
    document.getElementById('F8').value=zoneF[7];
    document.getElementById('F9').value=zoneF[8];


}

function clearResults(){
    // document.getElementById('ZoneA').value=null;
    // document.getElementById('ZoneB').value=null;
    // document.getElementById('ZoneC').value=null;
    // document.getElementById('ZoneD').value=null;
    // document.getElementById('ZoneE').value=null;
    // document.getElementById('ZoneF').value=null;

    document.getElementById('A1').value=null;
    document.getElementById('A2').value=null;
    document.getElementById('A3').value=null;
    document.getElementById('A4').value=null;
    document.getElementById('A5').value=null;
    document.getElementById('A6').value=null;
    document.getElementById('A7').value=null;
    document.getElementById('A8').value=null;
    document.getElementById('A9').value=null;

    
    document.getElementById('B1').value=null;
    document.getElementById('B2').value=null;
    document.getElementById('B3').value=null;
    document.getElementById('B4').value=null;
    document.getElementById('B5').value=null;
    document.getElementById('B6').value=null;
    document.getElementById('B7').value=null;
    document.getElementById('B8').value=null;
    document.getElementById('B9').value=null;

    
    document.getElementById('C1').value=null;
    document.getElementById('C2').value=null;
    document.getElementById('C3').value=null;
    document.getElementById('C4').value=null;
    document.getElementById('C5').value=null;
    document.getElementById('C6').value=null;
    document.getElementById('C7').value=null;
    document.getElementById('C8').value=null;
    document.getElementById('C9').value=null;

    
    document.getElementById('D1').value=null;
    document.getElementById('D2').value=null;
    document.getElementById('D3').value=null;
    document.getElementById('D4').value=null;
    document.getElementById('D5').value=null;
    document.getElementById('D6').value=null;
    document.getElementById('D7').value=null;
    document.getElementById('D8').value=null;
    document.getElementById('D9').value=null;

    document.getElementById('E1').value=null;
    document.getElementById('E2').value=null;
    document.getElementById('E3').value=null;
    document.getElementById('E4').value=null;
    document.getElementById('E5').value=null;
    document.getElementById('E6').value=null;
    document.getElementById('E7').value=null;
    document.getElementById('E8').value=null;
    document.getElementById('E9').value=null;

    document.getElementById('F1').value=null;
    document.getElementById('F2').value=null;
    document.getElementById('F3').value=null;
    document.getElementById('F4').value=null;
    document.getElementById('F5').value=null;
    document.getElementById('F6').value=null;
    document.getElementById('F7').value=null;
    document.getElementById('F8').value=null;
    document.getElementById('F9').value=null;
}

