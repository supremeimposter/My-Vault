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
- A divide-by-N counter (or module-N counter) is a counter that goes through a repeated sequence of N states. The sequence can be either follow a binary count or any arbitrary sequence.
- [[Ring and Johnson Counters|Ring or Johnson counter]] is used to generate timing signals that control the sequence of operations in a digital system. The purpose of them is to turn on only one hardware at any time.