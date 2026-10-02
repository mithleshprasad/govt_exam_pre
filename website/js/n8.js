(window.NOTES_MR=window.NOTES_MR||[]).push(
{t:"M1 · Number system aur simplification",h:String.raw`
<div class="easy"><b>Kahan kaam aayega:</b> SSC, Railway, Bihar Police, Banking, BPSC/TRE — sabme. Pehle tables yaad karo, phir tricks.</div>

<h4>Numbers ke types</h4>
<ul>
<li><b>Natural:</b> 1, 2, 3… <b>Whole:</b> 0, 1, 2… <b>Integers:</b> …−2, −1, 0, 1, 2… <b>Rational:</b> p/q form (1/2, 0.5, 0.333…). <b>Irrational:</b> √2, π (kabhi khatam/repeat nahi).</li>
<li><b>Prime:</b> sirf 1 aur khud se divisible (2, 3, 5, 7, 11, 13…). 2 sirf even prime. 1 prime nahi. <b>1 se 100 tak 25 primes</b>.</li>
<li><b>Co-prime:</b> do numbers jinka HCF 1 ho (8 aur 15).</li>
</ul>

<h4>Divisibility rules</h4>
<ul>
<li>2: last digit even. 3: digits ka sum 3 se. 4: last 2 digit 4 se. 5: last 0/5. 6: 2 aur 3 dono. 8: last 3 digit 8 se. 9: digits ka sum 9 se. <b>11:</b> (odd position digits ka sum) − (even position ka sum) = 0 ya 11 ka multiple. Example: 2728 → (2+2) − (7+8) = −11 ✓.</li>
</ul>

<h4>Squares, cubes (zaroor yaad)</h4>
<ul>
<li>11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 17²=289, 18²=324, 19²=361, 20²=400, 25²=625.</li>
<li>2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1000.</li>
<li>√2 = 1.414, √3 = 1.732, √5 = 2.236.</li>
</ul>

<h4>Unit digit (cyclicity)</h4>
<ul>
<li>2: 2,4,8,6 | 3: 3,9,7,1 | 7: 7,9,3,1 | 8: 8,4,2,6 (chakra 4). 4: 4,6 | 9: 9,1 (chakra 2). 0,1,5,6 ka unit digit wahi rehta hai.</li>
<li><b>Trick:</b> power ko <b>4 se bhaag</b> do, remainder se chakra. 7¹²³: 123 ÷ 4 → remainder 3 → 3rd number = <b>3</b>. (Remainder 0 ho to 4th number.)</li>
</ul>

<h4>HCF / LCM aur factors</h4>
<ul>
<li><b>HCF × LCM = a × b</b> (sirf do numbers ke liye). HCF ≤ chhota number ≤ LCM.</li>
<li><b>Aisa number jo a, b, c se divide ho aur remainder r bache:</b> LCM(a,b,c) + r. 6, 8, 12 ke saath remainder 5 → LCM 24 + 5 = <b>29</b>.</li>
<li><b>Factors ki ginti:</b> N = p^a × q^b → (a+1)(b+1). 36 = 2²×3² → 3×3 = <b>9</b> factors.</li>
<li><b>Trailing zeros in n!</b> = n/5 + n/25 + n/125… (integer part). 25! → 5 + 1 = <b>6</b>.</li>
<li>Pehle n natural numbers ka sum = n(n+1)/2. Pehle n odd numbers ka sum = n². Pehle n even numbers ka sum = n(n+1).</li>
</ul>

<h4>Remainder aur simplification</h4>
<ul>
<li>2¹⁰ ÷ 7: 2³ = 8 ≡ 1 (mod 7) → 2¹⁰ = (2³)³ × 2 ≡ 2. Remainder <b>2</b>.</li>
<li><b>BODMAS:</b> Bracket, Of, Division, Multiplication, Addition, Subtraction. 15 + 3×(8−2)÷2 = 15 + 3×6÷2 = 15 + 9 = <b>24</b>.</li>
<li>0.333… = 1/3, 0.666… = 2/3, 0.1666… = 1/6. Recurring: 0.ab(bar) = ab/99.</li>
<li><b>Surds:</b> √(a×b) = √a × √b; (√a)² = a. <b>Approximation:</b> sawal me ≈ aate hain, nazdeeki round-off kar do.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Unit digit ke liye power ÷ 4. 11 ka rule alternate digit. Factors = (a+1)(b+1). 25! me 6 zero.</div>
`,
q:[
["7¹²³ ka unit digit?",["7","9","3","1"],2,"123 ÷ 4 ka remainder 3 → 7,9,3,1 me teesra = 3."],
["12, 15, 20 ka LCM?",["30","60","120","180"],1,"2²×3×5 = 60."],
["25! me trailing zeros kitne?",["5","6","7","4"],1,"25/5 + 25/25 = 5+1 = 6."],
["Pehle 20 natural numbers ka sum?",["200","210","220","190"],1,"20×21/2 = 210."],
["Kaun sa number 11 se divisible hai?",["2728","2729","3141","5213"],0,"2−7+2−8 = −11."],
["√0.0169 = ?",["0.13","0.013","1.3","0.0013"],0,"13² = 169; 0.13² = 0.0169."],
["15 + 3 × (8 − 2) ÷ 2 = ?",["24","30","18","12"],0,"BODMAS: 15 + 9 = 24."],
["Sabse chhota number jo 6, 8, 12 se divide hone par 5 bache?",["29","24","53","19"],0,"LCM 24 + 5 = 29."],
["36 ke kitne factors hain?",["6","8","9","12"],2,"2²×3² → 3×3 = 9."],
["24 aur 36 ka HCF?",["6","12","18","4"],1,"12."],
["2¹⁰ ko 7 se bhaag dene par remainder?",["1","2","3","4"],1,"2³ ≡ 1, isliye 2¹⁰ ≡ 2."],
["Sabse bada 3-digit number jo 7 se divisible?",["994","995","999","993"],0,"7 × 142 = 994."],
["(−1)¹⁰¹ = ?",["1","−1","0","101"],1,"Odd power → −1."],
["Pehle 10 odd numbers ka sum?",["50","100","110","90"],1,"n² = 100."]
]},

{t:"M2 · Percentage, Profit-Loss aur Discount",h:String.raw`
<div class="easy"><b>Trick:</b> Percentage ko fraction me badal lo, hisaab bahut asaan ho jata hai.</div>

<h4>Fraction ↔ Percentage (yaad rakho)</h4>
<div class="tbl"><table><tr><th>Fraction</th><th>%</th><th>Fraction</th><th>%</th></tr>
<tr><td>1/2</td><td>50</td><td>1/8</td><td>12.5</td></tr>
<tr><td>1/3</td><td>33.33</td><td>1/9</td><td>11.11</td></tr>
<tr><td>1/4</td><td>25</td><td>1/10</td><td>10</td></tr>
<tr><td>1/5</td><td>20</td><td>1/12</td><td>8.33</td></tr>
<tr><td>1/6</td><td>16.67</td><td>1/16</td><td>6.25</td></tr>
<tr><td>1/7</td><td>14.28</td><td>1/20</td><td>5</td></tr></table></div>

<h4>Percentage ke formule</h4>
<ul>
<li>x% of y = xy/100. <b>Badlav % = (badlav ÷ purani value) × 100.</b></li>
<li><b>Agar A, B se x% zyada hai</b> to B, A se kam hai: <b>x/(100+x) × 100 %</b>. 20% zyada → B kam = 20/120 = <b>16.67%</b>.</li>
<li><b>Price a% badhe, phir a% ghate:</b> net <b>−a²/100 %</b>. 20% up, 20% down → −4%.</li>
<li><b>Successive:</b> a% aur b% → a + b + ab/100. (Ghatav ke liye minus lagao.)</li>
<li><b>Population:</b> P(1 + r/100)ⁿ. 10000, 10%, 2 saal = 12100.</li>
<li>Pass %: pass marks = total × pass%. Pass marks = obtained + (fail by).</li>
</ul>

<h4>Profit, Loss, Discount</h4>
<ul>
<li><b>Profit = SP − CP.</b> <b>Profit % = (Profit/CP) × 100</b> (hamesha CP par). SP = CP × (100 + P%)/100. CP = SP × 100/(100 + P%).</li>
<li><b>Loss % = (Loss/CP) × 100.</b> SP = CP × (100 − L%)/100.</li>
<li><b>Discount = MP − SP.</b> Discount % = (Discount/MP) × 100. SP = MP × (100 − D%)/100.</li>
<li><b>Do successive discounts</b> a%, b%: a + b − ab/100. 10% + 20% → 30 − 2 = <b>28%</b>.</li>
<li><b>Same SP par ek me x% profit, doosre me x% loss:</b> hamesha <b>loss = x²/100 %</b>. 20%/20% → 4% loss.</li>
<li><b>Dishonest dealer:</b> gain % = (Error ÷ (True − Error)) × 100. 900 g ko 1 kg bechta hai → 100/900 × 100 = <b>11.11%</b>.</li>
<li><b>x articles ka CP = y articles ka SP:</b> Profit % = (x − y)/y × 100. 10 ka CP = 8 ka SP → 2/8 = <b>25%</b>.</li>
<li>CP par profit % p ho to SP par profit % = p/(100+p) × 100. 25% → 20%.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Profit/Loss % CP par, discount % MP par. Up-down same % ho to net loss a²/100.</div>
`,
q:[
["250 ka 40% = ?",["80","100","120","90"],1,"250 × 0.4 = 100."],
["Price pehle 20% badha, phir 20% ghata. Net?",["0%","−4%","+4%","−2%"],1,"−(20²)/100 = −4%."],
["CP ₹800, SP ₹920. Profit %?",["12%","15%","18%","20%"],1,"120/800 × 100 = 15%."],
["MP ₹500, discount 20%. SP?",["₹400","₹450","₹380","₹420"],0,"500 × 0.8 = 400."],
["Ek cheez 20% loss par ₹1200 me bikti hai. CP?",["₹1440","₹1500","₹1600","₹1000"],1,"1200 × 100/80 = 1500."],
["Ek number 25% badhne par 150 ho jata hai. Number?",["120","110","125","100"],0,"150 × 100/125 = 120."],
["10% aur 20% ke successive discount ka total?",["30%","28%","25%","32%"],1,"10+20−2 = 28."],
["10000 ki population 2 saal me 10% prati saal badhe. Ant me?",["12000","12100","11000","12200"],1,"10000 × 1.21."],
["A, B se 20% zyada hai. B, A se kitna kam?",["20%","16.67%","15%","25%"],1,"20/120 × 100."],
["CP par 25% profit ho to SP par profit %?",["25%","20%","30%","15%"],1,"25/125 × 100 = 20%."],
["Dukaandar 1 kg ki jagah 900 g tolta hai. Gain %?",["10%","11.11%","12%","9%"],1,"100/900 × 100."],
["Pass hone ke liye 40% chahiye. 156 marks par 4 se fail. Total marks?",["400","390","410","450"],0,"Pass = 160 = 40% → total 400."],
["10 articles ka CP = 8 articles ka SP. Profit %?",["20%","25%","30%","15%"],1,"(10−8)/8 × 100."],
["Do cheezein ₹1000 par bechi: ek 20% profit, ek 20% loss. Net?",["4% loss","Koi nahi","4% profit","2% loss"],0,"Same SP, same % → x²/100 loss."]
]},

{t:"M3 · Ratio, Average, Ages, Mixture, Partnership",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Ratio = tulna (a:b). Average = barabar baant ke aaya hua number.</div>

<h4>Ratio aur Proportion</h4>
<ul>
<li>a:b = a/b. Total T ko a:b me baanto → pehla = T × a/(a+b).</li>
<li><b>Proportion:</b> a:b = c:d → <b>ad = bc</b>. <b>Fourth proportional</b> (a, b, c ka) = bc/a. 2, 3, 4 ka → 12/2 = 6. <b>Mean proportional</b> (a, b) = √(ab). 4, 9 → 6. <b>Third proportional</b> (a, b) = b²/a.</li>
<li><b>Ratio jodna:</b> A:B = 2:3 aur B:C = 4:5 → B ko barabar karo (LCM 12) → A:B:C = 8:12:15.</li>
</ul>

<h4>Average</h4>
<ul>
<li><b>Average = Sum ÷ Count.</b> Sum = Average × Count.</li>
<li>Har number me k jodne par average me bhi k judta hai. Har number ko k se guna to average bhi k guna.</li>
<li>Naya number judne par: naya number = (naya avg × new count) − (purana sum). 5 numbers avg 20 → sum 100. 6th judne par avg 22 → sum 132 → 6th number = <b>32</b>.</li>
<li>Pehle n natural numbers ka average = (n+1)/2. Consecutive numbers ka average = beech wala.</li>
<li><b>Average speed</b> (same dooori): 2ab/(a+b).</li>
</ul>

<h4>Ages</h4>
<ul>
<li>x = present age maano. "n saal baad" = x + n, "n saal pehle" = x − n.</li>
<li>Ratio 3:4, 5 saal baad 4:5 → (3x+5)/(4x+5) = 4/5 → 15x + 25 = 16x + 20 → x = 5. Ages 15 aur 20.</li>
</ul>

<h4>Mixture aur Alligation</h4>
<ul>
<li><b>Mean price = (Q₁P₁ + Q₂P₂)/(Q₁+Q₂).</b> 2 kg ₹30 aur 3 kg ₹40 → (60+120)/5 = <b>₹36</b>.</li>
<li><b>Alligation:</b> (Sasta : Mehnga) ka ratio = (Mehnga − Mean) : (Mean − Sasta).</li>
<li>Dudh:paani = 4:1, 50 litre → dudh 40, paani 10. 1:1 banane ke liye 30 L paani aur daalo.</li>
</ul>

<h4>Partnership</h4>
<ul>
<li>Profit ka baantwara <b>(Paisa × Samay)</b> ke ratio me. A 4000 aur B 6000 (1 saal): ratio 2:3. Profit 5000 → A ko 2000, B ko 3000.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Ratio jodne ke liye common term barabar karo. Partnership = paisa × samay. Mean proportional = √(ab).</div>
`,
q:[
["160 ko 3:5 me baanto. Chhota hissa?",["60","50","70","80"],0,"160 × 3/8 = 60."],
["5 numbers ka average 20. 6th jodne par avg 22. 6th number?",["32","30","34","28"],0,"132 − 100 = 32."],
["4 aur 9 ka mean proportional?",["5","6","6.5","36"],1,"√36 = 6."],
["A:B = 2:3, B:C = 4:5. A:B:C?",["8:12:15","2:3:5","8:6:5","4:6:5"],0,"B ko 12 par barabar."],
["Baap ki umar bete ki 3 guna, dono ka sum 48. Bete ki umar?",["12","16","10","14"],0,"4x = 48 → x = 12."],
["2 kg ₹30/kg aur 3 kg ₹40/kg chawal mila diye. Rate/kg?",["₹36","₹35","₹38","₹34"],0,"(60+120)/5."],
["A ₹4000, B ₹6000 (1 saal), profit ₹5000. A ka hissa?",["₹2000","₹2500","₹3000","₹1500"],0,"Ratio 2:3."],
["Pehle 10 natural numbers ka average?",["5","5.5","6","4.5"],1,"(10+1)/2."],
["7 numbers ka average 30. Har ek me 5 jodne par naya average?",["35","30","32","37"],0,"Average me bhi 5 judta hai."],
["2, 3, 4 ka fourth proportional?",["6","8","5","12"],0,"(3×4)/2."],
["25 minute : 1.5 ghanta = ?",["5:18","5:6","1:3","25:15"],0,"25:90 = 5:18."],
["50 L me dudh:paani 4:1. 1:1 karne ke liye kitna paani daalein?",["30 L","20 L","10 L","40 L"],0,"Dudh 40, paani 10 → 30 aur."],
["Ages ratio 3:4. 5 saal baad 4:5. Bade ki abhi umar?",["20","15","25","24"],0,"x = 5, bada 4x = 20."],
["3, 5, 7, 9, 11 ka mean?",["7","6","8","9"],0,"35/5."]
]},

{t:"M4 · Interest (SI/CI) aur Time & Work",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> SI = har saal ek hi byaj. CI = byaj par bhi byaj (badhta hua).</div>

<h4>Simple Interest (SI)</h4>
<ul>
<li><b>SI = P × R × T / 100</b>. Amount A = P + SI. Isse P, R, T kuch bhi nikal sakte ho.</li>
<li>Paisa 2 guna (double) hone me: T = 100/R saal. 5 saal me double → R = 20%.</li>
<li>5000 par 8%, 3 saal: 5000×8×3/100 = <b>₹1200</b>.</li>
</ul>
<h4>Compound Interest (CI)</h4>
<ul>
<li><b>A = P(1 + R/100)ᵀ</b>. CI = A − P. 2000, 10%, 2 saal: 2000 × 1.21 = 2420 → CI = <b>₹420</b>.</li>
<li><b>Half-yearly:</b> R/2, T×2. <b>Quarterly:</b> R/4, T×4.</li>
<li><b>2 saal me CI − SI = P(R/100)²</b>. 5000, 10% → 5000 × 0.01 = <b>₹50</b>. 3 saal: P(R/100)²(3 + R/100).</li>
<li>A = 4P (2 saal, CI) → (1+r)² = 4 → r = 100%.</li>
</ul>

<h4>Time and Work</h4>
<ul>
<li><b>Work = Rate × Time.</b> A 10 din me kare to 1 din ka kaam = 1/10.</li>
<li><b>Dono saath:</b> 1/(1/a + 1/b) = ab/(a+b). 12 aur 24 din → 288/36 = <b>8 din</b>.</li>
<li><b>Efficiency method:</b> kul kaam = LCM maan lo. A 12 din, B 24 din → kaam 24 unit; A = 2/din, B = 1/din → saath 3/din → 8 din.</li>
<li>A, B se doguna tez ho to efficiency 2:1. Dono 12 din → kaam = 3 × 12 = 36; A akela = 36/2 = <b>18 din</b>.</li>
<li><b>Man-days:</b> M₁D₁ = M₂D₂ (kaam same). 6 aadmi 8 din = 48 → 4 aadmi → <b>12 din</b>.</li>
<li><b>Pipe-cistern:</b> fill pipe +, empty pipe −. A 6 ghante me bhare, B 12 ghante me khaali kare → (1/6 − 1/12) = 1/12 → <b>12 ghante</b>.</li>
<li><b>Wages:</b> mazdoori efficiency (kaam) ke ratio me.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> CI − SI (2 saal) = P(R/100)². Dono saath = ab/(a+b). Man-days barabar.</div>
`,
q:[
["5000 par 8% par 3 saal ka SI?",["₹1200","₹1000","₹1500","₹1250"],0,"5000×8×3/100."],
["2000 par 10% par 2 saal ka CI?",["₹400","₹420","₹440","₹300"],1,"2000×1.21 − 2000 = 420."],
["SI par paisa 5 saal me double. Rate?",["20%","10%","25%","15%"],0,"T = 100/R → R = 20."],
["A 12 din, B 24 din. Saath me kitne din?",["8","10","9","6"],0,"288/36."],
["A 20 din me kaam kare. 5 din kaam karke chhoda. Baaki kitne din lagenge?",["15","10","12","20"],0,"1/4 ho gaya, 3/4 baaki = 15 din."],
["Pipe A 6 hr me bhare, B 12 hr me khaali kare. Dono khule ho to?",["12 hr","8 hr","10 hr","6 hr"],0,"1/6 − 1/12 = 1/12."],
["6 aadmi kaam 8 din me karte hain. 4 aadmi?",["12 din","10 din","14 din","16 din"],0,"6×8 = 4×D."],
["5000 par 10% par 2 saal me CI − SI?",["₹50","₹100","₹25","₹500"],0,"5000 × 0.01."],
["A, B se doguna tez; dono 12 din. A akela?",["18 din","20 din","24 din","16 din"],0,"36 unit ÷ 2."],
["P ka CI se 2 saal me 4P ho jaye. Rate?",["100%","50%","200%","25%"],0,"(1+r)² = 4."],
["SI = P/4, T = 5 saal. Rate?",["5%","4%","10%","8%"],0,"5R/100 = 1/4 → R = 5."],
["Half-yearly CI me 10% p.a. par 1 saal me rate aur periods?",["5%, 2","10%, 1","2.5%, 4","10%, 2"],0,"R/2, T×2."]
]},

{t:"M5 · Time, Speed, Distance (Train, Boat)",h:String.raw`
<div class="easy"><b>Ek hi formula:</b> Distance = Speed × Time. Baaki sab isi se bante hain.</div>

<h4>Basic</h4>
<ul>
<li><b>km/h → m/s: × 5/18.</b> m/s → km/h: × 18/5. 36 km/h = 10 m/s, 54 km/h = 15 m/s, 72 km/h = 20 m/s.</li>
<li>Samay <b>kam</b> hone par speed badhti hai: Time 20% kam → Speed <b>25% zyada</b> (1/0.8 = 1.25).</li>
<li><b>Average speed:</b> kul dooori ÷ kul samay. <b>Barabar dooori</b> par a aur b speed → <b>2ab/(a+b)</b>. 30 aur 60 → 3600/90 = <b>40 km/h</b>.</li>
<li>5 km/h × 2 ghante + 4 km/h × 3 ghante = 10 + 12 = 22 km, samay 5 hr → avg 4.4 km/h.</li>
</ul>

<h4>Train ke sawal</h4>
<ul>
<li><b>Khambe/aadmi ko paar:</b> Dooori = train ki lambai.</li>
<li><b>Platform/bridge paar:</b> Dooori = train + platform ki lambai. 200 m train, 20 m/s, 300 m platform → 500/20 = <b>25 s</b>.</li>
<li><b>Do trains ulti disha:</b> relative speed = <b>jodo</b> (60 + 40 = 100). <b>Same disha:</b> relative speed = <b>ghatao</b> (60 − 40 = 20).</li>
<li>Do trains ek dusre ko paar karen: Dooori = dono ki lambai ka sum. 100 m + 100 m, ulti disha 10 m/s + 10 m/s → 200/20 = <b>10 s</b>.</li>
</ul>

<h4>Boat aur stream</h4>
<ul>
<li>Boat ki speed u, nadi ki v. <b>Downstream = u + v</b>, <b>Upstream = u − v</b>.</li>
<li>u = (D + U)/2, v = (D − U)/2. 10 km/h boat, 2 km/h dhara: D = 12, U = 8.</li>
</ul>

<h4>Race / circular track</h4>
<ul>
<li>Circular track par ulti disha me milne ka samay = track ki lambai / (a + b); same disha me = lambai / (a − b).</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Ulti disha: jodo, same disha: ghatao. Average speed (barabar dooori) = 2ab/(a+b), na ki simple average.</div>
`,
q:[
["36 km/h = ? m/s",["10","12","15","9"],0,"36 × 5/18."],
["Train 150 m lambi, khambe ko 10 s me paar kare. Speed?",["15 m/s","10 m/s","20 m/s","25 m/s"],0,"150/10."],
["200 m train, 20 m/s, 300 m platform paar karne ka samay?",["25 s","20 s","30 s","15 s"],0,"500/20."],
["Aane me 30 km/h, jaane me 60 km/h. Average speed?",["45","40","50","42"],1,"2×30×60/90."],
["Boat 10 km/h, nadi 2 km/h. Downstream speed?",["12","8","10","14"],0,"u + v."],
["120 km, 40 km/h par kitna samay?",["3 hr","2 hr","4 hr","2.5 hr"],0,"120/40."],
["Do trains ulti disha 60 aur 40 km/h. Relative speed?",["100","20","50","80"],0,"Jodo."],
["Do trains same disha 60 aur 40 km/h. Relative speed?",["20","100","50","40"],0,"Ghatao."],
["5 km/h par 2 hr, phir 4 km/h par 3 hr. Average speed?",["4.4","4.5","4.6","4"],0,"22/5."],
["Samay 20% kam ho to speed kitni badhi?",["25%","20%","30%","15%"],0,"1/0.8 = 1.25."],
["54 km/h = ? m/s",["15","12","18","20"],0,"54 × 5/18."],
["100 m ki do trains ulti disha 10 m/s se. Paar karne me?",["10 s","20 s","5 s","15 s"],0,"200/20."],
["Boat upstream 8, downstream 12 km/h. Boat ki speed?",["10","12","8","4"],0,"(12+8)/2."]
]},

{t:"M6 · Algebra aur Geometry",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Formula yaad ho to algebra 20 second ka kaam hai.</div>

<h4>Algebra ke identities</h4>
<ul>
<li>(a+b)² = a² + 2ab + b². (a−b)² = a² − 2ab + b². <b>a² − b² = (a+b)(a−b).</b></li>
<li>(a+b)² − (a−b)² = <b>4ab</b>. (a+b)² + (a−b)² = 2(a² + b²).</li>
<li>(a+b)³ = a³ + b³ + 3ab(a+b). <b>a³ + b³ = (a+b)(a² − ab + b²)</b>. a³ − b³ = (a−b)(a² + ab + b²).</li>
<li>Agar <b>x + 1/x = k</b> to x² + 1/x² = <b>k² − 2</b>. k = 3 → 7. x³ + 1/x³ = k³ − 3k.</li>
<li>Quadratic <b>ax² + bx + c = 0</b>: roots ka sum = −b/a, product = c/a. x² − 5x + 6 = 0 → (x−2)(x−3) → roots 2, 3.</li>
<li>Linear: ax + b = c → x = (c − b)/a. 2x + 3 = 11 → x = 4.</li>
</ul>

<h4>Lines aur Angles</h4>
<ul>
<li>Complementary angles ka sum 90°, supplementary 180°. Seedhi line par angle 180°. Vertically opposite angles barabar. Parallel lines + transversal: corresponding aur alternate angles barabar.</li>
</ul>
<h4>Triangle</h4>
<ul>
<li><b>Angle sum 180°.</b> Exterior angle = dono door ke interior angles ka sum. 2:3:4 angles → 180 ÷ 9 = 20 → 40°, 60°, 80°.</li>
<li><b>Pythagoras:</b> a² + b² = c². Triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10).</li>
<li>Equilateral: sab side/angle (60°) barabar, area = (√3/4)a². Isosceles: do side barabar.</li>
<li><b>Centroid</b> median ko 2:1 me baanta hai. Incentre = angle bisector ka milan; circumcentre = perpendicular bisector; orthocentre = altitude ka milan. Right triangle ka circumcentre = hypotenuse ka beech.</li>
<li>Similar triangles: sides ka ratio barabar; area ka ratio = (side ratio)².</li>
</ul>
<h4>Polygon aur Circle</h4>
<ul>
<li>n-side polygon: <b>interior angle sum = (n−2) × 180°</b>. Hexagon = 720°. Regular polygon ka har angle = (n−2)×180/n; hexagon 120°. <b>Exterior angles ka sum = 360°</b>.</li>
<li><b>Diagonals = n(n−3)/2.</b> Octagon: 8×5/2 = 20.</li>
<li>Circle: <b>semicircle me angle = 90°</b>. Tangent radius se 90°. Ek hi point se tangent barabar. Chords: bada chord centre ke paas. Kendra par angle = paridhi par angle ka 2 guna.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> x + 1/x = k → x² + 1/x² = k² − 2. Polygon angle sum (n−2)×180. Semicircle me 90°. Centroid 2:1.</div>
`,
q:[
["x + 1/x = 3 to x² + 1/x² = ?",["7","9","11","5"],0,"9 − 2."],
["(a+b)² − (a−b)² = ?",["4ab","2ab","2a²","0"],0,"4ab."],
["Hexagon ke angles ka sum?",["540°","720°","900°","360°"],1,"(6−2)×180."],
["Regular hexagon ka har interior angle?",["108°","120°","135°","150°"],1,"720/6."],
["Right triangle me sides 6 aur 8. Hypotenuse?",["9","10","12","14"],1,"√100."],
["x² − 5x + 6 = 0 ke roots ka sum?",["5","6","−5","1"],0,"−b/a = 5."],
["Triangle ke angles 2:3:4. Sabse bada angle?",["80°","90°","60°","70°"],0,"180/9 = 20 → 4×20."],
["a+b = 5, ab = 6 to a³ + b³ = ?",["35","25","30","40"],0,"125 − 3×6×5 = 35."],
["2x + 3 = 11 to x = ?",["4","5","3","7"],0,"x = 8/2."],
["Octagon ke diagonals?",["20","16","24","28"],0,"8×5/2."],
["Semicircle me bana angle?",["90°","60°","180°","45°"],0,"Angle in a semicircle."],
["Centroid median ko kis ratio me baanta hai?",["2:1","1:1","3:1","1:2 (shirsh se)"],0,"Shirsh se 2:1."],
["Kisi polygon ke exterior angles ka sum?",["180°","360°","720°","540°"],1,"Hamesha 360°."],
["a² − b² = ?",["(a+b)(a−b)","(a−b)²","(a+b)²","a²+b²"],0,"Standard identity."]
]},

{t:"M7 · Mensuration aur Trigonometry",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Mensuration = aakriti ka kshetrafal (area) aur ayatan (volume). Formula list yaad karo.</div>

<h4>2D (area aur perimeter)</h4>
<div class="tbl"><table><tr><th>Aakriti</th><th>Area</th><th>Perimeter</th></tr>
<tr><td>Square (a)</td><td>a²</td><td>4a</td></tr>
<tr><td>Rectangle (l, b)</td><td>l × b</td><td>2(l+b)</td></tr>
<tr><td>Triangle</td><td>½ × base × height</td><td>sum of sides</td></tr>
<tr><td>Heron (a,b,c; s = semi-perimeter)</td><td>√[s(s−a)(s−b)(s−c)]</td><td></td></tr>
<tr><td>Equilateral Δ</td><td>(√3/4)a²</td><td>3a</td></tr>
<tr><td>Parallelogram</td><td>base × height</td><td>2(a+b)</td></tr>
<tr><td>Rhombus</td><td>½ × d₁ × d₂</td><td>4a</td></tr>
<tr><td>Trapezium</td><td>½ (a+b) × h</td><td></td></tr>
<tr><td>Circle (r)</td><td>πr²</td><td>2πr</td></tr></table></div>
<ul>
<li>π = 22/7 (ya 3.14). 13-14-15 triangle: s = 21 → √(21×8×7×6) = <b>84</b>.</li>
<li>Rhombus: side = ½√(d₁² + d₂²). d = 8, 6 → side 5, area 24.</li>
</ul>

<h4>3D (surface aur volume)</h4>
<div class="tbl"><table><tr><th>Solid</th><th>Volume</th><th>Surface area</th></tr>
<tr><td>Cube (a)</td><td>a³</td><td>6a² (lateral 4a²)</td></tr>
<tr><td>Cuboid</td><td>lbh</td><td>2(lb + bh + hl)</td></tr>
<tr><td>Cylinder</td><td>πr²h</td><td>curved 2πrh, total 2πr(r+h)</td></tr>
<tr><td>Cone</td><td>⅓πr²h</td><td>curved πrl, total πr(r+l); l² = r² + h²</td></tr>
<tr><td>Sphere</td><td>4/3 πr³</td><td>4πr²</td></tr>
<tr><td>Hemisphere</td><td>2/3 πr³</td><td>curved 2πr², total 3πr²</td></tr></table></div>
<ul>
<li>Cylinder r=7, h=10 → 22/7 × 49 × 10 = <b>1540</b>. Cone r=3, h=7 → ⅓ × 22/7 × 9 × 7 = <b>66</b>. Sphere r=3 → 36π.</li>
<li>Cube ki diagonal = a√3. Cuboid ki diagonal = √(l²+b²+h²).</li>
</ul>

<h4>Trigonometry</h4>
<div class="tbl"><table><tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
<tr><td>sin</td><td>0</td><td>1/2</td><td>1/√2</td><td>√3/2</td><td>1</td></tr>
<tr><td>cos</td><td>1</td><td>√3/2</td><td>1/√2</td><td>1/2</td><td>0</td></tr>
<tr><td>tan</td><td>0</td><td>1/√3</td><td>1</td><td>√3</td><td>∞</td></tr></table></div>
<ul>
<li><b>sin²θ + cos²θ = 1</b>, 1 + tan²θ = sec²θ. tan = sin/cos. sin(90−θ) = cosθ.</li>
<li><b>Sin = Perpendicular/Hypotenuse, Cos = Base/Hypotenuse, Tan = Perpendicular/Base.</b></li>
<li><b>Heights & Distances:</b> 10 m seedhi 8 m unchi deewar tak pahunche → base = √(100−64) = 6 m. 45° angle par height = distance.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Sphere 4/3πr³, cone ⅓πr²h. sin30=½, cos60=½, tan45=1. 13-14-15 triangle ka area 84.</div>
`,
q:[
["Radius 7 ke circle ka area (π=22/7)?",["154","44","49","308"],0,"22/7 × 49."],
["Cube (side 4) ka volume?",["64","48","16","96"],0,"4³."],
["Cylinder r=7, h=10 ka volume?",["1540","154","770","440"],0,"22/7×49×10."],
["Sphere r=3 ka volume?",["36π","27π","12π","9π"],0,"4/3 × π × 27 = 36π."],
["sin 30° = ?",["1/2","√3/2","1","1/√2"],0,"Standard value."],
["tan 45° = ?",["0","1","√3","1/√3"],1,"tan45 = 1."],
["sin²θ + cos²θ = ?",["0","1","2","tan²θ"],1,"Basic identity."],
["Sides 13, 14, 15 ke triangle ka area?",["84","90","78","72"],0,"Heron: √(21×8×7×6)."],
["Cube (side 5) ka total surface area?",["150","125","100","75"],0,"6×25."],
["Cone r=3, h=7 ka volume (π=22/7)?",["66","44","132","99"],0,"⅓×22/7×9×7."],
["cos 60° = ?",["1/2","√3/2","0","1"],0,"Standard value."],
["10 m ki seedhi 8 m unchi deewar tak. Base se doori?",["6 m","5 m","4 m","8 m"],0,"√(100−64)."],
["Trapezium ke samantar sides 10, 14, unchai 5. Area?",["60","70","50","120"],0,"½×24×5."],
["Rhombus ke diagonals 8 aur 6. Area?",["24","48","14","28"],0,"½×8×6."]
]},

{t:"M8 · Data Interpretation, Probability, P&C",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> DI = table/graph padhkar sawal. Probability = sambhavna. P&C = gino ka tarika.</div>

<h4>Statistics</h4>
<ul>
<li><b>Mean</b> = sum/count. <b>Median</b> = sorted list ka beech (even ho to dono beech ka average). <b>Mode</b> = sabse zyada baar. Range = max − min.</li>
<li>3, 7, 1, 9, 5 → sorted 1,3,5,7,9 → median <b>5</b>. 2,3,3,4,5,3 → mode <b>3</b>.</li>
<li><b>Pie chart:</b> poora circle 360° = 100%. 90° = 25%. 1% = 3.6°.</li>
<li><b>Bar / line graph:</b> axis, unit, scale pehle padho. % badlav = (antar/purana) × 100.</li>
</ul>

<h4>Permutation aur Combination</h4>
<ul>
<li><b>Factorial:</b> n! = n × (n−1) × … × 1. 5! = 120. 0! = 1.</li>
<li><b>Permutation</b> (order matter): ⁿPᵣ = n!/(n−r)!. 5P2 = 20.</li>
<li><b>Combination</b> (order nahi): ⁿCᵣ = n!/[r!(n−r)!]. 5C2 = 10. ⁿCᵣ = ⁿCₙ₋ᵣ.</li>
<li><b>Shabd ki arrangement:</b> n!/(repeat ka factorial). CAT = 3! = 6. LEVEL = 5!/(2!×2!) = <b>30</b>.</li>
<li><b>Handshake:</b> n log me har ek se milein → nC2. 10 log → <b>45</b>. Line ke n points se diagonals/lines = nC2.</li>
<li>Maan lo "ya" = jodo (+), "aur" = guna (×).</li>
</ul>

<h4>Probability</h4>
<ul>
<li><b>P(E) = favourable ÷ total.</b> 0 se 1 ke beech. P(not E) = 1 − P(E).</li>
<li>Paasa: even aane ki = 3/6 = <b>1/2</b>. Do sikke dono head = <b>1/4</b>. 52 patte me ace = 4/52 = <b>1/13</b>. Do paase ka sum 7 = 6/36 = <b>1/6</b>.</li>
<li>Swatantra events: P(A aur B) = P(A) × P(B). Aapas me alag events: P(A ya B) = P(A) + P(B).</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Order matter → permutation, nahi → combination. Repeat letter ho to factorial se bhaag. Probability hamesha 0 se 1.</div>
`,
q:[
["Paase par even number aane ki probability?",["1/2","1/3","1/6","2/3"],0,"3/6."],
["Do sikke uchhalne par dono head?",["1/4","1/2","1/3","3/4"],0,"1/2 × 1/2."],
["5! = ?",["120","24","60","720"],0,"5×4×3×2×1."],
["5P2 = ?",["20","10","25","60"],0,"5×4."],
["5C2 = ?",["10","20","15","5"],0,"20/2."],
["3, 7, 1, 9, 5 ka median?",["5","7","3","4"],0,"Sorted: 1,3,5,7,9."],
["2, 3, 3, 4, 5, 3 ka mode?",["3","4","2","5"],0,"3 teen baar."],
["52 patton me se ek ace aane ki probability?",["1/13","1/4","1/52","4/13"],0,"4/52."],
["'CAT' ke letters ki kitni arrangements?",["6","3","9","12"],0,"3!."],
["4, 6, 8, 10 ka mean?",["7","8","6","9"],0,"28/4."],
["Do paase ka sum 7 aane ki probability?",["1/6","1/12","1/9","7/36"],0,"6/36."],
["Pie chart me 90° kitne % ko dikhata hai?",["25%","20%","30%","40%"],0,"90/360."],
["10 logon me har ek ek dusre se haath milaye. Kul handshakes?",["45","90","100","55"],0,"10C2."],
["'LEVEL' ke letters ki arrangements?",["30","60","120","15"],0,"5!/(2!2!) = 30."]
]}
);
