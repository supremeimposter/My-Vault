---
pdf: funcitonal-completeness
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
> [!think] 
> There are many boolean operations such as NOT, AND, OR, NAND, NOR, ExOR, ExNOR. 
> 1. Can we realize any boolean function using these boolean operations?
> 2. Do we need all of these operations to realize any boolean expression?

- A functional complete set is a **set of boolean operations** which are sufficient to write expression of every boolean function.
- A set of boolean connectives is functionally complete if all the boolean functions can be synthesized using those.
- A set of operations is functionally complete if every boolean function is equivalent to a boolean expression that uses only operations in the set.

## Standard Functionally Complete sets

### {NOT, AND, OR}

Any boolean function can be represented in a truth table. 
Any truth table can be expressed as sum of minterms (CSOP expression) or product of maxterms (CPOS expression). 
Any CSOP or CPOS expressions contain only NOT, AND, OR operations.

> [!example]
> ![[Standard Functional Complete Sets-20240612202537364.webp]]

NOT, AND, OR can express any valid boolean function.

{NOT, AND, OR} is a functionally complete set of boolean operations.

> [!attention] 
> {EXOR} is not functionally complete since it ExOR alone cannot realize AND, OR or NOT individually. 

---
### {AND, NOT}

Any boolean function can be expressed in a truth table. From that truth table, sum of minterms can be expressed.

![[Standard Functional Complete Sets-20240612195025943.webp]]

OR operation in any boolean expression can be eliminated using **double complementation**, leaving only AND, NOT operation in the boolean operation.

> [!example]  
> ![[Standard Functional Complete Sets-20240612203536132.webp]]
> ![[Standard Functional Complete Sets-20240612210715811.webp]]

In general, 
$$
\begin{split}
F(a, b, c) &= \sum m \;(i, k) \\
&= m_{i} + m_{k} \\
&= \overline{\overline{m_{i} + m_{k}}} \\
&= \overline{(\overline{m_{i} + m_{k}})} \\
&= \overline{(\overline{m_{i}}).(\overline{m_{k}})}
\end{split}
$$

> [!hint] 
> Let $\alpha$ and $\beta$ be any two boolean expressions,
> $$
> \begin{split}
> \alpha + \beta &= \overline{ \overline{\alpha + \beta} } \\
> &=  \overline{ ( \overline{\alpha + \beta} ) } \\
> &=\overline{ \overline{\alpha} \:.\: \overline{\beta} }
> \end{split}
> $$

> [!example] 
> ![[Standard Functional Complete Sets-20240612223239706.webp]]

{AND, NOT} is a functionally complete set of boolean operations.

---
### {OR, NOT}

![[Standard Functional Complete Sets-20240612201307221.webp]]

AND operation in a boolean expression can be eliminated using **double complementation** on the boolean expression.

> [!hint] 
> Let $\alpha$ and $\beta$ be any two boolean expressions,
> $$
> \begin{split}
> \alpha \: . \: \beta 
> &= \overline{ \overline{ \alpha . \beta } } \\
> &= \overline{ ( \overline{ \alpha . \beta } ) } \\
> &= \overline{ \overline{\alpha} + \overline{\beta} } 
> \end{split}
> $$

> [!example] 
> ![[Standard Functional Complete Sets-20240612224858235.webp]]
> ![[Standard Functional Complete Sets-20240612225456054.webp]]
> ![[Standard Functional Complete Sets-20240612225937282.webp]]

{OR, NOT} is a functionally complete set.

> [!summary] Summary of {NOT, AND, OR} set

Any boolean function can be converted to its canonical SOP forms using truth table, which contains only {NOT, AND, OR} i.e. {NOT, AND, OR} can bring any valid boolean function.

Now {NOT, AND, OR} can be further reduced to either {NOT, AND} or {NOT, OR} sets which are functionally complete sets.

{NOT}, {AND}, {OR} are not functionally complete sets.

> [!intuition] 
> - In {NOT, OR} functionally complete set, AND operation can be implemented using NOT and OR, so the functionally complete set is further simplified as {NOT, OR}.
> - In {NOT, AND} functionally complete set, OR operation can be implemented using NOT and AND, so the functionally complete set is further simplified as {NOT, AND}.

---
### {NAND}

To prove that any boolean function can be implemented using only NAND gates, it is enough to show that AND, OR, NOT operations can be performed using only NAND gate.
$$
\begin{split}
A \uparrow B = \overline{A . B}
\end{split}
$$

<u>Implementing NOT using NAND operation</u>
$$
\begin{split}
\overline{ A }
&= \overline{ A. A } \\
&= A \uparrow A \\
\end{split}
$$
![[Standard Functional Complete Sets-20240613083047834.webp]]

NOT operation can be implemented using 1 NAND gate.

<u>Implementing AND using NAND operation</u>
$$
\begin{split}
A . B
&= \overline{ \overline{ A . B } } \\
&= \overline{ (\overline{A . B}) . (\overline{A . B}) } \\
&= (A \uparrow B) \uparrow (A \uparrow B) 
\end{split}
$$
![[Standard Functional Complete Sets-20240613081704669.webp]]

AND operation can be implemented using 2 NAND gates.

<u>Implementing OR using NAND operation</u>
$$
\begin{split}
A + B
&= \overline{ \overline{ A + B } } \\
&= \overline{ \overline{ A } . \overline{ B } } \\
&= \overline{ \overline{ A . A } . \overline{ B . B } } \\
&= \overline{ (A \uparrow A) . (B \uparrow B) } \\
&= (A \uparrow A) \uparrow (B \uparrow B)
\end{split}
$$
![[Standard Functional Complete Sets-20240614172755407.webp]]
OR operation can be implemented using 3 NAND gates.

![[Standard Functional Complete Sets-20240614173257334.webp]]

> [!observation] 
> To arrive at the nand gates, double complementation is used.
> {NAND} realizes {AND, NOT} and {OR, NOT}, which are functionally complete sets.

{NAND} is a functionally complete set.

---
### {NOR}

To prove that any boolean function can be implemented using only NOR gates, it is enough to show that AND, OR, NOT operations can be performed using only NOR gate.
$$
A \downarrow B = \overline{ A + B }
$$

<u>Implement NOT operation using NOR operation</u>
$$
\begin{split}
A \downarrow A 
&= \overline{ A + A } \\
&= \overline{ A }
\end{split}
$$
![[Standard Functional Complete Sets-20240614174205361.webp]]
NOT operation can be implemented using 1 NOR gate.

<u>Implement AND operation using NOR operation</u>
$$
\begin{split}
A . B 
&= \overline{ \overline{ A . B } } \\
&= \overline{ \overline{A} + \overline{B} } \\
&= \overline{ \overline{A + A} + \overline{B + B} } \\
&= \overline{ (A \downarrow A) + (B \downarrow B) } \\
&= (A \downarrow A) \downarrow (B \downarrow B)
\end{split}
$$
![[Standard Functional Complete Sets-20240614180426761.webp]]
AND operation can be implemented using 3 NOR gates.

<u>Implementing OR operation using NOR operation:</u> 
$$
\begin{split}
A + B
&= \overline{ \overline{A + B} } \\
&= \overline{ \overline{ (A + B) . (A + B) } } \\
&= \overline{ (\overline{A + B}) + (\overline{A + B}) } \\
&= \overline{ (A \downarrow B) + (A \downarrow B) } \\
&= (A \downarrow B) \downarrow (A \downarrow B)
\end{split}
$$
![[Standard Functional Complete Sets-20240614180306017.webp]]
OR operation can be implemented using 2 NOR gates.

{NOR} is a functionally complete set.

> [!definition] Universal Gate
> If a single gate or an operation is functionally complete, then we call it universal gate e.g. {NAND}, {NOR}

### {$\rightarrow$, NOT}

The given set is $\{ A \rightarrow B, \overline{A} \}$. It already has NOT operation.
$$
\begin{split}
\overline{A} \rightarrow B &= \overline{ \overline{A} } + B \\
&= A + B
\end{split}
$$
Using {$\rightarrow$, NOT} set, {NOT, OR} can be implemented.

{$\rightarrow$, NOT} is a functionally complete set.

### {$\rightarrow$, 0}

The given set is $\{\rightarrow, 0\}$. 

Implementing NOT operation using $\{\rightarrow, 0\}$
$$
\begin{split}
A \rightarrow 0 &= \overline{A} + 0 \\
&= \overline{A}
\end{split}
$$
Implementing OR operation using $\{\rightarrow, 0\}$
$$
\begin{split}
(A \rightarrow 0) \rightarrow B 
&= \overline{A} \rightarrow B \\
&= \overline{ \overline{A} } + B \\
&= A + B
\end{split}
$$
{NOT, OR} can be implemented using $\{\rightarrow, 0\}$.

$\{\rightarrow, 0\}$ is a functionally complete set. This is best understood in case of [[Boolean Functions vs Digital Circuits|digital circuits]].

---
## Guidelines for Identifying Functionally Complete Sets

1. Minimize the expressions in the set if possible.
2. If for all the functions in the set, $f(0) = 0$ then the set is **not** functionally complete.
3. If for all the functions in the set, $f(1) = 1$ then the set is **not** functionally complete.
4. If every function in the set is a [[Boolean Function#Self Dual Boolean Function|self dual]], then the set is **not** functionally complete.
5. If every function in the set is [[Emil Post's Functional Completeness Theorem#Property 4 Linear Boolean Functions|linear]], then the set is **not** functionally complete.
6. If the guidelines 2, 3, 4 do not apply, then try to create the [[Functional Completeness#Standard Functionally Complete sets|standard functionally complete sets]] from the given set of functions to prove that the given set of functions are functionally complete set of boolean operations.

> [!info] 
> Guidelines 2, 3, 4, 5 are [[Implication|implications]], so the converse is not necessarily true.

> [!example] 

![[Functional Completeness-20240615093221697.webp]]

![[Functional Completeness-20240615093334900.webp]]
![[Functional Completeness-20240615100706987.webp]]

![[Functional Completeness-20240615173959162.webp]]

![[Functional Completeness-20240616122730562.webp]]

![[Functional Completeness-20240616115203812.webp]]

![[Functional Completeness-20240616201808788.webp]]

> [!pdf] 
> More examples on functional-completeness.pdf pg. no. 89-135 

The best method is to use [[Emil Post's Functional Completeness Theorem|Post's funcitonal completeness]] theorem to verify the funciontal completeness of a set.

---