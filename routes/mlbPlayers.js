const express = require("express");
const mlbPlayer = require("../schema/mlbPlayer");

const router = express.Router();

module.exports = () => {
    
    router.get("/", async (req, res) => {

        let mlbPlayersTable = await createTableForMLBPlayers();

        return res.render("mlbPlayers", {firstName: req.query.firstName, 
                                        lastName: req.query.lastName, 
                                        number: req.query.number, 
                                        team: req.query.team,
                                        mlbPlayersTable: mlbPlayersTable,
                                        mlbPlayersDelete: req.query.delete,
                                        mlbPlayersCreate: req.query.create,
                                        mlbPlayersEdit: req.query.edit});
    });

    router.get("/v1/get/:firstName/:lastName/:number/:team", (req, res) => {

        // Watch a video to better understand how to return the json object
        // when using the get route

    });

    router.get("/v1/get/:firstName/:lastName/:number", (req, res) => {

    });

    router.get("/v1/get/:firstName/:lastName", (req, res) => {

    });

    router.get("/v1/get/:firstName?firstName=true", (req, res) => {

        // Returns all players with first name as the argument

    });

    router.get("/v1/get/:lastName?lastName=true", (req, res) => {

        // Returns all players with first name as the argument

    });

    router.get("/v1/get/:team?team=true", (req, res) => {

        // Returns all players on that team

    });

    // Creates a new player through API, also works through front end
    router.get("/v1/post/:firstName/:lastName/:number/:team", async (req, res, next) => {

        const nameRegex = /^[a-z ,.'-]+$/i;

        let firstName = req.params.firstName;
        let lastName = req.params.lastName;
        let number = req.params.number;
        let team = req.params.team;

        firstName = capitalizeFirstLetter(firstName);
        lastName = capitalizeFirstLetter(lastName);
        team = toUpperCaseEachWord(team);

        let errorExists = false;

        if(firstName == "" || !firstName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?firstName=error");
        } 

        if(lastName == "" || !lastName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?lastName=error");
        }

        if(number == "" || isNaN(number) || number > 99 || number < 0){ 
            errorExists = true;
            res.redirect("/mlbPlayers?number=error");
        } 

        if(!teamExists(team)){
            errorExists = true;
            res.redirect("/mlbPlayers?team=error");
        }

        if(!errorExists){
            
            try{

                const player = await mlbPlayer.findOne({ firstName: firstName, lastName: lastName, number: number, team: team }).exec();

                if(!player) {

                    const newPlayer = new mlbPlayer({
                        firstName: firstName,
                        lastName: lastName,
                        number: number,
                        team: team,
                    });

                    const savedPlayer = await newPlayer.save();

                    if (savedPlayer) {
                        return res.redirect("/mlbPlayers?create=true");
                    }

                    return next(new Error("Failed to save user for unknown reasons"));

                } else {
                    return res.redirect("/mlbPlayers?create=false")
                }

            } catch(err) {
                return next(err);
            }
        }

    });

    // Deletes a player through API, also works through front end
    router.get("/v1/delete/:firstName/:lastName/:number/:team", async (req, res, next) => {

        const nameRegex = /^[a-z ,.'-]+$/i;

        let firstName = req.params.firstName;
        let lastName = req.params.lastName;
        let number = req.params.number;
        let team = req.params.team;

        firstName = capitalizeFirstLetter(firstName);
        lastName = capitalizeFirstLetter(lastName);
        team = toUpperCaseEachWord(team);

        let errorExists = false;

        if(firstName == "" || !firstName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?firstName=error");
        } 

        if(lastName == "" || !lastName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?lastName=error");
        }

        if(number == "" || isNaN(number) || number > 99 || number < 0){ 
            errorExists = true;
            res.redirect("/mlbPlayers?number=error");
        } 

        if(!teamExists(team)){
            errorExists = true;
            res.redirect("/mlbPlayers?team=error");
        }

        if(!errorExists){
           
            try{

                const player = await mlbPlayer.findOne({ firstName: firstName, lastName: lastName, number: number, team: team }).exec();

                if(player) {
                    await mlbPlayer.deleteOne({ firstName: firstName, lastName: lastName, number: number, team: team }).exec();
                    return res.redirect("/mlbPlayers?delete=true");
                } else {
                    return res.redirect("/mlbPlayers?delete=false")
                }

            } catch(err) {
                return next(err);
            }
        }

    });

    // Edit a player through API, works through front end
    router.get("/v1/edit/:firstName/:lastName/:number/:team", async (req, res, next) => { 

        const nameRegex = /^[a-z ,.'-]+$/i;

        let firstName = req.params.firstName;
        let lastName = req.params.lastName;
        let number = req.params.number;
        let team = req.params.team;

        let newFirstName = req.query.firstName;
        let newLastName = req.query.lastName;
        let newNumber = req.query.number;
        let newTeam = req.query.team;

        firstName = capitalizeFirstLetter(firstName);
        lastName = capitalizeFirstLetter(lastName);
        team = toUpperCaseEachWord(team);

        // Have to check if the query is passed before you try and change the values
        if(newFirstName != undefined) {
            newFirstName = capitalizeFirstLetter(newFirstName);
        }

        if(newLastName != undefined) {
            newLastName = capitalizeFirstLetter(newLastName);
        }

        if(newTeam != undefined) {
            newTeam = toUpperCaseEachWord(newTeam);
        }

        let errorExists = false;

        // Check if the information for the player to be edited is correct
        if(firstName == "" || !firstName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?firstName=error");
        } 

        if(lastName == "" || !lastName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?lastName=error");
        }

        if(number == "" || isNaN(number) || number > 99 || number < 0){ 
            errorExists = true;
            res.redirect("/mlbPlayers?number=error");
        } 

        if(!teamExists(team)){
            errorExists = true;
            res.redirect("/mlbPlayers?team=error");
        }

        // Check if the information to be changed to is correct
        if(newFirstName == undefined && newLastName == undefined && newTeam == undefined && newNumber == undefined) {
            errorExists = true;
            res.redirect("/mlbPlayers?edit=empty")
        }

        if(newFirstName != undefined && !newFirstName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?firstName=error");
        } 

        if(newLastName != undefined && !newLastName.match(nameRegex)) {
            errorExists = true;
            res.redirect("/mlbPlayers?lastName=error");
        }

        if(newNumber != undefined && isNaN(number) || newNumber != undefined && number > 99 || newNumber != undefined && number < 0){ 
            errorExists = true;
            res.redirect("/mlbPlayers?number=error");
        } 

        if(newTeam != undefined && !teamExists(newTeam)){
            errorExists = true;
            res.redirect("/mlbPlayers?team=error");
        }

        if(!errorExists){

            try{

                const playerToEdit = await mlbPlayer.findOne({ firstName: firstName, lastName: lastName, number: number, team: team }).exec();
                const checkIfPlayerWithNewInfoExists = await mlbPlayer.findOne({ firstName: newFirstName, lastName: newLastName, number: newNumber, team: newTeam }).exec();
                
                // If a player with the info exists and no player with the new info already exists then we will update
                if(playerToEdit && !checkIfPlayerWithNewInfoExists) {
                    
                    if(newFirstName != undefined && newLastName != undefined && newNumber != undefined && newTeam != undefined) {
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName, lastName: newLastName, number: newNumber, team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName != undefined && newLastName == undefined && newNumber == undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName != undefined && newNumber == undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {lastName: newLastName}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName == undefined && newNumber != undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {number: newNumber}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName == undefined && newNumber == undefined && newTeam != undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName != undefined && newLastName != undefined && newNumber == undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName, lastName: newLastName}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName != undefined && newLastName == undefined && newNumber != undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName, number: newNumber}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName != undefined && newLastName == undefined && newNumber == undefined && newTeam != undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName, team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName != undefined && newLastName != undefined && newNumber != undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName, lastName: newLastName, number: newNumber}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName != undefined && newLastName != undefined && newNumber == undefined && newTeam != undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {firstName: newFirstName, lastName: newLastName, team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName != undefined && newNumber != undefined && newTeam == undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {lastName: newLastName, number: newNumber}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName != undefined && newNumber == undefined && newTeam != undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {lastName: newLastName, team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName != undefined && newNumber != undefined && newTeam != undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {lastName: newLastName, number: newNumber, team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    } else if(newFirstName == undefined && newLastName == undefined && newNumber != undefined && newTeam != undefined) { 
                        const player = await mlbPlayer.findOneAndUpdate({firstName: firstName, lastName: lastName, number: number, team: team}, {number: newNumber, team: newTeam}).exec();
                        const savedPlayer = await player.save();
                        if(savedPlayer) return res.redirect("/mlbPlayers?edit=success");
                    }
                } else if(!playerToEdit) {
                    res.redirect("/mlbPlayers?edit=dne")
                } else if(checkIfPlayerWithNewInfoExists) {
                    res.redirect("/mlbPlayers?edit=exists")
                }

            } catch(err) {
                return next(err);
            }
        }

    });

    return router;
};

function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

function toUpperCaseEachWord (team) {
    return team.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

function teamExists (team) {

    let allTeams = ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", 
                    "Chicago White Sox", "Chicago Cubs", "Cincinnati Reds", "Cleveland Guardians", 
                    "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", 
                    "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", 
                    "Minnesota Twins", "New York Yankees", "New York Mets", "Oakland Athletics", 
                    "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", 
                    "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", 
                    "Washington Nationals"];

    return allTeams.includes(team);
};

async function createTableForMLBPlayers() {
    
    let table = "";
	let allPlayers = await mlbPlayer.find({}).exec();

    allPlayers.forEach(player => { 
        
        table += 
			`<tr>
				<td>${player.firstName}</td>
				<td>${player.lastName}</td>
				<td class="text-center">${player.number}</td>
				<td class="text-center">${player.team}</td>
                <td class="text-center"><button id="${player.firstName}/${player.lastName}/${player.number}/${player.team}" class="btn btn-sm btn-info rounded-0 bi bi-pencil-square" type="button" data-bs-toggle="modal" data-bs-target="#editPlayer"></button></td>
				<td class="text-center"><button id="mlbPlayers/v1/delete/${player.firstName}/${player.lastName}/${player.number}/${player.team}" class="btn btn-sm btn-danger rounded-0 bi bi-trash" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal"></button></td>
			</tr>`
    });

    return table;
}
