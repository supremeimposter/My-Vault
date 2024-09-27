---
tags:
  - GATE/Guidelines
---
# Guidelines to GATE-CS

- [ ] Take mocks to experiment the exam. Practice . Do not worry about topping it.
- [ ] Do not completely avoid a subject. At least get an overall idea of the important concepts and practice the pyqs from important topics of a subject.
- [ ] Use mock tests to get used to the exam. Sit in a place for 3 hours and be at your heightened energy levels.
- [ ] Do not sleep in day-time.

## Guidelines to Programming with C


---
## Guidelines to Digital Logic

- Some questions on boolean algebra can be solved by evaluating the boolean expressions in the options.
- If there is a doubt in a boolan equation or if you feel like you are confusing a known boolean law, just use by case method and verify.
- Use by-case method to veify large boolean equations.
- Its easier to find the complement of a large boolean expression from its dual rather than applying de-morgans's law.
$$
\overline{f} (a, b, c, d) = f^d (\overline{a}, \overline{b}, \overline{c}, \overline{d})
$$
![[Guidelines to GATE-CS-20240619102714090.webp]]

- When truth table is given, it is easier to find dual of a boolean expression using the complement.

![[Boolean Function-20240527175758734.webp]]

- Find Canonical SOP first and it will be easier to find Canonical POS i.e. $f = \sum m (f = 1) = \prod M (f = 0)$.
- To visualize a function in a k-map, firstly convert the given expression to either standard or canonical SOP for better visualization.
- See if there are any redundant larger cubes after identifying all the cubes in k-maps.
- Look for the corner 1-cells and the folding 1-cells while creating cubes.


- Do not try to remember subtraction of unsigned numbers using complements. Just apply the expansion technique and find the difference.
- Sign-magnitude, 1's complement, 2's complement representation are only for signed binary numbers in digital systems. They are not operations here, they are number systems specific to signed binary numbers in digital systems. There is no 9s complement or 10s complement representation.
- The minimum number of 1's complement is found from the complement of maximum number of 1's complement in $n$ bits. It is not a weighted system unlike 2's complement.
- Most of the signed binary addition concepts are cleared by simply adding the given two numbers.
- Binary codes are any strings of 0s and 1s derived from a systematic calculation. Each element encoded has a distinct binary code.
- Binary codes for decimal digits means binary codes for each digit of a number and not for the entire number.
- Gray code is a binary code for the entire number and not for each digit.


- Shannon's expansion theorem and compact truth table go hand in hand.
- If you are stuck with MUX, just write the canonical SOP expression of the given function and try to write the compact truth table. It will give you more ideas.
- In MUX, the functions at the input data lines have no influence on the MUX itself. The control inputs influence the MUX.
- If a MUX is given and the options are to find the function realized by the MUX, just plug in the control input values and see what happens to each of the options. Use compact or standard truth table. Use k-map when a minimized expression is required.
- If the working of a given boolean function can be mimiced using a digital circuit, then the function has been realized or implemented by the digital circuit.
- A decoder can act as a DEMUX whereas a decoder can be used to implement MUX. 


- If an unknown flip flop with combinational logic is given in the question, then apply inputs into find what kind of flip flop it is.


---
## Guidelines to Database Management System

- If an attribute has a set-valued attribute, then it is not in 1NF as the values are not atomic. For 1NF, an attribute cannot be composite.
- When asked for candidate keys, check if the options are minimal or not. Just don't blindly find the closure of attributes of options given.
- Since sets of attributes are used, for counting the different combinations, subsets counting can be used to find out the different possible combinations.

- To prove or verify a FD is inferred by an FD set, always use closure method as it is easy and fast rather than fiddling with Armstrong's axioms. Take the closure of the given FD and check in the given FD set, whethere the RHS can be obtained or not.

- Given a relation, always start checking from the highest normal form and descend. BCNF $\to$ 3NF $\to$ 2NF. Because if $R$ is in 3NF, then it is definitely in 2NF, you can stop there.
- Only BCNF completely removes redundancies due to FDs, the lower normal forms may still cause redundancies due to FDs.
- Please make sure you are checking against non-prime attributes for violations in 2NF and 3NF.
- Create a simple relation schema and some FDs to test out options in case of confusions.

| ![[Guidelines to GATE-CS-20240908152842090.webp]] | ![[Guidelines to GATE-CS-20240908152854230.webp]] | ![[Guidelines to GATE-CS-20240908152913537.webp]] |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |

- Not every decomposition (2NF, 3NF) are lossless and dependency preserving. But there always exists (at least one) 2NF or 3NF decomposition for a relation that is lossless and dependency preserving.
- There can be multiple ways (multiple algorithms) to decompose a relation to either 2NF, 3NF or BCNF.
- There is always a lossless BCNF decomposition possible for a relation. It may not be possible to get any BCNF decomposition of some relation $R$ that is dependency preserving.
- Check the closure of preserved FD by each individual relations to check for dependency preserving decomposition.
- Deletion operation never violates any FD, so no FD checking is needed.

- For relational algebra, first figure out how many tuples gives our desired answer, in case of comparisons are needed across tuples. And then take the cross product as the tuples required.
- In relational algebra, Natural way of joining relations is different from cross product of two relations.
- $a\backslash b$ is set difference and $a / b$ is division operator

- Just have an overview that relations are nothing but sets of tuples. It will help you simplify relations mentally.

---
## Guidelines to COA

- If the question asks for if there is any hazard, just draw the cycle diagram of normal pipeline execution and see if any problem exists. Don't overdo the problem.
- Don't assume split phase by default. By default implementation is not split phase.


- If the starting address of an array is given, then use it to identify the block number of the starting block of the array in the main memory. The block offset can be used to identify the position of the first element of the array.
- The starting address of an array may be not be 0 in the main memory. So be careful.


---

## Guidelines to Operating Systems

- Look for semicolon at the end of while loops in critical section problems. 




---

## Guidelines to Discrete Mathematics

### Guidelines to Propositional Logic

- T and F are constant propositional expressions or propositional formulae.
- Every atomic proposition is a compound proposition, but not every compound proposition is an atomic proposition.

- $\leftrightarrow$ is bi-implication and $\Leftrightarrow$ is logical equivalence.

![[Guidelines to GATE-CS-20240927182739123.webp]]

- Do not confuse with solving by-case method. Just take one of the propositional variables and see what happens to the both the expressions for the variables' truth values.

![[Guidelines to GATE-CS-20240920225711275.webp]]

- Implication is not commutative and not associative.
- $a \rightarrow b \rightarrow (b \rightarrow c)$ can be treated as either,
	- $(a \rightarrow b) \rightarrow (b \rightarrow c)$ or
	- $a \rightarrow (\, b \rightarrow (b \rightarrow c) \,)$
	- $(a \rightarrow b) \rightarrow (b \rightarrow c) \not\equiv a \rightarrow (\, b \rightarrow (b \rightarrow c) \,)$
- If nothing is mentioned, then assume right associativity by default i.e. $a \rightarrow (\, b \rightarrow (b \rightarrow c) \,)$

- unless = if not 
- unless splits a compound proposition.

- For checking the validity of an argument and consistency of a set of proportions is the same, except for validity of argument has the additional step  that the conclusion has been made to be false.
- To put it simply, $A_{1}, A_{2}, \cdots, A_{n} \to C$, in this $T \to F$ should not occur.

- If some propositional expression has been given, it has either of the two truth values. Look at an expression in an proposition point of view.
- In case of implications in a verification of tautology for a propositional expression, validity of argument method can be used.

![[Guidelines to GATE-CS-20240922123521612.webp]]

- If $p$ is a propositional variable, it can have either true or false as its truth value. So a propositional variable is necessarily a contingency.
- If you cannot comprehend something into a logical argument in case of propositional forumlae, just use the truth table and find counter examples and arrive at solutions.

![[Guidelines to GATE-CS-20240924100725280.webp]]

- Conjunctive normal form CNF = product of sums POS
- Disjunctive normal form DNF = sum of products SOP

- When asked to prove a logical equivalence, just go for by-case method. Its simple.


### Guidelines to First Order Logic

- Domain in FOL is always non-empty, unless explicitly stated otherwise. Domain can be finite or infinite.
- The elements of domain are also called as constant or object.
- If the domain of different variables in a predicate is not mentioned, then by default it is considered that those variables have the same domain.
- Predicates are also called as propositional functions, because they take values as inputs and produce propositions.
- Quantifiers cannot affect any propositions i.e. predicates with no predicate variables.
- When a predicate is quantified and all the variables are bounded, it becomes a proposition.

- For universal quantified statement to be false, you need a counter example. It is usually paired with $\rightarrow$
- For existential quantified statement to be true, you need a witness. It is usually paired with $\land$
- some $p$ is $q$ $\equiv$ $\exists x\: (\,p(x) \land q(x)\,)$
- all $p$ are $q$ $\equiv$ $\forall x\: (\,p(x) \rightarrow q(x)\,)$

- Existential quantifier just needs one witness (one true case) to make it true. Thats it.

![[Guidelines to GATE-CS-20240924232034926.webp]]

````col
```col-md
flexGrow=1
===
![[Guidelines to GATE-CS-20240924233015254.webp]]
```
```col-md
flexGrow=1
===
![[Guidelines to GATE-CS-20240924233031511.webp]]
```
````

- A bounded variable cannot be replaced by any value from the domain. A bounded variable is just a placeholder.

![[Guidelines to GATE-CS-20240925101959834.webp]]
![[Guidelines to GATE-CS-20240925102200404.webp]]

![[Guidelines to GATE-CS-20240927073742192.webp]]
![[Guidelines to GATE-CS-20240925113138801.webp]]

- Bounded variable = quantified variable
- free variable = non-quantified variable


### Guidelines to Set Theory

- Membership operator is only used for a member of a set, and not for the subset of the set.
- Infinity $\infty$ is never a member of any set. Its not even a number
- While building a set, do not forget the negative portion.
- The resultant of the operations on a set is again a set.
- Dont shade the sets, instead use numbers to represent each area in the venn diagram.

![[Guidelines to GATE-CS-20240830180026648.webp]]

- Mostly use venn diagrams to avoid confusion and time for proofs.
- Since identities are equalities, in case of doubt a venn-diagram can be helpful.
- Venn diagrams are not helpful in powerset related identities. Only formal proof techniques are helpful. 
- Also make use of cardinality of powersets in case equality proofs involving powersets to check the answers solved using formal proof techniques.

- The complement of a set depends on its universal set. Keep that in mind.
- universal set is similar to True and empty set is similar to false in propositional logic.

- Take a simple set to work on subsets and powersets to avoid confusion and also confirm the results using a non-simple set such as $S = \{ \phi \}$

![[Guidelines to GATE-CS-20240831160352865.webp]]

- To define relations on a set, it has to be non-empty. Base set has to be non-empty.
- Relation is one way and it is just a set of tuples between set(s).
- Be keen about the base set on which the relation is defined. The term base set is only when the relation is defined on the same set.
- Relation on a set $A$ is one of the subsets of the set $A$.
- Every relation on $A$ is a subset of $A$. Every subset of $A$ is a relation on $A$.
- To define a subset or superset relation, the set must contain only sets instead of simple elements. For example, a powerset of a set, all of its members are sets themselves.
- When it comes to the types of relation on a set, then violation occurs only when the FOL statement of the type of relation turns out to be false.

![[Guidelines to GATE-CS-20240901210847397.webp]]

- It is better to use graph representation for checking out transitive relation to avoid any imaginary errors.
- For general questions on relations, also consider evaluating empty relations and universal relations.

- Matrix representation of a relation is a good way to count the number of relations

![[Guidelines to GATE-CS-20240911211145784.webp|Every cell has 2 choices and there are $n^2$ cells i.e. $2^{n^2}$ relations]]

- A partition of a set is also a set and every member of a partition set is also a set.
- Each equivalence relation on a base set corresponds to a unique partition of the base set and vice versa.

![[Guidelines to GATE-CS-20240902133833342.webp]]

> set-theory/lec30-32.pdf Pg. No. 46

- A partition on set $A$ is a sub collection (subset) of $\mathcal{P}(A)$
- Set of equivalence classes (partition) is a different set and the equivalent relation set is a different set.

- To check for a POR, also check a set with cardinality 1.

- In every lattice, 

![[Guidelines to GATE-CS-20240908224115126.webp]]

---
## Guidelines to TOC

- For any alphabet $\Sigma$, $\lambda \not\in \Sigma$ and $\lambda \in \Sigma^\ast$ and $\lambda \not \in \Sigma^+$

- For analysis questions on Kleene star and Kleene Plus on languages always check these two languages,
	1. $L = \{\lambda\}$
	2. $L = \{\}$

- For any language $L$,
	1. $L^0 = \{\lambda\}$
	2. If $\lambda \in L$, then $\lambda \in L^+$
	3. If $\lambda \not\in L$, then $\lambda \not\in L^+$
	4. $L^+ = L^\ast - \{ \lambda \}$ iff $\lambda \not\in L$

- To check if a string belongs to closure of a language or not, see for which exponentiation of the language does the string belongs to.

![[Guidelines to GATE-CS-20240915224039804.webp]]

- Whenever you see a language and want to construct a mathematical model, first figure out the states, inputs and transitions, it will be easier to arrive at the correct DFA, NFA or whatever. Just don't blindly draw circles and keep thinking.

- Do not forget the transitions of the dead state and the final state when drawing the diagrams.
- For a machine, it only accepts certain strings that are part of its language. So don't confuse it with going to $L^\ast$ or $L^+$.

