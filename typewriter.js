const sentence = 'hello there from lighthouse labs';
let time = 150;
const increase = 30;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += increase;
}

setTimeout(() => {
  console.log();
}, time);
