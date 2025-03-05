async function fetchGames() {
    try {
        // Fetch API brukes for å hente data fra URLen
        let response = await fetch('/getgames/'); // Hente brukere fra studietidDB
        let data = await response.json(); // Konverterer responsen til JSON
 
        // Nå må vi iterere gjennom data.results, ikke data direkte
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].navn);
            makeButton(data[i].navn);
        }
        return data
    } catch (error) {
        console.error('Error:', error); // Håndterer eventuelle feil
    }
};
fetchGames();

//for each game make a button
function makeButton(navn) {
    let gameName = navn.replace(/ /g, "_");
    const btn = document.createElement("button");
    btn.innerHTML = navn;
    btn.onclick = function() {
        window.location.href = `./${gameName}/${gameName}.html`;
    };
    document.body.appendChild(btn);
}
