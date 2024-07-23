---
pdf: 
module: 1
lecture: "1"
date: 2024-03-17T12:43:00
version:
  - COA-24
last-revision: 2024-07-23T11:47:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture
---
# Introduction to COA

COA deals with hardware aspect of computer. It teaches us how computer operates, how it is designed and how it is built.

## Architecture vs Organization

> [!NOTE] 
> Architecture - Conceptual Design (Blue Print)
> Organization - Implementation

**Architecture** : Designing functional units

- Machine Instruction and Addressing modes  
- ALU  
- Datapath and Control unit  
- Data format

**Organization** : Implementing architecture via interconnecting operational units

- IO Organization  
- Memory Hierarchy  
- Pipelining

![[Introduction to COA-20240317130010887.webp]]
## Stored Program Architecture

![[Introduction to COA-20240720112125466.webp|Basic Computer Organization]]

- Main components of a computer
	- Processor : Executes a program
	- Main memory : Holds program and data
	- I/O devices : for communication with outside
- Machine instruction
	- Description of primitive operation that machine hardware is able to execute e.g. ADD two integers.
- [[Instruction Set Architecture|Instruction Set]]
	- Complete specification of all the kinds of instructions that the processor hardware was built to execute.

Stored program computers (programmable computer) contain the instructions for the CPU and the data associated with the instructions in the memory. It is the architecture used in today's computers. It is also called as Von Neumann Architecture.

A program is a sequence of primitive instructions from the instruction set.

![[Introduction to COA-20240317125943618.webp]]

Using a computer program, complex instructions can be performed as a sequence of simple operations. For example, if the computer contains only adders, then multiplication operation can be performed as a sequence of addition using programs which contains those instructions.

> [!example] 
> Multiplication can be performed using addition with the help of stored program.
> 
> ![[Introduction to COA-20240723112019992.webp]]

**Main memory** and **secondary storage** and **IO devices** are connected to the processor using system bus.

**CPU** acts as a superviser to all the devices connected to it. It sends and receives signals via system bus. CPU has the highest operating speed.
![[Introduction to COA-20240723112208655.webp]]
[[Main Memory and Addressability|Main memory]] stores the instructions and the data associated with the instructions in the binary format supported by the CPU.

There are two types of memory, 
1. Random Access Memory (RAM) - volatile
2. Read Only Memory (ROM) - non-volatile

![[Introduction to COA-20240317131327237.webp]]

[[Operating Systems|Operating system]] loads the machine code of a program to the main memory and a program in execution is called a **process**.
CPU executes each instructions one by one in a process.

**Input Devices**: Devices that are capable of receiving the data from user and providing it to computer  
**Output Devices**: Devices that are capable of receiving data from a computer and providing it to user

![[Introduction to COA-20240317133224152.webp]]

I/O interface connects each input output device to the CPU.

Functionality of I/O interface are,
- Synchronize the operating speed of CPU & I/O devices.  
- Contains an address decoder attached to the I/O bus that monitors the address lines and activates the I/O accordingly. 
- Data buffering possible through data bus

BIOS is stored in ROM chip.

![[Introduction to COA-20240723114548488.webp]]

---