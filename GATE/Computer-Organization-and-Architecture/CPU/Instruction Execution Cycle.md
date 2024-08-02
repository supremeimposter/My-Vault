---
pdf: 
module: 2
lecture: "5"
date: 2024-03-24T12:10:00
version:
  - COA-24
last-revision: 2024-08-02T09:32:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/CPU
  - ComputerOrganizationAndArchitecture/Instruction
  - ComputerOrganizationAndArchitecture/ISA
---
# Instruction Execution Cycle

The basic function performed by a computer is execution of a program, which consists of a set of instructions stored in [[Main Memory and Addressability|memory]]. The [[Registers and Status Flags in CPU#CPU|processor]] does the actual work by executing instructions specified in the program.

The processor,
1. **fetches** the next instruction from the main memory into the instruction register,
2. **decodes** the instruction,
3. **executes** the instruction.

Instruction processing consists of two phases: the *fetch phase and the execution phase*. It is convenient to divide the processor hardware into two corresponding sections. One section fetches instructions and the other executes them.

The section that fetches instructions is also responsible for decoding them and for generating the control signals that cause appropriate actions to take place in the execution section. The execution section reads the data operands specified in an instruction, performs the required computations, and stores the results.

> Program execution consists of repeating the process of instruction fetch and instruction execution.

The [Instruction cycle](http://cs.iit.edu/~cs561/cs350/fetch/fetch.html) consists of two phases,
- **_Fetch/Decode Phase_** - where the operation code address is _fetched_ (read) from memory. The actions to be executed are identified, and (if the case) the address(es) of the memory operand(s) are loaded.
- **_Execution_** - where the actions (operations) specified by the instructions are effectively executed.

![[Instruction Execution Cycle-20240730163344930.webp]]

> [!example] 
> ![[Instruction Execution Cycle-20240730163137946.webp]]
> 
> 1, 2 = Fetch
> 3    = Decode
> 4    = Execute

- **Micro operation** or **Micro program** is the smallest atomic operation performed by the CPU based on Control Unit's signals. 
- Micro operations are elementary operations performed on information stored in one or more registers.
- Micro operations are **register to register transfer instructions** RTLs. It is executed in one clock cycle. But if memory is involved, it may take several clock cylcles.
- Each micro operation has an RTL control step number.
- For each instruction in the instruction set of the processor, there are a collection of micro-operations.

> [!example] 
> ![[Instruction Execution Cycle-20240801235355736.webp]]
> 
> ![[Instruction Execution Cycle-20240801235338775.webp]]
> 
> ![[Instruction Execution Cycle-20240801235720365.webp]]
> 
> ![[Instruction Execution Cycle-20240802083840153.webp]]

> [!summary] 
> Control Unit contains the control memory which contains the microprograms. Microprograms are those programs which contain only those operations related to the CPU.

## Instruction Fetch Cycle

> [!attention] 
> Instruction Fetch cycle contains instruction fetching and instruction decoding as mentioned in many *standard resources*.

### Fetch Instruction

Initially, the program counter is loaded with the address of the first instruction in the program.

![[Instruction Execution Cycle-20240731142859974.webp]]

A micropogram for fetching the instruction,

![[Instruction Execution Cycle-20240801231350689.webp]]

In instruction fetch, the program counter increments by the [[Instruction Format#Instruction Length|length of an instruction]] $I$ ($I$ is incremented with respect to byte-addressable memory). The instruction length has to be fixed as it will be difficult for decoding variable length instructions.
$$
\text{PC} \leftarrow PC + I 
$$

### Decode Instruction

The instruction in the [[Registers and Status Flags in CPU#Instruction Register IR|instruction register]] is split into two parts, IR(opcode) and IR(address). 
Then the opcode is decoded by the control unit.

![[Instruction Execution Cycle-20240801232607108.webp]]

If the word size is smaller than instruction size and the memory is word-addressable, then the fetched instruction is decoded and then the remaining part of the instruction is obtained and decoded.

![[Instruction Execution Cycle-20240801232742991.webp]]

![[Instruction Execution Cycle-20240801233126184.webp]]

> Program counter incrementation can be done either after loading data to MBR or after transferring instruction to Instruction Register as defined in the microprograms of the processor.

## Instruction Execute Cycle

When the instruction is decoded, the CU knows which instruction to execute and generates signals to up paths and effect the desired register transfers.

![[Instruction Execution Cycle-20240801233548902.webp]]

> $\mathcal{l}_{\text{fetch}}$ means fetch next instruction.

> [!pdf] mod-2/lec-05.pdf Pg. No. 63 - 97
> Execution of different instructions

# HALT Instruction

Program execution halts only if the machine is turned off some sort of unrecoverable error occurs, or a program instruction that halts the computer is encountered.

CPU breaks the fetch-decode-execute cycle on executing HALT instruction. Halt instruction is one of the [[Instruction Type#Transfer of Control Instructions|jump instructions]]. **Halting simply stops the clock** i.e. stops the program execution.

When program execution is halted (HALT instruction is executed), the PC contains the address of the next instruction following the HALT instruction. So when an interrupt is used to resume execution after a HALT instruction, PC points to the next instruction to be executed.

Some CPU's have a special flag called as **Run flag**. When run flag is set, the computer is running, and when the flag is reset, the computers is halted.

---