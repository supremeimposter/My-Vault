---
pdf: 
module: 
lecture: 
date: 2024-08-08
version:
  - COA-24
last-revision: 2024-08-09T08:56:00
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/Pipeline
  - ComputerOrganizationAndArchitecture/Hazard
---
# Data Hazards in Pipeline

A data hazard is a situation in which the [[Pipeline|pipeline]] is stalled because the data to be operated on are delayed for some reason.

Data hazards depend on the code (program) and pipeline.

## Data Dependency

**Data dependency** is a property of the code (program) only. It is not the property of pipeline.

Data dependency is held between instructions, rather than between registers.



### RAW Data Dependency

It is also called as flow depedency or true dependency.

### WAW Data Dependency

This is also called as Output data dependency.


### WAR Data Dependency

It is also called as anti-dependency.

> Read after Read RAR is not a dependency, hence it is not an hazard.

If there is no dependency between two instructions, then it can be re-ordered.

## Hazardous Data Dependencies

Data dependencies can be a hazard.

> [!question] How to find if a data dependency is an hazard?
> Just do the normal pipeline execution without any stalls and check if there is any problem.


WAW and WAR data dependency never creates any problem (stalls) in single issue pipelines.

Only RAW hazards are possible in single issue pipelines.



---

## Data Hazards


> [!example] 
> ![[Data Hazards in Pipeline-20240809083744485.webp]]

> Do not assume the implementation

![[Data Hazards in Pipeline-20240809083758502.webp]]

3 RAW dependencies out of 4 are hazards.

![[Data Hazards in Pipeline-20240809084118382.webp]]

### Handling Data Hazards



