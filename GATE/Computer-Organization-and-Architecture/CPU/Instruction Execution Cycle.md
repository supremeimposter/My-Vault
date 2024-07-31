---
pdf: 
module: 2
lecture: "5"
date: 2024-03-24T12:10:00
version:
  - COA-24
last-revision: 
notes-taken: false
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

The [Instruction cycle](http://cs.iit.edu/~cs561/cs350/fetch/fetch.html) consists of two phases,
- **_Fetch/Decode Phase_** - where the operation code address is _fetched_ (read) from memory. The actions to be executed are identified, and (if the case) the address(es) of the memory operand(s) are loaded.
- **_Execution_** - where the actions (operations) specified by the instructions are effectively executed.

![[Instruction Execution Cycle-20240730163344930.webp|Basic Instruction Cycle]]

> [!example] 
> ![[Instruction Execution Cycle-20240730163137946.webp]]
> 
> 1, 2 = Fetch
> 3    = Decode
> 4    = Execute

## Instruction Fetch Cycle

> Instruction Fetch cycle contains instruction fetching and instruction decoding as mentioned in many standard resources.

- Micro operation is the smallest atomic operation performed by the CPU based on Control Unit's signals. 
- Micro operations are elementary operations performed on information stored in one or more registers.
- Micro operations are register to register transfer instructions.

- Control Unit contains the control memory which contains the microprograms.
- **Microprograms** are those programs which contain only those operations related to the CPU.

![[Instruction Execution Cycle-20240731142859974.webp]]

### Fetch Instruction

- Initially, the program counter is loaded with the address of the first instruction in the program.


### Decode Instruction



## Instruction Execute Cycle



# HALT Instruction

Program execution halts only if the machine is turned off some sort of unrecoverable error occurs, or a program instruction that halts the computer is encountered.

CPU breaks the fetch-decode-execute cycle on executing HALT instruction. **Halting simply stops the clock**.

When program execution is halted (HALT instruction is executed), the PC contains the address of the next instruction of HALT instruction. So when an interrupt is used to resume execution after a HALT instruction, PC points to the next instruction to be executed.

Some CPU's have a special flag called as **Run flag**. When run flag is set, the computer is running, and when the flag is reset, the computers is halted.

---