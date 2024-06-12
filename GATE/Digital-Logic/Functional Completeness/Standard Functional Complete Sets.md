---
pdf: 
module: 4
lecture: 
date: 2024-03-06T23:02:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/FunctionalCompleteness
---
# Standard Functional Complete Sets

> [!header] {NOT, AND, OR}

Any boolean function can be represented in a truth table. 
Any truth table can be expressed as sum of minterms (CSOP expression) or product of maxterms (CPOS expression). 
Any CSOP or CPOS expressions contain only NOT, AND, OR operations.

> [!example]
> ![[Standard Functional Complete Sets-20240612202537364.webp]]

{NOT, AND, OR} is a functionally complete set of boolean operations.

---
> [!header] {AND, NOT}

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
> [!header] {OR, NOT}

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

---
> [!header] {NAND}

To prove that any boolean function can be implemented using only NAND gates, it is enough to show that AND, OR, NOT gate operations can be performed using only NAND gate.



---
> [!header] {NOR}



> [!definition] Universal Gate
> If a single gate or an operation is functionally complete, then we call it universal gate e.g. {NAND}, {NOR}, {$\rightarrow$}

---
> [!header] {$\rightarrow$, NOT}



---
> [!header] {$\rightarrow$, $0$}



---
> [!header] {EXOR, NOT}



---