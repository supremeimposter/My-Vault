---
pdf: 
module: 2
lecture: 1B, 1F
date: 2024-01-15T11:04:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Grammar
---
# Context Free Grammar
- The LHS of any production rule in CFG must have only a single variable.
- CFG is a recursive structure.
> [!tip] 
> When analysing CFG, think recursively. 
> While designing CFG, make sure the recursion actually terminates.
## Convert Regex to CFG

> [!discussion] 
> ![[Context Free Grammar-20240116102047578.webp]]

## Context Free Language
- A language $L$ is context free language **iff** exists some context free grammar $G$ such that $L = L(G)$ 
- For a context free language $L$, there exists many context free grammars $G_1, G_2, G_3, \ldots$ but for a context free grammar $G$, there exists a unique context free language $L$.

## Ambiguity of CFG
> [!youtube] 
> [Lecture 1F - Ambiguity of CFGs - Part 1 - Derivations, Parse Tree, LMD, RMD | Theory of Computation - YouTube](https://www.youtube.com/watch?v=0IntVWkFveA)

### Derivation and Derivation Trees
- Derivation is dependent on the order of the production rules. There can be different derivations for different order of production rules.
- A string $w$ can have different derivations.
- The parse/derivation tree is unique for a grammar independent of the order of production rules.

![[Context Free Grammar-20240117165201347.webp]]

![[Context Free Grammar-20240117164337276.webp]]

### Sentential Forms
- Any string of variables and/or terminals derived from the ***start symbol*** is called a sentential form.


