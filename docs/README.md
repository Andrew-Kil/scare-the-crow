# Scare the Crow

Scare the Crow is my implementation of the classic word game, [Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>). Halloween is right around the corner so I wanted to combine that theme with the story of how, at one point in my life, a crow in my neighborhood used to dive-bomb me for no apparent reason!

The objective of this game is to guess the randomly picked secret word using 6 or less guesses. The user plays the role of a scarecrow with 6 HP (hit points or health points). Each time the player guesses incorrectly, the crow dive-bombs the scarecrow, dealing damage equivalent to 1 HP. If the user guesses the secret word correctly, with HP remaining, the scarecrow successfully scares the crow away! If not, the crow defeats the scarecrow!

# Prerequisites

- [node](https://nodejs.org/en/)

# Installation

1. <b>cd scare-the-crow</b>

- navigate to scare-the-crow directory

2. <b>npm install</b>

- install dependencies

3. <b>npm start</b>

- run dev server

4. <b>http://localhost:3000/</b>

- app should be viewable in browser

# Wireframe

![Scare the Crow](scare-the-crow.png)

# M.V.P. - Minimum Viable Product

- [x] Display the length of the secret word
- [x] Correct guesses will show all occurrences of that letter
- [x] Incorrect guesses will decrement the number of guesses by 1
- [x] Display a list of incorrect guesses
- [x] Display the number of guesses remaining
- [x] Retrieve a list of words from the word dictionary REST API

# Additional features - for consideration

- [x] 'New Game' option
- [ ] App is hosted online
- [ ] Responsive design
- [ ] Additional options for difficulty:
  - [ ] Countdown timer, for example:
    - X Seconds to pick a letter
    - X Seconds to reveal the secret word
  - [x] Choose difficulty:
    - Easy - X HP
    - Normal - X HP
    - Hard - X HP
    - Helloween - X HP
  - [ ] Use API parameters to choose more difficult words
- [ ] Scoring system
  - X Lives, X HP each
  - Points scale based on number of guesses or time remaining
- [ ] Option to guess the secret word instead of one letter at a time
- [ ] Scarecrow diagram
  - Opposite of Hangman: Scarecrow diagram appears at start of game and loses a body part every time it takes damage
- [ ] Hints
  - Reveal a letter at the cost of points or deduct from total hints remaining
- [ ] Buffs
  - When activated, user can guess as many times within X seconds without penalties
- [ ] Potions
  - When activated, user regains X HP
  - Obtained randomly or X amount of levels

# Todo List

| Task                                                                    | Completed | Priority |
| :---------------------------------------------------------------------- | :-------: | -------: |
| Guess should only be one character                                      |    ✅     |     High |
| Guess should be lowercase                                               |    ✅     |     High |
| Guess should be a letter                                                |    ✅     |     High |
| Guess should not accept previous guess                                  |    ✅     |     High |
| Refactor win condition to start new round instead of "Victory!" text    |    ⬜️    |     High |
| Refactor lose condition to show stats & image instead of "Defeat!" text |    ⬜️    |     High |
| Incorporate local storage to save data                                  |    ⬜️    |   Medium |
| Track and display score                                                 |    ⬜️    |   Medium |
| Use API URL parameters to increase/decrease difficulty                  |    ⬜️    |   Medium |
| Update font (Halloween theme)                                           |    ⬜️    |      Low |
| Add colors (Halloween theme)                                            |    ⬜️    |      Low |
| Add option for hints (TBD)                                              |    ⬜️    |      Low |
| Add option for buffs (TBD)                                              |    ⬜️    |      Low |
| Add option for potions (TBD)                                            |    ⬜️    |      Low |
| Update scarecrow based on HP                                            |    ⬜️    |      Low |
| Unique theme/color for difficulty level                                 |    ⬜️    |      Low |
| Add about/info text                                                     |    ⬜️    |      Low |
| Add sound for valid/invalid guess and/or victory/defeat                 |    ⬜️    |      Low |
| Add tips (e.g. use vowels 'a','e','i','o','u')                          |    ⬜️    |      Low |
