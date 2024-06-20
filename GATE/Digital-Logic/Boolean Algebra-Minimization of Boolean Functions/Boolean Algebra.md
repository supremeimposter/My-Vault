---
pdf: 
module: 1
lecture: "4"
date: 2024-02-18T20:32:00
version:
  - DL-24
last-revision: 2024-06-18T17:31:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Boolean Algebra
Boolean Algebra is a two-valued system inspired from [[Propositional Logic]].
Boolean Algebra is used to model/represent/describe Digital systems.
In Boolean Algebra, every variable is a boolean variable. Every boolean variable can take either one of the two values i.e. $X = 0$ or $X = 1$.
Boolean Algebra is also called as Switching Algebra.

## Basic Operations
All logical functions can be implemented using 3 basic logical operations NOT, AND, OR i.e. all of these 3 basic logic operations are [[Functional Completeness|functionally complete]].

### NOT
It is also called as Inverse (negation) or complement. 
Symbols:  $\neg x$, $\overline{x}$, $x'$, ~$x$ 

| $x$ | $\overline{x}$ |
| --- | -------------- |
| 0   | 1              |
| 1   | 0              |
NOT gate (Invertor) is used to perform complement operation.

![[Boolean Algebra-20240618200107171.webp]]

### AND

![[Boolean Algebra-20240514120156414.webp]]

AND gate is used to perform AND operation.

![[Boolean Algebra-20240618200122996.webp]]

Switches can be connected in series to perform logical AND operation.

![[Boolean Algebra-20240618182008378.webp]]

### OR

![[Boolean Algebra-20240514120421161.webp]]

OR gate is used to perform OR operation.

![[Boolean Algebra-20240618200141468.webp]]

OR operation is inclusive.

Switches can be connected in parallel to perform logical OR operation.

![[Boolean Algebra-20240618182053087.webp]]

---
## Boolean Expression
A boolean expression is a set of literals (possibly repeats) combined with logic operations (and possibly ordered by paranthesis).

- `0` and `1` are boolean expressions.
- Every literal is a boolean expression.

![[Boolean Algebra-20240514123037600.webp]]

- Each boolean expression corresponds to a circuit of logic gates. 

![[Boolean Algebra-20240516185855611.webp]]

- The input of a digital circuit are the boolean variables and the output of the digital circuit is the boolean expression.
- When boolean variables are assigned input values, boolean expressions result in either $0$ or $1$.

![[Boolean Algebra-20240514122856693.webp]]

> [!example] 
> The boolean expression realized by the digital circuit is $F(A, B) = \overline{A} + B$
> 
> ![[Boolean Algebra-20240618184039162.webp]]
> 
> On application of inputs to the variables $a, b$, the resultant value of the function is either $0$ or $1$.

> [!note] Precedence of Operators for evaluating boolean expressions
> () > NOT > AND > OR
> 
> ![[Boolean Algebra-20240514125110263.webp]]

> [!convention] 
> $a = 0$ is written as $\overline{a}$
> $a = 1$ is written as $a$

- Every boolean expression is evaluated by substituting a value of 0 or 1 in each of the boolean variables.

![[Boolean Function-20240514173915972.webp]]

> [!tip] 
> Some questions on boolean algebra can be solved by evaluating the boolean expressions in the options.

---
## Literal

- Each appearance of a variable or its complement in an expression is referred to as a Literal. Literal count tells how big an expression is.

- $x$ is a boolean variable and its complement $\overline{x}$ is not a variable. But both are literals.
- $x$ and $\overline{x}$ represent the same variable, whereas $x$ and $\overline{y}$ represent the different variable.
- `0` and `1` are boolean functions but not literals.

---
## Truth Table

The standard form of truth table is to write the rows in order of the equivalent decimal value.

![[Boolean Algebra-20240514171833320.webp]]

The truth table specifies the values of a boolean expression for every possible input combination of values of the variables in the expression.

> [!example] 
> ![[Boolean Algebra-20240514124101285.webp]]
> 
> ![[Boolean Algebra-20240514124921656.webp]]

For a boolean function over $n$ variables, each variables has two choices (either 0 or 1) so there are $2^n$ possible input combinations.
$$
\underbrace{2 \times 2 \times 2 \times \cdots}_{n \text{ times}} = 2^n
$$

---
## More Standard Operations
### NAND

![[Boolean Algebra-20240514140443566.webp]]
![[Boolean Algebra-20240618195954330.webp]]

### NOR

![[Boolean Algebra-20240514140500027.webp]]
![[Boolean Algebra-20240514140540590.webp]]

> [!tip] NAND and NOR are called Universal Gates because they are [[Functional Completeness|functionally complete]].

### EXOR

![[Boolean Algebra-20240514165208565.webp]]
$$
\begin{split}
a \oplus b &= 1, \text{ iff } a \not= b \\
a \oplus b &= \overline{a}b + a\overline{b}
\end{split}
$$

![[Boolean Algebra-20240514165554710.webp]]

![[Boolean Algebra-20240618200235528.webp]]

![[Boolean Algebra-20240518101611181.webp]]

### EXNOR

![[Boolean Algebra-20240514170029779.webp]]

EXNOR is also called as equivalence operation ($a \equiv b$)

![[Boolean Algebra-20240514171552071.webp]]
$$
\begin{split}
\overline{a \oplus b} = a ⊙ b &= 1, \text{ iff } a = b \\
a ⊙ b &= ab + \overline{ab}
\end{split}
$$

ExNOR is same as [[Bi-Implication|Bi-implication]] i.e. $a ⊙ b \equiv a \leftrightarrow b$

![[Boolean Algebra-20240618200311828.webp]]

![[Boolean Algebra-20240518101704466.webp]]

> [!note] 
> Every logic gate except OR gate can have multiple inputs.
> 
> ![[Boolean Algebra-20240618200620635.webp]]

> [!foreshadow] 
> Standard operations can be represented using NOT, AND, OR
> 
> ![[Boolean Algebra-20240619122550624.webp]]

---

