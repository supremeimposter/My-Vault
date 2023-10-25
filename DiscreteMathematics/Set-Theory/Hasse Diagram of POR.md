---
pdf: lec-34-36, lec-37-38, lec-39-40
module: 5
lecture: 35, 36, 37, 38, 39
date: 2023-10-21T14:45:00
version:
  - DM-24
last-revision: 
notes-taken: true
tags:
  - DM
  - DM/Sets
  - DM/Sets/Relations
---

> [!lecture] Lecture-35

# Hasse Diagram
- Any relation on a set has many representations such as Set, Arrow, Matrix and Graph, but this graph-like (Hasse Diagram) representation is only for [[#Set Ordering#Partial Order Relation|POR]] and [[Set Ordering#Total Order Relation|TOR]].
- Normal Graph representations of relation on a set can be messy and confusing.
> [!example] 
> ![[Pasted image 20231025131339.png]]

## Guidelines for Hasse Diagram construction
![[Pasted image 20231025131609.png]]

- In Hasse diagram, self-loops, arrows and transitive edges are not drawn, but they are inferred.
- In Hasse Diagram, there are NO horizontal edges to avoid confusion of relation between elements, since arrows are not drawn.
````col
```col-md
flexGrow=1
===
![[Pasted image 20231020165704.png|$aRb$ in Graph Representation]]

---
In Hasse Diagram, whenever there is a relation between $a$ and $b$, there is an upward path from $a$ to $b$
```
```col-md
flexGrow=1
===
![[Pasted image 20231020165738.png|$aRb$ in Hasse Diagram Representation]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231021100230.png|$bRa$ in Hasse Diagram Representation]]
```
````

> [!NOTE] Edge VS Path
> - Edge is between two elements
> - A path is a collection of edges and vertices between many elements.

![[Pasted image 20231025161403.png]]
## Graph vs Hasse Diagram

> [!question] $(\{1, 2, 3, 4, 5, 6, 7, 8\}, \mid)$

````col
```col-md
flexGrow=1
===
![[Pasted image 20231025131833.png|Graph Representation]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025131910.png|Hasse Diagram]]
```
````

## Examples

> [!example] $(\{1, 2, 3, 4, 6, 8, 12\}, \mid)$
> ![[Pasted image 20231025132302.png]]

> [!example] $(\{3, 4, 5\}, \mid)$
> $R = \{(3, 3), (4, 4), (5, 5)\}$

````col
```col-md
flexGrow=1
===
![[Pasted image 20231025160142.png]]
---

![[Pasted image 20231025160309.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025160329.png]]
```
````
- There is NO concept of 'levels' in Hasse Diagram, but only the concept of upward paths.

> [!example] $(\{ 1, 2, 3, 4 \}, \text{"multiple of"})$
> ![[Pasted image 20231025160053.png]]

> [!example] $(\mathcal{P}(\{1, 2\}), \subseteq)$
> ![[Pasted image 20231025160826.png]]

> [!example] $(\mathcal{P}(\{a, b, c\}), \subseteq)$
> ![[Pasted image 20231025161526.png]]

> [!example] 
> $(\mathcal{P}(\{a, b, c\} - \{\phi, \{a, b, c\}\}), \subseteq)$
> ![[Pasted image 20231025164100.png]]

---

## Elements of POSET

### Maximal, Minimal, Greatest and Least 
> [!lecture] Lecture-36, 37

![[Pasted image 20231025163436.png]]

|  Elements of POSET            |  Definition                  |
|:------------------------------|:-----------------------------|
|  Maximal element              |  I am not related to anyone else  |
|  Minimal element              |  No one else is related to me     |
|  Greatest or maximum element  |  Everyone else is related to me   |
|  Least or minimum element     |  I am related to everyone else   |  

````col
```col-md
flexGrow=1
===
![[Pasted image 20231020194911.png|Maximal Element M|200]]

![[Pasted image 20231020195056.png|Minimal Element m|200]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231020195119.png|Greatest Element G|200]]

![[Pasted image 20231020194935.png|Least Element L|200]]
```
````

- Greatest and Least elements are unique. There cannot be more than one.
- There can be more than one Maximal and Minimal elements in a POSET.
#### Examples

> [!example] ![[Pasted image 20231025162513.png]]
> Maximal : c, d
> Minimal : a, b
> Greatest : Does not exist
> Least : Does not exist
>> [!tip] If there are more than one minimal element and more than one maximal element, least element and greatest element cannot exist respectively.

> [!example] ![[Pasted image 20231025162809.png]]
> Maximal : b
> Minimal : d, e
> Greatest : b
> Least : Does not exist
>> [!tip] If there is only one maximal or minimal element, then it is the greatest or least element respectively. 

> [!example] $(\{2, 3, 4, 5, 6, 7, 8, 9\}, \mid)$
> ![[Pasted image 20231025164329.png]]
> Minimal : 2, 3, 5, 7
> Maximal : 5, 7, 8, 6, 9
> Greatest : does not exist
> Least : does not exist

> [!example] $(\{2, 3, 4, 5, 6, 7, 8, 9\}, \text{ multiple of})$
> ![[Pasted image 20231025164811.png]]
> Minimal : 5, 6, 7, 8, 9
> Maximal : 2, 3, 5, 7
> Greatest : does not exist
> Least : does not exist

---
### Upper Bound, Upper Bound, LUB AND GLB
> [!lecture] Lecture-38

- Upper bound is the element $a \in A$ such that every element in the subset $S \subseteq A$ is related to $a$. Upper bound of $S$ is
$$\forall_{s \in S}\; (sRa)$$
- Lower bound is the element $a \in A$ such that it is related to every element in the subset $S \subseteq A$. Lower bound of $S$ is
$$
\exists_{a \in A} \; \forall_{s \in S} \; (aRs)
$$

> [!NOTE] Both upper and lower bound are sets.

> [!definition] 
> 1. Least upper bound of $X$ is the **Least or minimum** element in the upper bound of $X$.
> 2. Greatest lower bound $x$ is the **Greatest or maximum** element in the lower bound of $X$.

- Least upper bound and Greatest lower bound are unique. They CANNOT be a set of elements.
- If there is no upper bound, then there is NO LUB and if there is no lower bound, then there is NO GLB.

> [!reference]
> ![[Pasted image 20231025165947.png]]
> 
> ![[Pasted image 20231025172521.png]]

#### Examples

> [!example] $(\mathbb{N}, \mid)$
> $a \lor b = \text{Least Common Multiple}$
> $a \land b = \text{Greatest Commom Divisor}$
>> ![[Pasted image 20231025223857.png]] 

> [!example] 
> ![[Pasted image 20231025171720.png|350]]

````col
```col-md
flexGrow=1
===
UB {a, g, b} = {e}
UB {a, g} = {e, a}
LB {a, g} = {g}
UB {a, c} = $\phi$
```
```col-md
flexGrow=1
===
LB {e, f} = {d}
UB {e, f} = $\phi$
UB {a} = {a, e}
UB {g} = {g, a, b, e}
```
````

> [!example] 
> ![[Pasted image 20231025172114.png]]
> UB {c, d} = $\phi$
LB {c, d} = {a}
UB {a, b} = {d}


> [!example] 
> ![[Pasted image 20231025173455.png]]

````col
```col-md
flexGrow=1
===
LB {d, k, f} = $\phi$
UB {e, g} = {k, l, m}
LB {e, g} = $\phi$
LB {l, m} = {k, h, e, b, d, a, g, f, c}
UB {d, k, f} = {k, l, m}
UB {l, m} = $\phi$
```
```col-md
flexGrow=1
===
LUB {l, m} = does not exist
UB {d, e} = {h, j, k, l, m}
LUB {d, e} = h
GLB {l, m} = k
```
````


> [!example] 
> ![[Pasted image 20231025175105.png]]

````col
```col-md
flexGrow=1
===
![[Pasted image 20231025175146.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025175159.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025175214.png]]
```
````

---

## Analysis of Elements of POSET
> [!lecture] Lecture-39

> [!search] Pdf-37-38 Pg. No. 36-38

- If $a$ is some $LB(X)$ then it is NOT TRUE that $a$ definitely belongs to $X$.
![[Pasted image 20231025202220.png]]
![[Pasted image 20231025202458.png]]
![[Pasted image 20231025202514.png]]

### LUB and GLB of a single element
> [!info]  LUB and GLB of a single element is the same element
- $a \lor a = LUB\{a\} = LUB\{a, a\} = a$
- $a \land a = GLB\{a\} = GLB\{a, a\} = a$

### LUB and GLB of two elements
> [!point] Mostly we will find LUB and GLB for a pair of elements

> [!cases] If $a, b$ are comparable i.e $aRb$, then what is LUB and GLB?
> $LUB\{a, b\} = \;a \; \lor \; b = b$
> $GLB\{a, b\} = \;a \; \land \; b = a$
>> [!diagram] ![[Pasted image 20231025203258.png|$aRb$]]

> [!cases] If $a, b$ are NOT comparable, then what is LUB and GLB?
> LUB is $a \lor b =$ "unique **first** joining point in upward direction"
> GLB is $a \land b =$ "unique **first** meeting point in downward direction"

- These are verified and understood with examples
````col
```col-md
flexGrow=1
===
Unique first joining point
![[Pasted image 20231025203902.png]]
```
```col-md
flexGrow=1
===
Not unique first joining points
![[Pasted image 20231025203926.png]]
```
````
````col
```col-md
flexGrow=1
===
Unique first meeting point
![[Pasted image 20231025204034.png]]
```
```col-md
flexGrow=1
===
Not unique first meeting points
![[Pasted image 20231025204100.png]]
```
````

- When $a \not R b$ and $b \not R a$, then

````col
```col-md
flexGrow=1
===
![[Pasted image 20231025210313.png]]
```
```col-md
flexGrow=1
===
![[Pasted image 20231025210331.png]]
```
````

> [!doubt] Why first unique joining or meeting point when $a \not R b$?
> If there is no unique first point, then GLB or LUB does not exist.
> There should be only one unique joining or meeting point.

$$
LUB\{a, b\} = a\;\lor\;b = a\;\cup\;b = \text{Join}\{a, b\}
$$
$$
GLB\{a, b\} = a\;\land\;b = a\;\cap\;b = \text{Meet}\{a, b\}
$$

> [!think] Reason for join and meet is because of upward relationship in hasse diagram vertices


### LUB and GLB of more than two elements
- It is the same as LUB and GLB for two elements.
![[Pasted image 20231025222131.png|Simplification using comparable elements]]

#### a, b, c are comparable
![[Pasted image 20231025211206.png]]

#### a, b are not comparable, but a and b are related to c
![[Pasted image 20231025211229.png]]
![[Pasted image 20231025211336.png]]

#### a, b are not comparable, but c is related to a and b
![[Pasted image 20231025211307.png]]

#### a, b, and c are not comparable
![[Pasted image 20231025211401.png]]
![[Pasted image 20231025211419.png]]

----
### Relation between LUB and GLB and with the elements of the set
- For a POSET $P$,
	- $\bigcup P =$ LUB of all elements in $P =$ Greatest element of $P$
	- $\bigcap P =$ GLB of all elements in $P =$ Least element of $P$ 

---
### Examples of Elements 

> [!pdf] pdf lec-39-40 Pg. No. 17-30

---