(window.NOTES_ADV=window.NOTES_ADV||[]).push(
{t:"1 · Computer basics aur organization",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Computer ek electronic machine hai jo <b>Input → Process → Output → Storage</b> karti hai. Jaise aap ATM me PIN daalte ho (input), machine check karti hai (process), paisa nikalta hai (output).</div>

<h4>Computer ki generations (peedhiyan)</h4>
<div class="tbl"><table><tr><th>Gen</th><th>Saal</th><th>Technology</th><th>Yaad rakho</th></tr>
<tr><td>1st</td><td>1940–56</td><td>Vacuum tube</td><td>Bahut bada, garam hota tha. ENIAC, UNIVAC</td></tr>
<tr><td>2nd</td><td>1956–63</td><td>Transistor</td><td>Chhota, assembly language, COBOL/FORTRAN</td></tr>
<tr><td>3rd</td><td>1964–71</td><td>IC (Integrated Circuit)</td><td>Keyboard-monitor, Operating System</td></tr>
<tr><td>4th</td><td>1971 se ab tak</td><td>Microprocessor (VLSI)</td><td>Personal Computer, GUI, Internet</td></tr>
<tr><td>5th</td><td>Aaj aur aage</td><td>AI, ULSI</td><td>Robot, expert system, quantum</td></tr></table></div>
<ul>
<li><b>Charles Babbage</b> = Computer ka father. <b>Ada Lovelace</b> = pehli programmer. <b>Von Neumann</b> = stored program idea. <b>Alan Turing</b> = theory ka father.</li>
<li>Size ke hisab se: Supercomputer (sabse bada, jaise India ka <b>PARAM</b>, banaya C-DAC ne) → Mainframe → Mini → Micro (hamara PC).</li>
</ul>

<h4>CPU = Computer ka dimaag</h4>
<ul>
<li><b>ALU</b> = calculator (jodna, ghatana, compare karna). <b>CU (Control Unit)</b> = manager (sabko order deta hai). <b>Registers</b> = CPU ke andar bahut chhoti aur super fast memory.</li>
<li><b>PC (Program Counter)</b> → agla instruction kahan hai, uska address. <b>IR</b> → abhi jo instruction chal raha hai. <b>MAR</b> → memory ka address. <b>MDR</b> → memory se aaya/jaane wala data. <b>ACC</b> → result ka temporary store.</li>
<li><b>Bus</b> = tar/raasta. <b>Address bus</b> (CPU → memory, ek taraf), <b>Data bus</b> (dono taraf), <b>Control bus</b> (signals: read/write).</li>
<li>Agar address bus me <b>n</b> lines hain to memory ke <b>2ⁿ</b> locations ho sakte hain. Jaise 10 lines → 2¹⁰ = 1024 locations.</li>
<li><b>Instruction cycle:</b> Fetch (laao) → Decode (samjho) → Execute (karo). Yehi baar-baar chalta rehta hai.</li>
<li><b>RISC:</b> kam aur simple instructions, fast (ARM). <b>CISC:</b> bahut complex instructions (Intel x86).</li>
</ul>

<h4>Memory ko aise samjho (desk → almirah → godown)</h4>
<ul>
<li><b>Order (tez → dheere, mehnga → sasta):</b> Register → Cache → RAM → SSD/HDD.</li>
<li><b>RAM</b> = kaam karte waqt ki memory. <b>Volatile</b> hai (bijli gayi to data gaya). <b>ROM</b> = permanent, bijli jaane par bhi data rehta hai (BIOS yahan hota hai).</li>
<li><b>Cache</b> = CPU ke bahut paas ki chhoti memory; jo data baar-baar chahiye use rakhti hai. Isse computer tez chalta hai.</li>
<li><b>Hit ratio</b> = cache me data mil gaya to hit, nahi mila to miss. Hit jitna zyada, system utna tez.</li>
<li><b>SRAM</b> (tez, mehnga, cache me) vs <b>DRAM</b> (sasta, refresh chahiye, RAM me).</li>
<li><b>ROM ke types:</b> PROM (ek baar likho), EPROM (UV light se mitao), EEPROM (bijli se mitao), Flash (pen drive, SSD).</li>
<li><b>Units:</b> 8 bit = 1 Byte. 1 KB = 1024 Byte. 1 MB = 1024 KB. 1 GB = 1024 MB. 1 TB = 1024 GB.</li>
</ul>

<h4>Input / Output devices</h4>
<ul>
<li><b>OMR</b> = bubble bhari answer sheet padhta hai. <b>OCR</b> = chhape hue akshar padhta hai. <b>MICR</b> = bank cheque ke neeche ke number (special ink). <b>Barcode reader</b> = dukaan me.</li>
<li>Output: monitor, printer (inkjet, laser, dot-matrix), plotter (bade drawing), speaker.</li>
<li><b>Interrupt</b> = CPU ko beech me rokne ka signal ("pehle mera kaam karo"). <b>DMA</b> = device seedha memory se data leta-deta hai, CPU free rehta hai.</li>
</ul>

<h4>Software aur translator</h4>
<ul>
<li><b>System software:</b> OS, driver, utility. <b>Application software:</b> MS Word, browser, games.</li>
<li><b>Compiler</b> poora program ek saath translate karta hai (saari error ek baar me batata hai). <b>Interpreter</b> line-by-line translate karta hai (Python). <b>Assembler</b> assembly ko machine code banata hai.</li>
<li><b>Booting:</b> power on → BIOS (POST check) → OS RAM me load. <b>Cold boot</b> = power se start; <b>Warm boot</b> = restart.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Agle instruction ka address = <b>PC</b>. Sabse tez memory = <b>Register</b>. RAM volatile hai, ROM nahi. Cheque = MICR, exam sheet = OMR.</div>
`,
q:[
["Computer ka father kise kaha jata hai?",["Charles Babbage","Alan Turing","John von Neumann","Blaise Pascal"],0,"Charles Babbage ne Analytical Engine banaya, isliye."],
["Third generation computer me kaunsi technology thi?",["Vacuum tube","Transistor","IC (Integrated Circuit)","Microprocessor"],2,"1st vacuum tube, 2nd transistor, 3rd IC, 4th microprocessor."],
["Agle instruction ka address kaun sa register rakhta hai?",["IR","PC","MAR","ACC"],1,"PC = Program Counter."],
["Sabse tez memory kaun si hai?",["RAM","Cache","Register","Hard disk"],2,"Register CPU ke andar hota hai, isliye sabse tez."],
["Kaun si memory volatile hai?",["ROM","RAM","Flash","EEPROM"],1,"RAM me bijli jaate hi data mit jata hai."],
["Exam ki bubble answer sheet kaun padhta hai?",["OCR","MICR","OMR","Barcode reader"],2,"OMR = Optical Mark Reader."],
["Bank cheque processing me kaunsa reader use hota hai?",["OMR","OCR","MICR","Scanner"],2,"MICR = Magnetic Ink Character Recognition."],
["Line-by-line translate karne wala translator?",["Compiler","Assembler","Interpreter","Linker"],2,"Interpreter ek-ek line run karta hai."],
["Address bus me 10 lines hon to kitne memory locations address ho sakte hain?",["10","100","1024","2048"],2,"2¹⁰ = 1024."],
["India ka PARAM supercomputer kisne banaya?",["ISRO","DRDO","C-DAC","TCS"],2,"PARAM series C-DAC ne banayi."],
["DMA ka main fayda kya hai?",["Data direct memory me jata hai, CPU free rehta hai","Cache bada karta hai","Virus rokta hai","Screen tez karta hai"],0,"DMA me CPU data transfer me nahi lagta."],
["1 GB barabar hota hai?",["1000 KB","1024 MB","1024 KB","100 MB"],1,"1 GB = 1024 MB."]
]},

{t:"2 · Number system aur data representation",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Computer sirf <b>0 aur 1</b> samajhta hai (kyunki bijli ON/OFF). Isliye har cheez (number, letter, photo) 0-1 me badli jaati hai.</div>

<h4>4 number systems</h4>
<div class="tbl"><table><tr><th>Naam</th><th>Base</th><th>Digits</th></tr>
<tr><td>Binary</td><td>2</td><td>0, 1</td></tr>
<tr><td>Octal</td><td>8</td><td>0–7</td></tr>
<tr><td>Decimal</td><td>10</td><td>0–9</td></tr>
<tr><td>Hexadecimal</td><td>16</td><td>0–9 aur A–F (A=10, B=11, C=12, D=13, E=14, F=15)</td></tr></table></div>

<h4>Conversion kaise karein (step by step)</h4>
<ul>
<li><b>Binary → Decimal:</b> har bit ko uski position ki power of 2 se guna karo, phir jodo.<br>Example: 1101 = 1×8 + 1×4 + 0×2 + 1×1 = <b>13</b>.</li>
<li><b>Decimal → Binary:</b> baar-baar 2 se bhaag do, remainder <b>neeche se upar</b> padho.<br>Example: 25 → 25÷2=12 r1, 12÷2=6 r0, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1 → <b>11001</b>.</li>
<li><b>Binary → Octal:</b> right se <b>3-3 bit</b> ke group. 101 101 = <b>55</b>.</li>
<li><b>Binary → Hex:</b> right se <b>4-4 bit</b> ke group. 1011 0110 = <b>B6</b>.</li>
<li><b>Hex → Decimal:</b> 2F = 2×16 + 15 = <b>47</b>.</li>
<li><b>Fraction:</b> 0.101₂ = 1/2 + 0 + 1/8 = 0.625. 1011.1101₂ = 11 + 0.5 + 0.25 + 0.0625 = <b>11.8125</b>.</li>
<li>Yaad karo: 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2¹⁰=1024.</li>
<li><b>n bit</b> se 2ⁿ alag values bante hain (0 se 2ⁿ−1 tak).</li>
</ul>

<h4>Negative number kaise rakhte hain?</h4>
<ul>
<li><b>1's complement</b> = saare bit ulta kar do (0↔1).</li>
<li><b>2's complement</b> = 1's complement + 1. Computer negative numbers isi se rakhta hai.<br>Example: 5 = 0101. Ulta = 1010. +1 = <b>1011</b> (yeh −5 hai).</li>
<li><b>8-bit range (2's complement):</b> −128 se +127. n bit ka range: −2ⁿ⁻¹ se 2ⁿ⁻¹−1.</li>
<li><b>Subtraction:</b> A − B ko A + (B ka 2's complement) bana do. Last ka carry hata do.</li>
<li><b>Overflow:</b> do positive jodne par negative aaye, ya do negative jodne par positive aaye.</li>
<li>Left shift 1 = ×2, right shift 1 = ÷2.</li>
</ul>

<h4>Codes (letters ko numbers me)</h4>
<ul>
<li><b>ASCII:</b> 7 bit (128 characters). Yaad rakho: <b>A = 65</b>, Z = 90, <b>a = 97</b>, <b>0 = 48</b>, space = 32. Small letter = capital + 32.</li>
<li><b>Unicode:</b> sab bhashaon (Hindi bhi) ke liye. UTF-8, UTF-16, UTF-32.</li>
<li><b>BCD:</b> har decimal digit ke liye 4 bit. 47 → 0100 0111.</li>
<li><b>Gray code:</b> ek step me sirf 1 bit badalta hai (0=000, 1=001, 2=011, 3=010).</li>
<li><b>Excess-3:</b> BCD + 3.</li>
</ul>

<h4>Floating point (IEEE 754)</h4>
<ul>
<li>Single precision = <b>32 bit</b>: 1 sign + 8 exponent + 23 mantissa. Bias = <b>127</b>.</li>
<li>Double precision = <b>64 bit</b>: 1 sign + 11 exponent + 52 mantissa. Bias = <b>1023</b>.</li>
</ul>

<h4>Error pakadna</h4>
<ul>
<li><b>Parity bit:</b> total 1 ki ginti even ya odd rakhta hai. Sirf 1-bit error pakadta hai.</li>
<li><b>Checksum</b> aur <b>CRC</b>: network me error check. <b>Hamming code:</b> 1-bit error pakad bhi sakta hai aur <b>theek</b> bhi kar sakta hai.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> 1011.1101 = 11.8125 (11.75 nahi). Computer negative ke liye 2's complement use karta hai. ASCII 7 bit, Unicode me Hindi support.</div>
`,
q:[
["Binary 1101 ka decimal value kya hai?",["11","12","13","14"],2,"8+4+0+1 = 13."],
["Decimal 25 ka binary kya hoga?",["11001","10011","11010","10101"],0,"16+8+1 = 25 → 11001."],
["Hexadecimal F ka decimal value?",["14","15","16","13"],1,"A=10 … F=15."],
["Binary 101101 ko octal me badlo.",["45","55","66","35"],1,"3-3 ke group: 101=5, 101=5 → 55."],
["Binary 10110110 ka hex kya hai?",["A6","B6","B5","C6"],1,"1011=B, 0110=6 → B6."],
["0101 ka 2's complement kya hoga (4-bit)?",["1010","1011","1101","0101"],1,"Ulta 1010, +1 = 1011."],
["8-bit 2's complement me range kya hai?",["0 se 255","−127 se 127","−128 se 127","−256 se 255"],2,"−2⁷ se 2⁷−1."],
["ASCII me 'A' ki value kitni hoti hai?",["60","65","97","48"],1,"'A'=65, 'a'=97, '0'=48."],
["IEEE 754 single precision me exponent ka bias kitna hota hai?",["63","127","255","1023"],1,"Single = 127, double = 1023."],
["Kaun sa code Hindi samet sabhi bhashaon ko support karta hai?",["ASCII","BCD","Unicode","Gray"],2,"Unicode universal hai."],
["1011.1101 (binary) ka decimal kya hai?",["11.75","11.8125","12.125","13.5"],1,"8+2+1 + 0.5+0.25+0.0625 = 11.8125."],
["Hamming code ka kaam kya hai?",["Sirf error pakadna","Error pakadna aur 1-bit error theek karna","Data compress karna","Data encrypt karna"],1,"Detect aur correct dono."]
]},

{t:"3 · Boolean algebra aur digital logic",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Digital circuit ke <b>gates</b> switch jaise hain. Input 0 ya 1, output bhi 0 ya 1. Saare computer isi se bane hain.</div>

<h4>Gates ko aasan bhasha me</h4>
<div class="tbl"><table><tr><th>Gate</th><th>Output 1 kab hota hai?</th><th>Formula</th></tr>
<tr><td>AND</td><td>Dono input 1 ho</td><td>A·B</td></tr>
<tr><td>OR</td><td>Koi ek bhi 1 ho</td><td>A+B</td></tr>
<tr><td>NOT</td><td>Input ulta (0→1)</td><td>A'</td></tr>
<tr><td>NAND</td><td>AND ka ulta (kam se kam ek 0)</td><td>(AB)'</td></tr>
<tr><td>NOR</td><td>OR ka ulta (dono 0)</td><td>(A+B)'</td></tr>
<tr><td>XOR</td><td>Dono input <b>alag</b> hon</td><td>A⊕B</td></tr>
<tr><td>XNOR</td><td>Dono input <b>same</b> hon</td><td>(A⊕B)'</td></tr></table></div>
<ul>
<li><b>NAND aur NOR universal gates</b> hain: sirf inhi se AND, OR, NOT sab bana sakte ho.</li>
<li>XOR ka trick: 1 ki ginti <b>odd</b> ho to output 1.</li>
</ul>

<h4>Boolean algebra ke rules</h4>
<ul>
<li>A + 0 = A, A · 1 = A, A + 1 = 1, A · 0 = 0</li>
<li>A + A = A, A · A = A, A + A' = 1, A · A' = 0</li>
<li><b>Absorption:</b> A + AB = A, &nbsp; A + A'B = A + B</li>
<li><b>De Morgan:</b> (AB)' = A' + B' &nbsp; aur &nbsp; (A+B)' = A'B' &nbsp; (lambi line todo, sign badlo)</li>
<li><b>Duality:</b> AND↔OR aur 0↔1 badal do.</li>
<li><b>SOP</b> = minterms ka sum (AND ka OR). <b>POS</b> = maxterms ka product (OR ka AND).</li>
<li>n variables ki truth table me 2ⁿ rows hoti hain.</li>
</ul>

<h4>K-map (expression chhota karne ka tarika)</h4>
<ul>
<li>1 ko group karo: <b>1, 2, 4, 8, 16</b> ke group (power of 2). Group jitna bada, expression utna chhota.</li>
<li>2 cells ka group = 1 variable hat jata hai. 4 cells = 2 variable hat jaate hain. 8 cells = 3 variable.</li>
<li>Kinare (edges) wrap hote hain. <b>Don't care (X)</b> ko zaroorat ho to 1 maan lo.</li>
<li>2 variable = 4 cells, 3 variable = 8 cells, 4 variable = 16 cells.</li>
</ul>

<h4>Combinational circuits (sirf abhi ke input par depend)</h4>
<ul>
<li><b>Half Adder:</b> 2 bit jodta hai. <b>Sum = A⊕B</b>, <b>Carry = A·B</b>.</li>
<li><b>Full Adder:</b> 3 bit (A, B, carry-in). Sum = A⊕B⊕Cin.</li>
<li><b>Half Subtractor:</b> Difference = A⊕B, Borrow = A'B.</li>
<li><b>MUX (Multiplexer):</b> bahut input me se ek chunta hai. 2ⁿ input ke liye <b>n select lines</b>. 4-to-1 MUX → 2 select lines. 8-to-1 → 3 select lines.</li>
<li><b>DEMUX:</b> ek input ko kai output me bhejta hai.</li>
<li><b>Decoder:</b> n input → 2ⁿ output (3-to-8 decoder). <b>Encoder:</b> 2ⁿ input → n output.</li>
</ul>

<h4>Sequential circuits (purani state bhi yaad rakhte hain)</h4>
<div class="tbl"><table><tr><th>Flip-flop</th><th>Kaam</th></tr>
<tr><td>SR</td><td>Set/Reset. S=R=1 <b>allowed nahi</b></td></tr>
<tr><td>D</td><td>Jo D ho wahi store kar leta hai (1 bit memory)</td></tr>
<tr><td>JK</td><td>J=K=1 par <b>toggle</b> (0↔1)</td></tr>
<tr><td>T</td><td>T=1 par toggle, T=0 par same</td></tr></table></div>
<ul>
<li>Ek flip-flop = <b>1 bit</b> store karta hai. n flip-flop = n bit register.</li>
<li><b>Counter:</b> n flip-flop se max 2ⁿ states (3 FF → 8 states, MOD-8).</li>
<li><b>Ring counter:</b> n FF → n states. <b>Johnson counter:</b> n FF → <b>2n</b> states.</li>
<li>Latch level se chalta hai; flip-flop <b>clock edge</b> par badalta hai.</li>
<li><b>ROM size:</b> 2ⁿ words × m bit. <b>PLA</b> = Programmable Logic Array.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> NOR sirf tab 1 deta hai jab dono input 0 ho. 8-to-1 MUX = 3 select lines. Half adder ka carry = AND.</div>
`,
q:[
["Universal gates kaun se hain?",["AND, OR","XOR, XNOR","NAND, NOR","NOT, AND"],2,"NAND aur NOR se koi bhi gate ban sakta hai."],
["XOR gate ka output kab 1 hota hai?",["Dono input 1","Dono input 0","Input alag-alag ho","Hamesha"],2,"XOR = different inputs."],
["De Morgan ke anusar (A+B)' = ?",["A'+B'","A'B'","AB","A+B'"],1,"Sign badlo, lambi line todo: A'·B'."],
["A + AB ka simplified form kya hai?",["A","B","AB","A+B"],0,"Absorption law."],
["Half adder me Carry kis gate se milta hai?",["OR","XOR","AND","NAND"],2,"Carry = A·B."],
["8-to-1 multiplexer me kitni select lines hoti hain?",["2","3","4","8"],1,"2³ = 8."],
["3-to-8 decoder me output kitne hote hain?",["3","6","8","16"],2,"3 input → 2³ = 8 output."],
["T flip-flop me T=1 ho to kya hota hai?",["Output same rehta hai","Output toggle hota hai","Reset hota hai","Set hota hai"],1,"T=1 toggle."],
["3 flip-flop se bana counter maximum kitne states ginega?",["3","6","8","9"],2,"2³ = 8."],
["4 flip-flop ke Johnson counter me kitne states hote hain?",["4","8","16","2"],1,"Johnson = 2n = 8."],
["NOR gate ka output kab 1 hota hai?",["Koi ek input 1","Dono input 0","Dono input 1","Input alag ho"],1,"NOR = OR ka ulta."],
["K-map me 4 cells ke group se kitne variable hat jaate hain?",["1","2","3","4"],1,"2ᵏ cells → k variable hatte hain; 4=2² → 2."]
]},

{t:"4 · Programming ki basic baatein",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Program likhne se pehle plan banate hain: pehle <b>algorithm</b> (steps), phir <b>flowchart</b> (chitra), phir code.</div>

<h4>Algorithm aur flowchart</h4>
<ul>
<li><b>Algorithm</b> = problem solve karne ke limited, clear steps. Jaise chai banane ki recipe.</li>
<li>Algorithm ke gun: <b>Input, Output, Definiteness</b> (clear steps), <b>Finiteness</b> (ek din khatam ho), <b>Effectiveness</b> (karne layak).</li>
<li><b>Pseudocode</b> = English jaisi simple bhasha me program ka plan.</li>
</ul>
<div class="tbl"><table><tr><th>Flowchart ka symbol</th><th>Matlab</th></tr>
<tr><td>Oval</td><td>Start / Stop</td></tr>
<tr><td>Parallelogram</td><td>Input / Output</td></tr>
<tr><td>Rectangle</td><td>Process (calculation)</td></tr>
<tr><td>Diamond</td><td>Decision (yes/no)</td></tr>
<tr><td>Circle</td><td>Connector</td></tr></table></div>

<h4>Programming ke concepts</h4>
<ul>
<li><b>Variable</b> = memory ka naam wala dabba. <b>Constant</b> = jiski value badalti nahi. <b>Keyword</b> = reserved word (if, while).</li>
<li><b>Local variable</b> sirf apne function ke andar chalta hai. <b>Global</b> poore program me.</li>
<li><b>Call by value:</b> copy jati hai, original nahi badalta. <b>Call by reference:</b> address jata hai, original badal jata hai.</li>
<li><b>Recursion:</b> function khud ko call karta hai. <b>Base case zaroori</b> hai, nahi to infinite call → stack overflow.</li>
<li><b>Structured programming:</b> sequence (ek ke baad ek), selection (if/else), iteration (loop).</li>
</ul>

<h4>3 types ki errors</h4>
<ul>
<li><b>Syntax error:</b> grammar galat (semicolon bhoole). Compile time par pakadi jaati hai.</li>
<li><b>Runtime error:</b> program chalte waqt crash (zero se divide).</li>
<li><b>Logical error:</b> program chalta hai par answer galat. Sabse mushkil dhoondhna.</li>
</ul>

<h4>Language ka itihaas (yaad rakhne layak)</h4>
<ul>
<li><b>FORTRAN</b> (1957) = pehli high-level language. <b>C</b> (1972, Dennis Ritchie). <b>C++</b> (Bjarne Stroustrup). <b>Python</b> (Guido van Rossum). <b>Java</b> (James Gosling). </li>
</ul>

<h4>Classic programs ka logic</h4>
<pre>Factorial : f = 1; for i = 1 to n: f = f * i
Fibonacci : 0 1 1 2 3 5 8 ...  (pichle 2 ka sum)
Prime     : 2 se sqrt(n) tak koi divisor nahi to prime
GCD       : while b != 0: (a, b) = (b, a mod b)
Reverse   : rev = rev*10 + n%10; n = n/10
Armstrong : digits ke cube ka sum = number  (153 = 1+125+27)
Swap      : t = a; a = b; b = t</pre>
<ul>
<li>GCD(48,18): 48 mod 18 = 12 → (18,12) → 6 → (12,6) → 0. <b>GCD = 6</b>. LCM = (a × b) ÷ GCD.</li>
<li>1 se n tak ka sum = n(n+1)/2.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Decision = diamond, I/O = parallelogram. Logical error me program chalta hai par answer galat aata hai.</div>
`,
q:[
["Flowchart me decision kis symbol se dikhate hain?",["Oval","Parallelogram","Diamond","Rectangle"],2,"Yes/No decision = diamond."],
["Input/Output ke liye flowchart ka symbol?",["Oval","Parallelogram","Diamond","Circle"],1,"Parallelogram."],
["Syntax error kab pakdi jaati hai?",["Compile time par","Run time par","Output dekhne par","Kabhi nahi"],0,"Compiler grammar check karta hai."],
["Program chalta hai par answer galat aata hai. Yeh kaisi error hai?",["Syntax","Runtime","Logical","Link"],2,"Logical error."],
["C language kisne banayi?",["James Gosling","Dennis Ritchie","Guido van Rossum","Bjarne Stroustrup"],1,"1972, Bell Labs."],
["Pehli high-level language kaun si thi?",["COBOL","FORTRAN","C","Pascal"],1,"FORTRAN (1957)."],
["GCD(48, 18) kya hoga?",["3","6","9","12"],1,"Euclid: 48,18 → 18,12 → 12,6 → 6,0."],
["Call by value me kya hota hai?",["Original value badal jati hai","Value ki copy jati hai","Address jata hai","Program rukta hai"],1,"Copy badalti hai, original nahi."],
["Recursion me base case na ho to kya hoga?",["Program tez chalega","Infinite calls aur stack overflow","Output double aayega","Kuch nahi"],1,"Function khud ko bulata rahega."],
["Kaun sa algorithm ka gun NAHI hai?",["Finiteness","Definiteness","Infinite steps","Input/Output"],2,"Algorithm finite hona chahiye."]
]}
);
