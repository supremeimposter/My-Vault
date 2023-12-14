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
  - DBMS
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


## Irrecoverable and Recoverable schedules