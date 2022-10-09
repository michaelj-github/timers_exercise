// accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it.
// Once the value is 0 it logs “DONE!” and stops

const countDown = (n) => {
    const id = setInterval(() => {
      n--;
      if (n === 0) {
        clearInterval(id);
        console.log("DONE!");
      } else {
        console.log(n);
      }
    }, 1000);
  };
  console.log("count down from 4", countDown(4))


  // selects a random number between 0 and 1 every 1000 milliseconds
  // each time a random number is picked, add 1 to the counter.
  // If the number is greater than .75, stop the timer and console.log the number of tries it took.
  const randomGame = () => {
    let i = 0;
    const id = setInterval(() => {
      const n = Math.random();
      i++;
      if (n > 0.75) {
        clearInterval(id);
        console.log("tries = ", i);
      }
    }, 1000);
  };

  console.log("random game", randomGame())