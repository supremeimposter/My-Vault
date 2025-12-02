---
pdf: lec-7
module: 7
lecture: "7"
date: 2023-12-13T15:05:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# Conflict Serializability

> [!convention] 
> CS - Conflict Serializable
> CESS - Confict Equivalent Serial Schedule

- Only the read, write operations are considered other computations are not taken into consideration in the transactions.

Assume a schedule ${} S {}$ consisting of operations $I {}$ and $J {}$ 
$$S : \;\ldots\;,  I,  \;\ldots\;, J,  \;\ldots$$
````col
```col-md
flexGrow=1
===
## Conflicting 
- $I$ and $J$ belongs to the different transactions
- and on the same data item
- at least one of them is write operation
```
```col-md
flexGrow=1
===
## Non-conflicting 
- $I$ and $J$ belong to the same transaction.
- Both are read operations.
- $I$ and $J$ access different data items.
```
````


- When two **consecutive non-conflicting** operations of two transactions are swapped in a schedule, it does NOT change the effect of schedule on the database.

## Conflict Equivalent

- If a valid schedule ${} S {}$ can be transformed into a valid schedule ${} S'$ by a series of swaps of **consecutive, non-conflicting** instructions of different transactions, we say that $S$ and $S' {}$ are conflict-equivalent.
- Conflict equivalence is <mark class="hltr-green">transitive</mark>.


## Conflict Serializable schedules
- A schedule $S {}$ is conflict serializable if it is conflict equivalent to a serial schedule.
- Every serial schedule is conflict serializable.

## Precedence Graph Test

- Precedence graph helps us to find conflict equivalent serial schedule.
- Transactions from the given schedule are the nodes.

- A schedule ${} S$ is conflict serializable iff precedence graph of $S$ is **acyclic**.
- Topological order of the graph gives the conflict equivalent serial schedule for the given schedule.
- If there is a bidirectional edge between two nodes, then no need to check further, it is NOT conflict equivalent serial schedule.
- A cycle in the precedence graph signifies a contradiction.
- Topological order is not possible for a cyclic graph.
- The time complexity for implementing precedence graph is polynomial complexity.

---
