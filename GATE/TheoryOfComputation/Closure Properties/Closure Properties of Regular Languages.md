---
pdf: 
module: 4
lecture: "1"
date: 2024-01-30T06:58:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/ClosureProperty
  - TheoryOfComputation/Language
---
# Closure Properties of Regular Languages

> [!NOTE] Base Set : set of all regular languages over $\Sigma$

## Complement Operation

- Regular Languages are closed under complementation operation.
- If $L$ is any regular language, then $\overline{L}$ will always be a regular language.
- If a DFA $D$ recognizes the regular language $L$, then the DFA $\overline{D}$ recognizes the complement of the regular language $\overline{L}$. 
- If a NFA $N$ recognizes the regular language $L$, then the NFA $\overline{N}$ ***does not necessarily*** recognize the complement of the regular language $\overline{L}$. 

## Union Operation

- Regular Languages are closed under union operation.
- If $L_1$ and $L_2$ are any two regular languages, then $L_1 \cup L_2$ will always be a regular language.

## Intersection Operation
- Regular Languages are closed under intersection operation.

## Difference Operation
- Regular Languages are closed under set difference operation.

## Symmetric Difference Operation
- Regular Languages are closed under symmetric difference operation.
$$
L_1 \oplus L_2 = L_1 \Delta L_2 = (L_1 - L_2) \cup (L_2 - L_1)
$$

## Concatenation Operation
- Regular Languages are closed under concatenation operation.

## Kleene Star Operation
- Regular Languages are closed under kleene star operation.

## Reversal Operation
- Regular Languages are closed under reversal operation.

| Regular Expression for $L$ | Regular Expression for $L^R$ |
| -------------------------- | ---------------------------- |
| $r+s$                      | $r^R+s^R$                    |
| $r \cdot s$                | $s^R \cdot r^R$              |
| $s^\ast$                   | $(s^R)^\ast$                 |
| $\phi$                     | $\phi$                       |
| $\epsilon$                 | $\epsilon$                   |
| $a$                        | $a$                          |

> [!youtube] 
> [GATE CSE 2021 - Number of States in Minimal DFA for L and L-Complement | Theory of Computation - YouTube](https://www.youtube.com/watch?v=3szxKVVUo1A)

> [!youtube] 
> [GATE CS 1989 Q3 | Closure Properties of CFLs & Regular - With Proof |TOC | GoClasses | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=bz2b4XNjsWY)
