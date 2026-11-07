# Calculator
# Calculator

An on-screen calculator built with HTML, CSS, and vanilla JavaScript. It is the final project of the Foundations course in [The Odin Project](https://www.theodinproject.com/).

## Live demo
[view the site]()
## Features

- Basic operations: add, subtract, multiply, divide, and power (`x^`)
- Two-line display: the expression on top, the current number or answer below
- Chained operations: `12 + 7 - 1 =` evaluates one pair at a time and gives `18`
- Pressing two operators in a row replaces the first one instead of calculating
- Decimal input with only one `.` allowed per number
- Long decimals are rounded to 5 places so they fit the display
- Divide by zero shows an error message instead of crashing
- `AC` clears everything and `⌫` deletes the last digit
- Typing a digit after a result starts a new calculation
- Keyboard support
- Responsive layout

## Built with

- HTML
- CSS (flexbox and grid)
- JavaScript (no `eval()` or `new Function()`, the calculation logic is written by hand)

## Project structure

```
Calculator/
├── index.html
├── style.css
└── clc.js
```

## Run it locally

1. Clone the repository.
2. Open `index.html` in your browser.

## What I learned

- Storing and updating state (first number, operator, current number) across button clicks
- Handling edge cases: missing numbers, repeated operators, divide by zero, and multiple decimals
- Selecting elements with `data-` attributes and attaching event listeners in a loop
- Laying out a button grid with CSS grid
- Reusing existing click logic for keyboard support with `.click()`

## Author

Meseret - [GitHub](https://github.com/Rezuana24-git)