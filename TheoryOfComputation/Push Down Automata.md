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

> PDA = NFA + Infinite Stack
- By default, PDA is non-deterministic.
## PDA Moves

- Do not remove the $Z_0$ from the bottom of the stack.
- The string is pushed into the stack from right to left
![[Push Down Automata-20240122102726246.webp]]
- Only the top of the stack (one symbol) can be read at a time.
- When the top of the stack is not read, then there is no need to remove the top of the stack.
- Without reading the top of the stack, a string can be inserted into the stack.


> [!timer] 
> Resume 21:34
