---
pdf: 
module: 
lecture: 
date: 2024-03-17T22:49:00
version:
  - LA-24
last-revision: 2024-05-04T10:37:00
notes-taken: true
tags:
  - LinearAlgebra/Vectors
---
# Linearly Dependent and Independent Vectors

- **A set of vectors is linearly dependent set of vectors, if *at least one* of the vectors can be represented as a linear combination of every other vectors in the set.**

> [!NOTE] 
> Independence is a concept of a set of vectors i.e. a **set of vectors can be linearly dependent or independent**. It doesn't make sense to ask whether a single vector or a vector within a set, is independent.

- In a set of vectors $\{v_1, v_2, \cdots, v_n\}$, there exists a vector $v_1$ which can be represented as a linear combination of every other vectors in the set, making the set LD.
$$
v_1 = c_2v_2 + c_3v_3 + c_4v_4 + \cdots + c_nv_n
$$
- The co-efficients $c_i$ must be real numbers (zero or non-zero) i.e. $c_i \in \mathbb{R}$

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240317230338553.webp]]
> ![[Linearly Dependent and Independent Vectors-20240317233134592.webp]]
> It is not necessary for every vector in a LD set to form a linear combination with every other vectors in the set. The vector $q$ does not form a linear combination of every other vectors, though the set is linearly dependent.

- A set containing a zero vector is always a LD set of vectors.

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240317230746059.webp]]
> Even if every other vectors do not form a linear combination with the remaining vectors, zero vector will definitely form a linear combination with every other vectors making the set LD.

- In Linearly dependent set of vectors, all the vectors may not be represented as the linear combination of every other vectors.

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240317231639962.webp]]
> In the above example, the vector $w$ has a **co-efficient of $0$,** which means it CANNOT be represented as a linear combination of every other vectors in the set, though the set is a LD set.

- From a given set of LD vectors, it is not necessary that there exists only one unique linear combination of vectors.

- If a set of vectors is LD, then its superset is definitely LD, whereas the converse of the statement is not necessarily true.

![[Linearly Dependent and Independent Vectors-20240318222140993.webp]]

If the set $R$ is a LD set, then the superset of $R$ is also a LD set i.e. $\exists$ a vector $v_1$ which can be represented as a linear combination of every other vector in the set $R$ as well as its superset $S$.

In the set $R$,
$$
v_1 = c_2 v_2 + c_7 v_7 + c_9 v_9 
$$
In the set $S$,
$$
v_1 = c_2 v_2 + c_7 v_7 + c_9 v_9 + c_3 v_3 + c_4 v_4 + c_5 v_5 + c_6 v_6 + c_8 v_8 
$$

If the superset $S$ is a LD set, then it is not necessary that the subset $R$ is a LD set, because only the superset may contain the only vector that can be formed as a linear combination of every other vectors, and the subset may not have that vector.

> [!tip] 
> To find the linear dependency in a set of vectors, check the corresponding elements of zero entries.
> ![[Linearly Dependent and Independent Vectors-20240319232307368.webp]]

- Consider the homogenous system $Ax = 0$ of all the vectors in a set,
$$
c_1 v_1 + c_2 v_2 + c_3 v_3 + \cdots + c_n v_n = 0
$$
- If there exists at least one $c_i \not= 0$, then the set of vectors is LD, since the corresponding vector can be represented as a linear combination of every other vectors in the set.
- If we can obtain zero vector by non-trivial (at least one $c_i \not= 0$) linear combination of other vectors, then the set is LD.
$$
c_1 v_1 + c_2 v_2 + \cdots + c_n v_n = 0
$$
---

- **A set of vectors are linearly independent iff they are not linearly dependent.**
- If there exists no $c_i \not= 0$, then the set is Linearly Independent i.e. there is no vector in the set which can be represented as a linear combination of every other vectors.

- The set of vectors $\{v_1, v_2, \cdots, v_n\}$ is LI, if the **only solution** to the homogenous system is trivial i.e. the only solution is when $\forall c_i = 0$. 
- If we can obtain zero vector only by trivial combination of other vectors.
$$
c_1 v_1 + c_2 v_2 + \cdots + c_n v_n = 0 \text{ iff } c_i = 0\;\; \forall i
$$
- If there is a possible solution where at least one $c_i \not= 0$ alongside the trivial solution, then the set is NOT LI.

> [!summary] 

- Consider a set of vectors $\{v_1, v_2, \cdots, v_n\}$ and the homogenous system $Ax = 0$,
$$
c_1 v_1 + c_2 v_2 + c_3 v_3 + \cdots + c_n v_n = 0
$$
> [!cases] $\forall c_i = 0$
- There is only one solution (unique solution) i.e. trivial solution, then the set is LI.

> [!cases] $\exists \;c_i \not=0$
- The solutions are infinite i.e. non-trivial solution, then the set is LD.
- There exists at least one vector $v_1$ which can be formed as a linear combination of every other vectors in the set.
$$
v_1 = - \frac{1}{c_1} (v_2 c_2 + v_3 c_3 + \cdots + v_n c_n)
$$

> [!perspective] 
> A homogenous equation can be used to say whether the columns of a matrix are LD or LI.

---
> [!header] Single Vector Set
- If a set has only a single vector $\{v\}$, then there are two cases to satisfy the homogenous system $cv = 0$
1. If the vector $v$ is a zero vector, then $c$ can be either $0$ or non-zero, then the set is LD.
2. If the vector $v$ is a non-zero vector, then there exists only one solution $c = 0$ i.e. trivial solution, then the set is LI.

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240319233521805.webp]]

---
- The identity vectors (convenient vectors) of a vector space $\mathbb{R}_n$ can represent a linear combination of any vector in $\mathbb{R}_n$. The co-efficients for the linear combination of identity vectors are also convenient.
- These identity vectors are the most efficient vectors to span the vector space and they are called **Basis Vectors**. Basis vectors are the most optimized set of vectors to fill the vector space.

> [!example] 
> Consider the vector space $\mathbb{R}_2$ and take any vector from $\mathbb{R}_2$
> ![[Linearly Dependent and Independent Vectors-20240318225727420.webp]]
>
>> [!observation] 
>> Though this set of vectors is LD, but these contain two LI vectors from the vector space $R^2$, this set of vectors is enough to bring solution to any vector $b$.
>> ![[Linearly Dependent and Independent Vectors-20240503120143588.webp]]
>
> Any vector can be represented as a linear combination of every vector in the vector space $\mathbb{R}_2$ using those two identity vectors.
>
>---
> Now consider the set,
> ![[Linearly Dependent and Independent Vectors-20240318235128738.webp]]
> This set is LI set, since they are not linear combinations of each other.

- A vector space is a collection of vectors which should have a zero vector.
- Any vector space $\mathbb{R}_n$ is a LD set and has only $n$ LI vectors in the set, since they contain a zero vector.

> [!important] 
> $n$ Linearly Independent vectors (convenient or not) from a vector space $\mathbb{R}_n$ gives unique solution to the any vector picked from the same vector space $\mathbb{R}_n$. 

- There can be other $n$ LI vectors in a vector space other than the $n$ identity vectors which can give unique solution (if you solve) to any vector picked from that space.

> [!example] 
> Consider the vector space $\mathbb{R}_2$,
> ![[Linearly Dependent and Independent Vectors-20240318230915499.webp]]
> There exists only trivial solution to the above homogenous system. Hence the set is LI.

- LD vectors does not span the vector space, but they may represent some vectors as a linear combination but not all of the vectors in the vectors space.

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240318235442801.webp]]
> This set is LD, since these two linearly dependent vectors cannot span $\mathbb{R}_2$. 
> These vectors may span the below set of vectors $X$ from $\mathbb{R}_2$.
> ![[Linearly Dependent and Independent Vectors-20240501231526994.webp]]

- If the entire vector space $\mathbb{R}_n$ is taken as a vector set, then the $n$ identity vectors are the only linearly independent vectors, since every other vector can be represented as a linear combination of identity vectors.

> [!question]
> ![[Linearly Dependent and Independent Vectors-20240318232139406.webp]]
>> [!seealso]- Solution
>> The vectors $m$ and $n$ are LI vectors, so the vector $o$ can be represented as a linear combination of $m$ and $n$. So the given set is a LD set.
>>> [!observation] 
>>> It is evident that there cannot be more than 2 LI vectors in a set of vectors from $\mathbb{R}_2$.

- We CANNOT have more than $n$ LI vectors in $\mathbb{R}_n$. There can be only at most $n$ LI vectors in a set of vectors from $\mathbb{R}_n$.
- If there are $n$ LI vectors in a set, then the $(n + 1)^{th}$ vector can be represented as a linear combination of other those LI vectors, making the set LD.

> [!observation] 
> ![[Linearly Dependent and Independent Vectors-20240318234306796.webp]]
> All the vectors in the set $\in \mathbb{R}_3$. There are more than 3 vectors, this set is definitely LD set because,
> 1. If any three vectors are LI, then the fourth vector can be formed as a linear combination, making the set LD.
> 2. If all the vectors are LD, then the set is definitely LD.

If a set of $n$ vectors has $p$ LI vectors where $p \lt n$, then no new LI vectors cannot be generated from the given set.
If you start with $n$ LI vectors, then you willl always end up with at most $n$ LI vectors.

![[Linearly Dependent and Independent Vectors-20240503131340116.webp]]
![[Linearly Dependent and Independent Vectors-20240503131404992.webp]]

> [!summary] 
- If there are more than $n$ vectors from $\mathbb{R}_n$ in a set $Q$, then the set is definitely LD. We have to check for LI or LD set, only if we have less than or equal to $n$ vectors.
- Any $n$ LI vectors from $\mathbb{R}_n$ can fill the space in $\mathbb{R}_n$.

---