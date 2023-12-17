---
pdf: lec-9
module: 7
lecture: "9"
date: 2023-12-14T16:51:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS/Transaction
---
# Recoverability

>[!diagram] Classification of schedules based on Recoverability
```mermaid
flowchart TD 
	A[Schedules] --> B[Recoverable schedules]	
	A --> C[Irrecoverable schedules]
	B --> D[Cascadeless schedules]
	B --> E[Cascading Rollback schedules]
```


> [!NOTE] 
> [[Serializability]] and Recoverability are orthogonal concepts i.e. they have nothing to do with each other.

## Irrecoverable and Recoverable schedules


## Preserve Atomicity

- To ensure atomicity, when a transaction is aborted or system failure occurs, all the transactions that are dependent on the transaction must be aborted as well.

## Types of Recoverable Schedules



## Strict Schedule