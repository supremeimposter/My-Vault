---
pdf: 
module: 1
lecture: 
date: 2024-03-19T09:36:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/SystemBus
---
# System Bus

```dot
digraph G {
	label = "\nClassfication of System Bus based on the type of \nInformation they carry";
	labelloc = "t";
	
	a[label = "System Bus" shape="box" style="filled" color="lightgreen"];
	b[label = "Address Bus"];
	c[label = "Control Bus"];
	d[label = "Data Bus"];
	a -> b;
	a -> c;
	a -> d;
}
```



````col
```col-md
flexGrow=1
===
![[System Bus-20240319112721015.webp]]
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
Partially Bi-directional
```
````

