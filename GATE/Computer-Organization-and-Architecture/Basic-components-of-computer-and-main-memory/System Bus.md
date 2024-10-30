---
pdf: 
module: 1
lecture: 
date: 2024-07-23
version:
  - COA-24
last-revision: 2024-07-23T16:49:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/SystemBus
---
# System Bus

- The system bus is a transmission media between different components of a computer. It consists of electrical wires and lines.

![[System Bus-20240723175454615.webp]]

- The system bus is classified into three types based on the type of information they carry.

![[System Bus-20240720122551531.webp]]

- On each line, only one bit travels at a time.

````col
```col-md
flexGrow=1
===
![[System Bus-20240319112721015.webp|320]]
```
```col-md
flexGrow=0.5
===
**Address Lines:**  
Unidirectional
---
**Data Lines: **
Bi-directional
---
**Control Lines:**
Partly Bi-directional
```
````

- Address lines are unidirectional and controlled by the processor, since they are connected from MAR to other components. 

- Data lines are bi-direcitonal, since CPU reads data from memory and writes into memory.
- There are individual connections for each and every bit.
- Word length is the physical width of the data bus to memory.
- Address bus does not have to be the same width as data bus.

- Control lines carry the control signals that manage the transfer of data to/from CPU. They also specify the timing and direction of the data transfer. 
- Control signals travel from CPU to other components and memory or I/O devices can send interrupt signals to CPU.
- Processor also controls this group of control lines.

![[Main Memory and System Bus-20240721131357133.webp]]


---