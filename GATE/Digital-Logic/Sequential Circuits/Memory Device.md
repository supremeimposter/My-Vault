---
pdf: 
module: 5
lecture: 
date: 2024-03-08T07:34:00
version:
  - DL-24
last-revision: 2024-06-29T22:13:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
---
# Cross Coupled Inverters

Cross Coupled Inverters can store and retain one bit.

![[Cross Coupled Inverters-20240629080622545.webp|1-bit Storage Device]]

| Storing and retaining 0                             | Storing and retaining 1              |
| --------------------------------------------------- | ------------------------------------ |
| ![[Cross Coupled Inverters-20240629080815866.webp]] | ![[Cross Coupled Inverters-20240629080833412.webp]] |

These devices are fixed for indefinite amount of time. There is no way to change the input or there is no user input control

This device cannot be a 2-bit storage device since the combinations `00` and `11` never occur in this device.

> [!NOTE] 
> "*Remembering some information*" means storing and retaining data until it is further updated.

![[Cross Coupled Inverters-20240629080226580.webp]]

The above combinational circuit cannot be a storage device as inputs must be provided constantly, yet bit is not stored or retained

| ![[Cross Coupled Inverters-20240629080339005.webp]] | ![[Cross Coupled Inverters-20240629080317580.webp]] |
| --------------------------------------------------- | --------------------------------------------------- |

Since cross coupled inverters cannot have any user control, we will implement the memory device using NAND, NOR gates.
Since NAND, NOR gates are universal gates, they can be used to implement the functionality of NOT gate.

---
# Cross Coupled NOR gates

![[Memory Device-20240629112647900.webp]]

A single memory element can be built using NOR gates.

![[Memory Device-20240629112702287.webp]]

> [!NOTE] 
> ![[Memory Device-20240629154334527.webp]]

Now this cross coupled NOR gates can take user control.

![[Memory Device-20240629114117709.webp]]

When $A = 0, B = 1$, it stores $0$.

![[Memory Device-20240629114207652.webp]]

When $A = 0, B = 0$ i.e. signal is removed from $B$, then it retains $0$.

![[Memory Device-20240629114308432.webp]]

When $A = 1, B = 0$, it stores $1$.

![[Memory Device-20240629114341135.webp]]

When $A = 0, B = 0$ i.e. signal is removed from $A$, then it retains $1$.

![[Memory Device-20240629114446515.webp]]

> [!tip] 
> When input is given, storage is made.
> When the signal is removed i.e. made $0$, then storage is retained.

![[Memory Device-20240629114534085.webp]]

When $A = 1, B = 1$, then the output is $0$ i.e. stable output. 

![[Memory Device-20240629114810219.webp]]

But trying to retain the data keeps producing uncertain outputs. So the input $A = 1, B = 1$ is [[SR and S'R' Latch#Oscillations and Undesirable States|forbidden]] in cross coupled NOR gates.

| $A$ | $B$ | $Q_{n}$ | Description                 |
| --- | --- | ------- | --------------------------- |
| $0$ | $1$ | $0$     | Storing $0$ (Reset)         |
| $1$ | $0$ | $1$     | Storing $1$ (Set)           |
| $0$ | $0$ | $Q$     | Retaining previous output   |
| $1$ | $1$ | $0$     | Forbidden input combination |

When $A = 0, B = 1$, then the circuit is reset, hence $B =$ Reset.
When $A = 1, B = 0$, then the circuit is reset, hence $A =$ Set.

This is how a [[SR and S'R' Latch#$SR$ Latch|SR latch]] (Set-Reset latch) has been implemented.

![[Memory Device-20240629123211415.webp]]

---
# Cross Coupled NAND gates

![[Memory Device-20240629112523034.webp]]

A single memory element can be built using NAND gates.

![[Memory Device-20240629112743720.webp]]

> [!NOTE] 
> ![[Memory Device-20240629154442573.webp]]

Now this cross coupled NAND gates can take user controls.

![[Memory Device-20240629154535744.webp]]

> [!important] 
> The circuit is in active low because of active low

| $A$ | $B$ | $Q_{B}$   | Description                 |
| --- | --- | --------- | --------------------------- |
| $0$ | $1$ | $0$       | Reset                       |
| $1$ | $0$ | $1$       | Set                         |
| $1$ | $1$ | $Q_{t-1}$ | Retain                      |
| $0$ | $0$ | $1$       | Forbidden input combination |

When $A = 0, B = 1$, the circuit is reset, then $A =$ Reset (active low).
When $A = 1, B = 0$, the circuit is set, then $B =$ Set (active low).

This is how a [[SR and S'R' Latch#$ overline{S} , overline{R}$ Latch|S'R' latch]] is implemented.

![[Memory Device-20240629205816136.webp]]

---