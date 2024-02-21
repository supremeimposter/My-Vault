---
pdf: 
module: 1
lecture: "4"
date: 2024-02-18T18:06:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Boolean Algebraic Function

- A boolean expression is same as a boolean function.

> [!question] 
> Why boolean expression is same as a boolean function?

- It is never possible for a boolean function to be equal to its complement i.e. $f \not= \overline{f}$
- For a function $f$, the complement $\overline{f}$ and the dual $f^d$ can be considered as functions themselves.
- `0` and `1` are constant boolean functions.

## Dual of Boolean Functions

![[Boolean Algebraic Function-20240218224735432.webp|Conversion between a function and its dual]]

![[Laws of Boolean Algebra-20240218225050396.webp]]

## Number of Different Boolean Functions

## Minimization of Boolean Functions

```mermaid
flowchart TD
	A[Minimization Techniques] --> B[Algebraic Simplification]
	A --> C[K-maps]
```

### Algebraic Simplification of Boolean Functions
- A simplified equivalent boolean expression means smaller logical circuit with minimum number of gates i.e. reduced literal count.

#### Uniting

#### Absorption

#### Elimination

#### Consensus


> [!pdf] pdf lec-4d
> ![[Algebraic Simplification-20240218180705620.webp]]



> [!header] Disadvantages of Simplification technique

- Some expressions which can't be further minimized using algebraic simplification can be minimized using [[Minimization using K Map|K-map]].
