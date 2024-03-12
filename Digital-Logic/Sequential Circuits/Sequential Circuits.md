---
pdf: 
module: 5
lecture: "1"
date: 2024-03-07T19:03:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
---
# Sequential Circuits

- In sequential circuits, state = output = stored data.


> [!convention] 
> $Q^+ = Q_n = Q_{t + 1}$


- In sequential circuits, synchronous means **in sync with clock** and asynchronous means **not in sync with clock**.

- Circuits with [[Flip Flop]] is a sequential circuit.
- The function of the sequential circuit is the next state equation $Q_n$
$$
Q_n = f\;(Q, I_0, I_1, \cdots, I_k)
$$

