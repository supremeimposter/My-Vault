---
pdf: 
module: 5
lecture: 
date: 2024-03-11T19:06:00
version:
  - DL-24
last-revision: 2024-07-02T15:56:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
---
# Race Around Condition in Flip Flop

![[Combinational Circuits vs Sequential Circuits-20240702145854072.webp]]

If a NOR's control line is $0$, then that NOR just negates its data line. If the control line is $1$, then the NOR's output is driven to $0$, ignoring its data line.

![[Combinational Circuits vs Sequential Circuits-20240702145935454.webp]]

If a NAND's control line is $1$, then that NAND just negates its data line. If the control line is $0$, then the NAND's output is driven to 1, ignoring its data line.

If $t_{pd}$ is the propagational delay of the NAND gate, then what happens when to $g$ when we keep $x = 1$ for a long time?

![[Combinational Circuits vs Sequential Circuits-20240702150934857.webp]]

The output $g$ keeps **toggling** with a propagational delay $t_{pd}$.

> [!results] Conditions for Racing condition
> 
> 1. The flip flop is level-triggered.
> 2. There is a toggle condition in the flip flop.
> 3. The pulse-width is greater than the propagational delay of the flip flop i.e. $P_{w} \gt t_{pd}$

When the pulse width is greater than the propagational delay of the level-triggered flip flop, then it creates more time for toggling i.e. racing to happen in case of toggle condition.

![[Race Condition on Flip Flop-20240702153222159.webp]]

To avoid racing, the pulse width must be lesser than the propagational delay but it is practically not possible because of various factors such as temperature, etc...

The best solution to avoid racing condition is to use edge-triggered flip flop, because it changes state for only once for a clock cycle.

- Race condition exists in any level triggered flip flop which has a toggle condition e.g. level-triggered JK, T flip flop.
- Race condition does not exist in SR, D, any edge triggered, or any Master Slave Flip Flop.

---