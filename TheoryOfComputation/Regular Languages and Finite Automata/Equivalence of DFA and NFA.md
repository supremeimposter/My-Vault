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
