//benthic Macroinvertibrate relative population abundance Calculator

// Variable Declaration
let samples = [];
let sampleNumber = 0;
let sampleItem = 0;
let sampleMean = 0;
let validSampleNumber = 0;

//Greet user
console.log("Hello and welcome to the Benthic Macroinvertebrate average population (BMAP) calculator");

console.log("Once you have your samples prepared, please click the submit data button to begin.");

//Validate user input on number of items
function iterationValidation(sampleNumber) {
    if (Number.isNaN(sampleNumber) || sampleNumber < 0) {
        sampleNumber = parseInt(prompt('Please re-input sample, sample must be a whole number greater than 0.'))
        iterationValidation(sampleNumber)
    } else {
        validSampleNumber = sampleNumber
    };
};

//Validate user input on array values
function sampleValidation(sampleItem, humanNumber) {
    if (sampleItem < 0 || sampleItem > 10 || Number.isNaN(sampleItem)) {
        sampleItem = parseFloat(prompt(`Please re-input sample #${humanNumber}, reminder BMAP values must be a number between 0 and 10`))
        sampleValidation(sampleItem, humanNumber)
    } else {
        samples.push(sampleItem)
    };
};



//Recieve user input
function sampleInput(sampleNumber) {
    for (let i = 0; i < sampleNumber; i++) {
        //adjust array location to human friendly numbering
        let humanNumber = i + 1;
        sampleItem = parseFloat(prompt(`Please input sample #${humanNumber}`));
        sampleValidation(sampleItem, humanNumber);
    };   
};


//Calculate sample total 
function meanCalculator(samples) {
    // Variable Declaration
    let sampleTotal = 0;
    //sum the value for each item in sample array
    for (let i = 0; i < samples.length; i++) {
        sampleTotal += samples[i];
    };
    //calculate the aveage of the samples
    sampleMean = sampleTotal / samples.length;
    declareResult(sampleMean);
};

//provide user with answer and advice
function declareResult(sampleMean) {
    //Multiply answer by 100 to allow math.round to work on the final integer, divide it by 100 to recieve an answer rounded to the 2nd decimal place.
    sampleMean = Math.round(sampleMean*100)/100;
    //Respond appropriately 
    if (sampleMean <= 3) {
        window.alert(`Your mean BMAP is ${sampleMean} this is poor, please urgently seek corrective measures!`);
        console.log(`Your mean BMAP is ${sampleMean} this is poor, please urgenly seek corrective measures!`);
    } else if (sampleMean >= 7) {
        window.alert(`Your mean BMAP is ${sampleMean} this is good, Keep up the good work!`);
        console.log(`Your mean BMAP is ${sampleMean} this is good, Keep up the good work!`);
    } else if (sampleMean > 3 && sampleMean < 7) {
        window.alert(`Your mean BMAP is ${sampleMean} this is Average, you may like to consider corrective measures.`);
        console.log(`Your mean BMAP is ${sampleMean} this is Average, you may like to consider corrective measures.`);
    } else {
        console.log("An error has occurred, please ensure all values are numbers between 1 and 10 and resubmit. Apologies for the inconvenience.")
    };
};

// Main Calculator function called from the page
function submitData() {
//Greeting
    window.alert("Hello and welcome to the Benthic Macroinvertebrate average population calculator, please click OK to begin");
//Intake sample number
    sampleNumber = parseInt(prompt("How many samples do you have today?"));
//Ensure this is a real number
    iterationValidation(sampleNumber);
// Pass this number to the input function
    sampleInput(validSampleNumber);
//log the samples array for user reference
    console.log("Your Samples are: ", samples);
//Calculate the mean
    meanCalculator(samples);
//Thank the user
    console.log("Thank you for using the BMAP Calculator, to measure another data set please click the submit data button.");
//reset variables to restart the calculator
    samples = [];
    sampleTotal = 0;
    sampleNumber = 0;
    sampleItem = 0;
    sampleMean = 0;
    validSampleNumber = 0;
};
