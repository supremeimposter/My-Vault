---
pdf: 
module: 1
lecture: 15B
date: 2023-12-30T11:24:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/FiniteAutomata
---
# Equivalence of DFA and NFA

- If a language $L$ is recognized by a DFA, then $L$ is also recognized by some NFA.
- If a language $L$ is recognized by a NFA, then $L$ is also recognized by some DFA.

## DFA to NFA Conversion
- Every DFA essentially already is an NFA.
- Any language that can be accepted by a DFA can be accepted by an NFA.

## NFA to DFA Conversion
- To convert an NFA to DFA, the DFA simulates the properties of NFA.
- This algorithm is called Subset Construction algorithm.

> [!NOTE]
> This algorithm is not used for solving pyqs, but the concept is important
- When there are null moves in the given NFA, do the following to convert to DFA for every transaction.
	- To check the transition $(q, a)$
	![[Equivalence of DFA and NFA-20231231121940064.webp]]


- The initial state of DFA from NFA is the $\epsilon$-closure of the initial state in the NFA.
- All the states containing the final state in the given NFA is also the final state in DFA.
- Subset construction algorithm will give a maximum of 1 dead state $\phi$

- Every non-deterministic finite automaton has an equivalent detereministic finite automaton.
- A language is regular iff some NFA recognizes it.