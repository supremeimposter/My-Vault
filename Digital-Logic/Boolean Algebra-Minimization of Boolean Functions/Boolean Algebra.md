---
pdf: 
module: 1
lecture: "4"
date: 2024-02-18T20:32:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Boolean Algebra
- Boolean Algebra is a two-valued system inspired from [[Propositional Logic]].
- Boolean Algebra is used to model/represent/describe Digital systems.
- In Boolean Algebra, every variable is a boolean variable. 
- Boolean Algebra is also called as Switching Algebra.

## Basic Operations

### Complement

### AND

### OR

## Boolean Expression
- `0` and `1` are boolean expressions.
- Every Boolean variable is a boolean expression.
- Each boolean expression corresponds to a circuit of logic gates. 

- The input of a digital circuit are the boolean variables and the output of the digital circuit is the boolean expression.

![[Boolean Algebra-20240218165123821.webp]]
![[Boolean Algebra-20240218165135808.webp]]

> [!note] Precedence of Operators
> NOT > AND > OR


## Truth Table

- The standard form of truth table is to write the rows in order of the equivalent decimal value.
![[Boolean Algebra-20240218202838818.webp]]

---
## More Standard Operations
### NAND

### NOR



> [!tip] NAND and NOR are called Universal Gates

### EXOR

- $a \oplus b = 1$ iff $a \not= b$

### EXNOR

- $\overline{a \oplus b} = 1$ iff $a = b$

---
## Literal
- Each appearance of a variable and its complement in an expression is referred to as a literal.
- Literal count tells how big an expression is.

---

