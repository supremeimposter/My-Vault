---
pdf: lec-9A, lec-9B-9C
module: 1
lecture: 9A, 9C
date: 2023-11-14T10:08:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/RelationalModel/Decomposition
  - DBMS/RelationalModel/NormalForms
  - DBMS/RelationalModel/FunctionalDependency
---
# Normalization in Relational Model

**Normalization of data** is to minimize redundancy and minimize insertion, updation and deletion anomalies. 
If a relation is not in a good [[Normal Forms|normal form]], then it [[Decomposition|decomposed]] to a set of relation schema such that,
- each relation schema is in good form
- decomposition is a lossless-join decomposition and preferably dependency preserving.

Decomposition or a relation is decided by the normal forms.

To put it simply, Normalization is decomposition of relation into normal forms. 

## 2NF Decomposition
> [!lecture] Lecture-9A
>> [!youtube] [2NF Decomposition | Decomposition into Second Normal Form | DBMS | GO Classes | Normalization - YouTube](https://www.youtube.com/watch?v=6WGQqyVmlL0)

- To overcome the violation of 2NF.
- The violation of 2NF should be separated from the original table.

![[Decomposition into Normal Forms-20231114101126130.webp]]

- Why [[Normal Forms#Second Normal Form (2NF)|2NF]] for Relations?

- 2NF decomposition of any relation ${} R$ is always possible, such that the decomposition is lossless and dependency preservation.


## 3NF Decomposition
> [!lecture] Lecture-9C

### Synthesis Algorithm
> [!NOTE] This is from a research paper by Philip A. Bernstein
- This algorithm guarantees **lossless and dependency preserving** 3NF decomposition for all the relations.
- Even if a relation is already in 3NF, we can still apply this algorithm and obtain an new 3NF decomposition.
- We are not checking any 3NF violations in this algorithm.
- This algorithm gives 3NF decomposition for a relation $R$ faster than the process of checking whether $R$ is in 3NF.

> [!doubt] 
> Synthesis algorithm will give 3NF decomposition of $R$ even if $R$ is NOT in 3NF.
>> Answer : Yes. That's why it is called **3NF synthesis** algorithm

> [!steps] 

1. Find the candidate key from the given FD set.
2. Find minimal cover of given FD set.
3. If there is a common LHS then merge (Union Law).
4. Create sub-relations of the attributes in each of the FDs in the given FD set. (Not just violating ones)
5. Check if any of the FDs contain the candidate key
	1. If there is none, create one sub-relation for one of the candidate keys.
	2. If it contains, 
6. Remove some sub-relations that are subsets of other sub-relations. The remaining sub-relations are the 3NF decompositions. 


## BCNF Decomposition


> [!doubt] 
> - BCNF lossless decomposition is always possible
> - It is always possible for all the relations you can have some lossless BCNF decomposition


## BCNF Algorithm

> [!info] This algorithm is from Ullmann book.

- This algorithm guarantees lossless decomposition for any relation, but it does NOT guarantee dependency preservation.

![[Decomposition into Normal Forms-20231114152611706.webp]]

- We MAY get different BCNF decomposition based on the first violation we choose.


> [!example] 
> ![[Decomposition into Normal Forms-20231114160828803.webp]]

![[Decomposition into Normal Forms-20231114163811836.webp]]



---


> [!summary] 

- 3NF decomposition is the best as it has less redundancies due to FDs than 2NF decomposition and always guarantees dependency preserving and lossless decomposition unlike BCNF decomposition.