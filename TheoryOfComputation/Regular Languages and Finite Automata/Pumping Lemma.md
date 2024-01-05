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
- Pumping lemma is true for **every** regular language. But there are **some** non-regular languages that satisfy pumping lemma.
- Pumping lemma is used to prove non-regularity of languages.

- For different candidate strings, there can be different $y$.
![[Pumping Lemma-20240105222237920.webp]]
- $y$ must be chosen from the first $p$ symbols in the candidate string.
- For each candidate string, at least one $y$ within the first $p$ symbols that is working is enough. Not every $y$ from the candidate string must work.