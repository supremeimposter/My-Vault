
## Propositional Variables

- A propositional variables holds an atomic proposition and evaluates to either true or false.
- There are only two truth values : True, False
```ad-note
Atomic propositions are represented by Propositional variables but compound propositions are not.
```
## Propositional Formula

- Any **well formed propositions** are propositional formulae.
- Every propositional variable (Atomic proposition) is a propositional formula.
- True $\top$ and False $\bot$ are propositional formulae.
- Propositional expressions (Compound proposition) is a propositional formula.
- A propositional variable has all the truth value combinations, whereas a propositional formula is not guaranteed to have all the truth value combinations.

```ad-help
In algebra $x + y^2 = xy$
	- $x, y$ is a variable.
	- $x*y$ is NOT a variable, it is an expression.
```

### Examples

- Propositional formulae
> P, $\neg$ P, P $\wedge$ Q, P $\vee$ Q, etc.

- Not a propositional formulae
> P $\neg$, P Q $\wedge$ , $\vee$ Q, etc.

```ad-question
If F is a propositional formulae, then you are NOT sure whether F is a propositional variable or propositional expression i.e. atomic or compound proposition.
```

### Truth value combination
- For propositional variables P, Q, all the truth value combinations are possible.

| P   | Q   |
|:--- |:--- |
| T   | T   |
| F   | F   |

- For a propositional formulae $\alpha$, all the truth value combinations might not be possible.


1. If P and Q are **propositional variables**, then
	1. $P \rightarrow$ Q is NEVER equivalent to $Q \rightarrow P$.
	2. $P \rightarrow Q$ is ALWAYS equivalent to $\neg Q \rightarrow \neg P$.

2. If $\alpha$ and $\beta$ are **propositional formulae**, then
	1. $\alpha \rightarrow \beta$ is ALWAYS equivalent to $\neg \beta \rightarrow \neg \alpha$.
	2. $\alpha \rightarrow \beta$ MIGHT be equivalent to $\beta \rightarrow \alpha$.

- Contra-positive is always equivalent to the implication (propositional formulae)
![[Pasted image 20230913164906.png]]

- Case where the converse is equivalent to its implication among propositional formulae
$$
\alpha = P \wedge \neg P
$$
$$
\beta = Q \wedge \neg Q
$$
![[Pasted image 20230913165156.png]]
- If $\alpha \rightarrow \beta \equiv \beta \rightarrow \alpha$ , then $\alpha \equiv \beta$ .


```ad-summary
- Every propositional variable is a propositional formula but not every propositional formula is a propositional variable.
```