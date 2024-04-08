---
pdf: lec-39
date: 2023-09-25-18:23
version: DM-2024
---

- Arguments in FOL is similar to [[Arguments and Inference#Argument|arguments in Propositional Logic]].
- An argument is valid if and only if all the premises are true, then the conclusion must be true. The argument validity is same as [[Arguments and Inference#Validity of Arguments|propositional logic]].
- Consider all the premises to be true and then try to make the conclusion false. In this method, more context about the expressions is obtained from the premises.
- If the conclusion is made false, then the argument in invalid or else the argument is valid.

> [!note] For FOL, approach 1 is better.

---
### Standard Rules of Inference for Quantified Statements

> [!important] particular or some VS arbitrary
> - some or particular is some element intentionally noted.
> - arbitrary is picking an element at random with no intention.

![[Pasted image 20230925180426.png]]
- For `Universal Generalization`, if "some" element P(c) is true, then we cannot say about $\forall x\; P(x)$. It is invalid.
- `Existential Instantiation` is invalid if c is not mentioned as "some" element. If c is an "arbitrary" element, then also it is not valid.

> [!brain] Remember
> - "some" is for existential generalization
> - "arbitrary" is for universal generalization
> - "instantiation" means are quantifiers are on the top (they are first told as true)
> - "generalization" means on bottom (since things are generalized at the end)

- We don't know anything about the **"arbitrary element"** other than the information that it is from the domain. Do not make any more assumptions of the arbitrary element. Same goes for **"some element"**.

---
### Some valid arguments

- This is similar to `modus ponens`
![[Pasted image 20230926165250.png]]

- This is similar to `modus tollens`
![[Pasted image 20230926165309.png]]

- This is invalid. In this case the premises are true because of `Existential instantiation`, but it does not mean Q(a) can b true. Q(a) can also be false.
![[Pasted image 20230926165431.png]]

- These both arguments are valid. First argument is `modus ponens` and second argument is `Existential Generalization`.
![[Pasted image 20230926165755.png]]

---
### Examples

![[Pasted image 20230926171628.png]]

![[Pasted image 20230926171603.png]]

> [!file] Look at all the examples from Pg. No. 55

---
