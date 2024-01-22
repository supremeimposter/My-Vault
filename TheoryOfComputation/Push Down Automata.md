---
pdf: 
module: 2
lecture: "2"
date: 2024-01-19T21:30:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/PDA
---
# Push Down Automata
> [!youtube] 
> [Lecture 2A - Push Down Automata PDA | Idea, Definition, Rules | Theory of Computation - YouTube](https://www.youtube.com/watch?v=n_get5pyyGk)

- PDA = NFA + Infinite Stack
- By default, PDA is non-deterministic i.e. $PDA \equiv NPDA$

> [!tip] 
> For PDA, take some strings and analyze.

## PDA Moves

- Do not remove the $Z_0$ from the bottom of the stack.
- The string is pushed into the stack from right to left
![[Push Down Automata-20240122102726246.webp]]
- Only the top of the stack (one symbol) can be read at a time.
- When the top of the stack is not read, then there is no need to remove the top of the stack.
- Even without reading the top of the stack, a string can be inserted into the stack and update the top of the stack.
- When the string ends in the final state, the content of the stack does not matter.

> [!youtube] 
> [Lecture 36 - PDA Analysis | Understanding PDA Transitions | Understanding Non-Determinism |Goclasses - YouTube](https://www.youtube.com/watch?v=fhLnSEQ4zLs)

## Designing PDA
> [!youtube] 
> [PDA Design Example 1 - a^nb^n Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=Kj2RyeOXqr8)

![[Push Down Automata-20240122202220139.webp]]


