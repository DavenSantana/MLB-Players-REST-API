$("#viewCountry").on("click", function () {
	let countryName = $("#selectCountry").val();
    let fullCountryName = $("#selectCountry").val();
	countryName = countryName.replace(/ /g, "%20");
	console.log(countryName);
	$.get({url: `https://restcountries.com/v3.1/name/${countryName}?fullText=true`, success: function (c) {
			console.log(c);

            let country = c[0];

			let flag = country.flags.png;
            let continent = country.continents[0];
            let capital = country.capital[0];
            let googleMaps = country.maps.googleMaps;
            let languages = country.languages;
            let currency = country.currencies;

            // Get Currencies of the Country

            let nameofCurrency;
            let currencyName;
            let currencySymbol;
            let tempStringForCurrency = "";

            if(Object.keys(currency).length > 1) {
                
                for(let i = 0; i < Object.keys(currency).length-1; i++) {
                    nameofCurrency = Object.keys(currency)[i];
                    currencyName = country.currencies[nameofCurrency].name;
                    currencySymbol = country.currencies[nameofCurrency].symbol;
                    tempStringForCurrency += `${currencyName} with the symbol ${currencySymbol}, `
                }

                nameofCurrency = Object.keys(currency)[Object.keys(currency).length-1];
                currencyName = country.currencies[nameofCurrency].name;
                currencySymbol = country.currencies[nameofCurrency].symbol;
                tempStringForCurrency += `${currencyName} with the symbol ${currencySymbol}`
                
                currency = tempStringForCurrency;
                
            } else {
                
                nameofCurrency = Object.keys(currency)[0];
                currencyName = country.currencies[nameofCurrency].name;
                currencySymbol = country.currencies[nameofCurrency].symbol;

                currency = `${currencyName} with the symbol ${currencySymbol}`;

            }

            // Get languages of the Country

            let nameOfLanguage;
            let languageName;
            let tempStringForLanguage = ""


            if(Object.keys(languages).length > 1) {
                
                for(let i = 0; i < Object.keys(languages).length-1; i++) {
                    nameOfLanguage = Object.keys(languages)[i];
                    languageName = country.languages[nameOfLanguage];
                    
                    tempStringForLanguage += `${languageName}, `
                }


                nameOfLanguage = Object.keys(languages)[Object.keys(languages).length-1];
                languageName = country.languages[nameOfLanguage];
                    
                tempStringForLanguage += `${languageName}`
                
                languages = tempStringForLanguage;
                
            } else {
                
                nameOfLanguage = Object.keys(languages)[0];
                languageName = country.languages[nameOfLanguage];
                
                languages = languageName;
            }

            $("#countryName").text(`${fullCountryName}`);
			$("#countryFlag").attr("src", flag);
            $("#countryContinent").text(`The country is found in the continent of ${continent}`);
            $("#countryCapital").text(`The capital is ${capital}`);
            $("#countryGoogleMaps").text(`View the country on `);
            $("#countryGoogleMapsLink").text("Google Maps");
            $("#countryGoogleMapsLink").attr("href", googleMaps);
            $("#countryLanguages").text(`The language/s spoken are ${languages}`);
            $("#countryCurrencies").text(`The currency used is ${currency}`);
		
		},
	});
});
