---
pdf: lec-10, lec-11
module: 7
lecture: 10, 11
date: 2023-12-15T13:41:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# Lock-based Protocols

## General Lock-based Protocols

![[Concurrency Control Protocols-20231215125744804.webp]]
- Before accessing (read / write) any data item, request lock on the data item. The request is made to the concurrency control manager.

> [!NOTE]
> Only read - shared lock
> write (and read) - exclusive lock

- Lock conversion is not by default in locking protocols.

- Two transactions can take shared lock on the same data item.
![[Lock-based Protocols-20231215135246825.webp]]

### Early Unlocking

- Using general locking rules, it is possible to create non-serializable schedules.
- So it violates database consistency and isolation is not guaranteed.

### Delayed Unlocking

- Deadlock is possible for delayed unlocking.
![[Lock-based Protocols-20231215135211528.webp]]
![[Lock-based Protocols-20231215135225130.webp]]


> [!conclusion] 


## Two-Phase Locking Protocols

### Basic 2PL
- 2PL protocol is defined for each transaction individually.
- General lock-based protocols are also followed.
1. Growing phase - request only lock
2. Shrinking phase - request only unlock

- Beyond lock point, there is no lock request.
- If every transaction individually is 2PL, then the schedule generated is conflict serializable and the equivalent serial schedule is in the order of lock points of transactions.
- In 2PL protocol, the serializability order is decided at execution time.

> [!tip] 
> If a schedule ${} S$ is allowed by 2PL, then $S {}$ is conflict serializable.
> If $S {}$ is not conflict serializable, then $S {}$ is not allowed by 2PL.


> [!conflict] Schedule VS Transaction in terms of 2PL
> 



> [!conclusion] 
- 2PL can generate irrecoverable schedules.
- 2PL generated schedules have a possibility of deadlock.
- Cascading rollback schedules is possible.

### Strict 2PL
- Release exclusive lock on an element only after commit or abort in a transaction.

### Rigorous 2PL
- Release any lock on an element only after commit or abort in a transaction.
- Shrinking phase starts after commit or abort.

### Conservative 2PL
- Take all the locks before starting the transaction operations.

![[Lock-based Protocols-20231215213208633.webp]]

### 2PL with Lock Conversion


> [!NOTE] 
> To upgrade an item ${} A$, no other transaction should have a shared lock on $A$.

- upgrade is only possible in the growing phase and downgrade is only possible in the shrinking phase.
- It is possible for a deadlock.