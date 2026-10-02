/* ---------------- data ---------------- */
var TABS=[
 {id:"home",label:"Home",icon:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'},
 {id:"syllabus",label:"Syllabus",icon:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12l3 3 5-6"/>'},
 {id:"notes",label:"Notes",icon:'<path d="M5 4h11l3 3v13H5z"/><path d="M8 11h8M8 15h8"/>'},
 {id:"quiz",label:"Quiz",icon:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 115 .5c0 1.5-2.5 2-2.5 3.5M12 17v.1"/>'},
 {id:"papers",label:"Papers",icon:'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/>'},
 {id:"videos",label:"Videos",icon:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z"/>'}
];

var SYL=[
 {t:"Part III · Computer Science (80 marks)",g:[
  {n:"Computer fundamentals",i:["Hardware: CPU, memory hierarchy, I/O devices","Software types, operating system basics","Data representation, number systems, conversions","Boolean logic: gates, laws, De Morgan, K-map, adders, MUX, flip-flops"]},
  {n:"Programming",i:["Algorithms and flowcharts","Variables, data types, operators","Control structures: if, loops, switch","Functions and recursion","Strings, arrays / lists","File handling","C / C++ / Python"]},
  {n:"Object-oriented programming",i:["Classes and objects","Encapsulation, abstraction, inheritance, polymorphism","Constructors / destructors, basic software design"]},
  {n:"Data structures",i:["Stack (push / pop, postfix)","Queue (circular, deque, priority)","Linked list","Trees: BST, traversals, balanced trees, heaps","Graphs: BFS, DFS, spanning tree","Searching: linear, binary, hashing","Sorting: bubble, selection, insertion, merge, quick","Time complexity, Big-O"]},
  {n:"Databases",i:["Relational model, ER diagram","Keys: primary, foreign, candidate, super","SQL: DDL, DML, DCL, TCL, joins, group by / having","Normalisation: 1NF, 2NF, 3NF, BCNF","Transactions, ACID"]},
  {n:"Computer networks",i:["LAN / MAN / WAN, topologies, devices","OSI and TCP/IP models","Protocols: HTTP, FTP, SMTP, DNS, DHCP, TCP, UDP","IP addressing, ports","Internet, web, network security"]},
  {n:"Cybersecurity, AI, cloud",i:["Malware, phishing, firewall, encryption, IT Act","Privacy and ethics, plagiarism, copyright","AI and machine learning basics","Cloud (IaaS, PaaS, SaaS), IoT, big data, blockchain"]},
  {n:"Seen in earlier papers (extra)",i:["OS: scheduling, deadlock, paging, segmentation, thrashing, file systems","Algorithm design: divide and conquer, greedy, dynamic programming","MS Office, internet and e-mail basics"]}
 ]},
 {t:"Part II · General Studies (40 marks)",g:[
  {n:"Elementary Mathematics",i:["Number system, HCF / LCM, simplification","Ratio, proportion, percentage","Profit, loss, discount, simple and compound interest","Average, time and work, time-speed-distance","Algebra, geometry, mensuration","Data handling, mean / median / mode, probability"]},
  {n:"Mental Ability",i:["Analogy, classification, series","Coding-decoding, blood relations, direction sense","Ranking, syllogism, Venn diagrams, calendar, clock"]},
  {n:"General Awareness",i:["India and neighbours, institutions","Current affairs, schemes, awards, important days","Indian history and culture","Polity: Constitution, rights, Parliament, judiciary","Economy: banking, budget, inflation, schemes","Sports","Environment and ecology","Bihar GK (commonly asked)"]},
  {n:"Science and Social Science",i:["Physics, chemistry, biology basics","Civics, economics, social issues","Geography: solar system, Earth, India, human geography","National Movement: 1857, Congress, Swadeshi, Gandhian era, Independence"]}
 ]},
 {t:"Part I · Language (30 marks, qualifying)",g:[
  {n:"English",i:["Reading comprehension","Parts of speech, tenses, articles, subject-verb agreement","Active / passive, direct / indirect speech","Synonyms, antonyms, idioms, one-word substitution","Error detection, fill in the blanks, rearrangement"]},
  {n:"Hindi / Urdu / Bengali",i:["Gadyansh / padyansh (comprehension)","Grammar: sangya, sarvnam, visheshan, kriya, ling, vachan, karak, kaal, vachya","Sandhi, samas, upsarg-pratyay","Muhavare, lokoktiyan, paryayvachi, vilom, anekarthi","Spelling and sentence correction"]}
 ]}
];

var QUIZ=[
 ["Which gate is a universal gate? / कौन-सा गेट यूनिवर्सल है?",["AND","OR","NAND","XOR"],2,"NAND and NOR can build any circuit."],
 ["Binary of decimal 25 / 25 का बाइनरी",["11001","10011","11010","10101"],0,"16+8+1 = 25."],
 ["Decimal value of hex F / हेक्स F का मान",["14","15","16","13"],1,"A=10 … F=15."],
 ["Select lines for a 16-to-1 multiplexer / 16-to-1 MUX की सेलेक्ट लाइनें",["2","3","4","8"],2,"2⁴ = 16."],
 ["Which memory is volatile? / कौन-सी मेमोरी वोलाटाइल है?",["ROM","RAM","PROM","EPROM"],1,"RAM loses data when power is off."],
 ["Fastest memory in a computer / सबसे तेज मेमोरी",["RAM","Cache","Register","Hard disk"],2,"Registers sit inside the CPU."],
 ["Output of 7/2 in C (int) / C में 7/2",["3.5","3","4","2"],1,"Integer division truncates."],
 ["A C string ends with / C स्ट्रिंग का अंत",["'\\n'","'\\0'","' '","EOF"],1,"The null character."],
 ["Which loop runs at least once? / कौन-सा लूप कम से कम एक बार चलता है?",["for","while","do-while","none"],2,"Exit-controlled loop."],
 ["Zero-initialised memory allocation / शून्य से प्रारंभ मेमोरी",["malloc","calloc","realloc","free"],1,"calloc zeroes the block."],
 ["Stack follows / स्टैक का सिद्धांत",["FIFO","LIFO","Random","Priority"],1,"Last in, first out."],
 ["Inorder traversal of a BST gives / BST का इनऑर्डर",["Reverse order","Sorted order","Level order","Random"],1,"Left, root, right = ascending."],
 ["Postfix value of 2 3 4 * + / पोस्टफिक्स 2 3 4 * +",["14","20","9","24"],0,"3×4 = 12, then +2 = 14."],
 ["Edges in a spanning tree of 10 vertices / 10 शीर्षों के स्पैनिंग ट्री के किनारे",["10","9","11","45"],1,"N − 1 = 9."],
 ["Data structure used in BFS / BFS में प्रयुक्त",["Stack","Queue","Tree","Array"],1,"Level order needs a queue."],
 ["Worst case of binary search / बाइनरी सर्च का सबसे खराब समय",["O(n)","O(log n)","O(n log n)","O(1)"],1,"Halves the range each step."],
 ["Merge sort is based on / मर्ज सॉर्ट आधारित है",["Greedy","Divide and Conquer","Dynamic programming","Backtracking"],1,"Split, sort halves, merge."],
 ["Worst case of quick sort / क्विक सॉर्ट का सबसे खराब समय",["O(n log n)","O(n)","O(n²)","O(log n)"],2,"Bad pivots every time."],
 ["Which is NOT a deadlock condition? / डेडलॉक की शर्त कौन-सी नहीं?",["Mutual exclusion","Hold and wait","Preemption","Circular wait"],2,"The condition is NO preemption."],
 ["Banker's algorithm is used for / बैंकर्स एल्गोरिदम",["Deadlock avoidance","Paging","Scheduling","Sorting"],0,"It checks for safe states."],
 ["Excessive paging activity is called / अत्यधिक पेजिंग",["Spooling","Thrashing","Fragmentation","Caching"],1,"CPU spends its time swapping."],
 ["Page size 8 KB: offset bits / पेज साइज 8 KB: ऑफसेट बिट्स",["12","13","14","10"],1,"8 KB = 2¹³."],
 ["Scheduling with a time quantum / टाइम क्वांटम वाला शेड्यूलिंग",["FCFS","SJF","Round Robin","Priority"],2,"Preemptive, time-sharing."],
 ["Unique, non-null row identifier / अद्वितीय, गैर-NULL पहचान",["Foreign key","Primary key","Alternate key","Super key"],1,"Primary key."],
 ["SQL clause that filters groups / समूहों को फ़िल्टर करने वाला क्लॉज़",["WHERE","HAVING","ORDER BY","LIMIT"],1,"WHERE filters rows, HAVING filters groups."],
 ["Which is a DDL command? / DDL कमांड कौन-सा है?",["INSERT","UPDATE","ALTER","SELECT"],2,"CREATE, ALTER, DROP, TRUNCATE."],
 ["3NF removes / 3NF हटाता है",["Partial dependency","Transitive dependency","Multivalued attribute","Foreign key"],1,"2NF removes partial dependency."],
 ["In ACID, 'I' stands for / ACID में 'I'",["Integrity","Isolation","Indexing","Inheritance"],1,"Atomicity, Consistency, Isolation, Durability."],
 ["OSI layer that handles routing / रूटिंग वाली परत",["Data link","Transport","Network","Session"],2,"Layer 3, IP."],
 ["Default port of HTTPS / HTTPS का पोर्ट",["80","21","443","25"],2,"HTTP is 80."],
 ["IPv6 address size / IPv6 का आकार",["32 bit","64 bit","128 bit","256 bit"],2,"IPv4 is 32 bit."],
 ["Device that works with MAC addresses / MAC पते से काम करने वाला",["Hub","Switch","Repeater","Modem"],1,"A router uses IP addresses."],
 ["Protocol for sending e-mail / ईमेल भेजने का प्रोटोकॉल",["POP3","IMAP","SMTP","FTP"],2,"POP3 and IMAP receive."],
 ["Self-replicating network malware / नेटवर्क पर फैलने वाला मैलवेयर",["Worm","Trojan","Spyware","Adware"],0,"Worms spread without a host file."],
 ["RSA is a / RSA है",["Symmetric algorithm","Asymmetric algorithm","Hash function","Compression"],1,"Public + private key pair."],
 ["Not an OOP principle / OOP सिद्धांत नहीं",["Encapsulation","Inheritance","Compilation","Polymorphism"],2,"Compilation is a build step."],
 ["Python: print(10 // 3) / पाइथन में 10 // 3",["3.33","3","4","1"],1,"Floor division."],
 ["Immutable Python type / अपरिवर्तनीय टाइप",["list","dict","tuple","set"],2,"Tuples cannot change."],
 ["MS Word shortcut for Undo / Undo का शॉर्टकट",["Ctrl+Y","Ctrl+Z","Ctrl+U","Ctrl+X"],1,"Ctrl+Y is Redo."],
 ["Excel 2007+ file extension / एक्सेल फाइल एक्सटेंशन",[".xls",".xlsx",".docx",".pptx"],1,".docx is Word, .pptx is PowerPoint."]
];

var PYQ=[
 ["76","1010 AND 1100","1000 (bit-wise AND)"],
 ["80","Select lines, 8-to-1 mux","3 (2³ = 8)"],
 ["81","1234 in binary / octal / hex","10011010010 · 2322 · 4D2"],
 ["82","Booth's algorithm","Binary multiplication"],
 ["85","1011.1101₂ in decimal","11.8125 → none of the options (E)"],
 ["92","Balanced tree: subtree height difference","At most 1"],
 ["96","Preorder 15,10,12,11,20,18,16,19 → postorder","11,12,10,16,19,18,20,15"],
 ["97","Distinct BSTs with 4 keys","14 (Catalan)"],
 ["99","Big-O notation","Upper bound of runtime"],
 ["101","Merge sort paradigm","Divide and conquer"],
 ["102","Spanning tree edges, N vertices","N − 1"],
 ["112","Page offset bits for 4 KB pages","12"],
 ["114","Cause of thrashing","Excessive paging activity"]
];

var AD="https://www.adda247.com/jobs/wp-content/uploads/sites/";
var PAPERS=[
 ["Class 11–12 Computer Science · 22 Jul 2024",AD+"22/2026/08/21153114/BPSC-PGT-Question-Paper-For-Class-11-12-Computer-Science-22-July-2024.pdf","Question paper"],
 ["Class 11–12 Computer Science (CareerPower copy)","https://www.careerpower.in/blog/wp-content/uploads/2025/05/15125804/BPSC-Question-Paper-For-Class-11-12-Computer-Science.pdf","Question paper"],
 ["PGT Computer Science 2023",AD+"13/2026/08/03113817/BPSC-PGT-2023-Question-Papers-Computer-Science.pdf","Question paper"],
 ["PGT Computer Science 2023 · final answer key",AD+"13/2026/08/03113909/BPSC-PGT-Final-Answer-Key-2023-Computer-Science.pdf","Answer key"],
 ["Senior Secondary Teacher · Computer Science",AD+"22/2026/08/25150924/BPSC-Senior-Secondary-Teacher-Paper-Computer-Science.pdf","Question paper"],
 ["TGT Computer",AD+"22/2026/08/25145012/BPSC-Teacher-Question-Paper-TGT-Computer.pdf","Question paper"],
 ["Secondary Teacher · final answer key · Computer","https://www.careerpower.in/blog/wp-content/uploads/2025/05/15154259/BPSC-Secondary-Teacher-Final-Answer-Key-Computer.pdf","Answer key"]
];
var SRC=[
 ["BPSC official website","https://bpsc.bihar.gov.in"],
 ["Adda247 · TRE 3.0 question papers (all subjects)","https://www.adda247.com/teaching-jobs-exam/bpsc-tre-3-0-question-papers-2024/"],
 ["CareerPower · TRE previous year papers","https://www.careerpower.in/bpsc-teacher-previous-year-question-papers.html"],
 ["PW · TRE 3.0 question papers","https://www.pw.live/teaching/exams/bpsc-tre-3-0-question-papers-2024"],
 ["BPSC Mitra · TRE PYQ","https://bpscmitra.in/bpsc-tre-pyq/"],
 ["CSEStudy247 · TRE 1, 2, 3 Computer Science papers","https://csestudy247.com/download-bpsc-tre-1-tre-2-tre-3-computer-science-question-paper-pdf/"]
];

var VID_SPECIAL=[
 ["TRE 4.0 & STET Computer Science · Shubham Sir","https://www.youtube.com/playlist?list=PLZxCjLZIxwFlo2Mc890-BBiJ8IByFVeV0","Playlist"],
 ["Mindmap Gurukul · TRE 4.0 Computer Science","https://www.youtube.com/playlist?list=PLwuFZwjraULZEo_Hs-Y3ij1agXxekNbWD","Playlist"],
 ["Most Important MCQs · Part 1","https://www.youtube.com/watch?v=hBwAG8b5OUs","Video"],
 ["Data Structure for TRE 4.0 · L-5","https://www.youtube.com/watch?v=3nfsKc_7kS4","Video"],
 ["Eligibility + 121-day selection strategy","https://www.youtube.com/watch?v=n821HzE9d_k","Video"],
 ["BPSC TRE 4.0 Computer Teacher class","https://www.youtube.com/watch?v=9ppY35sHFjU","Video"]
];
var VID_SUBJ=[
 ["DBMS · complete playlist (Hindi)","https://www.youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV","Playlist"],
 ["Data Structures & Algorithms · CodeWithHarry","https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi","Playlist"],
 ["Data Structures & Algorithms (C++)","https://www.youtube.com/playlist?list=PLmZVoKmWPOelODOBtNXxALDvnNMI4aI4Q","Playlist"],
 ["C Programming & Data Structures","https://www.youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM","Playlist"]
];
var VID_TOPIC=[
 ["Number system & conversions","number system binary octal hexadecimal conversion hindi"],
 ["Logic gates & Boolean algebra","logic gates boolean algebra K-map hindi"],
 ["Flip-flop, MUX, adder","flip flop multiplexer adder digital electronics hindi"],
 ["Computer fundamentals & memory","computer fundamentals memory hierarchy cache hindi"],
 ["C programming full course","C programming full course hindi"],
 ["C pointers & arrays","C pointers arrays hindi"],
 ["Python for beginners","python full course hindi"],
 ["OOP concepts (C++)","OOP concepts C++ hindi"],
 ["Stack & queue","stack queue data structure hindi"],
 ["Linked list","linked list data structure hindi"],
 ["Trees & BST traversal","binary tree BST traversal hindi"],
 ["Graph BFS DFS","graph BFS DFS hindi"],
 ["Sorting & searching","sorting searching algorithms time complexity hindi"],
 ["Time complexity, Big-O","time complexity big O notation hindi"],
 ["Operating system · Gate Smashers","operating system gate smashers hindi playlist"],
 ["CPU scheduling","CPU scheduling FCFS SJF round robin hindi"],
 ["Deadlock & Banker's algorithm","deadlock bankers algorithm hindi"],
 ["Paging, segmentation, virtual memory","paging segmentation virtual memory thrashing hindi"],
 ["SQL queries","SQL tutorial hindi"],
 ["Normalization 1NF–BCNF","normalization 1NF 2NF 3NF BCNF hindi"],
 ["ER model & keys","ER diagram keys DBMS hindi"],
 ["Computer networks · Gate Smashers","computer networks gate smashers hindi playlist"],
 ["OSI & TCP/IP model","OSI model TCP IP model hindi"],
 ["IP addressing & subnetting","IP addressing classes subnetting hindi"],
 ["Cyber security basics","cyber security basics malware phishing hindi"],
 ["AI, ML, cloud, IoT basics","AI machine learning cloud computing IoT basics hindi"],
 ["MS Office & Excel basics","MS Excel MS Word basics hindi"],
 ["BPSC TRE computer PYQ discussion","BPSC TRE computer science previous year question discussion"],
 ["BPSC TRE 4.0 computer MCQ practice","BPSC TRE 4.0 computer science MCQ practice"],
 ["TRE 4.0 General Studies","BPSC TRE 4.0 general studies class"],
 ["Bihar GK for TRE","Bihar GK BPSC TRE 4.0"],
 ["Hindi grammar for TRE","BPSC TRE hindi grammar"],
 ["English grammar for TRE","BPSC TRE english grammar"]
];

/* ---------------- helpers ---------------- */
function $(s,r){return (r||document).querySelector(s)}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
var store={
  get:function(k,d){try{var v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
function link(t,u,tag,cls){return '<a class="linkrow" href="'+esc(u)+'" target="_blank" rel="noopener"><span class="tag '+(cls||"")+'">'+esc(tag)+'</span><span class="t">'+esc(t)+'</span></a>'}

/* ---------------- views ---------------- */
function viewHome(){
  var done=0,total=0,ticks=store.get("ticks",{});
  SYL.forEach(function(p,pi){p.g.forEach(function(g,gi){g.i.forEach(function(_,ii){total++;if(ticks[pi+"."+gi+"."+ii])done++})})});
  var rc=Object.keys(store.get("read",{})).length;
  return '<div class="facts">'+
   '<div class="fact"><b>407</b><span>Computer Science posts, Class 11–12</span></div>'+
   '<div class="fact"><b>26 Oct 2026</b><span>Last date to apply (fee: 25 Oct)</span></div>'+
   '<div class="fact"><b>150</b><span>Marks: Language 30 · GS 40 · Subject 80</span></div>'+
   '<div class="fact"><b>'+done+' / '+total+'</b><span>Syllabus topics ticked</span></div>'+'<div class="fact"><b>'+rc+' / '+chapters().length+'</b><span>Notes chapters padhe</span></div>'+
  '</div>'+
  '<div class="note">Dates and vacancy counts come from coaching-site news pages and differ between them (some say 32,388 total posts, some 33,320; one headline says applications were postponed). Confirm everything in the official notification, Advertisement 15/2026, at bpsc.bihar.gov.in.</div>'+
  '<div class="card"><h2>Eligibility (as reported)</h2><ul class="plain"><li>B.E / B.Tech (CS / IT), MCA or M.Sc (CS).</li><li>B.Sc (CS) or BCA with a PG degree.</li><li>DOEACC A / B / C level with graduation or PG.</li><li>B.Ed is reported as not mandatory for this post.</li></ul></div>'+
  '<div class="card"><h2>Your progress</h2><div class="prog"><i style="width:'+(total?Math.round(done/total*100):0)+'%"></i></div>'+
   '<div class="row"><button class="btn primary" data-go="syllabus">Open checklist</button><button class="btn" data-go="quiz">'+'Quiz shuru karo'+'</button></div></div>'+
  '<div class="card"><h2>Aur kaun se exam de sakte hain?</h2><p style="margin:0 0 6px">Maan raha hoon ki aapki degree CS/IT (B.Tech, BCA, MCA ya B.Sc CS) hai. Neeche ke exams me Maths + Reasoning (Notes tab → Maths + Reasoning) kaam aayega. Eligibility, age aur syllabus har notification me check karein.</p><ul class="plain"><li><b>Teaching:</b> Bihar TRE / STET (Computer), KVS-NVS PGT/TGT Computer, CTET / state TET.</li><li><b>Bihar:</b> BPSC CCE, BSSC graduate level, Bihar Police SI / Sergeant.</li><li><b>SSC:</b> CGL, CHSL, MTS, CPO.</li><li><b>Railway:</b> RRB NTPC, Group D, ALP, JE (CS/IT).</li><li><b>Banking:</b> IBPS / SBI PO, Clerk, RRB, <b>IBPS SO (IT Officer)</b>.</li><li><b>Higher / IT:</b> UGC NET (Computer Science), GATE, defence aur PSU IT posts.</li></ul></div>'+
'<div class="card"><h2>Study order</h2><ul class="plain"><li>Digital logic and number systems</li><li>C programming</li><li>Data structures, then algorithms</li><li>Operating system</li><li>DBMS and SQL</li><li>Networks, security, AI / cloud</li><li>Previous-year papers, timed: 2½ hours, 150 questions</li></ul></div>'+
  '<div class="card"><h2>Honest limits</h2><p style="margin:0">These notes are a revision aid, not full coverage. Practice with the old papers and read a standard book for each subject. Language and General Studies need separate preparation.</p></div>';
}

function viewSyllabus(){
  var ticks=store.get("ticks",{}),h='',done=0,total=0;
  SYL.forEach(function(p,pi){
    h+='<h3>'+esc(p.t)+'</h3>';
    p.g.forEach(function(g,gi){
      var d=0;g.i.forEach(function(_,ii){if(ticks[pi+"."+gi+"."+ii])d++});
      h+='<details'+(pi===0&&gi===0?' open':'')+'><summary><span>'+esc(g.n)+'</span><span class="hi">'+d+'/'+g.i.length+'</span></summary><div class="body">';
      g.i.forEach(function(it,ii){
        var k=pi+"."+gi+"."+ii,on=!!ticks[k];total++;if(on)done++;
        h+='<label class="chk'+(on?' done':'')+'"><input type="checkbox" data-k="'+k+'"'+(on?' checked':'')+'><span>'+esc(it)+'</span></label>';
      });
      h+='</div></details>';
    });
  });
  return '<h2>Syllabus checklist</h2><div class="qtop"><span>'+done+' of '+total+' topics done</span><button class="btn" id="resetTicks">Reset</button></div><div class="prog"><i style="width:'+(total?Math.round(done/total*100):0)+'%"></i></div>'+
   '<div class="note">Built from a coaching-site syllabus breakdown, not the BPSC notification. Check it against Advertisement 15/2026.</div>'+h;
}

var PARTS=[
 {id:"3",label:"Part III · Computer",get:function(){return window.NOTES_ADV||[]}},
 {id:"2",label:"Part II · GS",get:function(){return window.NOTES_GS||[]}},
 {id:"1",label:"Part I · Language",get:function(){return window.NOTES_LANG||[]}},
 {id:"M",label:"Maths + Reasoning",get:function(){return window.NOTES_MR||[]}}];
function chKey(t){return t.split(" ·")[0].trim()}
function chapters(){var o=[];PARTS.forEach(function(p){p.get().forEach(function(c){o.push({p:p.id,key:chKey(c.t),c:c})})});return o}
function chByKey(k){var a=chapters();for(var i=0;i<a.length;i++)if(a[i].key===k)return a[i];return null}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
var notesPart=store.get("notesPart","3");

function viewNotes(){
  var read=store.get("read",{});
  var h='<h2>Notes aur practice</h2><div class="seg">';
  PARTS.forEach(function(p){h+='<button class="btn" data-part="'+p.id+'" aria-pressed="'+(p.id===notesPart)+'">'+p.label+'</button>'});
  h+='</div><input id="nq" class="search" type="search" placeholder="Notes me dhoondho (jaise: deadlock, tense, Kosi)" aria-label="Search notes">';
  var list=(PARTS.filter(function(p){return p.id===notesPart})[0]||PARTS[0]).get();
  h+='<div id="nlist">';
  list.forEach(function(c){
    var k=chKey(c.t),on=!!read[k],qa=(window.QA||{})[k]||[];
    h+='<details><summary><span>'+(on?'✓ ':'')+esc(c.t)+'</span></summary><div class="body">'+c.h;
    if(qa.length){h+='<h4>Sawal-Jawab (jaldi revision)</h4><ul>';qa.forEach(function(x){h+='<li><b>'+esc(x[0])+'</b><br><span class="hi">'+esc(x[1])+'</span></li>'});h+='</ul>'}
    h+='<div class="row" style="margin-top:10px;align-items:center"><button class="btn primary" data-quiz="'+k+'">'+(c.q?c.q.length:0)+' MCQ practice karo</button><label class="chk" style="border:0;padding:0"><input type="checkbox" data-r="'+k+'"'+(on?' checked':'')+'><span>Maine padh liya</span></label></div></div></details>';
  });
  return h+'</div>';
}

var Q={items:[],i:0,score:0,answered:false,done:false,pick:null,set:null,label:""};
function mkItem(a,key){return {q:a[0],o:a[1],a:a[2],e:a[3],key:key}}
function startSet(set){
  var items=[],label="";
  if(set==="mix"){var all=[];chapters().forEach(function(x){(x.c.q||[]).forEach(function(a){all.push(mkItem(a,x.key))})});items=shuffle(all).slice(0,25);label="Mixed · 25 random MCQ"}
  else if(set==="cs40"){items=QUIZ.map(function(a){return mkItem(a,null)});label="Computer · 40 mixed MCQ"}
  else{var ch=chByKey(set);if(!ch)return;items=(ch.c.q||[]).map(function(a){return mkItem(a,set)});label=ch.c.t}
  Q={items:items,i:0,score:0,answered:false,done:false,pick:null,set:set,label:label};
}
function viewQuiz(){
  var best=store.get("best",{});
  if(!Q.set){
    var h='<h2>Quiz</h2><p class="hi" style="margin:0 0 10px">Chapter chuno. Har jawab ke baad explanation aur jude hue sawal-jawab milenge.</p>';
    h+='<button class="btn primary wide" data-set="mix"><span>Mixed · 25 random MCQ</span><span>'+(best.mix!=null?'best '+best.mix:'')+'</span></button>';
    h+='<button class="btn wide" data-set="cs40"><span>Computer · 40 mixed MCQ</span><span>'+(best.cs40!=null?'best '+best.cs40:'')+'</span></button>';
    PARTS.forEach(function(p){
      h+='<h3>'+esc(p.label)+'</h3>';
      p.get().forEach(function(c){var k=chKey(c.t);h+='<button class="btn wide" data-set="'+k+'"><span>'+esc(c.t)+'</span><span>'+(c.q?c.q.length:0)+' Q'+(best[k]!=null?' · best '+best[k]:'')+'</span></button>'});
    });
    return h;
  }
  var n=Q.items.length;
  if(Q.done){
    var pct=Q.score/n;
    return '<div class="card" style="text-align:center"><div class="hi">'+esc(Q.label)+'</div><div class="score">'+Q.score+' / '+n+'</div><p>'+(pct>=0.8?'Bahut accha! Ab agla chapter karo.':pct>=0.5?'Theek hai. Jo galat hue unka notes dobara padho.':'Pehle notes dhyan se padho, phir dobara try karo.')+'</p><div class="row" style="justify-content:center"><button class="btn primary" id="again">Dobara karo</button><button class="btn" id="backsets">Chapters</button><button class="btn" data-go="notes">Notes kholo</button></div></div>';
  }
  var it=Q.items[Q.i],h='<div class="qtop"><button class="btn" id="backsets">← Chapters</button><span>Q '+(Q.i+1)+' / '+n+' · Score '+Q.score+'</span></div><div class="prog"><i style="width:'+Math.round(Q.i/n*100)+'%"></i></div>';
  h+='<div class="qtext">'+esc(it.q)+'</div>';
  it.o.forEach(function(o,oi){
    var c='opt';
    if(Q.answered){if(oi===it.a)c+=' right';else if(oi===Q.pick)c+=' wrong'}
    h+='<button class="'+c+'" data-o="'+oi+'"'+(Q.answered?' disabled':'')+'>'+'ABCD'[oi]+'. '+esc(o)+'</button>';
  });
  if(Q.answered){
    h+='<div class="exp"><b>'+(Q.pick===it.a?'Sahi! ':'Galat. Sahi jawab: '+'ABCD'[it.a]+'. ')+'</b>'+esc(it.e)+'</div>';
    var qa=(window.QA||{})[it.key]||[];
    if(qa.length){var a1=qa[(Q.i*2)%qa.length],a2=qa[(Q.i*2+1)%qa.length];
      h+='<div class="rel"><b>Isse jude sawal-jawab</b><ul><li><b>'+esc(a1[0])+'</b><br>'+esc(a1[1])+'</li><li><b>'+esc(a2[0])+'</b><br>'+esc(a2[1])+'</li></ul></div>'}
    h+='<button class="btn primary" id="next">'+(Q.i===n-1?'Score dekho':'Agla sawal')+'</button>';
  }
  return h;
}

function viewPapers(){
  var h='<h2>Previous-year papers</h2><div class="note">These open the public PDFs on the publishers\' sites. Hindi text in some of them is in an old font and may not copy cleanly. Check each answer key against the official one.</div>';
  PAPERS.forEach(function(p){h+=link(p[0],p[1],p[2],p[2]==="Answer key"?"pl":"")});
  h+='<h3>Worked answers · 22 Jul 2024 paper</h3><div class="tbl"><table><tr><th>Q</th><th>Question</th><th>Answer</th></tr>';
  PYQ.forEach(function(r){h+='<tr><td>'+r[0]+'</td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>'});
  h+='</table></div><p class="hi">Q83, Q86 and Q116 are left out because the correct option is unclear; use the official answer key.</p><h3>More sources</h3>';
  SRC.forEach(function(s){h+=link(s[0],s[1],"Site","")});
  return h;
}

function viewVideos(){
  var h='<h2>Video lessons</h2><div class="note">Playlists came from web search and I have not watched them. Topic buttons open a YouTube search for Hindi videos on that topic; pick the one you like.</div><h3>TRE 4.0 specific</h3>';
  VID_SPECIAL.forEach(function(v){h+=link(v[0],v[1],v[2],v[2]==="Playlist"?"pl":"")});
  h+='<h3>Subject playlists</h3>';
  VID_SUBJ.forEach(function(v){h+=link(v[0],v[1],v[2],"pl")});
  h+='<h3>Topic search</h3>';
  VID_TOPIC.forEach(function(v){h+=link(v[0],"https://www.youtube.com/results?search_query="+encodeURIComponent(v[1]),"Search","")});
  return h;
}

var VIEWS={home:viewHome,syllabus:viewSyllabus,notes:viewNotes,quiz:viewQuiz,papers:viewPapers,videos:viewVideos};
var cur="home";

function render(keepScroll){
  var m=$("#main"),y=m.scrollTop;
  m.innerHTML=VIEWS[cur]();
  m.scrollTop=keepScroll?y:0;
  document.querySelectorAll("#nav button").forEach(function(b){b.setAttribute("aria-selected",b.dataset.t===cur)});
}
function go(t){cur=t;try{history.replaceState(null,"","#"+t)}catch(e){}render(false)}

/* ---------------- events ---------------- */
var nav=$("#nav");
TABS.forEach(function(t){
  var b=document.createElement("button");b.type="button";b.dataset.t=t.id;b.setAttribute("role","tab");
  b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+t.icon+'</svg><span>'+t.label+'</span>';
  b.addEventListener("click",function(){go(t.id)});nav.appendChild(b);
});
$("#main").addEventListener("click",function(e){
  var t=e.target.closest("[data-go]");if(t){go(t.dataset.go);return}
  var pt=e.target.closest("[data-part]");if(pt){notesPart=pt.dataset.part;store.set("notesPart",notesPart);render(false);return}
  var qz=e.target.closest("[data-quiz]");if(qz){startSet(qz.dataset.quiz);go("quiz");return}
  var st=e.target.closest("[data-set]");if(st){startSet(st.dataset.set);render(false);return}
  if(e.target.id==="resetTicks"){store.set("ticks",{});render(true);return}
  if(e.target.id==="again"){startSet(Q.set);render(false);return}
  if(e.target.closest("#backsets")){Q.set=null;render(false);return}
  if(e.target.id==="next"){
    if(Q.i===Q.items.length-1){Q.done=true;var b=store.get("best",{});if(b[Q.set]==null||Q.score>b[Q.set]){b[Q.set]=Q.score;store.set("best",b)}}
    else{Q.i++;Q.answered=false;Q.pick=null}
    render(false);return;
  }
  var o=e.target.closest(".opt");
  if(o&&!Q.answered){
    Q.pick=+o.dataset.o;Q.answered=true;
    if(Q.pick===Q.items[Q.i].a)Q.score++;
    render(true);
  }
});
$("#main").addEventListener("input",function(e){
  if(e.target.id!=="nq")return;
  var q=e.target.value.toLowerCase().trim();
  document.querySelectorAll("#nlist details").forEach(function(d){var hide=q&&d.textContent.toLowerCase().indexOf(q)<0;d.hidden=!!hide;if(q&&!hide)d.open=true});
});
$("#main").addEventListener("change",function(e){
  var r=e.target.dataset&&e.target.dataset.r;
  if(r){
    var rd=store.get("read",{});if(e.target.checked)rd[r]=1;else delete rd[r];store.set("read",rd);
    var sm=e.target.closest("details").querySelector("summary span");sm.textContent=(e.target.checked?"✓ ":"")+sm.textContent.replace(/^✓ /,"");
    return;
  }
  var k=e.target.dataset&&e.target.dataset.k;if(!k)return;
  var t=store.get("ticks",{});if(e.target.checked)t[k]=1;else delete t[k];
  store.set("ticks",t);
  var open=[];document.querySelectorAll("#main details").forEach(function(d,i){if(d.open)open.push(i)});
  render(true);
  document.querySelectorAll("#main details").forEach(function(d,i){d.open=open.indexOf(i)>-1});
});
$("#themeBtn").addEventListener("click",function(){
  var r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme=dark?"light":"dark";store.set("theme",r.dataset.theme);
});
(function(){var th=store.get("theme",null);if(th)document.documentElement.dataset.theme=th;
  var h=(location.hash||"").replace("#","");if(VIEWS[h])cur=h;render(false)})();
