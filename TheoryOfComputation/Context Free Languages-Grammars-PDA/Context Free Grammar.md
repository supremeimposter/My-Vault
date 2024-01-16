---
pdf: 
module: 2
lecture: 1B
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

