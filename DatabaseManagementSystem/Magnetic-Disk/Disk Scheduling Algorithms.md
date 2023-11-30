---
pdf: lec-3-4
module: 5
lecture: 3, 4
date: 2023-11-30T16:11:00
version:
  - DBMS-24
last-revision: 
notes-taken: false
tags:
  - DBMS
  - DBMS/Disks
---
# Sector Read Write Request
> [!lecture] Lecture-3

> [!abstract] What matters the most in Sector R-W requests ?

- Seek time is much larger compared to rotational latency and data transfer time.
- Disk driver maintains a table indexed with the cylinder number.
- Disk scheduling algorithms use only the cylinder number.
- The purpose of disk scheduling algorithms are to reduce the total seek time and the average seek time.
$$
\text{Average number of head movements} = \frac{\text{Total number of head movements}}{\text{Number of Requests}}
$$

# Disk Scheduling Algorithms
- There is no optimal disk scheduling algorithm.
- The arm stops at the final requested disk address.
## FCFS Scheduling Algorithm
- FCFS - First Come First Serve Algorithm
- FIFO - First In First Out Algorithm
- In FCFS, the same cylinder requested at a later time will not be served at the same time, it has to wait for its chance.

## SSTF Scheduling Algorithm
- SSTF - Shortest Seek Time First Algorithm or Shortest Service Time First Algorithm
- SSF - Shortest Seek First Algorithm

## Scan Scheduling Algorithm
- It is also called as elevator algorithm.
- Scan algorithm does not have a uniform serving, which can be overcame by C-Scan Algorithm.
- C-scan serves only while going towards higher cylinder, and for the return direction away from cylinder it does not serve.
## Look Algorithm
- Look algorithm overcomes the disadvantage of Scan algorithm.
- C-scan's disadvantages are overcame by C-Look algorithm.

> [!attention] 
> Questions with new scheduling algorithms can be defined
>> The new algorithm will be well defined in the question.
>
> Questions with sector number instead of cylinder number can be given.
>> Sector number must be converted to cylinder number and then the scheduling algorithm can be applied.
