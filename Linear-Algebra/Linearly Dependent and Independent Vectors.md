---
pdf: 
module: 
lecture: 
date: 2024-03-17T22:49:00
version:
  - LA-24
last-revision: 
notes-taken: false
tags:
  - LinearAlgebra/Vectors
---
# Linearly Dependant Vectors
> [!NOTE] 
> The concept of independence comes with a set of vectors, not just a single vector from a set.

- A set of vectors is linearly dependent set of vectors, if *at least one* of the vectors can be represented as a linear combination of every other vectors in the set.
- In a set of vectors $\{v_1, v_2, \cdots, v_n\}$, the vector $v_1$ is represented as a linear combination of every other vectors in the set making the set LD.
$$
v_1 = c_2v_2 + c_3v_3 + c_4v_4 + \cdots + c_nv_n
$$
- The co-efficients $c_i$ must be real numbers (zero or non-zero).

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240317230338553.webp]]
> ![[Linearly Dependent and Independent Vectors-20240317233134592.webp]]
> It is not necessary for every vector in a LD set to form a linear combination with every other vectors in the set. The vector $q$ does not form a linear combination though the set is linearly dependent.

- A set containing a zero vector is always a LD set.

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240317230746059.webp]]
> Even if every other vectors do not form a linear combination with the remaining vectors, zero vector will definitely form a linear combination with every other vectors making the set LD.

- In Linearly dependent set of vectors, all the vectors may not be represented as the linear combination of every other vectors.

> [!example] 
> ![[Linearly Dependent and Independent Vectors-20240317231639962.webp]]
> In the above example, the vector $w$ has a co-efficient of $0$, which means it cannot be represented as a linear combination of every other vectors in the set, though the set is a LD set.

