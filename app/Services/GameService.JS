import { ProxyState } from ".AppState.js"

class GameService {
    slap() {
        ProxyState.enemy.health--
        ProxyState.enemy = ProxyState.enemy

    }
}