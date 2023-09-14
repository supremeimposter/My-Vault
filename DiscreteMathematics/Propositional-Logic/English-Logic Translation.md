- Do not apply precedence in English language, instead understand the intuition of the sentence. 
- Natural languages such as English is ambiguous.

![[Pasted image 20230913184912.png]]

![[Pasted image 20230913184938.png]]

![[Pasted image 20230913184951.png]]

![[Pasted image 20230913185016.png]]

![[Pasted image 20230913185032.png]]

---

```ad-question
p : "I will prove this by cases"
q : "There are more than 500 cases"
r : "I can find another way"

1. State $(\neg r \vee \neg q) \rightarrow p$ in simple english
2. State the converse
3. State the inverse
4. State the contrapositive
```

1. $(\neg r \vee \neg q) \rightarrow p \equiv$ "If I cannot find another way or there are not more than 500 cases, then I will prove this by cases." 
2. $p \rightarrow (\neg r \vee \neg q) \equiv$ "If I prove this by cases, then either I cannot find another way or there are not more than 500 cases."
3. $\neg(\neg r \vee \neg q) \rightarrow ~p \equiv (r \wedge q) \rightarrow \neg p \equiv$ "If I can find another way and there are more than 500 cases, then I will not prove this by cases."
4. $\neg p \rightarrow \neg(\neg r \vee \neg q) \equiv \neg p \rightarrow (r \wedge q) \equiv$ "If I don't prove this by cases, then I can find another way and there are more than 500 cases."

----
### Translate into symbolic form

```ad-question
"I will not pass this class unless I go to class every day and do all the homework exercises"
```

P : "I will pass this class"
Q : "I go to class every day"
R : "I do all the homework exercises"

$$
\neg (Q \wedge R) \rightarrow \neg P
$$
$$
(\neg Q \vee \neg R) \rightarrow \neg P
$$
$$
P \rightarrow (Q \wedge R)
$$

```ad-question
"I lock the doors and close the windows whenever I leave to go the work."
```

P : "I lock the doors"
Q : "I close the windows"
R : "I leave to go to work"

$$
R \rightarrow (P \wedge Q)
$$

```ad-question
"Getting up on time and getting ready quickly is sufficient for arriving at work on time."
```

P : "Getting up on time"
Q : "Getting ready quickly"
R : "Arriving at work on time"

$$
(P \wedge Q) \rightarrow R
$$

```ad-question
"Practicing an hour a day and getting private lessons twice a week is necessary for playing in the wind ensemble"
```

P : "Practicing a hour a day"
Q : "Getting private lessons twice a week"
R : "Playing in the wind ensemble"

$$
R \rightarrow (P \wedge Q)
$$

```ad-question
I can study hard, or I can go to parties, but I cannot study hard and go parties
```

P : "I can study hard"
Q : "I can go to parties"

$$
(P \vee Q) \wedge (\neg P \wedge Q)
$$

