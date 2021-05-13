<readline>
The readline module provides an interface for reading data from a readable stream (such as process.stdin) one line at a time. It can be accessed using:

const readline = require('readline');

the following example is a basic use of the readline module.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

<stdin>
process.stdin
le estoy diciendo a node que voy a tener que pausar la aplicacion y esperar unos caracteres y el enter del usuario.

<stdout>
process.stdout
para mostrar algun mensaje en consola 


