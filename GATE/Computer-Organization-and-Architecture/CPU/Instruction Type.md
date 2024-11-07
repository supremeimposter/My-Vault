---
pdf: 
module: 2
lecture: "4"
date: 2024-03-23T13:35:00
version:
  - COA-24
last-revision: 2024-11-02T12:40:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/Instruction
  - ComputerOrganizationAndArchitecture/ISA
---
# Instruction Type

Most computer instructions can be classified into 3 categories.

```merm
graph TD
A[Instruction Type] --> B[Data Transfer Instructions]
A --> C[Data Maniputation Instructions]
A --> D[Program Control Instructions]
C --> E[Arithmetic Instructions]
C --> F[Logical and Bit\nManipulation Instructions]
C --> G[Shift Instructions]
G --> H[Logical Shift\nInstructions]
G --> I[Arithmetic Shift\nInstructions]
```

> An assembler language is designed around a particular CPU, and there is no standard set of mneumonics. However, once you understand the purpose of the instructions, it is trivial to convert between languages.

![[Instruction Type-20240801184702203.webp]]

## Data Transfer Instructions

Data transfer instructions transfer data from one location to another location. They do not affect any of the [[Registers and Status Flags in CPU#Status Flags|flags]], since no computation by ALU is performed by Data transfer instructions.

Depending on the type of [[Instruction Set Architecture|ISA]], the functioning of the data transfer instructions may vary.

![[Instruction Type-20240801184424716.webp]]

![[Instruction Type-20240731225421486.webp]]

![[Instruction Type-20240731224757663.webp]]

> [!NOTE] 
> Most of the authors write destination first, but the semantics will be given in the exam.

## Data Manipulation Instructions

Data manipulation instructions perform operations on data and provide the computational capabilities of the computer.

There are 3 types of data manipulation instructions,

```merm
flowchart TD
A[Data Manipulation \nInstructions] --> B[Arithmetic Instructions]
A --> C[Logical and Bit \nManipulation Instructions]
A --> D[Shift Instructions]
```

![[Instruction Type-20240731225441578.webp]]

### Arithmetic Instructions

![[Instruction Type-20240801184508966.webp]]

Since arithmetic instructions are performed by ALU, it affects status flags.

For subtraction operation, [[Registers and Status Flags in CPU#Carry Flag|carry flag]] acts as a borrow flag i.e. carry flag is set if we need to borrow into most significant bit.

![[Instruction Type-20240801221005867.webp]]

Divide operation computes the quotient.

INC, DEC operations do not affect the carry flag since in INC operation when reaching the maximum value, it automatically circles back to the lowest value.

![[Instruction Type-20240731230107312.webp]]
![[Instruction Type-20240731230120147.webp]]

Depending on the ISA, arithmetic instructions may internally involve data transfer operations. For example, [[Instruction Set Architecture#Stack-Based ISA|stack based]], [[Instruction Set Architecture#Accumulator ISA|accumulator based]] ISA. [[Instruction Set Architecture#Register-Register ISA|Register-to-register]] ISA arithmetic instructions does not involve data transfer operations internally.

![[Instruction Type-20240801171857418.webp]]

### Logical Instructions

Logical operations are performed bit-wise by the ALU.

![[Instruction Type-20240801173127503.webp]]

![[Instruction Type-20240801184548813.webp]]

Here are some Bit-wise Logical operations,

- If one of the operand is all 1's, the the result of XOR operation is the 1's complement of the other operand.

![[Instruction Type-20240801173031870.webp]]

- If both the operands of the ALU are equal (same value), then result of XOR operation is all 0's and it sets the [[Registers and Status Flags in CPU#Zero Flag|zero flag]]. If the zero flag is not set, then both the operands are not the same i.e. ZF = 1 after $A \oplus B$ iff $A = B$.

![[Instruction Type-20240801173051248.webp]]

- To check if a bit is set in one of the operands, then take the other operand with all 0's but 1 where you need to check. Perform AND operation and check if the zero flag is set or not to tell if the desired bit is set or not. This is called bit-masking. 

![[Instruction Type-20240801172958702.webp]]

Compare instruction internally invokes subtraction but the contents of operands remains unchanged i.e. non-destructive subtraction of operands. It affects all the flags.

![[Instruction Type-20240801221041800.webp]]

### Shift Instructions

```merm
flowchart TD
A[Shift Operations] --> B[Logical Shift]
A --> C[Arithmetic Shift]

B --> D[Logical Shift Left]
B --> E[Logical Shift Right]

C --> F[Arithmetic Shift Left]
C --> G[Arithmetic Shift Right]
```

![[Instruction Type-20240801174933410.webp]]

![[Instruction Type-20240728100423624.webp]]

![[Instruction Type-20240801184154441.webp]]

> [!header] Division by 2 using shift operations

In division by 2, only the quotient is considered as result and the only possible remainders are $\{ 0, 1 \}$.

Arithmetic right shift can be used in division by 2 of *signed numbers* in 2's complement form with truncation for odd numbers (remainders truncated).

> [!example] 
> $4 = 2 \,(2) + 0$
> 
> $-4 = 2 \,(-2) + 0$
> 
> ![[Instruction Type-20240728103439969.webp]]

> [!example] 
> $5 = 2 \,(2) + 1$
> 
> $-5 = 2 \,(-3) + 1$
> 
> ![[Instruction Type-20240728112642462.webp]]

> [!example] 
> $7 = 2 \,(3) + 1$
> 
> $-7 = 2 \,(-4) + 1$
> 
> ![[Instruction Type-20240728112808143.webp]]

Logical right shift can be used for division by 2 of *unsigned numbers* with truncation for odd numbers.

![[Instruction Type-20240728104918316.webp]]

Division by 2 never creates [[Overflow of Signed and Unsigned Numbers|overflow]], but multiplication by 2 may create overflow.

> [!header] Multiplication by 2 using shift operations

If overflow occurs in multiplication, then both shift operations may give different products.

Both Arithmetic and Logical Left shift operations are performed for multiplication by 2 on *signed numbers*, given that no overflow occurs.

> [!example] 
> ![[Instruction Type-20240728114210999.webp]]

Logical left shift operations are performed for multiplicaition by 2 on *unsigned numbers*, given that no overflow occurs.

> [!example] 
> ![[Instruction Type-20240728121329970.webp]]

> [!header] Rotate Instructions

Since shift operations are wasting bits out, rotate operations (circular shift) can feedback the shifted bits back to the register. With rotate operations, we do not worry about the sign bit.

There are two types of rotate operations,
1. Rotate without carry - carry flag is not involved
2. Rotate through carry - rotates through carry flag

![[Instruction Type-20240728121832064.webp]]

![[Instruction Type-20240728154603189.webp]]

![[Instruction Type-20240801183626088.webp]]

> [!header] Carry flag affected by shift and rotate instruction

Carry flag contains the bit that is shifted out from the register in logical and arithmetic *shift*.

![[Instruction Type-20240728155133038.webp]]

Carry flag contains the corner bit which is circularly shifting back into the register in rotate instructions.

![[Instruction Type-20241102121942510.webp]]


## Transfer of Control Instructions

Transfer of control instructions are also called as **program control** instructions or Jump or Branch instructions.

Transfer of Control : Update the [[Registers and Status Flags in CPU#Program Counter PC|program counter]] to execute instructions sequentially or branch.

```merm
flowchart TD
A[Jump/Branch Instructions] --> B[Unconditional\nJump/Branch Instructions]
A --> C[Conditional\nJump/Branch Instructions]
```

A branch instruction has the address of the next instruction to be executed as one of its operands. When the branch instruction is decoded, the program counter is updated with the operand.

A **conditional jump** instruction jumps to the address on its operand when the specified condition is met, or else the next instruction in the sequence is executed.
An **unconditional jump** instruction always jumps to the address on its operand.

A branch can be either *forward* (jumps to an instruction at an higher memory address) or *backward* (jumps to an instruction at a lower memory address). Branch instructions are used to create a loop of repeating instructions.

> [!NOTE] 
> The semantics of the mnemonics in branch instructions will always be given in the question.

---