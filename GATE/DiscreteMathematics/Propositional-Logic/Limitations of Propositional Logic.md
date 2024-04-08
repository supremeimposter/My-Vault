- Every variable evaluates to either True or False.
- It deals only with facts or propositions.
- It has very limited expressive power.

```ad-example
All men are mortal. Socrates is a man.
Hence, socrates is mortal.
```
- The above example is logically valid.

- But in Propositional logic, it is an invalid argument
	- P : "All men are mortal."
	- Q : "Socrates is a man."
	- R : "Socrates is mortal."

$$
\begin{array}{}
P\\
Q\\
\therefore R\\\\
P \land Q \not\models R
\end{array}
$$
- It is possible to make this argument invalid by making R as false and P and Q as true, though it is logically valid.