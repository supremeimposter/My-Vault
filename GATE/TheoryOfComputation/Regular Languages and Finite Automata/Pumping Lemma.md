---
pdf: lec-18
module: 1
lecture: "18"
date: 2024-01-04T09:57:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/FiniteAutomata
---
# Pumping Lemma

> [!youtube] 
> [Pumping Lemma for Regular Languages | Complete Analysis | Theory of Computation | GO Classes - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHjGbysj9OvLTfL2qhsTdsbr)

- Pumping lemma is true for **every** regular language. But there are **some** non-regular languages that satisfy pumping lemma.
- Pumping lemma is used to prove non-regularity of languages.

> [!important] 
> If a language $L$ does not satisfy pumping lemma, then it is definitely not a regular language.
- Candidate strings are those whose length is greater than or equal to $p$ and they belong to the language.
- For different candidate strings, there can be different $y$.

![[Pumping Lemma-20240106084602566.webp]]

- $y$ must be chosen from the first $p$ symbols in the candidate string.
- For each candidate string, at least one $y$ within the first $p$ symbols that is working is enough. Not every $y$ from the candidate string must work.

- If the length of the minimal string $w_m$ in the language $L$ is $k$, then if any $y$ is chosen from the $w_m$ if it is repeated $0$ times, then the length of the resulting string is $\lt k$ i.e. $p \not\le k$
- Pumping length is defined for language and not for string.
- Every finite language is regular.
- For a finite language, minimum pumping length = length of longest string in the language + 1.
- If there is no candidate string, then it cannot pump and produce infinite strings.

## Proof of Pumping Lemma

- Pumping lemma is an example of Pigeonhole principle.
- Pumping length = Number of states in minimal DFA.


# References
 
[Nonregular languages: How to use the Pumping Lemma - YouTube](https://www.youtube.com/watch?v=Ph7Z9YttM0Q)
[Pumping Lemma for Regular Languages FULL PROOF - YouTube](https://www.youtube.com/watch?v=A5FiVgd0QyQ&list=PLylTVsqZiRXNuJsZAN-v9VtGFeKZGiP6V)
