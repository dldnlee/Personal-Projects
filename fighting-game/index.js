const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 0.25;

class Sprite {
  constructor({ position, velocity, color, offset }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
    this.width = 50;
    this.lastKey;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset,
      width: 100,
      height: 50
    }
    this.color = color;
    this.isAttacking
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);


     // attack box
    if (this.isAttacking) {
      c.fillStyle = 'green';
      c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
    }
  }

  gravity() {
    this.velocity.gravity += gravity;
  }

  collision() {
    if(this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
      
    } else if(this.position.y + this.velocity.y <= 0) {
      this.position.y += 10;
      this.velocity.y += gravity;
    } else if(this.position.x + this.velocity.x <= 10) {
      this.position.x = 10;
      this.velocity.y += gravity;
    } else {
      this.velocity.y += gravity;
    }
  }

  update() {
    this.draw();
    
    this.attackBox.position.x = this.position.x
    this.attackBox.position.y = this.position.y

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.collision();
  }

  // attacking function
  attack() {
    this.isAttacking = true
    setTimeout(() => {
      this.isAttacking = false
    }, 200)
  }
}


// create player sprite
const player = new Sprite({
  position: {
  x: 200,
  y: 100
  },
  velocity: {
    x: 0,
    y: 1
  },
  color: 'blue',
  offset: {
    x: 0,
    y: 0
  }
})


// create enemy spirt
const enemy = new Sprite({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 400,
    y: 1
  },
 
  color: 'red',
  offset: {
    x: 0,
    y: -50
  }
})



// key init
const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  ArrowRight : {
    pressed: false
  },
  ArrowLeft : {
    pressed: false
  }, 
  ArrowUp : {
    pressed: false
  }
}

let lastKey;

function animate() {
  // animation recursive function
  window.requestAnimationFrame(animate)

  // fill canvas
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height)

  // call required functions
  spriteMovement();
  player.update();  
  enemy.update();
  
}

function spriteMovement() {

  player.velocity.x = 0;
  enemy.velocity.x = 0;
  // player movement
  if(keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5;
  } else if(keys.a.pressed && player.lastKey == 'a') {
    player.velocity.x = -5;
  } 

  // enemy movement
  if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5;
  } else if(keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight') {
    enemy.velocity.x = 5;
  }
}

// function spriteCollision() {
//   if (player.attackBox.position.x + player.attackBox.width >= enemy.position.x && player.attackBox.position.x <= enemy.position.x + enemy.width && 
//     player.attackBox.position.y + player.attackBox.height >= enemy.position.y && player.attackBox.position.y <= enemy.position.y + enemy.height && player.isAttacking) {
//     player.isAttacking = false;
//     console.log('go')
//   } else if(player.position.x <= 0) {
//     player.position.x += 5;
//   } else if(player.position.x + player.width >= canvas.width) {
//     player.position.x -= 5;
//   } else if(enemy.position.x <= 0) {
//     enemy.position.x += 5;
//   } else if(enemy.position.x + enemy.width >= canvas.width) {
//     enemy.position.x -= 5;
//   }
// }

animate();

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = true;
      player.lastKey = 'd';
      break;
    case 'a':
      keys.a.pressed = true;
      player.lastKey = 'a';
      break
    case 'w':
      keys.w.pressed = true;
      player.velocity.y = -10;
      break;a
    case ' ':
      player.attack();
      break;

    case 'ArrowRight':
      keys.ArrowRight.pressed = true 
      enemy.lastKey = 'ArrowRight' 
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true 
      enemy.lastKey = 'ArrowLeft' 
      break;
    case 'ArrowUp':
      enemy.velocity.y = -10;
      break;
  }
  console.log(event.key);
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 'w':
      keys.w.pressed = false;
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
    case 'ArrowUp':
      keys.ArrowUp.pressed = false;
  }
  console.log(event.key);
})


