---
pdf: lec-6A-6E
module: 1
lecture: "6"
date: 2024-02-21T13:39:00
version:
  - TOC-24
last-revision: 2024-07-23T10:27:00
notes-taken: true
tags:
  - DigitalLogic/BooleanAlgebra
  - DigitalLogic/KMap
---
# Minimization using K Map

> [!abstract] 
> K-map is special visual representation of the truth table that makes minimization of boolean functions easier without any boolean algebra theorems and equation manipulations, and just by looking at the minterms that can be combined to form a minimized sum of product terms.

K map (Karnaugh Map) is used to get the **minimum SOP and minimum POS** for any boolean function $f$.

Minimum SOP has the minimum number of product terms and out of those minimum number of terms, there are minimum number of literals.
Minimum POS has the minimum number of sum terms and out of those minimum number of terms, there are minimum number of literals.
Minimum SOP and minimum POS are not unique forms.

Minimization using k-map reduces the given expression that corresponds to a circuit in **2-level implementation**.

![[Minimization using K Map-20240620180855901.webp]]

> [!NOTE]
> With k-maps, functions upto 4 variables are easily minimized. Beyond 4 variables, it is harder to visualize.

K-map contains all the $2^n$ minterms for function over $n$ variables. Each cell in a k-map is a minterm. Hence, there are $2^n$ cells in a k-map.

The adjacent cells of a K-map differ just by one variable, but it is not the case in truth tables.

![[Minimization using K Map-20240520092116865.webp]]

Two minterms can be combined or reduced to a single product term if one variable changes in a k-map. 
Let $A$ be any boolean expression and $a$ be a boolean variable,
$$
\begin{split}
Aa + A \overline{a} &= A(a + \overline{a}) \\ &= A . 1 \\ &= A
\end{split}
$$
When started with canonical SOP, K-map gives a visual representation of which two minterms to choose and reduce alleviating the shortcomings of [[Algebraic Simplification of Boolean Functions|algebraic simplification]].

![[Minimization using K Map-20240520084946109.webp]]

> [!example] Examples of K-Maps
>> 2 variable k-map
> 
> ![[Minimization using K Map-20240221163003465.webp|300]]
>> 3 variable k-map
>
> ![[Minimization using K Map-20240221162641417.webp]]
>> 4 variable k-map
> 
> ![[Minimization using K Map-20240221164127415.webp]]

If the order of variables of a function $f$ is given, then then the order of the variables in the k-map are changed, then it gives the equivalent minimal expression. It does not matter which order of the variables is followed in the k-map.

![[Minimization using K Map-20240620181818424.webp]]
![[Minimization using K Map-20240723100056736.webp]]

A cube in a k-map is a group of $2^m$ ($m \ge 0$) cells such that every cell is adjacent to exactly $m$ cells in the group.

> [!example] Cube in K-map
> ![[Minimization using K Map-20240221164655809.webp]]

> [!header] Why $2^m$ cells in a cube of a k-map?

One product term covers $2^m$ minterms, where $m$ is the number of variables missing (<mark style="background-color: #1EFF00; color: black">variables that change</mark>) in the product term.

![[Minimization using K Map-20240520103520956.webp]]

![[Minimization using K Map-20240520103749005.webp]]

| ![[Minimization using K Map-20240221173218571.webp]] | ![[Minimization using K Map-20240221173241538.webp]] |
| ---------------------------------------------------- | ---------------------------------------------------- |
| $2 = 2^1$ minterms                                   | $4 = 2^2$ minterms                                   |
| 1 variable is missing                                | 2 variables are missing                              |

One sum term covers $2^m$ maxterms, where $m$ is the number of missing variables in the sum term.

![[Minimization using K Map-20240520103854665.webp]]

> [!hint] 
> The variable are missing since they are the ones that change.

For a function $F$ over $n$ variables has a cube of $2^m$ cells,
1. variables that change $= m$
2. variables that do not change $= (n-m)$

Product term contains $(n-m)$ literals since those variables that change will be reduced.

![[Minimization using K Map-20240620185644249.webp]]

If we take the smallest cubes of 1 (or 0) for SOP (or POS), we will get larger product term (or sum term).
If we take the largest cubes of 1 (or 0) for SOP (or POS), we will get smaller product term (or sum term).

> [!tip] 
> To visualize a boolean expression in a k-map, it is enough to convert the given expression to standard forms and even better if converted to canonical forms.

## Minimized SOP

$2^m$ cells are used in a cube, so a product term can be created for that cube.

> [!hint] 
> Try to create less number of large cubes of 1's in a region to get the smallest sum of product term.
> $a = 1$ and $\overline{a} = 0$

![[Minimization using K Map-20240222122535497.webp]]

![[Minimization using K Map-20240222121738212.webp]]

![[Minimization using K Map-20240520110706172.webp]]

> [!example] 
> ![[Minimization using K Map-20240520112223656.webp]]
> ![[Minimization using K Map-20240520112243390.webp]]
> ![[Minimization using K Map-20240520134218400.webp]]

> [!attention] 
> The largest cube is not always possible in mSOP or mPOS. Keep looking for such redundant largest cubes after finishing the k-map.
> 
> ![[Minimization using K Map-20240520133916609.webp]]
> 
> The largest cube in the above example is not an essential prime implicant and also all the essential prime implicants cover all the 1's, so the largest cube is not required for minimal SOP.

## Minimized POS

> [!important] 
> Try to create less number of large cubes of 0's in a region to get the smallest product of sum term.
> $\overline{a} = 1$ and $a = 0$

![[Minimization using K Map-20240520134550794.webp]]

![[Minimization using K Map-20240520134453584.webp]]

![[Minimization using K Map-20240520134638525.webp]]

> [!example] 
>> [!attention] 
>>Remember to write 0 as $a$ and 1 as $\overline{a}$ in case of maxterms.
>
> ![[Minimization using K Map-20240520143519865.webp]]
> ![[Minimization using K Map-20240520144021135.webp]]

If a minimized SOP of an expression $E$ is not unique, then it is not necessarily true that the minimized POS of $E$ is also not unique.
If there are $p$ minimized SOP expressions for an expression $G$, then is it not necessarily true that there are $p$ minimized POS expressions for $G$. 
If the minimized SOP form for an expression $J$ has $r$ literals, then it is not necessarily true that the minimized POS expression of the same expression $J$ has $r$ literals.

## Canonical Forms using K Map

K-maps can be used to obtain any SOP (or POS) expression or canonical expressions or minimized standard expressions.

For canonical SOP, take every singe cell which is 1 as a cube and add the minterms.

![[Minimization using K Map-20240520153306532.webp]]

For canonical POS, take every singe cell which is 0 as a cube and multiply the maxterms.

![[Minimization using K Map-20240520153319420.webp]]

---