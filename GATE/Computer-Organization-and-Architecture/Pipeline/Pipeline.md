---
pdf: 
module: 4
lecture: 
date: 2024-08-05
version:
  - COA-24
last-revision: 2024-08-10T19:24:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/Pipeline
---
# Pipeline

Pipelining is an implementation technique in which multiple instructions are overlapped in execution. Today, pipelining is nearly universal.

| Construction site Pipeline           | Oil Pipelines                        |
| ------------------------------------ | ------------------------------------ |
| ![[Pipeline-20240809211039745.webp]] | ![[Pipeline-20240809211332714.webp]] |

If there is no pipelining, then the entire hardware is one atomic entity i.e. there is no splitting of hardware. The work for a single input will take the complete time. There is no parallelism in non-pipelined architecture.

In pipelined architecture, the hardware is split into separate stages according to its operations and the operations are performed parallely. Pipelining is easy to implement in **RISC architecture**.

If the instruction fetch of an instruction is denoted as $F_{i}$ and the instruction execution is denoted as $E_{i}$, then the basic idea of the instruction pipelining is given below.

````col
```col-md
flexGrow=1
===
#### Sequential Execution

![[Pipeline-20240811173231633.webp]]
```
```col-md
flexGrow=1
===
#### Pipelined Execution

![[Pipeline-20240811173217355.webp]]
```
````

Each stage is responsible for filling out data in the interstage buffers for the next stage. Each cycle includes this operation too.

**Interstage buffers** are available for each stage in pipelined architecture to temporarily store the computations of the respective stage. Interstage buffers are not there when there is no pipelining, since there are no stages.

![[Pipeline-20240810073259427.webp|4 stage pipelining]]

Based on the requirement of the pipeline, the last stage may have an interstage buffer.

![[Pipeline-20240810073640919.webp]]

> [!tip]
> If a machine is said to have a single cycle datapath for an instruction, then it is non-pipelined machine i.e. **single cycle execution of instruction**. The machie has a single stage non-pipelined processor.

## Performance Analysis of Pipelines

In non-pipelined CPU, each instruction execution may take one (or several) clock cycles. But in pipelined CPU, a single stage execution of an instruction may take one (or several) clock cycles.

$$
\text{Instruction Execution Time} = \text{Cycles Per Instruction} \times \text{Cycle Time}
$$

We don't consider the execution time of the first instruction separately in a very large number of instructions, it does not matter. For every $k$ clock cycles, an instruction gets executed completely. So average instruction execution time is the number of cycles per instruction multiplied by the cycle time.

$$
\text{Average Instruction Execution Time} = \text{Cycles Per Instruction} \times \text{Cycle Time}
$$

In an ideal pipelined CPU, the interstage buffers have no latency, but in reality, interstage buffers do have latency.

The **speed up** of PL over non-PL on n-instructions,
$$
\begin{split}
\text{Speed up of PL over non-PL} 
&= \frac{\text{Non-PL execution time}}{\text{PL execution time}} \\
&= \frac{\text{CPI}_{\text{non-PL}} \times \text{Cycle Time}_{\text{non-PL}}} {\text{CPI}_{\text{PL}} \times \text{Cycle Time}_{\text{PL}}}
\end{split}
$$

> [!tip] 
> If there is no information regarding the number of instructions $n$, then $n$ can be considered as very large number of instructions.

The **throughput** of a processor is the amount of work done in the given time.

- Amount of work done = $n$ instructions
- Given time = total time taken by the processor for $n$ instructions
$$
\text{Throughput of processor} = \frac{n\text{ Instructions}}{\text{Total time taken by processor for } n \text{ instructions}}
$$

**Ideal Pipeline**

In an ideal pipeline, there are no latencies for registers and there are no stalls.

In an ideal pipelined CPU, if the number of cycles for a stage is 1, then for each cycle, 1 instruction will be executed except for the first instruction i.e. no stalls.

<u>In ideal conditions</u>,

For a single instruction execution, both non-PL and PL processor take the same amount of time as there are no register delays.

![[Pipeline-20240810132458782.webp]]

For very large number $y$ of instructions, 

![[Pipeline-20240810132518095.webp]]

In ideal conditions, the speed up of a PL processor over a non-PL is equal to the number of stages in a PL processor.

![[Pipeline-20240810133054205.webp]]

**Real Pipeline**

In a real pipeline, each stage may have different cycle time and there are latencies for registers and there will be stalls because of hazards.

![[Pipeline-20240810133142001.webp]]

Cycle time in a real PL processor is,
$$
\text{Cycle time} = \text{max} (\text{Stage latency} + \text{Register latency})
$$

> [!example] 
> ![[Pipeline-20240810133648175.webp]]
> 
> ![[Pipeline-20240810133934620.webp]]

> [!summary] 

In an ideal pipeline, there are no stalls and sometimes there are no buffer latencies.

For a <mark class="hltr-red">single instruction</mark>, a non-pipelined CPU has lower latency than a pipelined CPU, since there are additional register delays in pipelined CPU whereas there are no such registers in non-pipelined CPUs.

A pipelined CPU has its advantages when there are <mark class="hltr-cyan">large number of instructions</mark>, where for every $k$ cycles an instruction has been executed i.e. $\text{CPI} = k$.

If $T_{1}$ is the time taken for a <mark class="hltr-pink">single instruction</mark> in a pipelined processor and $T_{2}$ is the time taken for a single instruction in the same processor but non-pipelined, then $T_{1} \ge T_{2}$, since there are interstage buffers and they may have additional latencies.

1. $T_{1} = T_{2}$ if the pipeline is ideal
2. $T_{1} \gt T_{2}$ if the pipeline is not ideal

Since most of the programs contains many instructions, a pipelined processor has its advantages. There can be programs with just a single insruction in very rare cases, thats where a non-pipelined instruction has its advantage.

> [!link] 
> [Instruction Pipelining](https://web.archive.org/web/20160324083651/http://www.cs.wvu.edu/~jdm/classes/cs455/notes/tech/instrpipe.html)

---

> [!example] 
> ![[Pipeline-20240810094144627.webp]]
> 
> Time for 1 clock cycle in Non-PL = $(5 + 6 + 11 + 8) \,\text{ns} = 30\, \text{ns}$
> Time for 1 clock cycle in PL = $(11 + 1)\, \text{ns} = 12\, \text{ns}$
> 
> Since there is no information regarding the number of instructions, it is assumed as a very large number.
> 
> ![[Pipeline-20240810094500593.webp]]
> 
> Since n is very large, $\frac{n}{4+n-1} = 0.99975424\cdots \approx 1$

> [!example] 
> ![[Pipeline-20240810130352074.webp]]
> 
> ![[Pipeline-20240810130756646.webp]]
> ![[Pipeline-20240810131115200.webp]]
> 
> ![[Pipeline-20240810131150027.webp]]
> ![[Pipeline-20240810131658949.webp]]
> 
> Stage-4 pipeline takes less time than stage-5 pipeline for a single instruction.
> For large number of instructions, stage-5 pipeline executes an instruction for every $3\,\text{ns}$, whereas stage-4 pipeline executes an instruction for every $3.1\,\text{ns}$.
> 
> $\therefore$ Stage-5 PL is better than stage-4 PL for a large number of instructions.

> [!example] 
> ![[Pipeline-20240810232419000.webp]]
> 
> ![[Pipeline-20240811113342660.webp]]

## Types of Pipeline

There are two types of pipeline,
1. Single issue pipeline - a stage can handle only one instruction in a cycle *(default pipeline, the pipeline that we study for GATE syllabus)*
2. Multi issue pipeline - a stage can handle multiple instructions in a cycle *(not in our syllabus)*

Every insruction goes through all the stages in a simple **In-order pipeline**. For example, Memory access stage will not be skipped even if all the data are available in the registers. The instruction spends a cycle in memory access stage.
In-order pipeline fetch/execute instructions in the program order.

**Out-of-order pipeline** *(not in our syllabus)* fetch execute instructions in the program order, but may execute them out of order of the program. [mod-4/lec-04.pdf Pg. No. 78-92]

> The pipeline in our syllabus is a simple single-issue and in-order pipeline.

## MIPS Pipeline

MIPS pipeline is used in RISC architectures.

![[Pipeline-20240811150904929.webp]]

![[Pipeline-20240810114421580.webp]]

> Standard 5 stage PL = Classical 5 stage PL = MIPS PL = RISC PL

![[Pipeline-20240810070448122.webp]]

There are two types of implementation with respect register read/write.

| Split Phase                                                     | Not Split Phase                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![[Pipeline-20240810134508252.webp]]                            | ![[Pipeline-20240810134521171.webp]]                               |
| In the first half of the cycle, the register has been written   | In the first half of the cycle, the register has been read         |
| In the second half of the cycle, the register has been read<br> | In the second half of the cycle, the register has been written<br> |

> [!attention] 
> By default do not take the split phase. Take the other one if there is no information on implementation.

## Hazards

If a stage is idle for (one or more) cycles in a pipelined processor, then it called a **pipeline bubble** or **stall**.

Each instruction goes through all the stages and each stage takes certain number of clock cycles to complete, lets say $k$ cycles for a stage,

1. For an ideal pipeline, for every $k$ cycles we get one instruction executed (except for the first instruction) i.e. $\text{CPI} = k$.
2. But for real pipelines, there will be stalls in the pipeline, then $\text{CPI} \gt k$.

Any condition which creates a stall or bubble in the pipeline is called an **Hazard**. Hazards complicate pipeline control and limit performance.

Hazards do not occur in non-pipelined processor.

There are 3 types of Hazards in a pipeline:
	1. [[Structural Hazards in Pipeline|Structural Hazard]]
	2. [[Data Hazards in Pipeline|Data Hazard]]
	3. [[Control Hazards in Pipeline|Control Hazard]]

![[Pipeline-20240811170757764.webp]]

---