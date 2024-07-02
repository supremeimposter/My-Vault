---
pdf: 
module: 5
lecture: 
date: 2024-03-12T11:48:00
version:
  - DL-24
last-revision: 2024-07-03T00:01:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
  - DigitalLogic/Registers
---
# Registers

> [!youtube] Registers
> [Digital Logic - Registers in Sequential Circuits | Shift Register | Linear Feedback Shift Register | Universal Shift Register | PIOP, SISO, SIPO, PISO - YouTube](https://www.youtube.com/playlist?list=PLIPZ2_p3RNHj7EiWLYGUe0ULdZ6MRSLix)

- A register is a group of [[Flip Flop|flip flops]] sharing a common clock, each of which is used to store a bit of data.
- All the flip flops in a register is synchronous to the clock.
- A n-bit register consists of n flip flops.
- A register may contain certain combinational gates that perform data-processing operations for the data stored in the flip flops.
- Clear input is used to clear or reset the data and Preset input is used to preset or set the data in the register.
- Registers are commonly used to **store** and **shift** (movement) binary data.
- Any flip flops can be used to construct registers, but [[D Flip Flop|D flip flop]] is most commonly used.

## Load Input

- To store data in D-flip flops, when the clock signal triggers the flip flop, the data gets stored i.e. $Q_{n} = D$.
- But since clock signal is common to every circuit in the system, when the clock signal triggers whatever data at the control lines will be stored, even if don't want to store a new data.

- To control *when to store the data*, we use load signal or load input in the register 
	- If the load = 0, the stored data should not be changed or data must be retained i.e. $Q_n= Q$
	- If the load = 1, the data should be stored i.e. $Q_n = \text{In}$

- All the flip flops in the register share the same load input.
- The load inputs are connected to each flip flip via a MUX rather than gating it with the clock which causes timing issues in flip flop.

![[Registers-20240702220339396.webp|1-bit parallel access register with load input]]

# Types of Registers

> [!tip] 
> There won't be any questions to create registers, but a register will be given and asked to analyze.

Based on how data is moving within or between registers, registers are classified into different types.

![[Registers-20240702205621061.webp|Basic data movement in 4 bit registers]]

```merm
flowchart TD
A[Types of Register] --> B[Parallel-In\nParallel-Out]
A --> C[Shift Register]
C --> D[Serial-In\nSerial-Out]
C --> E[Serial-In\nParallel-Out]
C --> F[Parallel-In\nSerial-Out]
C --> G[Parallel-Access Shift]
```

## Parallel-In Parallel-Out Register

![[Registers-20240702220125334.webp|Vector notation of PIPO register]]

- $4$ in the vector notation means there are $4$.

![[Registers-20240702182742454.webp]]

When the clock edge arrives, the input word $D_{1}D_{2}D_{3}D_{4}$ gets stored in the register and available on the outputs $Q_{1}Q_{2}Q_{3}Q_{4}$.

![[Registers-20240702212819428.webp|4-bit PIPO register with load, preset and clear inputs]]

## Shift Register
- A shift register is a register in which data can be stored and this data can be shifted to left or right when a shift signal is applied.
- On the triggering edge, shifting occurs in every flip flop in the register.

### Serial-In Serial-Out Shift Register

![[Registers-20240702220949810.webp|4-bit Serial-In Serial-Out Shift register]]

> [!header] Implementing using D flip flops

![[Registers-20240702221528121.webp]]

![[Registers-20240702221542453.webp]]

> [!header] Timing diagram of SISO shift register

![[Registers-20240702224301853.webp]]

### Serial-In Parallel-Out Shift Register

![[Registers-20240702223405929.webp]]

On the raising edge of the clock, the data available in the input line is stored in the D flip flops and available at the outputs lines parallely.

> [!NOTE]
> Data bits enters the flip flop from the least significant bit of the data.

![[Registers-20240702224821013.webp|The register contains 0110 after 4 clock pulses]]

### Parallel-In Serial-Out Shift Register

![[Registers-20240702231119920.webp]]

PISO register uses $\overline{S} \, L$ input i.e. $\overline{\text{shift}} \text{ / load}$ input.

- If $\overline{S} \, L = 0$, then shift the data to right.
- If $\overline{S} \, L = 1$, then loads the data into the register.

![[Registers-20240702233258680.webp]]

### Parallel-Access Shift Register

This register has parallel-in, parallel-out and serial-in, serial-out.

PASR uses $\overline{S} \, L$ input i.e. $\overline{\text{shift}} \text{ / load}$ input.

- If $\overline{S} \, L = 0$, then SISO.
- If $\overline{S} \, L = 1$, then PIPO.

![[Registers-20240702235349696.webp|A 4-bit Parallel-Access Shift Register]]

![[Registers-20240702235527065.webp]]

![[Registers-20240702235532518.webp]]

---