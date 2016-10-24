class Pokomo {
  wow() {
    alert('wow! wow!');
  }
}

class Monster extends Pokomo {
  constructor(name, image, hp, type) {
    super();
    this.name = name;
    this.image = image;
    this.hp = hp;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getImage() {
    return this.image;
  }

  getHP() {
    return this.hp;
  }

  getType() {
    return this.type;
  }

  setHurt(value) {
    this.hp -= value;
  }

  isAlive() {
    if(this.hp > 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default Monster;