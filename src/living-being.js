export function LivingBeing(species, name, weight, height, diet, where, when, facts) {
    this.species = species;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.facts = facts;

    this.compareName = function compareName(compareTo) {
        if (this.name.toLowerCase() < compareTo.name.toLowerCase()) {
            return -1;
        }
        else if (this.name.toLowerCase() > compareTo.name.toLowerCase()) {
            return 1;
        }

        return 0;
    }

    this.compareWeight = function compareWeight(compareTo) {
        if (this.weight < compareTo.weight) {
            return -1;
        }
        else if (this.weight > compareTo.weight) {
            return 1;
        }

        return 0;
    }

    this.compareHeight = function compareHeight(compareTo) {
        if (this.height < compareTo.height) {
            return -1;
        }
        else if (this.height > compareTo.height) {
            return 1;
        }

        return 0;
    }
}
