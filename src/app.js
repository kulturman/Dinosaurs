import { LivingBeing } from './living-being';
import { TileManager } from './tile-manager';

const formElement = document.querySelector('#dino-compare');
const nameElement = document.querySelector('#name');
const dietElement = document.querySelector('#diet');
const inchesElement = document.querySelector('#inches');
const weightElement = document.querySelector('#weight');

formElement.addEventListener('submit', e => {
    e.preventDefault();
    formElement.style.display = 'none';
    
    const human = new LivingBeing(
        'human', nameElement.value, weightElement.valueAsNumber,
        inchesElement.valueAsNumber, dietElement, 'Probably first in Africa',
        'Prehistory', ['']
    );

    fetch('./dino.json')
        .then(response => response.json())
        .then(({ Dinos: dinos }) => {
            const livingBeings = dinos.map(dino => new LivingBeing(
                //We use species name as name
                dino.species, dino.species, dino.weight,
                dino.height, dino.diet, dino.where,
                dino.when, dino.facts
            ));
            livingBeings.push(human);

            const tileManager = new TileManager(livingBeings);
            tileManager.shuffleTiles();
            tileManager.displaysTiles();

        })
})