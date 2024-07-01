---
pdf: lec-09A-09C
module: 5
lecture: 
date: 2024-03-10T18:00:00
version:
  - DL-24
last-revision: 2024-07-01T21:01:00
notes-taken: true
tags:
  - DigitalLogic/SequentialCircuits
  - DigitalLogic/FlipFlop
---
# Flip Flop Conversion

Let $G$ be the available flip flop and $Q$ be its output.
Let $M$ be the desired flip flop.

The input of the available flip flop has to become the input of the desired flip flop.

Now the input to the flip flop $G$ is a function of $M$ and $Q$.
$$
\begin{split}
G &= f\, (M, Q)
\end{split}
$$

![[Flip Flop Conversion-20240310185452981.webp]]
![[Flip Flop Conversion-20240701121348591.webp]]

The truth table of the desired flip flop is matched with the excitation table of the available flip flop to obtained the combinational logic.

## Algorithm for Flip Flop Conversion

1. Construct the block diagram for obtaining flip flop $M$ from flip flop $G$ which contains the combinational logic $G = f\, (M, Q)$ .
2. Construct the truth table of $M$.
3. Construct the excitation table of $G$.
4. To obtain the truth table of the combinational logic, first write out the truth table of $M$ and then write the output of the excitation table accordingly.
5. Draw the k-map of the combinational logic and minimize the expression $G$.

![[Flip Flop Conversion-20240701222918058.webp]]

## D to T Conversion

Draw the block diagram of the required flip flop using available flip flop.

![[Flip Flop Conversion-20240701124212027.webp]]

The truth table of the desired flip flop is matched with the excitation table of the available flip flop to obtain the combinational logic.

![[Flip Flop Conversion-20240701124404638.webp]]
![[Flip Flop Conversion-20240701124231054.webp]]
$$
\begin{split}
D 
&= f\, (T, Q) \\
&= T \oplus Q
\end{split}
$$
![[Flip Flop Conversion-20240701124238921.webp]]

> [!summary] 
> ![[Flip Flop Conversion-20240701131559688.webp]]

> [!header] Variants of $D$ to $T$ flip flop

![[Flip Flop Conversion-20240701130658791.webp]]
![[Flip Flop Conversion-20240701130721740.webp]]
![[Flip Flop Conversion-20240701130820317.webp]]
![[Flip Flop Conversion-20240701130847717.webp]]

## T to D Conversion

![[Flip Flop Conversion-20240701135318736.webp]]

The truth table of D flip flop is matched with the excitation table of T flip flop to obtain the combinational logic.

![[Flip Flop Conversion-20240701135333095.webp]]
![[Flip Flop Conversion-20240701135339456.webp]]
$$
\begin{split}
T 
&= f \, (D, Q) \\
&= D \oplus Q
\end{split}
$$
![[Flip Flop Conversion-20240701135349751.webp]]

> [!summary] 
> ![[Flip Flop Conversion-20240701135819486.webp]]

![[Flip Flop Conversion-20240701135802009.webp]]

## D to JK Conversion

![[Flip Flop Conversion-20240701145745620.webp]]

![[Flip Flop Conversion-20240701150146574.webp]]

![[Flip Flop Conversion-20240701150248213.webp]]

> [!problem] 
> ![[Flip Flop Conversion-20240701161412336.webp]]


> [!youtube] 
>> [Digital Logic: GATE IT 2008 | Question: 37](https://gateoverflow.in/3347/gate-it-2008-question-37)
>
> [GATE IT 2008 Question 37 - JK Flip flop | XY Flipflop | Sequential Circuits | Digital Logic - YouTube](https://www.youtube.com/watch?v=eDyeuTA0yMk)

## JK to D Conversion

![[Flip Flop Conversion-20240701143816806.webp]]

D flip flop does not care about previous outputs.

## SR to T Conversion

![[Flip Flop Conversion-20240701202059741.webp]]
![[Flip Flop Conversion-20240701202111852.webp]]
![[Flip Flop Conversion-20240701202131871.webp]]

## T to SR Conversion

![[Flip Flop Conversion-20240701205215828.webp]]

![[Flip Flop Conversion-20240701205509963.webp]]

![[Flip Flop Conversion-20240701210019085.webp]]

![[Flip Flop Conversion-20240701210038778.webp]]

![[Flip Flop Conversion-20240701210103932.webp]]
![[Flip Flop Conversion-20240701210121482.webp]]

---