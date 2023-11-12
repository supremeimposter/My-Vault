---
pdf: lec-7A-7C
module: 1
lecture: 7A, 7B, 7C
date: 2023-11-12T17:14:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/RelationalModel
---
> [!lecture] Lecture-7A, 7B

- [[Functional Dependency|FDs]] may create many data redundancies.
- FDs are applicable to all the tables in the database.

# Problems caused by redundant information

- Redundant storage
- Updation Anomalies
- Insertion Anomalies
- Deletion Anomalies

- The solution of all of the above anomalies is decomposition.

# Decomposition

> [!terminology] 
> When a new tuple which is not in the original relation is obtained from joining decomposed relations, then it is called a **Spurious** tuple.

- Decomposition will NEVER cause to lose the original tuples in ${} R {}$.

> [!attention] Wrong information means loss of knowledge or information.
## Lossless Decomposition
- This decomposition will NEVER give wrong information.
- There are NO spurious tuples.
$$
R_1 \bowtie R_2 = R
$$

## Lossy Decomposition
- It does NOT lose any original tuples, but it may create spurious tuples.
- This decomposition MAY give wrong information (spurious tuples)
- For some instance, it definitely gives wrong information.
$$
R_1 \bowtie R_2 \supset R
$$

## Binary and Non-Binary Decomposition

![[Decomposition-20231112191720577.webp]]


- In binary decomposition, a decomposition is **lossless** iff the set of common attributes of ${} R_1 {}$ and ${} R_2 {}$ is a **super key** in at least one of ${} R_1 {}$ or ${} R_2 {}$. (But it may or may not be a super key in original relation $R$)
- In binary decomposition, a decomposition is **lossy** iff the set of common attributes of $R_1 {}$ and ${} R_2 {}$ is NOT a **super key** in both $R_1 {}$ and ${} R_2$.

> [!example] 
> Since the common attributes $B, C {}$ is not a super key, the decomposition is lossy.
>![[Decomposition-20231112193528169.webp]]


- Always check lossy or lossless only on schema and NOT on instances.


## Dependency Preservation
> [!lecture] Lecture-7C
