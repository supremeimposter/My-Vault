---
pdf: 
module: 5
lecture: "18"
date: 2024-03-16T17:58:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
---
# Ring Counter
- The initial state of ring counter is `1000`.


## Implementation using Shift Register


## Implementation using Decoder


---
# Twisted Ring Counter
- It is also called as Twisted Ring Counter or Switched-Tail ring counter or Mobius Counter.
- The initial state of twisted ring counter is `0000`.

> [!conflict] 
> Some authors consider twisted ring counter as johnson counter.
> The purpose of Rign and Johnson counters is to generate timing signals, whereas the twisted ring counter is not.

---
# Johnson Counter
- The initial state of johnson counter is `1000`.

Johnson Counter with n flip flops = Twisted Ring Counter + 2n two-input AND gates

- The output of the AND gates will be the output of the johnson counter.
- At a time, only one AND gate will be `1` i.e. only one hardware will be activated.

---