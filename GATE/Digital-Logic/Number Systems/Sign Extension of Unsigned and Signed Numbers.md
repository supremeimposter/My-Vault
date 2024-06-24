---
pdf: lec-6
module: 2
lecture: "6"
date: 2024-02-27T10:32:00
version:
  - DL-24
last-revision: 2024-06-24T11:54:00
notes-taken: true
tags:
  - DigitalLogic/NumberSystem
---
# Sign Extension

When we need to copy a data of smaller data type to a larger data type, we need to do sign extension.

![[Sign Extension of Unsigned and Signed Numbers-20240602110817549.webp]]
## Unsigned Numbers

Since all the unsigned numbers are only positive numbers, 0s can be added infront of the bits.

![[Sign Extension of Unsigned and Signed Numbers-20240602111046068.webp]]

![[Sign Extension of Unsigned and Signed Numbers-20240602111107886.webp|$N=13$ in different bit sizes]]

## Signed Numbers

### Signed Magnitude Representation

Since the magnitude in the signed magnitude representation is unsigned, only the most significant bit is assigned as the sign bit in case of extension. 0s as added infront of the magnitude.

![[Sign Extension of Unsigned and Signed Numbers-20240602111525778.webp]]

For positive numbers,
![[Sign Extension of Unsigned and Signed Numbers-20240602111817373.webp]]

For negative numbers,
![[Sign Extension of Unsigned and Signed Numbers-20240602111725184.webp]]

### 1's Complement Representation

The most significant bits are copied to every additional bit to retain the original value in 1's complement representation.

For positive numbers,
![[Sign Extension of Unsigned and Signed Numbers-20240602113010438.webp]]
![[Sign Extension of Unsigned and Signed Numbers-20240602113301405.webp]]

For negative numbers,
![[Sign Extension of Unsigned and Signed Numbers-20240602113115833.webp]]
![[Sign Extension of Unsigned and Signed Numbers-20240602113319562.webp]]


![[Sign Extension of Unsigned and Signed Numbers-20240602114719358.webp]]

### 2's Complement Representation

Similar to the extension in 1's complement representation, the most significant bit is copied into the additional bits.

For positive numbers,
![[Sign Extension of Unsigned and Signed Numbers-20240602114013838.webp]]

For negative numbers,
![[Sign Extension of Unsigned and Signed Numbers-20240602114032129.webp]]
![[Sign Extension of Unsigned and Signed Numbers-20240602114042582.webp]]


![[Sign Extension of Unsigned and Signed Numbers-20240602114228745.webp]]

---
> [!summary] 

In case of positive numbers, all of the representations (both signed and unsigned) have the same way of extension.

In case of 1's complement and 2's complement, extension are both the same for both positive and negative numbers.

---