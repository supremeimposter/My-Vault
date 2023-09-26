---
pdf: lec-36, lec-37
date: 2023-09-24-16:41
version: DM-2024
---
- Let $\alpha$ and $\beta$ be two FOL expressions.
- $\alpha \equiv \beta$ iff ($\alpha \rightarrow \beta$) is valid and ($\beta \rightarrow \alpha$) is valid i.e. $\alpha \leftrightarrow \beta$ is valid.

### Examples

![[Pasted image 20230926163729.png]]

> [!summary] Can you make the expression falsifiable at least once? 
> - Yes, then it is invalid. 
> - No, then it is valid.

$$
\Pi_x\;(\;P(x)\; \# \; Q(x)\;) \rightleftharpoons \Pi_x\; P(x) \; \# \; \Pi_x\; Q(x)
$$
$$
\begin{array}{}
\Pi_x = Quantifier\\
\# = \text{logical connectives}\\\\
\text{LHS is called compact expression and RHS is called expanded expression}
\end{array}
$$

---
## Table for distribution of Quantifiers over Logical Connectives

> [!note] This table is useful only when the same connective is used on the either side
> This is the distribution of quantifiers over logical connectives.
> When there are different connectives used on the either sides, refer [[Validity of FOL expressions#FOL expressions with Implication|here]].
> For example, $\forall x\; (P(x) \leftrightarrow Q(x)) \rightarrow \exists x\; P(x) \oplus \; \forall x\; Q(x)$ is invalid and the table is useless here.

- $\rightarrow$ means only compact to expanded is valid
- $\leftarrow$ means only expanded to compact is valid
- $\leftrightarrow$ means both are valid 

|                   | $\forall$        | $\exists$         |
|:-----------------:|-------------------|-------------------|
| $\land$           | $\leftrightarrow$ | $\rightarrow$     |
| $\lor$            | $\leftarrow$      | $\leftrightarrow$ |
| $\rightarrow$     | $\rightarrow$     | $\leftarrow$      |
| $\leftrightarrow$ | $\rightarrow$     |                   |
| $\oplus$          |                   | $\leftarrow$      |
| $\uparrow$        | $\rightarrow$     | $\leftarrow$      |
| $\downarrow$      | $\rightarrow$     | $\leftarrow$      |

### Points to remember the above table
- For universal quantifier, for all the arrow operators, only compact to expanded is valid.
- Due to De-Morgan's law of complement, $\forall \; and \;\exists$ , they are opposites of each other over $\land\; and \; \lor$.
- $\oplus$ and $\leftrightarrow$ are complements of each other.
- The empty cell indicates it is not valid on both cases.
- $\forall$ over $\oplus$ is invalid. $\exists$ over $\leftrightarrow$ is invalid.
- $\rightarrow, \; \uparrow ,\; \downarrow\;$ for $\alpha$ and $\beta$ are basically facing each other.

> [!todo]  Try to prove the table
> All the proof is given in the pdf lec 36 and lec 37

---




