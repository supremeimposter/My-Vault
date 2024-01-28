---
pdf: 
module: 2
lecture: 2, 3
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
- PDA ($Q, \Sigma, q_0, F, \delta, Z, \Gamma$) 

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
$$
Transition = \text{read from tape}, \;\text{pop from stack} \mid\text{push into stack}
$$

> [!youtube] 
> [Lecture 36 - PDA Analysis | Understanding PDA Transitions | Understanding Non-Determinism |Goclasses - YouTube](https://www.youtube.com/watch?v=fhLnSEQ4zLs)

## Designing PDA
> [!youtube] 
> [PDA Design Example 1 - a^nb^n Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=Kj2RyeOXqr8)
> [PDA Design Example 2 - a^nb^n+1 Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=I6nx_FQjc8I)
> [PDA Design Example 3 - a^nb^m Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=oMCMGDAWPA8)
> [PDA Design Example 4 - a^nb^m Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=iFZe54M3Gjw)
> [PDA Design Example 5 - a^nb^m Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=8mskmfpUeAs)
> [PDA Design Example 6 - a^nb^2n Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=4WaCRkNCnfQ)
> [PDA Design Example 7 - a^2nb^n Language Pushdown Automata | GO Classes | Deepak Poonia Sir - YouTube](https://www.youtube.com/watch?v=zDObER-zvbs)

![[Push Down Automata-20240122202220139.webp]]



> [!doubt] Example 3
> ![[Push Down Automata-20240123115422283.webp]]


> [!youtube] 
> [Lecture 2D - PDA Design More Examples | Nondeterminism in Pushdown Automata | Theory of Computation - YouTube](https://www.youtube.com/watch?v=WTxOPICsl4I)

## PDA Definition


## Two Models of PDA

1. Empty stack acceptance - after reading the string, when the stack is empty, then it is accepted, regardless of the final states.


> [!important] 
> In any model of PDA, a string must be completely consumed to decide the acceptance.

## Deterministic PDA
- PDA with no chance of determinism.
- Non-determinism in PDA is determined by both the current symbol on the input tape and the symbol in the top of the stack.


> [!discussion] 
> ![[Push Down Automata-20240126091354375.webp]]


> [!info] 
> DPDA with empty stack acceptance is author-dependent. So questions on such things will NOT be asked.
