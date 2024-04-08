---
pdf: 
module: 4
lecture: 2A
date: 2024-02-01T20:28:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Language
  - TheoryOfComputation/ClosureProperty
---
# Closure Properties of CFL
- Base set is the set of all Context Free Languages
- To prove that a language is a CFL, then we have to create a context free grammar or a PDA for that language.

## Union Operation
- CFLs are closed under union operation.

## Concatenation Operation
- CFLs are closed under concatenation operation.

## Kleene Star Operation
- CFLs are closed under kleene star operation.

## Reversal Operation
- CFLs are closed under reversal operation.

## Intersection Operation
- CFLs are ***not necessarily*** closed under intersection operation.
![[Closure Properties of CFL-20240202120542853.webp]]

## Complement Operation
- CFLs are ***not necessarily*** closed under complement operation.

## Set Difference Operation
- CFLs are ***not necessarily*** closed under set difference operation.

## Operations with Regular Languages
- CFLs are closed under union, intersection operation with regular languages.
- Every Regular language is a CFL.
$$
\text{CFL} \; \cup \; \text{Regular} = \text{CFL}
$$
$$
\text{CFL} \; \cap \; \text{Regular} = \text{CFL}
$$
