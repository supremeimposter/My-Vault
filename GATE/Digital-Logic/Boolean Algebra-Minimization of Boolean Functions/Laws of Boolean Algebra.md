---
pdf: 
module: 1
lecture: "4"
date: 2024-02-18T20:33:00
version:
  - DL-24
last-revision: 2024-05-14T17:31:00
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Laws of Boolean Algebra
Laws of Boolean Algebra are similar or isomorphic to [[Discrete Mathematics#Propositional Logic or 0th Order Logic|Propositional Logic]], [[Discrete Mathematics#Set Theory|Set Theory]], [[Discrete Mathematics#Group Theory|Group theory]], [[Types of Lattices#Boolean Lattice or Boolean Algebra|Boolean Lattice]].

![[Laws of Boolean Algebra-20240218225050396.webp]]

> [!tip] 
> By-case method can be used to prove or disprove certain laws.
> Cancellation laws **do not hold** in Boolean Algebra.

## Domination or Annulment Law
$$
\begin{split}
A + 1 &= 1 \\ 
A . 0 &= 0 
\end{split}
$$

## Identity Law
$$
\begin{split}
A + 0 &= A \\
A . 1 &= A \\
A \oplus 0 &= A \\
A ⊙ 1 &= A
\end{split}
$$

## Idempotent Law
$$
\begin{split}
A + A + \dots + A &= A \\
A \cdot A \cdots A &= A
\end{split}
$$

## Complement Law
> [!NOTE] 
> The inputs in complement law are $A$ and $\overline{A}$

$$
\begin{split}
A + \overline{A} &= 1 \\
A \cdot \overline{A} &= 0 \\
A \oplus \overline{A} &= 1 \\
A ⊙ \overline{A} &= 0 \\
A \uparrow \overline{A} &= 1 \\
A \downarrow \overline{A} &= 0 \\
\end{split}
$$

## Double Complementation Law
$$
\begin{split}
\overline {(\overline{A})} &= A \\ \\
\overline {(\overline{\alpha})} &= \alpha
\end{split}
$$
## Commutative Law
> [!NOTE] 
> All properties are commutative

$$
\begin{split}
A + B &= B + A \\
A \cdot B &= B \cdot A \\
A \oplus  B &= B \oplus  A \\
A ⊙ B &= B ⊙ A \\
A \uparrow B &= B \uparrow A \\
A \downarrow B &= B \downarrow A \\
\end{split}
$$

## Associative Law
> [!NOTE] 
> Except NAND and NOR, all operations are associative.



## Distributive Law

## De-Morgan's Law
$$
\overline{a + b} = \overline{a} \cdot \overline{b}
$$
$$
\overline{a \cdot b} = \overline{a} + \overline{b}
$$
### Complementing Boolean Expressions

![[Laws of Boolean Algebra-20240218223629099.webp]]

## Removal of Redundancies
### Absorption Law

### Miscellaneous Property

### Consensus Property

