---
pdf: 
module: 4
lecture: "5"
date: 2024-08-09
version:
  - COA-24
last-revision: 2024-08-11T15:31:00
notes-taken: true
tags:
  - ComputerOrganizationAndArchitecture/Pipeline
  - ComputerOrganizationAndArchitecture/Hazard
---
# Structural Hazards in Pipeline

A structural hazard occurs when two (or more) instructions that are already in the pipeline need the same resource in the same cycle. It is also called as a **Resource Hazard**.

Because of structural hazard, instructions must be executed in serial rather than parallel for a portion of the pipeline.

![[Structural Hazards in Pipeline-20240811151347795.webp]]

> [!example] 
>> [!problem] 
>> ![[Structural Hazards in Pipeline-20240810185202863.webp]]
> 
> ![[Structural Hazards in Pipeline-20240810185302217.webp]]

## Handling Structural Hazards

> Structural Hazards are 100% curable.

![[Structural Hazards in Pipeline-20240811151235193.webp]]

![[Structural Hazards in Pipeline-20240811151258838.webp]]

![[Structural Hazards in Pipeline-20240811151304558.webp]]

---