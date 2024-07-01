---
pdf: 
module: 5
lecture: 
date: 2024-03-11T11:10:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
---
# Preset and Clear Inputs in Flip Flop

## Asynchronous Preset and Clear

Some flip-flops have asynchronous inputs that are used to force the flip-flop to a particular state independently of the clock. 

- The input that sets the flip-flop state to 1 is called **preset or direct set**. 
- The input that clears the flip-flop state to 0 is called **clear or direct reset**. 

When power is turned on in a digital system, the state of the flip-flops is unknown. The direct inputs are useful for bringing all flip-flops in the system to a known starting state prior to the clocked operation.

- Preset and Clear are active low inputs i.e. they work only when they are $0$.
- Preset and Clear are **direct inputs** since these *work immediately* irrespective of clock, inputs, outputs etc...
- Preset and Clear do not care about the clock i.e. asynchronous by default.
- Preset and Clear are active low and asynchronous by default.

> [!attention] 
> Preset and Clear inputs are active low inputs whether if they are asynchronous or synchronous.

![[Preset and Clear Inputs in Flip Flop-20240701214031851.webp]]

![[Preset and Clear Inputs in Flip Flop-20240701213945003.webp]]

When both preset and clear are $1$, the flip flop works normally.
Both preset and clear inputs cannot be $0$ simultaneously i.e. forbidden input combination.

> [!example] 
> ![[Preset and Clear Inputs in Flip Flop-20240701214956101.webp]]
> ![[Preset and Clear Inputs in Flip Flop-20240701215017658.webp]]

> [!example] 
> ![[Preset and Clear Inputs in Flip Flop-20240701232602096.webp]]

### Implementation

> [!header] Positive edge-triggered SR flip flop

![[Preset and Clear Inputs in Flip Flop-20240701215413306.webp]]

> [!cases] 
> ![[Preset and Clear Inputs in Flip Flop-20240701215553716.webp]]
> 
> ![[Preset and Clear Inputs in Flip Flop-20240701215609499.webp]]

> [!header] Positive edge-triggered D flip flop 

![[Preset and Clear Inputs in Flip Flop-20240701224739200.webp]]

![[Preset and Clear Inputs in Flip Flop-20240701215752869.webp]]

> [!cases] 
> ![[Preset and Clear Inputs in Flip Flop-20240701215850732.webp]]
> 
> ![[Preset and Clear Inputs in Flip Flop-20240701215901679.webp]]

> [!header] Positive edge-triggered JK flip flop

![[Preset and Clear Inputs in Flip Flop-20240701225033672.webp]]

## Synchronous Preset and Clear

Synchronous preset and clear inputs works on the clock triggering of the flip flop it is connected to.

> [!example] Positive edge-triggered D flip flop

![[Preset and Clear Inputs in Flip Flop-20240701224355776.webp]]

![[Preset and Clear Inputs in Flip Flop-20240701224640694.webp]]

![[Preset and Clear Inputs in Flip Flop-20240701224604693.webp]]

---
