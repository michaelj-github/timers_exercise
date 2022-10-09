# Timers Exercise

## Summary

Two simple exercises on JavaScript setInterval() and clearInterval()

## Solution notes

Open index.html in a brower, and/or

Invoke countDown() from terminal with an integer like:

    countdown(4)

Invoke randomGame() from terminal with no argument like:

    randomGame()

## Exercise requirements

countdown

Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

```
countDown(4);
// 3
// 2
// 1
// "DONE!"
```

randomGame

Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
