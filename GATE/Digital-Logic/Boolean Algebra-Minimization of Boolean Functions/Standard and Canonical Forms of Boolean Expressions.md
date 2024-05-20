---
pdf: lec-5
module: 1
lecture: "5"
date: 2024-02-19T09:42:00
version:
  - DL-24
last-revision: 
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
---
# Standard Forms of Boolean Expressions
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

## Product Term
- A single literal or a logical product (AND) of two or more literals.

> [!example] 
![[Standard and Canonical Forms of Boolean Expressions-20240518121019632.webp]]

- Logical AND of a boolean expression is not considered as a product term.
> [!example] 
> 1. $\overline{a} \cdot \overline{bc}$ is not a product term, since $\overline{bc}$ is not a literal, it is an expression.
> 2. $a \cdot (b+b) \cdot c$ is not a product term

## Sum Term
- A single literal or a logical sum (OR) or two or more literals.

![[Standard and Canonical Forms of Boolean Expressions-20240518121429388.webp]]

- Logical OR of a boolean expression is not considered as a sum term.
> [!example] 
> 1. $\overline{a} + \overline{bc}$ is not a sum term, since $\overline{bc}$ is not a literal, it is an expression.
> 2. $a + \overline{b + c}$ is not a sum term

## Sum of Products (SOP)
SOP is the logical OR of product terms.
![[Standard and Canonical Forms of Boolean Expressions-20240518122725446.webp]]

## Product of Sums (POS)
POS is the logical AND of sum terms.
![[Standard and Canonical Forms of Boolean Expressions-20240518122734208.webp]]


> [!NOTE] 
>An expression can be both in SOP and POS form.
>
>![[Standard and Canonical Forms of Boolean Expressions-20240518122619304.webp]]
>SOP and POS expressions for a function $f$ are not unique. They can be infinitely many for a given expression.

---
# Canonical Forms of Boolean Expressions

## Min-term and Max-term

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

## Analysis of Min-terms and Max-terms
> [!important] Consider minterms and maxterms as functions in this analysis.

````col
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240518142138008.webp]]
```
```col-md
flexGrow=1
===
The function $f = \overline{a} \cdot b$ is $1$ only when $a = 0, b = 1$
The function $f = \overline{a} \cdot \overline{b}$ is $1$ only when $a = 0, b = 0$
The function $f = a \cdot b$ is $1$ only when $a = 1, b = 1$
The function $f = a \cdot \overline{b}$ is $1$ only when $a = 1, b = 0$
```
````

````col
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240518142218577.webp]]
```
```col-md
flexGrow=1
===
The function $f = \overline{a} + b$ is $0$ only when $a = 1, b = 0$
The function $f = \overline{a} + \overline{b}$ is $0$ only when $a = 1, b = 1$
The function $f = a + \overline{b}$ is $0$ only when $a = 0, b = 1$
The function $f = a + b$ is $0$ only when $a = 0, b = 0$
```
````

![[Standard and Canonical Forms of Boolean Expressions-20240518202426446.webp]]

Each minterm and maxterm is associated with exactly one input combination of variables.
````col
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240518203128497.webp]]

```
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240518204450583.webp]]
```
````

For every input combination (row), there is an associated minterm and maxterm.

````col
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240518203148654.webp]]
```
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240518204604874.webp]]
```
````

There is a close correspondence between the truth table and minterms and maxterms.
![[Standard and Canonical Forms of Boolean Expressions-20240518194643116.webp]]

> [!observation] 
> - To obtain an associated min-term $m_i$ , try to bring the result as `1`
> - To obtain an associated max-term $M_i$ , try to bring the result as `0`
> - The corresponding minterms and maxterms are complements of each other i.e. $m_{i} = M_{i}$

The order of the literals in the minterms and the maxterms must be in the same order (usually alphabetical order of the variables).

![[Standard and Canonical Forms of Boolean Expressions-20240519151749785.webp]]

The short notation for minterms and maxterms are based on the agreed order of variables. The index in the minterms and the maxterms is used to determine whethere the variable is shown in true form or its complemented form.

For minterm, `1` means true form and `0` means complemented form. (standard prouduct term)
For maxterm, `0` means true form and `1` means complemented form. (standard sum term)

![[Standard and Canonical Forms of Boolean Expressions-20240518141946234.webp|Minterms and Maxterms for two variables]]

![[Standard Forms of Boolean Expressions-20240219123357113.webp|Minterms and Maxterms for three variables]]

> [!misconception] 
> For minterms, function value should be `1`
> For maxterms, function value should be `0`
>> [!conflict] 
>> We are not talking about the associated min-term or associated max-term here.

## Expressing Boolean Functions using Min-terms and Max-terms

> [!NOTE] Mode 
> Each minterm and maxterm is associated with a combination of inputs.

- Any boolean function is true(`1`) for some minterms and false (`0`) for other minterms.
![[Standard Forms of Boolean Expressions-20240219143416775.webp]]

- Any boolean function is true(`1`) for some maxterms and false (`0`) for other maxterms.
![[Standard Forms of Boolean Expressions-20240219143433479.webp]]

For a boolean function $f$ and for a given values of the input variables,
- All the minterms that have the value `1` are called true minterms.
- All the minterms that have the value `0` are called false minterms.
- All the maxterms that have the value `1` are called true maxterms.
- All the maxterms that have the value `0` are called false maxterms.

## Canonical SOP (CSOP)
A function $f$ can be expressed as a sum (OR) of its ***true minterms***.
$$
f = \Sigma_m \;(f = 1)
$$
![[Standard Forms of Boolean Expressions-20240219145717040.webp]]

Such minterms are called **minterms of the function $f$** i.e. true minterms of $f$ are called minterms of the function $f$.
The sum of such minterms is called ***Canonical SOP***.

> [!attention] 
> Do not confuse between minterms of a function and the definition of minterms. 

## Canonical POS (CPOS)
A function $f$ can be expressed as a product (AND) of its ***false maxterms***.
$$
f = \Pi_M \;(f = 0)
$$
Such maxterms are called **maxterms of the function $f$** i.e. false maxterms of $f$ are called maxterms of the function $f$.
The product of such maxterms is called ***Canonical POS***.

## Analysis of Canonical forms

For any boolean function $f$, both canonical SOP and canonical POS forms are unique expressions.
For any boolean function $f$, canonical SOP form is equivalent to canonical POS form. 
Canonical forms are not complement or dual of each other, they are equivalent forms.

> [!remember] 
> 1. Minterms and maxterms contain all the variables in the boolean function.
> 2. True minterms = minterms of the function
> 3. False maxterms = maxterms of the function

A function that includes all the minterms or all the maxterms is equal to logic 1.
When a canonical form of an expression is simplified, then it results in standard forms.
Standard forms can be represented using a two-level circuit.
````col
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240519181356831.webp]]
```
```col-md
flexGrow=1
===
![[Standard and Canonical Forms of Boolean Expressions-20240519181412376.webp]]
```
````

For any function $F$, 
- The sum of minterms is called as Canonical SOP. $\sum_{m} (F = 1)$
- The product of maxterms is called as Canonical POS. $\prod_{m} (F = 0)$

![[Standard and Canonical Forms of Boolean Expressions-20240519130731986.webp]]


> [!discussion] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240221111914176.webp]]

> [!example] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153201598.webp]]
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153216930.webp]]

> [!example] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153517350.webp]]
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153529305.webp]]

> [!example] 
> Sum of minterms can be found first and then the product of maxterms is easier to find just by inverting the indices.
> ![[Standard and Canonical Forms of Boolean Expressions-20240519153743007.webp]]

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

If two functions $F_{1}$, $F_{2}$ are defined over $n$ variables and if $F_{1} = \sum_{m} (P)$ and $F_{2} = \sum_{m} (Q)$ then,
- $F_{1} F_{2} = \sum_{m} (P \cap Q)$
- $F_{1} + F_{2} = \sum_{m} (P \cup Q)$
where $P$ and $Q$ are the set of indices.

| Boolean Algebra | [[Propositional Logic\|Propositional Logic]] |
| --------------- | -------------------------------------------- |
| T, F            | 1, 0                                         |
| SOP             | Disjunctive Normal Form (DNF)                |
| POS             | Conjunctive Normal Form (CNF)                |
| Canonical SOP   | Canonical DNF (Principle DNF)                |
| Canonical POS   | Canonical CNF (Principle CNF)                |

## Conversions between Canonical Forms

Conversion from one canonical form to its another equivalent canonical form.
- Exchanging $\sum$ and $\prod$.
- Listing all the missing indices

![[Standard and Canonical Forms of Boolean Expressions-20240519143500876.webp]]

Converting between respective canonical forms of $F$ and $\overline{F}$.

![[Standard and Canonical Forms of Boolean Expressions-20240519144054348.webp]]
![[Standard and Canonical Forms of Boolean Expressions-20240519144110441.webp]]

![[Standard and Canonical Forms of Boolean Expressions-20240519145514014.webp]]

---
