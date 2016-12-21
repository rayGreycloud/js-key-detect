const pressed = [];
const secretCode = 'unicorn';
// Listen for key presses
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);

  // Trim to code length
  const start = -secretCode.length - 1;
  const deleteCount = pressed.length - secretCode.length;

  pressed.splice(start, deleteCount);
  if (pressed.join('').includes(secretCode)) {
    console.log('Unicorn!');
    cornify_add();
  }
  console.log(pressed);
});
