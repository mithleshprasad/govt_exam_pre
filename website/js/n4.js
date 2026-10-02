(window.NOTES_ADV=window.NOTES_ADV||[]).push(
{t:"12 · Computer Networks",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Network = kai computers ka ek dusre se juda hona taaki data bhej sakein. Jaise sadkon ka jaal.</div>

<h4>Network ke types</h4>
<ul>
<li><b>PAN</b> (apne paas: Bluetooth), <b>LAN</b> (building/school), <b>MAN</b> (city), <b>WAN</b> (desh/duniya). <b>Internet</b> sabse bada WAN hai.</li>
<li><b>Topology:</b> Bus (ek lambi tar), <b>Star</b> (sab ek central switch se — sabse common), Ring, <b>Mesh</b> (sab sabse juda; n(n−1)/2 links), Tree, Hybrid.</li>
</ul>

<h4>Network devices</h4>
<ul>
<li><b>Hub:</b> data sabko bhej deta hai (bewakoof). <b>Switch:</b> <b>MAC address</b> dekh kar sahi computer ko bhejta hai. <b>Router:</b> <b>IP address</b> dekh kar alag networks ko jodta hai. <b>Modem:</b> digital ↔ analog. <b>Repeater:</b> signal ko mazboot. <b>Gateway:</b> alag protocols wale networks ko jodta hai. <b>Bridge:</b> do LAN jodta hai.</li>
</ul>

<h4>OSI model (7 layers)</h4>
<div class="tbl"><table><tr><th>#</th><th>Layer</th><th>Kaam</th><th>Data ka naam</th></tr>
<tr><td>7</td><td>Application</td><td>HTTP, FTP, SMTP, DNS</td><td>Data</td></tr>
<tr><td>6</td><td>Presentation</td><td>Encryption, compression, format</td><td>Data</td></tr>
<tr><td>5</td><td>Session</td><td>Connection shuru/band</td><td>Data</td></tr>
<tr><td>4</td><td>Transport</td><td>TCP, UDP, end-to-end</td><td>Segment</td></tr>
<tr><td>3</td><td>Network</td><td>IP, routing</td><td>Packet</td></tr>
<tr><td>2</td><td>Data Link</td><td>MAC, error detection</td><td>Frame</td></tr>
<tr><td>1</td><td>Physical</td><td>Cable, signal, bits</td><td>Bit</td></tr></table></div>
<p><b>Trick (1→7):</b> <b>P</b>lease <b>D</b>o <b>N</b>ot <b>T</b>hrow <b>S</b>ausage <b>P</b>izza <b>A</b>way. TCP/IP me 4 layers: Application, Transport, Internet, Network access.</p>

<h4>IP address aur ports</h4>
<ul>
<li><b>IPv4</b> = 32 bit (192.168.1.1). <b>IPv6</b> = <b>128 bit</b>. <b>MAC</b> = 48 bit (hardware ka address).</li>
<li>IPv4 classes: A (1–126), B (128–191), C (192–223), D (224–239 multicast), E (reserved). <b>127.0.0.1</b> = loopback (apna computer).</li>
<li>Private IP: 10.x.x.x, 172.16–31.x.x, 192.168.x.x.</li>
<li>Subnet: host bits h ho to usable hosts = <b>2ʰ − 2</b>. /24 → 254 hosts. /26 → 62 hosts.</li>
<li><b>Ports:</b> HTTP <b>80</b>, HTTPS <b>443</b>, FTP 21, SSH 22, Telnet 23, SMTP <b>25</b>, DNS 53, POP3 110, IMAP 143, DHCP 67/68.</li>
</ul>

<h4>Protocols</h4>
<ul>
<li><b>TCP:</b> reliable, connection-oriented (3-way handshake: SYN, SYN-ACK, ACK). <b>UDP:</b> tez, bina guarantee (video call, streaming).</li>
<li><b>DNS</b> = website naam → IP address. <b>DHCP</b> = IP address automatically deta hai. <b>ARP</b> = IP → MAC. <b>ICMP</b> = ping.</li>
<li><b>Email:</b> <b>SMTP</b> bhejta hai; <b>POP3 / IMAP</b> receive karte hain. <b>FTP</b> = file transfer. <b>HTTP</b> = web pages (stateless).</li>
<li><b>Transmission mode:</b> Simplex (ek taraf, TV), Half duplex (dono taraf par ek time me ek, walkie-talkie), Full duplex (dono ek saath, phone).</li>
<li><b>Switching:</b> circuit (phone call), packet (Internet). <b>Routing:</b> distance vector (RIP), link state (OSPF).</li>
</ul>

<h4>Media aur wireless</h4>
<ul>
<li><b>Twisted pair</b> (UTP, RJ-45, LAN), <b>Coaxial</b> (cable TV), <b>Optical fibre</b> (sabse tez, light se, EMI nahi).</li>
<li><b>Wi-Fi</b> = IEEE 802.11. <b>Ethernet</b> = 802.3. <b>Bluetooth</b> = 802.15. <b>Bandwidth</b> = kitna data ja sakta hai; <b>latency</b> = deri.</li>
<li>Mobile: 1G (voice) → 2G (SMS) → 3G (data) → 4G (LTE) → <b>5G</b>.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Router IP se, Switch MAC se. HTTPS = 443. IPv6 = 128 bit. Network layer = routing/IP. DNS = naam → IP.</div>
`,
q:[
["Routing kis OSI layer ka kaam hai?",["Data link","Transport","Network","Session"],2,"Network layer (IP)."],
["HTTPS ka default port kya hai?",["80","21","443","25"],2,"HTTPS = 443."],
["IPv6 address kitne bit ka hota hai?",["32","64","128","256"],2,"128 bit."],
["MAC address se kaun sa device kaam karta hai?",["Hub","Switch","Repeater","Modem"],1,"Switch."],
["Email bhejne ke liye kaun sa protocol use hota hai?",["POP3","IMAP","SMTP","FTP"],2,"SMTP sends, POP3/IMAP receive."],
["DNS ka kaam kya hai?",["IP se MAC nikalna","Domain name ko IP address me badalna","Virus rokna","Email bhejna"],1,"Naam → IP."],
["Kaun sa topology sabse zyada use hota hai (central switch)?",["Bus","Star","Ring","Mesh"],1,"Star topology."],
["TCP connection ke 3-way handshake ka sahi order?",["ACK, SYN, SYN-ACK","SYN, SYN-ACK, ACK","SYN, ACK, FIN","FIN, ACK, SYN"],1,"SYN → SYN-ACK → ACK."],
["Sabse tez aur EMI se mukt transmission medium?",["Twisted pair","Coaxial","Optical fibre","Radio"],2,"Optical fibre."],
["Video streaming ke liye kaun sa protocol aksar use hota hai?",["TCP","UDP","FTP","SMTP"],1,"UDP tez hai, reliability kam."],
["Wi-Fi ka IEEE standard?",["802.3","802.11","802.15","802.16"],1,"802.11."],
["/24 subnet me usable hosts kitne hote hain?",["256","254","255","128"],1,"2⁸ − 2 = 254."]
]},

{t:"13 · Internet, Web aur HTML",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> <b>Internet</b> = computers ka duniya-bhar ka network. <b>Web (WWW)</b> = Internet par chalne wali websites ki service. Internet sadak hai, web us par chalti gaadi.</div>

<h4>Itihaas</h4>
<ul>
<li><b>ARPANET</b> (1969) = Internet ka pehla roop. <b>WWW</b> = Tim Berners-Lee (1989-91). India me public Internet <b>VSNL</b> se 1995. <b>UPI</b>/BHIM launch 2016.</li>
<li><b>Web 1.0</b> (sirf padhna), <b>Web 2.0</b> (social media, user content), <b>Web 3.0</b> (smart, decentralised).</li>
</ul>

<h4>Web ki cheezein</h4>
<ul>
<li><b>URL:</b> <code>https://www.example.com/page.html</code> = protocol + domain + path. <b>Browser:</b> Chrome, Firefox, Edge. <b>Web server:</b> Apache, Nginx. <b>Search engine:</b> Google, Bing (crawler se pages dhoondhte hain).</li>
<li><b>HTTP</b> methods: <b>GET</b> (mangna), <b>POST</b> (bhejna), PUT (update), DELETE. <b>Status codes:</b> 200 OK, 301 moved, 400 bad request, 403 forbidden, <b>404 not found</b>, 500 server error.</li>
<li><b>Cookie</b> = browser me chhoti file jo aapki info yaad rakhti hai. <b>Static page</b> = hamesha same; <b>dynamic page</b> = server se badalta hai (PHP, JSP, Node.js).</li>
<li>Domains: .com, .org, .edu, .gov, <b>.in</b>. <b>ISP</b> = Internet dene wali company.</li>
</ul>

<h4>HTML (web page ka dhancha)</h4>
<ul>
<li><b>HTML</b> = HyperText Markup Language. Tags <code>&lt;tag&gt;...&lt;/tag&gt;</code>. <b>CSS</b> = sajawat (rang, size). <b>JavaScript</b> = behaviour (click par kuch hona).</li>
</ul>
<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
 &lt;head&gt;&lt;title&gt;Mera Page&lt;/title&gt;&lt;/head&gt;
 &lt;body&gt;
  &lt;h1&gt;Heading&lt;/h1&gt;           &lt;!-- h1 sabse bada, h6 sabse chhota --&gt;
  &lt;p&gt;Paragraph&lt;/p&gt;
  &lt;a href="https://x.com"&gt;Link&lt;/a&gt;
  &lt;img src="photo.jpg" alt="photo"&gt;
  &lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;    &lt;!-- ol = numbered list --&gt;
  &lt;br&gt; &lt;hr&gt;                    &lt;!-- line break, horizontal line --&gt;
  &lt;table&gt;&lt;tr&gt;&lt;th&gt;Head&lt;/th&gt;&lt;td&gt;Data&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
  &lt;form&gt;&lt;input type="text"&gt;&lt;/form&gt;
 &lt;/body&gt;
&lt;/html&gt;</pre>
<ul>
<li><b>&lt;b&gt;</b> bold, <b>&lt;i&gt;</b> italic, <b>&lt;u&gt;</b> underline. Page ka title <code>&lt;title&gt;</code> tab me dikhta hai. <code>&lt;br&gt;</code> aur <code>&lt;img&gt;</code> ko closing tag nahi lagta.</li>
<li><b>CSS</b> 3 tarike: inline, internal (&lt;style&gt;), external (.css file). Selector: element <code>p</code>, class <code>.name</code>, id <code>#name</code>.</li>
<li><b>JavaScript:</b> <code>var / let / const</code>, <code>document.getElementById()</code>, <code>alert()</code>. <code>==</code> value compare, <code>===</code> value + type.</li>
</ul>

<h4>E-mail aur digital services</h4>
<ul>
<li><b>To</b> (asli receiver), <b>Cc</b> (copy, sabko dikhta hai), <b>Bcc</b> (chhupi copy, doosron ko nahi dikhti).</li>
<li><b>E-commerce:</b> B2B (company ↔ company), <b>B2C</b> (company → customer, Amazon), C2C (OLX). <b>Payment:</b> UPI, NEFT, RTGS, IMPS, net banking.</li>
<li><b>Cloud storage:</b> Google Drive, OneDrive, Dropbox.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> 404 = page nahi mila. Bcc me receiver chhupa rehta hai. HTML structure, CSS style, JS behaviour. WWW ka creator = Tim Berners-Lee.</div>
`,
q:[
["WWW ka creator kaun hai?",["Vint Cerf","Tim Berners-Lee","Bill Gates","Larry Page"],1,"Tim Berners-Lee."],
["HTTP status code 404 ka matlab?",["Success","Page not found","Server error","Forbidden"],1,"404 = Not Found."],
["HTML me sabse bada heading tag kaun sa hai?",["<h6>","<h1>","<head>","<title>"],1,"h1 sabse bada."],
["Web page ko design/style karne ke liye kya use hota hai?",["HTML","CSS","SQL","FTP"],1,"CSS styling."],
["Email me Bcc ka matlab?",["Receiver ko chhupakar copy","Sabko dikhne wali copy","Sirf sender","Attachment"],0,"Blind carbon copy."],
["Kaun sa tag ko closing tag nahi lagta?",["<p>","<br>","<h1>","<table>"],1,"<br> aur <img> empty tags."],
["Internet ka pehla roop kaun sa tha?",["ARPANET","NSFNET","VSNL","ERNET"],0,"ARPANET (1969)."],
["Website ko dynamic banane ke liye server-side kya use hota hai?",["PHP","HTML only","CSS only","BMP"],0,"PHP, JSP, Node.js."],
["HTML link banane ka tag?",["<link>","<a>","<url>","<href>"],1,"<a href=\"...\">."],
["Browser me data bhejne ke liye kaun sa HTTP method?",["GET","POST","HEAD","TRACE"],1,"POST data bhejta hai."],
["Amazon jaisa model (company se customer) kya hai?",["B2B","B2C","C2C","G2C"],1,"B2C."],
["JavaScript me value aur type dono compare karne wala operator?",["==","===","=","!="],1,"=== strict equality."]
]},

{t:"14 · Cyber security, ethics aur IT Act",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Cyber security = computer, network aur data ko hacker, virus aur chori se bachana.</div>

<h4>CIA triad (security ke 3 stambh)</h4>
<ul>
<li><b>Confidentiality</b> (sirf adhikari dekhe), <b>Integrity</b> (data badla na jaye), <b>Availability</b> (jab chahiye mil jaye).</li>
</ul>

<h4>Malware aur attacks</h4>
<div class="tbl"><table><tr><th>Naam</th><th>Kya karta hai</th></tr>
<tr><td>Virus</td><td>File se chipak kar phailta hai</td></tr>
<tr><td>Worm</td><td>Network par <b>khud</b> phailta hai</td></tr>
<tr><td>Trojan</td><td>Accha software ban kar andar aata hai</td></tr>
<tr><td>Ransomware</td><td>Files lock karke paisa maangta hai</td></tr>
<tr><td>Spyware / Keylogger</td><td>Jasoosi, typing record</td></tr>
<tr><td>Phishing</td><td>Nakli email/website se password chura lena</td></tr>
<tr><td>DoS / DDoS</td><td>Server par itni requests ki wo band ho jaye</td></tr>
<tr><td>Man-in-the-Middle</td><td>Beech me baithkar data sunna</td></tr>
<tr><td>SQL Injection</td><td>Form me SQL code daal kar database tak pahunchna</td></tr>
<tr><td>Spoofing</td><td>Nakli pehchan banana</td></tr>
<tr><td>Social engineering</td><td>Insaan ko bewakoof banana (call, OTP maangna)</td></tr></table></div>

<h4>Bachaav ke tarike</h4>
<ul>
<li><b>Antivirus, Firewall</b> (aane-jaane wale data ki chhanni), strong password, <b>2-Factor Authentication (OTP)</b>, regular update, backup, VPN, IDS/IPS.</li>
<li><b>Biometric:</b> fingerprint, iris, face.</li>
</ul>

<h4>Cryptography (code me data chhupana)</h4>
<ul>
<li><b>Plaintext</b> (asli) → <b>Encryption</b> → <b>Ciphertext</b> (code) → <b>Decryption</b> → wapas plaintext.</li>
<li><b>Symmetric:</b> ek hi key (DES, <b>AES</b>) — tez. <b>Asymmetric:</b> do keys, public + private (<b>RSA</b>) — surakshit.</li>
<li><b>Hash:</b> MD5, SHA-256 (data ka fingerprint, ulta nahi hota). <b>Digital signature</b> = pehchan + data badla nahi, ka saboot. <b>Digital certificate</b> deta hai <b>CA</b>.</li>
<li><b>HTTPS</b> = HTTP + SSL/TLS. Address me taala dikhta hai.</li>
<li><b>Caesar cipher:</b> har akshar ko fixed jagah aage khiskana (shift 3: A→D).</li>
</ul>

<h4>Cyber law (India)</h4>
<ul>
<li><b>IT Act 2000</b> (2008 me badlav). Section 43 (computer ko nuksaan), <b>66</b> (hacking/computer offences), 66C (identity theft), 66D (online cheating), 66E (privacy), 66F (cyber terrorism), <b>67</b> (aashleel content).</li>
<li><b>DPDP Act 2023</b> = personal data ki suraksha. <b>CERT-In</b> = cyber incidents ki national agency. Cyber fraud helpline <b>1930</b>, portal cybercrime.gov.in.</li>
<li><b>IPR:</b> <b>Copyright</b> (kitab, software code), <b>Patent</b> (invention), <b>Trademark</b> (logo, brand). <b>Plagiarism</b> = dusre ka kaam apna batana.</li>
</ul>

<h4>Ethics aur digital citizenship</h4>
<ul>
<li><b>Netiquette</b> = Internet par achha vyavhar. <b>Digital footprint</b> = aapke online nishaan. <b>Cyber bullying</b> = online pareshan karna. <b>E-waste</b> = kharab electronics ka kachra. <b>Green computing</b> = energy bachana.</li>
<li><b>Open source</b> license: GPL, MIT. <b>Freeware</b> muft, <b>shareware</b> trial.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Worm khud phailta hai. Phishing = nakli email. RSA asymmetric. AES symmetric. Hacking par IT Act Section 66. 2FA = password + OTP.</div>
`,
q:[
["Khud network par phailne wala malware kaun sa hai?",["Worm","Trojan","Spyware","Adware"],0,"Worm."],
["RSA kis type ka encryption hai?",["Symmetric","Asymmetric","Hash","Compression"],1,"Public + private key."],
["Nakli email se password churana kya kahlata hai?",["Phishing","Spoofing","DoS","Sniffing"],0,"Phishing."],
["AES kis type ka algorithm hai?",["Symmetric","Asymmetric","Hash only","Protocol"],0,"Ek hi key."],
["IT Act 2000 me hacking se judi mukhya dhara?",["Section 43","Section 66","Section 72","Section 100"],1,"Section 66 (computer related offences)."],
["Files lock karke paisa maangne wala malware?",["Ransomware","Adware","Rootkit","Worm"],0,"Ransomware."],
["HTTPS me 'S' ka matlab kya hai?",["Speed","Secure (SSL/TLS)","Server","Simple"],1,"Secure."],
["CIA triad me 'I' kya hai?",["Internet","Integrity","Identity","Index"],1,"Confidentiality, Integrity, Availability."],
["Do-factor authentication me kya hota hai?",["Password + OTP","Do password","Sirf biometric","Antivirus + firewall"],0,"Do alag tarike."],
["Digital signature ka kaam kya hai?",["Data compress karna","Pehchan aur data ki sachchai prove karna","Internet tez karna","Virus hatana"],1,"Authenticity + integrity."],
["Kaun sa IPR logo/brand ko bachata hai?",["Copyright","Patent","Trademark","Licence"],2,"Trademark."],
["Dusre ka likha apna batana kya kahlata hai?",["Netiquette","Plagiarism","Spoofing","Hashing"],1,"Plagiarism."]
]},

{t:"15 · AI, ML, Cloud, IoT aur nayi technology",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Ye sab "emerging trends" hain. Exam me zyadatar <b>definition</b> aur <b>example</b> pooche jaate hain.</div>

<h4>AI aur Machine Learning</h4>
<ul>
<li><b>AI</b> = machine ko insaan jaisa sochna-samajhna sikhana. Naam <b>John McCarthy</b> ne diya (1956). <b>Turing test</b> = machine insaan jaisi baat kare to intelligent.</li>
<li><b>Machine Learning (ML)</b> = data se khud seekhna, bina har baat likhe. <b>Deep Learning</b> = bahut layers wala neural network.</li>
<li><b>ML ke 3 type:</b><br>① <b>Supervised</b> (label wala data: spam/not spam; regression, classification)<br>② <b>Unsupervised</b> (bina label; clustering, jaise K-means)<br>③ <b>Reinforcement</b> (inaam/saza se seekhna, game, robot)</li>
<li><b>Overfitting</b> = training me bahut accha, naye data par kharab. <b>Training data / Test data</b>.</li>
<li><b>NLP</b> = bhasha samajhna (translate, chatbot). <b>Computer Vision</b> = image pehchanna. <b>Generative AI / LLM</b> = naya text/image banana (ChatGPT, Gemini, Claude).</li>
<li><b>Expert system</b> = kisi visheshagya ki tarah salah. <b>Robotics</b> = machine jo kaam kare.</li>
<li>Bharat: <b>BHASHINI</b> (bhasha translation), <b>IndiaAI Mission</b>.</li>
</ul>

<h4>Big Data</h4>
<ul>
<li>Bahut bada, tez badhta data. <b>5 V:</b> <b>Volume</b> (matra), <b>Velocity</b> (raftaar), <b>Variety</b> (prakar), Veracity (sachchai), Value (keemat). Tools: <b>Hadoop, Spark</b>.</li>
</ul>

<h4>Cloud computing</h4>
<ul>
<li>Internet par kisi ka server kiraye par use karna (bijli ki tarah, jitna use utna paisa).</li>
<li><b>Service models:</b><br><b>IaaS</b> (server/storage kiraye par: AWS EC2)<br><b>PaaS</b> (programming platform: Google App Engine)<br><b>SaaS</b> (taiyar software: Gmail, Google Docs, Office 365)</li>
<li><b>Deployment:</b> Public, Private, Hybrid, Community. Providers: <b>AWS, Azure, Google Cloud</b>.</li>
<li><b>Virtualization</b> = ek machine par kai virtual machines. <b>Container:</b> Docker.</li>
</ul>

<h4>IoT (Internet of Things)</h4>
<ul>
<li>Daily cheezein (bulb, fridge, watch) <b>sensors</b> se Internet par judti hain. Example: smart home, smart watch, smart agriculture. Parts: sensor, actuator, gateway, cloud. <b>Arduino, Raspberry Pi</b> boards.</li>
</ul>

<h4>Baaki nayi cheezein</h4>
<ul>
<li><b>Blockchain:</b> blocks ki chain jisme har block pichle ka hash rakhta hai; badalna lagbhag impossible. <b>Bitcoin</b> (2009, Satoshi Nakamoto) iska example.</li>
<li><b>Quantum computing:</b> qubit (0 aur 1 dono ek saath). <b>AR/VR</b>, <b>3D printing</b>, <b>5G</b>, drone.</li>
<li><b>Digital India</b>, <b>DigiLocker</b>, <b>UMANG</b>, <b>Aadhaar</b>, <b>UPI</b>, <b>National Supercomputing Mission</b>.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Gmail = SaaS. AWS server kiraya = IaaS. Bina label wala ML = unsupervised. Big Data ke 3 mukhya V = Volume, Velocity, Variety.</div>
`,
q:[
["Gmail kis cloud service model ka example hai?",["IaaS","PaaS","SaaS","DaaS"],2,"Taiyar software = SaaS."],
["AI shabd kisne diya?",["Alan Turing","John McCarthy","Elon Musk","Tim Berners-Lee"],1,"John McCarthy, 1956."],
["Bina label wale data se patterns dhoondhna kaunsa ML hai?",["Supervised","Unsupervised","Reinforcement","Rule based"],1,"Clustering = unsupervised."],
["Big Data ke 3 mukhya V kaun se hain?",["Volume, Velocity, Variety","Value, Vision, Voice","Virus, Video, Voice","Vector, Value, Vision"],0,"Volume, Velocity, Variety."],
["IoT me 'T' kya hai?",["Technology","Things","Terminal","Transfer"],1,"Internet of Things."],
["Blockchain me har block kisse jura hota hai?",["Pichle block ke hash se","Sirf time se","Sirf user se","Kisi se nahi"],0,"Hash links."],
["Cloud ke deployment models me kaun sa shamil NAHI hai?",["Public","Private","Hybrid","Local only"],3,"Public, private, hybrid, community."],
["ChatGPT jaisa model kis category me aata hai?",["Generative AI / LLM","Expert system","Database","Compiler"],0,"Large language model."],
["Reinforcement learning me kaise seekhte hain?",["Inaam/saza (reward) se","Sirf label se","Sirf clustering se","Sirf rules se"],0,"Reward-based."],
["Quantum computer ki basic unit kya hai?",["Bit","Byte","Qubit","Pixel"],2,"Qubit."],
["IaaS ka example?",["Gmail","AWS EC2 (server kiraye par)","Google Docs","WhatsApp"],1,"Infrastructure = server, storage."],
["Turing test kis baat ka test hai?",["Machine insaan jaisi baat kar sake","Speed ka","Memory ka","Internet ka"],0,"Machine intelligence ka test."]
]},

{t:"16 · Software engineering, compiler aur ICT",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Software bhi ghar ki tarah banta hai: pehle plan (design), phir banana (coding), phir check (testing), phir use (maintenance).</div>

<h4>SDLC (Software Development Life Cycle)</h4>
<ul>
<li><b>Steps:</b> Requirement → Design → Coding → Testing → Deployment → Maintenance.</li>
<li><b>Waterfall:</b> ek ke baad ek, piche nahi jaate. <b>Prototype:</b> pehle namuna. <b>Spiral:</b> <b>risk analysis</b> par zor. <b>Agile:</b> chhote-chhote hisso me, customer se baar-baar baat (<b>Scrum</b>, sprint). <b>V-model:</b> har stage ka testing.</li>
<li><b>SRS</b> = Software Requirement Specification (customer kya chahta hai).</li>
</ul>

<h4>Design aur testing</h4>
<ul>
<li><b>Good design:</b> <b>High cohesion</b> (module apna ek kaam kare), <b>Low coupling</b> (modules ek dusre par kam depend).</li>
<li><b>DFD</b> (Data Flow Diagram), ER diagram, <b>UML</b> (class, use case, sequence, activity diagram).</li>
<li><b>Testing:</b> Unit (ek module), Integration (jodkar), System (poora), Acceptance (customer).</li>
<li><b>Black-box:</b> andar ka code nahi dekhte, sirf input-output. <b>White-box:</b> code dekh kar. <b>Alpha</b> test (developer ke yahan), <b>Beta</b> test (customer ke yahan).</li>
<li><b>Verification:</b> "kya hum sahi banaa rahe hain?" <b>Validation:</b> "kya sahi cheez banayi?"</li>
<li><b>Git</b> = version control, <b>GitHub</b> = online repo. <b>Cyclomatic complexity</b> = E − N + 2.</li>
</ul>

<h4>Compiler ke phases</h4>
<ul>
<li>Lexical analysis (tokens) → Syntax analysis (parse tree) → Semantic analysis → Intermediate code → Optimization → Code generation. <b>Symbol table</b> = variables ki list.</li>
<li><b>Linker</b> object files jodta hai; <b>loader</b> program ko memory me daalta hai. <b>Assembler</b> assembly → machine code.</li>
</ul>

<h4>MS Office aur Excel</h4>
<ul>
<li><b>Extensions:</b> Word <b>.docx</b>, Excel <b>.xlsx</b>, PowerPoint <b>.pptx</b>.</li>
<li><b>Shortcuts:</b> Ctrl+C copy, Ctrl+X cut, Ctrl+V paste, Ctrl+Z undo, Ctrl+Y redo, Ctrl+S save, Ctrl+P print, Ctrl+A select all, Ctrl+B bold, Ctrl+I italic, Ctrl+U underline.</li>
<li><b>Excel formula</b> <b>=</b> se shuru: <code>=SUM(A1:A5)</code>, <code>=AVERAGE()</code>, <code>=MAX()</code>, <code>=MIN()</code>, <code>=COUNT()</code>, <code>=IF(A1&gt;50,"Pass","Fail")</code>, <code>=VLOOKUP()</code>.</li>
<li><b>Cell reference:</b> relative <code>A1</code>, <b>absolute</b> <code>$A$1</code> (copy karne par nahi badalta), mixed <code>$A1</code>. Excel me <b>1,048,576 rows</b> aur 16,384 columns (XFD).</li>
<li><b>Mail merge</b> = ek letter ko kai naamon ke saath. <b>Header/Footer</b>, table, chart, animation (PowerPoint).</li>
</ul>

<h4>ICT in education (Teacher ke liye zaroori)</h4>
<ul>
<li><b>Platforms:</b> <b>SWAYAM</b> (free online courses), <b>DIKSHA</b> (teachers/students ke liye), <b>e-Pathshala</b>, NPTEL, <b>PM e-Vidya</b>. <b>LMS</b> = Moodle, Google Classroom.</li>
<li><b>NEP 2020</b> me coding/computational thinking Class 6 se. Class 11-12 CS me mukhya cheezein: <b>Python, SQL, networks, data representation, society aur technology</b>.</li>
<li><b>Blended learning</b> = online + classroom. <b>Smart class</b>, e-content, ICT-based teaching.</li>
<li><b>E-governance:</b> UMANG, DigiLocker, e-Sign, CoWIN, Digital India.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> High cohesion + low coupling = accha design. Spiral model me risk analysis. Alpha test developer ke yahan. Excel formula '=' se shuru. $A$1 = absolute reference.</div>
`,
q:[
["Software design me aadarsh condition kya hai?",["Low cohesion, high coupling","High cohesion, low coupling","High cohesion, high coupling","Low cohesion, low coupling"],1,"Module apne kaam me mazboot, doosron par kam depend."],
["Kaun sa SDLC model risk analysis par zor deta hai?",["Waterfall","Spiral","Prototype","V-model"],1,"Spiral."],
["Code ko dekh kar kiya jane wala testing kya kahlata hai?",["Black-box","White-box","Beta","Alpha"],1,"White-box."],
["Beta testing kaha hoti hai?",["Developer ke yahan","Customer ke yahan","Compiler me","Server me"],1,"Customer ke environment me."],
["Excel me formula kis character se shuru hota hai?",["#","=","@","$"],1,"= se."],
["Excel me $A$1 kya kahlata hai?",["Relative reference","Absolute reference","Mixed reference","Range"],1,"Copy karne par nahi badalta."],
["Word file ka extension?",[".xlsx",".docx",".pptx",".pdf"],1,".docx."],
["Compiler ka pehla phase kaun sa hai?",["Syntax analysis","Lexical analysis","Code generation","Optimization"],1,"Lexical analysis (tokens)."],
["SWAYAM kis liye hai?",["Free online courses","Cyber crime report","Bank payment","Mobile game"],0,"Government ka online course platform."],
["Agile me kaam kaise hota hai?",["Ek hi baar me pura","Chhote hisson (sprints) me","Bina testing","Bina customer ke"],1,"Iterative, sprint based."],
["Undo ka shortcut kya hai?",["Ctrl+Y","Ctrl+Z","Ctrl+X","Ctrl+U"],1,"Ctrl+Z."],
["Verification ka matlab kya hai?",["Kya hum product sahi tarah bana rahe hain?","Kya sahi product bana?","Bug fix karna","Customer se baat"],0,"Process check; validation = sahi product."]
]}
);
