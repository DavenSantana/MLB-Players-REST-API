# REST-API

## About this project

  - This project was created in order for me to use REST-API's that were created by other people online and for me to create my own REST API.
  - REST API's are a big part of programming since it can forward information to a user or allow users to create, edit and delete other information through an endpoint, which is why I wanted to create one, to show I know the understanding of REST API's and how they work.
  - The REST API's I used from the internet were Kanye.rest which is an API which just returns quotes that Kanye West had said and REST Countries, this is an API which returns information about all the countries in the world, including the flag, currencies, location, google maps link, languages and much more.
  - My custom REST API is called MLB Players which I made so that users could find out information about MLB players. The API returns the players first name, last name, number and team with many different get methods, users can look up players just by first name to find everyone with the same first name, the same idea with last name, number and team. The API also allows you to create, edit and delete players through specific endpoints. 
  - With MLB Players I wanted to create a different way of viewing REST API's so I gave users the capability to use the REST API through a user friendly interface, the user interface allows users to fill out forms like they would on a normal website but when the submit button is clicked, it sends a request through the API, the submit button uses API endpoints in order to handle the information passed.

## Home Page

  - The home page just includes information about the project and some of the technologies I used.
  - It includes a nav bar to navigate to the other pages with the other API's.

  [![GJr-cylu-Tn-Gg-LWESh-GThr-Q.png](https://i.postimg.cc/gJ08WNy3/GJr-cylu-Tn-Gg-LWESh-GThr-Q.png)](https://postimg.cc/ns6CKKPL)

## Kanye Quote API

  - The Kanye Quote API is a REST API which can be found at Kanye.rest and what it does is it returns quotes that Kanye West has previously said and are rememberable.
  - The API generates a random quote every time that it is sent a request.
  - In order to use the API on the website a user has to click on the picture of Kanye and a new request will be sent to the API and the quote will be changed.

  [![8u-Mr5ua4-Sc-Ovwz-Nyn-Jbt-KA.png](https://i.postimg.cc/R0C8fxQf/8u-Mr5ua4-Sc-Ovwz-Nyn-Jbt-KA.png)](https://postimg.cc/QFP0GPzx)

## Rest Countries API

  - The Rest Countries API is a REST API which is found at restcountries.com, this API returns information about every country in the world, it returns info such as the common, currencies, languages, capital, alternate spellings, the map, regioin, subregion, latitude, longitude, google maps link and much more.
  - To request to the API it has many different ways such as using a partial name, a full name, country code, currency, language. capital  and more. The way I request to the API is through a countries full name, I do this through a select which list every country in the world and a user can select a country from the list and then click view country information and this will send the request through the full name and return the name of the country, its map, capital, a link to find it on google maps, the languages spoken and the currencies used with the symbol of the currency.

  [![1-Sz72x1k-SUSPPKIHinbb4g.png](https://i.postimg.cc/3NGb78YM/1-Sz72x1k-SUSPPKIHinbb4g.png)](https://postimg.cc/wR6kQd1F)

  [![r-Lr-Nrb-Hw-RDSJfgkv-Au-ABh-Q.png](https://i.postimg.cc/255cyFr7/r-Lr-Nrb-Hw-RDSJfgkv-Au-ABh-Q.png)](https://postimg.cc/5XZqkzHX)

## MLB Players API

  - The MLB Players API is another REST API which is one I custom built. This API allows users to GET, POST, PUT and DELETE through multiple endpoints and also through the website itself. My idea behind this REST API was to visualize how REST-API's work on the front-end and to also allow users to use endpoints to use the API.
  - A user can "visualize" the API through the front-end through the user interface through many different modals and buttons created with different functionalities such as creating, editing, deleting and finding players. What happens is that when a user fills out the modals and clicks the submit button, an API link is generated and sends the user to that specific API endpoint depending on if it was a GET, POST, PUT or DELETE.
  - A user can also just use the API through endpoints which information in the user manual tells them how to use each endpoint. The only difference which I purposely made as well is that for POST, PUT and DELETE request, if they are completed successfully the user is returned to the success page and if it was not successful, then the user is sent to the error page. I made it this way because these operations usually would return a JSON success message which is either returning the object created, edited or deleted. On an unsuccessful POST, PUT or DELETE obviously no item is returned since no item was able to be created, edited or deleted. Through using a user interface with a friendly success or error message can allow a user to know if they successfully used the API and also let the user know what error they made when using the API. The only API request which does not use the user interface are GET request which is also done purposely. This is done because when users use GET request they expect a value to be returned to them which they can easily use for information, using a GET request and being returned to the website with a table of the player/players would not be as useful and the JSON object being returned to them.

  [![is-Uke6-K5-Th6-GOXv-Te5g-Ph-A.png](https://i.postimg.cc/WpB5gWB5/is-Uke6-K5-Th6-GOXv-Te5g-Ph-A.png)](https://postimg.cc/mhS3Gw29)

  [![BUws6u-GKQYirb5gm-Klsl0g.png](https://i.postimg.cc/jjGHTz55/BUws6u-GKQYirb5gm-Klsl0g.png)](https://postimg.cc/gwHXqL3F)

  [![j6ymo-AG-QF2t-Ae-Llyc2-S1w.png](https://i.postimg.cc/25ZD3Dzw/j6ymo-AG-QF2t-Ae-Llyc2-S1w.png)](https://postimg.cc/KKxVsC3k)
  
  [![pqyoj-OQVu9ggxx-I3-S7-VA.png](https://i.postimg.cc/Pf4kCKkB/pqyoj-OQVu9ggxx-I3-S7-VA.png)](https://postimg.cc/pypS7frZ)

  [![x-Ow-Xgd59-Suq-Be-Xz-WEIZU1w.png](https://i.postimg.cc/cLKq5S8S/x-Ow-Xgd59-Suq-Be-Xz-WEIZU1w.png)](https://postimg.cc/ZWhDCXc7)

  [![vx2-HRe-ASX2-U0z-Fn-Webji-A.png](https://i.postimg.cc/fbqKLB7j/vx2-HRe-ASX2-U0z-Fn-Webji-A.png)](https://postimg.cc/GBYYgP5H)

### MLB Players Manual

#### GET Request

  - mlbPlayers/v1/get/all
    - This GET request endpoint will return all of the players in the database.
  - mlbPlayers/v1/get?params
    - This GET request endpoint will return no player, a single player or multiple players.
    - There are 4 different parameters that can be used, "firstName", "lastName", "number", "team".
    - Users can use one or more of the 4 parameters, using none will just return an empty list.
    - If you want to find one specific player, all of the parameters must be filled out properly.
    - Example of using all parameters : mlbPlayers/v1/get?firstName=Aaron&lastName=Judge&number=99&team=New York Yankeees (firstName, lastName and team are NOT case sensitive, "aaron" and "aArOn" will find the same name, "Aaron").
    - Example of using a single parameter : mlbPlayers/v1/get?team=New York Yankees , this will find everyone who is on the New York Yankees).
    - Example of using multiple parameters : mlbPlayers/v1/get?firstName=Aaron&number=99 , this will find everyone who's first name is Aaron and number is 99).
  - Through the front-end click the "Get Player Info" button and if the form is left empty and "Find" is clicked it will return to you all of the players inside of the database. In order to use single or multiple parameters, just fill out the form with each parameter in which the GET should look up information about players, to search just for the first name of a player, only fill out the first name field and click "Find" and so on for the other fields of the form.

#### POST Request

  - mlbPlayers/v1/post/{firstName}/{lastName}/{number}/{team}
    - This POST request endpoint will create a player based on the information passed through each value for firstName, lastName, number and team.
    - Example of creating a player : mlbPlayers/v1/post/Aaron/Judge/99/New York Yankees (firstName, lastName and team are NOT case sensitive).
    - Example of an error creating a player : mlbPlayers/v1/post/99/Aaron/Judge/New York Yankees , this will return an error since the firstName is a number and also because the number field is not a number.
  - Through the front end use the "Create Player" button under the navigation bar and above the Player table, fill out the form with the information of the player you want to create and then click the "Create" button to create the player.

#### PUT Request

  - mlbPlayers/v1/edit/{firstName}/{lastName}/{number}/{team}/?params
    - This PUT request endpoint will edit a single player which is under the {firstName} {lastName} {number} and {team} values, it will find the player that exists with this info (If it exists).
    - There are 4 different parameters that can be used, "firstName", "lastName", "number", "team".
    - Users can use one or more of the 4 parameters, using none will just leave the player with the same original information.
    - This means a user can change just the firstName of a player and does not need to include the other 3 parameters.
    - Example of using all parameters : mlbPlayers/v1/edit/Aaron/Judge/99/New York Yankees?firstName=Starling&lastName=Marte&number=6&team=New York Mets , this will change Aaron Judge with number 99 on the New York Yankees (If a player with this information exists) to Starling Marte with number 6 on the New York Mets.
    - Example of using a single parameter : mlbPlayers/v1/edit/Aaron/Judge/99/New York Yankees?number=88 , this will change Aaron Judge with number 99 on the New York Yankees to have number 88 now.
    - Example of using multiple parameters : mlbPlayers/v1/edit/Gleyber/Torres/25/New York Yankees?firstName=Dj&lastName=Lemahieu&number=26 , this will change Gleyber Torres with the number 25 on the New York Yankees to Dj Lemahieu with the number 26 on the New York Yankees since the team value was the only thing not changed.
  - Through the front-end click the "Edit" icon next to a players name and just fill out the form and change the information about the player in order to update him, then click the "Edit" button to make these changes happen.

#### DELETE Request

  - mlbPlayers/v1/delete/{firstName}/{lastName}/{number}/{team}
    - This DELETE request endpoint will delete a single player with the information {firstName} {lastName} {number} and {team} have (If a player with this information exists).
    - All of these values must be included or a player will not be deleted, you cannot delete players just based on first name and last name.
    - Example of deleting a player : mlbPlayers/v1/delete/Aaron/Judge/99/New York Yankees , this will delete Aaron Judge with the number 99 on the New York Yankees from the database.
  - Through the front-end click the "Delete" icon or the trash can next to a players name and click the "Delete" button in order to delete this player and make these changes happen.