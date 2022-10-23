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
                        ${livingBeing.species !== 'human' ? livingBeing.facts[Math.floor(Math.random() * livingBeing.facts.length)]: ''}
                    </p>
                </div>
            `);
        });
    }

    this.shuffleTiles = function shuffleTiles() {
        //Let find the human tile here and shift it as it has to be in the middle and we want to compare it to other dinosaurs
        let humanIndex = this.tiles.findIndex(livingBeing => livingBeing.species === 'human');

        for (let i = this.tiles.length - 1; i > 0; i--) {
            const comparisonResult = this.tiles[humanIndex].compareName(this.tiles[i]);

            switch(comparisonResult) {
                case 0:
                    this.tiles[i].facts.unshift('We have the same name');
                    break;
                case 1:
                    this.tiles[i].facts.unshift('My name comes before yours');
                    break;
                case -1:
                    this.tiles[i].facts.unshift('My name comes after yours');
                    break;
                default:
                    alert('Something went wrong');
            }

            const j = Math.floor(Math.random() * (i + 1));
            [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
        }

        //index have probably changed, we need to recompute it, did not find another solution
        humanIndex = this.tiles.findIndex(livingBeing => livingBeing.species === 'human');

        if (humanIndex >= 0) {
            [this.tiles[4], this.tiles[humanIndex]] = [this.tiles[humanIndex], this.tiles[4]];
        }
    }
}