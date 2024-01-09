---
pdf: lec-19
module: 1
lecture: "19"
date: 2024-01-08T14:32:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/FiniteAutomata
---
# Myhill Nerode Theorem

## Proving Non-Regular Language
> [!youtube] Lecture-19A
> [Proving Non-Regular Language Part 1 | Myhill Nerode Theorem | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=OYVR64fulL4)

- If there are infinite possibilities to keep track of, then that language is non-regular.

![[Myhill Nerode Theorem-20240109104117572.webp]]

- Create a set $S$ such that if any two strings of $S$ go to the same state then there exists some extension which creates a problem.

## Distinguishable Strings
- In a language $L$, two strings $u, w \in \Sigma^\ast$ and that $\exists y \in \Sigma^\ast$ such that $wy \in L$ and $uy \not\in L$, then the two strings $uy$ and $wy$ are **distinguishable strings** by $L$ and $y$ is the distinguishing extension.
- If we can find some infinite set of pairwise distinguishable strings in a language $L$, then $L$ is non-regular.