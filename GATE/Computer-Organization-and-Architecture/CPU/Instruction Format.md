---
pdf: 
module: 2
lecture: "3"
date: 2024-03-22T10:04:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/Instruction
---
# Notations on Instructions

> [!tip] 
> The semantics of the instructions will be given in the GATE exam. There is no need to remember the destination or source.

## Register Transfer Notation


## Assembly Language Notation



---
# Instruction Format

- Every instruction is of binary format (0s and 1s), so there must be a format for the instructions.
- Instruction Set is the complete collection of instructions that are completely understood by a CPU.
- If there is not a circuit (hardware in the CPU) for performing the desired operation (say calculate factorial), then write a program (sequence of instructions) to perform the desired operation.

- Opcode is in the MSbits of the instruction.

## Instruction Register



> [!important] 
> In a CPU, there cannot be two different instruction formats for the same operation.
>> [!example] 
>> There cannot be different address instructions for the `ADD` instruction.
>> `ADD;`
>> `ADD R1, R2, R3;`
>> These kind of address instructions are not possible in a single CPU for the same operation.
>
> In a CPU, different instruction or different operation can have different number of operands.
>> [!example] 
>> `ADD R1, R2, R3;`
>> `LOAD R1, LOC;`
>> `INC R1;`
>> `HALT;`

- If an instruction set has $k$ different instructions, then minimum $\lceil \log_2\;(k) \rceil$ number of bits are required to encode the op-codes.


## Instruction Length

- A CPU can have either fixed length instructions or variable length instructions.

- Decoding is easy in fixed length instructions though there is a wastage of space.
- There is some wastage of space in variables length instructions because of alignment though it is lesser than that of fixed length instructions.
- If fixed length instructions do not waste space within the instructions, then we can make the instruction set bigger.
- If a instruction set has $n$ instructions, then it means there are $n$ operations which means there are $n$ different opcodes.

## Expanding OpCode Technique

> [!steps] 
> - Start with instructions which give smallest opcode and go with the increasing order of opcodes size.



---