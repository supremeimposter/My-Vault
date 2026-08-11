---
tags:
  - ComputerNetworks/Switching
---
# Switching and its Types

This is one of the most important concepts in Computer Networks because it explains **how data actually travels through a network**. Let's build it from first principles.

Imagine you want to talk to your friend who lives in another city. There are two possible ways the telephone company could arrange your communication.

---

# 1. Circuit Switching

Circuit switching creates a **dedicated communication path** between the sender and receiver **before** any data is transmitted.

Think of it like reserving an entire road just for your car.

```
A -------- B -------- C -------- D

Sender                     Receiver
```

Suppose the path is

```
A → B → C → D
```

Before you even say "Hello", the network reserves

* A-B
* B-C
* C-D

No one else can use those links for your conversation.

Only after the entire path is reserved does communication begin.

```
Reserve path
      ↓
Send data
      ↓
Release path
```

This is exactly how the traditional telephone network (PSTN) worked.

---

## Characteristics

### Dedicated path

One fixed route exists during the entire conversation.

```
A ---- B ---- C ---- D
```

Everything goes through this exact route.

---

### Guaranteed bandwidth

Suppose every link is 100 Mbps.

If 20 Mbps is reserved for you,

```
100 Mbps
------------
20 Mbps → Yours
80 Mbps → Others
```

No one can steal your 20 Mbps.

---

### Constant delay

Since the route never changes,

every packet experiences roughly the same delay.

Very useful for voice calls.

---

### Resource wastage

Suppose you are silent for 30 seconds.

Your reserved bandwidth still exists.

```
Reserved
──────────────

Talking...

Silence...

Talking...

Silence...
```

Even during silence, nobody else may use it.

This is inefficient.

---

# Circuit Switching Phases

There are three phases.

### Phase 1

Connection setup

```
Sender
   |
Reserve
   |
Router
   |
Reserve
   |
Router
   |
Reserve
   |
Receiver
```

---

### Phase 2

Data transfer

```
Sender ===== Receiver
```

---

### Phase 3

Connection release

All reserved resources are freed.

---

# Advantages

* Predictable delay
* No congestion after setup
* Guaranteed bandwidth
* Excellent for continuous voice

---

# Disadvantages

* Wastes bandwidth
* Setup time required
* One broken link breaks the entire connection
* Poor utilization

---

# Packet Switching

Now imagine instead of reserving an entire road, you simply place each letter into an envelope.

Every envelope contains

* destination address
* source address

The postal service decides the best route.

That's packet switching.

Instead of sending one giant stream,

the message is divided into packets.

Example

Message:

```
HELLO FRIEND
```

becomes

```
Packet 1
HEL

Packet 2
LO

Packet 3
 FR

Packet 4
IEND
```

Each packet travels independently.

---

```
Packet 1
A → B → D

Packet 2
A → C → D

Packet 3
A → B → E → D

Packet 4
A → C → E → D
```

Notice something interesting.

They can all take different routes.

---

When they arrive,

the receiver rearranges them into the original message.

```
HEL
LO
 FR
IEND

↓

HELLO FRIEND
```

---

# Why packet switching?

Because most communication is bursty.

Imagine chatting.

```
Typing...

Pause...

Typing...

Pause...
```

During the pauses,

the network can carry someone else's packets.

Resources are shared.

---

# Advantages

Efficient use of bandwidth.

```
User A

■■■■

User B

□□□□

User C

■■
```

Everyone shares the same links.

---

No dedicated path required.

Packets can use any available route.

---

Fault tolerant.

Suppose this link fails.

```
A ---- B ---- C
 \           /
   \       /
      D
```

Instead of

```
A-B-C
```

the packet can go

```
A-D-C
```

No need to stop communication.

---

Disadvantages

Variable delay.

Packet 1 may arrive in

```
10 ms
```

Packet 2

```
40 ms
```

Packet 3

```
18 ms
```

This is called **jitter**.

Packets may also arrive out of order.

---

# Packet Switching has TWO approaches

This is where your question becomes interesting.

There are

1. Datagram approach
2. Virtual Circuit approach

---

# Datagram Packet Switching

Every packet is independent.

Each one carries the complete destination address.

```
Packet 1

Destination = D

Packet 2

Destination = D

Packet 3

Destination = D
```

Each router independently decides where to send it.

So

```
Packet 1

A-B-D

Packet 2

A-C-D

Packet 3

A-E-F-D
```

Different routes are perfectly normal.

This is how the Internet (IP) works.

---

# Virtual Circuit Packet Switching

This is somewhere between circuit switching and datagram switching.

Imagine the network first decides

```
A → B → C → D
```

Then it tells every router

"Packets belonging to Connection 27 should always follow this path."

Instead of carrying the full destination address every time,

packets only carry

```
VC Number = 27
```

Each router has a small table.

```
Incoming VC 27

↓

Outgoing VC 12
```

The packet follows the pre-established route.

---

Notice something.

The path is fixed,

but **no bandwidth is reserved**.

That is the biggest difference.

---

# Circuit Switching vs Virtual Circuit Packet Switching

People often confuse these because both establish a path first.

Let's compare them carefully.

| Feature                   | Circuit Switching     | Virtual Circuit Packet Switching |
| ------------------------- | --------------------- | -------------------------------- |
| Setup required            | ✅ Yes                 | ✅ Yes                            |
| Fixed route               | ✅ Yes                 | ✅ Yes                            |
| Dedicated bandwidth       | ✅ Yes                 | ❌ No                             |
| Data unit                 | Continuous bit stream | Individual packets               |
| Packets stored at routers | ❌ No                  | ✅ Yes (store-and-forward)        |
| Links shared with others  | ❌ No                  | ✅ Yes                            |
| Delay                     | Almost constant       | Variable                         |
| Efficient utilization     | Poor                  | Good                             |

---

## Why does Virtual Circuit still have delay?

Because routers still perform **store-and-forward**.

Suppose packet arrives at Router B.

```
Receive packet

↓

Store packet

↓

Wait if link busy

↓

Forward packet
```

Even though the route is fixed,

the packet might wait behind other packets.

So delay varies.

In circuit switching,

bits simply flow continuously after setup.

---

# An Analogy

Imagine trains.

## Circuit Switching

The railway company gives you your own private railway track.

Nobody else can use it.

```
===========
YOUR TRAIN
===========
```

Very fast.

Very expensive.

---

## Virtual Circuit Packet Switching

The railway company reserves a fixed route,

but trains from many people still use the same tracks.

Sometimes you wait at signals.

```
Route fixed

But tracks shared
```

---

## Datagram Packet Switching

Every station decides where to send your train next.

Today's route may differ from tomorrow's.

```
Today

A-B-D

Tomorrow

A-C-E-D
```

No predetermined path.

---

# One-line summary

* **Circuit Switching:** Reserve the **entire path and bandwidth** before communication; data then flows continuously with predictable delay.
* **Packet Switching (Datagram):** Split data into packets, and each packet is routed independently; no path is established beforehand.
* **Packet Switching (Virtual Circuit):** Establish a **logical path** first so all packets follow the same route, but **network resources are still shared**—there is no dedicated bandwidth.

---

One subtle but important point: a **virtual circuit is "virtual" precisely because the circuit is only a logical agreement stored in router tables**. Unlike a real circuit, the routers don't exclusively reserve the transmission links for you. Your packets still compete with everyone else's packets on each link, which is why virtual circuits provide ordering and a fixed route, but not the guaranteed bandwidth and constant delay of true circuit switching.

