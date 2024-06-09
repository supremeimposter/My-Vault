---
pdf: lec-2F-4D
module: 3
lecture: "4"
date: 2024-03-03T20:44:00
version:
  - DL-24
last-revision: 2024-06-06T20:33:00
notes-taken: true
tags:
  - DigitalLogic/CombinationalCircuits
---
# Encoder
> [!analogy] 
> Encoding is like giving a code to each people waiting at the door.

An encoder assigns a code for the data on each of the input line.
$2^n$ objects is mapped against $n$ codes uniquely.
Each input of the encoder gets a unique encoding because of Encoder.

There are several types of Encoder:
1. Binary Encoder
2. Priority Encoder

## Binary Encoder

The inputs to the binary encoder are always one-hot encoded i.e. allows only one input to be $1$ at a time. 

![[Encoder-20240606183838049.webp]]

> [!definition] "One-hot" encoding
> one-hot encoding refers to a binary code in which only one bit is high(1).
> 
> | Decimal | Binary | Unary    | One-hot  |
| ------- | ------ | -------- | -------- |
| 0       | 000    | 00000000 | 00000001 |
| 1       | 001    | 00000001 | 00000010 |
| 2       | 010    | 00000011 | 00000100 |
| 3       | 011    | 00000111 | 00001000 |
| 4       | 100    | 00001111 | 00010000 |
| 5       | 101    | 00011111 | 00100000 |
| 6       | 110    | 00111111 | 01000000 |
| 7       | 111    | 01111111 | 10000000 |


### 2 X 1 Binary Encoder

![[Encoder-20240609225806541.webp]]
$$
\begin{split}
Y &= \overline{I_{0}} . I_{1}
\end{split}
$$

---
### 4 X 2 Binary Encoder

![[Encoder-20240606180529347.webp]]

Consider an example in which there are 4 objects $\{A, B, C, D\}$ which is ordered from $0$ to $3$,

| ![[Encoder-20240606174733346.webp]]                      | ![[Encoder-20240606174744739.webp]]                      |
| -------------------------------------------------------- | -------------------------------------------------------- |
| $C$ which is in the position $2$ is given the code $10$. | $D$ which is in the position $3$ is given the code $11$. |

![[Encoder-20240606180857156.webp]]

There are 16 possible input combinations in $2^4$, but there are only $4$ input combinations here in the above table. 
Do not care about the remaining input combinations as they never occur and the output of them are don't cares, since binary encoder allows only one input to be $1$ at a time i.e. inputs are always "one-hot" encoded.

![[Encoder-20240609230450473.webp]]

K-map of $Y_{1}$ is,

![[Encoder-20240606183129811.webp]]
$$
\begin{split}
Y_{1}(I_{3}, I_{2}, I_{1}, I_{0}) 
&= I_{2} + I_{3} = \overline{I_{0}} . \overline{I_{1}}
\end{split}
$$

K-map of $Y_{0}$ is,

![[Encoder-20240606183413080.webp]]
$$
\begin{split}
Y_{0}(I_{3}, I_{2}, I_{1}, I_{0}) 
&= I_{1} + I_{3} = \overline{I_{0}} . \overline{I_{2}}
\end{split}
$$

The circuit diagram for the given $4 \times 2$ Binary Encoder is,

![[Encoder-20240606181344005.webp]]

### 8 X 3 Binary Encoder

This is an octal to binary encoder, for example, $(4)_{8} = (010)_{2}$

![[Encoder-20240606185639558.webp]]

![[Encoder-20240606185616757.webp]]

---
## Priority Encoder

In Priority Encoder, the encoding is based on priority of the inputs.

By default, $w_{0}$ is considered as the lowest priority input and $w_{n-1}$ is considered as the highest priority input in Priority encoder.

> [!example] 
>> Encoding has been given to keyboard, though mouse also has the input `1`. Keyboard at input $w_{2}$ is given the encoding $10$ based on higher priority.
>
> ![[Encoder-20240606192734399.webp]]

Priority is given to the one input which has the most priority among the inputs that are 1, the inputs that are of lower priority that are 1 are don't cares.

> [!analogy] 
>> At a given time, there can be devices that want CPUs attention, but only the requests of those devices of higher priority are accepted.
>> At that instant, the lower priority devices' requests are not cared by the CPU.
>
> ![[Encoder-20240606192243730.webp]]
> ![[Encoder-20240606192546759.webp]]

The inputs are not always "one-hot" encoded.

There is an additional output in a $2^n \times n$ encoder, which indicates that someone needs attention i.e. there is at least one input that is 1.

![[Encoder-20240606193501603.webp]]

- If $Z = 0$, then all of the inputs are `0`.
- If $Z = 1$, there is at least one input that is `1`.
$$Z = w_{3} + w_{2} + w_{1} + w_{0}$$
> [!caution] 
> $Z$ is not Enable input, it is a special operation specific to Priority Encoders.

For a $4 \times 2$ priority encoder,

![[Encoder-20240606195424791.webp]]

The rest of the inputs combinations are don't cares.

![[Encoder-20240606195555456.webp]]

| K-map for $y_{1}$                   | K-map for $y_{0}$                   | K-map for $z$                       |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| ![[Encoder-20240606195912303.webp]] | ![[Encoder-20240606195921108.webp]] | ![[Encoder-20240606195930922.webp]] |

The circuit for a $4 \times 2$ Priority encoder is,

![[Encoder-20240606200029856.webp]]

---