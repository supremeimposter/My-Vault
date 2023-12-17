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

---
## TRC 1
- Logic ${} \rightarrow {}$ Result

## TRC 2
- Result ${} \rightarrow {}$ Logic
- From the relation $R$, there is a tuple $x$ which leads to the resultant relation $A$.
- From the resultant relation $A$ out of ${} R {}$, we write a query for a tuple $t$ in ${} A$.
- The schema of a tuple $t$ is $A$.
- The variables $t$ is a free variable. It can never be bounded.
- Write a query from the logic.

> [!attention] 
> No condition is **implicit** in TRC 2. Mention the condition to supply the value to the output in the query.

---
## Safe and Unsafe Query
````col
```col-md
flexGrow=1
===
### Safe Query
If a TRC query provides data that is in the database then that TRC query is **safe**.
```
```col-md
flexGrow=1
===
### Unsafe Query
If a TRC query provides any data that is NOT in the database then that TRC query is **unsafe**.
```
````

- If a TRC query provides infinite number of tuples, then that query is guaranteed to be unsafe. Because data in database is finite.
- [[Relational Algebra]] has the same expressive power as safe TRC query and as safe DRC query.
- All TRC queries have greater expressive power than Relational Algebra.