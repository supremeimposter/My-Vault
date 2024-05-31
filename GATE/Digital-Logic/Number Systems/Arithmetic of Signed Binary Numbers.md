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

$$
\begin{split}
A - B &= 
\end{split}
$$

> [!example] 
> ![[Addition of Signed Binary Numbers-20240531184509116.webp]]
> ![[Addition of Signed Binary Numbers-20240531184406648.webp]]


## 1's Complement System

- The resultant value is also in $1$'s complement representation.
$$
A - B = A + (-B) = A + (\text { 1's complement of } B \;)
$$
- Discard the carry over and add $1$ to the result.

## 2's Complement System

- The resultant value is also in $2$'s complement representation.
$$
A - B = A + (-B) = A + (\text { 2's complement of } B \;)
$$
- Discard the carry over.
---
> [!summary] 



---
