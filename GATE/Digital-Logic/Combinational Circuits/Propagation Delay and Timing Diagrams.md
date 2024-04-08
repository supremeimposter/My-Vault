---
pdf: 
module: 3
lecture: "6"
date: 2024-03-04T12:28:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/CombinationalCircuits
  - DigitalLogic/SequentialCircuits
---
# Propagation Delay and Timing Diagrams
> [!youtube] 
> [Lecture 6 - Propagation Delay & Timing Diagrams | Digital Logic - YouTube](https://www.youtube.com/watch?v=L1XM3RXrtaE)

- There is always a negligible delay in the digital circuits.


> [!header] Assumptions about Propagation Delay
- We assume the wire propagation delay as $0$ nanoseconds.


> [!header] Propagation Delay of the Circuit

- The delay of the critical path is same as delay of the circuit.

- If the given circuit (however complex) has a propagation delay of $n$ nanoseconds, then the ideal waveform shifts to right by $n$ nanoseconds.

> [!conclusion] 
> If the propagation delay of a circuit is $n$ nanoseconds, then wait for at least $n$ nanoseconds before again changing an input for the circuit to behave in a stabilized manner.

