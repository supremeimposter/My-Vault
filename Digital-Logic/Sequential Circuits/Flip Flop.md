---
pdf: 
module: 5
lecture: 
date: 2024-03-09T13:25:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
---
# Flip Flop


```mermaid
flowchart TD
A[Design of\nFlip Flop] --> B[Response to\nLevel of\nClock]
A --> C[Response to\nEdge of\nClock]
B --> D[Positive Level\nTriggered \nFlip Flop]
B --> E[Negative Level\nTriggered \nFlip Flop]
C --> F[Positive Edge\nTriggered \nFlip Flop]
C --> G[Negative Edge\nTriggered \nFlip Flop]
```


- Clock Triggering is a property of flip flop and not clock.
- For any flip flop, by default edge triggering is used.
- [[Clock in Digital Circuits|Clock]] is fixed for all flip flops.
- Don't consider clock in the equations, because any flip flop can have any triggering.
- There are many ways to implement edge triggered flip flop and [[Master Slave Flip Flops]] is one of them.


> [!remember] 
> A clock is not level or edge triggered, but a flip flop is level or edge triggered.

- Flip flops are mostly used as storage devices, hence [[Registers]]. Flip flops can also be used to implement frequency dividers, etc.., hence Counters.