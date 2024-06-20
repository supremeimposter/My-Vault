---
pdf: lec-5
module: 1
lecture: "5"
date: 2024-02-19T09:42:00
version:
  - DL-24
last-revision: 2024-06-20T13:58:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Standard and Canonical Forms of Boolean Expressions

There are many ways to express a boolean expression.
$$
\begin{split}
E &= a \\
&= a + aa \\
&= aaaa \\
&= a + aa + aaaaa \\
&= aa \\
&= a + a
\end{split}
$$

There are two prinicipal standard forms,
1. Sum of Products (SOP)
2. Product of Sums (POS)

There are two canonical forms,
1. Canonical SOP
2. Canonical POS

> [!NOTE]
> The standard and canonical forms are equivalent forms of an expression $E$. Don't confuse it with $\overline{E}$, it is now a different expression, which has its own standard and canonical forms.

## Standard Forms of Boolean Expressions

### Product Term
- A single literal or a logical product (AND) of two or more literals.

> [!example] 
![[Standard and Canonical Forms of Boolean Expressions-20240518121019632.webp]]

- Logical AND of a boolean expression is not considered as a product term.
> [!example] 
> 1. $\overline{a} \cdot \overline{bc}$ is not a product term, since $\overline{bc}$ is not a literal, it is an expression.
> 2. $a \cdot (b+b) \cdot c$ is not a product term, but $a.b.c$ is a product term.

### Sum Term
- A single literal or a logical sum (OR) or two or more literals.

![[Standard and Canonical Forms of Boolean Expressions-20240518121429388.webp]]

- Logical OR of a boolean expression is not considered as a sum term.
> [!example] 
> 1. $\overline{a} + \overline{bc}$ is not a sum term, since $\overline{bc}$ is not a literal, it is an expression.
> 2. $a + \overline{b + c}$ is not a sum term

> [!observation] 
> If the literal count of an expression is 1, then it can be considered both as sum term and product term. For example, $\overline{b}$ is both product term and sum term.

### Sum of Products (SOP)
SOP is the logical OR of product terms.
![[Standard and Canonical Forms of Boolean Expressions-20240518122725446.webp]]

### Product of Sums (POS)
POS is the logical AND of sum terms.
![[Standard and Canonical Forms of Boolean Expressions-20240518122734208.webp]]

> [!NOTE] 
>An expression can be both in SOP and POS form.
>
>![[Standard and Canonical Forms of Boolean Expressions-20240518122619304.webp]]
>
>SOP and POS expressions for a function $f$ are not unique. They can be infinitely many for a given expression.

---
## Canonical Forms of Boolean Expressions

### Min-term and Max-term

Consider a boolean function of $n$ variables $f(a, b, \cdots, n)$,
- Min-term of an expression is a ***product term*** containing every variable in the function exactly once either in complemented or in uncomplemented form, but not both i.e. logical AND of $n$ literals
- Max-term of an expression is a ***sum term*** containing every variable in the function exactly once either in complemented or in uncomplemented form, but not both i.e. logical OR of $n$ literals.

- In a boolean function $f$ of $n$ variables, there are exactly $2^n$ minterms and $2^n$ maxterms out of $2^{(2^n)}$ [[Boolean Function#Different Boolean Functions for $n$ variables|different boolean functions]].

![[Standard and Canonical Forms of Boolean Expressions-20240518131353467.webp]]

> [!example] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240518131047470.webp]]
> ![[Standard and Canonical Forms of Boolean Expressions-20240518131109597.webp]]

Every minterm is a product term whereas every product term is not a minterm.
Every maxterm is a sum term whereas every sum term is not a maxterm.

### Analysis of Min-terms and Max-terms

> [!hint] 
> Consider minterms and maxterms as functions in this analysis.

| Minterms                                                                        | Maxterms                                                                        |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![[Standard and Canonical Forms of Boolean Expressions-20240619201658205.webp]] | ![[Standard and Canonical Forms of Boolean Expressions-20240620084646875.webp]] |
| $f = \overline{a} \cdot \overline{b}$ is $1$ only when $a = 0, b = 0$           | $f = a + b$ is $0$ only when $a = 0, b = 0$                                     |
| $f = \overline{a} \cdot b$ is $1$ only when $a = 0, b = 1$                      | $f = a + \overline{b}$ is $0$ only when $a = 0, b = 1$                          |
| $f = a \cdot \overline{b}$ is $1$ only when $a = 1, b = 0$                      | $f = \overline{a} + b$ is $0$ only when $a = 1, b = 0$                          |
| $f = a \cdot b$ is $1$ only when $a = 1, b = 1$                                 | $f = \overline{a} + \overline{b}$ is $0$ only when $a = 1, b = 1$               |

> [!NOTE] Properties of Minterms and Maxterms
> A minterm assumes value 1 for exactly one combination of variables.  
> A maxterm assumes the value 0 for exactly one combination of variables.

For every input combination (row) of a function, there is an associated minterm and maxterm.

| ![[Standard and Canonical Forms of Boolean Expressions-20240620094527843.webp]] | ![[Standard and Canonical Forms of Boolean Expressions-20240620094547576.webp]] |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |

There is a close correspondence between the truth table and minterms and maxterms.

![[Standard and Canonical Forms of Boolean Expressions-20240518194643116.webp]]

> [!tip] How to obtain the associated min-term or max-term of an input combination? 
> - To obtain an associated min-term $m_i$ , try to bring the result as `1`
> - To obtain an associated max-term $M_i$ , try to bring the result as `0`

In any boolean function of $n$ variables, the corresponding minterms and maxterms are complements of each other i.e. $m_{i} = \overline{M_{i}}$ where $0 \le i \lt 2^n$.

The order of the literals in the minterms and the maxterms must be in the same order as the variables in the function (usually alphabetical order of the variables).

![[Standard and Canonical Forms of Boolean Expressions-20240519151749785.webp]]

For minterm, `1` means true form and `0` means complemented form. (standard prouduct term)
For maxterm, `0` means true form and `1` means complemented form. (standard sum term)

![[Standard and Canonical Forms of Boolean Expressions-20240518141946234.webp|Minterms and Maxterms for two variables]]

![[Standard Forms of Boolean Expressions-20240219123357113.webp|Minterms and Maxterms for three variables]]

Short notation indices helps us to know which variables are in normal and which variables are in complemented form.

> [!caution] 
> The short notations of minterms and maxterms are used only when the order of the variables in the function are known or else the short notations are dont make any sense.

### Expressing Boolean Functions using Min-terms and Max-terms

> [!NOTE] Mode 
> Each minterm and maxterm is associated with a combination of inputs.

- Any boolean function is true(`1`) for some minterms and false (`0`) for other minterms.

![[Standard Forms of Boolean Expressions-20240219143416775.webp]]

- Any boolean function is true(`1`) for some maxterms and false (`0`) for other maxterms.

![[Standard Forms of Boolean Expressions-20240219143433479.webp]]

For a boolean function $f$ and for given values of input variables,
- All the minterms that have the value `1` are called true minterms.
- All the minterms that have the value `0` are called false minterms.
- All the maxterms that have the value `1` are called true maxterms.
- All the maxterms that have the value `0` are called false maxterms.

### Canonical SOP (CSOP)
A function $f$ can be expressed as a sum (logical OR) of its ***true minterms***.
$$
f = \Sigma_m \;(f = 1)
$$
![[Standard Forms of Boolean Expressions-20240219145717040.webp]]

True minterms minterms are called **minterms of the function $f$**.
The sum of true minterms of a boolean function is called ***Canonical SOP*** expression. It is also called as minterm expansion.

> [!attention] 
> Do not confuse between minterms of a function and the definition of minterms. 

### Canonical POS (CPOS)
A function $f$ can be expressed as a product (logical AND) of its ***false maxterms***.
$$
f = \Pi_M \;(f = 0)
$$
False maxterms are called **maxterms of the function $f$**.
The product of false maxterms of a boolean expression is called ***Canonical POS*** expression. It is also called as maxterm expansion.

### Analysis of Canonical forms

For any boolean function $f$, both canonical SOP and canonical POS forms are unique expressions.
For any boolean function $f$, canonical SOP form is equivalent to canonical POS form. 
Canonical forms are not complement or dual of each other, they are equivalent forms i.e. (CSOP $\equiv$ CPOS)

Consider a function over $n$ variables,
- A function that is the sum of all $2^n$ minterms is equal to logic 1 i.e. $f = 1$
- A function that is the product of all $2^n$ maxterms is equal to logic 0 i.e. $f = 0$

> [!header] Expressing a boolean function as CSOP and CPOS

> [!example] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153201598.webp]]
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153216930.webp]]

> [!example] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153517350.webp]]
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153529305.webp]]

> [!tip] 
> Sum of minterms can be found first and then the product of maxterms is easier to find just by inverting the indices.
> 
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153743007.webp]]

Conversion from one canonical form to its another equivalent canonical form.
- Exchanging $\sum$ and $\prod$.
- Listing all the missing indices

![[Standard and Canonical Forms of Boolean Expressions-20240519143500876.webp]]

````col
```col-md
flexGrow=1
===
A function $F$ can be expressed using the false minterms of $\overline{F}$ and true maxterms of $\overline{F}$.
$$
\begin{split}
F &= \sum_{m} (\overline{F} = 0) \\ \\
F &= \prod_{m} (\overline{F} = 1) 
\end{split}
$$
```
```col-md
flexGrow=1
===
The complement of a function $F$ can be expressed using false minterms of $\overline{F}$ and false maxterms of $\overline{F}$.
$$
\begin{split}
\overline{F} &= \sum_{m} (F = 0) \\ \\
\overline{F} &= \prod_{m} (F = 1) 
\end{split}
$$
```
````
![[Standard and Canonical Forms of Boolean Expressions-20240221114934210.webp]]
![[Standard and Canonical Forms of Boolean Expressions-20240519143619718.webp]]

> [!example] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240519184825481.webp]]

If two functions $F_{1}$, $F_{2}$ are defined over $n$ variables and if $F_{1} = \sum_{m} (P)$ and $F_{2} = \sum_{m} (Q)$ and $P, Q$ are set of indices.
- $F_{1} F_{2} = \sum_{m} (P \cap Q)$  i.e. $F_{1} . F_{2} = 1$ iff $F_{1} = 1$ and $F_{2} = 1$
- $F_{1} + F_{2} = \sum_{m} (P \cup Q)$ i.e. $F_{1} + F_{2} = 1$ iff either $F_{1} = 1$ or $F_{2} = 1$

> [!example] 
> Let $F_{1}(a, b) = a + b$ and $F_{2}(a, b) = a.b$
> $F_{1} . F_{2} = (a + b) . (a.b)$
> $F_{1} + F_{2} = (a + b) + (a.b)$
> 
> ![[Standard and Canonical Forms of Boolean Expressions-20240620124156751.webp]]

---
# Summary of Standard and Canonical Forms

- Standard forms are not necessarily simpler form of an expression.
- POS, SOP, CSOP, CPOS are different equivalent expressions of the same expression.
- Only the corresponding maxterms and minterms are complements of each other of the same function.
- For a function $f$, its complement $\overline{f}$ and its dual $f^d$ are different functions themselves and they have their own standard and canonical forms.

| [[Boolean Algebra\|Boolean Algebra]] | [[Propositional Logic\|Propositional Logic]] |
| ------------------------------------ | -------------------------------------------- |
| T, F                                 | 1, 0                                         |
| SOP                                  | Disjunctive Normal Form (DNF)                |
| POS                                  | Conjunctive Normal Form (CNF)                |
| Canonical SOP                        | Canonical DNF (Principle DNF)                |
| Canonical POS                        | Canonical CNF (Principle CNF)                |

When a canonical form (CSPO or CPOS) of an expression is simplified, then it results in standard forms (SOP or POS). Canonical form are also standard forms, except they have minterms and maxterms. [[Minimization using K Map|K-maps]] give a visual representation of reducing the canonical expressions to standard minimal forms.

Standard forms can be represented using a two-level circuit. NOT, AND, OR logic gates are enough to express standard forms because they are [[Functional Completeness|functionally complete]].

![[Standard and Canonical Forms of Boolean Expressions-20240519181356831.webp]]
![[Standard and Canonical Forms of Boolean Expressions-20240519181412376.webp]]

---