---
pdf: lec-3-4
module: 2
lecture: 3, 4
date: 2023-11-16T14:41:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Queries
  - DBMS/RelationalAlgebra
  - DBMS/RelationalModel
---

> [!lecture] Lecture-3

# Join
- Join is also called as Inner Join
- There are three types of inner join
	1. Conditional Join ${} R \bowtie_c S {}$
	2. Equi Join
	3. [[Natural Join]] ${} R \bowtie S {}$

## Conditional Join

$$
R \bowtie_c S \equiv \sigma_c \;(R \times S)
$$
- The above transformation does not occurs, as there are joining algorithms to perform joins
- The schema of ${} R \bowtie_c S {}$ is same as schema of ${} R \times S {}$.
- ⟗
- There is NO dangling row when each tuple in both the relations occurs in the resultant relation at least one time.

## Equi Join
- Conditional join is called Equi join, if $c {}$ only contains equality condition.
- Every Equi join is a conditional join.

## Natural Join
![[Natural Join#Natural Join]]
- There is no redundant attribute in natural join.

---
# Division Operation
> [!lecture] Lecture-4
>> [!youtube] [Division Operation in Relational Algebra | BEST Detailed Complete Explanation | DBMS | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=Zzjy-q667r0)


> [!analogy]
> **Division in Mathematical Algebra** 

- Relations $R, S, Q {}$ all have different schema.
- ${} \frac{R}{S} = Q {}$ , ${} Q$ is the largest relation such that $Q \times S \subseteq R$
- To define $\frac{R}{S} {}$, attributes ($R$) ${} \supset {}$ attributes ($S$) 

---