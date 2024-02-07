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
- In all the scenarios, there is only 1 person. No parallel digging is going on. Taiju has to do all the work single-handedly, while Senku takes care of all the brainy stuffs.
> [!header] Scenario 1: There is at least one finite tunnel

![[Dovetailiing-20240207231055557.webp|Scenario 1a : Taiju-kun digging each tunnel one by one]]

- In Scenario 1a, since the tunnel is infinite, Taiju-kun will never finish digging the tunnel 1, let alone all the three tunnels.
- But the solution can be digging each tunnel for either a fixed time interval i.e. 1 hour or for a fixed distance i.e. 1 kilometer.

![[Dovetailiing-20240207231348608.webp|Scenario 1b : Taiju digs Tunnel 1 for 1 km]]

![[Dovetailiing-20240207231504591.webp|Scenario 1c : Taiju digged all the three tunnel for 1 km and proceeds the process again and again]]

- After scenario 1c, Taiju keeps on digging each tunnel for a km and proceeds it again and again in hopes of finding the finite tunnel.

![[Dovetailiing-20240207231746217.webp|Scenario 1d : Taiju finished the finite tunnel T3 by digging 1 km of each tunnel]]

- In scenario 1d, Taiju found the finite tunnel T3 by ***interleaving*** method. This method is guaranteed to find the finite tunnel, instead of scenario 1a.

> [!timer] 01:38:50


