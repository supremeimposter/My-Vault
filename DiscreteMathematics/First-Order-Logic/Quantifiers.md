- There are 2 standard quantifiers 
	- $\forall \equiv$ Universal Quantifier $\equiv$ for all
	- $\exists \equiv$ Existential Quantifier $\equiv$ for some $\equiv$ for at least once $\equiv$ there is 
- Many number of quantifiers can be formed using the above two standard quantifiers.
- Let D be the domain and it consists of $x_1, \; x_2, \; x_3,\; \ldots \; x_n$
$$
\forall x \in D, P(x) \equiv P(x_1) \land P(x_2) \land P(x_3) \land \ldots \land P(x_n) 
$$
$$
\exists x \in D, P(x) \equiv P(x_1) \lor P(x_2) \lor P(x_3) \lor \ldots \land P(x_n) 
$$
- The quantifiers can also be applied to compound propositions.
	- Let $\alpha(x)  = P(x) \rightarrow Q(x)$
	- $\forall x \; (P(x) \rightarrow Q(x)) \equiv \forall x \; \alpha(x)$

---

> [!example] Examples for compound propositions
> > [!question]- $\forall x \;(\;smiling(x) \rightarrow wearhat(x)\;)$
> > - for every x, "if x is smiling then, x is wearing a hat" $\equiv$ "every smiling person is wearing a hat".
> 
> > [!question]- $\exists x \; (\; smiling(x) \rightarrow wearhat(x) \;)$
> > - "There is someone x, if x is smiling then, x is wearing a hat".

```ad-attention
>[!example]- $\exists x \; (\;drinker(x) \rightarrow \forall y \; drinker(y)\;)$
>> - "there is someone such that if he is a drinker, then everyone is drinker"
>> - $\exists x (D(x) \rightarrow \forall y D(y))$
>> - the above statement is true, it can be proved by making the RHS false and try to make the LHS true. 
```

```ad-question
D(x) = {2, 4, 9}

P(x) = "x is prime"
Q(x) = "x is even"
```

$$
\begin{array}{}
\forall x P(x) = \text{false}\\
\forall x Q(x) = \text{false}\\
\exists x P(x) = \text{true}\\\\
\forall x (P(x) \rightarrow Q(x)) = true \\
\exists x (P(x) \rightarrow Q(x)) = true
\end{array}
$$

```ad-question
S = $\forall x (2 + 2 = 4)$
S = true for any domain
---
S = $\forall x (2 + 2 = 5)$
S = false for any domain
---
S = $\exists x (2 + 2 = 4)$
S = true for any domain
---
S = $\exists x (2 + 2 = 5)$
S = false for any domain
```

----
## Logic to English translation

$$
\begin{array}{}
\text{Let } P(x) \text{ be a predicate and the domain be D}\\\\
\forall x P(x) \equiv \text{ for every x, } P(x) \text{ is true}\\
\exists x P(x) \equiv \text{ there exists some x for which } P(x) \text{ is true}\\
\end{array}
$$

| Statement                | When True?                              | When False?                             |
| ------------------------ | --------------------------------------- | --------------------------------------- |
| $\forall x P(x)$         | for every element, P(x) is true         | for at least one element, P(x) is false |
| $\exists x P(x)$         | for at least one element P(x) is true   | for every element x, P(x) is false      |
| $\forall x \;\neg P(x)$  | for every element, P(x) is false        | for at least one element, P(x) is true  |
| $\exists x \; \neg P(x)$ | for at least one element, P(x) is false | for every element, P(x) is true                                        |

$$
\begin{array}{}
\exists x \neg P(x)\\ 
\text{ there exists some x, for which } \neg P(x) \text{ is true.} \\ \text{ there exists some x, for which } P(x) \text{ is false.}\\
\text{ It is not true that for every x, } P(x) \text{ is true.}\\
\neg \forall x P(x)\\
\neg \forall x P(x) \equiv \exists x \;P(x)
\end{array}
$$
---
$$
\begin{array}{}
\forall x \neg P(x)\\
\text{for all x, } \neg P(x) \text{ is true.} \\
\text{for all x, } P(x) \text{ is false.} \\
\text{it is false that there is some x such that } P(x) \text{ is true.}\\
\neg \exists x P(x)\\
\neg \exists x P(x) \equiv \forall x \neg P(x)
\end{array}
$$
---
```ad-question
Suppose P(x) is the predicate "x + 2 = 2x", and the universe of discource for x is the set {1, 2, 3}. 
```

1. $\forall x P(x) =$ false. Counter examples are 1 and 3.
2. $\exists x P(x) =$ true. Witness is 2.
3. $\forall x\; \neg P(x) =$ false. Counter example is 2.
4. $\exists x \; \neg P(x) =$ true. Witness are 1 and 3.
5. $\neg \exists x P(x) =$ false.
6. $\neg \forall x P(x) =$ true.

---
```ad-example
![[Pasted image 20230917075352.png]]
![[Pasted image 20230917075408.png]]
![[Pasted image 20230917075419.png]]
```

--- 
## Useful Intuitions
1. Universally-quantified statements are true unless there's a counter example.
2. Existentially-quantified statements are false unless there's a witness.

### What an empty domain does?
When the domain is empty, then 
1. $\forall x P(x)$ is vacuously true as there are no counter example.
2. $\exists x P(x)$ is always false as there are no witness.


---

## Precedence of Quantifiers

```ad-caution
This is just a convention and not all the authors use it.
```

- Quantifiers have higher precedence than all the logical operators.
- To avoid ambiguity, always use proper paranthesis.

---
