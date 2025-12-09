// EduMap+ - Complete CS Learning Platform with 7 Subjects
class EduMapApp {
    constructor() {
        this.subjects = {
            dsa: {
                name: "Data Structures & Algorithms",
                icon: "fas fa-project-diagram",
                color: "#4F46E5",
                description: "Fundamental building blocks for efficient programming",
                flashcards: [
                    {
                        id: "dsa_1",
                        front: "What is a Data Structure?",
                        back: "A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. It defines the relationship between data elements and the operations that can be performed on them.",
                        difficulty: "easy",
                        explanation: "Think of data structures as containers with specific rules for organizing data - like arrays, linked lists, trees, etc."
                    },
                    {
                        id: "dsa_2",
                        front: "Linear vs Non-linear Data Structures",
                        back: "Linear: Elements arranged sequentially (arrays, linked lists, stacks, queues). Non-linear: Elements arranged hierarchically or in networks (trees, graphs, heaps).",
                        difficulty: "easy",
                        explanation: "Linear structures have elements in sequence, non-linear have branching relationships."
                    },
                    {
                        id: "dsa_3",
                        front: "Big O Notation",
                        back: "Mathematical notation used to describe the limiting behavior of a function. In CS, it describes the upper bound of algorithm complexity. O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).",
                        difficulty: "medium",
                        explanation: "Big O helps us compare algorithm efficiency as input size grows."
                    },
                    {
                        id: "dsa_4",
                        front: "Array Time Complexities",
                        back: "Access: O(1), Search: O(n) unsorted/O(log n) sorted, Insertion: O(1) at end/O(n) at beginning, Deletion: O(1) at end/O(n) at beginning.",
                        difficulty: "medium",
                        explanation: "Arrays excel at direct access but struggle with insertions/deletions in the middle."
                    },
                    {
                        id: "dsa_5",
                        front: "Linked List Advantages",
                        back: "Dynamic size allocation, efficient insertion/deletion at beginning (O(1)), no memory waste, can grow during runtime. Each node contains data and pointer to next node.",
                        difficulty: "easy",
                        explanation: "Linked lists trade access speed for flexibility in size and modifications."
                    },
                    {
                        id: "dsa_6",
                        front: "Stack Operations",
                        back: "Push (add to top), Pop (remove from top), Peek/Top (view top element), isEmpty (check if empty). All operations are O(1). Follows LIFO principle.",
                        difficulty: "easy",
                        explanation: "Stacks work like a pile of plates - you can only add/remove from the top."
                    },
                    {
                        id: "dsa_7",
                        front: "Queue vs Deque",
                        back: "Queue: FIFO, insertion at rear, deletion at front. Deque: Double-ended queue, insertion/deletion at both ends. Circular queue reuses space efficiently.",
                        difficulty: "medium",
                        explanation: "Queues manage fair ordering, deques provide maximum flexibility."
                    },
                    {
                        id: "dsa_8",
                        front: "Binary Search Tree Property",
                        back: "For each node: left subtree values < node value < right subtree values. Inorder traversal gives sorted sequence. Average case O(log n) operations.",
                        difficulty: "medium",
                        explanation: "BST maintains order through structure, enabling efficient searching."
                    },
                    {
                        id: "dsa_9",
                        front: "Hash Table Collision Resolution",
                        back: "Chaining: Store multiple values in linked lists. Open Addressing: Linear/quadratic probing, double hashing. Load factor affects performance.",
                        difficulty: "hard",
                        explanation: "Collision handling is crucial for maintaining O(1) average performance."
                    },
                    {
                        id: "dsa_10",
                        front: "Graph Representations",
                        back: "Adjacency Matrix: 2D array, O(V²) space, O(1) edge lookup. Adjacency List: Array of lists, O(V+E) space, better for sparse graphs.",
                        difficulty: "medium",
                        explanation: "Choose representation based on graph density and required operations."
                    },
                    {
                        id: "dsa_11",
                        front: "DFS vs BFS",
                        back: "DFS: Uses stack/recursion, goes deep first, good for topological sorting. BFS: Uses queue, level-by-level, finds shortest path in unweighted graphs.",
                        difficulty: "medium",
                        explanation: "Different traversal strategies serve different purposes."
                    },
                    {
                        id: "dsa_12",
                        front: "Heap Properties",
                        back: "Complete binary tree with heap property. Max-heap: parent ≥ children. Min-heap: parent ≤ children. Array implementation efficient. Used in priority queues.",
                        difficulty: "medium",
                        explanation: "Heaps maintain partial order for efficient priority operations."
                    },
                    {
                        id: "dsa_13",
                        front: "Merge Sort Algorithm",
                        back: "Divide-and-conquer: divide array in half, recursively sort halves, merge sorted halves. Time: O(n log n), Space: O(n). Stable sort.",
                        difficulty: "hard",
                        explanation: "Merge sort guarantees O(n log n) performance through divide-and-conquer."
                    },
                    {
                        id: "dsa_14",
                        front: "Quick Sort Partitioning",
                        back: "Choose pivot, partition array so elements < pivot are left, > pivot are right. Recursively sort partitions. Average O(n log n), worst O(n²).",
                        difficulty: "hard",
                        explanation: "Quick sort's performance depends heavily on pivot selection."
                    },
                    {
                        id: "dsa_15",
                        front: "Dynamic Programming Principles",
                        back: "Optimal substructure: optimal solution contains optimal solutions to subproblems. Overlapping subproblems: same subproblems solved multiple times. Use memoization or tabulation.",
                        difficulty: "hard",
                        explanation: "DP trades space for time by storing solutions to avoid recomputation."
                    },
                    {
                        id: "dsa_16",
                        front: "Dijkstra's Algorithm",
                        back: "Finds shortest path from source to all vertices in weighted graph with non-negative weights. Uses priority queue. Time: O((V+E) log V).",
                        difficulty: "hard",
                        explanation: "Dijkstra greedily selects closest unvisited vertex."
                    },
                    {
                        id: "dsa_17",
                        front: "Trie Data Structure",
                        back: "Tree for storing strings where each path represents a string. Each node represents a character. Used for autocomplete, spell checkers. Space-time trade-off.",
                        difficulty: "medium",
                        explanation: "Tries organize strings by common prefixes for fast prefix operations."
                    },
                    {
                        id: "dsa_18",
                        front: "AVL Tree Balancing",
                        back: "Self-balancing BST where height difference between subtrees ≤ 1. Uses rotations (LL, RR, LR, RL) to maintain balance. Guarantees O(log n) operations.",
                        difficulty: "hard",
                        explanation: "AVL trees prevent worst-case O(n) through automatic balancing."
                    },
                    {
                        id: "dsa_19",
                        front: "Minimum Spanning Tree",
                        back: "Tree connecting all vertices with minimum total edge weight. Kruskal's: sort edges, use Union-Find. Prim's: start from vertex, add minimum edge.",
                        difficulty: "hard",
                        explanation: "MST algorithms find cheapest way to connect all vertices."
                    },
                    {
                        id: "dsa_20",
                        front: "Binary Search Implementation",
                        back: "Compare target with middle element. If equal, found. If target < middle, search left half. If target > middle, search right half. Time: O(log n).",
                        difficulty: "medium",
                        explanation: "Binary search halves search space in each iteration on sorted arrays."
                    }
                ]
            },
            ml: {
                name: "Machine Learning",
                icon: "fas fa-brain",
                color: "#059669",
                description: "Algorithms that learn from data to make predictions",
                flashcards: [
                    {
                        id: "ml_1",
                        front: "What is Machine Learning?",
                        back: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. Uses algorithms to find patterns in data and make predictions.",
                        difficulty: "easy",
                        explanation: "ML systems improve their performance on a task through experience."
                    },
                    {
                        id: "ml_2",
                        front: "Supervised vs Unsupervised Learning",
                        back: "Supervised: learns from labeled data (input-output pairs). Examples: classification, regression. Unsupervised: finds patterns in unlabeled data. Examples: clustering, dimensionality reduction.",
                        difficulty: "easy",
                        explanation: "The presence or absence of labels determines the learning approach."
                    },
                    {
                        id: "ml_3",
                        front: "Overfitting vs Underfitting",
                        back: "Overfitting: model learns training data too well, poor generalization. Underfitting: model too simple, can't capture underlying patterns. Need balance for good generalization.",
                        difficulty: "medium",
                        explanation: "The bias-variance tradeoff is central to ML model performance."
                    },
                    {
                        id: "ml_4",
                        front: "Linear Regression",
                        back: "Predicts continuous output using linear relationship: y = mx + b. Uses least squares to minimize sum of squared errors. Assumes linear relationship between features and target.",
                        difficulty: "easy",
                        explanation: "Linear regression finds the best-fitting straight line through data points."
                    },
                    {
                        id: "ml_5",
                        front: "Logistic Regression",
                        back: "Classification algorithm using sigmoid function to map any input to 0-1 range. Despite name, used for classification, not regression. Uses maximum likelihood estimation.",
                        difficulty: "medium",
                        explanation: "Logistic regression models probability of class membership."
                    },
                    {
                        id: "ml_6",
                        front: "Decision Trees",
                        back: "Tree-like model making decisions based on feature values. Each internal node represents feature test, branches represent outcomes, leaves represent class labels. Prone to overfitting.",
                        difficulty: "medium",
                        explanation: "Decision trees create interpretable rules for classification/regression."
                    },
                    {
                        id: "ml_7",
                        front: "Random Forest",
                        back: "Ensemble method combining multiple decision trees. Uses bagging (bootstrap aggregating) and random feature selection. Reduces overfitting, improves accuracy.",
                        difficulty: "medium",
                        explanation: "Random Forest leverages wisdom of crowds through multiple trees."
                    },
                    {
                        id: "ml_8",
                        front: "Support Vector Machines (SVM)",
                        back: "Finds optimal hyperplane separating classes with maximum margin. Uses kernel trick for non-linear data. Effective in high-dimensional spaces.",
                        difficulty: "hard",
                        explanation: "SVM creates the widest possible street between classes."
                    },
                    {
                        id: "ml_9",
                        front: "K-Means Clustering",
                        back: "Unsupervised algorithm partitioning data into k clusters. Minimizes within-cluster sum of squares. Iteratively updates centroids and reassigns points.",
                        difficulty: "medium",
                        explanation: "K-means groups similar data points into clusters."
                    },
                    {
                        id: "ml_10",
                        front: "Neural Networks Basics",
                        back: "Interconnected nodes (neurons) in layers. Each connection has weight, each neuron has bias and activation function. Learn through backpropagation and gradient descent.",
                        difficulty: "hard",
                        explanation: "Neural networks mimic brain structure to learn complex patterns."
                    },
                    {
                        id: "ml_11",
                        front: "Gradient Descent",
                        back: "Optimization algorithm minimizing cost function by iteratively moving in direction of steepest descent. Learning rate controls step size. Can get stuck in local minima.",
                        difficulty: "hard",
                        explanation: "Gradient descent finds optimal parameters by following the slope."
                    },
                    {
                        id: "ml_12",
                        front: "Cross-Validation",
                        back: "Technique assessing model generalization by splitting data into train/validation sets multiple times. k-fold CV uses k subsets. Helps estimate model performance.",
                        difficulty: "medium",
                        explanation: "Cross-validation provides robust estimate of model performance."
                    },
                    {
                        id: "ml_13",
                        front: "Feature Engineering",
                        back: "Process of selecting, modifying, or creating features to improve model performance. Includes scaling, encoding categorical variables, creating polynomial features.",
                        difficulty: "medium",
                        explanation: "Good features are often more important than complex algorithms."
                    },
                    {
                        id: "ml_14",
                        front: "Regularization Techniques",
                        back: "L1 (Lasso): adds absolute value penalty, promotes sparsity. L2 (Ridge): adds squared penalty, shrinks weights. Elastic Net: combines both. Prevents overfitting.",
                        difficulty: "hard",
                        explanation: "Regularization adds constraints to prevent overly complex models."
                    },
                    {
                        id: "ml_15",
                        front: "Ensemble Methods",
                        back: "Combine multiple models for better performance. Bagging: parallel training (Random Forest). Boosting: sequential training (AdaBoost, Gradient Boosting). Voting: majority rule.",
                        difficulty: "hard",
                        explanation: "Ensemble methods leverage multiple models for robust predictions."
                    },
                    {
                        id: "ml_16",
                        front: "Principal Component Analysis (PCA)",
                        back: "Dimensionality reduction technique finding principal components (directions of maximum variance). Reduces features while preserving most information. Linear transformation.",
                        difficulty: "hard",
                        explanation: "PCA finds the most important directions in high-dimensional data."
                    },
                    {
                        id: "ml_17",
                        front: "Reinforcement Learning",
                        back: "Learning through interaction with environment. Agent takes actions, receives rewards/penalties. Learns optimal policy through trial and error. Uses Markov Decision Process.",
                        difficulty: "hard",
                        explanation: "RL learns optimal behavior through rewards and punishments."
                    },
                    {
                        id: "ml_18",
                        front: "Bias vs Variance",
                        back: "Bias: error from oversimplified assumptions. Variance: error from sensitivity to training data. High bias → underfitting. High variance → overfitting. Need balance.",
                        difficulty: "medium",
                        explanation: "Bias-variance tradeoff is fundamental to ML model selection."
                    },
                    {
                        id: "ml_19",
                        front: "Confusion Matrix",
                        back: "Table showing classification results: True Positives, False Positives, True Negatives, False Negatives. Used to calculate precision, recall, F1-score, accuracy.",
                        difficulty: "medium",
                        explanation: "Confusion matrix provides detailed view of classification performance."
                    },
                    {
                        id: "ml_20",
                        front: "Deep Learning",
                        back: "Subset of ML using neural networks with multiple hidden layers. Automatically learns features from raw data. Excels at image, speech, and text processing.",
                        difficulty: "hard",
                        explanation: "Deep learning uses many layers to learn hierarchical representations."
                    }
                ]
            },
            os: {
                name: "Operating Systems",
                icon: "fas fa-cogs",
                color: "#DC2626",
                description: "Software that manages hardware and system resources",
                flashcards: [
                    {
                        id: "os_1",
                        front: "What is an Operating System?",
                        back: "System software managing computer hardware and software resources. Provides common services for programs. Acts as intermediary between users and hardware.",
                        difficulty: "easy",
                        explanation: "OS is the foundation software that makes computers usable."
                    },
                    {
                        id: "os_2",
                        front: "Process vs Program",
                        back: "Program: passive entity, code stored on disk. Process: active entity, program in execution with memory, registers, program counter. Multiple processes can run same program.",
                        difficulty: "easy",
                        explanation: "Process is a program that's currently running in memory."
                    },
                    {
                        id: "os_3",
                        front: "Process States",
                        back: "New: being created. Ready: waiting for CPU. Running: executing on CPU. Waiting/Blocked: waiting for I/O. Terminated: finished execution.",
                        difficulty: "medium",
                        explanation: "Processes transition between states based on system events."
                    },
                    {
                        id: "os_4",
                        front: "CPU Scheduling Algorithms",
                        back: "FCFS: First Come First Served. SJF: Shortest Job First. Round Robin: time quantum. Priority: based on priority values. Multilevel queues.",
                        difficulty: "medium",
                        explanation: "Different algorithms optimize for different performance metrics."
                    },
                    {
                        id: "os_5",
                        front: "Threads vs Processes",
                        back: "Process: independent execution unit with separate memory space. Thread: lightweight process, shares memory with other threads in same process. Context switching faster for threads.",
                        difficulty: "medium",
                        explanation: "Threads enable concurrent execution within a single process."
                    },
                    {
                        id: "os_6",
                        front: "Deadlock Conditions",
                        back: "Mutual Exclusion: resources can't be shared. Hold and Wait: holding resources while waiting for others. No Preemption: resources can't be forcibly removed. Circular Wait: circular chain of waiting.",
                        difficulty: "hard",
                        explanation: "All four conditions must be present for deadlock to occur."
                    },
                    {
                        id: "os_7",
                        front: "Memory Management Techniques",
                        back: "Contiguous: fixed/variable partitioning. Non-contiguous: paging, segmentation. Virtual memory: demand paging, page replacement algorithms (FIFO, LRU, Optimal).",
                        difficulty: "hard",
                        explanation: "Memory management enables efficient use of RAM."
                    },
                    {
                        id: "os_8",
                        front: "Virtual Memory",
                        back: "Technique allowing execution of processes larger than physical memory. Uses demand paging: pages loaded when accessed. Creates illusion of infinite memory.",
                        difficulty: "medium",
                        explanation: "Virtual memory extends available memory using disk storage."
                    },
                    {
                        id: "os_9",
                        front: "Page Replacement Algorithms",
                        back: "FIFO: replace oldest page. LRU: replace least recently used. Optimal: replace page that won't be used longest (theoretical). Clock: approximation of LRU.",
                        difficulty: "hard",
                        explanation: "Page replacement decides which pages to swap to disk."
                    },
                    {
                        id: "os_10",
                        front: "File System Structure",
                        back: "Hierarchical structure with directories and files. File attributes: name, type, size, permissions, timestamps. Directory contains file entries with metadata.",
                        difficulty: "medium",
                        explanation: "File systems organize and manage data storage."
                    },
                    {
                        id: "os_11",
                        front: "Synchronization Primitives",
                        back: "Semaphores: integer counter for resource access. Mutex: binary semaphore for mutual exclusion. Monitor: high-level synchronization construct. Condition variables.",
                        difficulty: "hard",
                        explanation: "Synchronization prevents race conditions in concurrent systems."
                    },
                    {
                        id: "os_12",
                        front: "Critical Section Problem",
                        back: "Code segment where shared resources are accessed. Requirements: mutual exclusion, progress, bounded waiting. Solutions: Peterson's algorithm, semaphores, monitors.",
                        difficulty: "hard",
                        explanation: "Critical sections need careful synchronization to prevent conflicts."
                    },
                    {
                        id: "os_13",
                        front: "I/O Management",
                        back: "Handles communication between CPU and peripherals. Techniques: polling, interrupts, DMA. Device drivers provide uniform interface to hardware.",
                        difficulty: "medium",
                        explanation: "I/O management coordinates between fast CPU and slower devices."
                    },
                    {
                        id: "os_14",
                        front: "System Calls",
                        back: "Interface between user programs and OS kernel. Categories: process control, file manipulation, device management, information maintenance, communication.",
                        difficulty: "medium",
                        explanation: "System calls provide controlled access to OS services."
                    },
                    {
                        id: "os_15",
                        front: "Paging vs Segmentation",
                        back: "Paging: fixed-size blocks, no external fragmentation, internal fragmentation possible. Segmentation: variable-size logical units, external fragmentation, matches program structure.",
                        difficulty: "hard",
                        explanation: "Both techniques solve different aspects of memory management."
                    },
                    {
                        id: "os_16",
                        front: "Banker's Algorithm",
                        back: "Deadlock avoidance algorithm. Checks if granting resource request leaves system in safe state. Maintains safe sequence where all processes can complete.",
                        difficulty: "hard",
                        explanation: "Banker's algorithm prevents deadlock by careful resource allocation."
                    },
                    {
                        id: "os_17",
                        front: "Disk Scheduling Algorithms",
                        back: "FCFS: first come first served. SSTF: shortest seek time first. SCAN: elevator algorithm. C-SCAN: circular scan. Optimize seek time and throughput.",
                        difficulty: "medium",
                        explanation: "Disk scheduling minimizes head movement for better performance."
                    },
                    {
                        id: "os_18",
                        front: "Inter-Process Communication",
                        back: "Shared Memory: processes share memory region. Message Passing: send/receive messages through OS. Pipes: communication channel. Sockets: network communication.",
                        difficulty: "medium",
                        explanation: "IPC enables cooperation between separate processes."
                    },
                    {
                        id: "os_19",
                        front: "Protection and Security",
                        back: "Protection: internal mechanism controlling access. Security: defense against external threats. Access control lists, capabilities, authentication, authorization.",
                        difficulty: "medium",
                        explanation: "OS must protect resources from unauthorized access."
                    },
                    {
                        id: "os_20",
                        front: "Distributed Systems",
                        back: "Collection of independent computers appearing as single system. Challenges: communication, synchronization, failure handling, resource sharing. Network transparency.",
                        difficulty: "hard",
                        explanation: "Distributed OS manages resources across multiple machines."
                    }
                ]
            },
            cn: {
                name: "Computer Networks",
                icon: "fas fa-network-wired",
                color: "#7C3AED",
                description: "Communication systems connecting computers globally",
                flashcards: [
                    {
                        id: "cn_1",
                        front: "OSI Model Layers",
                        back: "Physical, Data Link, Network, Transport, Session, Presentation, Application. Each layer provides services to layer above and uses services from layer below.",
                        difficulty: "easy",
                        explanation: "OSI model standardizes network communication into 7 layers."
                    },
                    {
                        id: "cn_2",
                        front: "TCP vs UDP",
                        back: "TCP: connection-oriented, reliable, ordered delivery, flow control, congestion control. UDP: connectionless, unreliable, fast, no overhead, used for real-time applications.",
                        difficulty: "medium",
                        explanation: "TCP provides reliability while UDP provides speed."
                    },
                    {
                        id: "cn_3",
                        front: "IP Addressing",
                        back: "IPv4: 32-bit address (4 octets). Classes A, B, C for different network sizes. IPv6: 128-bit address for larger address space. Subnetting divides networks.",
                        difficulty: "medium",
                        explanation: "IP addresses uniquely identify devices on networks."
                    },
                    {
                        id: "cn_4",
                        front: "Routing Algorithms",
                        back: "Distance Vector: Bellman-Ford, shares routing tables with neighbors. Link State: Dijkstra's algorithm, floods link information. Hierarchical routing for scalability.",
                        difficulty: "hard",
                        explanation: "Routing algorithms find paths through network topology."
                    },
                    {
                        id: "cn_5",
                        front: "Ethernet Protocol",
                        back: "CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Listen before transmit, detect collisions, use binary exponential backoff. Frame format with headers.",
                        difficulty: "medium",
                        explanation: "Ethernet manages access to shared network medium."
                    },
                    {
                        id: "cn_6",
                        front: "DNS (Domain Name System)",
                        back: "Hierarchical distributed database translating domain names to IP addresses. Root servers, TLD servers, authoritative servers. Caching improves performance.",
                        difficulty: "medium",
                        explanation: "DNS provides human-readable names for network resources."
                    },
                    {
                        id: "cn_7",
                        front: "HTTP vs HTTPS",
                        back: "HTTP: stateless application protocol for web. HTTPS: HTTP over SSL/TLS for security. HTTPS encrypts data, authenticates servers, ensures integrity.",
                        difficulty: "easy",
                        explanation: "HTTPS adds security layer to web communication."
                    },
                    {
                        id: "cn_8",
                        front: "Network Topologies",
                        back: "Bus: single cable, collision domain. Star: central hub/switch. Ring: circular connection. Mesh: multiple paths, fault tolerance. Tree: hierarchical structure.",
                        difficulty: "easy",
                        explanation: "Topology determines how devices are physically/logically connected."
                    },
                    {
                        id: "cn_9",
                        front: "Switching Techniques",
                        back: "Circuit Switching: dedicated path for duration. Packet Switching: data in packets, shared resources. Message Switching: store-and-forward entire messages.",
                        difficulty: "medium",
                        explanation: "Switching determines how data moves through networks."
                    },
                    {
                        id: "cn_10",
                        front: "Network Security Threats",
                        back: "Eavesdropping: intercepting communications. Man-in-the-middle: inserting between communicating parties. DDoS: overwhelming with traffic. Malware: malicious software.",
                        difficulty: "medium",
                        explanation: "Understanding threats is first step in network security."
                    },
                    {
                        id: "cn_11",
                        front: "Congestion Control",
                        back: "TCP congestion window: slow start, congestion avoidance, fast retransmit, fast recovery. Additive increase, multiplicative decrease (AIMD).",
                        difficulty: "hard",
                        explanation: "Congestion control prevents network overload."
                    },
                    {
                        id: "cn_12",
                        front: "Wireless Networks",
                        back: "WiFi (802.11): CSMA/CA, hidden terminal problem, RTS/CTS. Cellular: GSM, CDMA, LTE. Bluetooth: short-range personal area network.",
                        difficulty: "medium",
                        explanation: "Wireless networks face unique challenges like interference."
                    },
                    {
                        id: "cn_13",
                        front: "Network Address Translation (NAT)",
                        back: "Translates private IP addresses to public IP addresses. Conserves IPv4 addresses, provides security through address hiding. Types: static, dynamic, PAT (port address translation).",
                        difficulty: "medium",
                        explanation: "NAT allows multiple devices to share single public IP."
                    },
                    {
                        id: "cn_14",
                        front: "Quality of Service (QoS)",
                        back: "Mechanisms to provide different priority levels for different applications. Traffic shaping, queuing disciplines, resource reservation. Important for real-time applications.",
                        difficulty: "hard",
                        explanation: "QoS ensures critical applications get required network resources."
                    },
                    {
                        id: "cn_15",
                        front: "DHCP Protocol",
                        back: "Dynamic Host Configuration Protocol automatically assigns IP addresses, subnet masks, default gateways, DNS servers. DORA process: Discover, Offer, Request, Acknowledge.",
                        difficulty: "medium",
                        explanation: "DHCP automates IP address configuration."
                    },
                    {
                        id: "cn_16",
                        front: "VPN (Virtual Private Network)",
                        back: "Creates secure tunnel over public network. Encryption protects data confidentiality. Authentication verifies identity. Tunneling protocols: IPSec, SSL/TLS.",
                        difficulty: "medium",
                        explanation: "VPNs provide secure remote access over untrusted networks."
                    },
                    {
                        id: "cn_17",
                        front: "Network Performance Metrics",
                        back: "Bandwidth: maximum data rate. Throughput: actual data rate. Latency: propagation delay. Jitter: variation in delay. Packet loss: percentage of lost packets.",
                        difficulty: "easy",
                        explanation: "Performance metrics help evaluate network quality."
                    },
                    {
                        id: "cn_18",
                        front: "Error Detection and Correction",
                        back: "Parity bits: simple error detection. Checksum: arithmetic error detection. CRC: polynomial-based detection. Hamming codes: error correction capability.",
                        difficulty: "hard",
                        explanation: "Error control ensures data integrity in noisy channels."
                    },
                    {
                        id: "cn_19",
                        front: "Mobile IP",
                        back: "Allows mobile nodes to maintain connections while moving. Home agent, foreign agent, care-of address. Tunneling maintains connectivity during handoffs.",
                        difficulty: "hard",
                        explanation: "Mobile IP enables seamless mobility in networks."
                    },
                    {
                        id: "cn_20",
                        front: "Software Defined Networking (SDN)",
                        back: "Separates control plane from data plane. Centralized controller manages network behavior. OpenFlow protocol for communication. Enables programmable networks.",
                        difficulty: "hard",
                        explanation: "SDN makes networks more flexible and manageable."
                    }
                ]
            },
            dbms: {
                name: "Database Management",
                icon: "fas fa-database",
                color: "#059669",
                description: "Systems for storing and managing structured data",
                flashcards: [
                    {
                        id: "dbms_1",
                        front: "What is DBMS?",
                        back: "Database Management System: software for creating, maintaining, and accessing databases. Provides data independence, concurrent access, security, backup/recovery.",
                        difficulty: "easy",
                        explanation: "DBMS manages data storage and retrieval efficiently."
                    },
                    {
                        id: "dbms_2",
                        front: "Database Models",
                        back: "Hierarchical: tree structure. Network: graph structure. Relational: tables with relationships. Object-oriented: objects with methods. NoSQL: document, key-value, graph.",
                        difficulty: "medium",
                        explanation: "Different models suit different data organization needs."
                    },
                    {
                        id: "dbms_3",
                        front: "ACID Properties",
                        back: "Atomicity: all or nothing transaction. Consistency: database remains valid. Isolation: concurrent transactions don't interfere. Durability: committed changes persist.",
                        difficulty: "medium",
                        explanation: "ACID ensures database transaction reliability."
                    },
                    {
                        id: "dbms_4",
                        front: "Normalization Forms",
                        back: "1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies. BCNF: stronger version of 3NF.",
                        difficulty: "hard",
                        explanation: "Normalization reduces redundancy and improves data integrity."
                    },
                    {
                        id: "dbms_5",
                        front: "SQL Join Types",
                        back: "INNER JOIN: matching records in both tables. LEFT JOIN: all from left, matching from right. RIGHT JOIN: all from right, matching from left. FULL OUTER JOIN: all records.",
                        difficulty: "medium",
                        explanation: "Joins combine data from multiple related tables."
                    },
                    {
                        id: "dbms_6",
                        front: "Indexing in Databases",
                        back: "Data structure improving query performance. B+ trees for range queries. Hash indexes for equality. Bitmap indexes for low-cardinality data. Trade storage for speed.",
                        difficulty: "medium",
                        explanation: "Indexes speed up data retrieval at cost of storage and update overhead."
                    },
                    {
                        id: "dbms_7",
                        front: "Transaction Isolation Levels",
                        back: "READ UNCOMMITTED: dirty reads possible. READ COMMITTED: prevents dirty reads. REPEATABLE READ: prevents non-repeatable reads. SERIALIZABLE: prevents phantom reads.",
                        difficulty: "hard",
                        explanation: "Isolation levels balance concurrency with data consistency."
                    },
                    {
                        id: "dbms_8",
                        front: "ER Model Components",
                        back: "Entity: real-world object. Attribute: entity property. Relationship: association between entities. Cardinality: one-to-one, one-to-many, many-to-many.",
                        difficulty: "easy",
                        explanation: "ER model provides conceptual database design framework."
                    },
                    {
                        id: "dbms_9",
                        front: "Concurrency Control",
                        back: "Lock-based: shared/exclusive locks, two-phase locking. Timestamp-based: transaction timestamps. Optimistic: validate at commit time. Prevents data inconsistency.",
                        difficulty: "hard",
                        explanation: "Concurrency control manages simultaneous database access."
                    },
                    {
                        id: "dbms_10",
                        front: "Database Recovery",
                        back: "Log-based recovery: redo/undo operations using transaction logs. Checkpoint: consistent database state. Shadow paging: maintain old and new page versions.",
                        difficulty: "hard",
                        explanation: "Recovery mechanisms restore database after failures."
                    },
                    {
                        id: "dbms_11",
                        front: "Query Optimization",
                        back: "Cost-based: estimates execution cost of different plans. Rule-based: applies heuristics. Statistics help estimate selectivity. Query execution plans show access paths.",
                        difficulty: "hard",
                        explanation: "Optimization finds efficient ways to execute queries."
                    },
                    {
                        id: "dbms_12",
                        front: "Data Warehouse vs Database",
                        back: "Database: OLTP, current data, normalized, frequent updates. Data Warehouse: OLAP, historical data, denormalized, periodic updates, analytical queries.",
                        difficulty: "medium",
                        explanation: "Different systems serve different purposes in data management."
                    },
                    {
                        id: "dbms_13",
                        front: "NoSQL Database Types",
                        back: "Document: JSON-like documents (MongoDB). Key-Value: simple key-value pairs (Redis). Column-family: wide columns (Cassandra). Graph: nodes and edges (Neo4j).",
                        difficulty: "medium",
                        explanation: "NoSQL databases handle different data models and scale patterns."
                    },
                    {
                        id: "dbms_14",
                        front: "CAP Theorem",
                        back: "Consistency, Availability, Partition tolerance: can only guarantee two of three in distributed systems. Different databases make different trade-offs.",
                        difficulty: "hard",
                        explanation: "CAP theorem guides distributed database design decisions."
                    },
                    {
                        id: "dbms_15",
                        front: "Database Security",
                        back: "Authentication: verify user identity. Authorization: control access permissions. Encryption: protect data confidentiality. Auditing: track database access.",
                        difficulty: "medium",
                        explanation: "Security protects sensitive data from unauthorized access."
                    },
                    {
                        id: "dbms_16",
                        front: "Distributed Databases",
                        back: "Data stored across multiple locations. Challenges: distributed transactions, data fragmentation, replication, network failures. Benefits: scalability, availability.",
                        difficulty: "hard",
                        explanation: "Distribution provides scalability but adds complexity."
                    },
                    {
                        id: "dbms_17",
                        front: "Data Mining Techniques",
                        back: "Classification: predict categories. Clustering: group similar items. Association rules: find relationships. Regression: predict continuous values. Pattern discovery.",
                        difficulty: "medium",
                        explanation: "Data mining extracts knowledge from large datasets."
                    },
                    {
                        id: "dbms_18",
                        front: "Database Triggers",
                        back: "Special procedures automatically executed in response to database events. BEFORE/AFTER INSERT/UPDATE/DELETE. Used for auditing, validation, automatic calculations.",
                        difficulty: "medium",
                        explanation: "Triggers enforce business rules automatically."
                    },
                    {
                        id: "dbms_19",
                        front: "Stored Procedures vs Functions",
                        back: "Stored Procedures: can modify data, no return value requirement. Functions: must return value, typically read-only. Both provide code reusability and performance benefits.",
                        difficulty: "medium",
                        explanation: "Both encapsulate database logic for reuse."
                    },
                    {
                        id: "dbms_20",
                        front: "Big Data Technologies",
                        back: "Hadoop: distributed storage and processing. MapReduce: parallel processing model. Spark: in-memory processing. HDFS: distributed file system. Handle volume, velocity, variety.",
                        difficulty: "hard",
                        explanation: "Big Data tools handle data beyond traditional database capabilities."
                    }
                ]
            },
            ai: {
                name: "Artificial Intelligence",
                icon: "fas fa-robot",
                color: "#F59E0B",
                description: "Making machines intelligent and capable of reasoning",
                flashcards: [
                    {
                        id: "ai_1",
                        front: "What is Artificial Intelligence?",
                        back: "Field of computer science creating systems that can perform tasks typically requiring human intelligence: learning, reasoning, perception, understanding language.",
                        difficulty: "easy",
                        explanation: "AI aims to create machines that think and act intelligently."
                    },
                    {
                        id: "ai_2",
                        front: "Types of AI",
                        back: "Narrow AI: specific tasks (current systems). General AI: human-level across domains (future goal). Super AI: exceeds human intelligence (theoretical).",
                        difficulty: "easy",
                        explanation: "AI capabilities range from narrow specialization to general intelligence."
                    },
                    {
                        id: "ai_3",
                        front: "Search Algorithms",
                        back: "Uninformed: BFS, DFS, uniform-cost. Informed: A*, greedy best-first. Local: hill-climbing, simulated annealing. Used for problem-solving and pathfinding.",
                        difficulty: "medium",
                        explanation: "Search algorithms find solutions in problem spaces."
                    },
                    {
                        id: "ai_4",
                        front: "Knowledge Representation",
                        back: "Semantic networks: nodes and links. Frames: structured objects with slots. Logic: propositional and predicate. Ontologies: formal domain descriptions.",
                        difficulty: "medium",
                        explanation: "Knowledge representation stores and organizes information for reasoning."
                    },
                    {
                        id: "ai_5",
                        front: "Expert Systems",
                        back: "AI programs mimicking human expert decision-making. Knowledge base contains domain facts and rules. Inference engine applies reasoning. Explanation facility justifies conclusions.",
                        difficulty: "medium",
                        explanation: "Expert systems capture and apply human expertise."
                    },
                    {
                        id: "ai_6",
                        front: "Natural Language Processing",
                        back: "Enables computers to understand, interpret, and generate human language. Tokenization, parsing, semantic analysis, discourse processing. Applications: translation, chatbots, sentiment analysis.",
                        difficulty: "medium",
                        explanation: "NLP bridges human language and computer understanding."
                    },
                    {
                        id: "ai_7",
                        front: "Computer Vision",
                        back: "Enables computers to interpret visual information. Image preprocessing, feature extraction, object detection, recognition. Convolution neural networks excel at visual tasks.",
                        difficulty: "hard",
                        explanation: "Computer vision gives machines the ability to 'see' and understand images."
                    },
                    {
                        id: "ai_8",
                        front: "Machine Learning in AI",
                        back: "Subset of AI focused on learning from data. Supervised: learns from labeled examples. Unsupervised: finds patterns. Reinforcement: learns from rewards/penalties.",
                        difficulty: "medium",
                        explanation: "ML enables AI systems to improve through experience."
                    },
                    {
                        id: "ai_9",
                        front: "Neural Networks",
                        back: "Computing systems inspired by biological neural networks. Interconnected nodes process information. Deep learning uses many layers. Backpropagation trains the network.",
                        difficulty: "hard",
                        explanation: "Neural networks mimic brain structure for pattern recognition."
                    },
                    {
                        id: "ai_10",
                        front: "Fuzzy Logic",
                        back: "Reasoning with approximate rather than exact values. Degrees of truth between 0 and 1. Handles uncertainty and imprecision. Used in control systems and decision-making.",
                        difficulty: "hard",
                        explanation: "Fuzzy logic handles uncertainty and partial truths."
                    },
                    {
                        id: "ai_11",
                        front: "Genetic Algorithms",
                        back: "Optimization technique inspired by natural evolution. Population of solutions evolves through selection, crossover, and mutation. Finds good solutions to complex problems.",
                        difficulty: "hard",
                        explanation: "Genetic algorithms evolve solutions through simulated evolution."
                    },
                    {
                        id: "ai_12",
                        front: "Planning in AI",
                        back: "Determining sequence of actions to achieve goals. STRIPS representation: preconditions, effects. Forward/backward chaining. Hierarchical and conditional planning.",
                        difficulty: "hard",
                        explanation: "Planning systems determine how to achieve desired goals."
                    },
                    {
                        id: "ai_13",
                        front: "Reasoning Systems",
                        back: "Deductive: conclusions follow logically from premises. Inductive: generalizes from specific examples. Abductive: finds best explanation for observations.",
                        difficulty: "medium",
                        explanation: "Different reasoning types serve different cognitive functions."
                    },
                    {
                        id: "ai_14",
                        front: "Constraint Satisfaction Problems",
                        back: "Problems defined by variables, domains, and constraints. Backtracking search with consistency checking. Arc consistency, forward checking optimization techniques.",
                        difficulty: "hard",
                        explanation: "CSPs model problems with restrictions on variable assignments."
                    },
                    {
                        id: "ai_15",
                        front: "Game Playing AI",
                        back: "Minimax algorithm: assumes optimal opponent play. Alpha-beta pruning: reduces search space. Monte Carlo Tree Search: simulation-based evaluation.",
                        difficulty: "hard",
                        explanation: "Game AI combines search and evaluation in adversarial settings."
                    },
                    {
                        id: "ai_16",
                        front: "Robotics and AI",
                        back: "Combines AI with physical systems. Perception: sensors and vision. Planning: path and motion planning. Control: actuators and feedback. Behavior-based robotics.",
                        difficulty: "medium",
                        explanation: "Robotics applies AI to physical world interaction."
                    },
                    {
                        id: "ai_17",
                        front: "Multi-Agent Systems",
                        back: "Multiple AI agents interacting in shared environment. Cooperation, competition, coordination. Distributed problem solving. Nash equilibrium in game theory.",
                        difficulty: "hard",
                        explanation: "Multi-agent systems model complex interactions between intelligent entities."
                    },
                    {
                        id: "ai_18",
                        front: "Uncertainty in AI",
                        back: "Probability theory handles uncertainty. Bayesian networks represent probabilistic relationships. Decision theory combines probability with utility for optimal decisions.",
                        difficulty: "hard",
                        explanation: "AI systems must handle incomplete and uncertain information."
                    },
                    {
                        id: "ai_19",
                        front: "AI Ethics and Safety",
                        back: "Bias in algorithms and data. Privacy and surveillance concerns. Job displacement. Autonomous weapons. Need for fairness, accountability, transparency.",
                        difficulty: "medium",
                        explanation: "AI development must consider societal impact and ethical implications."
                    },
                    {
                        id: "ai_20",
                        front: "Future of AI",
                        back: "Artificial General Intelligence (AGI): human-level AI across domains. Quantum AI: quantum computing for AI. Brain-computer interfaces. Explainable AI for transparency.",
                        difficulty: "medium",
                        explanation: "AI continues evolving toward more powerful and accessible systems."
                    }
                ]
            },
            cloud: {
                name: "Cloud Computing",
                icon: "fas fa-cloud",
                color: "#06B6D4",
                description: "On-demand computing resources and services over internet",
                flashcards: [
                    {
                        id: "cloud_1",
                        front: "What is Cloud Computing?",
                        back: "Delivery of computing services over the internet including servers, storage, databases, networking, software. Pay-as-you-go model with on-demand resource provisioning.",
                        difficulty: "easy",
                        explanation: "Cloud computing provides flexible, scalable computing resources over the internet."
                    },
                    {
                        id: "cloud_2",
                        front: "Cloud Service Models",
                        back: "IaaS: Infrastructure as a Service (virtual machines, storage). PaaS: Platform as a Service (development platforms). SaaS: Software as a Service (applications).",
                        difficulty: "easy",
                        explanation: "Different service models provide different levels of abstraction."
                    },
                    {
                        id: "cloud_3",
                        front: "Cloud Deployment Models",
                        back: "Public: shared infrastructure, cost-effective. Private: dedicated infrastructure, more control. Hybrid: combination of public and private. Multi-cloud: multiple providers.",
                        difficulty: "medium",
                        explanation: "Deployment models balance cost, control, and security needs."
                    },
                    {
                        id: "cloud_4",
                        front: "Virtualization Technologies",
                        back: "Hypervisors: Type 1 (bare-metal), Type 2 (hosted). Containers: lightweight, share OS kernel (Docker). Virtual machines: full OS isolation. Enables resource sharing.",
                        difficulty: "medium",
                        explanation: "Virtualization is the foundation technology enabling cloud computing."
                    },
                    {
                        id: "cloud_5",
                        front: "Auto Scaling",
                        back: "Automatically adjusts computing resources based on demand. Horizontal scaling: add/remove instances. Vertical scaling: increase/decrease instance size. Reduces costs and improves performance.",
                        difficulty: "medium",
                        explanation: "Auto scaling ensures optimal resource allocation."
                    },
                    {
                        id: "cloud_6",
                        front: "Load Balancing",
                        back: "Distributes incoming traffic across multiple servers. Round-robin, weighted, least connections algorithms. Health checks ensure traffic goes to healthy instances.",
                        difficulty: "medium",
                        explanation: "Load balancing improves availability and performance."
                    },
                    {
                        id: "cloud_7",
                        front: "Cloud Storage Types",
                        back: "Object storage: scalable, API-driven (S3). Block storage: high-performance, attached to instances (EBS). File storage: shared network file systems (EFS).",
                        difficulty: "medium",
                        explanation: "Different storage types serve different application needs."
                    },
                    {
                        id: "cloud_8",
                        front: "Content Delivery Networks (CDN)",
                        back: "Geographically distributed servers caching content closer to users. Reduces latency, improves performance, handles traffic spikes. Edge locations worldwide.",
                        difficulty: "medium",
                        explanation: "CDNs improve user experience through geographic distribution."
                    },
                    {
                        id: "cloud_9",
                        front: "Microservices Architecture",
                        back: "Application built as collection of loosely coupled services. Each service independently deployable and scalable. Communication through APIs. Containerization enables microservices.",
                        difficulty: "hard",
                        explanation: "Microservices enable flexible, scalable application architectures."
                    },
                    {
                        id: "cloud_10",
                        front: "DevOps and Cloud",
                        back: "Integration of development and operations. Continuous Integration/Continuous Deployment (CI/CD). Infrastructure as Code (IaC). Automation and monitoring.",
                        difficulty: "hard",
                        explanation: "DevOps practices accelerate software delivery in cloud environments."
                    },
                    {
                        id: "cloud_11",
                        front: "Cloud Security",
                        back: "Shared responsibility model: cloud provider secures infrastructure, customer secures applications/data. Identity and Access Management (IAM), encryption, network security.",
                        difficulty: "hard",
                        explanation: "Cloud security requires understanding shared responsibilities."
                    },
                    {
                        id: "cloud_12",
                        front: "Serverless Computing",
                        back: "Code execution without managing servers. Functions as a Service (FaaS). Auto-scaling, pay-per-execution. AWS Lambda, Azure Functions, Google Cloud Functions.",
                        difficulty: "hard",
                        explanation: "Serverless removes infrastructure management from developers."
                    },
                    {
                        id: "cloud_13",
                        front: "Database in Cloud",
                        back: "Managed database services: automated backups, scaling, patching. SQL (RDS, Cloud SQL) and NoSQL (DynamoDB, Cosmos DB) options. Database migration strategies.",
                        difficulty: "medium",
                        explanation: "Cloud databases provide managed, scalable data storage solutions."
                    },
                    {
                        id: "cloud_14",
                        front: "Cloud Monitoring",
                        back: "Tracks application and infrastructure performance. Metrics, logs, traces. CloudWatch, Azure Monitor, Stackdriver. Alerts and dashboards for operational insights.",
                        difficulty: "medium",
                        explanation: "Monitoring ensures cloud applications run smoothly."
                    },
                    {
                        id: "cloud_15",
                        front: "Disaster Recovery",
                        back: "Strategies for business continuity. RTO (Recovery Time Objective), RPO (Recovery Point Objective). Backup strategies, geo-replication, failover mechanisms.",
                        difficulty: "hard",
                        explanation: "Cloud enables flexible, cost-effective disaster recovery solutions."
                    },
                    {
                        id: "cloud_16",
                        front: "Edge Computing",
                        back: "Processing data closer to source rather than centralized cloud. Reduces latency, bandwidth usage. IoT devices, autonomous vehicles, real-time applications.",
                        difficulty: "hard",
                        explanation: "Edge computing brings computation closer to data sources."
                    },
                    {
                        id: "cloud_17",
                        front: "Cloud Cost Optimization",
                        back: "Right-sizing instances, reserved instances, spot instances. Automated resource management, usage monitoring. Cost allocation and budgeting tools.",
                        difficulty: "medium",
                        explanation: "Cost optimization ensures efficient cloud resource utilization."
                    },
                    {
                        id: "cloud_18",
                        front: "API Management",
                        back: "Centralized platform for creating, deploying, monitoring APIs. Rate limiting, authentication, analytics. API Gateway services provide unified entry point.",
                        difficulty: "medium",
                        explanation: "API management enables secure, scalable service interactions."
                    },
                    {
                        id: "cloud_19",
                        front: "Cloud Migration Strategies",
                        back: "Rehost (lift-and-shift), replatform (lift-tinker-shift), refactor (re-architect), retire, retain. Assessment, planning, execution phases.",
                        difficulty: "hard",
                        explanation: "Migration strategies balance effort, risk, and benefits."
                    },
                    {
                        id: "cloud_20",
                        front: "Emerging Cloud Trends",
                        back: "AI/ML as a Service, quantum computing cloud services, sustainability in cloud computing, multi-cloud management platforms. Cloud-native development practices.",
                        difficulty: "medium",
                        explanation: "Cloud computing continues evolving with new technologies and practices."
                    }
                ]
            }
        };

        // Initialize quiz questions for all subjects
        this.quizQuestions = this.generateAllQuizzes();
        
        // App state
        this.currentSection = 'home';
        this.currentSubject = null;
        this.currentFlashcards = null;
        this.currentCardIndex = 0;
        this.currentQuiz = null;
        this.quizTimer = null;
        
        // User progress tracking
        this.userStats = this.loadUserStats();
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    generateAllQuizzes() {
        return {
            dsa: [
                {
                    id: "dsa_q1",
                    question: "What is the time complexity of accessing an element by index in an array?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    correct: 0,
                    difficulty: "easy",
                    explanation: "Arrays provide O(1) access because elements are stored in contiguous memory locations."
                },
                {
                    id: "dsa_q2",
                    question: "Which data structure follows LIFO principle?",
                    options: ["Queue", "Stack", "Array", "Linked List"],
                    correct: 1,
                    difficulty: "easy",
                    explanation: "Stack follows Last In First Out (LIFO) principle."
                },
                {
                    id: "dsa_q3",
                    question: "What is the average time complexity of searching in a hash table?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                    correct: 0,
                    difficulty: "medium",
                    explanation: "Hash tables provide O(1) average case search time with good hash function."
                },
                {
                    id: "dsa_q4",
                    question: "Which traversal of BST gives elements in sorted order?",
                    options: ["Preorder", "Inorder", "Postorder", "Level-order"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Inorder traversal of BST visits nodes in ascending order."
                },
                {
                    id: "dsa_q5",
                    question: "What is the space complexity of merge sort?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    correct: 2,
                    difficulty: "medium",
                    explanation: "Merge sort requires O(n) additional space for merging."
                },
                {
                    id: "dsa_q6",
                    question: "Which algorithm is used to find shortest path in unweighted graph?",
                    options: ["DFS", "BFS", "Dijkstra", "Floyd-Warshall"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "BFS finds shortest path in unweighted graphs."
                },
                {
                    id: "dsa_q7",
                    question: "What is the worst-case time complexity of QuickSort?",
                    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "QuickSort worst case is O(n²) when pivot is always smallest/largest."
                },
                {
                    id: "dsa_q8",
                    question: "Which condition is NOT required for deadlock?",
                    options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "No Preemption (not Preemption) is required for deadlock."
                },
                {
                    id: "dsa_q9",
                    question: "What is the time complexity of building a heap from n elements?",
                    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "Building heap from array takes O(n) time using bottom-up approach."
                },
                {
                    id: "dsa_q10",
                    question: "Which data structure is best for implementing LRU cache?",
                    options: ["Array", "Linked List", "Hash Map + Doubly Linked List", "Stack"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "LRU cache uses hash map for O(1) access and doubly linked list for O(1) updates."
                }
            ],
            ml: [
                {
                    id: "ml_q1",
                    question: "What does supervised learning require?",
                    options: ["Labeled data", "Unlabeled data", "Reinforcement signals", "Random data"],
                    correct: 0,
                    difficulty: "easy",
                    explanation: "Supervised learning requires labeled data to learn input-output relationships."
                },
                {
                    id: "ml_q2",
                    question: "Which is a classification algorithm?",
                    options: ["Linear Regression", "K-means", "Logistic Regression", "PCA"],
                    correct: 2,
                    difficulty: "easy",
                    explanation: "Logistic Regression is used for classification tasks."
                },
                {
                    id: "ml_q3",
                    question: "What does overfitting mean?",
                    options: ["Model is too simple", "Model performs well on training data but poorly on test data", "Model has high bias", "Model converges slowly"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Overfitting occurs when model learns training data too well, losing generalization."
                },
                {
                    id: "ml_q4",
                    question: "What is the purpose of cross-validation?",
                    options: ["Feature selection", "Model evaluation", "Data cleaning", "Dimensionality reduction"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Cross-validation provides robust estimate of model performance."
                },
                {
                    id: "ml_q5",
                    question: "Which metric is best for imbalanced datasets?",
                    options: ["Accuracy", "F1-score", "MAE", "R²"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "F1-score balances precision and recall, better for imbalanced data."
                },
                {
                    id: "ml_q6",
                    question: "What does L1 regularization promote?",
                    options: ["Larger weights", "Sparsity", "Overfitting", "Faster convergence"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "L1 regularization promotes sparsity by driving some weights to zero."
                },
                {
                    id: "ml_q7",
                    question: "Which algorithm uses kernel trick?",
                    options: ["Linear Regression", "Decision Tree", "SVM", "K-means"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "SVM uses kernel trick to handle non-linearly separable data."
                },
                {
                    id: "ml_q8",
                    question: "What is the vanishing gradient problem?",
                    options: ["Gradients become very large", "Gradients become very small", "Learning rate is too high", "Model converges too fast"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Vanishing gradient occurs when gradients become too small to effectively train deep networks."
                },
                {
                    id: "ml_q9",
                    question: "Which technique reduces dimensionality while preserving variance?",
                    options: ["K-means", "PCA", "SVM", "Random Forest"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "PCA finds principal components that preserve maximum variance."
                },
                {
                    id: "ml_q10",
                    question: "What is ensemble learning?",
                    options: ["Using single model", "Combining multiple models", "Feature engineering", "Data preprocessing"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Ensemble learning combines multiple models for better performance."
                }
            ],
            os: [
                {
                    id: "os_q1",
                    question: "What is the main function of an operating system?",
                    options: ["Run applications", "Manage hardware resources", "Provide user interface", "All of the above"],
                    correct: 3,
                    difficulty: "easy",
                    explanation: "OS manages hardware, runs applications, and provides user interface."
                },
                {
                    id: "os_q2",
                    question: "Which scheduling algorithm can cause starvation?",
                    options: ["FCFS", "Round Robin", "Priority Scheduling", "SJF"],
                    correct: 2,
                    difficulty: "easy",
                    explanation: "Priority scheduling can cause low-priority processes to starve."
                },
                {
                    id: "os_q3",
                    question: "What is a process control block (PCB)?",
                    options: ["Hardware component", "Data structure containing process information", "Scheduling algorithm", "Memory management unit"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "PCB stores process state, program counter, registers, and other process information."
                },
                {
                    id: "os_q4",
                    question: "Which memory allocation strategy minimizes external fragmentation?",
                    options: ["First Fit", "Best Fit", "Worst Fit", "Paging"],
                    correct: 3,
                    difficulty: "medium",
                    explanation: "Paging eliminates external fragmentation by using fixed-size blocks."
                },
                {
                    id: "os_q5",
                    question: "What is thrashing in virtual memory?",
                    options: ["Excessive disk I/O due to page faults", "Memory leak", "Process termination", "Cache miss"],
                    correct: 0,
                    difficulty: "medium",
                    explanation: "Thrashing occurs when system spends more time paging than executing."
                },
                {
                    id: "os_q6",
                    question: "Which IPC mechanism is fastest?",
                    options: ["Pipes", "Message Queues", "Shared Memory", "Sockets"],
                    correct: 2,
                    difficulty: "medium",
                    explanation: "Shared memory is fastest as it avoids copying data."
                },
                {
                    id: "os_q7",
                    question: "What are the conditions for deadlock?",
                    options: ["Mutual exclusion only", "Hold and wait only", "All four Coffman conditions", "No preemption only"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "All four Coffman conditions must be present for deadlock."
                },
                {
                    id: "os_q8",
                    question: "Which page replacement algorithm is optimal?",
                    options: ["FIFO", "LRU", "Optimal (Belady's)", "Clock"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "Optimal algorithm replaces page that won't be used for longest time."
                },
                {
                    id: "os_q9",
                    question: "What is the purpose of semaphores?",
                    options: ["Memory management", "Process synchronization", "File management", "I/O control"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Semaphores provide synchronization and mutual exclusion."
                },
                {
                    id: "os_q10",
                    question: "Which file allocation method allows fast random access?",
                    options: ["Contiguous", "Linked", "Indexed", "Both A and C"],
                    correct: 3,
                    difficulty: "hard",
                    explanation: "Contiguous and indexed allocation both provide fast random access."
                }
            ],
            cn: [
                {
                    id: "cn_q1",
                    question: "How many layers are in the OSI model?",
                    options: ["5", "6", "7", "8"],
                    correct: 2,
                    difficulty: "easy",
                    explanation: "OSI model has 7 layers from Physical to Application."
                },
                {
                    id: "cn_q2",
                    question: "Which protocol is connectionless?",
                    options: ["TCP", "UDP", "FTP", "HTTP"],
                    correct: 1,
                    difficulty: "easy",
                    explanation: "UDP is connectionless and provides no reliability guarantees."
                },
                {
                    id: "cn_q3",
                    question: "What does NAT stand for?",
                    options: ["Network Address Translation", "Network Access Terminal", "Node Address Table", "Network Authentication Token"],
                    correct: 0,
                    difficulty: "medium",
                    explanation: "NAT translates private IP addresses to public IP addresses."
                },
                {
                    id: "cn_q4",
                    question: "Which routing algorithm uses distance vector?",
                    options: ["OSPF", "RIP", "BGP", "IS-IS"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "RIP (Routing Information Protocol) uses distance vector algorithm."
                },
                {
                    id: "cn_q5",
                    question: "What is the purpose of ARP?",
                    options: ["Route packets", "Resolve IP to MAC address", "Encrypt data", "Compress data"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "ARP resolves IP addresses to MAC addresses in local network."
                },
                {
                    id: "cn_q6",
                    question: "Which layer handles error detection and correction?",
                    options: ["Physical", "Data Link", "Network", "Transport"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Data Link layer provides error detection and correction."
                },
                {
                    id: "cn_q7",
                    question: "What is the maximum segment size in Ethernet?",
                    options: ["100m", "185m", "500m", "1000m"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "Ethernet 10Base5 has maximum segment length of 500 meters."
                },
                {
                    id: "cn_q8",
                    question: "Which congestion control algorithm does TCP use?",
                    options: ["Constant window", "Linear increase", "AIMD", "Exponential backoff"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "TCP uses Additive Increase Multiplicative Decrease (AIMD) for congestion control."
                },
                {
                    id: "cn_q9",
                    question: "What is the sliding window protocol used for?",
                    options: ["Routing", "Flow control", "Error detection", "Encryption"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Sliding window protocol provides flow control and reliable data transfer."
                },
                {
                    id: "cn_q10",
                    question: "Which protocol is used for network management?",
                    options: ["SNMP", "SMTP", "DHCP", "DNS"],
                    correct: 0,
                    difficulty: "hard",
                    explanation: "SNMP (Simple Network Management Protocol) is used for network management."
                }
            ],
            dbms: [
                {
                    id: "dbms_q1",
                    question: "What does ACID stand for in databases?",
                    options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Data", "Automatic, Concurrent, Independent, Distributed", "Abstract, Concrete, Integrated, Dynamic"],
                    correct: 0,
                    difficulty: "easy",
                    explanation: "ACID properties ensure reliable database transactions."
                },
                {
                    id: "dbms_q2",
                    question: "Which normal form eliminates partial dependencies?",
                    options: ["1NF", "2NF", "3NF", "BCNF"],
                    correct: 1,
                    difficulty: "easy",
                    explanation: "Second Normal Form (2NF) eliminates partial functional dependencies."
                },
                {
                    id: "dbms_q3",
                    question: "What type of join returns all records from both tables?",
                    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
                    correct: 3,
                    difficulty: "medium",
                    explanation: "FULL OUTER JOIN returns all records from both tables."
                },
                {
                    id: "dbms_q4",
                    question: "Which isolation level prevents dirty reads?",
                    options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "READ COMMITTED prevents dirty reads by only reading committed data."
                },
                {
                    id: "dbms_q5",
                    question: "What is the purpose of indexing?",
                    options: ["Data backup", "Query optimization", "Data compression", "Security"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Indexes speed up query execution by providing fast data access paths."
                },
                {
                    id: "dbms_q6",
                    question: "Which type of NoSQL database is MongoDB?",
                    options: ["Key-Value", "Document", "Column-family", "Graph"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "MongoDB is a document-oriented NoSQL database."
                },
                {
                    id: "dbms_q7",
                    question: "What does the CAP theorem state?",
                    options: ["Can achieve Consistency, Availability, and Partition tolerance simultaneously", "Can only guarantee two of Consistency, Availability, Partition tolerance", "Must choose one of Consistency, Availability, Partition tolerance", "None of the above"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "CAP theorem states you can only guarantee two of the three properties."
                },
                {
                    id: "dbms_q8",
                    question: "Which concurrency control uses timestamps?",
                    options: ["Two-phase locking", "Timestamp ordering", "Optimistic concurrency control", "Multiversion concurrency control"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Timestamp ordering protocol uses transaction timestamps for concurrency control."
                },
                {
                    id: "dbms_q9",
                    question: "What is a phantom read?",
                    options: ["Reading uncommitted data", "Reading data that gets modified by another transaction", "Reading additional rows that appear due to another transaction", "Reading deleted data"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "Phantom read occurs when additional rows appear in result set due to concurrent insertions."
                },
                {
                    id: "dbms_q10",
                    question: "Which recovery technique uses write-ahead logging?",
                    options: ["Shadow paging", "ARIES", "Checkpoint recovery", "All of the above"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "ARIES recovery algorithm uses write-ahead logging protocol."
                }
            ],
            ai: [
                {
                    id: "ai_q1",
                    question: "What is the goal of artificial intelligence?",
                    options: ["Replace humans", "Create intelligent machines", "Automate everything", "Process big data"],
                    correct: 1,
                    difficulty: "easy",
                    explanation: "AI aims to create machines that can perform tasks requiring intelligence."
                },
                {
                    id: "ai_q2",
                    question: "Which search algorithm guarantees optimal solution?",
                    options: ["DFS", "BFS", "A*", "Greedy"],
                    correct: 2,
                    difficulty: "easy",
                    explanation: "A* search guarantees optimal solution with admissible heuristic."
                },
                {
                    id: "ai_q3",
                    question: "What is the purpose of the Turing Test?",
                    options: ["Measure processing speed", "Test machine intelligence", "Evaluate algorithms", "Benchmark hardware"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Turing Test evaluates machine's ability to exhibit intelligent behavior."
                },
                {
                    id: "ai_q4",
                    question: "Which type of learning uses rewards and punishments?",
                    options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Semi-supervised learning"],
                    correct: 2,
                    difficulty: "medium",
                    explanation: "Reinforcement learning uses rewards and punishments to learn optimal behavior."
                },
                {
                    id: "ai_q5",
                    question: "What is natural language processing?",
                    options: ["Processing natural resources", "Understanding human language", "Programming in natural syntax", "Processing biological data"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "NLP enables computers to understand and process human language."
                },
                {
                    id: "ai_q6",
                    question: "Which technique is used in expert systems for reasoning?",
                    options: ["Neural networks", "Genetic algorithms", "Rule-based inference", "Deep learning"],
                    correct: 2,
                    difficulty: "medium",
                    explanation: "Expert systems use rule-based inference engines for reasoning."
                },
                {
                    id: "ai_q7",
                    question: "What is the frame problem in AI?",
                    options: ["Hardware limitations", "Difficulty in representing what doesn't change", "Programming frameworks", "Visual perception"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Frame problem deals with representing what remains unchanged in dynamic environments."
                },
                {
                    id: "ai_q8",
                    question: "Which algorithm is used in genetic programming?",
                    options: ["Gradient descent", "Backpropagation", "Natural selection simulation", "Linear programming"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "Genetic programming uses evolutionary algorithms simulating natural selection."
                },
                {
                    id: "ai_q9",
                    question: "What is the Chinese Room argument about?",
                    options: ["Computer hardware", "Machine consciousness", "Programming languages", "Database systems"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Chinese Room argument questions whether machines can truly understand or just simulate understanding."
                },
                {
                    id: "ai_q10",
                    question: "What is fuzzy logic used for?",
                    options: ["Binary decisions", "Handling uncertainty", "Network protocols", "File systems"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "Fuzzy logic handles uncertainty and partial truths in reasoning systems."
                }
            ],
            cloud: [
                {
                    id: "cloud_q1",
                    question: "What are the main characteristics of cloud computing?",
                    options: ["On-demand self-service", "Broad network access", "Resource pooling", "All of the above"],
                    correct: 3,
                    difficulty: "easy",
                    explanation: "Cloud computing has five essential characteristics including all listed options."
                },
                {
                    id: "cloud_q2",
                    question: "Which is NOT a cloud service model?",
                    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
                    correct: 3,
                    difficulty: "easy",
                    explanation: "IaaS, PaaS, and SaaS are the three main cloud service models."
                },
                {
                    id: "cloud_q3",
                    question: "What is auto-scaling in cloud computing?",
                    options: ["Manual resource adjustment", "Automatic resource adjustment based on demand", "Fixed resource allocation", "Random resource distribution"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Auto-scaling automatically adjusts resources based on demand patterns."
                },
                {
                    id: "cloud_q4",
                    question: "Which deployment model offers the highest security?",
                    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "Private cloud offers highest security as resources are dedicated to single organization."
                },
                {
                    id: "cloud_q5",
                    question: "What is serverless computing?",
                    options: ["Computing without servers", "Computing with hidden servers", "Event-driven computing without server management", "Peer-to-peer computing"],
                    correct: 2,
                    difficulty: "medium",
                    explanation: "Serverless computing runs code without managing underlying servers."
                },
                {
                    id: "cloud_q6",
                    question: "What is the purpose of a Content Delivery Network (CDN)?",
                    options: ["Data storage", "Reduce latency by caching content closer to users", "Network security", "Load balancing"],
                    correct: 1,
                    difficulty: "medium",
                    explanation: "CDN improves performance by serving content from geographically distributed servers."
                },
                {
                    id: "cloud_q7",
                    question: "What is the shared responsibility model in cloud security?",
                    options: ["Cloud provider is responsible for everything", "Customer is responsible for everything", "Responsibilities are shared between provider and customer", "No one is responsible"],
                    correct: 2,
                    difficulty: "hard",
                    explanation: "Both cloud provider and customer have specific security responsibilities."
                },
                {
                    id: "cloud_q8",
                    question: "Which containerization technology is most popular?",
                    options: ["Docker", "LXC", "OpenVZ", "Podman"],
                    correct: 0,
                    difficulty: "hard",
                    explanation: "Docker is the most widely adopted containerization platform."
                },
                {
                    id: "cloud_q9",
                    question: "What is Infrastructure as Code (IaC)?",
                    options: ["Writing infrastructure manually", "Managing infrastructure through code", "Hardware programming", "Network coding"],
                    correct: 1,
                    difficulty: "hard",
                    explanation: "IaC manages and provisions infrastructure through machine-readable definition files."
                },
                {
                    id: "cloud_q10",
                    question: "What is edge computing?",
                    options: ["Computing at network edges", "Processing data closer to source", "Distributed computing model", "All of the above"],
                    correct: 3,
                    difficulty: "hard",
                    explanation: "Edge computing brings computation closer to data sources at network edges."
                }
            ]
        };
    }

    init() {
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupSubjectsGrid();
        this.setupFlashcardSystem();
        this.setupQuizSystem();
        this.setupModals();
        this.updateDashboard();
        
        console.log('EduMap+ initialized successfully with 7 subjects');
    }

    setupNavigation() {
        document.querySelectorAll('[data-section]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const section = element.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Back button handlers
        document.getElementById('backToSubjectFromCards').addEventListener('click', () => {
            this.navigateToSection('subject-detail');
        });

        document.getElementById('backToSubjectFromQuiz').addEventListener('click', () => {
            this.navigateToSection('subject-detail');
        });
        // Concept Map Option
document.getElementById("conceptMapOption").addEventListener("click", () => {
    const subject = app.currentSubject;
    app.navigateToSection("concept-map");
    app.generateConceptMap(subject);
});

    }

    navigateToSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
        }
        
        // Update navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        this.updateThemeIcon(currentTheme);
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-color-scheme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme);
        });
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('#themeToggle i');
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    setupSubjectsGrid() {
        const subjectsGrid = document.getElementById('subjectsGrid');
        
        const subjectsHTML = Object.entries(this.subjects).map(([key, subject]) => `
            <div class="subject-card" data-subject="${key}" style="--subject-color: ${subject.color}">
                <div class="subject-icon" style="background: ${subject.color}">
                    <i class="${subject.icon}"></i>
                </div>
                <h3>${subject.name}</h3>
                <p>${subject.description}</p>
                <div class="subject-stats">
                    <span>${subject.flashcards.length} flashcards</span>
                    <span>10 quiz questions</span>
                </div>
                <div class="subject-actions">
                    <button class="btn btn--sm btn--primary" onclick="app.openSubject('${key}')">
                        Study Now
                    </button>
                </div>
            </div>
        `).join('');
        
        subjectsGrid.innerHTML = subjectsHTML;
    }

    openSubject(subjectKey) {
        this.currentSubject = subjectKey;
        const subject = this.subjects[subjectKey];
        
        document.getElementById('subjectTitle').textContent = subject.name;
        document.getElementById('subjectDescription').textContent = subject.description;
        
        // Setup option handlers
        document.getElementById('flashcardsOption').onclick = () => {
            this.startFlashcards(subjectKey);
        };
        
        document.getElementById('quizOption').onclick = () => {
            this.startQuiz(subjectKey);
        };
        // ✅ Concept Map Option Click
document.getElementById("conceptMapOption").addEventListener("click", () => {
  const subject = app.currentSubject;
  app.navigateToSection("concept-map");
  app.generateConceptMap(subject);
});

// ✅ Back from Concept Map
document.getElementById("backToSubjectFromConceptMap").addEventListener("click", () => {
  app.navigateToSection("subject-detail");
});

        
        this.navigateToSection('subject-detail');
    }

    setupFlashcardSystem() {
        document.getElementById('flipCardBtn').addEventListener('click', () => {
            this.flipCard();
        });
        
        document.getElementById('prevCardBtn').addEventListener('click', () => {
            this.previousCard();
        });
        
        document.getElementById('nextCardBtn').addEventListener('click', () => {
            this.nextCard();
        });
    }

    startFlashcards(subjectKey) {
        const subject = this.subjects[subjectKey];
        this.currentFlashcards = {
            subject: subjectKey,
            cards: subject.flashcards,
            currentIndex: 0
        };
        
        document.getElementById('flashcardsTitle').textContent = `${subject.name} - Flashcards`;
        this.showCurrentCard();
        this.navigateToSection('flashcards');
        
        this.showToast(`Started studying ${subject.name} flashcards`, 'success');
    }

    showCurrentCard() {
        if (!this.currentFlashcards || this.currentFlashcards.cards.length === 0) return;
        
        const card = this.currentFlashcards.cards[this.currentFlashcards.currentIndex];
        const subject = this.subjects[this.currentFlashcards.subject];
        
        document.getElementById('cardCategory').textContent = subject.name;
        document.getElementById('cardCategoryBack').textContent = subject.name;
        document.getElementById('cardFront').textContent = card.front;
        document.getElementById('cardBack').innerHTML = card.back;
        document.getElementById('cardDifficulty').textContent = card.difficulty.toUpperCase();
        document.getElementById('cardDifficulty').className = `card-difficulty ${card.difficulty}`;
        document.getElementById('cardExplanation').textContent = card.explanation;
        
        // Reset flip state
        document.getElementById('flashcard').classList.remove('flipped');
        
        // Update counter
        document.getElementById('cardCounter').textContent = 
            `Card ${this.currentFlashcards.currentIndex + 1} of ${this.currentFlashcards.cards.length}`;
        
        // Update button states
        document.getElementById('prevCardBtn').disabled = this.currentFlashcards.currentIndex === 0;
        document.getElementById('nextCardBtn').disabled = 
            this.currentFlashcards.currentIndex === this.currentFlashcards.cards.length - 1;
        
        // Enable flip button
        document.getElementById('flipCardBtn').disabled = false;
    }

    flipCard() {
        document.getElementById('flashcard').classList.toggle('flipped');
    }

    previousCard() {
        if (this.currentFlashcards.currentIndex > 0) {
            this.currentFlashcards.currentIndex--;
            this.showCurrentCard();
        }
    }

    nextCard() {
        if (this.currentFlashcards.currentIndex < this.currentFlashcards.cards.length - 1) {
            this.currentFlashcards.currentIndex++;
            this.showCurrentCard();
            
            // Update stats
            this.userStats.cardsStudied++;
            this.saveUserStats();
        }
    }
    

generateConceptMap(subjectKey) {
  const container = document.getElementById("conceptMapContainer");
  container.innerHTML = "";

  const subjectName = this.subjects[subjectKey]?.name || subjectKey;
  document.getElementById("conceptMapTitle").innerText = `${subjectName} Concept Map`;

  // Define hierarchical structures for each subject
  const maps = {
    dsa: {
      title: "Data Structures and Algorithms",
      children: [
        {
          title: "Linear Data Structures",
          children: [
            {
              title: "Static Structures",
              children: [{ title: "Arrays" }]
            },
            {
              title: "Dynamic Structures",
              children: [
                { title: "Linked List" },
                { title: "Stack" },
                { title: "Queue" }
              ]
            }
          ]
        },
        {
          title: "Non-Linear Data Structures",
          children: [
            { title: "Tree" },
            { title: "Graph" },
            { title: "Heap" }
          ]
        },
        {
          title: "Algorithms",
          children: [
            { title: "Sorting Algorithms" },
            { title: "Searching Algorithms" },
            { title: "Graph Algorithms" }
          ]
        }
      ]
    },

    os: {
      title: "Operating System",
      children: [
        {
          title: "Process Management",
          children: [
            { title: "Scheduling" },
            { title: "Inter-Process Communication" },
            { title: "Deadlocks" }
          ]
        },
        {
          title: "Memory Management",
          children: [
            { title: "Paging" },
            { title: "Segmentation" },
            { title: "Virtual Memory" }
          ]
        },
        {
          title: "File System",
          children: [
            { title: "File Access Methods" },
            { title: "Directory Structure" }
          ]
        }
      ]
    },

    dbms: {
      title: "Database Management System",
      children: [
        {
          title: "Database Models",
          children: [
            { title: "Relational Model" },
            { title: "ER Model" },
            { title: "Hierarchical Model" }
          ]
        },
        {
          title: "SQL Concepts",
          children: [
            { title: "DDL" },
            { title: "DML" },
            { title: "DCL" },
            { title: "TCL" }
          ]
        },
        {
          title: "Normalization",
          children: [
            { title: "1NF" },
            { title: "2NF" },
            { title: "3NF" },
            { title: "BCNF" }
          ]
        },
        {
          title: "Transactions",
          children: [
            { title: "ACID Properties" },
            { title: "Concurrency Control" },
            { title: "Recovery" }
          ]
        }
      ]
    },

    cn: {
      title: "Computer Networks",
      children: [
        {
          title: "Network Models",
          children: [
            { title: "OSI Model" },
            { title: "TCP/IP Model" }
          ]
        },
        {
          title: "Network Layers",
          children: [
            {
              title: "Physical Layer",
              children: [{ title: "Transmission Media" }]
            },
            {
              title: "Data Link Layer",
              children: [
                { title: "Error Detection" },
                { title: "MAC Protocols" }
              ]
            },
            {
              title: "Network Layer",
              children: [{ title: "IP Routing" }]
            },
            {
              title: "Transport Layer",
              children: [{ title: "TCP & UDP" }]
            },
            {
              title: "Application Layer",
              children: [{ title: "HTTP" }, { title: "DNS" }]
            }
          ]
        }
      ]
    },

    ml: {
      title: "Machine Learning",
      children: [
        {
          title: "Learning Types",
          children: [
            { title: "Supervised Learning" },
            { title: "Unsupervised Learning" },
            { title: "Reinforcement Learning" }
          ]
        },
        {
          title: "Algorithms",
          children: [
            { title: "Linear Regression" },
            { title: "Decision Trees" },
            { title: "K-Means Clustering" },
            { title: "Neural Networks" }
          ]
        },
        {
          title: "Evaluation Metrics",
          children: [
            { title: "Accuracy" },
            { title: "Precision" },
            { title: "Recall" },
            { title: "F1 Score" }
          ]
        }
      ]
    },

    ai: {
      title: "Artificial Intelligence",
      children: [
        {
          title: "Search Algorithms",
          children: [
            { title: "BFS" },
            { title: "DFS" },
            { title: "A*" },
            { title: "Hill Climbing" }
          ]
        },
        {
          title: "Knowledge Representation",
          children: [
            { title: "Propositional Logic" },
            { title: "Predicate Logic" },
            { title: "Semantic Networks" }
          ]
        },
        {
          title: "Applications",
          children: [
            { title: "Expert Systems" },
            { title: "NLP" },
            { title: "Robotics" }
          ]
        }
      ]
    },

    cloud: {
      title: "Cloud Computing",
      children: [
        {
          title: "Service Models",
          children: [
            { title: "IaaS" },
            { title: "PaaS" },
            { title: "SaaS" }
          ]
        },
        {
          title: "Deployment Models",
          children: [
            { title: "Public Cloud" },
            { title: "Private Cloud" },
            { title: "Hybrid Cloud" }
          ]
        },
        {
          title: "Core Concepts",
          children: [
            { title: "Virtualization" },
            { title: "Load Balancing" },
            { title: "Scalability" }
          ]
        }
      ]
    }
  };

  const mapData = maps[subjectKey];
  if (!mapData) {
    container.innerHTML = `<p style="text-align:center;">Concept map for ${subjectName} is under construction.</p>`;
    return;
  }

  // Recursive function to create nested <ul> structure
  const buildTree = (node) => {
    if (!node.children) return `<li><a>${node.title}</a></li>`;
    return `
      <li>
        <a>${node.title}</a>
        <ul>
          ${node.children.map(child => buildTree(child)).join("")}
        </ul>
      </li>
    `;
  };

  // Create tree container
  const treeHTML = `
    <div class="tree">
      <ul>
        ${buildTree(mapData)}
      </ul>
    </div>
  `;

  container.innerHTML = treeHTML;
}

    setupQuizSystem() {
        document.getElementById('startQuizBtn').addEventListener('click', () => {
            if (this.currentSubject) {
                this.initializeQuiz(this.currentSubject);
            }
        });
    }

    startQuiz(subjectKey) {
        this.currentSubject = subjectKey;
        const subject = this.subjects[subjectKey];
        
        document.getElementById('quizTitle').textContent = `${subject.name} - Quiz`;
        document.getElementById('quizContent').innerHTML = `
            <div class="quiz-start-screen">
                <i class="fas fa-clipboard-question"></i>
                <h3>Ready to Test Your Knowledge?</h3>
                <p>This quiz contains 10 questions about ${subject.name}</p>
                <p>You have 10 minutes to complete the quiz</p>
                <button class="btn btn--primary btn--lg" onclick="app.initializeQuiz('${subjectKey}')">Start Quiz</button>
            </div>
        `;
        
        this.navigateToSection('quiz');
    }

    initializeQuiz(subjectKey) {
        const questions = this.quizQuestions[subjectKey];
        
        this.currentQuiz = {
            subject: subjectKey,
            questions: [...questions],
            currentQuestion: 0,
            answers: [],
            startTime: Date.now(),
            timeLimit: 10 * 60 * 1000
        };
        
        this.startQuizTimer();
        this.showQuestion();
        this.updateQuizProgress();
    }

    startQuizTimer() {
        const timerElement = document.getElementById('quizTimer');
        
        this.quizTimer = setInterval(() => {
            const elapsed = Date.now() - this.currentQuiz.startTime;
            const remaining = Math.max(0, this.currentQuiz.timeLimit - elapsed);
            
            if (remaining === 0) {
                this.endQuiz();
                return;
            }
            
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    showQuestion() {
        const question = this.currentQuiz.questions[this.currentQuiz.currentQuestion];
        
        document.getElementById('quizContent').innerHTML = `
            <div class="question-container">
                <h3 class="question-text">${question.question}</h3>
                <div class="question-options">
                    ${question.options.map((option, index) => `
                        <button class="option-button" onclick="app.selectAnswer(${index})">${option}</button>
                    `).join('')}
                </div>
                <div class="quiz-actions">
                    <button class="btn btn--secondary" onclick="app.previousQuestion()" 
                            ${this.currentQuiz.currentQuestion === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button class="btn btn--primary" id="nextQuizBtn" onclick="app.nextQuestion()" disabled>
                        ${this.currentQuiz.currentQuestion === this.currentQuiz.questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        `;
    }

    selectAnswer(answerIndex) {
        this.currentQuiz.answers[this.currentQuiz.currentQuestion] = answerIndex;
        
        // Update button styles
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            btn.classList.remove('selected');
            if (index === answerIndex) {
                btn.classList.add('selected');
            }
        });
        
        // Enable next button
        document.getElementById('nextQuizBtn').disabled = false;
    }

    nextQuestion() {
        if (this.currentQuiz.currentQuestion < this.currentQuiz.questions.length - 1) {
            this.currentQuiz.currentQuestion++;
            this.showQuestion();
            this.updateQuizProgress();
        } else {
            this.endQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuiz.currentQuestion > 0) {
            this.currentQuiz.currentQuestion--;
            this.showQuestion();
            this.updateQuizProgress();
        }
    }

    updateQuizProgress() {
        const progress = ((this.currentQuiz.currentQuestion + 1) / this.currentQuiz.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = 
            `Question ${this.currentQuiz.currentQuestion + 1} of ${this.currentQuiz.questions.length}`;
    }

    endQuiz() {
        if (this.quizTimer) {
            clearInterval(this.quizTimer);
        }
        
        const results = this.calculateResults();
        this.showResults(results);
        
        // Update stats
        this.userStats.quizzesTaken++;
        this.userStats.totalScore += results.percentage;
        this.userStats.avgScore = Math.round(this.userStats.totalScore / this.userStats.quizzesTaken);
        this.saveUserStats();
        this.updateDashboard();
    }

    calculateResults() {
        let correct = 0;
        
        this.currentQuiz.questions.forEach((question, index) => {
            if (this.currentQuiz.answers[index] === question.correct) {
                correct++;
            }
        });
        
        return {
            correct,
            total: this.currentQuiz.questions.length,
            percentage: Math.round((correct / this.currentQuiz.questions.length) * 100)
        };
    }

   showResults(results) {
    const modal = document.getElementById('resultsModal');
    const content = document.getElementById('resultsContent');

    // ✅ Build incorrect questions list here
    this.incorrectQuestions = [];
    this.currentQuiz.questions.forEach((question, index) => {
        const userAnswerIndex = this.currentQuiz.answers[index];
        if (userAnswerIndex !== question.correct) {
            this.incorrectQuestions.push({
                question: question.question,
                userAnswer: question.options[userAnswerIndex] || "Not answered",
                correctAnswer: question.options[question.correct],
                explanation: question.explanation || "Review this topic for a better understanding."
            });
        }
    });

    content.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3>Quiz Complete!</h3>
            <div style="font-size: 3rem; color: var(--color-primary); font-weight: bold; margin: 1rem 0;">
                ${results.percentage}%
            </div>
            <p>${results.correct} out of ${results.total} correct</p>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn--secondary" onclick="app.closeResultsModal()">Close</button>
            <button class="btn btn--primary" onclick="app.retakeQuiz()">Retake Quiz</button>
            <button class="btn btn--secondary" id="reviewQuizBtn">Review Quiz</button>
        </div>
    `;

    modal.classList.remove('hidden');
    this.showToast(`Quiz completed! Score: ${results.percentage}%`, 'success');

    // ✅ Attach event listener for Review Quiz
    setTimeout(() => {
        const reviewBtn = document.getElementById('reviewQuizBtn');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => {
                this.closeResultsModal();
                this.navigateToSection('review-quiz');
                this.loadReviewQuiz();
            });
        }
    }, 0);
}


    closeResultsModal() {
        document.getElementById('resultsModal').classList.add('hidden');
    }

    retakeQuiz() {
        this.closeResultsModal();
        this.initializeQuiz(this.currentSubject);
    }
loadReviewQuiz() {
  const container = document.getElementById("reviewQuizContainer");
  container.innerHTML = "";

  if (!this.incorrectQuestions || this.incorrectQuestions.length === 0) {
    container.innerHTML = `<p style="text-align:center;">🎉 Perfect score! You answered all questions correctly.</p>`;
    return;
  }

  this.incorrectQuestions.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p class="question-text">${item.question}</p>
      <div class="answers">
        <p><strong>Your Answer:</strong> <span class="user-answer">${item.userAnswer}</span></p>
        <p><strong>Correct Answer:</strong> <span class="correct-answer">${item.correctAnswer}</span></p>
      </div>
      <p class="explanation"><strong>Explanation:</strong> ${item.explanation}</p>
    `;
    container.appendChild(card);
  });
}

   setupModals() {
    // ✅ Close Results Modal
    const closeBtn = document.getElementById('closeResultsModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            this.closeResultsModal();
        });
    }

    // ✅ Retake Quiz Button (inside modal)
    const retakeBtn = document.getElementById('retakeQuizBtn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            this.retakeQuiz();
        });
    }

    // ✅ Review Quiz Button (inside modal)
    const reviewBtn = document.getElementById('reviewQuizBtn');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            this.closeResultsModal(); // hide the modal
            this.navigateToSection('review-quiz');
            this.loadReviewQuiz();    // populate review questions
        });
    }

    // ✅ Back from Review Quiz Page
    const backReviewBtn = document.getElementById('backToResultFromReview');
    if (backReviewBtn) {
        backReviewBtn.addEventListener('click', () => {
            // Go back to quiz section and reopen the results modal
            this.navigateToSection('quiz');
            document.getElementById('resultsModal').classList.remove('hidden');
        });
    }

    // ✅ Close modals when clicking outside modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
}


    updateDashboard() {
        document.getElementById('totalQuizzes').textContent = this.userStats.quizzesTaken;
        document.getElementById('totalCards').textContent = this.userStats.cardsStudied;
        document.getElementById('avgScore').textContent = `${this.userStats.avgScore}%`;
        
        this.updateSubjectProgress();
        this.updateAchievements();
    }

    updateSubjectProgress() {
        const progressList = document.getElementById('subjectProgressList');
        
        const progressHTML = Object.entries(this.subjects).map(([key, subject]) => {
            const studied = this.userStats.subjectsStudied[key] || 0;
            const total = subject.flashcards.length;
            const progress = Math.round((studied / total) * 100);
            
            return `
                <div class="progress-item">
                    <span>${subject.name}</span>
                    <span>${progress}%</span>
                </div>
            `;
        }).join('');
        
        progressList.innerHTML = progressHTML;
    }

    updateAchievements() {
        const achievementsList = document.getElementById('achievementsList');
        
        const achievements = [
            {
                name: 'First Quiz',
                icon: '📝',
                unlocked: this.userStats.quizzesTaken > 0
            },
            {
                name: 'Study Streak',
                icon: '🔥',
                unlocked: this.userStats.cardsStudied >= 10
            },
            {
                name: 'Quiz Master',
                icon: '🏆',
                unlocked: this.userStats.quizzesTaken >= 5
            },
            {
                name: 'Perfect Score',
                icon: '⭐',
                unlocked: this.userStats.avgScore === 100
            }
        ];
        
        achievementsList.innerHTML = achievements.map(achievement => `
            <div class="achievement-item ${achievement.unlocked ? '' : 'achievement-locked'}">
                <span class="achievement-icon">${achievement.icon}</span>
                <span>${achievement.name}</span>
            </div>
        `).join('');
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    loadUserStats() {
        try {
            const saved = localStorage.getItem('edumap-stats');
            return saved ? JSON.parse(saved) : {
                quizzesTaken: 0 ,
                cardsStudied: 0,
                totalScore: 0,
                avgScore: 0,
                subjectsStudied: {}
            };
        } catch {
            return {
                quizzesTaken: 0,
                cardsStudied: 0,
                totalScore: 0,
                avgScore: 0,
                subjectsStudied: {}
            };
        }
    }

    saveUserStats() {
        try {
            localStorage.setItem('edumap-stats', JSON.stringify(this.userStats));
        } catch (error) {
            console.warn('Could not save stats:', error);
        }
    }

}

// Initialize the application
const app = new EduMapApp();

// Make app globally available for onclick handlers
window.app = app;
// ======================
// 📘 SUMMARY GENERATOR (final fixed version)
// ======================
(function initSummaryGenerator() {
  // --- wait until PDF.js and Tesseract exist ---
  if (typeof pdfjsLib === "undefined" || typeof Tesseract === "undefined") {
    console.log("⏳ Waiting for PDF.js and Tesseract.js to load...");
    return setTimeout(initSummaryGenerator, 500);
  }

  console.log("✅ Libraries loaded — initializing Summary Generator...");

  // PDF.js worker
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

  // get elements
  const fileInput = document.getElementById("fileInput");
  const generateBtn = document.getElementById("generateSummaryBtn");
  const summaryOutput = document.getElementById("summaryOutput");
  const summaryContent = document.getElementById("summaryContent");
  const fileList = document.getElementById("fileList");

  if (!fileInput || !generateBtn) {
    console.warn("Summary Generator section not yet in DOM — retrying...");
    return setTimeout(initSummaryGenerator, 500);
  }

  // show file names
  fileInput.addEventListener("change", () => {
    const names = [...fileInput.files].map(f => f.name).join(", ");
    fileList.innerHTML = names ? `📄 Selected: ${names}` : "";
  });

  // button click
  generateBtn.addEventListener("click", async () => {
    try {
      const files = fileInput.files;
      if (!files || files.length === 0) {
        alert("Please upload at least one file!");
        return;
      }

      summaryOutput.classList.remove("hidden");
      summaryContent.innerHTML = "<p>⏳ Extracting content and generating summary...</p>";

      let allText = "";
      for (const file of files) {
        if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
          allText += await readPDF(file);
        } else if (file.type.startsWith("image/")) {
          allText += await readImage(file);
        } else {
          allText += await file.text();
        }
      }
     console.log("✅ Full extracted text length:", allText.length);

      const summary = makeSummary(allText);
      summaryContent.innerHTML = `<pre style="white-space:pre-wrap">${summary}</pre>`;
    } catch (err) {
      console.error("Summary generation failed:", err);
      summaryContent.innerHTML =
        "<p style='color:red'>An error occurred. See console for details.</p>";
    }
  });

  // ---- helpers ----
  async function readPDF(file) {
    try {
      const data = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      let text = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(it => it.str).join(" ") + " ";
      }
      return text;
    } catch (e) {
      console.error("PDF read error:", e);
      return "";
    }
  }

  async function readImage(file) {
    try {
      const { createWorker } = Tesseract;
      const worker = createWorker({
        logger: m =>
          m.status === "recognizing text" &&
          (summaryContent.innerHTML = `<p>🖼️ OCR progress: ${Math.round(
            m.progress * 100
          )}%</p>`)
      });
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const { data } = await worker.recognize(file);
      await worker.terminate();
      return data.text;
    } catch (e) {
      console.error("Image OCR error:", e);
      return "";
    }
  }

 function makeSummary(text) {
  if (!text.trim()) return "⚠️ No readable text found.";

  // --- normalize ---
  text = text.replace(/\s+/g, " ").trim();
  const sentences = text.split(/(?<=[.?!])\s+/).filter(s => s.length > 30);

  // --- keyword families ---
  const academicWords = [
    "algorithm","data","model","training","neural","definition","advantage",
    "example","system","architecture","process","component","database",
    "analysis","concept","machine learning","theorem","formula","mapreduce","python"
  ];
  const formalWords = [
    "dear","sincerely","offer","employment","internship","agreement","company",
    "client","organization","policy","department","official","management",
    "employee","letter","notice","report","contract","regards","superset",
    "address","india","pune","mumbai","date","november","subject"
  ];

  // --- pattern cues for formal docs ---
  const hasGreeting = /\b(dear|sir|madam|to:|from:)\b/i.test(text);
  const hasSignoff = /\b(sincerely|regards|faithfully|truly)\b/i.test(text);
  const hasAddress = /\d{3,}|\broad\b|\bstreet\b|\broad\b/i.test(text);
  const hasDate = /\b(january|february|march|april|may|june|july|august|september|october|november|december|202\d|202[1-9])\b/i.test(text);
  const hasCurrency = /₹|\$|rs\.|INR|USD/i.test(text);

  // --- score detection ---
  const academicScore = academicWords.reduce((a,w)=>a+(text.toLowerCase().includes(w)?1:0),0);
  const formalScore = formalWords.reduce((a,w)=>a+(text.toLowerCase().includes(w)?1:0),0)
    + (hasGreeting||hasSignoff||hasAddress||hasDate||hasCurrency ? 4 : 0);

  const isAcademic = academicScore > formalScore;

  // ======================================================
  //  📄  FORMAL / NON-ACADEMIC  MODE
  // ======================================================
  if (!isAcademic) {
    const keySentences = sentences.filter(s =>
      /(confirm|agreement|employment|offered|position|responsible|benefit|condition|policy|requirement|training|completion|program|salary|stipend|remuneration|terms|clause)/i.test(s)
    );

    const otherSentences = sentences.filter(s => !keySentences.includes(s));

    let html = `
      <div style="font-family:'Segoe UI',sans-serif;line-height:1.6;color:#111;">
        <h2 style="color:#2563eb;">📄 Smart Document Summary</h2>
        <p style="color:#555;font-size:0.9em;">Detected as formal / business document</p>
        <h3 style="color:#0d9488;">🔹 Key Points</h3>
        <ul style="padding-left:20px;">
          ${keySentences.slice(0,10).map(s=>`<li>${s}</li>`).join("")}
        </ul>
        <h3 style="color:#7e22ce;">🟣 Additional Details</h3>
        <ul style="padding-left:20px;">
          ${otherSentences.slice(0,10).map(s=>`<li>${s}</li>`).join("")}
        </ul>
        <p style="margin-top:10px;font-style:italic;color:#555;">
          ✨ Tip: Check for dates, compensation, and signatories in this summary.
        </p>
      </div>`;
    return html;
  }

  // ======================================================
  //  📘  ACADEMIC / TECHNICAL  MODE
  // ======================================================
  const topics = {
    "🟩 Definition": [],
    "🟦 Uses": [],
    "🟨 Advantages": [],
    "🟥 Disadvantages": [],
    "🟧 Components": [],
    "🟪 Examples": [],
    " Other": []
  };
  const add = (k,s)=>{topics[k].push(s);};

  for (const s of sentences) {
    const l=s.toLowerCase();
    if(l.includes("define")||l.includes("means")) add("🟩 Definition",s);
    else if(l.includes("use")||l.includes("application")) add("🟦 Uses",s);
    else if(l.includes("advantage")||l.includes("benefit")) add("🟨 Advantages",s);
    else if(l.includes("disadvantage")||l.includes("limitation")) add("🟥 Disadvantages",s);
    else if(l.includes("component")||l.includes("module")||l.includes("part")) add("🟧 Components",s);
    else if(l.includes("example")||l.includes("eg")) add("🟪 Examples",s);
    else add(" Other",s);
  }

  const highlight = s=>{
    const keyTerms=["MapReduce","Mapper","Reducer","Big Data","Algorithm","Component","Architecture","Database","Model","Hadoop"];
    let out=s;
    for(const k of keyTerms)
      out=out.replace(new RegExp(`\\b(${k})\\b`,"gi"),"<b style='color:#1d4ed8;'>$1</b>");
    return out;
  };

  let html=`<div style="font-family:'Segoe UI',sans-serif;line-height:1.6;color:#111;">
    <h2 style="color:#2563eb;">📘 Exam-Ready Short Notes</h2>`;
  for(const [title,arr] of Object.entries(topics)){
    if(arr.length){
      html+=`<h3 style="margin-top:14px;">${title}</h3><ul style="padding-left:20px;">`;
      html+=arr.slice(0,5).map(s=>`<li>${highlight(s)}</li>`).join("");
      html+="</ul>";
    }
  }
  html+="</div>";
  return html;
}
})();


