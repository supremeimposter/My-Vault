---
pdf: lec-5
module: 3
lecture: "5"
date: 2024-03-04T08:39:00
version:
  - DL-24
last-revision: 2024-06-09T14:19:00
notes-taken: true
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
> Both decoders has active high and active low enable input.

### AND Implementation of Decoder

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

### NAND Implementation of Decoder

In this NAND implementation of Decoders, out of all the outputs, only one output is $0$, which is also the selected output.

#### 2 X 4 Decoder
Let's derive NAND implementation of decoders from the AND implementation which is more intuitive.

![[Decoder-20240607132037720.webp]]

Only the selected output becomes $0$ for every input combination and the rest are $1$'s.

![[Decoder-20240607132316697.webp]]

**Enable - Active High**
When $E = 0$, then all of the outputs are $1$. (Nand decoder is idle)

![[Decoder-20240607134943702.webp]]

**Enable - Active Low**
When $E = 1$, then all of the outputs are $1$. (Nand decoder is idle)

![[Decoder-20240607135356502.webp]]

> [!summary] 

- The simple idea of a decoder is that it activates an output line.

![[Decoder-20240607175944996.webp]]

---
## Function Realization using Decoder
> [!NOTE]
> Implementation or Realization of a function using a Digital Circuit means there should only be **one** output which is the given function.

> [!header] $f(a, b) = a.b$

![[Decoder-20240607182110862.webp]]

The last output line $ab = 1$ iff $a = 1, b = 1$. It is connected to an OR gate to realize the given function $f = a.b$

For every other input combination, the output $f = 0$, since for every other input combination, the last output line $ab$ is not selected.

![[Decoder-20240608091222537.webp]]

![[Decoder-20240608083706782.webp]]

The last output line is connnected to an NAND gate to realize the given function $f = a . b$

![[Decoder-20240608091251573.webp]]

> [!tip] Similar Circuits
>> OR of ANDs is equivalent to NAND of NANDs
> 
> ![[Decoder-20240608085140804.webp]]
> ![[Decoder-20240608085152799.webp]]

> [!header] $f(a, b) = a \oplus b$

![[Decoder-20240608092810783.webp]]

The output of the function $f = a \oplus b = 1$ iff either $a = 0, b = 1$ or $a = 1, b = 0$.

The ExOR function can be written as $f(a, b) = \sum\; (m_{1}, m_{2})$ .

![[Decoder-20240608091426957.webp]]

The NAND implementation can be obtained from AND implementation by selecting the same output lines and connecting them to a NAND gate.

![[Decoder-20240608092750757.webp]]

The output of the function $f = 1$ only when $a = 0, b = 1$ or $a = 1, b = 0$. (This is when the given function is realized).

![[Decoder-20240608092141102.webp]]

> [!header] $f(a, b) = a + b$

The output of the function $f = 1$, when the inputs are,

| a   | b   | f   |
| --- | --- | --- |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 1   |

$$
f(a, b) = \sum\; (m_{1}, m_{2}, m_{3})
$$

![[Decoder-20240608093137503.webp]]

![[Decoder-20240608093157457.webp]]

> [!header] $f = a \rightarrow b$

| $a$ | $b$ | $f = a \rightarrow b$ |
| --- | --- | --------------------- |
| 0   | 0   | 1                     |
| 0   | 1   | 1                     |
| 1   | 0   | 0                     |
| 1   | 1   | 1                     |

$$
\begin{split}
f(a, b) &= a \rightarrow b \\
&= \sum \; (m_{0}, m_{1}, m_{3}) \\
&= \overline{a}. \overline{b} + \overline{a}.b + a.b
\end{split}
$$

The given function $f$ is the logical OR of minterms $0, 1, 3$.

<u>AND Implementation</u>

![[Decoder-20240609095050114.webp]]

![[Decoder-20240609102309179.webp]]

<u>NAND Implementation</u>

![[Decoder-20240609102815674.webp]]

![[Decoder-20240609102918862.webp]]

> [!header] $f(a, b, c) = \sum \;(2, 4, 5, 7)$

$$
\begin{split}
f(a, b, c) &= \sum \; (2, 4, 5, 7) \\
&= \overline{a}.b.\overline{c} + a. \overline{b}. \overline{c} + a.\overline{b}.c + a.b.c
\end{split}
$$

$f = 1$ iff $\overline{a}.b.\overline{c} = 1$ or $a. \overline{b}. \overline{c} = 1$ or $a.\overline{b}.c = 1$ or $a.b.c = 1$

For $f = 1$, any of these minterms has to be $1$, since the decoder activates only one output line for a particular input combination.

<u>AND implementation</u>

![[Decoder-20240608133506992.webp]]

<u>NAND implementation</u>

![[Decoder-20240608133528593.webp]]

> [!summary] 

Implementation (realization) of any funciton of $n$ variables using decoders require either,
- $n \times 2^n$ active high decoder + $1$ OR gate or,
- $n \times 2^n$ active low decoder + $1$ NAND gate
Decoder is not functionally complete by itself, it requires extra hardware.

To convert from AND decoder to NAND decoder, connect a NAND gate to the same output lines as the OR gate. **Do not change the output lines**.

| ![[Decoder-20240608085345886.webp]] | ![[Decoder-20240608085356441.webp]] |
| ----------------------------------- | ------------------------------------ |

---
## Decoder Expansion
> [!NOTE] 
> Decoder Expansion means building larger decoders from smaller decoders.

> [!header] Build a $3 \times 8$ Decoder using $2 \times 4$ Decoders

![[Decoder-20240609124808096.webp]]

The input $I_{3}$ connected to enable inputs activates one of the $2 \times 4$ decoder and the inputs $I_{0}, I_{1}$ function as inputs to each of the $2 \times 4$ decoders.

![[Decoder-20240609125713611.webp]]

Instead of using a NOT gate, its functionality can be replaced by a $1 \times 2$ decoder since,
$$
\begin{split}
Y_{0} &= \overline{I}\\
Y_{1} &= I
\end{split}
$$
in a $1 \times 2$ decoder.

![[Decoder-20240609133157908.webp]]

To avoid using a $1 \times 2$ decoder, a $2 \times 2$ decoder can be used but there will be unused outputs.

![[Decoder-20240609133347475.webp]]

Any of the outputs of the first $2 \times 4$ decoder can be chosen to activate those two decoders on the right by correctly configuring the inputs of the first $2 \times 4$ decoder.

![[Decoder-20240609133408950.webp]]

> [!header] Build a $4 \times 16$ Decoder using $2 \times 4$ Decoders

The $2 \times 4$ decoder on the left is used to select each of the 4 decoders on the right through the inputs $w_{2}, w_{3}$. 
The inputs $w_{0}, w_{1}$ activates one of the output lines in one of the activated decoders on the right.

![[Decoder-20240609122857154.webp]]

> [!header] Build a $5 \times 32$ Decoder using $2 \times 4$ Decoders

![[Decoder-20240609123020398.webp]]

> [!header] Build a $3 \times 8$ Decoder using $1 \times 2$ Decoders

![[Decoder-20240609135941756.webp]]

---
## Building a DEMUX using Decoder

> [!header] Build a $1 \times 4$ DEMUX from a $2 \times 4$ Decoder

![[Decoder-20240609183200970.webp]]

The truth table of a $2 \times 4$ Decoder is as follows,
![[Decoder-20240607124157664.webp]]

The enable input $E$ in the encoder can considered as the input data $I$ in a DEMUX because, 

If the Input data $I = 0$, then anyways all of the output lines are going to be 0 i.e. The data $0$ goes where it has to go through the selected output lines and also every other output lines sends the data $0$ through the non-selected output lines which is a default behaviour of the DEMUX. 

> [!remember] 
The idea of DEMUX is that a particular output line is selected for the incoming data and the rest of the ouput lines receives $0$.

![[Decoder-20240609183709931.webp]]

If the input data $I = 1$ which makes the enable input $E = 1$, then it behaves like a AND decoder and a enable-active-high DEMUX.

![[Multiplexer and Demultiplexer-20240606135708273.webp]]


![[Decoder-20240609182657003.webp]]

![[Decoder-20240609190731548.webp]]

---
## Implementing MUX using Decoder

> [!header] Implement $2 \times 1$ MUX using $1 \times 2$ Decoder

A $2 \times 1$ MUX has one select output line, 2 data input lines and one output line.

![[Multiplexer and Demultiplexer-20240604101632997.webp]]

The function to be implemented is $f = \overline{S} I_{0} + S I_{1}$.

A $1 \times 2$ Decoder has a single input line and two output lines and one enable-input.

![[Decoder-20240609213045628.webp]]
$$
\begin{split}
Y_{0} &= \overline{S} \\
Y_{1} &= S
\end{split}
$$

![[Decoder-20240609213455253.webp]]

$$
\begin{split}
f(S, I_{0}, I_{1}) &= Y_{0}. I_{0} + Y_{1} . I_{1}\\
&= \overline{S} . I_{0} + S . I_{1}
\end{split}
$$

```sheet
| $S$ | $Y_{0}$ | $Y_{1}$ | $f$     |                                                           |
| --- | ------- | ------- | ------- | --------------------------------------------------------- |
| 0   | 1       | 0       | $I_{0}$ | ![[Multiplexer and Demultiplexer-20240604100052176.webp]] |
| 1   | 0       | 1       | $I_{1}$ | ^                                                         |
```

> [!header] Implement a $4 \times 1$ MUX using $2 \times 4$ Decoder

![[Decoder-20240609185940488.webp]]

$$
\begin{split}
f(s_{1}, s_{0}, \;w_{3}, w_{2}, w_{1}, w_{0}) &= y_{0} . w_{0} + y_{1} . w_{1} + y_{2} . w_{2} + y_{3} . w_{3}
\end{split}
$$

A $2 \times 4$ AND decoder has the following truth table,

![[Decoder-20240609190452891.webp]]

$$
\begin{split}
y_{0} &= \overline{s_{1}}.\overline{s_{0}}\\
y_{1} &= \overline{s_{1}}.{s_{0}}\\
y_{2} &= {s_{1}}.\overline{s_{0}}\\
y_{3} &= {s_{1}}.{w_{0}}
\end{split}
$$
$$
\begin{split}
f(s_{1}, s_{0}, \;w_{3}, w_{2}, w_{1}, w_{0}) &= \overline{s_{1}}.\overline{s_{0}} . w_{0} + 
\overline{s_{1}}.{s_{0}} . w_{1} + 
{s_{1}}.\overline{s_{0}} . w_{2} + 
{s_{1}}.{w_{0}} . w_{3}
\end{split}
$$

Now the function $f$ is the function of a $4 \times 1$ MUX.

```sheet
| $s_{1}$ | $s_{0}$ | $f$     |                                     |
| ------- | ------- | ------- | ----------------------------------- |
| 0       | 0       | $w_{0}$ | ![[Decoder-20240609192206905.webp]] |
| 0       | 1       | $w_{1}$ | ^                                   |
| 1       | 0       | $w_{2}$ | ^                                   |
| 1       | 1       | $w_{3}$ | ^                                   |
```


> [!observation] 
> A decoder can pose as DEMUX, whereas a decoder is used to implement a MUX.

---