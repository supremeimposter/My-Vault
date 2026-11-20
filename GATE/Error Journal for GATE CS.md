---
tags:
  - GATE/Guidelines
---
# Error Journal for GATE CS

## Finite Automata and Regular Languages

- Try to figure out what might be the states possible for the given language and how the input traversal changes states. It will give you a rough idea to work on quickly.
- Use counter strings to eliminate options everytime.
- FA's only remembers the symbol it has read just now and know only what to look for next. Keep this in mind, it makes constructing DFA's easier.
- You keep forgetting to include null closures at the end for NFA to DFA conversion method.

![[Guidelines to GATE-CS-1747503839151.webp]]


## Combinatronics

- Don't forget to use subtraction rule in atleast cases where the upper bound is much larger i.e. (total - atmost k cases).
- Think of product rule when there are independent tasks. Indepenent tasks are which, each of the boxes do not care about other boxes. Product rule always hits here.
- See if laying out the choices of each elements makes some sense.