---
pdf: lec-3-4, lec-5, lec-6-7-8
module: 2
lecture: 3, 4, 5, 6
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

# Inner Join
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
- There is NO dangling row when each tuple in both the relations occurs in the resultant relation at least one time.

## Equi Join
- Conditional join is called Equi join, if $c {}$ only contains equality condition.
- Every Equi join is a conditional join.

> [!conflict] 
> In `Raghuramakrishna` book, the redundant attributes are not included in the final resultant schema of Equi Join

## Natural Join
![[Natural Join#Natural Join]]
- Natural Join is equality of common attributes.
- There is no redundant attribute in natural join.
- Natural Join is associative.

> [!terminology] By default, if the word **join** is given, then it means Natural Join.

---
# Division Operation
> [!lecture] Lecture-4
>> [!youtube] [Division Operation in Relational Algebra | BEST Detailed Complete Explanation | DBMS | Deepak Poonia - YouTube](https://www.youtube.com/watch?v=Zzjy-q667r0)

> [!analogy]
> **Division in Mathematical Algebra** 

- Relations ${} R, S, Q {}$ all have different schema.
- ${} \frac{R}{S} = Q {}$ , ${} Q$ is the largest relation such that $Q \times S \subseteq R$
- To define $\frac{R}{S} {}$, attributes ($R$) ${} \supset {}$ attributes ($S {}$) 

## Division Operation using Basic Operations
> [!lecture] Lecture-5

- It is called Healy's division
$$
\frac{R(A, B)}{S(B)} = Q(A) = \Pi_A \; (R) - \Pi_A \; [\=;(\Pi_A \;(R) \times S\;) - R\;]
$$

- It is called Maier's division
$$
\frac{R(A, B)}{S(B)} = Q(A) = \bigcap\limits_{\forall b_i \in B} \;\Pi_A\;(\;\sigma_{B=b_i} (R)\;)
$$

---
# Outer Join

## Full Outer Join
- It is also called simply as **Outer Join**
- It is denoted by ⟗
- Dangling tuples are included in the resultant relation with help of nulls (${} \bot {}$).
- Outer join = Natural join + dangling tuples of both relations.

## Left Outer Join

## Right Outer Join


## Conditional Outer Join
- First perform the condition ${} \theta {}$ and then perform the outer join.
- Conditional Outer Join = Conditional Join + dangling tuples of both relations.

## Outer Join using Basic Operations


# Summary

- In natural join, if there are no common attributes, then ${} R \bowtie S = R \times S {}$.