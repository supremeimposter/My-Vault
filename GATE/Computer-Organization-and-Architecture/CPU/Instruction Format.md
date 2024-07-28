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
  - ComputerOrganizationAndArchitecture/ISA
---
# Notations on Instructions

> [!tip] 
> The semantics of the instructions will be given in the GATE exam. There is no need to remember the destination or source.

Addresses are represented using Hexadecimal numbers. Hexadecimal numbers are represented by adding a `x` to the end of the number. For example, EAx, ACx, 73x, 04x, etc...

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
>> 
>> `ADD;`
>> `ADD R1, R2, R3;`
>> 
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

- The traditional method for describing a computer architecture is to specify the maximum number of operands, or addresses, contained in each instruction, which impacts the length of the instruction.
- A CPU can have either fixed length instructions or variable length instructions.
- All the instructions do not have the same length in the ISA in variables length instructions.

| Variable Length Instructions                                                                                    | Fixed Length Instructions                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Decoding is not easy                                                                                            | Decoding is easy                                                                                                  |
| Pipelining is complicated                                                                                       | Pipelining is easy                                                                                                |
| Used in CISC                                                                                                    | Used in RISC                                                                                                      |
| Different instructions can be represented using different number of bytes                                       | Different instructions can be represented using same number of bytes                                              |
| Wastage of space is main memory because of alignment though it is lesser than that of fixed length instructions | More wastage of space since there are operations with 0 operands and take up the same space as other instructions |
| ![[Instruction Format-20240726073236010.webp]]                                                                  | ![[Instruction Format-20240726073250040.webp]]                                                                              |

- There is no constraint on how many bytes are used in encoding the instructions in variable-length instructions.
- There will be some unused bits in fixed length instructions.
- Fixed length instructions is fast and has better performance than variable length instructions.
- If a instruction set has $n$ instructions, then it means there are $n$ operations i.e. $n$ opcodes.

- Not every instruction require the same number of operands. Instructions such as `HALT` waste a lot of space in fixed-length instructions.
- If fixed length instructions do not waste space within the instructions, then we can make the instruction set bigger.

### Expanding OpCode Technique

- For fixed length instructions to maximize various types of instruction formats without wasting much space and not make the decoding complex, **expanding OpCode technique** is used.
- When the opcodes are short, a lot of bits are left to hold operands, so we could have 2 or 3 operands per instruction.
- If an instruction has no operand, then all of the bits can be used for opcodes, so many unique instructions are available.
- There are also instructions with longer opcodes and fewer operands and instructions with shorter opcodes and more operands.

> [!tip] 
> Start with instructions which give smallest opcode and go with the increasing order of OpCode size. Instructions with the most operands has smallest opcodes and 0 address instructions has the largest opcodes.

> [!example] 

The given instruction set has to checked if it can be accommodated in the given number of bits for instruction.

![[Instruction Format-20240726120713306.webp]]

The encoding of each instructions are,

![[Instruction Format-20240726120732896.webp]]

> [!example] 

![[Instruction Format-20240726115546726.webp]]

The encodings of the instructions are,

![[Instruction Format-20240726121359785.webp]]


> [!example] 

![[Instruction Format-20240726210116387.webp]]

Checking whether the given bits can accommodate the instruction set.

![[Instruction Format-20240726210012645.webp]]

The encodings of the instructions are,

![[Instruction Format-20240726210938427.webp]]

4 more 0-address instructions can be added to the instruction set in the future.


> [!example] 
> ![[Instruction Format-20240726231438263.webp]]

![[Instruction Format-20240726231518276.webp]]

![[Instruction Format-20240726231624386.webp]]

---