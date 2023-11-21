---
pdf: lec-1-3
module: 3
lecture: "1"
date: 2023-11-19T10:23:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Queries
  - DBMS/RelationalModel
  - DBMS/RelationalCalculus
---
# Tuple Relational Calculus
> [!lecture] Lecture-1

- In Relational Calculus, every variable is a tuple variable.
- ${} t {}$ is a tuple in a relation $R$ which can be represented as ${} R(t) {}$ or ${} t \in R {}$
- There are two standard ways to write every TRC query.
- Relational Algebra operators are NOT allowed in Tuple Relational Calculus queries. If it is given, then focus on understanding of the query.

## Way 1
- Logic ${} \rightarrow {}$ Result

## Way 2
- Result ${} \rightarrow {}$ Logic
- From the relation $R$, there is a tuple $x$ which leads to the resultant relation $A$.
- From the resultant relation $A$ out of ${} R {}$, we write a query for a tuple $t$ in ${} A$.
- The schema of a tuple $t$ is $A$.
- Write a query from the logic.

> [!attention] 
> No condition is **implicit** in Way 2. Mention the condition to supply the value to the output in the query.

## Examples

> [!example] 
> ![[Tuple Relational Calculus-20231119212912762.webp]]

> [!example] 
> ![[Tuple Relational Calculus-20231119214519342.webp]]

- Division operator
![[Tuple Relational Calculus-20231121091724946.webp]]

![[Tuple Relational Calculus-20231121091742922.webp]]


> [!example] 
> ![[Tuple Relational Calculus-20231121215802955.webp]]

![[Tuple Relational Calculus-20231121215952987.webp]]
![[Tuple Relational Calculus-20231121220201107.webp]]


> [!example] 
> ![[Tuple Relational Calculus-20231121223821283.webp]]

![[Tuple Relational Calculus-20231121223849844.webp]]
![[Tuple Relational Calculus-20231121223911373.webp]]
