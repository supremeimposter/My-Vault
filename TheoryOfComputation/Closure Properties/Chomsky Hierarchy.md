---
pdf: 
module: 4
lecture: "4"
date: 2024-02-03T17:06:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Language
  - TheoryOfComputation/Grammar
---
# Chomsky Hierarchy

## Types of Grammar

### Type 0 Grammar
- Type 0 Grammars have zero restrictions and are called Recursive Enumerable Grammar.
- Recursive Enumerable Grammar corresponds to Recursive Enumerable Languages.

### Type 1 Grammar
- Type 1 Grammar is also called Context Sensitive Grammar or Non-contracting Grammar.
- In every production rule, the length of LHS must be $\le$ the length of RHS.
- $S \rightarrow \epsilon$ is allowed in CSG provided that $S$ do not appear in the RHS of any production rule. This is because of non-contraction.
- CSLs are closed under union, intersection, complement, concatenation, kleene, reversal operations.

### Type 2 Grammar
- Type 2 Grammar is a Context Free Grammar.
- The LHS of the production rules must contain only one variable.

````col
```col-md
flexGrow=1
===
##### Context Free
```
```col-md
flexGrow=1
===
##### Context Sensitive
```
````


### Type 3 Grammar
- Type 3 Grammar is a Regular Grammar or Finite State Grammar.
- The RHS of a Regular Grammar must have only one variable i.e. either left linear or right linear.

