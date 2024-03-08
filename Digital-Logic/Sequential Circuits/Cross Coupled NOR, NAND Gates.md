---
pdf: 
module: 5
lecture: 
date: 2024-03-07T22:44:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
---
# SR Latch

<iframe src="https://circuitverse.org/simulator/embed/cross-coupled-nor-gate?theme=default&display_title=true&clock_time=true&fullscreen=true&zoom_in_out=true" style="border-width:; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>


Main output is $Q_R$

| Input Combination | Operation | Meaning                                                                          |
| ----------------- | --------- | -------------------------------------------------------------------------------- |
| $A = 1, B = 0$    | Set       | Main output is 1                                                                 |
| $A = 0, B = 1$    | Reset     | Main output is 0                                                                 |
| $A = 0, B = 0$    | Retain    | It retains the previous output                                                   |
| $A = 1, B = 1$    | Forbidden | **After this operation**, the behaviour of the circuit is undefined or uncertain |

![[SR Latch-20240308110009365.webp]]

![[Cross Coupled NOR, NAND Gates-20240308120357547.webp]]



> [!question] Why do we even apply $0, 0$ combination after $1, 1$ combination in SR latch?
> Then how can we store the resultant bit caused of the $1, 1$ input combination?What is the use of this cross coupled circuit if we cannot store a single bit?


> [!attention] 
> SR Latch is not 2-bit storage device.


> [!important] 
> If latches are given, think about whether these latches have previous inputs or this is the first input.


## Oscillations and Undesirable States


---
# S'R' Latch

- It is also called as SR Latch with NAND gates.

<iframe src="https://circuitverse.org/simulator/embed/sequential-circuits-826d8eff-9a98-4445-b6b4-4e67baaddb51?theme=default&display_title=true&clock_time=true&fullscreen=true&zoom_in_out=true" style="border-width:; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>


Main output is $Q_S$

| Input Combination | Operation | Meaning                                                                          |
| ----------------- | --------- | -------------------------------------------------------------------------------- |
| $A = 0, B = 1$    | Set       | Main output is 1                                                                 |
| $A = 1, B = 0$    | Reset     | Main output is 0                                                                 |
| $A = 1, B = 1$    | Retain    | It retains the previous output                                                   |
| $A = 0, B = 0$    | Forbidden | **After this operation**, the behaviour of the circuit is undefined or uncertain |

![[Cross Coupled NOR, NAND Gates-20240308120411595.webp]]

---
# Summary of Latch




---