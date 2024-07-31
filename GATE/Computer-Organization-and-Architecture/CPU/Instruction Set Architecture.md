---
pdf: 
module: 2
lecture: "2"
date: 2024-03-20T19:48:00
version:
  - COA-24
last-revision: 2024-07-31T17:59:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/ISA
  - ComputerOrganizationAndArchitecture/Instruction
---
# Instruction Set Architecture ISA

- ISA defines the permissible instructions for a processor.
- ISA is the interface or boundary between hardware and software.
- Instructions are *bit-patterns*, hardware interprets them as commands.

## ISA Design Issues

The ISA of a processor can be described using 5 categories,

1. ﻿Number of explicit operands : 0, 1, 2 or 3
2. Location of the operands : Registers, accumulator, memory.
3. Specification of operand locations : [[Addressing Modes|Addressing modes]] - register, immediate, indirect, relative, etc...
4. Sizes of operands supported : Byte (8-bits), Half-word (16-bits), Word (32-bits), Double (64-bits), etc... 
5. Supported operations : ADD, SUB, MUL, AND, OR, CMP, MOVE, JMP, etc...

ISA does NOT tell how operations are implemented, or which operations are fast or slow, how many cycles does an operation take to execute, or what is the power consumption of operations.

ISAs are classified based on where the operands are stored, whether they are named explicitly or implicitly as,

1. Stack-based ISA
2. Accumulator ISA
3. Register-Set ISA

## Stack-Based ISA

If the CPU uses Stack architecture,

**Arithmetic instructions:** 0 address instructions

All operands are implicit

```armasm
ADD ; <TOS> <-- <TOS - 1> + <TOS>

SUB ;<TOS> <-- <TOS - 1> - <TOS>

MUL ;<TOS> <-- <TOS - 1> * <TOS>
```

The two operands are obtained from the stack section of the process. [[Registers and Status Flags in CPU#Stack Pointer SP|Stack pointer register]] points to the top of the stack of a process in main memory.

In stack-based ISA, ALU considers the top of the stack data as second operand and the one below top of the stack data as first operand.

![[Instruction Set Architecture-20240731093613820.webp]]

To perform addition of two operands from the stack, the main memory is accessed 3 times.

**Data transfer instructions:** 1 address instructions

```armasm
PUSH 0xFF ; <TOS> <-- <0xFF>
POP 0xFF  ; <0xFF> <-- <TOS>
```

1 memory address is specified in the data transfer instruction.

![[Instruction Set Architecture-20240725112749370.webp]]

> [!example] 
> $C = A + B$, where $A, B, C$ are memory addresses. The result of operation $A + B$ is stored at $C$.

![[Instruction Set Architecture-20240731094332700.webp]]

## Accumulator ISA

**Arithmetic instructions :** 1 address instructions

One operand is specified explicitly (from memory) and the other operand is implied implicitly (from accumulator).

```armasm
ADD 0x55 ; ACC  <--  ACC + <0x55>

SUB 0x45 ; ACC  <--  ACC - <0x45>
```

First operand is from accumulator and the second operand is from memory.

In accumulator-based ISA, main memory is not accessed by arithmetic instruction.

**Data transfer instructions :** 1 address instructions

```armasm
LOAD 0x55  ; ACC  <--  <0x55>
STORE 0x59 ; <0x59>  <--  ACC
```

In accumulator-based ISA, main memory is accessed only when LOAD and STORE instructions are executed.

![[Instruction Set Architecture-20240725112721735.webp]]

> [!example] 
> $C = A + B$, where $A, B, C$ are memory addresses. The result of the operation $A + B$ is stored at $C$.

![[Instruction Set Architecture-20240731100559830.webp]]

## Register Set ISA

Register Set ISA is also called as General Purpose Register (GPR) ISA. It is the dominant architecture used by modern computers. Modern computers have GPR's as many as 32.

Depending on whether the operands are present in register or memory, Register set ISA is classified into,

```merm
flowchart TD
	A[Register Set ISA] --> B[Register-Memory ISA]
	A --> C[Memory-Memory ISA]
	A --> D[Register-Register ISA]
```

<mark class="hltr-cyan">All the operands in register set ISA has to be specified explicitly</mark>. The instructions in register set ISA are longer than accumulator designs.

> [!tip] 
> The semantics of the instructions will be mentioned as comments. For example, which address is the source and which address is the destination and what exactly does the instruction specify in GATE exam.

### Register-Memory ISA

One operand is from register and another operand is from memory. 

![[Instruction Set Architecture-20240731103233687.webp]]

**Arithmetic Instructions :** 2 address instructions

The result of the ALU is stored back in the register.

```armasm
ADD R, 0x22  ; <R>  <---  <R> + <0x22>
```

**Data Transfer Instructions :** 2 address instructions

The data can be transferred between register and memory.

```armasm
LOAD R, 0x40 ; <R>  <--- <0x40>
STORE 0x56 R ; <0x56>  <--- <R>
```

> [!example] 
> ![[Instruction Set Architecture-20240731103130682.webp]]

### Memory-Memory ISA

- All operands are from main memory i.e. main memory is accessed for every operation.
- The arithmetic instructions can have either 2 or 3 addresses.

```armasm
ADD 0x23, 0x24, 0x25  ; <0x23> = <0x24> + <0x25>

ADD 0x45, 0x46        ; <0x45> = <0x45> + <0x46>

SUB 0xA1, 0xA2        ; <0xA1> = <0xA1> - <0xA2>
```

- There are no data transfer instruction from memory to any of the registers, as all of the operands are from the main memory.
- LOAD and STORE operations are incorporated inside the aritmetic instructions and hardware takes care of it.
- It takes many clock cycles to access main memory.

- Most **CISC**'s (Complex Instruction Set Computers) use this architecture.

### Register-Register ISA

- All operands are from registers in arithmetic instructions.
- To perform operations, we have to bring data from the main memory to the registers.
- Once a data (operand) from the main memory has been loaded to the registers, they can be used again when needed without needing to access main memory again.

![[Instruction Set Architecture-20240731104743462.webp]]

- Arithmetic instructions do not access main memory. They are 3 address instructions and contains only register addresses.
- Only data transfer (load, store) instructions access main memory, so they this architecture is also called as *load-store architecture*.
- Data transfer instructions are 2 address instructions.

```armasm
LOAD R1, A     ; R1  <--- <A>
LOAD R2, B     ; R2  <--- <B>
ADD R3, R1, R2 ; R3  <--- R1 + R2
STORE C, R3    ; <C> <--- R3
```

- Most **RISC**'s (Reduced Instruction Set Computers) use this architecture.

## Comparison of ISA

CPU Registers are faster than main memory. The more the data that can be kept internally in the CPU, the faster the program will run.
Main memory access takes many clock cycles, which is the most expensive operation in terms of time.

````col
```col-md
flexGrow=1
===
#### Memory-Memory 
![[Instruction Set Architecture-20240731123850328.webp]]
```
```col-md
flexGrow=1
===
#### Register-Register
![[Instruction Set Architecture-20240731123902427.webp]]
```
````

Memory-Memory architecture takes more accesss to main memory which has to wait for many clock cycles, which leads to increased execution time, though the instructions takes less space in memory.

Register-Register architecture loads the data to registers and used when necessary, which leads to reduced memory access and reduced execution time, through the instructions are long and takes more space in memory.

> [!question] Why register-register is architecture is used in modern computers?
> Optimization is possible in register-register architecture. Repeated memory access can be avoided, by storing data in registers in CPU.

### RISC vs CISC Architecture

> [!link] 
> [RISC Vs CISC - Instruction Set Architecture ISA | With NOTES | Computer Organization & Architecture - YouTube](https://www.youtube.com/watch?v=DZ-tGKk3TNE&list=PLIPZ2_p3RNHjMdZR3GYQ2KZio0NKczrik&index=8)
> 
> [RISC vs CISC - Stanford](https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/)

| CISC Architecture                                         | RISC Architecture                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------- |
| In olden times, memory is expensive                       | Now in modern era, memory is cheap                                          |
| number of instructions per program must be very less      | number of instructions per program can be high since optimizing is possible |
| Uses complex instruction that takes multiple clock cycles | Uses simple instructions that are executed in a single clock cycle          |
| More cycles per instruction                               | Less cycles per instruction                                                 |
| takes more time for program execution                     | takes less time for program execution                                       |
| more emphasis on hardware                                 | more emphasis on software                                                   |
| memory-memory ISA                                         | register-register ISA                                                       |
| focuses on minimizing the size of the program             | focuses on minimizing the execution time of the program                     |
| small code size, high cycles per second                   | large code size, low cycles per second                                      |
| no complexity in compiler                                 | complexity in compiler                                                      |
| Assembly programmer's life is easy                        | Assembly programmer's life is hard                                          |
| multiple instruction sizes and formats                    | instructions of same set with few formats                                   |
| hardware does more work                                   | software (compiler) does more work                                          |
| Slower and more complex hardware                          | Faster and simpler hardware                                                 |
| Less number of registers                                  | More number of registers                                                    |
| LOAD and STORE are incorporated in instructions           | LOAD and STORE are independent instructions                                 |
| more addressing modes                                     | less addressing modes                                                       |
| pipelining is difficult                                   | pipelining is easy                                                          |
| transistors used for storing complex instructions         | spends more transistors on memory registers                                 |

CISC instructions are shorter and complex (close to high-level languages), in which the hardware does more work. For each instruction, the hardware has been built to understand its complexity and execute a series of operations behind.

RISC instructions are long and broken into simpler instructions that makes the task of hardware simpler. It also requires less hardware space and is generally lower power. It is used in *modern computers*.

A complex instruction may take the same amount of time as the equivalent simpler instructions, but since all the instructions execute in a uniform time, pipelining can be used as a leverage to reduce execution time in RISC architecture. 

**Performance Equation :**

Performance equation is used to express a computer's functioning ability.

$$
\frac{\text{time}}{\text{program}} = \frac{\text{time}}{\text{cycle}} \times \frac{\text{cycles}}{\text{instructions}} \times \frac{\text{instructions}}{\text{program}}
$$

RISC minimizes the number of cycles per instruction at the cost of number of instructions per program.

CISC minimizes the number of instructions per program at the cost of number of cycles per instruction.

---