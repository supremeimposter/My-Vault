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
- Addressing Modes are all the different ways by which the location of the operands is specified in the instruction.
- Effective address is the address of the operand.

```merm
flowchart TD
A[Instruction Register] --> B[Opcode Field]
A --> C[Address Field]
```

## Immediate Addressing Mode
- In immediate addressing mode, the address part of the instruction register itself is the operand.
- The size of the operand is restricted by the address field.

## Stack Addressing Mode
- It is also called as implied or implicit addressing mode.
- Opcode tells us the location of the operand.

## Direct Addressing Mode
- It is also called as absolute addressing mode.
- The operand is in the memory and the address of the memory location is given in the instruction.
- The value of the operand is not restricted by the size of the address field, as the address field contains only the address.
- Variables can be represented or accessed using direct addressing mode.

## Register Addressing Mode
- The operand is the content of a register. The name of the register is given in the instruction.

## Indirect Addressing Mode
- The address field contains a memory address, which in turn contains another memory address in which the operand is available.
- Pointers in C can be implemented using indirect addressing mode.

## Register Indirect Addressing Mode


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

## AutoIncrement and AutoDecrement Addressing Modes


# Specifying Addressing Mode



---