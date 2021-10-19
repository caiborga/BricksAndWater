function bricksAndWater(bricksArray) {

    var arrayLaenge = bricksArray.length;
    var ende = arrayLaenge - 1;
    var max = Math.max(...bricksArray);
    var ergebnis = 0;
    var slicedArray = [];
    var workingArray = bricksArray;


    //Berechnet waterbricks einer "Array-Scheibe"
    function berechne(){
       
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

    //Zerschneidet workingArray in "Array-Scheibe"; 0 Stellen bleiben 0, andere Elemente werden 1;
    function slice(){
        for (var i=0; i<arrayLaenge; i++){
            if (workingArray[i] == 0){
               slicedArray[i] = 0;
            }else{
               slicedArray[i] = 1;
            }
       }
    }

    //Subtrahiert 1 von jedem Element ungleich 0
    function subtrahieren(){
        for (var i = 0; i <= ende; i++){
            if (workingArray[i] != 0){
                workingArray[i] = workingArray[i] - 1;
            }
        }
    }

    for (var i=0; i<max; i++){
        slice();
        berechne();
        subtrahieren();
    }

    return ergebnis;
}
