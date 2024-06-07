---
pdf: lec-5
module: 3
lecture: "5"
date: 2024-03-04T08:39:00
version:
  - DL-24
last-revision: 
notes-taken: false
tags:
  - DigitalLogic/CombinationalCircuits
---
# Decoder

- A decoder is a combinational circuit that converts the binary information from the $n$ coded input to a maximum of $2^n$ unique outputs.
- The purpose of encoding is to decode. The encoding gets decoded to know the actual object or data
- Decoder detects the presence of a specific combination of bits at the input.
- Any decoder has $n$ inputs and $2^n$ outputs.

## Types of Decoder

| Active High Decoder                                      | Active Low Decoder                                       |
| -------------------------------------------------------- | -------------------------------------------------------- |
| ![[Decoder-20240607142523363.webp]]                      | ![[Decoder-20240607142538038.webp]]                      |
| This simple decoder detects the input combination $0011$ | This simple decoder detects the input combination $0011$ |
| For input $0011$, $x = 1$                                | For input $0011$, $x = 0$                                |
| For every other input combination, $x = 0$               | For every other input combination, $x = 1$               |

```merm
flowchart TD
A[Decoder] --> B[Active High Decoder-AND Decoder]
A --> C[Active Low Decoder-NAND Decoder]
H --> D["`Enable - Active High 
(preferred)`"]
H --> E[Enable - Active Low]
I --> F[Enable - Active High]
I --> G["`Enable - Active Low 
(preferred)`"]
H[For any input, exactly one output is high]
I[For any input, exactly one output is low]
B --> H
C --> I
```

> [!caution] 
> Do not confuse the active high and low encoders with enable input.
> Each type of decoder has active high and active low enable input.

### AND Decoder

In this AND implementation of Decoders, all of the outputs are "one-hot" encoded i.e. out of all the outputs, only one output is $1$.

#### 1 X 2 Decoder
![[Decoder-20240607123144996.webp]]

- When the input binary code $I = 0$, $Y_{0}$ is activated.
- When the input binary code $I = 1$, $Y_{1}$ is activated.
$$
\begin{split}
Y_{0} &= \overline{I} \\
Y_{1} &= I
\end{split}
$$
![[Decoder-20240607124343737.webp]]

#### 2 X 4 Decoder
![[Decoder-20240607123704392.webp]]

- When the input binary code is $00$, then $Y_{0}$ is activated.
- When the input binary code is $01$, then $Y_{1}$ is activated.
- When the input binary code is $10$, then $Y_{2}$ is activated.
- When the input binary code is $11$, then $Y_{3}$ is activated.
$$
\begin{split}
Y_{0} &= \overline{I_{1}}.\overline{I_{0}}\\
Y_{1} &= \overline{I_{1}}.{I_{0}}\\
Y_{2} &= {I_{1}}.\overline{I_{0}}\\
Y_{3} &= {I_{1}}.{I_{0}}
\end{split}
$$

From the above functions, the AND implementation of $2 \times 4$ decoder is,

![[Decoder-20240607125037019.webp]]

**Enable Active-High**

![[Decoder-20240607124157664.webp]]

When $E = 0$, all of the outputs are $0$.

![[Decoder-20240607130021280.webp]]

**Enable Active-Low**

![[Decoder-20240607124255098.webp]]

When $E = 1$, all of the outpus are $0$.

![[Decoder-20240607130233945.webp]]

### NAND Decoder

In this NAND implementation of Decoders, out of all the outputs, only one output is $0$, which is also the selected output.

#### 2 X 4 Decoder
Let's derive NAND implementation from the AND implementation which is more intuitive.

![[Decoder-20240607132037720.webp]]

Only the selected output becomes $0$ for every input combination and the rest are $1$s.

![[Decoder-20240607132316697.webp]]

**Enable - Active High**
When $E = 0$, then all of the outputs are $1$. (Nand decoder is idle)

![[Decoder-20240607134943702.webp]]

**Enable - Active Low**
When $E = 1$, all the outputs are $1$. (Nand decoder is idle)

![[Decoder-20240607135356502.webp]]

> [!summary] 

- The simple idea of a decoder is that it activates an output line.

![[Decoder-20240607175944996.webp]]

---
## Function Realization using Decoder

> [!NOTE]
> Implementation or Realization of a function using a Digital Circuit means there should only be **one** output which is the given function.


> [!header] $f = a.b$

![[Decoder-20240607182110862.webp]]



