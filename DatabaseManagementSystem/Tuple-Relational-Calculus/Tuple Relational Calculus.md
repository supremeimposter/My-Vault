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

## Way 1
- Logic ${} \rightarrow {}$ Result

## Way 2
- Result ${} \rightarrow {}$ Logic
- From the relation $R$, there is a tuple $x$ which leads to the resultant relation $A$.
- From the resultant relation $A$ out of ${} R {}$, we write a query for a tuple $t$ in ${} A$.
- The schema of a tuple $t$ is $A$.

> [!attention] 
> No condition is **implicit** in Way 2. Mention the condition to supply the value to the output in the query.

## Examples

> [!example] 
> ![[Tuple Relational Calculus-20231119212912762.webp]]

> [!example] 
> ![[Tuple Relational Calculus-20231119214519342.webp]]
