---
pdf: lec-12-13
module: 7
lecture: "13"
date: 2023-12-15T22:14:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# Deadlock in Transactions
- Deadlock happens in a system if there is a set of transactions such that each of the transaction is waiting for each other to release the locks.

## Deadlock Prevention Schemes

### Conservative Approach

- Starvation is possible.

### Partial Ordering Data Items

- programmer has to know the ordering on the data items.


### Wait-die Scheme
- Older transactions are given more priority.
- Older transactions can wait and younger transactions can die (abort).
- It is non-pre-emptive.
- It is handling starvation.

### Wound-wait Scheme
- Older transactions can wound(abort) the other transactions whereas the younger can wait.
- It is pre-emptive.
- It is handling starvation.


> [!conclusion] 
- Deadlock prevention schemes are expensive to implement, but they never allow a system deadlock.


## Deadlock Detection

> [!definition] Wait-for Graph
> Nodes - Transactions
> Edge - ${} T_i \rightarrow T_j {}$ means ${} T_i {}$ is waiting for ${} T_j {}$
> 

- Deadlock is possible iff there is a cycle in the wait-for graph.
- Wait-for graph is a dynamically changing graph as there are many transactions in the system.

### Victim Selection


# Starvation Handling in Transactions
