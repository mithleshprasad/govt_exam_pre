(window.NOTES_ADV=window.NOTES_ADV||[]).push(
{t:"9 · Algorithms, sorting aur complexity",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Complexity batati hai ki data bada hone par program kitna <b>dheera</b> hoga. Jitna kam, utna accha.</div>

<h4>Big-O (time complexity)</h4>
<ul>
<li><b>Big-O</b> = upper bound (worst case). <b>Ω (Omega)</b> = lower bound (best). <b>Θ (Theta)</b> = tight bound.</li>
<li>Tez → dheere: <b>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!)</b></li>
<li>Ek loop n tak = O(n). Loop ke andar loop = O(n²). Har step me aadha karna = O(log n).</li>
</ul>

<h4>Searching</h4>
<ul>
<li><b>Linear search:</b> ek-ek dekho. Worst O(n). Sorted hona zaroori nahi.</li>
<li><b>Binary search:</b> beech wala dekho, aadha hata do. <b>Sorted data chahiye.</b> Worst <b>O(log n)</b>.</li>
</ul>

<h4>Sorting ka table (yaad rakho)</h4>
<div class="tbl"><table><tr><th>Sort</th><th>Best</th><th>Average</th><th>Worst</th><th>Khaas baat</th></tr>
<tr><td>Bubble</td><td>n</td><td>n²</td><td>n²</td><td>Pados ke elements swap</td></tr>
<tr><td>Selection</td><td>n²</td><td>n²</td><td>n²</td><td>Har baar minimum chuno</td></tr>
<tr><td>Insertion</td><td>n</td><td>n²</td><td>n²</td><td>Taash ke patte jaisa</td></tr>
<tr><td>Merge</td><td>n log n</td><td>n log n</td><td>n log n</td><td>Divide &amp; Conquer, extra memory</td></tr>
<tr><td>Quick</td><td>n log n</td><td>n log n</td><td><b>n²</b></td><td>Pivot, in-place</td></tr>
<tr><td>Heap</td><td>n log n</td><td>n log n</td><td>n log n</td><td>Heap use karta hai</td></tr></table></div>
<ul>
<li><b>Stable sort:</b> barabar elements ka order na badle (Merge, Insertion, Bubble stable hain).</li>
</ul>

<h4>Algorithm design ke tarike</h4>
<ul>
<li><b>Divide and Conquer:</b> Divide (todo) → Conquer (solve) → Combine (jodo). Merge sort, quick sort, binary search.</li>
<li><b>Greedy:</b> har step par sabse accha local choice. Prim, Kruskal (minimum spanning tree), Dijkstra (shortest path), Huffman coding.</li>
<li><b>Dynamic Programming (DP):</b> chhote problems ke answer yaad rakho (dobara na nikalo). Knapsack, LCS, Fibonacci.</li>
<li><b>Backtracking:</b> try karo, galat nikle to wapas aao. N-Queens.</li>
<li><b>Dijkstra</b> negative weight par kaam nahi karta; <b>Bellman-Ford</b> karta hai.</li>
</ul>

<h4>Recursion ke formulas</h4>
<ul>
<li>Binary search: T(n) = T(n/2) + 1 → O(log n). Merge sort: T(n) = 2T(n/2) + n → O(n log n).</li>
<li><b>Tower of Hanoi</b> me n disk ke liye <b>2ⁿ − 1</b> moves. Recursive Fibonacci ≈ 2ⁿ calls.</li>
<li><b>P</b> = jaldi solve hone wale. <b>NP</b> = answer jaldi verify ho sake. <b>NP-complete</b> = sabse mushkil NP (SAT, TSP).</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Binary search sorted par, O(log n). Quick sort worst O(n²). Merge sort Divide &amp; Conquer. Dijkstra me negative weight nahi.</div>
`,
q:[
["Binary search ke liye data kaisa hona chahiye?",["Random","Sorted","Duplicate-free","Linked list me"],1,"Sorted data zaroori."],
["Binary search ki worst case complexity?",["O(n)","O(log n)","O(n log n)","O(1)"],1,"Har step me aadha."],
["Quick sort ki worst case complexity?",["O(n log n)","O(n)","O(n²)","O(log n)"],2,"Bad pivot par n²."],
["Merge sort kis technique par based hai?",["Greedy","Divide and Conquer","Dynamic Programming","Backtracking"],1,"Divide, conquer, combine."],
["Kaun sa sort hamesha O(n log n) hai (best, avg, worst)?",["Bubble","Quick","Merge","Insertion"],2,"Merge sort."],
["Dijkstra algorithm kis kaam aata hai?",["Sorting","Shortest path","Searching","Hashing"],1,"Single-source shortest path."],
["Big-O kya darshata hai?",["Lower bound","Upper bound","Average hamesha","Memory"],1,"Upper bound (worst case)."],
["n disk wale Tower of Hanoi me moves?",["2n","n²","2ⁿ − 1","n!"],2,"Minimum moves 2ⁿ − 1."],
["Minimum spanning tree ke liye kaunse algorithms hain?",["Prim aur Kruskal","Dijkstra aur BFS","Merge aur Quick","DFS aur Binary"],0,"Prim, Kruskal."],
["Dynamic programming ka main idea?",["Random choice","Chhote problems ke answer yaad rakhna","Sirf recursion","Sirf sorting"],1,"Overlapping subproblems store karo."],
["Kaun sa sort best case me O(n) hai?",["Selection","Insertion","Heap","Merge"],1,"Already sorted par insertion O(n)."],
["O(n²) aur O(n log n) me kaun tez hai (bade n par)?",["O(n²)","O(n log n)","Barabar","Pata nahi"],1,"n log n chhota hota hai."]
]},

{t:"10 · Operating System (OS)",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> OS = <b>manager</b> jo user aur hardware ke beech kaam karata hai. Wo CPU, memory, files aur devices sab sambhalta hai. Examples: Windows, Linux, Android.</div>

<h4>OS ke types</h4>
<ul>
<li><b>Batch:</b> jobs ek saath, bina user ke. <b>Multiprogramming:</b> kai programs memory me. <b>Time-sharing:</b> har user ko thoda time (multitasking). <b>Real-time:</b> time par hi kaam (aircraft, ATM). <b>Distributed, Network, Embedded, Mobile.</b></li>
<li><b>Linux</b> ka kernel Linus Torvalds ne 1991 me banaya. <b>Unix</b> Ritchie aur Thompson. Android Linux kernel par hai.</li>
<li><b>System call</b> = program OS se kaam maangta hai (fork, exec, read, write). <b>fork()</b> ke baad child ko return value <b>0</b> milti hai; n baar fork = <b>2ⁿ</b> processes.</li>
</ul>

<h4>Process aur Thread</h4>
<ul>
<li><b>Process</b> = chalta hua program. States: <b>New → Ready → Running → Waiting → Terminated</b>. <b>PCB</b> = process ki saari information.</li>
<li><b>Thread</b> = process ka halka hissa; code/data share karta hai par stack/registers apne.</li>
<li><b>Context switch</b> = CPU ek process se dusre par jaye (time waste hota hai).</li>
<li><b>IPC:</b> pipe, message queue, shared memory, socket.</li>
</ul>

<h4>CPU Scheduling</h4>
<ul>
<li><b>FCFS:</b> jo pehle aaya wo pehle (convoy effect). <b>SJF:</b> sabse chhota job pehle (average waiting <b>sabse kam</b>; bade job bhookhe reh sakte hain = starvation).</li>
<li><b>Priority:</b> priority ke hisab se; starvation → <b>aging</b> se solve. <b>Round Robin:</b> sabko barabar <b>time quantum</b>, time-sharing ke liye.</li>
<li><b>Turnaround = Completion − Arrival</b>. <b>Waiting = Turnaround − Burst</b>.</li>
<li><b>Example:</b> P1=5, P2=3, P3=8 (sab time 0). FCFS waiting: 0, 5, 8 → avg 4.33. SJF (P2,P1,P3): 0, 3, 8 → avg <b>3.67</b>.</li>
</ul>

<h4>Deadlock (sab ek dusre ka intezar kare)</h4>
<ul>
<li>4 conditions <b>ek saath</b> chahiye: <b>Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait</b>.</li>
<li><b>Banker's algorithm</b> = deadlock <b>avoidance</b>. Need = Max − Allocation.</li>
<li><b>Semaphore:</b> counter jo wait(P) aur signal(V) se chalta hai. <b>Race condition</b> = do process ek data par ek saath. <b>Critical section</b> = shared data wala hissa.</li>
</ul>

<h4>Memory management</h4>
<ul>
<li><b>Paging:</b> memory ko barabar <b>pages</b> (logical) aur <b>frames</b> (physical) me todna. External fragmentation nahi, internal ho sakti hai.</li>
<li><b>Segmentation:</b> alag size ke logical hisse (code, data, stack). Base + limit.</li>
<li><b>Virtual memory:</b> RAM kam ho to disk ko RAM jaisa use karna. <b>Page fault</b> = page RAM me nahi mila. <b>Thrashing</b> = bahut zyada paging, CPU bas swap karta rehta hai.</li>
<li><b>Page replacement:</b> FIFO (<b>Belady's anomaly</b> ho sakti hai), <b>LRU</b> (sabse pehle use hua nikalo), <b>Optimal</b> (best, par sirf theory).</li>
<li><b>Page offset bits</b> = log₂(page size). 4 KB (=2¹²) → <b>12 bit</b>. 8 KB → 13 bit.</li>
<li><b>TLB</b> = page table ka fast cache.</li>
<li><b>Fragmentation:</b> external (free jagah bikhri hui), internal (block ke andar waste).</li>
</ul>

<h4>Disk aur File system</h4>
<ul>
<li><b>Disk scheduling:</b> FCFS, <b>SSTF</b> (sabse paas wala), <b>SCAN</b> (lift jaisa), C-SCAN, LOOK.</li>
<li><b>File systems:</b> Windows → FAT32, NTFS. Linux → ext4. macOS → HFS+/APFS.</li>
<li>File allocation: contiguous, linked, indexed. Unix me file ki info <b>inode</b> me.</li>
<li><b>Linux commands:</b> <code>ls</code> (list), <code>cd</code>, <code>pwd</code>, <code>mkdir</code>, <code>rm</code>, <code>cp</code>, <code>mv</code>, <code>cat</code>, <code>chmod</code> (permission), <code>grep</code> (search), <code>ps</code>, <code>kill</code>.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Deadlock ki 4 conditions me <b>No Preemption</b> hai (Preemption nahi). SJF me average waiting sabse kam. 4 KB page = 12 offset bits. Thrashing = bahut zyada paging.</div>
`,
q:[
["Deadlock ki necessary condition kaun si NAHI hai?",["Mutual exclusion","Hold and wait","Preemption","Circular wait"],2,"Condition 'No preemption' hai, preemption nahi."],
["Banker's algorithm kis liye hai?",["Deadlock avoidance","Paging","Sorting","File search"],0,"Safe state check."],
["Bahut zyada paging activity ko kya kehte hain?",["Spooling","Thrashing","Caching","Booting"],1,"Thrashing."],
["Page size 8 KB ho to offset bits kitne?",["12","13","14","10"],1,"8 KB = 2¹³."],
["Kaun sa scheduling time quantum use karta hai?",["FCFS","SJF","Round Robin","Priority"],2,"Round Robin."],
["Kaun sa algorithm minimum average waiting time deta hai?",["FCFS","SJF","Round Robin","Priority"],1,"SJF."],
["Process ki saari information kaha hoti hai?",["PCB","TLB","BIOS","Inode"],0,"Process Control Block."],
["fork() ke baad child process ko kya value milti hai?",["1","0","−1","Process ID of parent"],1,"Child me 0."],
["Linux ka kernel kisne banaya?",["Dennis Ritchie","Bill Gates","Linus Torvalds","Ken Thompson"],2,"1991, Linus Torvalds."],
["Virtual memory me page RAM me na mile to kya hota hai?",["Page hit","Page fault","Deadlock","Interrupt only"],1,"Page fault."],
["Linux me files ki list dekhne ka command?",["cd","ls","rm","mv"],1,"ls = list."],
["Paging me physical memory ke fixed size blocks ko kya kehte hain?",["Pages","Frames","Segments","Sectors"],1,"Physical = frames, logical = pages."]
]},

{t:"11 · DBMS aur SQL",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Database = data ka organized store (jaise bahut bade Excel sheets). <b>DBMS</b> = software jo isse manage karta hai (MySQL, Oracle, MS Access).</div>

<h4>Basic terms</h4>
<ul>
<li><b>Table (relation)</b> = rows (tuple/record) + columns (attribute/field).</li>
<li><b>Degree</b> = columns ki ginti. <b>Cardinality</b> = rows ki ginti.</li>
<li><b>Fayde:</b> kam redundancy, data integrity, security, sharing, backup.</li>
<li><b>Data independence:</b> storage badle to application na toote. 3-level architecture: external (view), conceptual, internal (physical).</li>
</ul>

<h4>Keys</h4>
<ul>
<li><b>Primary key:</b> har row ko unique pehchane; <b>NULL nahi</b>, duplicate nahi (Roll no).</li>
<li><b>Candidate key:</b> primary key banne layak sab keys. <b>Super key:</b> koi bhi set jo unique pehchane. <b>Alternate key:</b> candidate jo primary nahi bani.</li>
<li><b>Foreign key:</b> dusri table ki primary key ko refer karti hai (table jodne ke liye).</li>
<li><b>Composite key:</b> 2 ya zyada columns milakar key.</li>
</ul>

<h4>ER model</h4>
<ul>
<li><b>Entity</b> (cheez: Student), <b>Attribute</b> (gun: Name), <b>Relationship</b> (Student padhta hai Course).</li>
<li>Cardinality: 1:1, 1:N, M:N. <b>M:N</b> ke liye alag table banti hai. <b>Weak entity</b> ki apni key nahi hoti.</li>
</ul>

<h4>Normalization (table ko saaf karna)</h4>
<div class="tbl"><table><tr><th>Form</th><th>Rule</th></tr>
<tr><td>1NF</td><td>Har cell me ek hi value (atomic), repeating groups nahi</td></tr>
<tr><td>2NF</td><td>1NF + <b>partial dependency</b> nahi (key ke sirf hisse par depend nahi)</td></tr>
<tr><td>3NF</td><td>2NF + <b>transitive dependency</b> nahi</td></tr>
<tr><td>BCNF</td><td>Har dependency X→Y me X super key ho</td></tr></table></div>
<ul>
<li><b>Functional dependency:</b> X → Y matlab X pata ho to Y pakka pata hoga (RollNo → Name).</li>
</ul>

<h4>SQL commands ke group</h4>
<div class="tbl"><table><tr><th>Group</th><th>Commands</th></tr>
<tr><td>DDL (structure)</td><td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td></tr>
<tr><td>DML (data)</td><td>INSERT, UPDATE, DELETE, SELECT</td></tr>
<tr><td>DCL (permission)</td><td>GRANT, REVOKE</td></tr>
<tr><td>TCL (transaction)</td><td>COMMIT, ROLLBACK, SAVEPOINT</td></tr></table></div>
<pre>CREATE TABLE student (roll INT PRIMARY KEY, name VARCHAR(30), marks INT);
INSERT INTO student VALUES (1, 'Rahul', 85);
SELECT name, marks FROM student WHERE marks &gt; 60 ORDER BY marks DESC;
SELECT COUNT(*), AVG(marks), MAX(marks), MIN(marks), SUM(marks) FROM student;
SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) &gt; 2;
UPDATE student SET marks = 90 WHERE roll = 1;
DELETE FROM student WHERE roll = 1;
SELECT * FROM student WHERE name LIKE 'R%';   -- R se shuru
SELECT * FROM student WHERE marks BETWEEN 50 AND 80;</pre>
<ul>
<li><b>WHERE</b> rows ko filter karta hai (group se pehle). <b>HAVING</b> groups ko filter karta hai (GROUP BY ke baad).</li>
<li><b>LIKE:</b> <code>%</code> = kuch bhi (kitne bhi akshar), <code>_</code> = ek akshar. Aggregate functions <b>NULL ignore</b> karte hain (COUNT(*) sab rows ginta hai).</li>
<li><b>DELETE</b> = rows hatata hai (rollback ho sakta hai). <b>TRUNCATE</b> = saari rows hatata hai. <b>DROP</b> = poori table hata deta hai.</li>
<li><b>Joins:</b> INNER (dono me match), LEFT, RIGHT, FULL OUTER, CROSS (m×n rows).</li>
<li>Constraints: PRIMARY KEY, UNIQUE, NOT NULL, CHECK, FOREIGN KEY, DEFAULT. <b>View</b> = virtual table.</li>
</ul>

<h4>Transaction aur ACID</h4>
<ul>
<li><b>ACID:</b> <b>A</b>tomicity (poora ya bilkul nahi), <b>C</b>onsistency (valid state), <b>I</b>solation (ek dusre se alag), <b>D</b>urability (commit ke baad pakka).</li>
<li>Problems: <b>dirty read, lost update, phantom</b>. <b>Locking:</b> 2-phase locking. <b>Log</b> aur checkpoint se recovery.</li>
<li><b>Index</b> search tez karta hai (B+ tree). <b>NoSQL</b> (MongoDB) = document/key-value database.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Primary key NULL nahi hoti. WHERE rows filter karta hai, HAVING groups. 3NF = transitive dependency hatata hai. ALTER, DROP = DDL. SELECT, UPDATE = DML.</div>
`,
q:[
["Kaun si key row ko unique pehchanti hai aur NULL nahi ho sakti?",["Foreign key","Primary key","Alternate key","Super key only"],1,"Primary key."],
["Groups ko filter karne ke liye SQL clause?",["WHERE","HAVING","ORDER BY","LIMIT"],1,"HAVING."],
["Inme se DDL command kaun sa hai?",["INSERT","UPDATE","ALTER","SELECT"],2,"ALTER structure badalta hai."],
["3NF kya hatata hai?",["Partial dependency","Transitive dependency","Multi-valued attribute","Primary key"],1,"Transitive dependency."],
["ACID me 'I' ka matlab?",["Integrity","Isolation","Index","Inheritance"],1,"Isolation."],
["Table ki columns ki ginti kya kahlati hai?",["Cardinality","Degree","Domain","Tuple"],1,"Degree = columns, cardinality = rows."],
["SELECT * FROM t WHERE name LIKE 'R%'; kya dhoondhta hai?",["Jo R par khatam ho","Jo R se shuru ho","Jisme sirf R ho","Jisme R na ho"],1,"% = kuch bhi baad me."],
["Poori table ko hamesha ke liye hatane wala command?",["DELETE","TRUNCATE","DROP","REMOVE"],2,"DROP table hi hata deta hai."],
["Foreign key ka kaam kya hai?",["Row ko unique banana","Dusri table ki primary key se jodna","Data encrypt karna","Index banana"],1,"Tables ko jodta hai."],
["COMMIT kis group ka command hai?",["DDL","DML","DCL","TCL"],3,"TCL = transaction control."],
["1NF ke liye zaroori shart?",["Har cell me atomic value","Koi foreign key na ho","Table me index ho","Sirf 2 columns ho"],0,"Atomic values."],
["Do table ka CROSS JOIN, jinme 3 aur 4 rows hon, kitni rows dega?",["7","12","1","3"],1,"3 × 4 = 12."]
]}
);
