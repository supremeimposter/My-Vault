---
pdf: 
module: 5
lecture: 
date: 2024-03-08T19:10:00
version:
  - DL-24
last-revision: 2024-07-02T16:06:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
---
# Clock in Digital Circuits

The system clock is the same or fixed for all the circuits in the machine.
Clock signals control the outputs of sequential circuits. It determines when and how the memory elements change their outputs. If there is no clock signals, then the state of the sequential circuits change randomly.

Clock produces continuous oscillating signals of $0$ and $1$.

![[Clock in Digital Circuits-20240630105114282.webp]]

## Terminologies of Clock

**Time Period :**
- Time period is the duration between two consecutive raising edges or falling edges.

![[Clock in Digital Circuits-20240630100032269.webp]]

**Frequency :**
- Frequency is the number of oscillations per second.
$$
f = \frac{1}{t}
$$
- Hz is the unit of frequency i.e. Hz = 1/sec
- Frequency is inversely proportional to time period.
When the frequency is high, time period is low.
When the frequency is low, time period is high.

![[Clock in Digital Circuits-20240630100748056.webp]]

> [!info] 
> ![[Clock in Digital Circuits-20240702103237487.webp]]

**Pulse Width :**
- Pulse Width $P_{w}$ or Clock Width is the time duration for which the clock signal is high in a time period.
- It is also called as ON period.

![[Clock in Digital Circuits-20240702095815170.webp]]

- The time duration for which the clock signal is low in a time period is called off-period.

**Duty Cycle :**
- Duty cycle or Power Cycle is the percentage of ON time in a clock period.
$$
\text{Duty Cycle} = \frac{\text{Pulse Width}}{\text{Clock Period}}
$$

---