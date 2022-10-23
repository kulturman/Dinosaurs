export function TileManager(tiles) {
    this.rootElement = document.querySelector('#grid');
    this.tiles = tiles;

    this.displaysTiles = function displaysTiles() {
        tiles.forEach(livingBeing => {
            this.rootElement.insertAdjacentHTML('afterbegin', `
                <div class="grid-item">
                    <h3>${livingBeing.name || livingBeing.species}</h3>
                    <img src="./images/${livingBeing.species.toLowerCase()}.png" alt="" class="animal__image">
                    <p>
                        ${livingBeing.facts[Math.floor(Math.random() * livingBeing.facts.length)]}
                    </p>
                </div>
            `);
        });
    }

    this.shuffleTiles = function shuffleTiles() {
        for (let i = this.tiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
        }
        //Let find the human tile here and shift it as it has to be in the middle
        let humanIndex = this.tiles.findIndex(livingBeing => livingBeing.species === 'human');

        if (humanIndex >= 0) {
            [this.tiles[4], this.tiles[humanIndex]] = [this.tiles[humanIndex], this.tiles[4]];
        }
    }
}