function bricksAndWater() {

    var bricksArray = document.getElementById("numbers").value;
    bricksArray = bricksArray.split(',');
    for(let number = 0; number < bricksArray.length; number++){
        if(isNaN(bricksArray[number])){
            document.getElementById("warning").innerHTML = "Please enter numbers seperated by a comma!";
        }
    }

    var arrayLaenge = bricksArray.length;
    var ende = arrayLaenge - 1;
    var max = Math.max(...bricksArray);
    var ergebnis = 0;
    var slicedArray = [];
    var workingArray = bricksArray;

    //Calculates waterbricks of one "array-slice"
    function calculate(){
       
        var summe = 0;
        var summieren = slicedArray[0]; //Setzt "linke Rille"
       
        for (var i = 1; i < ende; i++){
            if (summieren == 1){
                if(slicedArray[i] == 0){
                    summe = summe + 1;
                    if (slicedArray[i+1] == 1){ //Prüft, ob "rechte Rille" vorhanden und erhöht ergebnis
                        ergebnis = ergebnis + summe;
                        summe = 0;
                    }
                }
            }else{
                summieren = slicedArray[i];
            }   
        }
    }

    //Slices workingArray in "array-slice"; 0 equals 0, other elements equal 1;
    function slice(){
        for (var i=0; i<arrayLaenge; i++){
            if (workingArray[i] == 0){
               slicedArray[i] = 0;
            }else{
               slicedArray[i] = 1;
            }
       }
    }

    //Subtracts 1 of every element != 0
    function subtract(){
        for (var i = 0; i <= ende; i++){
            if (workingArray[i] != 0){
                workingArray[i] = workingArray[i] - 1;
            }
        }
    }

    for (var i=0; i<max; i++){
        slice();
        calculate();
        subtract();
    }
    document.getElementById("result").innerHTML = ergebnis;
    console.log(ergebnis);
}
