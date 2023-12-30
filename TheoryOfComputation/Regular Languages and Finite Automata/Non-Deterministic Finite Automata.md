---
pdf: lec-13A-14D, lec-14E-14I, lec-15A, lec-15B
module: 1
lecture: 14, 15
date: 2023-12-28T09:01:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/FiniteAutomata
---
# NFA
- An NFA is a Non-deterministic Finite Automaton which is conceptually similar to a DFA, but equipped with the vast power of non-determinism.
- After reading the ENTIRE string, if there is some path (at least one) to the some final state, then the string is accepted by NFA.

## Understanding NFA

> [!header] Tree Computation

> [!header] Perfect Guessing


> [!NOTE]
> Guessing is the best approach. It is more useful and popular.


> [!header] Massive Parallelism
 

## Designing a NFA
> [!youtube] [Lecture 14D - Designing NFA | Non-Deterministic Finite Automata | Theory of Computation - YouTube](https://www.youtube.com/watch?v=kBcxKKx6Vbw)


## Null Transition
- In NFA, there is a special type of transition called Null transition.
- A null move is a move without reading or consuming or scanning any symbol.
- A Null move is not a Null string, through the symbol is same. It is represented by $\epsilon$

````col
```col-md
flexGrow=1
===
### Null Move
In Transition function $\delta (q, \epsilon)$, $\epsilon$ is a null move
```
```col-md
flexGrow=1
===
### Null String
In Extended Transition function $\delta^\ast (q, \epsilon)$, $\epsilon$ is a null string
```
````



## NFA Definition


## Epsilon Closure

- $\epsilon$-closure of a state $q$ is the set of all states we can go from $q$ without consuming any symbol.
- All the states reachable via epsilon transitions from a state $q$.


## Transition Function in NFA
- This is an edge function.
- Since NFAs have [[#Null Transition]], $\delta\;(q, \epsilon)$ is a valid transition.

## Extended Transition Function in NFA

- $\delta^\ast\; (q, \epsilon) = \epsilon$-close $(q)$  
