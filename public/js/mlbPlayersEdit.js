let originalPlayerInfo = [];

$("#editPlayer").on("show.bs.modal", function (event) {

    $("#sameInformationErrorEdit").attr("hidden", "hidden");
    $("#firstNameErrorEdit").attr("hidden", "hidden");
    $("#firstNameRegexErrorEdit").attr("hidden", "hidden");
    $("#lastNameErrorEdit").attr("hidden", "hidden");
    $("#lastNameRegexErrorEdit").attr("hidden", "hidden");
    $("#numberErrorEdit").attr("hidden", "hidden");
    $("#notANumberErrorEdit").attr("hidden", "hidden");
    $("#invalidNumberErrorEdit").attr("hidden", "hidden");
    $("#teamErrorEdit").attr("hidden", "hidden");

    originalPlayerInfo = event.relatedTarget.id.split("/");

    $("#firstNameEdit").val(originalPlayerInfo[0]);
    $("#lastNameEdit").val(originalPlayerInfo[1]);
    $("#numberEdit").val(originalPlayerInfo[2]);
    $("#teamEdit").val(originalPlayerInfo[3]);
});

$("#linkToEdit").on("click", (e) => {

    $("#sameInformationErrorEdit").attr("hidden", "hidden");
    $("#firstNameErrorEdit").attr("hidden", "hidden");
    $("#firstNameRegexErrorEdit").attr("hidden", "hidden");
    $("#lastNameErrorEdit").attr("hidden", "hidden");
    $("#lastNameRegexErrorEdit").attr("hidden", "hidden");
    $("#numberErrorEdit").attr("hidden", "hidden");
    $("#notANumberErrorEdit").attr("hidden", "hidden");
    $("#invalidNumberErrorEdit").attr("hidden", "hidden");
    $("#teamErrorEdit").attr("hidden", "hidden");

    let firstName = $("#firstNameEdit").val();
    let lastName = $("#lastNameEdit").val();
    let number = $("#numberEdit").val();
    let team = $("#teamEdit").val();

    if(firstName == originalPlayerInfo[0] && lastName == originalPlayerInfo[1] && number == originalPlayerInfo[2] && team == originalPlayerInfo[3]) {
        e.preventDefault();
		$("#sameInformationErrorEdit").removeAttr("hidden");
    }

    if (firstName == "") {
		e.preventDefault();
		$("#firstNameErrorEdit").removeAttr("hidden");
	} else if (!firstName.match(nameRegex)) {
		e.preventDefault();
		$("#firstNameRegexErrorEdit").removeAttr("hidden");
	}

    if (lastName == "") {
		e.preventDefault();
		$("#lastNameErrorEdit").removeAttr("hidden");
	} else if (!lastName.match(nameRegex)) {
		e.preventDefault();
		$("#lastNameRegexErrorEdit").removeAttr("hidden");
	}

    if (number == "") {
		e.preventDefault();
		$("#numberErrorEdit").removeAttr("hidden");
	} else if (isNaN(number)) {
		e.preventDefault();
		$("#notANumberErrorEdit").removeAttr("hidden");
	} else if(number > 99 || number < 0) {
        e.preventDefault();
		$("#invalidNumberErrorEdit").removeAttr("hidden");
    }

    if (team == null) {
		e.preventDefault();
		$("#teamErrorEdit").removeAttr("hidden");
	} 

    let apiEditURL = `/mlbPlayers/v1/edit/${originalPlayerInfo[0]}/${originalPlayerInfo[1]}/${originalPlayerInfo[2]}/${originalPlayerInfo[3]}?firstName=${firstName}&lastName=${lastName}&number=${number}&team=${team}`;
    
    $("#linkToEdit").attr("href", apiEditURL);
});

// No information changed error

$("#sameInformationErrorCloseEdit").on("click", () => {
    $("#sameInformationErrorEdit").attr("hidden", "hidden");
})

// First Name errors

$("#firstNameErrorCloseEdit").on("click", () => {
    $("#firstNameErrorEdit").attr("hidden", "hidden");
})

$("#firstNameRegexErrorCloseEdit").on("click", () => {
    $("#firstNameRegexErrorEdit").attr("hidden", "hidden");
})

// Last Name errors

$("#lastNameErrorCloseEdit").on("click", () => {
    $("#lastNameErrorEdit").attr("hidden", "hidden");
})

$("#lastNameRegexErrorCloseEdit").on("click", () => {
    $("#lastNameRegexErrorEdit").attr("hidden", "hidden");
})

// Number errors

$("#numberErrorCloseEdit").on("click", () => {
    $("#numberErrorEdit").attr("hidden", "hidden");
})

$("#notANumberErrorCloseEdit").on("click", () => {
    $("#notANumberErrorCloseEdit").attr("hidden", "hidden");
})

$("#invalidNumberErrorCloseEdit").on("click", () => {
    $("#invalidNumberErrorEdit").attr("hidden", "hidden");
})

// Team errors

$("#teamErrorCloseEdit").on("click", () => {
    $("#teamErrorEdit").attr("hidden", "hidden");
})