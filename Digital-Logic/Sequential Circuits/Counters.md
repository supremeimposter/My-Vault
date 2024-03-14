---
pdf: 
module: 5
lecture: 
date: 2024-03-14T12:09:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
---
# Counters
- A counter is a [[Registers|register]] that goes through a predetermined sequence of binary states upon the application of input pulses.

```merm
flowchart TD
A[Counters] --> B[Synchronous\nCounters]
A --> C[Asynchronous\nCounters]
```


> [!attention] 
> The idea of asynchronous [[Sequential Circuits|sequential circuits]] is different from the idea of asynchronous counters.


- All the flip flops in the synchronous counter are connected to the same clock and the circuit responds to the clock.
- In asynchronous counter, the output of one flip flop acts as the clock for the next flip flop.