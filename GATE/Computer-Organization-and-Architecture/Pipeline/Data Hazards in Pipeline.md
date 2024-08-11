---
pdf: 
module: 
lecture: 
date: 2024-08-08
version:
  - COA-24
last-revision: 2024-08-11T08:56:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/Pipeline
  - ComputerOrganizationAndArchitecture/Hazard
---
# Data Hazards in Pipeline

A data hazard is a condition in which either the source or destination operands of an instruction are not available at the expected time in the pipeline. As a result, some operations has to be delayed and the pipeline stalls.

Data hazards depend on the code (program) and pipeline.

## Data Dependency

**Data dependency** is a property of the code (program) only. It is not the property of pipeline.

Data dependency is held between different instructions, and not held between registers.

If there is a data dependency between two instructions, then they can never be re-ordered.

```merm
flowchart TD
A[Data Dependency] --> B[True Dependency]
A --> C[False/Name Dependency]
B --> D[RAW Data\nDependency]
C --> E[WAW Data\nDependency]
C --> F[WAR Data\nDependency]
```

### RAW Data Dependency

A dependency exists between instructions $i$ and $j$ if $j$ reads the result produced by $i$, and there is no instruction $k$ which occurs between $i$ and $j$ and that produces the same result as $i$.

![[Data Hazards in Pipeline-20240810162407313.webp]]

It is also called as flow depedency or true dependency.

![[Data Hazards in Pipeline-20240810161424494.webp]]

### WAW Data Dependency

![[Data Hazards in Pipeline-20240810162455405.webp]]

No instruction writes to $r$ in between instructions $i$ and $j$.

This is also called as Output data dependency.

### WAR Data Dependency

![[Data Hazards in Pipeline-20240810162536981.webp]]

No instruction writes to $r$ in between instructions $i$ and $j$.

It is also called as anti-dependency.

![[Data Hazards in Pipeline-20240810163331670.webp]]

> [!attention] 
> Read after Read RAR is not a dependency, hence it is not an hazard.

If there is no dependency between two instructions, then they can be re-ordered.

> [!example] 
>> [!problem] 
>> ![[Data Hazards in Pipeline-20240810164017890.webp]]
> 
> ![[Data Hazards in Pipeline-20240810164029830.webp]]

> [!example] 
>> [!problem] 
>> ![[Data Hazards in Pipeline-20240810164207361.webp]]
>
> ![[Data Hazards in Pipeline-20240810165042638.webp]]

> [!example] 
> ![[Data Hazards in Pipeline-20240810230524444.webp]]

## Hazardous Data Dependencies

Data dependencies can be a hazard i.e. Data dependencies can cause stalls in a pipeline.

> [!note] Difference between a dependency and a hazard
> A hazard is created when there is a dependency between instructions and they are close enough that the overlap caused by pipelining (or reordering) would change the order of access to the dependent operand.

WAW and WAR data dependency never create any problem (stalls) in single issue in-order pipelines.

![[Data Hazards in Pipeline-20240810191856615.webp]]
![[Data Hazards in Pipeline-20240810191908852.webp]]

Only RAW hazards are possible in single issue in-order pipelines. Also not all RAW data dependencies are hazards in any pipeline.

WAW and WAR data hazards are possible in out-of-order pipelines (super-scalar pipelines), but they can be completely eliminated algorithmically using register renaming.

> [!question] How to find if a data dependency is an hazard?
> Just do the normal pipeline execution without any stalls and check if there is any problem.

> [!example] 
>> [!problem] 
>> ![[Data Hazards in Pipeline-20240809083744485.webp]]
> 
> > Do not assume the implementation
> 
> ![[Data Hazards in Pipeline-20240809083758502.webp]]
> 
>> Draw the normal pipeline execution diagram
> 
> ![[Data Hazards in Pipeline-20240809084118382.webp]]
> 
> 3 RAW dependencies out of 4 are hazards.

> [!example] 
>> [!problem] 
>> ![[Data Hazards in Pipeline-20240810165839546.webp]]
> 
> ![[Data Hazards in Pipeline-20240810165858522.webp]]
> 
>> If the implementation is not split phase
>  
> ![[Data Hazards in Pipeline-20240810170247915.webp]]

> [!example] 
>> [!problem] 
>> ![[Data Hazards in Pipeline-20240810190559423.webp]]
> 
> ![[Data Hazards in Pipeline-20240810190617851.webp]]
> ![[Data Hazards in Pipeline-20240810190725568.webp]]

> [!observation] 

In a MIPS pipeline, a RAW dependency between two instructions where there are at least 3 instructions in between, never becomes an hazard.

![[Data Hazards in Pipeline-20240810171036077.webp]]

## Handling Data Hazards

To obtain the correct execution of pipeline, we need to handle hazards.

```merm
flowchart
A[Handle Data hazards] --> B[Stall]
A --> C[Forwarding]
```

There are two ways to handle data hazards,
1. Stall (never make a mistake and wait until the correct data)
2. Forwarding (proceed with mistake but correct it later)

Sometimes a combination of both stall and forwarding can be used to handle data hazards.

> [!tip] 
> RAW data dependency is not 100% resolvable.

### Stall

Stall can be achieved by either hardware or software (compiler). 

Hardware stalls instruction decode stage until the operand is obtained.

Compiler inserts `NOP` instructions as many as stalls required in the pipeline i.e. number of `NOP` instructions = number of stalls in the pipeline.

Compiler can attempt to re-order instructions to perform useful tasks in NOP slots and thereby increasing performance.

> [!example] 
> ![[Data Hazards in Pipeline-20240810140842698.webp]]
> ![[Data Hazards in Pipeline-20240810140913042.webp]]

> [!example] 
> There is a cache miss for the second instruction. It takes 3 more cycles to fetch the instruction.
> 
> ![[Structural Hazards in Pipeline-20240811180202623.webp]]
> 
> Once a bubble is created as a result of a delay in one of the pipeline stages, a bubble moves downstream until it reaches it reaches the last stage.
> 
> ![[Structural Hazards in Pipeline-20240811180217752.webp]]

### Forwarding

If the required *operand* is available at some place, then bypass/forward it to the required stage in the pipeline. Required operand can be forwarded from any stage to any other stage i.e. full forwarding.

![[Data Hazards in Pipeline-20240810224049635.webp]]

> [!example]
>> [!problem]  
>> ![[Data Hazards in Pipeline-20240810195601375.webp]]
>
> ![[Data Hazards in Pipeline-20240810201239289.webp]]

> [!example] 
>> [!problem] 
>> ![[Data Hazards in Pipeline-20240810201434791.webp]]
> 
>> Handling hazard using forwarding
>
> ![[Data Hazards in Pipeline-20240810201633248.webp]]
> 
>> Handling hazard using stall with split phase implementation
>
> ![[Data Hazards in Pipeline-20240810201644842.webp]]
>
>> Using software (compiler), two cycle delay can be introduced between instructions $I_{1}$ and $I_{2}$ using NOP (No operation) instruction.
>
> ![[Data Hazards in Pipeline-20240810214210961.webp]]
> 
> ![[Data Hazards in Pipeline-20240810222356986.webp]]

---