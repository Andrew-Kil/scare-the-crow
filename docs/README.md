# Scare the Crow

Scare the Crow is my implementation of the classic word game, [Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>). Halloween is right around the corner so I wanted to combine that theme with the story of how, at one point in my life, a crow in my neighborhood used to dive-bomb me for no apparent reason!

The objective of this game is to guess the randomly picked secret word using 6 or less guesses. The user plays the role of a scarecrow with 6 HP (hit points or health points). Each time the player guesses incorrectly, the crow dive-bombs the scarecrow, dealing damage equivalent to 1 HP. If the user guesses the secret word correctly, with HP remaining, the scarecrow successfully scares the crow away! If not, the crow defeats the scarecrow!

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
| Guess should only be one character                                      |   True    |     High |
| Guess should be lowercase                                               |   True    |     High |
| Guess should be a letter                                                |   True    |     High |
| Guess should not accept previous guess                                  |   True    |     High |
| Refactor win condition to start new round instead of "Victory!" text    |   False   |     High |
| Refactor lose condition to show stats & image instead of "Defeat!" text |   False   |     High |
| Incorporate local storage to save data                                  |   False   |   Medium |
| Track and display score                                                 |   False   |   Medium |
| Update font (Halloween theme)                                           |   False   |      Low |
| Add colors (Halloween theme)                                            |   False   |      Low |
| Add option for hints (TBD)                                              |   False   |      Low |
| Add option for buffs (TBD)                                              |   False   |      Low |
| Add option for potions (TBD)                                            |   False   |      Low |
| Update scarecrow based on HP                                            |   False   |      Low |
| Unique theme/color for difficulty level                                 |   False   |      Low |
| Add about/info text                                                     |   False   |      Low |
| Add sound for valid/invalid guess and/or victory/defeat                 |   False   |      Low |
