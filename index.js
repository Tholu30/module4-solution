const names = ['John', 'Jane', 'Jim', 'Jimmy', 'Joan'];

names.forEach(function(name) {
  if (name[0].toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
});
