(window.NOTES_ADV=window.NOTES_ADV||[]).push(
{t:"5 · C programming (asaan tareeke se)",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> C ek <b>procedural</b> language hai. Program <code>main()</code> se shuru hota hai. Har statement ke baad <code>;</code> lagta hai.</div>

<h4>Data types aur size (normal PC par)</h4>
<div class="tbl"><table><tr><th>Type</th><th>Size</th><th>Format</th></tr>
<tr><td>char</td><td>1 byte</td><td>%c</td></tr>
<tr><td>int</td><td>4 byte</td><td>%d</td></tr>
<tr><td>float</td><td>4 byte</td><td>%f</td></tr>
<tr><td>double</td><td>8 byte</td><td>%lf</td></tr></table></div>
<ul>
<li>Variable ka naam digit se shuru nahi ho sakta, keyword nahi ho sakta. C <b>case-sensitive</b> hai (A aur a alag).</li>
<li>'A' ek character hai (value 65). "A" string hai (2 byte: 'A' aur '\0').</li>
</ul>

<h4>Operators ke tricky points</h4>
<ul>
<li><b>Integer division:</b> 7/2 = <b>3</b> (decimal hat jata hai). 7%2 = 1. 7/2.0 = 3.5. % sirf integer par chalta hai.</li>
<li><b>Relational/logical</b> ka result 1 (true) ya 0 (false). Koi bhi non-zero value true hai.</li>
<li><b>Short-circuit:</b> <code>a && b</code> me a false ho to b dekha hi nahi jata. <code>a || b</code> me a true ho to b skip.</li>
<li><b>x++</b> pehle use, phir badhao. <b>++x</b> pehle badhao, phir use.</li>
<li><b>Bitwise:</b> 5 &amp; 3 = 1, 5 | 3 = 7, 5 ^ 3 = 6, 5 &lt;&lt; 1 = 10, 5 &gt;&gt; 1 = 2.</li>
<li><code>if (x = 5)</code> me assign hota hai (hamesha true). Compare ke liye <code>==</code> use karo.</li>
<li><b>Precedence yaad rakho:</b> () → ++ -- → * / % → + - → comparison → == != → &amp;&amp; → || → ?: → =</li>
</ul>

<h4>Control statements</h4>
<ul>
<li><b>if / else if / else</b>, <b>switch</b>: <code>break</code> na lagao to <b>fall-through</b> hota hai (agla case bhi chal jata hai).</li>
<li><b>for</b>, <b>while</b> (pehle condition check), <b>do-while</b> (kam se kam <b>ek baar</b> chalta hai).</li>
<li><b>break</b> = loop se bahar. <b>continue</b> = agli iteration par jao.</li>
</ul>

<h4>Function aur storage class</h4>
<ul>
<li>C me arguments <b>by value</b> jaate hain. Original badalna ho to <b>pointer</b> bhejo.</li>
<li><b>static</b> variable ki value function calls ke beech <b>yaad rehti</b> hai aur default value <b>0</b>. <b>auto</b> ki default value garbage.</li>
<li>Recursion example: <code>fact(n) = n * fact(n-1)</code>, base case <code>fact(0)=1</code>.</li>
</ul>

<h4>Array aur string</h4>
<ul>
<li>Index <b>0</b> se shuru. <code>int a[5]</code> → a[0] se a[4]. Bounds check nahi hota.</li>
<li><code>int a[5]={1,2};</code> → 1 2 0 0 0 (baaki zero).</li>
<li><b>2D array address (row-major):</b> base + (i × columns + j) × size.</li>
<li>String <code>char s[]="HELLO"</code> me 6 byte lagte hain (last me \0). <code>strlen</code> = 5.</li>
<li>Functions: <b>strlen, strcpy, strcat, strcmp</b> (barabar ho to <b>0</b>).</li>
</ul>

<h4>Pointer (sabse zaroori)</h4>
<ul>
<li>Pointer = ek variable jo kisi dusre variable ka <b>address</b> rakhta hai. <code>int *p = &amp;x;</code></li>
<li><code>*p</code> = us address ki value. <code>p</code> = address. <code>&amp;x</code> = x ka address.</li>
<li><code>p+1</code> agle element par jata hai (size ke hisab se, int ho to +4 byte).</li>
<li><b>NULL pointer</b> = kuch nahi point karta. <b>Dangling pointer</b> = free ho chuki memory ko point karta hai.</li>
<li><b>malloc(n)</b> = n byte memory (garbage). <b>calloc</b> = zero se bhari memory. <b>realloc</b> = size badalna. <b>free</b> = wapas dena. free na karna = <b>memory leak</b>.</li>
</ul>

<h4>struct, union, file</h4>
<ul>
<li><b>struct:</b> alag-alag type ke members, sabki alag memory. <b>union:</b> sab members ek hi memory share karte hain, size = sabse bada member.</li>
<li><b>File modes:</b> <b>r</b> (padho), <b>w</b> (likho, purana mita deta hai), <b>a</b> (aakhir me jodo), <b>r+</b>, <b>w+</b>, <b>a+</b>, <b>b</b> = binary.</li>
<li>Functions: fopen, fclose, fprintf, fscanf, fgets, fputs, fread, fwrite, <b>fseek</b> (position badlo), <b>ftell</b> (abhi kahan hain), <b>rewind</b>, feof.</li>
<li><b>#define SQ(x) x*x</b> me <code>SQ(2+3)</code> = 2+3*2+3 = <b>11</b> (25 nahi!). Isliye bracket lagao.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> <code>printf("%d",'a')</code> = 97. 7/2 = 3. strcmp barabar string par 0 deta hai. static ki default value 0. do-while kam se kam ek baar chalta hai.</div>
`,
q:[
["C me 7/2 ka result (int) kya hai?",["3.5","3","4","2"],1,"Integer division decimal hata deta hai."],
["String \"HELLO\" ko store karne ke liye kitne byte chahiye?",["5","6","7","4"],1,"5 letters + '\\0' = 6."],
["Kaun sa loop kam se kam ek baar zaroor chalta hai?",["for","while","do-while","koi nahi"],2,"Do-while me condition baad me check hoti hai."],
["Static variable ki default value kya hoti hai?",["Garbage","1","0","−1"],2,"Static aur global ki default value 0."],
["Zero se bhari memory kaun sa function deta hai?",["malloc","calloc","realloc","free"],1,"calloc memory ko 0 se bharta hai."],
["printf(\"%d\", 'A'); kya print karega?",["A","65","97","Error"],1,"Character ki ASCII value."],
["strcmp(\"abc\",\"abc\") ka result?",["1","−1","0","abc"],2,"Barabar strings par 0."],
["union ka size kisse decide hota hai?",["Sabke sum se","Sabse bade member se","Sabse chhote member se","Member ki ginti se"],1,"Sab members ek memory share karte hain."],
["File ko append mode me kholne ka mode?",["r","w","a","rb"],2,"a = append."],
["int a[5]={1,2}; me a[4] ki value?",["Garbage","0","2","1"],1,"Baaki elements zero ho jaate hain."],
["#define SQ(x) x*x me SQ(2+3) ka output?",["25","11","10","5"],1,"2+3*2+3 = 11."],
["Pointer ka kaam kya hai?",["Value ko double karna","Kisi variable ka address rakhna","Loop chalana","File kholna"],1,"Pointer address store karta hai."],
["Array ka pehla index kya hota hai?",["1","0","−1","Koi bhi"],1,"C me index 0 se shuru."]
]},

{t:"6 · OOP, C++ aur Java ki basics",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> OOP me program ko <b>object</b> (cheezon) me todte hain. Jaise <b>Car</b> ek class hai (naksha) aur aapki Swift car ek object hai.</div>

<h4>OOP ke 4 pillars</h4>
<ul>
<li><b>Encapsulation:</b> data aur functions ko ek class me band karna aur data chhupana (private). Jaise capsule me dawa.</li>
<li><b>Abstraction:</b> sirf zaroori cheez dikhana, andar ka detail chhupana. Jaise car chalate waqt engine ka detail nahi dikhta.</li>
<li><b>Inheritance:</b> purani class se naye features lena (code reuse). Jaise bachche ko maa-baap ke gun milte hain.</li>
<li><b>Polymorphism:</b> ek naam, kai roop. <b>Overloading</b> (compile time, same naam alag parameters) aur <b>Overriding</b> (run time, child class me parent ka function dobara likhna, virtual function).</li>
</ul>

<h4>C++ ke important points</h4>
<ul>
<li>C++ banaya <b>Bjarne Stroustrup</b> ne (1983, pehle naam "C with Classes").</li>
<li><b>Class</b> ke members by default <b>private</b>; <b>struct</b> ke members by default <b>public</b>.</li>
<li><b>Constructor:</b> object banate hi apne aap chalta hai; naam class jaisa, return type nahi. Types: default, parameterized, copy.</li>
<li><b>Destructor:</b> object khatam hone par chalta hai; naam <code>~ClassName</code>; ek hi hota hai, parameter nahi.</li>
<li><b>this pointer:</b> current object ka address. <b>static member:</b> sab objects ke liye ek hi copy.</li>
<li><b>friend function:</b> class ke private data tak pahunch sakta hai, par member nahi hota.</li>
<li><b>Access specifiers:</b> private (sirf class), protected (class + child), public (sab).</li>
<li><b>Operator overloading:</b> + - * ka naya matlab. In operators ko overload <b>nahi</b> kar sakte: <code>::  .  .*  ?:  sizeof</code>.</li>
<li><b>Constructor order:</b> pehle base class, phir derived. <b>Destructor order:</b> ulta (pehle derived).</li>
</ul>

<h4>Inheritance ke types</h4>
<ul>
<li><b>Single</b> (A→B), <b>Multiple</b> (A,B→C), <b>Multilevel</b> (A→B→C), <b>Hierarchical</b> (A→B, A→C), <b>Hybrid</b>.</li>
<li><b>Diamond problem</b> (multiple inheritance me ek base do baar aana) → <b>virtual base class</b> se solve.</li>
<li><b>Virtual function</b> = run time par decide hota hai kaun sa function chalega. <b>Pure virtual</b> (<code>= 0</code>) wali class <b>abstract</b> hoti hai, uska object nahi ban sakta.</li>
</ul>

<h4>Aur C++ topics</h4>
<ul>
<li><b>Reference</b> (<code>int &amp;r = x;</code>) = variable ka doosra naam. <b>new / delete</b> = dynamic memory (C ke malloc/free jaisa).</li>
<li><b>Templates:</b> ek code kai data types ke liye. <b>Exception handling:</b> try, throw, catch.</li>
<li><b>cin &gt;&gt;</b> input, <b>cout &lt;&lt;</b> output. <b>STL:</b> vector, list, map, set, stack, queue.</li>
</ul>

<h4>Java ke points</h4>
<ul>
<li>Banaya <b>James Gosling</b> (Sun Microsystems). <b>Platform independent</b>: code → <b>bytecode</b> → JVM par chalta hai ("Write once, run anywhere").</li>
<li>Java me <b>pointer nahi</b> hote, <b>garbage collection</b> memory apne aap saaf karta hai.</li>
<li>Java me multiple inheritance class se nahi hoti, <b>interface</b> se hoti hai. <b>String</b> immutable hai. <b>final</b> keyword = badal nahi sakte.</li>
<li><b>JDK</b> = development kit, <b>JRE</b> = run karne ka environment, <b>JVM</b> = bytecode chalane wali machine.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Class ka object ban sakta hai, abstract class ka nahi. C++ class default private, struct default public. Java me bytecode JVM par chalta hai.</div>
`,
q:[
["Data ko class me chhupana kis OOP concept ka hissa hai?",["Inheritance","Encapsulation","Polymorphism","Compilation"],1,"Encapsulation = data hiding + binding."],
["Function overloading kis type ki polymorphism hai?",["Run time","Compile time","Dynamic","Virtual"],1,"Overloading compile time par decide hoti hai."],
["C++ me class ke members by default kaise hote hain?",["public","private","protected","static"],1,"Class default private; struct default public."],
["Constructor ka naam kaisa hota hai?",["Kuch bhi","Class ke naam jaisa","~ se shuru","Main"],1,"Constructor ka naam class ke naam jaisa hota hai."],
["Destructor kaise likhte hain?",["~ClassName()","ClassName()","delete()","end()"],0,"Destructor me ~ lagta hai."],
["Diamond problem kis se solve hota hai?",["Friend function","Virtual base class","Static member","Template"],1,"Virtual inheritance."],
["Pure virtual function wali class kya kahlati hai?",["Final class","Abstract class","Static class","Friend class"],1,"Uska object nahi ban sakta."],
["C++ ke creator kaun hain?",["Dennis Ritchie","Bjarne Stroustrup","James Gosling","Guido van Rossum"],1,"Bjarne Stroustrup."],
["Java platform independent kyun hai?",["Kyunki wo bytecode banata hai jo JVM par chalta hai","Kyunki wo C se tez hai","Kyunki usme pointer hain","Kyunki wo interpreter nahi hai"],0,"Bytecode + JVM."],
["Inme se kaun sa operator overload nahi ho sakta?",["+","[]","::","=="],2,":: (scope resolution) overload nahi hota."],
["Constructor kab chalta hai?",["Object banate waqt","Object delete hote waqt","Program band hote waqt","Kabhi nahi"],0,"Object creation par automatically."],
["Java me garbage collection ka kaam kya hai?",["Code compile karna","Unused memory saaf karna","Error dikhana","Internet chalana"],1,"Memory automatically free karta hai."]
]},

{t:"7 · Python ki basics",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Python simple, <b>interpreted</b> language hai. Indentation (space) se blocks banta hai, <code>{ }</code> nahi lagta. Banane wale: <b>Guido van Rossum</b>.</div>

<h4>Data types</h4>
<div class="tbl"><table><tr><th>Type</th><th>Example</th><th>Badal sakte?</th></tr>
<tr><td>int, float, bool, str</td><td>5, 3.5, True, "hi"</td><td>str immutable</td></tr>
<tr><td>list</td><td>[1, 2, 3]</td><td><b>Haan</b> (mutable)</td></tr>
<tr><td>tuple</td><td>(1, 2, 3)</td><td><b>Nahi</b> (immutable)</td></tr>
<tr><td>set</td><td>{1, 2, 3}</td><td>Haan, duplicate nahi</td></tr>
<tr><td>dict</td><td>{"a": 1}</td><td>Haan, key:value</td></tr></table></div>

<h4>Operators</h4>
<ul>
<li><code>/</code> hamesha float deta hai (10/2 = 5.0). <code>//</code> floor division (10//3 = 3). <code>%</code> remainder. <code>**</code> power (2**3 = 8).</li>
<li><code>==</code> value compare karta hai, <code>is</code> same object check karta hai. Logical: <code>and, or, not</code>.</li>
<li><code>input()</code> hamesha <b>string</b> deta hai (number chahiye to <code>int(input())</code>).</li>
<li><code>print(a, b, sep="-", end="!")</code></li>
</ul>

<h4>String aur list ke kaam</h4>
<pre>s = "python"
s[0]      # 'p'      s[-1]   # 'n' (last)
s[1:4]    # 'yth'    s[::-1] # 'nohtyp' (ulta)
s.upper() s.lower() s.strip() s.split() s.replace("p","P") len(s)

L = [10, 20, 30]
L.append(40)   L.insert(1, 15)   L.remove(20)   L.pop()
L.sort()       L.reverse()       len(L)         L[1:3]
[x*x for x in range(4)]   # [0, 1, 4, 9]  (list comprehension)</pre>
<ul>
<li><code>range(5)</code> = 0,1,2,3,4. <code>range(1,10,2)</code> = 1,3,5,7,9. <b>Slicing me last index shamil nahi hota.</b></li>
<li><b>dict:</b> <code>d["a"]</code>, <code>d.keys()</code>, <code>d.values()</code>, <code>d.items()</code>, <code>d.get("x")</code>. Key unique hoti hai.</li>
<li><b>set:</b> union <code>|</code>, intersection <code>&amp;</code>, difference <code>-</code>. Duplicate apne aap hat jaate hain.</li>
</ul>

<h4>Control aur function</h4>
<pre>if x &gt; 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")

for i in range(3):    # 0 1 2
    print(i)

def add(a, b=10):     # default argument
    return a + b
square = lambda x: x*x</pre>
<ul>
<li><code>*args</code> = kai positional arguments, <code>**kwargs</code> = kai keyword arguments. <code>break</code>, <code>continue</code>, <code>pass</code> (kuch nahi).</li>
<li><b>Exceptions:</b> <code>try / except / else / finally</code>. Common: ZeroDivisionError, ValueError, TypeError, IndexError, KeyError, FileNotFoundError.</li>
<li><b>File:</b> <code>with open("a.txt","r") as f: data = f.read()</code>. Modes r, w, a, r+, b. <code>f.readline()</code>, <code>f.readlines()</code>.</li>
<li><b>Module:</b> <code>import math</code> (math.sqrt, math.pi), <code>import random</code>, <code>import os</code>.</li>
</ul>

<h4>Class (OOP in Python)</h4>
<pre>class Student:
    def __init__(self, name):   # constructor
        self.name = name
    def show(self):
        print(self.name)
s = Student("Rahul"); s.show()</pre>
<ul>
<li><code>self</code> = current object. <code>__init__</code> = constructor. Inheritance: <code>class B(A):</code>. Comment <code>#</code> se. Case-sensitive. Extension <code>.py</code>.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> list mutable, tuple immutable. 10//3 = 3. input() string deta hai. s[::-1] string ulta karta hai. Python me block indentation se banta hai.</div>
`,
q:[
["print(10 // 3) ka output?",["3.33","3","4","1"],1,"Floor division."],
["Inme se immutable type kaun sa hai?",["list","dict","tuple","set"],2,"Tuple badal nahi sakta."],
["input() function kis type ka data return karta hai?",["int","float","str","bool"],2,"Hamesha string."],
["\"python\"[::-1] ka output?",["python","nohtyp","pyt","error"],1,"Step -1 se string ulti ho jati hai."],
["range(1, 6, 2) kya deta hai?",["1,2,3,4,5","1,3,5","2,4,6","1,3,5,7"],1,"1 se 5 tak, 2 ke step me."],
["Python me 2**3 ka matlab?",["6","8","9","5"],1,"** = power."],
["Python ke creator kaun hain?",["Guido van Rossum","James Gosling","Dennis Ritchie","Linus Torvalds"],0,"Guido van Rossum."],
["Python me constructor ka naam?",["__init__","init","constructor","__new__ only"],0,"__init__ method."],
["print(7 % 3) ka output?",["2","1","3","0"],1,"7 = 2×3 + 1."],
["[x*x for x in range(3)] ka output?",["[0,1,4]","[1,4,9]","[0,1,2]","[1,2,3]"],0,"0,1,2 ke square."],
["Python me exception handle karne ke liye?",["try-except","if-else","for-while","catch-throw"],0,"try / except."],
["dict me cheezein kis form me hoti hain?",["index:value","key:value","row:column","name only"],1,"Key:value pair."]
]},

{t:"8 · Data Structures (Stack, Queue, Tree, Graph)",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Data structure = data ko rakhne ka tarika. Jaise kitaabein almirah me, plates ka dher (stack), line me khade log (queue).</div>

<h4>Linear aur Non-linear</h4>
<ul>
<li><b>Linear:</b> Array, Linked List, Stack, Queue (ek ke baad ek). <b>Non-linear:</b> Tree, Graph.</li>
</ul>

<h4>Array aur Linked List</h4>
<ul>
<li><b>Array:</b> fixed size, memory me saath-saath. Kisi bhi index par seedha pahunch (O(1)). Beech me insert/delete mehnga.</li>
<li><b>Linked list:</b> har node me data + agle ka pointer. Size badh-ghat sakta hai. Insert/delete asaan, par search O(n). Types: singly, doubly, circular.</li>
<li>1-D array address = base + i × size.</li>
</ul>

<h4>Stack = LIFO (Last In First Out)</h4>
<ul>
<li>Plates ka dher: jo sabse upar rakha, wahi pehle nikalta hai. Operations: <b>push, pop, peek</b>.</li>
<li>Use: function calls, undo, brackets check, <b>postfix evaluation</b>, DFS.</li>
<li><b>Postfix:</b> operator baad me. <code>A+B*C</code> → <code>ABC*+</code>. Evaluate: <code>2 3 4 * +</code> → 3×4=12 → 2+12 = <b>14</b>.</li>
<li>Infix → postfix me stack me operators rakhte hain (precedence ka dhyan).</li>
</ul>

<h4>Queue = FIFO (First In First Out)</h4>
<ul>
<li>Line me khade log: pehle aaya, pehle gaya. <b>enqueue</b> (peeche), <b>dequeue</b> (aage se).</li>
<li>Types: <b>Circular</b> queue (jagah reuse), <b>Deque</b> (dono taraf), <b>Priority</b> queue.</li>
<li>Circular queue full: <code>(rear+1) % n == front</code>. Use: scheduling, <b>BFS</b>.</li>
</ul>

<h4>Tree (ped jaisa structure)</h4>
<ul>
<li><b>Root</b> (jad), <b>parent/child</b>, <b>leaf</b> (jiske bachche nahi), <b>height</b>. n nodes ke tree me <b>n−1</b> edges.</li>
<li><b>Binary tree:</b> har node ke max 2 bachche. Level i par max 2ⁱ nodes.</li>
<li><b>BST (Binary Search Tree):</b> left &lt; root &lt; right. <b>Inorder traversal sorted</b> output deta hai.</li>
<li><b>Traversal:</b> Inorder (Left, Root, Right), Preorder (Root, Left, Right), Postorder (Left, Right, Root).</li>
<li><b>Preorder + Inorder</b> se tree ban sakta hai. Distinct BST (n keys) = <b>Catalan number</b>: n=3→5, n=4→<b>14</b>.</li>
<li><b>AVL tree:</b> balanced BST, har node par height ka antar ≤ <b>1</b>. Rotations: LL, RR, LR, RL.</li>
<li><b>Heap:</b> complete binary tree. Max-heap: parent ≥ child. Array me (0-based) children = 2i+1, 2i+2. Heap sort uses heap.</li>
<li><b>B-tree / B+ tree:</b> database indexing me.</li>
</ul>

<h4>Graph</h4>
<ul>
<li>Vertices (nodes) + Edges. <b>Directed</b> ya undirected, <b>weighted</b> ya nahi.</li>
<li>Representation: <b>Adjacency matrix</b> (V×V) ya <b>Adjacency list</b>.</li>
<li><b>BFS</b> = queue use karta hai (level by level). <b>DFS</b> = stack/recursion (gehrai me). Time O(V+E).</li>
<li>Spanning tree (N vertices) me <b>N−1 edges</b>. Complete graph me N(N−1)/2 edges. Sab degrees ka sum = 2E.</li>
</ul>

<h4>Hashing</h4>
<ul>
<li>Key ko hash function se index banate hain. Average search/insert/delete <b>O(1)</b>.</li>
<li><b>Collision</b> (do keys same index) → chaining ya open addressing (linear probing).</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Stack = LIFO, Queue = FIFO. BFS = queue, DFS = stack. BST ka inorder = sorted. Spanning tree = N−1 edges. 4 keys ke BST = 14.</div>
`,
q:[
["Stack kis principle par kaam karta hai?",["FIFO","LIFO","Random","Priority"],1,"Last In First Out."],
["BFS me kaunsa data structure use hota hai?",["Stack","Queue","Heap","Array"],1,"Level order ke liye queue."],
["BST ka inorder traversal kaisa output deta hai?",["Ulta","Sorted","Level wise","Random"],1,"Left-Root-Right = ascending."],
["Postfix expression 2 3 4 * + ka value?",["14","20","9","24"],0,"3×4=12, 2+12=14."],
["10 vertices ke graph ke spanning tree me edges?",["10","9","11","45"],1,"N−1."],
["4 distinct keys se kitne alag BST ban sakte hain?",["8","14","24","16"],1,"Catalan number C4 = 14."],
["Linked list ka fayda kya hai?",["Index se seedha access","Dynamic size aur asaan insert/delete","Kam memory hamesha","Sort hona"],1,"Size badal sakta hai."],
["Non-linear data structure kaun sa hai?",["Stack","Queue","Array","Tree"],3,"Tree aur graph non-linear hain."],
["Circular queue me full hone ki condition?",["rear == n","(rear+1)%n == front","front == 0","rear == front"],1,"Circular wrap ke saath."],
["AVL tree me kisi node ke subtrees ki height ka antar kitna ho sakta hai?",["0","Max 1","Max 2","Koi limit nahi"],1,"Balance factor −1, 0, +1."],
["Hashing me do keys ka same index milna kya kahlata hai?",["Overflow","Collision","Underflow","Rotation"],1,"Collision."],
["Undo feature ke liye kaunsa structure suitable hai?",["Queue","Stack","Graph","Tree"],1,"Latest action pehle wapas."]
]}
);
