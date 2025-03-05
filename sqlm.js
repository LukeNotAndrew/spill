// sqlm.js
const sqlite3 = require('better-sqlite3')
global.db  = sqlite3('./spill.db', {verbose: console.log})



function getGames() {
    console.log('getGames')
    const sql = global.db.prepare('select idSpill, navn  from Spill');
    let games = sql.all()  
    return games
}

function addResult(idUser, idGame, result) {
    sql = global.db.prepare("INSERT INTO leaderboard (idUser, idGame, idResult) " +
        "values (?, ?, ?)")
const info = sql.run(idUser, idGame, result)


return row
}


module.exports = {
    addResult,
    getGames
 
};