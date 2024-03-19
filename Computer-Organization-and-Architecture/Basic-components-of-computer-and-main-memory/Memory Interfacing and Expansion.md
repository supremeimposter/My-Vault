---
pdf: 
module: 1
lecture: 
date: 2024-03-19T12:17:00
version:
  - COA-24
last-revision: 
notes-taken: false
tags:
  - ComputerOrganizationAndArchitecture/Memory
  - ComputerOrganizationAndArchitecture/SystemBus
---
# Memory Organization

- Every memory chip has 3 active-low inputs 
	1. Chip Select
	2. Read-Enable or Output-Enable
	3. Write-Enable
- These inputs are *control lines* connected to the memory chip.

> [!NOTE] 
> Questions such as CS, RE, WE as active-high inputs can be asked in GATE.
# Memory Expansion

- Larger memories can be built by expansion.
	- Horizontal expansion to increase the word size.
	- Vertical expansion to increase the number of words.

```dot
digraph G{
	label = "Ways to expand memory\n\n";
	labelloc = "t";

	a [label = "Memory Expansion" shape="box" style="filled" color = "cyan"];
	b [label = "Horizontal expansion"];
	c [label = "Vertical expansion"];
	d [label = "increase the number of bits\nper address location" shape="plaintext"];
	e [label = "increase the number of \naddress location" shape="plaintext"];

	a -> b;
	a -> c;
	b -> d [color = green, style=dotted penwidth=3.0];
	c -> e [color = green, style=dotted penwidth=3.0];
}
```

## Horizontal Memory Expansion


## Vertical Memory Expansion

- **Memory Interleaving** is used to increase the number of address locations.

```dot
digraph G {
	head [label = "Memory Interleaving" style="filled" color="lightgreen"];
	ho [label = "High Order Memory\nInterleaving" shape="box"];
	lo [label = "Low Order Memory\nInterleaving" shape="box"];

	head -> ho;
	head -> lo;
}
```


### High Order Memory Interleaving
- In high order memory interleaving, within a memory module (memory chip), the addresses are consecutive.
- A chip is selected and a address is located in that memory chip.

### Low Order Memory Interleaving
- In low order memory interleaving, across the memory modules (memory chip), the addresses are consecutive.


> [!timer] 01:30:29


