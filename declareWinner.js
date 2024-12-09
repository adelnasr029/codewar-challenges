/ func takes 3 params, fighter1 & fighter2 are obj, third == str name one of the 2 fighters 
// 3 params first 2 are new instance each instance with 3 props, third is str
// return str represent the name of the winner based on comparison bt health, damage per attack
//declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew"
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
        if (fighter1.health <= 0) return fighter2.name
        if (fighter2.health <= 0) return fighter1.name
      
        return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
}


console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"))