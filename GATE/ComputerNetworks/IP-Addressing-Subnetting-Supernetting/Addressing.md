---
pdf: 
module: 1
lecture: "1"
date: 2024-04-04T12:44:00
version:
  - CN-24
last-revision: 
notes-taken: false
tags:
  - ComputerNetworks/Addressing
---
# Addressing

![[Addressing-20240405214426141.webp|Three different notations in IPV4 addressing]]


![[Addressing-20240405214535780.webp|Hierarchy in Addressing]]


## Classful Addressing
- In classful addressing, the address space is divided into 5 classes.
- In classful addressing, the network id (prefix) is implicit.

![[Addressing-20240405215520576.webp|Occupation of Address space in Classful Addressing]]

- The reason that classful addressing has become obsolete is *address depletion*.

## Classless Addressing

- Since there is no class, network id (prefix) is not implicit.
- In classless addressing, the network id (prefix) has to be specified explicitly.
- In classless addressing, the whole address space is divided into variable length blocks.
- The prefix length is variable in classless addressing.
- The slash notation is referred to as CIDR (Classless Inter Domain Routing)
![[Addressing-20240405231755955.webp]]

- If a network device has a mask of $k$, then 
- The first IP address cannot be assigned to any host, it is for network address.
- The last IP address is reserved for the broadcast address.
- Number of possible hosts = $2^k - 2$
- Number of IP addresses = $2^k$

![[Addressing-20240406074900614.webp]]

- If $n$ is the length of the bits in prefix, then there are $2^n$ addresses in the block.

## Address Mask
- Another way to find the first and last address in a block is to use the address mask.
- Address mask is a 32-bit number in which the first $n$ bits are 1's and the rest are $(32 - n)$ bits are 0's.
- An address mask is a complement of $(2^{32 - n} - 1)$.

1. Number of addresses in the block = NOT (mask) + 1
2. First address in the block = (any address in the block) AND (mask)
3. Last address in the block = (any address in the block) OR (NOT(mask))

![[Addressing-20240406093544191.webp]]

## Block Allocation


