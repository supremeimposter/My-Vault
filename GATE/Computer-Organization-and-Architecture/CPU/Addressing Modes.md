---
pdf: 
module: 2
lecture: "6"
date: 2024-03-27T11:20:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/CPU
  - ComputerOrganizationAndArchitecture/Instruction
---
# Addressing Modes

Addressing Modes are all the different ways by which the **location of the operands** is specified in the instruction.

> [!definition] Effective Address
> **Effective address** is the actual address of the operand.
> EA - address of the operand
> $[$EA$]$- content/data at the address of the operand 

The possible locations of an operand are register, memory and the instruction itself.

## Immediate Addressing Mode

- In immediate addressing mode, IR(address) itself is the operand or the data instead of the address of the operand.

![[Addressing Modes-20240802114701276.webp]]

- Immediate addressing mode is used to define constant or set initial values of variables.
- The instruction contains the value itself which is represented by preceding a $\#$.

- The size of the operand is restricted by the address field. Since the value to be loaded is fixed at compile time, it is not very flexible.
- Immediate addressing mode is very fast because the value to be loaded is available in the instruction i.e. no need to access memory for the data.

## Stack Addressing Mode

- It is also called as implied or implicit addressing mode.
- *Opcode* tells us the location of the operand. The location of the operands are implied in the instruction.

- Instructions such as CLC (clear carry) implies that the operand is the carry flag (which has to be cleared or reset).
- In [[Instruction Set Architecture#Stack-Based ISA|Stack-based ISA]], the opcode implies that all the operands are in the stack.

![[Addressing Modes-20240802114913785.webp]]

- In [[Instruction Set Architecture#Accumulator ISA|Accumulator based ISA]], one of the operands is implied as the accumulator.

## Direct Addressing Mode

- It is also called as absolute addressing mode.
- The operand is in the memory and the *address of the memory location* is explicitly given in the instruction.
- Effective address is in IR(address) in this mode.

![[Addressing Modes-20240802114720364.webp]]

- In [[Instruction Set Architecture#Accumulator ISA|Accumulator based ISA]], one of the operands uses direct addressing mode to specify the operand location.
- [[Instruction Type#Transfer of Control Instructions|Jump instructions]] use direct adddresing mode.

- The value of the operand is not restricted by the size of the address field, as the address field contains only the address.
- Variables(local, static, global) can be represented or accessed using direct addressing mode.

## Register Addressing Mode

- The operand is the content of the processor register. The name(address) of the register is given in the instruction.
- Address field in the instruction register contains the address of a register.

![[Addressing Modes-20240802114759295.webp]]

- The register address field in the small in the instruction compared to the direct addressing mode as most modern computers have at most 64 GPRs.
- There is no memory access in this addressing mode.

## Indirect Addressing Mode

- The address field contains a memory address, which in turn contains another memory address in which the operand is available.
$$EA = [\,\text{IR (address)}\,]$$
- It is also called as memory indirect or memory deferred addressing mode.

![[Addressing Modes-20240802114739959.webp]]

- In assembly language, either $(M)$ or $@ \,M$ is used to represent the operand in indirect addressing mode.
- Pointers in programming can be implemented using indirect addressing mode. The register or memory location that contains the address of an operand is called a pointer.

> [!example] 
> ![[Addressing Modes-20240802121017838.webp]]

## Register Indirect Addressing Mode

- The operand is a register and it contains the address of  a memory location.
- It is also called as register deferred addressing mode.

![[Addressing Modes-20240802121150398.webp]]

- In assembly language, either $(R)$ or $@ \,R$ is used to represent the operand in indirect addressing mode.
- It is similar to the indirect addressing mode, but IR(address) contains the address of a register.
- It has to do one memory access, but requires lesser address space than that of Indirect addressing mode.


> [!example] 
> ![[Addressing Modes-20240802125019802.webp]]

> [!example] 
> ![[Addressing Modes-20240802125716096.webp]]
> 
> ![[Addressing Modes-20240802125728801.webp]]

## Displacement Based Addressing Mode

- Combines the capabilities of direct addressing and register indirect addressing.
- The registers in the displacement based addressing mode are specific, special purpose registers, based on which there are three types of displacement based addressing modes.

```merm
flowchart TD
A[Displacement Based Addressing Mode] --> B[Relative Addressing Mode]
A --> C[Indexed Addressing Mode]
A --> D[Base Register Addressing Mode]
```

### Indexed Addressing Mode


### Relative Addressing Mode
- Relative addressing mode is used to write relocatable code (position independent code).


### Base Register Addressing Mode

- The program is loaded into the main memory and the starting address is stored in the Base Register BR.


> [!summary] 

![[Addressing Modes-20240802115135310.webp]]

## AutoIncrement and AutoDecrement Addressing Modes




# Specifying Addressing Mode



---