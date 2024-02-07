---
pdf: 
module: 5
lecture: 1, 2, 3
date: 2024-02-04T10:38:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/TuringMachine
---
# Turing Machines
> [!attention] 
> Since there are many different definitions for Turing machine in various resources, questions are mostly avoided from TM. Only one standard definition is followed here which has been followed at IISc and Stanford.

> [!remember] 
> - Accepting a string is similar to solving a computational problem.
> - Turing Machine is the most powerful computational machine.
> - Turing Machine is not a physical machine.

- Turing Machine (TM) = FA + Infinite tape
- Tape is ***not*** the input tape. Tape is a data structure of infinite number of cells for turing machine.
- TM has a finite set of states.
- TM has a unique initial state, a unique final state and a unique rejecting state.

| Input Tape | Tape |
| ---- | ---- |
|  |  |
| ![[Turing Machines-20240204141806370.webp]] | ![[Turing Machines-20240204141812202.webp]] |

| Finite Automata | Turing Machine |
| --- | --- |
|  |  |

- Turing Machines are deterministic.

> [!NOTE] 
> Statements such as "Every DFA is a TM", "Every PDA is a TM" signifies lack of knowledge or a lack in understanding.

- Any string will be accepted or rejected on any number of steps (transitions) regardless of the length of the string.
- In any turing machine, the unreachable states from the initial state can be safely removed.

- Looping does not only mean that some configuration is repeating, but the turing machine is never halting.
- We cannot say whether some program will halt or not.

## Decider and Decidable

- A language $L$ is decidable, if it accepts or rejects a string within a finite amount of time.


---

> [!youtube] 
> [Lecture 2 - Turing Machine Design | Theory of Computation - YouTube](https://www.youtube.com/watch?v=zx4YHLWA46w)
> [Lecture 4 - Some Conjectures | Goldbach Conjecture | 3x+1 Conjecture | Theory of Computation - YouTube](https://www.youtube.com/watch?v=urSoOs3CPvQ)
> [Lecture 8 - Revision - Story So Far - Turing Machines | Theory of Computation - YouTube](https://www.youtube.com/watch?v=WzF5J_PTxpw)
