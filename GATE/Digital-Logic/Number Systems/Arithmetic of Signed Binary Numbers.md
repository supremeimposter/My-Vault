---
pdf: 
module: 2
lecture: "4"
date: 2024-02-26T12:05:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/NumberSystem
---
# Arithmetic of Signed Binary Numbers

## Signed Magnitue System

The addition of two signed binary numbers follows the rules of ordinary arithmetic.

- The sign of the resultant will come from the number of larger magnitude.
- Just add the magnitude.
- If the sign bits are different, then subtraction has to be performed. 
- If the sign bits are same, then addition has to be performed.

Both the inputs and the outputs are both in signed magnitude system.

> [!example] 
> ![[Addition of Signed Binary Numbers-20240531184509116.webp]]
> ![[Addition of Signed Binary Numbers-20240531184406648.webp]]

The cost is too much in signed magnitude system as, 
- The sign bits has to be compared 
- The magnitude bits (n-1) has to be compared
- If the signs are same, then adder circuit has to be used
- If the signs are different, then the subtractor circuit has to be used.
So, it is not used in computer systems.


> [!NOTE] 
> For addition, the signed-complement system does not require any comparison or subtraction. Hence they are used in computer systems.

## 1's Complement System

- The operand values and the resultant value are also in $1$'s complement representation.
$$
A - B = A + (-B) = A + (\text { 1's complement of } B \;)
$$
- Discard the carry over and add $1$ to the result.

## 2's Complement System

- The operands values and the resultant value are also in $2$'s complement representation.
$$
A - B = A + (-B) = A + (\text { 2's complement of } B \;)
$$
- Discard the carry over of the signed bit and the result is automatically in 2's complement representation.

> [!example] 
> ![[Arithmetic of Signed Binary Numbers-20240531195232273.webp]]
> ![[Arithmetic of Signed Binary Numbers-20240531222844535.webp]]
> ![[Arithmetic of Signed Binary Numbers-20240531223407961.webp]]

---
> [!summary] 



---
