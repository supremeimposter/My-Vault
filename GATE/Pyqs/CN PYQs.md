---
tags:
  - ComputerNetworks
  - GATE/PYQs
---
# CN PYQs
## Subnetting and Supernetting


> [!question] 
> [GATE IT 2006 | Question 70](https://gateoverflow.in/3614/gate-it-2006-question-70)

![[CN PYQs-1787501110726.webp]]



Explantion of the question :

Given is the broadcast IP address of a subnetted class B network i.e. the broadcast address of the given IP is from a subnet of a class B network.

Since it is class B, the first 2 bytes are network ID, so they won't change for a network. The subnet bits have to be borrowed from host bits of class B network.

$$
\underbrace{144\:\:\:\:.\:\:\:\:16}_{\text{network bits of class B}} \:\:\:\: . \:\:\:\: \underbrace{\underbrace{1011 \,\, 1111}_{95} \:\:\:\: . \:\:\:\: \underbrace{1111 \,\, 1111}_{255}}_{\text{borrow subnet bits from here}}
$$
The subnet mask decides how long till the subnet bits are extended i.e. netid + subnet id bits = extended net ID. They are asking for what could be such subnet mask, for the given IP address of a subnetted class B address.


> [!question] 
> [GATE CSE 2007 | Question: 67, ISRO2016-72](https://gateoverflow.in/1265/gate-cse-2007-question-67-isro2016-72)

![[CN PYQs-1782749333580.webp]]

The answer is very debatable

![[CN PYQs-1787407889049.webp|brave ai's answer|836]]


> [!question] 
> [ GATE CSE 2022 | Question: 45](https://gateoverflow.in/371891/gate-cse-2022-question-45)

![[CN PYQs-1783790356194.webp]]

Answer seems do be very controversial.
It has been debated on the video 4a (01:49:15)

They have given certain network addresses with their netmasks and are asking to aggregate together (how much possible) with their respective supernetting masks.



> [!question]  
> [GATE CSE 2006 | Question: 45](https://gateoverflow.in/1821/gate-cse-2006-question-45)

![[CN PYQs-1787423424461.webp]]

![[CN PYQs-1787423841365.webp]]


> [!question] 
> [GATE IT 2008 | Question: 85](https://gateoverflow.in/3409/gate-it-2008-question-85)

![[CN PYQs-1787423506647.webp]]

![[CN PYQs-1787424323120.webp]]

![[CN PYQs-1787423733483.webp]]


> [!question] 
> [ GATE CSE 2022 | Question: 12](https://gateoverflow.in/371924/gate-cse-2022-question-12)

![[CN PYQs-1787499809794.webp]]



![[CN PYQs-1787500729729.webp]]

![[CN PYQs-1787500003350.webp]]

explanation of the [above diagram](https://youtu.be/wE0quzvXDMM?list=PLIPZ2_p3RNHgz_uIqO3iGfZETeqNAyVUH&t=10638)

just count the number of interfaces. In the above diagram, the ethernets are each within their own subnets.

## Error Detection and Correction


> [!question] 
>  [GATE CSE 2021 | Set 1 | Question: 29](https://gateoverflow.in/357422/gate-cse-2021-set-1-question-29)

![[CN PYQs-1787768680143.webp]]



> [!question]
> [GATE CSE 2009 | Question 48](https://gateoverflow.in/1334/gate-cse-2009-question-48)

![[CN PYQs-1786522123213.webp]]



**Brave Ai's answer :** 

The correct condition is that $1+x$ is a factor of $G(x)$.

**Explanation**

Error Detection Principle: In CRC checking, an error is detected if the error polynomial $E(x)$ is not divisible by the generator polynomial $G(x)$.

Odd Errors: An error pattern with an odd number of bit flips results in an error polynomial $E(x)$ that has an odd number of terms.

Mathematical Property: In modulo-2 arithmetic, any polynomial $E(x)$ with an odd number of terms evaluates to $1$ when $x=1$ (i.e., $E(1) = 1$). This means $E(x)$ is not divisible by $(x+1)$ (since $(x+1)$ divides a polynomial if and only if the polynomial evaluates to $0$ at $x=1$).

Conclusion: If $(1+x)$ is a factor of $G(x)$, then $G(x)$ will contain $(x+1)$ as a divisor. Since $E(x)$ (for odd errors) does not contain $(x+1)$ as a divisor, $G(x)$ cannot divide $E(x)$, ensuring the error is detected. 

**Options Analysis**

(A) G(x) contains more than two terms: Incorrect. This is required to detect single-bit errors, not specifically odd-numbered bit errors.

(B) G(x) does not divide $1+x^k$: Incorrect. This condition relates to detecting double-bit errors (bursts of specific length).

(C) $1+x$ is a factor of $G(x)$: Correct. This ensures detection of all odd-numbered bit errors.

(D) G(x) has an odd number of terms: Incorrect. This does not guarantee detection of odd errors; typically, $G(x)$ having an even number of terms (which implies $1+x$ is a factor) is the standard guideline.


[Option B | nice explanation](https://gateoverflow.in/1334/gate-cse-2009-question-48?show=516364#c516364)
![[CN PYQs-1786523992873.webp]]


> [!question] 
>  [ISI2015-PCB-CS-4a](https://gateoverflow.in/47275/isi2015-pcb-cs-4a)

![[CN PYQs-1788022427904.webp]]




## Delays

> [!question] 
> [GATE CSE 2015 | Set 3 | Question: 36](https://gateoverflow.in/8495/gate-cse-2015-set-3-question-36)

![[CN PYQs-1786777725614.webp]]

![[CN PYQs-1786777747233.webp]]



> [!question]  
> [GATE CSE 2005 | Question: 73](https://gateoverflow.in/1396/gate-cse-2005-question-73)

![[CN PYQs-1786851618594.webp]]


[source](https://gateoverflow.in/1396/gate-cse-2005-question-73?show=87458#c87458)
![[CN PYQs-1786851892780.webp]]