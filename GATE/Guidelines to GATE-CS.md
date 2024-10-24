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


- In the relational model queries (rel. algebra, rel.calculus), NULL does not occur in the table except for outer join.

### Guidelines to Relational Algebra

- For relational algebra, first figure out how many tuples gives our desired answer, in case of comparisons are needed across tuples. And then take the cross product as the tuples required.
- In relational algebra, Natural way of joining relations is different from cross product of two relations.
- $a\backslash b$ is set difference and $a / b$ is division operator

- Just have an overview that relations are nothing but sets of tuples. It will help you simplify relations mentally.


### Guidelines to SQL

- In SQL, FROM keyword is cross product and not natural join.
- Conceptual evaluation = FROM > WHERE > SELECT > DISTINCT
- Though SQL queries are declarative, DBMS will optimize the query for faster retrieval and those details are not necessary. It is different from the conceptual evaluation.


- Be careful when UNION, INTERSECT, EXCEPT is used on a non-key attribute, which may contain duplicates.
- Be careful when AND is used on the same attribute. When used on different attributes, it selects the desired tuple. When used on the same attribute, it cannot select any desired tuple. In such case, use intersect or intersect all.


### Guidelines to Disk

- Consider using Average seek time and Average rotational latency unless explicitly mentioned otherwise.
- For every rotation, always consider the rotational latency.
- Data is expressed in terms of powers of 2
- Time is expressed in terms of powers of 10

![[Guidelines to GATE-CS-20241007182239966.webp]]

- Both lba and chs are 0-indexed. 
- Evaluating chs gives the position of a sector i.e. logical block addressing. The answer that is obtained is the correct one. No need to add or subtract anything.
- Disk addressing = address of a sector.
- Cylinder numbers also start from 0. It is important for disk scheduling algorithms.

- In C-scan algorithm, the empty trip is also counted for average calculation.
- A block is a consecutive sectors within a track.
- transfer rate does not care about whether useful data is transferred or not. It just shows how much data is transferred in a given amount of time. But remove the formatted data, it is not required.

- scanning a full disk is different from searching for a record in the disk.

### Guidelines to Indexing

- By default organization is unspanned and records are of fixed-length.
- Indexes are always created on a single attribute.
- Data access always happens block by block. Even if a record address, that block that which contains that record has to be accessed. 
- Index blocking factor is also called index fan-out.
- index fan-out = referencing capability per block.
- Doing a search on index blocks and finding the correct entry also requires disk block access of the original file. If the index is already on the memory, then disk block accesses are those that are done from the disk.
- Ordered index files contain index entries in sorted manner physically.
- Access cost = number of disk block accesses
- Block access is nothing but reading of blocks by main memory.
- Take the size of record pointer for the secondary index if both block and record pointer size are given.

- Unclustered index is the secondary index.
- Some authors consider both primary and secondary index are same.
- Secondary index is not useful on range queries or we have to access to many records. A single sequential scan of the original file is better than searching through secondary index.

- Do not confuse search keys from "keys" in relational model.

- In B-trees, by default take record pointer for <key, record> pairs. If record pointer is not given, then consider block pointer.
- If there is only one node in the tree, then it is a leaf node.
- Searching for the key and searching for the data record having the search key have different number of disk block accesses.
- In case of doubt in analysis questions, just have some different key values and insert them into a B-tree and arrive at conclusions.
- For B-tree questions, the order can be defined in different ways.
- Whenver got confused to take whether ceil or floor, just do take some small value and see.
- For even order we prefer right-biased splitting, as the right node will have more nodes.


- For a given height, if stuffed each node with maximum possible keys, then B+ trees can account for more keys than B trees
- For the same setup, B+ tree will take less levels and nodes than B tree.


### Guidelines to Transaction management

- Any transaction must preserve database consistency.
- DB must go from one consistent state to another consistent state after concurrent execution of transactions.
- ACID properties are there to preserve database consistency.
- Consistency preservation of a transaction is when it is run from a consistent state of DB without any failures or interleaving, it results in another consistent state of DB. 
- Consistency property is partially on programmers hand.
- App dependent constraints are implicit and Integrity Constraints are explicit constraints as they are enforced by DBMS.
- The original order of operations in a transaction must not change in any execution.

- For isolation, transactions must be appear to execute serially. But for performance measures, transactions are executed concurrently. To ensure isolation amidst concurrent execution, serializability is used.
- For ensuring isolation property, don't read changes by uncommitted transactions.
- Serializability ensures isolation and consistency of a schedule (assuming that no failure occurs).

- Transaction is analogous to processes in Operating systems.
- Scheduler component takes care of concurrency control.
- Every serial schedule is also a concurrent schedule.
- For serializability, commit operation is irrelevant.

![[Serializability-20231213131409716.webp]]

- Swapping two non-consecutive operations in any schedule makes the schedule invalid.
- In case of conflict serializable equivalent schedules question, just identify the conflicting pairs and check whether those are swapped in the options to eliminate some.
- Serializability graph = precedence graph

- For view serializability,
	1. handle write
	2. handle read
- Get the equations and see if there are any contradictions.
- Be careful when a transaction writes the same element more than once in view serializability

![[Guidelines to GATE-CS-20241019202459955.webp]]


- View serializability takes blind writes as a benefit, but conflict serializability does not take advantage of it.
- Any view serializabile schedule that is not conflict serializable contains a blind write.
- Buffer in main memory is shared by transactions in a schedule, but each transaction has its own private temporary variables.

- Transactions which has computations and operations mentioned are serializable, but not VS.

- We cannot undo a committed transaction.
- Serializability and Recoverability are for schedules and not for transactions and both concepts have no correlation between them.
- In cascading rollback schedules, there is a dependency between transaction, but in cascadeless schedules, there is no dependency between transactions.

- When only read, write operations are given and asked for serializability, consider serializability as view serializablity.

- Concurrency control protocols are followed by each and every individual transactions so that the schedule becomes serialiazble and ensures isolation and preserves consistency

- A 2PL scheduler generates a **conflict** serializable schedule.
- A conflict serializable schedule may not be generated by a 2PL scheduler, but the schedule that is generated by a 2PL scheduler is definitely conflict serializable.


![[Lock-based Protocols-20231215213208633.webp]]

- Deadlock can be dealt with by rolling back one of the transactions, but we cannot deal with irrecoverable schedule.

![[DBMS PYQs-20241021185655661.webp]]

- In 2PL protocol, the serializability order is decided at execution time. For time stamp protocol, the serializability order is already decided.



---
## Guidelines to COA

- When there is no information on whether the memory is word or byte-addressable, byte-addressable is considered, eventhough if there is an information on word length.
- CPU does not care whether the memory is byte or word-addressable. If a CPU is a 32-bit processor (word length is 32 bits), then it processes 32 bits in one go.

- k-bit addressing = k-bits are required to uniquely identity each address.
- p-bit addressable = every p-bits has an address.

- If the question asks for if there is any hazard, just draw the cycle diagram of normal pipeline execution and see if any problem exists. Don't overdo the problem.
- Don't assume split phase by default. By default implementation is not split phase (the other one).


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
- The name of the free variable should not be changed, but the name of the bounded variable can be changed to avoid confusion.

![[Guidelines to GATE-CS-20240928122013459.webp|Precedence of operators]]

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

