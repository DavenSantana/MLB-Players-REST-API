$("#linkToFind").on("click", (e) => {

    $("#firstNameRegexErrorFind").attr("hidden", "hidden");
    $("#lastNameRegexErrorFind").attr("hidden", "hidden");
    $("#notANumberErrorFind").attr("hidden", "hidden");
    $("#invalidNumberErrorFind").attr("hidden", "hidden");

    let firstName = $("#firstNameFind").val();
    let lastName = $("#lastNameFind").val();
    let number = $("#numberFind").val();
    let team = $("#teamFind").val();

    if (firstName != "" && !firstName.match(nameRegex)) {
		e.preventDefault();
		$("#firstNameRegexErrorFind").removeAttr("hidden");
	}

    if (lastName != "" && !lastName.match(nameRegex)) {
		e.preventDefault();
		$("#lastNameRegexErrorFind").removeAttr("hidden");
	}

    if (isNaN(number)) {
		e.preventDefault();
		$("#notANumberErrorFind").removeAttr("hidden");
	} else if(number > 99 || number < 0) {
        e.preventDefault();
		$("#invalidNumberErrorFind").removeAttr("hidden");
    }

    let apiGetURL = "";

        if(firstName != "" || lastName != "" || number != "" || team != null) {
            apiGetURL = "/mlbPlayers/v1/get?";
        } else {
            apiGetURL = "/mlbPlayers/v1/get/all";
        }

        if(firstName != "") apiGetURL += `firstName=${firstName}&`

        if(lastName != "") apiGetURL += `lastName=${lastName}&`

        if(number != "") apiGetURL += `number=${number}&`

        if(team != "" && team != null) apiGetURL += `team=${team}`

        $("#linkToFind").attr("href", apiGetURL)
});

// First Name errors

$("#firstNameRegexErrorCloseFind").on("click", () => {
    $("#firstNameRegexErrorFind").attr("hidden", "hidden");
})

// Last Name errors

$("#lastNameRegexErrorCloseFind").on("click", () => {
    $("#lastNameRegexErrorFind").attr("hidden", "hidden");
})

// Number errors

$("#notANumberErrorCloseFind").on("click", () => {
    $("#notANumberErrorCloseFind").attr("hidden", "hidden");
})

$("#invalidNumberErrorCloseFind").on("click", () => {
    $("#invalidNumberErrorFind").attr("hidden", "hidden");
})
