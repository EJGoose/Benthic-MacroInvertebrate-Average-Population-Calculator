# Benthic-MacroInvertebrate-Average-Population-Calculator
This calculator takes a collection of samples of the relative abundance of Benthic MacroInvertebrates in a river and calculates the average population in that river.
The abundance of Benthic MacroInvertebrates is a key measure of the health of the water in a river. This calculator requires several Benthic MacroInvertebrate abundance values (decimal values between 1 and 10) and then calculates the average health of the river based on these values.

#### Key Concepts
- Using For Loops to iterate through arrays
- Retrieving user input
- Managing different number types
- Using simple Maths functions
- Using prompts and the console

#### File Overviews
- index.html - simple HTML outline containing intro text and the button to start the programme.
- script.js:
    - submitData - the main function called from the page, this handles all the other functions and resets at the end.
    - iterationValidation - checks user input complies with array length requirements
    - sampleValidation - checks each sample is a compliant BMAP value
    - sampleInput - gathers the data from the user with prompts
    - meanCalculator - calculates the mean value of all the BMAP values
    - declareResults -  round the mean to the nearest integer and share it with the user, along with appropriate advice
