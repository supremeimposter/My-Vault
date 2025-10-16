---
pdf: lec-5, lec-6
module: 7
lecture: 5, 6
date: 2023-12-13T08:39:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# Serializability

> [!abstract] 
> Every Serial schedule preserves database consistency, but they are of poor performance. We need concurrent schedules that have the same effect (preserve database consistency) as serial schedules while having a good throughput. So we need to find equivalent serializable schedules.


> [!definition] 
> If ${} S$ is a concurrent schedule, $S {}$ is serialiazble if and only if for **every** initial consistent database state, effect of ${} S {}$ is same as **some** serial schedule.


- A schedule ${} S$ is serializable if there is a serial schedule $S' {}$ such that for every initial consistent database state, the effects (final consistent database state) of ${} S$ and $S'$ are the same.

- Serial schedules always preserves consistency of a database, so if the effects of a schedule $S$ are similar to a serial schedule, then the schedule $S$ is serializable.
- Serializability in general, relies on all the operations and computations in the transactions which makes it very hard to implement.

![[Serializability-20231213131409716.webp]]


> [!NOTE] 
> `COMMIT` operation is irrelevant to serializability.
> Imagine aborted transactions are never there for serializability.


---