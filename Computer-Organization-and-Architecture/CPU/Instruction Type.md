---
pdf: 
module: 2
lecture: "4"
date: 2024-03-23T13:35:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/Instruction
---
# Instruction Type

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

## Data Transfer Instructions


## Data Manipulation Instructions

### Arithmetic Instructions


### Logical Instructions


### Shift Instructions


- The sign bit (MSB) will remain unchanged in the shift instructions.


## Transfer of Control Instructions

- Transfer of Control : update the program counter to execute sequentially or branch.

```merm
flowchart TD
A[Jump/Branch Instructions] --> B[Unconditional\nJump/Branch Instructions]
A --> C[Conditional\nJump/Branch Instructions]
```


> [!NOTE] 
> The semantics of the mnemonics in transfer of control instructions will always be given in the question.


---