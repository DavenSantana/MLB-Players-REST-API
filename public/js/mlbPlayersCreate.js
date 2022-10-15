const nameRegex = /^[a-z ,.'-]+$/i;

$("#linkToCreate").on("click", (e) => {

    $("#firstNameError").attr("hidden", "hidden");
    $("#firstNameRegexError").attr("hidden", "hidden");
    $("#lastNameError").attr("hidden", "hidden");
    $("#lastNameRegexError").attr("hidden", "hidden");
    $("#numberError").attr("hidden", "hidden");
    $("#notANumberError").attr("hidden", "hidden");
    $("#invalidNumberError").attr("hidden", "hidden");
    $("#teamError").attr("hidden", "hidden");

    let firstName = $("#firstNameCreate").val();
    let lastName = $("#lastNameCreate").val();
    let number = $("#numberCreate").val();
    let team = $("#teamCreate").val();

    if (firstName == "") {
		e.preventDefault();
		$("#firstNameError").removeAttr("hidden");
	} else if (!firstName.match(nameRegex)) {
		e.preventDefault();
		$("#firstNameRegexError").removeAttr("hidden");
	}

    if (lastName == "") {
		e.preventDefault();
		$("#lastNameError").removeAttr("hidden");
	} else if (!lastName.match(nameRegex)) {
		e.preventDefault();
		$("#lastNameRegexError").removeAttr("hidden");
	}

    if (number == "") {
		e.preventDefault();
		$("#numberError").removeAttr("hidden");
	} else if (isNaN(number)) {
		e.preventDefault();
		$("#notANumberError").removeAttr("hidden");
	} else if(number > 99 || number < 0) {
        e.preventDefault();
		$("#invalidNumberError").removeAttr("hidden");
    }

    if (team == null) {
		e.preventDefault();
		$("#teamError").removeAttr("hidden");
	} 

    let apiPostURL = `mlbPlayers/v1/post/${firstName}/${lastName}/${number}/${team}`

    $("#linkToCreate").attr("href", apiPostURL);
});

// First Name errors

$("#firstNameErrorClose").on("click", () => {
    $("#firstNameError").attr("hidden", "hidden");
})

$("#firstNameRegexErrorClose").on("click", () => {
    $("#firstNameRegexError").attr("hidden", "hidden");
})

// Last Name errors

$("#lastNameErrorClose").on("click", () => {
    $("#lastNameError").attr("hidden", "hidden");
})

$("#lastNameRegexErrorClose").on("click", () => {
    $("#lastNameRegexError").attr("hidden", "hidden");
})

// Number errors

$("#numberErrorClose").on("click", () => {
    $("#numberError").attr("hidden", "hidden");
})

$("#notANumberErrorClose").on("click", () => {
    $("#notANumberErrorClose").attr("hidden", "hidden");
})

$("#invalidNumberErrorClose").on("click", () => {
    $("#invalidNumberError").attr("hidden", "hidden");
})

// Team errors

$("#teamErrorClose").on("click", () => {
    $("#teamError").attr("hidden", "hidden");
})