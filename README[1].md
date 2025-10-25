# Christian Card Game

A simple faith-based card game using Python. Cards are image-based and can be shuffled, drawn randomly, or drawn from the top.

## Features
- Shuffle a deck of Christian-themed cards
- Pick a random card for inspiration
- Draw from the top of a shuffled deck
- Display game instructions

## Setup

```bash
pip install pillow
python -m unittest discover -s tests
```

## GitHub Actions
Includes a CI workflow that runs tests on every push to the `main` branch.

## Usage

```python
from game.card_game import ChristianCardGame

game = ChristianCardGame("/path/to/card/images")
game.shuffle_deck()
print(game.pick_random_card())
print(game.show_instructions())
```
