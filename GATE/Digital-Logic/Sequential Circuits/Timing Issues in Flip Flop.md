---
pdf: 
module: 5
lecture: 
date: 2024-03-11T20:17:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/SequentialCircuits
---
# Timing Issues in Flip Flop

> [!youtube] 
> [Digital Logic - Timing Issues, Constraints in Flip Flops | Clocking and Timing Analysis of Flip Flops | Hold Time, Setup Time | Sequential Circuits - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHi3p3cDBRInTHCJeITrkTFn)

## Setup and Hold Time of Flip Flop

- When the input is applied exactly at the edge, then it causes **setup and hold violation**. It becomes unpredictable whether the output will be 0 or 1.

- To change the output at the triggering edge, the input has to be applied some time before the edge which is called **setup time** and the applied input has to be stable or maintained for some time after the triggering edge which is called **hold time**.
- During the setup-hold duration, input(data) must not change. If the input changes during that window, then the ciruit behaviour becomes unpredictable.

![[Timing Issues in Flip Flop-20240311223706505.webp]]

## Propagational Delay of Flip Flop
- When a triggering edge arrives, the amount of time required for the output to arrive or be stable is the propagational delay of the flip flop.
- If the propational delay of a flip flop is $n$ nanoseconds and if the input is provided at $t = k$ nanoseconds at a triggering edge, then the output is stable after $k + n$ nanoseconds.
- It is represented as $t_{pd}$ or $T_{Clk \rightarrow Q}$ 

> [!observation] 
> Setup and Hold time is about the input (data) signal to the flip flop and the Propagational delay is about the output of the flip flop.

![[Timing Issues in Flip Flop-20240311233747370.webp]]

## Timing Constraints in Flip Flop
- Due to propagational delay of the flip flop, if we try to use the output $Q$ right after the triggering edge it causes unpredictable behaviour.


## Clock Period and Frequency

- Hold time and propagational delay of the flip flop are overlapping, so hold time does not affect the clock period calculation.

$$t_{\text{hold}} \le t_{\text{PDFF}}$$

![[Timing Issues in Flip Flop-20240312091213476.webp]]

$$
t_{\text{clk}} \ge t_{\text{pFF}} + t_{\text{pC}} + t_{\text{setup}}
$$

## Setup Time Slack

$$\text{Setup Slack Time} = t_{clk} - [t_{\text{pFF}} + t_{\text{pC}} + t_{\text{setup}}]$$
- Minimum cycle time $= t_{\text{pFF}} + t_{\text{pC}} + t_{\text{setup}}$


> [!pdf] refer lec-10 pg. no. 63
