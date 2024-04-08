---
pdf: lec-5
module: 1
lecture: "5"
date: 2024-02-19T09:42:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/BooleanAlgebra
---
# Standard Forms of Boolean Expressions

- There are two prinicipal standard forms
	1. Sum of Products (SOP)
	2. Product of Sums (POS)
- These two standard forms are not unique.

> [!remember] 
> The same expression can be expressed in different forms.

## Product Term
- A single literal or a logical AND of two or more literals.
- logical AND of a boolean expression is not considered as a product term.

## Sum Term
- A single literal or a logical OR or two or more literals.
- logical OR of a boolean expression is not considered as a sum term.

## Sum of Products (SOP)


## Product of Sums (POS)



> [!NOTE] 
> - An expression can be both in SOP and POS form.
> - SOP and POS expressions for a function $f$ are not unique.

# Canonical Forms of Boolean Expressions

## Min-term and Max-term
- Min-term is a ***product term*** containing each variable in the function exactly once either in complemented or in uncomplemented form, but not both.
- Max-term is a ***sum term*** containing each variable in the function exactly once either in complemented or in uncomplemented form, but not both.

- In a function of $n$ variables, there are exactly $2^n$ minterms and $2^n$ maxterms.

## Analysis of Min-terms and Max-terms
> [!tip] 
> Consider minterms and maxterms as functions here.

![[Standard Forms of Boolean Expressions-20240219140246233.webp]]

![[Standard Forms of Boolean Expressions-20240219140303919.webp]]

> [!observation] 
> - To obtain an associated min-term $m_i$ , try to bring the result as `1`
> - To obtain an associated max-term $M_i$ , try to bring the result as `0`
> - Minterms and maxterms are complements of each other.

- The short notation for minterms and maxterms are based on the agreed order of the values of the variables.
![[Standard Forms of Boolean Expressions-20240219123357113.webp|Minterms and Maxterms for three variables]]


> [!misconception] 
> For minterms, function value should be `1`
> For maxterms, function value should be `0`
>> [!conflict] 
>> We are not talking about the associated min-term or associated max-term here.

## Expressing Boolean Functions using Min-terms and Max-terms

- Any boolean function is true(`1`) for some minterms and false (`0`) for other minterms.
![[Standard Forms of Boolean Expressions-20240219143416775.webp]]

- Any boolean function is true(`1`) for some minterms and false (`0`) for other minterms.
![[Standard Forms of Boolean Expressions-20240219143433479.webp]]

- All the minterms that have the value `1` are called true minterms.
- All the minterms that have the value `0` are called false minterms.
- All the maxterms that have the value `1` are called true maxterms.
- All the maxterms that have the value `0` are called false maxterms.

### Canonical SOP
- A function $f$ can be expressed as a sum (OR) of its ***true minterms***.
$$
f = \Sigma_m \;(f = 1)
$$
![[Standard Forms of Boolean Expressions-20240219145717040.webp]]
- Such minterms are called **minterms of the function $f$** i.e. true minterms of $f$ are called minterms of the function $f$.

> [!conflict] 
> Do not confuse between minterms and minterms of the function.

- The sum of such minterms is called ***Canonical SOP***.

### Canonical POS
- A function $f$ can be expressed as a product (AND) of its ***false maxterms***.
$$
f = \Pi_M \;(f = 0)
$$
- Such maxterms are called **maxterms of the function $f$** i.e. false maxterms of $f$ are called maxterms of the function $f$.
- The product of such maxterms is called ***Canonical POS***.

> [!summary] Summary of Canonical forms
- For any boolean function $f$, both canonical SOP and canonical POS forms are unique.
- For any boolean function $f$, canonical SOP form is equivalent to canonical POS form. 
- They are not complements of each other. When $f$ is complemented, then $\overline{f}$ is a new function.

> [!remember] 
> 1. Minterms and maxterms contain all the variables in the boolean function.
> 2. True minterms = minterms of the function
> 3. False maxterms = maxterms of the function


> [!terminology] 
|Boolean Algebra | Propositional Logic |
| --- | --- |
| SOP | Disjunctive Normal Form (DNF) |
|POS | Conjunctive Normal Form (CNF) | 
|Canonical SOP | Canonical DNF (Principle DNF)|
|Canonical POS | Canonical CNF (Principle CNF)|

- Do not confuse between function $f$ and its complement $\overline{f}$.
![[Standard and Canonical Forms of Boolean Expressions-20240221114908092.webp]]

![[Standard and Canonical Forms of Boolean Expressions-20240221114934210.webp]]

> [!discussion] 
> ![[Standard and Canonical Forms of Boolean Expressions-20240221111914176.webp]]



