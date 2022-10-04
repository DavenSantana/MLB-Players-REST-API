document.getElementById("quoteButton").addEventListener("click", () => {

    var req = new XMLHttpRequest();
    var kanyeQuote = "";

    req.open("GET", "https://api.kanye.rest"); 
    req.onreadystatechange = function () {
    
        if(req.readyState == 4){
            kanyeQuote = JSON.parse(req.responseText);
            kanyeQuote = kanyeQuote.quote;
            document.getElementById("quote").innerHTML = kanyeQuote;
        }
    } 
    
    req.send(); 
});