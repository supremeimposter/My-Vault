---
pdf: 
module: 2
lecture: "2"
date: 2024-03-20T19:48:00
version:
  - COA-24
last-revision: 2024-07-25T17:59:00
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/ISA
  - ComputerOrganizationAndArchitecture/Instruction
---
# Instruction Set Architecture ISA

- ISA defines the permissible instructions.
- ISA is the interface or boundary between hardware and software.

## Instruction Set Design Issues



The three common types of ISAs are,
1. Stack-based ISA
2. Accumulator ISA
3. General Purpose Register ISA

## Stack-Based ISA

- If the CPU uses Stack based ISA, then there are two types of instructions,
	1. Arithmetic instructions : 0 address instructions
	2. Data transfer instructions : 1 address instructions

- In stack-based ISA, ALU considers the top of the stack data as second operand and the one below top of the stack data as first operand.

![[Instruction Set Architecture-20240725112749370.webp]]

## Accumulator ISA

1. Arithmetic instructions : 1 address instructions
- One operand is specified explicitly (from memory) and the other operand is implied implicitly (from accumulator).
- First operand is from accumulator and the second operand is from memory.

2. Data transfer instructions : 1 address instructions

- Main memory is accessed only when LOAD and STORE instructions are executed.

![[Instruction Set Architecture-20240725112721735.webp]]

## Register Set ISA

Register Set ISA is also called as General Purpose Register (GPR) ISA.

```merm
flowchart TD
	A[Register Set ISA] --> B[Register-Memory ISA]
	A --> C[Memory-Memory ISA]
	A --> D[Register-Register ISA]
```

All the operands has to be specified explicitly.

Registers are faster than main memory. The more the data that can be kept internally in the CPU, the faster the program will run.
Main memory access takes many clock cycles, which is the most expensive operation in terms of time.

### Register-Memory ISA

- One operand is from register and another operand is from memory.

### Memory-Memory ISA

- All operands are from main memory i.e. main memory is accessed for every operation.
- For accessing the main memory, it takes many clock cycles.
- Most **CISC**'s (Complex Instruction Set Computers) use this architecture.

### Register-Register ISA

- All operands are from registers in arithmetic instructions.
- To perform operations, we have to bring data from the main memory to the registers.
- Once a data (operand) from the main memory has been loaded to the registers, they can be used again when needed without needing to access main memory again.
- Arithmetic instructions do not access main memory.
- Only data transfer (load, store) instructions access main memory, so they are called as *load-store architecture*.
- Most **RISC**'s (Reduced Instruction Set Computers) use this architecture.

> [!question] Why register-register is architecture is used in modern computers?
> Optimization is possible in register-register architecture.

---
## RISC and CISC Architecture

> [!youtube] 
> [RISC Vs CISC - Instruction Set Architecture ISA | With NOTES | Computer Organization & Architecture - YouTube](https://www.youtube.com/watch?v=DZ-tGKk3TNE&list=PLIPZ2_p3RNHjMdZR3GYQ2KZio0NKczrik&index=8)

| CISC Architecture                                    | RISC Architecture                                                           |
| ---------------------------------------------------- | --------------------------------------------------------------------------- |
| In olden times, memory is expensive                  | Now in modern era, memory is cheap                                          |
| number of instructions per program must be very less | number of instructions per program can be high since optimizing is possible |
| Uses complex instruction that takes multiple clocks  | Uses simple instructions that are executed in a single clock                |
| More cycles per instruction                          | Less cycles per instruction                                                 |
| takes more time for program execution                | takes less time for program execution                                       |
| more emphasis on hardware                            | more emphasis on software                                                   |
| memory-memory ISA                                    | register-register ISA                                                       |
| focuses on minimizing the size of the program        | focuses on minimizing the execution time of the program                     |
| no complexity in compiler                            | complexity in compiler                                                      |
| Assembly programmer's life is easy                   | Assembly programmer's life is hard                                          |
| hardware does more work                              | software (compiler) does more work                                          |
| Slower more complex hardware                         | Faster and simpler hardware                                                 |
| Less number of registers                             | More number of registers                                                    |
| LOAD and STORE are incorporated in instructions      | LOAD and STORE are independent instructions                                 |
| more addressing modes                                | less addressing modes                                                       |
| pipelining is difficult                              | pipelining is easy                                                          |

A complex instruction may take the same amount of time as the equivalent simpler instructions, but pipelining can be used as a leverage to reduce execution time in RISC architecture. 

**Performance Equation :**
$$
\frac{\text{time}}{\text{program}} = \frac{\text{time}}{\text{cycle}} \times \frac{\text{cycles}}{\text{instructions}} \times \frac{\text{instructions}}{\text{program}}
$$

RISC minimizes the number of cycles per instruction and CISC minimizes the number of instructions per program.

