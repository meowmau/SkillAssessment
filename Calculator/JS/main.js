function calculate() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;
    var input5 = document.getElementById("input5").value;
    var input6 = document.getElementById("input6").value;

    // Check if any field is empty
    if (input1 === "" || input2 === "" || input3 === "" || input4 === "" || input5 === "" || input6 === "") {
        swal("Error", "Please enter numbers in all fields", "error");
        return;
    }

    // Reset border styles
    document.getElementById("input1").style.border = "";
    document.getElementById("input2").style.border = "";
    document.getElementById("input3").style.border = "";
    document.getElementById("input4").style.border = "";
    document.getElementById("input5").style.border = "";
    document.getElementById("input6").style.border = "";

    var num1 = parseFloat(input1);
    var num2 = parseFloat(input2);
    var num3 = parseFloat(input3);
    var num4 = parseFloat(input4);
    var num5 = parseFloat(input5);
    var num6 = parseFloat(input6);

    var sumOfFirstThree = num1 + num2 + num3;
    var quotientOfNextThree = (num4 + num5 + num6) / 3;
    var finalResult = sumOfFirstThree + quotientOfNextThree;

    // Display results using SweetAlert
    swal({title: "Calculation Result",
    text: `The sum of the difference and quotient is: ${finalResult}`,
    icon: "success",})
        .then(function() {
            // Clear the input fields
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
            document.getElementById("input3").value = "";
            document.getElementById("input4").value = "";
            document.getElementById("input5").value = "";
            document.getElementById("input6").value = "";
        });
}
