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
Boolean Algebra is a two-valued system inspired from [[Propositional Logic]].
Boolean Algebra is used to model/represent/describe Digital systems.
In Boolean Algebra, every variable is a boolean variable. Every boolean variable can take either one of the two values i.e. $X = 0$ or $X = 1$.
Boolean Algebra is also called as Switching Algebra.

## Basic Operations
All logical functions can be implemented using three basic logical operations.

### Complement
It is also called as Inverse (negation). 
Symbols:  $\neg x$, $\overline{x}$, $x'$, ~$x$ 

| $x$ | $\overline{x}$ |
| --- | -------------- |
| 0   | 1              |
| 1   | 0              |
NOT gate (Invertor) is used to perform complement operation.
![[Boolean Algebra-20240514120126710.webp]]

### AND

![[Boolean Algebra-20240514120156414.webp]]

AND gate is used to perform AND operation.
![[Boolean Algebra-20240514120229154.webp]]

### OR

![[Boolean Algebra-20240514120421161.webp]]
![[Boolean Algebra-20240514120431937.webp]]

---
![[Boolean Algebra-20240514140352187.webp]]

## Boolean Expression
- `0` and `1` are boolean expressions.
- Every Boolean variable and its complement is a boolean expression.
- Each boolean expression corresponds to a circuit of logic gates. 
![[Boolean Algebra-20240514123037600.webp]]
- The input of a digital circuit are the boolean variables and the output of the digital circuit is the boolean expression.
![[Boolean Algebra-20240514122856693.webp]]

> [!example] 
> ![[Boolean Algebra-20240218165123821.webp]]
> ![[Boolean Algebra-20240218165135808.webp]]

> [!note] Precedence of Operators (When paranthesis is not specified)
> NOT > AND > OR
> ![[Boolean Algebra-20240514125110263.webp]]

Each expression is evaluated by substituting a value of 0 or 1 in each of the boolean variable.

---
## Literal
- Each appearance of a variable and its complement in an expression is referred to as a literal.
- Literal count tells how big an expression is.
- $x$ is a boolean variable and its complement $\overline{x}$ is not a variable. But both are literals.

> [!discussion] 
> ![[Boolean Algebra-20240219081358316.webp]]

---
## Truth Table

> [!tip] 
The standard form of truth table is to write the rows in order of the equivalent decimal value.

The truth table specifies the values of a boolean expression for every possible combination of values of the variables in the expression.

> [!example] 
> ![[Boolean Algebra-20240514124101285.webp]]
> ![[Boolean Algebra-20240514124921656.webp]]

---
## More Standard Operations
### NAND
![[Boolean Algebra-20240514140443566.webp]]
![[Boolean Algebra-20240514140530514.webp]]
### NOR
![[Boolean Algebra-20240514140500027.webp]]
![[Boolean Algebra-20240514140540590.webp]]

> [!tip] NAND and NOR are called Universal Gates

### EXOR

- $a \oplus b = 1$ iff $a \not= b$

### EXNOR

- $\overline{a \oplus b} = 1$ iff $a = b$

---

