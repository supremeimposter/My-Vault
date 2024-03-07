---
pdf: 
module: 4
lecture: 
date: 2024-03-06T16:38:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/FunctionalCompleteness
---
# Functional Completeness

- A functional complete set is a set of boolean operations which are sufficient to write expression of every boolean function.
- A set of boolean connectives is functionally complete if all the boolean functions can be synthesized using those.

## Guidelines for Functional Completeness



---

# Emil Post's Functional Completeness Theorem

- Let $X$ be a set of boolean functions.


> [!header] **Property 1** : 0-preserving functions


> [!header] **Property 2** : 1-preserving functions



> [!observation] 
> There is no relationship between 0-preserving and 1-preserving functions


> [!header] **Property 3** : Self Dual functions



> [!header] **Property 4** : Linear Boolean Functions


> [!important] 
> Before checking if a function is linear or not, minimize the function and create truth table without dummy variable.

- The constant functions `0` and `1` are linear functions.

> [!discussion] 
> ![[Functional Completeness-20240306225403308.webp]]


> [!header] **Property 5** : Monotonic Boolean Functions

- Constant functions `0` and`1` are monotonic functions.

---