---
pdf: lec-14
module: 7
lecture: "14"
date: 2023-12-16T09:08:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# Time Stamp-based Protocols

## Time Stamp Ordering Algorithm
- When a transaction is created, it is assigned a Time Stamp.
- The serializability order is already decided when the transaction is created or submitted.

> [!question] 
> How to generate time stamps?


- If there are two different transactions, then there have different timestamps.
- Serializability order (conflict order) is fixed before execution in the order of the timestamps.
- The equivalent serial schedule is in the order of the timestamps.

> [!quote] Rules
> If you are late, it is your fault
> If your turn is gone, it is your fault

- If an older transaction is late, then it aborts and restarts with a **new timestamp** as if it restarts with the old original timestamp again it is late and gets aborted.
- The RTS WTS table is only updated with the latest transaction.

## Thomas Write Rule
- If the problem happens with read time stamp (RTS), then rollback.
- But if the problem **happens only with the write time stamp** (WTS), then ignore and continue.
- Conflict serializable schedules are not ensured. But the schedules will be correct.


> [!conclusion] 

- Deadlock possibility is not there in time stamp based protocol, since when a problem occurs, one transaction rolls back.
- Cycle never occurs in the wait-for graph.
- Starvation can happen if a same transaction keeps rolling back.
