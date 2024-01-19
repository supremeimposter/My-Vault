---
pdf: 
module: 2
lecture: 1B, 1F, 1G
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

## Derivations and Parse Trees
> [!youtube] 
> [Lecture 1F - Ambiguity of CFGs - Part 1 - Derivations, Parse Tree, LMD, RMD | Theory of Computation - YouTube](https://www.youtube.com/watch?v=0IntVWkFveA)
- Derivation is dependent on the order of the production rules. There can be different derivations for different order of production rules.
- A string $w$ can have different derivations.
- The parse/derivation tree is unique for a grammar independent of the order of production rules.
![[Context Free Grammar-20240117165201347.webp]]
- Any string $w \in L(G)$ has at least one parse tree.
- For a CFG $G$, $\forall w \in L(G)$, number of parse trees of $w$ = number of LMDs = number of RMDs.
- For every parse tree, there is a unique leftmost and unique rightmost derivation.
````col
```col-md
flexGrow=1
===
![[Context Free Grammar-20240119180024816.webp]]
```
```col-md
flexGrow=1
===
![[Context Free Grammar-20240119180244331.webp]]
![[Context Free Grammar-20240119180258471.webp]]
```
````

- From a given parse tree, exactly one left-most derivation, exactly right-most derivation and many derivations can be generated.
> [!summary] 
> ![[Context Free Grammar-20240118220754917.webp]]

````col
```col-md
flexGrow=1
===
#### Parse Tree to LMD
Traverse from left to right in depth-first manner.
```
```col-md
flexGrow=1
===
#### Parse Tree to RMD
Traverse from right to left in depth-first manner.
```
````

> [!attention] 
> If a parse tree is given, then we may not know what is the actual grammar that the parse tree is parsed. We may write a simplified grammar i.e. there may be more production rules in the original grammar.
>> Grammar comes first 

- For a parse tree, the length of the corresponding LMD or RMD is the number of internal nodes in the parse tree i.e. no of transitions.

## Sentential Forms
- Any string of variables and/or terminals derived from the ***start symbol*** is called a sentential form.

## Ambiguity of CFG
> [!definition] 
> A context free grammar $G$ is ambiguous iff for at least one string $w \in L(G)$, there are more than one parse trees. 

- A string is ambiguously derived if there exists more than 1 parse tree.
- A string is derived unambiguosly if there exists exaclty one parse tree.

> [!question] Why ambiguity of grammar is a problem?

### Inherent Ambiguity of CFL

- A context free language $L$ is inherently ambiguous ***iff*** every grammar for $L$ is ambiguous.
- If there exists a unambiguous grammar for a language, then the language it is NOT inherently ambiguous.
- A regular language CANNOT be inherently ambiguous.
- A DCFL is never inherently ambiguous.