---
pdf: 
module: 1
lecture: 
date: 2024-02-18T14:38:00
version:
  - DL-24
last-revision: 
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Algebraic Simplification of Boolean Functions
A simplified equivalent boolean expression means smaller logical circuit with minimum number of gates i.e. reduced literal count.
````col
```col-md
flexGrow=1
===
![[Algebraic Simplification of Boolean Functions-20240518092735235.webp]]
```
```col-md
flexGrow=1
===
![[Algebraic Simplification of Boolean Functions-20240517204550768.webp]]
```
````

## Uniting
![[Algebraic Simplification of Boolean Functions-20240517203516987.webp]]
![[Algebraic Simplification of Boolean Functions-20240517202457473.webp]]

## Absorption
![[Algebraic Simplification of Boolean Functions-20240517203539958.webp]]
![[Algebraic Simplification of Boolean Functions-20240517202655626.webp]]

## Elimination
![[Algebraic Simplification of Boolean Functions-20240517203611965.webp]]

## Consensus
![[Algebraic Simplification of Boolean Functions-20240517204231643.webp]]

# Examples
> [!pdf] mod-1/lec-04D.pdf

> [!example] By-case method can be used to solve boolean equation
> ![[Algebraic Simplification of Boolean Functions-20240518095814815.webp]]

---
# Disadvantages of Algebraic Simplification
1. The procedures are difficult to apply in a systematic manner.
2. It is difficult to tell whether the arrived expression is the minimum solution. It depends on the order in which the terms are combined or eliminated.

![[Algebraic Simplification of Boolean Functions-20240520084606611.webp]]

Some expressions which can't be further minimized using algebraic simplification can be minimized using [[Minimization using K Map|K-map]].

---