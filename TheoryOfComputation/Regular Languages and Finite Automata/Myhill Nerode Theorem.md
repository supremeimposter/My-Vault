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

> [!pdf] Go to lec-19E first

## Proving Non-Regular Language
> [!youtube] Lecture-19A
> [Proving Non-Regular Language Part 1 | Myhill Nerode Theorem | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=OYVR64fulL4)

> [!attention] 
> The random infinite set may or may not belong to the language.
>> [!question] Why it can be random?
>> Because if two random strings over $\Sigma$ goes to an intermediate state from there on going to either final or non-final states creates a problem.
>> ![[Myhill Nerode Theorem-20240110225456809.webp]]

- There are only finite states in a DFA and for a infinite set of strings, all of the strings cannot go to unique states.

- If there are infinite possibilities to keep track of, then that language is non-regular.

![[Myhill Nerode Theorem-20240109104117572.webp]]

- Create a set $S$ such that if any two strings of $S$ go to the same state then there exists some extension which creates a problem.

## Distinguishable Strings
- In a language $L$, two strings $u, w \in \Sigma^\ast$ and that $\exists y \in \Sigma^\ast$ such that $wy \in L$ and $uy \not\in L$, then the two strings $uy$ and $wy$ are **distinguishable strings** by $L$ which is denoted as $u \;\not\equiv_L \; w$ and $y$ is the distinguishing extension.

> [!NOTE] 
> $u, w, y \in \Sigma^\ast$ and not $L$

- If we can find some infinite set of pairwise distinguishable strings in a language $L$, then $L$ is non-regular.

- For a language $L$, an Infinite distinguishable set $S$ has the following properties
	- $S$ is infinite
	- Every two strings in $S$ are distinguishable by $L$

## Myhill Nerode Theorem
- If there is SOME infinite distinguishable set in a language $L$, then $L$ is *non-regular*
- If there is NO infinite distinguishable set in a language $L$, then $L$ is *regular*
