---
pdf: lec-7A-7C, lec-7D, lec-9B-9C
module: 1
lecture: 7A, 7B, 7C, 7D, 9C
date: 2023-11-12T17:14:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/RelationalModel
  - DBMS/RelationalModel/Decomposition
  - DBMS/RelationalModel/FunctionalDependency
---
# Decomposition

- **Lossless-join property** enables us to recover any instance of the decomposed relation from corresponding instances of the smaller relations. 

- **Dependency preservation property** enables us to enforce any constraint on the original relation by simply enforcing some constraints on each of the smaller relations. That is, we need not perform joins of the smaller relations to check whether a constraint on the original relation is violated.

- **Attribute preservation property** is a part of definition of decomposition. 
- The relation schema $R=A_{1} A_{2} \cdots A_{n}$ is splitted into a collection of subsets of $R$ i.e. ${R_{1}, R_{2}. \cdots, R_{m}}$ such that,
$$
R_1 \cup R_2 \cup \ldots \cup R_n = R
$$
- When schema union of all smaller relations is performed, the schema of the original relation is obtained.
- If the attributes are not preserved, then the decomposition is not valid and lossy. But attributes must be preserved in any decomposition.

> [!example] 
> Consider a relation schema R(A, B, C, D). It can be decomposed into the following ways.
> 
> 1. $D_{1} = \{ AB, CD \}$
> 2. $D_{2} = \{AB, CD, D\}$
> 3. $D_{3} = \{A, BCD\}$
> 4. $D_{4} = \{ AB, BC, CD, AD \}$

- When a new tuple which is not in the original relation is obtained from joining decomposed relations, then it is called a **Spurious** tuple. Wrong information means loss of information or knowledge.

> [!attention] 
> Decomposition will never cause to lose the original tuples in $R$.
> Always check decomposition on the schema rather than on an instance.

Any decomposition of $R$ into subsets of attributes $R_{1}, R_{2}, \cdots, R_{n}$ is always a superset of $R$.
$$
R_{1} \bowtie R_{2} \bowtie \cdots  \bowtie R_{n} \,  \supseteq \, R
$$

## Lossless Decomposition

Lossless decomposition never creates spurious tuples.
$$
R_1 \bowtie R_2 \bowtie \ldots \bowtie R_n = R
$$

![[Decomposition-20240713121416125.webp]]

In the above decomposition of $R$, a super key is a common attribute in the smaller relations.

> [!attention] 
> Lossless decomposition is the most important decomposition.

## Lossy Decomposition

It does not lose any of original tuples, but it may create spurious tuples, which is also loss of information.
$$
R_1 \bowtie R_2 \bowtie \ldots \bowtie R_n \supset R
$$

![[Decomposition-20240713121826172.webp]]

In the above decomposition of $R$, the common attribute $B$ is not a super key.

## Binary Decomposition

- The relation $R$ is decomposed into two sub-relations $R_{1}$ and $R_{2}$ in binary decomposition.

![[Decomposition-20231112191720577.webp]]

- $R_{1} \cap R_{2}$ is the common set of attributes of $R_{1}$ and $R_{2}$.

> [!question] 
> **How to find lossless or lossy decomposition in binary decomposition?**

- In binary decomposition, a decomposition is **lossless** iff $R_{1} \cap R_{2}$ is a **super key** in at least one of $R_1$ or $R_2$. But $R_{1} \cap R_{2}$ may or may not be a super key in original relation $R$.
- Lossless-join decomposition is also called as non-additive join property. 
$$
\begin{align}
R_1 \; &\cap\; R_2 \rightarrow R_1 \\ 
&\text{ or } \\
R_1 \; &\cap\; R_2 \rightarrow R_2
\end{align}
$$

> [!example] 
> ![[Decomposition-20240713151936612.webp]]

> [!example] 
> ![[Decomposition-20240714103407929.webp]]

- In binary decomposition, a decomposition is **lossy** iff the set of common attributes of $R_1 {}$ and ${} R_2 {}$ is **not a super key** in both $R_1 {}$ and ${} R_2 {}$.
$$
\begin{align}
R_1 \; &\cap\; R_2 \not\rightarrow R_1 \\
&\text{ and } \\
R_1 \; &\cap\; R_2 \not\rightarrow R_2
\end{align}
$$
- If there are no common attributes, then it is **lossy**, since ${} R_1 \cap R_2 = \phi {}$ so ${} \phi \not\rightarrow R_1 {}$ and ${} \phi \not\rightarrow R_2 {}$. 

> [!example] 
> $R_{1} \cap R_{2} = \{ \text{name} \}$ is not a super key, hence the decomposition is lossy.
> 
> ![[Decomposition-20240713151551772.webp]]

> [!example] 
> Since the common attributes ${} B, C {}$ is not a super key, the decomposition is lossy.
> 
> ![[Decomposition-20231112193528169.webp]]

> [!example] 
> ![[Decomposition-20240714103439267.webp]]

- Always check lossy or lossless decomposition only on schema and NOT on instances.

> [!example] 
> ![[Decomposition-20240713154309338.webp]]

To check lossless or lossy decomposition in non-binary decomposition, [[Decomposition#Chase Algorithm|chase test]] is used.

## Dependency Preserving Decomposition
> [!lecture] Lecture-7C, 9C

- The decomposition of $R$ with FD set $F$ is a set of tables $R_{i}$ with FD sets $F_{i}$. 
- $F_{i}$ is the subset of dependencies in $F^+$ that include only attributes in $R_{i}$.
- In any decomposition, $F$ always covers $(F_1 \cup F_2 \cup \ldots \cup F_n)$.
$$
(F_1 \cup F_2 \cup \ldots \cup F_n)^+ \subseteq F^+
$$

![[Decomposition-20240713162202087.webp]]

- If all the attributes are in a single table, then there are many [[Problems caused by Redundant Information|redundancy issues]], but we don't have to join tables to get any information.
- Though decomposition has many benefits such as less redundancy less anomalies and less memory needed, to get an information, the tables must be joined which is a costly operation.

- If ${} (F_1 \cup F_2 \cup \ldots \cup F_n) {}$ covers $F {}$, then there is no need to join relations to enforce functional dependencies as the dependencies are preserved in the decomposed relations i.e. **Dependency preserving decomposition**.
$$
F^+ = (F_1 \cup F_2 \cup \ldots \cup F_n)^+
$$

> [!example] 
> ![[Decomposition-20240714103013786.webp]]

- If ${} (F_1 \cup F_2 \cup \ldots \cup F_n) {}$ does not cover ${} F$, then there is a need to join relations (only when the decomposition is lossless) to enforce functional dependencies as the dependencies are not preserved in the decomposed relations i.e **Non-dependency preserving decomposition**. 
$$
F^+ \supset (F_1 \cup F_2 \cup \ldots \cup F_n)^+
$$

> [!remember] 
> Tables can be joined only when decomposition is lossless or else we get wrong information (spurious tuples).

> [!example] 
> Consider relation $R$ as the universal relation i.e. database
> 
> ![[Decomposition-20240713180330712.webp]]
> 
> The above decomposition is lossless
> 
> ![[Decomposition-20240714094054740.webp]]
> ![[Decomposition-20240714091021699.webp]]
> 
> FDs $B \to D$ and $CD \to E$ are not lost, but they can be enforced when the tables are joined as the decomposition is lossless.

> [!example] 
> ![[Decomposition-20240714101240078.webp]]
> ![[Decomposition-20240714101257368.webp]]
> ![[Decomposition-20240714101318618.webp]]

> [!example] 
> ![[Decomposition-20240714112421457.webp]]
> ![[Decomposition-20240714112432272.webp]]
> ![[Decomposition-20240714112447699.webp]]

- Consider only non-trivial FDs.
- Individual relations cannot enforce FDs.  
- Before every insertion or modification, two or more relations may have to be joined to enforce some FDs. 
- Some FDs may be already enforced in the individual relations.

> [!summary] 

- Dependency preserving means enforcing FDs without joining tables.
- Non-dependency preserving means there is no need to join tables to enforce FDs, but not for inserting or updating or deleting data.
- To insert or update or delete any data, the relations have to be joined in any type of decomposition except lossy.
- In decomposition, additional dependencies are never produced.

- A lossless and dependency preserving decomposition is the most *desired decomposition*, as there is no need to join tables to preserve dependency and there is no wrong information.

----
## Chase Algorithm

> [!question] 
> **How to find lossless or lossy decomposition for both binary and non-binary decomposition?**

The chase test is used to check lossy or lossless decomposition for both binary and non-binary decomposition.

Non-binary decomposition is decomposing the relation into at least 3 sub-relations.

> [!lecture] [Chase Algorithm | Chase Test for Lossless Join | DBMS | Decomposition of Relation | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=YNsvuPA_vf0&list=PLIPZ2_p3RNHjweUdD-fgcdD-oMiylqE9t&index=5)

- Create a table with sub-relations as rows and individual attributes as columns and intially fill the table with 'a' entries whenever an attribute occurs in a sub-relation.
- Now according to the definition of FD's,  fill the table *repeatedly* whenever there are at least two matching tuples.
- Repeatedly apply the above step until no more changes can be made.
- If a row has all the entries as 'a', then no more further checking is necessary and can conclude the decomposition as lossless. Or else, the decomposition is lossy.
- When the table cannot be changed anymore and there is no row full of 'a' entries, then the decomposition is lossy.

> [!example] 
> ![[Decomposition-20240714220705282.webp]]
> 
> ![[Decomposition-20240714220904348.webp]]
> 
> ![[Decomposition-20240714222044081.webp]]


> [!example] 
> ![[Decomposition-20240714222221550.webp]]
> 
> The initial table is,
> 
> ![[Decomposition-20240714222236655.webp]]
> 
> ![[Decomposition-20240714222252615.webp]]
> 
> ![[Decomposition-20240714222259807.webp]]
> 
> ![[Decomposition-20240714222324351.webp]]
> 
> ![[Decomposition-20240714222331678.webp]]
> 
> ![[Decomposition-20240714222338268.webp]]
> 
> ![[Decomposition-20240714222344290.webp]]
> 
> ![[Decomposition-20240714222359008.webp]]

> [!example] 
> ![[Decomposition-20240714223955769.webp]]

---