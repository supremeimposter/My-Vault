---
pdf: 
module: 5
lecture: 
date: 2024-02-13T18:14:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Grammar
  - TheoryOfComputation/Language
---
# Simplification of CFG
> [!youtube] 
> [Lec 15A - Simplification of Context Free Grammars | Useless Symbols Removal | Theory of Computation - YouTube](https://www.youtube.com/watch?v=QgS_7rtB8PU)
> [Lec 15B - Simplification of CFGs | Null Production, Unit Production Removal | Theory of Computation - YouTube](https://www.youtube.com/watch?v=LVy5W9ntMeY)


## Removing Useless symbols
- A useful variable must be reachable from the starting variable and also generating a string.

- In a grammar, some derivation never terminate. They do not generate any string. Such derivations are called useless productions.
![[Simplification of Context Free Grammars-20240213185418970.webp]]

## Removing Null Productions

> [!header] Given CFG $G$, such that $\lambda \not\in \mathcal{L}(G)$


> [!header] Given CFG $G$, such that $\lambda \in \mathcal{L}(G)$


> [!header] Nullable variables

- If the starting variable $S$ is not nullable, then $\lambda \not\in L$ 
- If the starting variable $S$ is nullable, then $\lambda \in L$ 
