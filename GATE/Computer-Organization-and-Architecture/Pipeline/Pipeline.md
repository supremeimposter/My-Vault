---
pdf: 
module: 4
lecture: 
date: 2024-08-05
version:
  - COA-24
last-revision: 2024-08-09T19:24:00
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/Pipeline
---
# Pipeline


If there is no pipelining, then the entire hardware is one atomic entity. There is no splitting of hardware. 

The hardware is split into separate stages and operations are performed parallely.


**Interstage buffers** are not needed when there is no pipelining, since there are no stages where there is no pipelining.

Each stage is responsible for filling out interstage buffers for the next stage. Each cycle also includes that operation.

If a machine has a single cycle datapath, then it is non-pipelined machine.


There are two types of pipeline,
1. Single issue pipeline - a stage can handle only one instruction in a cycle (default pipeline, the pipeline that we study for GATE syllabus)
2. Multi issue pipeline - a stage can handle multiple instructions in a cycle.

Every insruction goes through all the stages in a simple **In-order pipeline**. For example, Memory access stage will not be skipped even if all the data are available in the registers. The instruction spends a cycle in memory access stage.
In-order pipeline fetch/execute instructions in the program order.

**Out-of-order pipeline** fetch execute instructions in the program order, but may execute them out of order of the program.

## Performance Analysis of Pipelines

In non-pipelined implementation, 1 clock cycle is the time taken for one instruction execution.
In pipelined implementation, 1 clock cycle is the time taken for one stage execution in an instruction.


The speed up of PL over non-PL on n-instructions,
$$
\text{Speed up of PL over non-PL} = \frac{\text{Non-PL execution time}}{\text{PL execution time}}
$$

> If there is no information regarding the number of instructions $n$, then $n$ can be considered as larger number of instructions.


## MIPS Pipeline

> Standard 5 stage PL = Classical 5 stage PL = MIPS PL = RISC PL




> [!attention] 
> Don't assume split phase implementation by default. The type of implementation will be mentioned in the exam.

## Hazards

If a stage is idle in a pipelined architecture, then it called a **pipeline bubble** or **stall**.

Any condition which creates a stall is called an Hazard.

There are 3 types of Hazards
1. Structural Hazard
2. [[Data Hazards in Pipeline|Data Hazard]]
3. Control Hazard

---