---
pdf: 
module: 1
lecture: "4"
date: 2024-02-18T20:33:00
version:
  - DL-24
last-revision: 2024-06-19T17:31:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Laws of Boolean Algebra

> [!tip] 
> By-case method can be used to prove or disprove certain laws. It is similar to [[Compact Truth Table Representation|compact truth table]].
> 
> ![[Laws of Boolean Algebra-20240517120322980.webp]]

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
A \cdot A \cdot  \cdots \cdot  A &= A
\end{split}
$$

## Complementarity Law

The inputs in complementarity law are $A$ and $\overline{A}$ and the outputs are either $0$ or $1$

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

This law is also called as Involution Law.
$$
\begin{split}
\overline{ \overline{A} } &= \overline {(\overline{A})} \\ 
&= A
\end{split}
$$

Let $\alpha$ be any boolean expressions,
$$
\begin{split}
\overline{ \overline{\alpha} } &= \overline {(\overline{\alpha})} \\&= \alpha
\end{split}
$$

## Commutative Law
> [!NOTE] 
> All operations are commutative

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
> NAND and NOR are not associative.

> [!proof] 
> ![[Laws of Boolean Algebra-20240517120057442.webp]]

> [!proof] 
> $a \oplus (b \oplus c) = (a \oplus b) \oplus c$
> 
> ![[Laws of Boolean Algebra-20240517121050434.webp]]

> [!proof] 
> ![[Laws of Boolean Algebra-20240517190102204.webp]]

> [!proof] 
> ![[Laws of Boolean Algebra-20240517120943292.webp]]

> [!proof] 
> ![[Laws of Boolean Algebra-20240517162638546.webp]]

## Distributive Law
$$
\begin{split}
X (Y + Z) &= XY + XZ \\ \\
X + YZ &= (X + Y)(X + Z) 
\end{split}
$$

> [!proof] 
> ![[Laws of Boolean Algebra-20240517163143163.webp]]

## De-Morgan's Law
$$
\overline{a + b} = \overline{a} \cdot \overline{b}
$$
$$
\overline{a \cdot b} = \overline{a} + \overline{b}
$$

> [!attention] 
> AND and OR are not complement of each other

### Complementing Boolean Expressions

Simplify the given boolean expression to [[Standard and Canonical Forms of Boolean Expressions|standard forms]] and it is easier to perform complentation on a function.

![[Laws of Boolean Algebra-20240618224317959.webp]]

## Removal of Redundancies

Let $\alpha, \beta, \gamma$ be any boolean expressions,

### Absorption Law
$$
\begin{split}
\alpha + \alpha \beta &= \alpha \\ \\
\alpha \cdot (\alpha + \beta) &= \alpha 
\end{split}
$$

### Elimination Property
$$
\begin{split}
\alpha + \overline{\alpha} \beta &= \alpha + \beta \\ \\
\overline{\alpha} + \alpha  \beta &= \overline{\alpha} + \beta 
\end{split}
$$

### Consensus Property
$$
\alpha \beta + \overline{\alpha} \gamma + \beta \gamma = \alpha \beta + \overline{\alpha} \gamma
$$

> [!proof] 
> ![[Laws of Boolean Algebra-20240517184959130.webp]]

## Cancellation Law
Cancellation laws **do not hold** in Boolean Algebra.

![[Laws of Boolean Algebra-20240518100228421.webp]]

There may be some functions which do hold for cancellation laws. e.g. converses of the above laws.

![[Laws of Boolean Algebra-20240528134424642.webp]]

![[Laws of Boolean Algebra-20240619121332830.webp|Cancellation laws do hold here]]

> [!example] 
>> In this example, it is given that $a=1$,
>
>![[Laws of Boolean Algebra-20240528134506968.webp]]
>>In this example, it is given that $a=0$,
>
>![[Laws of Boolean Algebra-20240528134707700.webp]]

> [!summary] 

![[Laws of Boolean Algebra-20240517163430314.webp]]

Boolean algebraic laws are given in pairs to show that boolean algebra satisfies a duality.

![[Laws of Boolean Algebra-20240218225050396.webp]]
![[Laws of Boolean Algebra-20240603120312263.webp]]

Laws of Boolean Algebra are similar or isomorphic to [[Discrete Mathematics#Propositional Logic or 0th Order Logic|Propositional Logic]], [[Discrete Mathematics#Set Theory|Set Theory]], [[Discrete Mathematics#Group Theory|Group theory]], [[Types of Lattices#Boolean Lattice or Boolean Algebra|Boolean Lattice]]

---