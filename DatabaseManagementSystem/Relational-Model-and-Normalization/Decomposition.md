---
pdf: lec-7A-7C, lec-7D
module: 1
lecture: 7A, 7B, 7C, 7D
date: 2023-11-12T17:14:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/RelationalModel
---

> [!lecture] Lecture-7A, 7B, 7D
>> [!youtube] [DBMS : Decomposition of a Relation | Non-Binary Decomposition | The Chase Test for Lossless Join Decomposition | GO Classes | Deepak Poonia - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHjweUdD-fgcdD-oMiylqE9t)

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
- Attribute preservation property is a part of definition of decomposition.
$$
R_1 \cup R_2 \cup \ldots \cup R_n = R
$$
- Decomposition will NEVER cause to lose the original tuples in ${} R {}$.

> [!attention] Wrong information means loss of knowledge or information.
## Lossless Decomposition
- This decomposition will NEVER give wrong information.
- There are NO spurious tuples.
$$
R_1 \bowtie R_2 \bowtie \ldots \bowtie R_n = R
$$

## Lossy Decomposition
- It does NOT lose any original tuples, but it may create spurious tuples.
- This decomposition MAY give wrong information (spurious tuples)
- For some instance, it definitely gives wrong information.
$$
R_1 \bowtie R_2 \bowtie \ldots \bowtie R_n \supset R
$$

## Binary Decomposition

![[Decomposition-20231112191720577.webp]]


> [!question] 
> **How to find lossless or lossy decomposition in binary decomposition?**

- In binary decomposition, a decomposition is **lossless** iff the set of common attributes of ${} R_1 {}$ and ${} R_2 {}$ is a **super key** in at least one of ${} R_1 {}$ or ${} R_2 {}$. (But it may or may not be a super key in original relation $R {}$) i.e. The common attributes set.
- If there are no common attributes, then it is **lossy**, since ${} R_1 \cap R_2 = \phi {}$ so ${} \phi \not\rightarrow R_1 {}$ and ${} \phi \not\rightarrow R_2 {}$. 
- Lossless-join decomposition is also called as non-additive join property. 
$$
\begin{align} \\
R_1 \;\cap\; R_2 \rightarrow R_1 \\
\text{ or } \\
R_1 \;\cap\; R_2 \rightarrow R_2
\end{align}
$$
- In binary decomposition, a decomposition is **lossy** iff the set of common attributes of $R_1 {}$ and ${} R_2 {}$ is NOT a **super key** in both $R_1 {}$ and ${} R_2 {}$.
$$
\begin{align} \\
R_1 \;\cap\; R_2 \not\rightarrow R_1 \\
\text{ and } \\
R_1 \;\cap\; R_2 \not\rightarrow R_2
\end{align}
$$


> [!example] 
> Since the common attributes ${} B, C {}$ is not a super key, the decomposition is lossy.
>![[Decomposition-20231112193528169.webp]]

- Lossless-join decomposition is also called as non-additive join.
- Always check lossy or lossless only on schema and NOT on instances.

## Dependency Preserving Decomposition
> [!lecture] Lecture-7C

- In any decomposition ${} F {}$ covers ${} (F_1 \cup F_2 \cup \ldots \cup F_n) {}$.
- If ${} (F_1 \cup F_2 \cup \ldots \cup F_n) {}$ covers $F {}$, then there is NO need to join relations to enforce functional dependencies. (Dependency preserving)
- If ${} (F_1 \cup F_2 \cup \ldots \cup F_n) {}$ does NOT cover ${} F$, then there is a need to join relations to enforce functional dependencies (Non-dependency preserving). Tables can be joined only when decomposition is lossless.

> [!important] Consider only non-trivial FDs.

- Dependency preserving means enforcing FDs without joining tables.
- Non-dependency preserving means there is NO need to join tables to enforce FDs.

- In decomposition, NO additional dependency is obtained.

----
## Chase Algorithm

> [!lecture] [Chase Algorithm | Chase Test for Lossless Join | DBMS | Decomposition of Relation | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=YNsvuPA_vf0&list=PLIPZ2_p3RNHjweUdD-fgcdD-oMiylqE9t&index=5)


> [!question] 
> **How to find lossless or lossy decomposition for both binary and non-binary decomposition?**

- Create a table as sub-relation vs individual attributes and fill the table with 'a' entries as per the attributes in the sub-relations.
- Now according to the FD's fill the table whenever there are at least two matching tuples.
- If a row has all the entries as 'a', then no more further checking is necessary and it is lossless. Or else, the decomposition is lossy.
- If a table cannot be changed from the initial state and there is no row full of 'a' entries, then the decomposition is lossy.