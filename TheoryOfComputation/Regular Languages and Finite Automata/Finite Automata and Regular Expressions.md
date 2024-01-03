---
pdf: 
module: 1
lecture: "17"
date: 2024-01-02T19:56:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/FiniteAutomata
---
# Finite Automata and Regular Expressions
## Equivalence of FA and RE
- For every regular language $L$, there is some NFA with single final state.
- For every NFA or DFA, there is an equivalent Regular Expression.

## Converting FA to RE

- When focusing on a state, remove the states between the initial and the desired states and make a connection with a regular expression.
- Language of the automata is the union of language of final states.

> [!NOTE] 
> Focus only on the final state.

### Unary Alphabet DFA Analysis
$$
\Sigma = \{ a \}
$$
- Assume that there are no unreachable states

### Guidelines to find language of a state



> [!discussion] 
> ![[Finite Automata and Regular Expressions-20240103182032402.webp]]



> [!youtube] 
> [Lecture 17F - Equivalence of RE and FA - Part 6 - The Two Templates | Theory of Computation - YouTube](https://www.youtube.com/watch?v=YcLL5t4SJHY)
