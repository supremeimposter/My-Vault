---
pdf: 
module: 2
lecture: "2"
date: 2024-03-20T19:48:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/ISA
---
# Instruction Set Architecture ISA
- ISA defines the permissible instructions.
- ISA is the interface or boundary between hardware and software.

## Instruction Set Design Issues



## Stack-Based ISA
- If the CPU uses Stack based ISA, then there are two types of instructions,
	1. Arithmetic instructions : 0 address instructions
	2. Data instructions : 1 address instructions


## Accumulator ISA

1. Arithmetic instructions : 1 address instructions
- One operand is specified explicitly and the other operand is implied implicitly (from accumulator).


2. Data instructions : 1 address instructions


## Register Set ISA

```merm
flowchart TD
	A[Register Set ISA] --> B[Register-Memory ISA]
	A --> C[Memory-Memory ISA]
	A --> D[Register-Register ISA]
```

### Register-Memory ISA
- One operand is from register and another operand is from memory.

### Memory-Memory ISA
- All operands are from main memory i.e. main memory is accessed for every operation.
- For accessing the main memory, it takes many clock cycles.


### Register-Register ISA
- All operands are from registers in arithmetic instructions.
- To perform operations, we have to bring data from the main memory to the registers.
- Arithmetic instructions do not access main memory.
- Only data (load, store) instructions can access main memory.


> [!question] Why register-register IS architecture is used in modern computers?
> - Optimization is possible in register-register architecture.

---
# RISC and SISC Architecture

```merm
flowchart TD
	A[Instruction Set Architecture\nISA] --> B[Complex Instruction Set Architecture\nCISC]
	A --> C[Reduced Instruction Set Architecture\nRISC]
```


> [!NOTE] 
> RISC uses register-register architecture
> CISC uses memory-memory architecture


- CISC minimizes the size of the program.
- RISC minimizes the execution time.


> [!timer] 00:58:16
