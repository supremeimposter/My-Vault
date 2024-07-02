---
pdf: 
module: 5
lecture: 
date: 2024-03-09T13:25:00
version:
  - DL-24
last-revision: 2024-07-02T16:06:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
---
# Flip Flop

- A flip flop is a latch controlled by clock.
- Flip flops are **memory elements** used in clocked sequential circuits.

- Characteristic equations of flip flops are derived from their characteristic tables or k-map of their truth tables.

There are 4 standard flip flops,
1. SR flip flop
2. D flip flop
3. JK flip flop
4. T flip flop

![[Flip Flop-20240630234641703.webp]]
![[Flip Flop-20240630234702870.webp]]
![[Flip Flop-20240630234718641.webp]]
![[Flip Flop-20240630234751529.webp]]

- All flip flops are 1-bit storage devices.
- A flip flop is a bi-stable device. It has two output devices which are complements of each other.

- Clock Triggering is a property of flip flop and not a property of clock itself.
- [[Clock in Digital Circuits|Clock]] is fixed for all flip flops.
- For any flip flop, [[Race Around Condition in Flip Flop|by default edge triggering is used]].

> [!attention] 
> Don't consider clock as an input in the implementation equations of flip flops, because any flip flop can have any triggering.

- Flip flops are mostly used as storage devices, hence [[Registers]]. Flip flops can also be used to implement frequency dividers, etc.., hence [[Counters|Counters]].

---
