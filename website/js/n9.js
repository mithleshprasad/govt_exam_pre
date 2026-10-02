(window.NOTES_MR=window.NOTES_MR||[]).push(
{t:"R1 · Series, Analogy aur Classification",h:String.raw`
<div class="easy"><b>Kahan aata hai:</b> SSC, Railway, Police, Banking, BPSC GS — sabme 5–15 sawal. Practice se 20 second me hone lagta hai.</div>

<h4>Number series — kya dekhein (is order me)</h4>
<ol>
<li><b>Difference:</b> 2, 6, 12, 20, 30 → +4, +6, +8, +10 → agla +12 = <b>42</b> (n×(n+1)).</li>
<li><b>Ratio (×):</b> 5, 10, 20, 40 → ×2 → <b>80</b>.</li>
<li><b>Squares / cubes:</b> 4, 9, 16, 25 → 2², 3², 4², 5² → <b>36</b>. 8, 27, 64, 125 → cubes.</li>
<li><b>×2 + 1 / −1:</b> 3, 7, 15, 31 → ×2 + 1 → <b>63</b>.</li>
<li><b>Fibonacci:</b> 1, 1, 2, 3, 5, 8 → pichle do ka sum → <b>13</b>.</li>
<li><b>Primes:</b> 2, 3, 5, 7, 11 → <b>13</b>.</li>
<li><b>Double difference:</b> 100, 96, 88, 72 → −4, −8, −16 → −32 → <b>40</b>.</li>
</ol>

<h4>Alphabet series</h4>
<ul>
<li>A=1 … Z=26. <b>Opposite letter</b> (position ka sum 27): A↔Z, G↔T, M↔N.</li>
<li><b>Increasing gap:</b> A, C, F, J, O → +2, +3, +4, +5 → agla +6 → O(15) + 6 = 21 = <b>U</b>.</li>
<li>Ulti series: Z, X, V, T → −2 → <b>R</b>.</li>
</ul>

<h4>Analogy (sambandh)</h4>
<ul>
<li>Pehle jode ka rishta dekho, wahi dusre jode par lagao. Common rishte: <b>kaam-saadhan</b> (Pen : Write :: Knife : Cut), <b>desh-rajdhani</b> (India : Delhi :: Japan : Tokyo), <b>vastu-upyog</b> (Book : Reading), <b>jeev-ghar</b>, <b>pita-putra</b>, <b>number-square</b> (3 : 9 :: 4 : 16), <b>part-whole</b>.</li>
</ul>
<h4>Classification (odd one out)</h4>
<ul>
<li>Jo baaki se alag ho: category (phal vs sabzi), number type (cube vs non-cube: 8, 27, 64, <b>100</b>, 125 → 100), letters, vowel/consonant.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Series me pehle difference, phir ratio, phir square/cube. Opposite letter ka sum 27.</div>
`,
q:[
["2, 6, 12, 20, 30, ?",["40","42","44","36"],1,"+4,+6,+8,+10,+12."],
["1, 1, 2, 3, 5, 8, ?",["11","12","13","14"],2,"5 + 8."],
["5, 10, 20, 40, ?",["60","80","100","50"],1,"×2."],
["A, C, F, J, O, ?",["T","U","V","S"],1,"Gap +2,+3,+4,+5,+6."],
["Odd one out: 8, 27, 64, 100, 125",["8","64","100","125"],2,"Baaki perfect cubes hain."],
["Book : Reading :: Fork : ?",["Eating","Cooking","Cutting","Writing"],0,"Upyog."],
["Pen : Write :: Knife : ?",["Cut","Cook","Sharp","Steel"],0,"Kaam."],
["3, 7, 15, 31, ?",["47","63","62","55"],1,"×2 + 1."],
["Odd one out: Rose, Lotus, Jasmine, Mango",["Rose","Lotus","Jasmine","Mango"],3,"Mango phal hai."],
["2, 3, 5, 7, 11, ?",["12","13","15","14"],1,"Agla prime."],
["Z, X, V, T, ?",["S","R","Q","P"],1,"Har baar −2."],
["4, 9, 16, 25, ?",["30","35","36","49"],2,"6²."],
["100, 96, 88, 72, ?",["40","56","48","44"],0,"−4, −8, −16, −32."],
["India : Delhi :: Japan : ?",["Tokyo","Osaka","Kyoto","Beijing"],0,"Rajdhani."]
]},

{t:"R2 · Coding-Decoding, Alphabet aur Ranking",h:String.raw`
<div class="easy"><b>Trick:</b> Pehle dekho har letter kitna aage/peeche gaya, ya number se code bana.</div>

<h4>Coding-Decoding</h4>
<ul>
<li><b>Letter shift:</b> TABLE → UBCMF (+1). To CHAIR → DIBJS. BOY (+2) → DQA.</li>
<li><b>Number coding (position ka sum):</b> CAT = 3+1+20 = 24, DOG = 4+15+7 = 26 → BAD = 2+1+4 = <b>7</b>.</li>
<li><b>Ulta/reverse coding:</b> MOUSE → NPVTF (+1 har letter) to KEY → LFZ.</li>
<li>Opposite letters code: A=Z, B=Y (position sum 27).</li>
</ul>

<h4>Alphabet tests</h4>
<ul>
<li>Left se position n ho to <b>right se = 27 − n</b>. M (13th) → right se <b>14th</b>. 13th from right = 27 − 13 = 14th from left = <b>N</b>.</li>
<li>Do letters ke beech letters: D aur J ke beech E, F, G, H, I = <b>5</b> (J − D − 1).</li>
<li>A aur Z ke beech = 24 letters. Vowels: A, E, I, O, U (5).</li>
</ul>

<h4>Ranking aur Order</h4>
<ul>
<li><b>Kul = Upar se rank + Neeche se rank − 1.</b> Upar se 7th, kul 35 → neeche se 35 − 7 + 1 = <b>29th</b>.</li>
<li><b>Do logon ke beech:</b> Left se A = 9, right se B = 7, kul 30 → B left se 24th. Beech me 24 − 9 − 1 = <b>14</b>.</li>
<li>Agar A, B se lamba aur B, C se lamba → A sabse lamba, C sabse chhota (transitive).</li>
<li>Ek hi rank dono taraf same ho (jaise 'beech wala'): kul = 2 × rank − 1.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Right se rank = 27 − left se. Kul = upar + neeche − 1. Beech ke log = antar − 1.</div>
`,
q:[
["TABLE = UBCMF to CHAIR = ?",["DIBJS","DIAJS","DIBIS","CIBJS"],0,"Har letter +1."],
["'M' alphabet me right se kaunsa hai?",["13th","14th","15th","12th"],1,"27 − 13 = 14."],
["'G' ka opposite letter?",["S","T","U","R"],1,"7 + 20 = 27."],
["MOUSE = NPVTF to KEY = ?",["LFZ","LFY","MFZ","KFZ"],0,"Har letter +1."],
["Ram upar se 12th, class me 40 bachche. Neeche se?",["28th","29th","30th","27th"],1,"40 − 12 + 1."],
["30 ki line me Rita left se 9th aur Sita right se 7th. Beech me kitne?",["14","13","15","12"],0,"Sita left se 24th → 24−9−1."],
["CAT = 24, DOG = 26 to BAD = ?",["7","8","6","9"],0,"2+1+4."],
["BOY (+2) = ?",["DQA","DPA","CQA","DQB"],0,"B→D, O→Q, Y→A."],
["D aur J ke beech kitne letters?",["4","5","6","3"],1,"E,F,G,H,I."],
["A aur Z ke beech kitne letters?",["24","25","26","23"],0,"26 − 2."],
["Alphabet me right se 13th letter?",["M","N","O","L"],1,"27 − 13 = 14th left se = N."],
["Class me 35 bachche. Ram upar se 7th. Neeche se?",["28","29","30","27"],1,"35 − 7 + 1."],
["A, B se lamba aur B, C se lamba. Sabse lamba?",["A","B","C","Kuch nahi keh sakte"],0,"A > B > C."]
]},

{t:"R3 · Blood Relation, Direction aur Sitting",h:String.raw`
<div class="easy"><b>Trick:</b> Hamesha chhota <b>family tree</b> ya <b>naqsha</b> banao. Dimaag me mat solve karo.</div>

<h4>Blood relation (rishte)</h4>
<ul>
<li>Pita/Mata ka bhai = <b>Uncle</b> (Chacha/Tau/Mama). Pita ki behan = <b>Aunt</b> (Bua), unka pati = Phupha. Mata ki behan = Mausi.</li>
<li>Behan ka beta = <b>Nephew (Bhanja)</b>. Bhai ka beta = Nephew (Bhatija). Chacha-Mama-Bua ke bachche = <b>Cousin</b>.</li>
<li><b>Wife/pati ka bhai</b> = Brother-in-law (Saala/Jeth). Bhai ki patni = Bhabhi (Sister-in-law). Beti ka pati = Damaad.</li>
<li>Nana/Nani = mata ke maa-baap. Dada/Dadi = pita ke maa-baap.</li>
<li><b>Example:</b> "Pointing to a man, a woman said, 'He is the son of my mother's only son.'" Meri maa ka ek hi beta = mera <b>bhai</b>. Uska beta → mera <b>nephew</b>.</li>
<li><b>Example:</b> A, B ki behan; C, B ki maa; D, C ke pita; E, D ki maa. A ka D se rishta → D ka potra/poti = <b>Granddaughter</b>.</li>
</ul>

<h4>Direction sense</h4>
<ul>
<li>N-E-S-W (clockwise). <b>Right turn = clockwise 90°, Left turn = anti-clockwise 90°.</b> Uttar mukh karke right → Poorv. Dakshin mukh karke left → Poorv.</li>
<li>Subah suraj Poorv me → parchhai <b>Pashchim</b> me. Shaam ko parchhai Poorv me.</li>
<li><b>Doori:</b> seedhi doori = Pythagoras. 6 m South + 8 m East → √(36+64) = <b>10 m</b>. 5 N, 5 E, 5 S → shuru se <b>5 m</b> (East me).</li>
<li>3 km West, phir 4 km North → shuru se <b>North-West</b> disha me, doori 5 km.</li>
<li>Do dishaon ke beech: NE, NW, SE, SW.</li>
</ul>

<h4>Sitting arrangement</h4>
<ul>
<li><b>Line me (North facing):</b> right = East. Rahul, Amit ke right me, Amit, Sunil ke right me → left se: Sunil, Amit, Rahul → <b>Amit beech me</b>.</li>
<li><b>Circular table (n log):</b> saamne wala = n/2 position door. 8 logon me 3rd ka opposite = <b>7th</b>.</li>
<li>Facing centre ho to dayen haath wala = anti-clockwise ki taraf (dhyan se draw karo).</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Right turn = clockwise. Subah parchhai pashchim me. Pythagoras se seedhi doori.</div>
`,
q:[
["'Wo mere maa ke ek hi bete ka beta hai.' Wo mera kya hua?",["Nephew","Bhai","Chacha","Pita"],0,"Maa ka beta = mera bhai; uska beta = nephew."],
["A, B ki behan; C, B ki maa; D, C ke pita. A ka D se rishta?",["Granddaughter","Daughter","Niece","Sister"],0,"D ki poti."],
["5 m North, 5 m East, 5 m South chalne par shuru se doori?",["5 m","10 m","15 m","0"],0,"Seedhi 5 m (East)."],
["North mukh karke right mudne par disha?",["East","West","South","North"],0,"N → right → E."],
["Subah ki dhoop me parchhai kis disha me?",["West","East","North","South"],0,"Suraj East me."],
["6 m South, phir 8 m East. Seedhi doori?",["10 m","14 m","12 m","8 m"],0,"Pythagoras."],
["Pita ki behan ka pati kya kehlata hai?",["Uncle (Phupha)","Cousin","Nephew","Brother-in-law"],0,"Phupha."],
["Mama ka beta kya hota hai?",["Cousin","Nephew","Bhai","Uncle"],0,"Cousin."],
["South mukh karke left mudne par disha?",["East","West","North","South"],0,"S → left → E."],
["8 logon ki gol mez me 3rd ke saamne kaun?",["6th","7th","5th","8th"],1,"3 + 4 = 7."],
["Rahul, Amit ke right me; Amit, Sunil ke right me (North facing). Beech me?",["Amit","Rahul","Sunil","Pata nahi"],0,"Sunil, Amit, Rahul."],
["A ki mother ki mother ka pati A ka kya hai?",["Nana","Dada","Chacha","Mama"],0,"Maternal grandfather."],
["3 km West, phir 4 km North. Shuru se disha?",["North-West","North-East","South-West","South-East"],0,"West + North."],
["Patni ka bhai kya kehlata hai?",["Brother-in-law","Cousin","Nephew","Uncle"],0,"Saala."]
]},

{t:"R4 · Syllogism, Statement aur Venn",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Logic me sirf <b>diye gaye statement</b> maane jaate hain, apni jaankari nahi. Venn diagram banao.</div>

<h4>4 type ke statements</h4>
<div class="tbl"><table><tr><th>Statement</th><th>Matlab</th><th>Ulta (conversion)</th></tr>
<tr><td>Sab A, B hain (All)</td><td>A, B ke andar</td><td>Kuch B, A hain ✓</td></tr>
<tr><td>Kuch A, B hain (Some)</td><td>Thoda overlap</td><td>Kuch B, A hain ✓</td></tr>
<tr><td>Koi A, B nahi (No)</td><td>Alag-alag</td><td>Koi B, A nahi ✓</td></tr>
<tr><td>Kuch A, B nahi (Some not)</td><td>Kuch alag</td><td>Koi conversion nahi</td></tr></table></div>

<h4>Rules</h4>
<ul>
<li><b>All + All → All.</b> Sab cats dogs hain, sab dogs birds → sab cats birds ✓.</li>
<li><b>Some + All → Some.</b> Kuch A, B hain; sab B, C hain → kuch A, C hain ✓.</li>
<li><b>All + Some → koi pakka conclusion nahi.</b> Sab A B hain; kuch B C hain → "kuch A, C hain" ✗ (zaroori nahi).</li>
<li><b>No + Some → Some not.</b> Koi A B nahi; kuch B C hain → kuch C, A nahi hain ✓.</li>
<li>"Sab A, B hain" ka seedha ulta "Sab B, A hain" ✗. Lekin "Kuch B, A hain" ✓.</li>
<li><b>Either-Or case:</b> jab dono conclusion alag-alag follow na karein par ek hi follow karna zaroori ho.</li>
</ul>

<h4>Venn diagram</h4>
<ul>
<li>Dog, Cat, Animal → Animal bada circle; Dog aur Cat usme alag-alag chhote circle.</li>
<li>Tea, Coffee, Beverage → Beverage ke andar Tea aur Coffee alag-alag.</li>
<li>Doctor, Man, Woman? Doctor dono ke saath partially overlap.</li>
</ul>

<h4>Statement-Assumption / Argument</h4>
<ul>
<li><b>Assumption:</b> statement ko sahi banane ke liye jo baat pehle se maani gayi ho. "Umbrella le jao, baarish ho sakti hai" → umbrella baarish se bachata hai (assumption).</li>
<li><b>Conclusion:</b> statement se seedha nikalne wali baat. Naye facts mat jodo.</li>
<li>"Only graduates apply kar sakte hain. Ramesh apply kar sakta hai." → Ramesh <b>graduate</b> hai ✓.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> All + All → All. All + Some → kuch nahi pakka. Some ka ulta Some hota hai. Apni jaankari nahi, sirf diya hua statement.</div>
`,
q:[
["Sab cats dogs hain; sab dogs birds hain. Sab cats birds hain?",["Follow karta hai","Follow nahi","Kuch pata nahi","Galat hai"],0,"All + All → All."],
["Kuch A, B hain; sab B, C hain. Kuch A, C hain?",["Follow karta hai","Follow nahi","Galat","Either"],0,"Some + All → Some."],
["Koi A B nahi; kuch B C hain. 'Kuch C A nahi hain'?",["Follow karta hai","Follow nahi","Galat","Pata nahi"],0,"No + Some → Some not."],
["Sab A, B hain. 'Kuch B, A hain'?",["Follow karta hai","Follow nahi","Galat","Either"],0,"All ka conversion = Some."],
["Sab books pens hain. 'Sab pens books hain'?",["Follow nahi karta","Follow karta hai","Sach hai","Pakka"],0,"All ka seedha ulta nahi hota."],
["Dog, Cat, Animal ka sahi Venn?",["Dog aur Cat alag, dono Animal ke andar","Teeno same","Dog Cat ke andar","Animal Dog ke andar"],0,"Alag chhote circle bade ke andar."],
["Tea, Coffee, Beverage ka Venn?",["Tea aur Coffee alag, Beverage ke andar","Tea Coffee ke andar","Teeno alag","Coffee Beverage ke bahar"],0,"Standard Venn."],
["Kuch A, B hain. 'Kuch B, A hain'?",["Follow karta hai","Follow nahi","Galat","Either"],0,"Some ka ulta Some."],
["Sab A, B hain; kuch B, C hain. 'Kuch A, C hain'?",["Pakka follow nahi karta","Follow karta hai","Sach","Galat pakka"],0,"Pakka nahi."],
["Koi A B nahi. 'Koi B A nahi'?",["Follow karta hai","Follow nahi","Galat","Either"],0,"No ka ulta No."],
["'Sirf graduates apply kar sakte hain. Ramesh apply kar sakta hai.' Ramesh?",["Graduate hai","Graduate nahi","Pata nahi","Teacher hai"],0,"Diya hua statement."],
["Kuch pens books hain; koi book pencil nahi. 'Kuch pens pencil nahi hain'?",["Follow karta hai","Follow nahi","Galat","Either"],0,"Some + No → Some not."],
["Statement: 'Umbrella le jao, baarish ho sakti hai.' Assumption?",["Umbrella baarish se bachata hai","Baarish pakka hogi","Sab ke paas umbrella hai","Aaj garmi hai"],0,"Implicit assumption."],
["Sab roses flowers hain; kuch flowers murjhate hain. 'Kuch roses murjhate hain'?",["Pakka nahi","Pakka hai","Galat","Sach"],0,"All + Some → kuch nahi pakka."]
]},

{t:"R5 · Clock, Calendar, Dice aur Non-verbal",h:String.raw`
<div class="easy"><b>Pehle samjho:</b> Clock aur calendar ke fixed formula hain. Non-verbal (figure) me practice se pattern pakadna seekhte hain.</div>

<h4>Clock</h4>
<ul>
<li><b>Angle = |30H − 5.5M|</b> (H ghanta, M minute). Agar 180° se zyada aaye to 360 − angle.</li>
<li>3:00 → 90°. 6:00 → 180°. 9:00 → 90°. 12:00 → 0°. <b>3:30</b> → |90 − 165| = <b>75°</b>.</li>
<li>Ghante ka kaanta <b>30° per ghanta (0.5° per min)</b>, minute ka kaanta <b>6° per min</b>.</li>
<li>Kaante 12 ghante me <b>11 baar</b> milte hain (24 ghante me 22). Ulti seedhi line (180°) bhi 11 baar. <b>Right angle (90°)</b> 12 ghante me <b>22 baar</b> (24 ghante me 44).</li>
<li><b>Mirror image of clock:</b> 11:60 − time. 3:00 ka mirror = 11:60 − 3:00 = 8:60 = <b>9:00</b>. (12 − time bhi chalta hai jab minute 0 ho.)</li>
</ul>

<h4>Calendar</h4>
<ul>
<li><b>Odd days:</b> din ko 7 se bhaag karke remainder. Normal saal 365 = 52 weeks + <b>1</b> odd day. Leap saal 366 = <b>2</b> odd days.</li>
<li><b>Leap year:</b> 4 se divisible; century saal ho to 400 se divisible (2000 ✓, 1900 ✗, 1996 ✓).</li>
<li><b>100 saal me 5 odd days</b>, 200 me 3, 300 me 1, 400 me 0.</li>
<li>Mahine ke odd days: 31 din → 3, 30 din → 2, Feb 28 → 0 (leap 1).</li>
<li><b>Misal:</b> 1 Jan 2024 Monday. 31 Jan = 30 din baad → 30 ÷ 7 = remainder 2 → Monday + 2 = <b>Wednesday</b>.</li>
<li>Aaj Thursday hai, 100 din baad → 100 ÷ 7 = remainder 2 → <b>Saturday</b>.</li>
</ul>

<h4>Mathematical operations (symbol badalna)</h4>
<ul>
<li>Pehle symbol ko asli operation se badlo, phir BODMAS. "+" ka matlab "×" aur "−" ka matlab "÷" ho to 6 + 4 − 2 = 6 × 4 ÷ 2 = <b>12</b>.</li>
</ul>
<h4>Missing number / Dice</h4>
<ul>
<li>Rows ya columns me pattern: 2, 4, 8 / 3, 9, 27 / 4, 16, ? → n, n², n³ → <b>64</b>.</li>
<li><b>Dice:</b> saamne ke faces ka sum 7 — (1,6), (2,5), (3,4). 2 ka opposite = <b>5</b>.</li>
</ul>
<h4>Non-verbal (figure)</h4>
<ul>
<li><b>Mirror image:</b> left-right ulta. <b>Water image:</b> upar-neeche ulta. <b>Paper folding/cutting:</b> fold ke saath cut symmetric rehta hai. <b>Counting figures:</b> triangle me ek vertex se base tak ek line = <b>3</b> triangles. n lines ka grid → rectangles = nC2 × mC2.</li>
</ul>
<div class="tip"><b>Yaad rakho:</b> Clock angle = |30H − 5.5M|. Leap year 4 se, century 400 se. Dice me opposite ka sum 7.</div>
`,
q:[
["3:30 par ghadi ke kaanton ka angle?",["75°","90°","60°","105°"],0,"|90 − 165| = 75."],
["6:00 par angle?",["90°","180°","120°","0°"],1,"Seedhi line."],
["Normal saal me odd days?",["0","1","2","3"],1,"365 = 52×7 + 1."],
["100 saal me odd days?",["5","3","1","0"],0,"Standard fact."],
["1 Jan 2024 Monday. 31 Jan 2024 kaunsa din?",["Wednesday","Tuesday","Thursday","Monday"],0,"30 din = 2 odd days."],
["3:00 ka mirror image?",["9:00","6:00","12:00","3:00"],0,"12 − 3."],
["Dice me 2 ke saamne kaunsi sankhya?",["5","4","6","3"],0,"Sum 7."],
["12 ghante me ghadi ke dono kaante kitni baar milte hain?",["11","12","10","13"],0,"11 baar."],
["Aaj Thursday; 100 din baad?",["Saturday","Friday","Sunday","Monday"],0,"100 mod 7 = 2."],
["9:00 par angle?",["90°","120°","180°","60°"],0,"|270 − 0| = 270 → 90."],
["'+' = '×', '−' = '÷' to 6 + 4 − 2 = ?",["12","8","6","10"],0,"6×4÷2."],
["2, 4, 8 / 3, 9, 27 / 4, 16, ?",["64","32","48","20"],0,"n, n², n³."],
["Triangle me ek vertex se base tak ek line. Kul triangles?",["3","2","4","5"],0,"1 bada + 2 chhote."],
["1996 leap year hai?",["Haan","Nahi","Kabhi-kabhi","Pata nahi"],0,"4 se divisible."]
]}
);
