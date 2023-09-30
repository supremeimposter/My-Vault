---
pdf: lec-5-7A
module: 1
lecture: "6"
date: 2023-09-28T23:53:00
version: TOC-24
---
- Theory of Computation creates a mathematical machine that **recognises or accepts languages**.
- Recognising languages is an abstract way of solving computational problems.
- Mathematical machine has a set of mathematical rules that we define.
- Physical computational models include calculator, fingers for counting, CPU, computers, etc...

## Automata

- Mathematical models of computational devices are called **automata**.
- Computers are messy but automata are clean.
- Automata makes it possible to reason about computability by abstracting away the implementation complexity of real computing systems.
- **Turing Machine** is the most powerful model of computation.
- It has infinite space and time for computation.
- When features are removed one by one from the Turing Machine, certain automata are created and they are Finite Automata, Push Down Automata, Linear Bounded Automata, etc...

### Language of the Automata

- Set of ALL and ONLY strings which are acceptable by the automata $A$ is called the language of $A$ denoted by $\mathscr{L}(A)$.
- Only strings which lead to the final or desired state after scanning all the symbols are accepted by the machine.
- Automata are called accepter as they accept only the strings which are from the language $\mathscr{L}(A)$.
- The result of an Automaton are either YES or NO.