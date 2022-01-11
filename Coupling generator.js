//All variables
var nearestValue ;
var afterNearest;

var coupling;
var color;
var torqueVal = torqueIt();



//FUNCTION CALCULATING THE TORQUE
function torqueIt(){
    var kilowatt = document.getElementById("kilowatt").value;               //gets the input for kilowatt
    var rotationSpeed = document.getElementById("rotationSpeed").value;     //gets the input for RPM
    var serviceFactor = document.getElementById("factors").value;           //gets the input for service factor with drop down list
    document.getElementById('serviceFactor').value = serviceFactor;         //show the calue from input chosen
    var torque = ((kilowatt *  9550)/rotationSpeed);                        //calculates the torque value
    document.getElementById('torqueResult').value=torque.toFixed(2) + " (Nm)";        //returns the torque to the table
    return torque;
    
}

//LIST WITH ALL VALUES TO ITTERATE THROUGH AND GET WANTED VALUE:
lst = [97,128, 164, 187, 215, 255, 271, 314, 355, 428,                      
    471, 517, 618, 679, 706, 868, 889, 900,
    1089, 1227, 1296, 1392, 1427, 1641, 1768, 2081,
    2150, 2398, 2551, 2837, 3134, 3343, 3536, 3787,
    4274, 4873, 4963, 5326, 5860, 6645, 6721, 6978,
    7234, 8443, 8806, 9071, 9864, 10172, 10811, 11063,
    12835, 13359, 13870, 14165, 16126, 17502, 18434,
    20135, 20684, 21989, 24153, 28155, 28166, 29107,
    35206, 35584, 38136, 38177, 45784, 48006, 50019,
    52525, 55588, 58182, 68818, 72908, 75800, 79879,
    86627, 99418, 100312, 104658, 136282, 136785,
    152552, 178422, 208020, 234914, 366843]

//ALL THE COUPLINGS WITH RELEVANT NUMBERS:
BR_95 =[97,128,187,255,517]                                     
BR_115 =[164,215,314,428,868]
BR_135 = [271,355,517,706,1392]
BR_155 = [471,618,900,1227,2398]
BR_179 = [679,889,1296,1768,3536]
BR_206 = [1089,1427,2081,2837,5860]
BR_236 = [1641,2150,3134,4274,9071]
BR_276 = [2551,3343,4873,6645,13359]
BR_306 = [3787,4963,7234,9864,20135]
BR_336 = [5326,6978,10172,13870,28166]
BR_366 = [6721,8806,12835,17502,35584]
BR_406 = [8443,11063,16126,21989,45784]
BR_446 = [10811,14165,20684,28155,58182]
BR_506 = [18434,24153,35206,48006,86627]
BR_556 = [29107,38136,55588,75800,136282]
BR_636 = [38177,50019,72908,99418,178422]
BR_716 = [52525,68818,100312,136785,234914]
BR_826 = [79879,104658,152552,208020,366843]


//ALL THE COLORS  WITH RELEVANT NUMBERS:
black =[97,164,271,471,679,1089,1641,                            
    2551,3787,5326,6721,8443,
    10811,18434,29107,38177,52525,79879]

yellow = [128,215,355,618,889,1427,2150,
      3343,4963,6978,8806,11063,14165,
      24153,38136,50019,68818,104658]

blue = [187,314,517,900,1296,2081,
    3134,4873,7234,10172,12835,
    16126,20684,35206,55588,72908,
    100312,152552]

green = [255,428,706,1227,1768,2837,4274,
     6645,9864,13870,17502,21989,28155,
     48006,75800,99418,136785,208020]

red = [517,868,1392,2398,3536,5860,9071,13359,
   20135,28166,35584,45784,58182,86627,
   136282,178422,234914,366843]


   var nearestValue;
   var afterNearest;

//FUNCTION THAT CALSULATES THE RESULTS
function results(){
    var torque = torqueIt();
    var serviceFactor = document.getElementById("serviceFactor").value;     //gets serviceFactor value from the table
    var CouplingRating = Math.round(torque * serviceFactor);                //calculate the coupling rating
    document.getElementById('coupRat').value=CouplingRating + " (Nm)";                //return the Coupling Rating to the table
    var x = CouplingRating;
    values = [];

    //FOR LOOP MATCHES EACH ELEMENT IN LST TO THE COUPLING RATING VALUE TO FIND THE NEXT NEAREST VALUE
    for(elem=0;elem<lst.length;elem++){
       
        if (x>lst[elem]){                    //IF THE ELEMENT IS SMALLER THAN COUPLING RATING 
            continue;                        //IT CONTINUES UNTIL A LARGER VALUE IS FOUND
        }else if(x<=lst[elem]){              //THE LARGER VALUE IS APPENDED TO THE EMPTY LIST
            values[0] = (lst[elem]),
            values[1] = (lst[elem+1]);             //THE VALUE AFTER IS ALSO APPENDED TO THE LIST TO GIVE 2 OPTIONSaw
            break;
        }
    }
    
    values[2] = values[0]/torque;
    values[3] = values[1]/torque;
    return values;

    
}



function couplingSelection(nearValue){
    
    var coupling;

   for (number in BR_95){
       if (BR_95[number] === nearValue){
           coupling = "BR 95";
       }
   }
       
   for (number in BR_115){
       if (BR_115[number] === nearValue){
           coupling = "BR 115";
       }
   }

   for (number in BR_135){
       if (BR_135[number] === nearValue){
           coupling = "BR 135";
       }
   }

   for (number in BR_155){
       if (BR_155[number] === nearValue){
           coupling = "BR 155";
       }
   }

   for (number in BR_179){
       if (BR_179[number] === nearValue){
           coupling = "BR 179";
       }
   }

   for (number in BR_206){
       if (BR_206[number] === nearValue){
           coupling = "BR 206";
       }
   }

   for (number in BR_236){
       if (BR_236[number] === nearValue){
           coupling = "BR 236";
       }
   }

   for (number in BR_276){
       if (BR_276[number] === nearValue){
           coupling = "BR 276";
       }
   }

   for (number in BR_306){
       if (BR_306[number] === nearValue){
           coupling = "BR 306";
       }
   }

   for (number in BR_336){
       if (BR_336[number] === nearValue){
           coupling = "BR 336";
       }
   }

   for (number in BR_366){
    if (BR_366[number] === nearValue){
        coupling = "BR 366";
    }
}

   for (number in BR_406){
       if (BR_406[number] === nearValue){
           coupling = "BR 406";
       }
   }

   for (number in BR_446){
       if (BR_446[number] === nearValue){
           coupling = "BR 446";
       }
   }

   for (number in BR_506){
       if (BR_506[number] === nearValue){
           coupling = "BR 506";
       }
   }

   for (number in BR_556){
       if (BR_556[number] === nearValue){
           coupling = "BR 556";
       }
   }

   for (number in BR_636){
       if (BR_636[number] === nearValue){
           coupling = "BR 636";
       }
   }

   for (number in BR_716){
       if (BR_716[number] === nearValue){
           coupling = "BR 716";
       }
   }

   for (number in BR_826){
    if (BR_826[number] === nearValue){
        coupling = "BR 826";
        }
    }

   
   return coupling;

}

function colorSelection(nearValue){
   var color;

   for (num in black){
       if (black[num] === nearValue){
           color = "BLACK";
       }
   }

   for (num in yellow){
       if (yellow[num] === nearValue){
           color = "YELLOW";
       }
   }

   for (num in blue){
       if (blue[num] === nearValue){
           color = "BLUE";
       }
   }

   for (num in green){
       if (green[num] === nearValue){
           color = "GREEN";
       }
   }

   for (num in red){
       if (red[num] === nearValue){
           color = "RED";
       }
   }

   return color;
}




function FalkGear(torqueVal){
    var falkGear;
    var torqueVal = torqueIt();

    if(torqueVal>=0 && torqueVal < 1140){
        falkGear = "1010G";
    }
    else if(torqueVal>=1140 && torqueVal < 2350){
        falkGear = "1015G";
    }
    else if(torqueVal>=2350 && torqueVal < 4270){
        falkGear = "1020G";
    }
    else if(torqueVal>=4270 && torqueVal < 7470){
        falkGear = "1025G";
    }
    else if(torqueVal>=7470 && torqueVal < 12100){
        falkGear = "1030G";
    }
    else if(torqueVal>=12100 && torqueVal < 18500){
        falkGear = "1035G";
    }
    else if(torqueVal>=18500 && torqueVal < 30600){
        falkGear = "1040G";
    }
    else if(torqueVal>=30600 && torqueVal < 42000){
        falkGear = "1045G";
    }
    else if(torqueVal>=42000 && torqueVal < 56600){
        falkGear = "1050G";
    }
    else if(torqueVal>=56600 && torqueVal < 74000){
        falkGear = "1055G";
    }
    else if(torqueVal>=74000 && torqueVal < 90400){
        falkGear = "1060G";
    }
    else if(torqueVal>=90400 && torqueVal < 135000){
        falkGear = "1070G";
    }
    else {
        falkGear = "None";
    }

    return falkGear;
}

function FalkSteel(torqueVal){
    var falkSteel;
    var torqueVal = torqueIt();

    if(torqueVal>=0 && torqueVal < 52){
        falkSteel = "1020T"
    }
    else if(torqueVal>=52 && torqueVal < 149){
        falkSteel = "1030T"
    }
    else if(torqueVal>=149 && torqueVal < 249){
        falkSteel = "1040T"
    }
    else if(torqueVal>=249 && torqueVal < 435){
        falkSteel = "1050T"
    }
    else if(torqueVal>=435 && torqueVal < 684){
        falkSteel = "1060T"
    }
    else if(torqueVal>=684 && torqueVal < 994){
        falkSteel = "1070T"
    }
    else if(torqueVal>=994 && torqueVal < 2050){
        falkSteel = "1080T"
    }
    else if(torqueVal>=2050 && torqueVal < 3730){
        falkSteel = "1090T"
    }
    else if(torqueVal>=3730 && torqueVal < 6280){
        falkSteel = "1100T"
    }
    else if(torqueVal>=6280 && torqueVal < 9320){
        falkSteel = "1110T"
    }
    else if(torqueVal>=9320 && torqueVal < 13700){
        falkSteel = "1120T"
    }
    else if(torqueVal>=13700 && torqueVal < 19900){
        falkSteel = "1130T"
    }
    else if(torqueVal>=19900 && torqueVal < 28600){
        falkSteel = "1140T"
    }
    else if(torqueVal>=28600 && torqueVal < 38800){
        falkSteel = "1150T"
    }
    else if(torqueVal>=38800 && torqueVal < 55900){
        falkSteel = "1160T"
    }
    else if(torqueVal>=55900 && torqueVal < 74600){
        falkSteel = "1170T"
    }
    else {
        falkSteel = "None"
    }

    return falkSteel;
}


function FalkWrap(torqueVal){
    var falkWrap;
    var torqueVal = torqueIt();

    if(torqueVal>=0 && torqueVal < 62){
        falkWrap = "5R"
    }
    else if(torqueVal>=62 && torqueVal < 130){
        falkWrap = "10R"
    }
    else if(torqueVal>=130 && torqueVal < 316){
        falkWrap = "20R"
    }
    else if(torqueVal>=316 && torqueVal < 520){
        falkWrap = "30R"
    }
    else if(torqueVal>=520 && torqueVal < 1028){
        falkWrap = "40R"
    }
    else if(torqueVal>=1028 && torqueVal < 2508){
        falkWrap = "50R"
    }
    else if(torqueVal>=2508 && torqueVal < 4011){
        falkWrap = "60R"
    }
    else if(torqueVal>=4011 && torqueVal < 8011){
        falkWrap = "70R"
    }
    else if(torqueVal>=8011 && torqueVal < 15027){
        falkWrap = "80R"
    }
    else {
        falkWrap = "None"
    }

    return falkWrap;
}



function displayResults(){
    var newVal = results();
    document.getElementById('brCouplingSuggest1').value=couplingSelection(newVal[0]) + " - " + colorSelection(newVal[0]);
    document.getElementById('brCouplingSuggest2').value=couplingSelection(newVal[1]) + " - " + colorSelection(newVal[1]);
    document.getElementById('sfCouplingSuggest1').value=newVal[2].toFixed(3);
    document.getElementById('sfCouplingSuggest2').value=newVal[3].toFixed(3);;
    document.getElementById('fgearCouplingSuggest1').value=FalkGear(torqueVal);
    document.getElementById('fsteelCouplingSuggest1').value=FalkSteel(torqueVal);
    document.getElementById('fwrapCouplingSuggest1').value=FalkWrap(torqueVal);
    
}



function clearTable(){
    document.getElementById('kilowatt').value="";
    document.getElementById('rotationSpeed').value="";
    document.getElementById('serviceFactor').value="";
    document.getElementById('torqueResult').value="";
    document.getElementById('coupRat').value="";
    document.getElementById('brCouplingSuggest1').value="";
    document.getElementById('brCouplingSuggest2').value="";
    document.getElementById('fgearCouplingSuggest1').value="";
    document.getElementById('fsteelCouplingSuggest1').value="";
    document.getElementById('fwrapCouplingSuggest1').value="";
    
}
