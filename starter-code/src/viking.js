// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}

	attack () {
		return this.strength;
	}
	receiveDamage (damage) {
		this.health -= damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}

	receiveDamage (damage) {
		this.health -= damage;
		if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
		if (this.health <= 0) return `${this.name} has died in act of combat`;
	}

	battleCry () {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {


	attack () {
		return this.strength;
	}

	receiveDamage (damage) {
		this.health -= damage;
		if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
		if (this.health <= 0) return `A Saxon has died in combat`;
	}
}

// War
class War {
	vikingArmy = [];
	saxonArmy = [];

	addViking (Viking) {
		this.vikingArmy.push(Viking);
	}

	addSaxon (Saxon) {
		this.saxonArmy.push(Saxon);
	}

	vikingAttack () {
		let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    	let viking = this.vikingArmy[randomViking];
    	let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    	let saxon = this.saxonArmy[randomSaxon];

    	let hurtSaxon = saxon.receiveDamage(viking.strength);

    	if (saxon.health <= 0) {
    		this.saxonArmy.splice(saxon, 1);
    	}
    	return hurtSaxon;
	}

	saxonAttack () {
		let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    	let viking = this.vikingArmy[randomViking];
    	let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    	let saxon = this.saxonArmy[randomSaxon];


    	let hurtViking = viking.receiveDamage(saxon.strength);

    	if (viking.health <= 0) {
      		this.vikingArmy.splice(viking, 1);
    	}
    	return hurtViking;
	}

}


