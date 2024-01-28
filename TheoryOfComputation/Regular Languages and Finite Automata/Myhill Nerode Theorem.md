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
> The random infinite set $S \subseteq \Sigma^\ast$ may or may not belong to the language.
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
	- Every two strings in $S$ are distinguishable relative to $L$

## Myhill Nerode Theorem
- If there is SOME infinite distinguishable set in a language $L$, then $L$ is *non-regular*
- If there is NO infinite distinguishable set in a language $L$, then $L$ is *regular*

- If there is a infinite distinguishable set in a language $L$, then DFA must require infinite states which is a violation of DFA. Hence the language $L$ is non-regular.

## Number of States in Minimal DFA

- In every DFA (including minimal), for a regular language, the distinguishable strings go to different states.
- In a minimal DFA, for a regular language, the equivalent strings go the same states. But in a non-minimal DFA, the equivalent strings may or may not go to the same states.

- For a regular language $L$, size of the largest set of distinguishable strings is equal to the number of states in minimal DFA. 
- For a regular language $L$, the number of equivalence classes in the Myhill Nerode theorem is equal to the number of states in minimal DFA.

## Equivalence Relation
- The number of equivalence classes in Myhill Nerode theorem are infinite, iff $L$ is non-regular.
- $\Sigma^\ast$ splits into equivalence classes based on the destination of strings in the minimal DFA.


> [!youtube] 
> [Myhill Nerode Theorem | Non regular language | Easy Proof of Non regularity of language | GO Classes - YouTube](https://www.youtube.com/watch?v=cdqRmustm4g)
