---
pdf: 
module: 2
lecture: "3"
date: 2024-03-22T10:04:00
version:
  - COA-24
last-revision: 2024-07-31T21:04:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/Instruction
  - ComputerOrganizationAndArchitecture/ISA
---
# Notations on Instructions

> [!tip] 
> The semantics of the instructions will be given in the GATE exam. There is no need to remember the destination or source.
> 
> ![[Instruction Format-20240731140535886.webp]]

Addresses are represented using Hexadecimal numbers. Hexadecimal numbers are represented by adding a `x` to the end of the number. For example, EAx, ACx, 73x, 04x, etc...

## Register Transfer Notation

Addresses of memory locations - LOC, PLACE, A, VAR2, etc...
Processor register names - $R_{0}, R_{1}, R_{2} \cdots$
I/O register names - DATAIN, OUTSTATUS, etc...

The content of a memory address is copied/transferred to a register,
$$
R_{1} = [\,\text{LOC}\,]
$$
The contents of two registers are added and copied to a another register,
$$
R_{3} = [\,R_{1}\,] + [\,R_{2}\,]
$$

In RTN notation, the RHS of the expression always denotes a value, and the LHS of the expression always denotes the name of a location where the value is to be placed, overwriting the old contents of the location.

> RTL - Register Transfer Level

## Assembly Language Notation

![[Instruction Format-20240731141558233.webp]]

---
# Instruction Format

- Every instruction is of binary format (0s and 1s), so there must be a format for the instructions to identify the operation and the operands in the binary sequence.

![[Instruction Format-20240731143811718.webp]]

- An instruction must contain the operation code (opcode), source operand reference(s), result operand reference.
- **Instruction Set** is the complete collection of all the instructions that are implemented in the hardware and are completely understood by the CPU.
- If there is not a circuit (hardware in the CPU) for performing the desired operation (say calculate factorial), then write a program (sequence of instructions) to perform the desired operation.
- **Opcode** is in the MSbits of the instruction which denotes the operation to be performed on the operands.

![[Instruction Format-20240731142554942.webp]]
![[Instruction Format-20240731143534135.webp]]

Control Unit has an opcode [[Decoder|decoder]] to decode the opcode and find the corresponding operation.
**Mneumonics** are used to indiciate the operation for our convenience e.g. ADD, SUB, MUL, DIV, LOAD, STOR etc...

[[Registers and Status Flags in CPU#Instruction Register IR|Instruction Register]] stores the instruction which has two parts,
1. IR (opcode) - the most significant bits of the instruction makes the opcode i.e. the operation to be performed.
2. IR (address) - the least significant bits of the instruction are the address of the actual data or the operands.

![[Instruction Format-20240731144814009.webp]]

Generally there can be atmost 3 operands (addresses) in an instruction and the opcode is mandatory.

![[Instruction Format-20240731144608459.webp]]
![[Instruction Format-20240731144703137.webp]]

![[Instruction Format-20240731200606517.webp]]

- If a instruction set has $k$ instructions, then it means there are $k$ operations i.e. $k$ opcodes, then minimum $\lceil\, \log_2\;(k)\, \rceil$ number of bits are required to encode the op-codes.
- The number of different instructions (operations) and the types and formats of the operands determine the length of an instruction.

## Instruction Length

- The traditional method for describing a computer architecture is to specify the maximum number of operands (addresses), contained in each instruction, which impacts the length of the instruction.
- Any instruction set, not all the instructions require the same number of operands.
- A CPU can have either [fixed length instructions or variable length instructions](http://www.cs.emory.edu/~cheung/Courses/255/Syllabus/6-CPU/risc-cisc.html).

| Variable Length Instructions                                                                                    | Fixed Length Instructions                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Different instructions can be represented using different number of bytes                                       | Different instructions can be represented using same number of bytes                                              |
| Wastage of space in main memory because of alignment though it is lesser than that of fixed length instructions | More wastage of space since there are operations with 0 operands and take up the same space as other instructions |
| ![[Instruction Format-20240726073236010.webp]]                                                                  | ![[Instruction Format-20240726073250040.webp]]                                                                    |
| Decoding is not easy                                                                                            | Decoding is easy                                                                                                  |
| Pipelining is complicated                                                                                       | Pipelining is easy                                                                                                |
| Used in CISC                                                                                                    | Used in RISC                                                                                                      |

- There is no constraint on how many bytes are used in encoding the instructions in variable-length instructions.
- All the instructions do not have the same length in the ISA in variables length instructions.

- There will be some unused bits in fixed length instructions.
- Fixed length instructions is fast and has better performance than variable length instructions.

- Not every instruction require the same number of operands. Instructions such as `HALT` waste a lot of space in fixed-length instructions.
- If fixed length instructions do not waste space within the instructions, then we can make the instruction set bigger.
- Fixed-length instructions is fast and gives better performance when instruction-level pipelining is used.

### Expanding OpCode Technique

- For <mark class="hltr-pink">fixed length instructions</mark> to maximize various types of instruction formats without wasting much space and not make the decoding complex, **expanding OpCode technique** is used.
- When the opcodes are short, a lot of bits are left to hold operands, so we could have 2 or 3 operands per instruction.
- If an instruction has no operand, then all of the bits can be used for opcodes, so many unique instructions are available.
- There are also instructions with longer opcodes and fewer operands and instructions with shorter opcodes and more operands.

> [!tip] 
> Start with instructions which give smallest opcode and go with the increasing order of opcode size. Instructions with the most operands has smallest opcode length and 0 address instructions has the largest opcode length.

> [!example] 
> ![[Instruction Format-20240731190154262.webp]]

The given instruction set has to checked if it can be accommodated in the given number of bits for instruction.

![[Instruction Format-20240726120713306.webp]]

The encoding of each instructions are,

![[Instruction Format-20240726120732896.webp]]

> [!example] 
> ![[Instruction Format-20240731191008743.webp]]

All the instructions in the given instruction set must be accommodated in $2^{16}$ encodings.

In the given instruction set, only register addresses are allowed in the instructions.

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

> [!example] 
> ![[Instruction Format-20240731202856499.webp]]

![[Instruction Format-20240731202909629.webp]]

![[Instruction Format-20240731202918208.webp]]

The left out encodings can be used in the future for adding more unique instructions to the instruction set.

---

From the expanding opcode technique, it is evident that,

In a single CPU, there cannot be two different instruction formats for the same operation, since a particular operation has a unique opcode.

> [!example] 
> There cannot be different formats for the `ADD` instruction.
> 
>> `ADD;`
>> `ADD R1, R2, R3;`
>> 
>> These kind of address instructions are not possible in a single CPU for the same operation.

In a single CPU, different instruction or operation can have different number of operands.

> [!example] 
>> `ADD R1, R2, R3;` - 3 address instruction
>> `LOAD R1, LOC;` - 2 address instruction
>> `INC R1;` - 1 address instruction
>> `HALT;` - 0 address instruction

Each of the opcode represents a unique operation, since the number of opcodes is equal to the number of instructions in the instruction set.

---