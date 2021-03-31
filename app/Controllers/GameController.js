import { ProxyState } from "../AppState.js"

/** renders enemey to the page */
function _draw() {
    let enemy = ProxyState.enemy
    document.getElementById('enemy').innerHTML =/**html*/`
    
    <div class="card">
        <img class="card-img-top" src="${enemy.ImgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${enemy.name}</h4>
            <p class="card-text">${enemy.health}</p>
            <button class='btn btn-danger' onclick='app.GameController.slap()'
        </div>
    </div>
    
    `
}

export default class GameController {
    constructor() {

        ProxyState.on('enemy', _draw)
        _draw()
    }
    slap() {
        gameService.slap()
    }
}