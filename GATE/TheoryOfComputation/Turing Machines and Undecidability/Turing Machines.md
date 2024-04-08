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

- A language $L$ is recursive enumerable (RE) iff there exists a Turing machine $M$ such that $L = L(M)$.
- The language of Turing machine is always recognizable.

> [!convention] 
> RE = Recursive Enumerable
> REC = Recursive
> RE - REC = RE but not REC

## Decider and Decidable

- A language $L$ is decidable, if it accepts or rejects a string within a finite amount of time.
- The informal notion of an [[Algorithms]] corresponds exactly to a Turing Machine that halts on all inputs.
- Halting Turing machine is less powerful than Turing machine.
- A language $L$ is recursive (REC) or decidable iff there exists a halting turing machine $M$ such that $L(M) = L$.
- Every Halting Turing machine is a Turing machine i.e. Every decider is a recognizer, but every turing machine is not a decider.
- If a language is recursive, then its corresponding decision problem is called decidable.
- If a decision problem is decidable, then its corresponding language is called recursive.

> [!discussion] Lecture 12B
> ![[Turing Machines-20240211153558544.webp]]

## Encoding of Alphabet
- Input to a turing machine is a string of symbols over an alphabet.
- Encodings are basically strings of symbols over an alphabet. The encoding alphabet can be of our choice. 
- For a finite mathematical object $M$, we will use $\langle M \rangle$ to denote the encoding of $M$ as a string. The exact details of the encoding won't matter.
- Any finite object can be encoded into any encoding over any alphabet (unary, binary, ternary, $\ldots$)
- Any n-ary encoding can be converted into any n-ary encoding by Turing machine. Thats why any finite object can be encoded over any n-ary alphabet.
- Finite representations are made for class of languages.
- Finite representations (DFA, NFA) are created for regular languages that are infinite i.e. $\Sigma^\ast$
- There are algorithms to convert one finite representation of a class of languages into another finite representation of same class of languages.

## High Level Descriptions


---

> [!youtube] 
> [Lecture 2 - Turing Machine Design | Theory of Computation - YouTube](https://www.youtube.com/watch?v=zx4YHLWA46w)
> [Lecture 4 - Some Conjectures | Goldbach Conjecture | 3x+1 Conjecture | Theory of Computation - YouTube](https://www.youtube.com/watch?v=urSoOs3CPvQ)
> [Lecture 8 - Revision - Story So Far - Turing Machines | Theory of Computation - YouTube](https://www.youtube.com/watch?v=WzF5J_PTxpw)
