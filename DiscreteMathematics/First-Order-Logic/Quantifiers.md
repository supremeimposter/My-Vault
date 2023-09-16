- There are 2 standard quantifiers 
	- $\forall \equiv$ Universal Quantifier
	- $\exists \equiv$ Existential Quantifier
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
	- $\forall x (P(x) \rightarrow Q(x)) \equiv \forall x \alpha(x)$

> [!example] Examples for compound propositions
> > [!question]- $\forall x \;(\;smiling(x) \rightarrow wearhat(x)\;)$
> > - for every x, "if x is smiling then, x is wearing a hat" $\equiv$ "every smiling person is wearing a hat".
> 
> > [!question]- $\exists x \; (\;drinker(x) \rightarrow \forall y \; drinker(y)\;)$
> > - "there is someone such that if he is a drinker, then everyone is drinker"


$\exists x \; (\;drinker(x) \rightarrow \forall y \; drinker(y)\;)$
> > - "there is someone such that if he is a drinker, then everyone is drinker"

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
