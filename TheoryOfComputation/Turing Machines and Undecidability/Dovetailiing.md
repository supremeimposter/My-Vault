---
pdf: 
module: 5
lecture: 
date: 2024-02-07T19:56:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/TuringMachine
---
# Dovetailing
- Proving languages recognizable or decidable often requires a technique called dovetailing.
- In all the scenarios, there is only 1 person. No parallel digging is going on. Taiju-kun has to do all the work single-handedly, while Senku takes care of all the brainy stuffs.

> [!header] **Scenario 1** : There is at least one finite tunnel among finite number of tunnels

![[Dovetailiing-20240207231055557.webp|Scenario 1a : Taiju digging each tunnel one by one]]
- In Scenario 1a, since the tunnel is infinite, Taiju-kun will never finish digging the tunnel 1, let alone all the three tunnels.
^idea1ofdovetailing
- But the solution can be digging each tunnel for either a fixed time interval i.e. 1 hour or for a fixed distance i.e. 1 kilometer.

![[Dovetailiing-20240207231348608.webp|Scenario 1b : Taiju digs Tunnel 1 for 1 km]]

![[Dovetailiing-20240207231504591.webp|Scenario 1c : Taiju digged all the three tunnel for 1 km and proceeds the process again and again]]

- After scenario 1c, Taiju keeps on digging each tunnel for a km and proceeds it again and again in hopes of finding the finite tunnel.

![[Dovetailiing-20240207231746217.webp|Scenario 1d : Taiju finished the finite tunnel T3 by digging 1 km of each tunnel]]

- In scenario 1d, Taiju found the finite tunnel T3 by ***interleaving*** method. This method is guaranteed to find the finite tunnel, instead of scenario 1a.
- Even if there is no finite tunnel, then keep digging (never halting).


> [!header] **Scenario 2** : There is at least one finite tunnel among ***infinite*** number of tunnels

![[Dovetailiing-20240208074713684.webp|Scenario 2a : Taiju digs each tunnel individually]]

- In scenario 2a, Taiju will never finish the tunnel T1. So he cannot finish digging all the tunnels.

![[Dovetailiing-20240208075334973.webp|Scenario 2b : Taiju digs each tunnel for a 1km at an interleaving manner]]

- In scenario 2b, Taiju will never find the finite tunnel as all the tunnels are infinite and the job will never be done.
- Now the solution is to use ***more interleaving***.
![[Dovetailiing-20240208075657674.webp|Scenario 2c : Taiju digs 1km of Tunnel T1]]

![[Dovetailiing-20240208075908376.webp|In Scenario 2d : Taiju digs another km of Tunnel T1 and 2 kms of T2]]

![[Dovetailiing-20240208080035212.webp|Scenario 2e : Taiju digs another km of both T1 and T2 and 3 kms of T3]]

![[Dovetailiing-20240208080216414.webp|Scenario 2f : Taiju digs another km of T1, T2, T3 and 4 kms of T4]]

![[Dovetailiing-20240208080352449.webp|Summary of More Interleaving method]]

- This more interleaving method is definitely guaranteed to work.
