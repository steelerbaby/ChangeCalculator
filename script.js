/*Used code to create math formula to find the users weight*/
function calculator() {
    var gravity = document.getElementById("gravity").value;

    var enterYourWeight = document.getElementById('enterYourWeight').value;

    var newWeight = gravity * enterYourWeight;

    var planetSelection = document.getElementById('gravity')[document.getElementById('gravity').selectedIndex].text;

    /*The if rule was created to add 'the' when the user selects moon or sun*/
    if (planetSelection == 'Sun' || planetSelection == 'Moon') {
        document.getElementById('convertedWeight').innerHTML = 'Wow your weight on the  ' + planetSelection + ' would be  ' + parseInt(newWeight) + " lbs!";
        /*the return; function is used to stop the script from running if 'if' is true and 'if' is false the script will continue to complete*/
        return;
    }

    document.getElementById('convertedWeight').innerHTML = 'Wow your weight on ' + planetSelection + ' would be ' + parseInt(newWeight) + " lbs!";
