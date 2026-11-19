/* =========================================================
   Adhyasa-Bhashya Interactive Learning App — Script
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. DATA: GLOSSARY (10 Core Terms)
     --------------------------------------------------------- */
  const glossaryData = [
    {
      id: "adhyasa",
      term: "અધ્યાસ",
      en: "Adhyasa",
      synonym: "આરોપ / ભ્રમણા",
      meaning: "એક વસ્તુમાં (અતદ્) બીજી વસ્તુની (તદ્) મિથ્યા બુદ્ધિ થવી; પૂર્વે જોયેલી વસ્તુનો અન્યત્ર સ્મૃતિના રૂપમાં થતો અવભાસ."
    },
    {
      id: "vishaya",
      term: "વિષય (યુષ્મદ્)",
      en: "Vishaya / Yushmad",
      synonym: "દૃશ્ય / અનાત્મા",
      meaning: "‘તું’ અથવા ‘આ’ રૂપે જણાતું સમગ્ર જડ જગત્ — શરીર, ઇન્દ્રિયો, અંતઃકરણ અને બાહ્ય પદાર્થો."
    },
    {
      id: "vishayi",
      term: "વિષયી (અસ્મદ્)",
      en: "Vishayi / Asmad",
      synonym: "દ્રષ્ટા / આત્મા",
      meaning: "‘હું’ એવી પ્રતીતિના મૂળમાં રહેલું સ્વયંપ્રકાશ, નિત્ય ચૈતન્ય તત્ત્વ."
    },
    {
      id: "mithunikarana",
      term: "સત્યાનૃતે મિથુનીકૃત્ય",
      en: "Satyanrite Mithunikritya",
      synonym: "સત્ય-અનૃતનું મિથુનીકરણ",
      meaning: "કૂટસ્થનિત્ય સત્ય (ચૈતન્ય આત્મા) અને મિથ્યા અનૃત (જડ દેહાદિ) નું અજ્ઞાનવશ પરસ્પર જોડાણ કરવું."
    },
    {
      id: "pratyagatman",
      term: "પ્રત્યગાત્મા",
      en: "Pratyagatman",
      synonym: "અંતરાત્મા / સાક્ષી",
      meaning: "અંતઃકરણની સમસ્ત વૃત્તિઓનો અપરોક્ષ (સીધો) સાક્ષીભૂત શુદ્ધ આત્મા."
    },
    {
      id: "adhishthana",
      term: "અધિષ્ઠાન",
      en: "Adhishthana",
      synonym: "આધાર / આશ્રય",
      meaning: "જે સત્ય વસ્તુના આધારે ભ્રમ ભાસે તે (જેમ સર્પના ભ્રમનું અધિષ્ઠાન દોરડું છે, તેમ જગત્પ્રપંચનું અધિષ્ઠાન બ્રહ્મ છે); ઇન્દ્રિયોના સંદર્ભમાં ભામતી તેનો અર્થ સંચાલન કરે છે."
    },
    {
      id: "anirvachaniya",
      term: "અનિર્વચનીય",
      en: "Anirvachaniya",
      synonym: "વર્ણનાતીત (મિથ્યા)",
      meaning: "જેને ન તો પૂર્ણ સત્ય (સત્) કહી શકાય કે ન તો સર્વથા અસત્ય (અસત્) — એવું માયા કે અવિદ્યાનું સ્વરૂપ."
    },
    {
      id: "pramana",
      term: "પ્રમાતા-પ્રમાણ-પ્રમેય",
      en: "Pramata-Pramana-Prameya",
      synonym: "જ્ઞાતા-સાધન-જ્ઞેય",
      meaning: "જાણનાર વ્યક્તિ (પ્રમાતા), જાણવાનાં સાધનો પ્રત્યક્ષાદિ (પ્રમાણ) અને જાણેલા વિષયો (પ્રમેય) નો વ્યાવહારિક વ્યવહાર."
    },
    {
      id: "atmaikatvavidya",
      term: "આત્મૈકત્વવિદ્યા",
      en: "Atmaikatva-Vidya",
      synonym: "બ્રહ્મ-આત્મ એકત્વનું જ્ઞાન",
      meaning: "‘જીવ બ્રહ્મ જ છે, અન્ય નથી’ એવો અદ્વૈત સાક્ષાત્કાર, જે સમગ્ર ઉપનિષદોનું મુખ્ય પ્રયોજન છે."
    },
    {
      id: "shariraka",
      term: "શારીરકમીમાંસા",
      en: "Shariraka-Mimamsa",
      synonym: "બ્રહ્મસૂત્રભાષ્ય",
      meaning: "શરીરમાં રહેલા (શારીરક) જીવાત્માના વાસ્તવિક બ્રહ્મસ્વરૂપની વિચારણા કરનારું વેદાંતશાસ્ત્ર."
    }
  ];

  const glossaryMap = {};
  glossaryData.forEach((item) => {
    glossaryMap[item.id] = item;
  });

  /* ---------------------------------------------------------
     2. DATA: 7 SECTIONS OF ADHYASA-BHASHYA
     --------------------------------------------------------- */
  const bhashyaSections = [
    {
      num: 1,
      guTitle: "વિષય અને વિષયીનો વિરોધ તથા નૈસર્ગિક અધ્યાસ",
      enTitle: "Subject–Object Polarity & Natural Superimposition",
      sanskrit:
        "युष्मदस्मत्प्रत्ययगोचरयोर्विषयविषयिणोस्तमःप्रकाशवद्विरुद्धस्वभावयोः इतरेतरभावानुपपत्तौ सिद्धायाम्, तद्धर्माणामपि सुतराम् इतरेतरभावानुपपत्तिः — ... तथापि अन्योन्यस्मिन्नन्योन्यात्मकताम् अन्योन्यधर्मांश्चाध्यस्य इतरेतराविवेकेन अत्यन्तविविक्तयोर्धर्मधर्मिणोः, मिथ्याज्ञाननिमित्तः, सत्यानृते मिथुनीकृत्य, ‘अहमिदम्’ ‘ममेदम्’ इति नैसर्गिकोऽयं लोकव्यवहारः ॥",
      gujaratiHtml: `
        <p>‘તું’ (<em>યુષ્મદ્</em> — અનાત્મા અથવા જડ પદાર્થ) ના પ્રત્યયનો ગોચર એવો <button type="button" class="term-link" data-term="vishaya">વિષય</button> (દૃશ્ય જગત્, દેહ, ઇન્દ્રિયો, અંતઃકરણ વગેરે) અને ‘હું’ (<em>અસ્મદ્</em> — ચૈતન્ય આત્મા) ના પ્રત્યયનો ગોચર એવો <button type="button" class="term-link" data-term="vishayi">વિષયી</button> (દ્રષ્ટા આત્મા)—આ બંને અંધકાર અને પ્રકાશની જેમ પરસ્પર અત્યંત વિરુદ્ધ સ્વભાવવાળા છે. તેથી તેમનું એકબીજામાં તાદાત્મ્ય (એકરૂપતા) થવું કોઈ પણ પ્રમાણની અપેક્ષા વિના જ અસંભવિત સિદ્ધ થાય છે, અને તેમના ધર્મોનું પણ એકબીજામાં તાદાત્મ્ય થવું વધુ જ અસંભવિત છે.</p>
        <p>તેમ છતાં, અત્યંત ભિન્ન સ્વભાવ ધરાવતા આ બે પદાર્થો (આત્મા અને અનાત્મા) તથા તેમના ધર્મોનો વિવેક (ભેદજ્ઞાન) ન હોવાના કારણે, મિથ્યાજ્ઞાન (અજ્ઞાન) ને નિમિત્તે એકના સ્વરૂપ અને ધર્મોનો બીજામાં આરોપ કરીને—અર્થાત્ <button type="button" class="term-link" data-term="mithunikarana">સત્ય અને અનૃતનું પરસ્પર મિથુનીકરણ</button> કરીને—‘હું આ છું’ (<em>અહમિદમ્</em>) અને ‘આ મારું છે’ (<em>મમેદમ્</em>) એવો આ નૈસર્ગિક (અનાદિ અને સ્વાભાવિક) લોકવ્યવહાર નિરંતર ચાલ્યા કરે છે.</p>
      `,
      takeaway: "મૂળ સાર: ચેતન આત્મા અને જડ દેહ પ્રકાશ-અંધકાર જેવા વિરુદ્ધ હોવા છતાં, અવિવેકને લીધે ‘હું આ છું’ અને ‘આ મારું છે’ નો સ્વાભાવિક વ્યવહાર ચાલે છે."
    },
    {
      num: 2,
      guTitle: "અધ્યાસનું લક્ષણ (વ્યાખ્યા) અને વિવિધ દાર્શનિક મતો",
      enTitle: "Definition of Adhyasa & Classical Philosophical Views",
      sanskrit:
        "आह — कोऽयमध्यासो नामेति । उच्यते — स्मृतिरूपः परत्र पूर्वदृष्टावभासः । तं केचिद् ‘अन्यत्रान्यधर्माध्यासः’ इति वदन्ति । केचित्तु ‘यत्र यदध्यासः तद्विवेकाग्रहनिबन्धनो भ्रमः’ इति । अन्ये तु ‘यत्र यदध्यासः तस्यैव विपरीतधर्मत्वकल्पनाम् आचक्षते’ । सर्वथापि तु अन्यस्यान्यधर्मावभासतां न व्यभिचरति । तथा च लोकेऽनुभवः — शुक्तिका हि रजतवदवभासते, एकश्चन्द्रः सद्वितीयवदिति ॥",
      gujaratiHtml: `
        <p>પ્રશ્ન થાય છે કે આ ‘<button type="button" class="term-link" data-term="adhyasa">અધ્યાસ</button>’ નામની વસ્તુ શી છે? તેનું ઉત્તર આપીએ છીએ: <strong>પૂર્વે જોયેલી વસ્તુનો અન્ય સ્થાનમાં સ્મૃતિના રૂપમાં થતો અવભાસ (પ્રતીતિ) તે અધ્યાસ છે</strong> (<em>સ્મૃતિરૂપઃ પરત્ર પૂર્વદૃષ્ટાવભાસઃ</em>).</p>
        <p>વિવિધ દાર્શનિકો આ અધ્યાસને જુદી જુદી રીતે વ્યાખ્યાયિત કરે છે: કેટલાક (બૌદ્ધ દર્શનના મતાનુસાર) તેને એક વસ્તુમાં બીજી વસ્તુના ધર્મોના આરોપ તરીકે ઓળખાવે છે; બીજા કેટલાક (પ્રભાકર મીમાંસકો — અખ્યાતિવાદીઓ) તેને અધ્યસ્ત અને અધિષ્ઠાન વચ્ચેના ભેદનું ગ્રહણ ન થવાથી ઉત્પન્ન થતા ભ્રમ તરીકે વર્ણવે છે; જ્યારે અન્ય કેટલાક (નૈયાયિકો — અન્યથાખ્યાતિવાદીઓ, તેમજ આનંદગિરિના મતે માધ્યમિકો) તેને અધિષ્ઠાનના સ્વરૂપથી વિપરીત ધર્મોની કલ્પના કહે છે.</p>
        <p>આ સર્વ મતોમાં એક મૂળભૂત લક્ષણ સમાન રહે છે કે એક વસ્તુમાં અન્ય વસ્તુના ધર્મોની પ્રતીતિ થવી—અર્થાત્ જે વસ્તુ જેવી નથી તેમાં તેવી બુદ્ધિ થવી (<em>અતસ્મિંસ્તદ્બુદ્ધિઃ</em>). લોકવ્યવહારમાં પણ આવો જ પ્રત્યક્ષ અનુભવ જોવા મળે છે: જેમ કે છીપલું (<em>શુક્તિકા</em>) ચાંદી (<em>રજત</em>) ની જેમ ભાસે છે, અને એક જ ચંદ્ર જાણે દ્વિતીય ચંદ્ર સાથે હોય તેમ દેખાય છે.</p>
      `,
      takeaway: "મૂળ સાર: ભ્રમ અંગે વિવિધ દર્શનોની વ્યાખ્યાઓ ભિન્ન હોવા છતાં, ‘એક વસ્તુમાં અન્યની બુદ્ધિ’ (અતસ્મિંસ્તદ્બુદ્ધિઃ) એ સર્વસંમત અનુભવ છે."
    },
    {
      num: 3,
      guTitle: "પ્રત્યગાત્મામાં અધ્યાસની સંભાવના: શંકા અને સમાધાન",
      enTitle: "How Can Superimposition Occur on the Inner Self?",
      sanskrit:
        "कथं पुनः प्रत्यगात्मन्यविषयेऽध्यासो विषयतद्धर्माणाम् ? सर्वो हि पुरोऽवस्थित एव विषये विषयान्तरम् अध्यस्यति; युष्मत्प्रत्ययापेतस्य च प्रत्यगात्मनोऽविषयत्वं ब्रवीषि । उच्यते — न तावदयमेकान्तेनाविषयः, अस्मत्प्रत्ययविषयत्वात्, अपरोक्षत्वाच्च प्रत्यगात्मप्रसिद्धेः । न चायमस्ति नियमः — पुरोऽवस्थित एव विषये विषयान्तरम् अध्यसितव्यमिति; अप्रत्यक्षेऽपि ह्याकाशे बालाः तलमलिनतादि अध्यस्यन्ति । एवमविरुद्धः प्रत्यगात्मन्यपि अनात्माध्यासः ॥",
      gujaratiHtml: `
        <p><strong>શંકા:</strong> જે વિષય ઇન્દ્રિયોની સમક્ષ રહેલો હોય તેના પર જ અન્ય વસ્તુનો અધ્યાસ થઈ શકે છે (જેમ કે સામે પડેલી છીપમાં ચાંદીનો અધ્યાસ). પરંતુ <button type="button" class="term-link" data-term="pratyagatman">પ્રત્યગાત્મા</button> (અંતરાત્મા) તો કોઈ વિષય નથી (<em>અવિષય</em>), અને ઇન્દ્રિયોની સામે રહેલો પદાર્થ પણ નથી; તો તેના પર વિષય અને તેના ધર્મોનો અધ્યાસ કેવી રીતે સંભવી શકે?</p>
        <p><strong>સમાધાન:</strong> પ્રથમ તો, પ્રત્યગાત્મા સર્વથા (એકાંતપણે) અવિષય નથી; કારણ કે તે ‘હું’ એવા <strong>અહંપ્રત્યયનો વિષય</strong> બને છે, અને પ્રત્યગાત્માનું અસ્તિત્વ તો સર્વને <strong>અપરોક્ષ</strong> (સીધા, સ્વયંસિદ્ધ આંતરિક અનુભવ) થી સુપ્રસિદ્ધ છે (કોઈ ક્યારેય ‘હું નથી’ એવું વિચારતું નથી).</p>
        <p>બીજું, એવો કોઈ સાર્વત્રિક નિયમ નથી કે જે પદાર્થ ઇન્દ્રિયોની સામે પ્રત્યક્ષ હોય તેના પર જ બીજી વસ્તુનો અધ્યાસ થઈ શકે; કારણ કે અવિવેકી લોકો જે ઇન્દ્રિય-પ્રત્યક્ષનો વિષય નથી એવા <strong>આકાશ</strong> માં પણ ઘેરા વાદળી રંગ કે મલિનતાનો અધ્યાસ કરી બેસે છે. તેથી, પ્રત્યગાત્મામાં અનાત્મા (દેહ, ઇન્દ્રિયો વગેરે) નો અધ્યાસ થવો તે સર્વથા નિર્વિવાદ અને સંભવિત છે.</p>
      `,
      takeaway: "મૂળ સાર: આકાશ ઇન્દ્રિયગોચર ન હોવા છતાં તેમાં ભૂરા રંગનો આરોપ થાય છે; તેમ અપરોક્ષ સિદ્ધ પ્રત્યગાત્મામાં પણ અનાત્માનો અધ્યાસ સંભવિત છે."
    },
    {
      num: 4,
      guTitle: "અવિદ્યા, વિદ્યા અને અસંગ આત્માનું સ્વરૂપ",
      enTitle: "Avidya, Vidya & The Untouched Nature of Atman",
      sanskrit:
        "तमेतमेवंलक्षणम् अध्यासं पण्डिता अविद्येति मन्यन्ते । तद्विवेकेन च वस्तुस्वरूपावधारणं विद्यामाहुः । तत्रैवं सति, यत्र यदध्यासः, तत्कृतेन दोषेण गुणेन वा अणुमात्रेणापि स न सम्बध्यते ॥",
      gujaratiHtml: `
        <p>આ રીતે પૂર્વોક્ત લક્ષણવાળા, સર્વ અનુભવથી સિદ્ધ એવા આ પરસ્પર અધ્યાસને જ વિવેકી જ્ઞાનીઓ <strong>અવિદ્યા</strong> (અજ્ઞાન) કહે છે, અને તેનાથી ભિન્ન, વિવેક દ્વારા વસ્તુના યથાર્થ સ્વરૂપના નિર્ણયને <strong>વિદ્યા</strong> (જ્ઞાન) કહે છે.</p>
        <p>આ સ્થિતિમાં એ સિદ્ધાંત સ્પષ્ટ રહે છે કે જ્યાં એક વસ્તુમાં બીજી વસ્તુનો અધ્યાસ થયો હોય, ત્યાં અધ્યસ્ત (આરોપિત) વસ્તુના ગુણ કે દોષનો અણુમાત્ર પણ સ્પર્શ <button type="button" class="term-link" data-term="adhishthana">અધિષ્ઠાન</button> રૂપ મૂળ સત્યને થતો નથી—જેમ દોરડા પર કલ્પિત સર્પની ભ્રમણાથી દોરડું લેશમાત્ર પ્રભાવિત થતું નથી, તેમ મિથ્યા અધ્યાસથી બ્રહ્મ/આત્મા સદૈવ અસંગ અને અવિકારી રહે છે.</p>
      `,
      takeaway: "મૂળ સાર: અધ્યાસ જ અવિદ્યા છે અને વિવેકપૂર્વક સત્યનો નિર્ણય તે વિદ્યા છે; આરોપિત ભ્રમના દોષ-ગુણનો સ્પર્શ શુદ્ધ આત્માને ક્યારેય થતો નથી."
    },
    {
      num: 5,
      guTitle: "પ્રમાણ-પ્રમેય વ્યવહાર, પશ્વાદિ સાથેનું સામ્ય અને શાસ્ત્રીય વ્યવહાર",
      enTitle: "Means of Knowledge, Animal Analogy & Scriptural Action",
      sanskrit:
        "तमेतमविद्याख्यम् आत्मानात्मनोरितरेतराध्यासं पुरस्कृत्य सर्वे प्रमाणप्रमेयव्यवहारा लौकिका वैदिकाश्च प्रवृत्ताः, सर्वाणि च शास्त्राणि विधिप्रतिषेधमोक्षपराणि । ... देहेन्द्रियादिषु अहंममाभिमानरहितस्य प्रमातृत्वानुपपत्तौ प्रमाणप्रवृत्त्यनुपपत्तेः । ... पश्वादिभिश्चाविशेषात् । यथा हि पश्वादयः ... शास्त्रीये तु व्यवहारे यद्यपि ...",
      gujaratiHtml: `
        <p>આત્મા અને અનાત્માના આ પરસ્પર અધ્યાસને અવિદ્યા માન્યા પછી જ, સર્વ લૌકિક અને વૈદિક <button type="button" class="term-link" data-term="pramana">પ્રમાણ-પ્રમેય વ્યવહાર</button> તથા વિધિ, નિષેધ અને મોક્ષનું પ્રતિપાદન કરનારાં સમસ્ત શાસ્ત્રો પ્રવૃત્ત થાય છે. દેહ, ઇન્દ્રિયો આદિમાં ‘હું’ અને ‘મારું’ એવા આત્મભાવના અધ્યાસ વિના કોઈ વ્યક્તિ પ્રમાતા (જાણનાર) બની શકતી નથી, અને પ્રમાતા વિના પ્રમાણોની પ્રવૃત્તિ સંભવતી નથી. જો આત્માના અધ્યાસ વિના કેવળ દેહ જ પ્રવૃત્ત થતો હોત, તો ગાઢ નિદ્રા (સુષુપ્તિ) માં પણ ક્રિયા થાત.</p>
        <p>વ્યવહારની દૃષ્ટિએ મનુષ્યનો પ્રત્યક્ષાદિ પ્રમાણ-વ્યવહાર પશુઓથી જરાય ભિન્ન નથી (<em>પશ્વાદિભિશ્ચા વિશેષાત્</em>). જેમ ગાય આદિ પશુઓ હાથમાં લાકડી લઈને આવતા પુરુષને જોઈને દૂર ભાગી જાય છે અને હાથમાં લીલું ઘાસ લઈને આવતા પુરુષ તરફ આકર્ષાઈને નજીક આવે છે—બરાબર તેમ જ બુદ્ધિમાન મનુષ્યો પણ હાથમાં તલવાર લઈને આવતા ક્રૂર પુરુષોથી દૂર ભાગે છે અને સજ્જન પુરુષો તરફ પ્રવૃત્ત થાય છે.</p>
        <p>શાસ્ત્રીય (વૈદિક કર્મકાંડના) વ્યવહારમાં પણ આ જ નિયમ લાગુ પડે છે. વૈદિક કર્મના અધિકારીને ભલે પરલોકમાં કર્મફળ ભોગવનારા દેહભિન્ન આત્માની ધારણા હોય, પરંતુ તે ધારણા પણ કર્તૃત્વ-ભોક્તૃત્વના અધ્યાસ અને અવિદ્યાના ક્ષેત્રની અંદર જ રહે છે. શુદ્ધ, અસંગ અને અકર્તા આત્મજ્ઞાન તો સમસ્ત કર્મ-અધિકારથી પર છે.</p>
      `,
      takeaway: "મૂળ સાર: સમસ્ત લૌકિક અને વૈદિક પ્રમાણ-વ્યવહાર દેહાભિમાનરૂપ અવિદ્યાના આધારે જ ચાલે છે—જે પશુઓના વ્યવહાર સમાન જ છે."
    },
    {
      num: 6,
      guTitle: "અધ્યાસના પ્રત્યક્ષ ઉદાહરણો અને પરસ્પર અધ્યાસ (ખંડ ૧૮)",
      enTitle: "Four Everyday Layers of Superimposition (Section 18)",
      sanskrit:
        "अध्यासो नाम अतस्मिंस्तद्बुद्धिरित्यवोचाम । तद्यथा—पुत्रभार्यादिषु विकलेषु सकलेषु वा अहमेव विकलः सकलो वेति बाह्यधर्मानात्मन्यध्यस्यति; तथा देहधर्मान्—स्थूलोऽहं, कृशोऽहं, गौरोऽहं, तिष्ठामि, गच्छामि, लङ्घयामि चेति । तथेन्द्रियधर्मान्—मूकः, काणः, क्लीबः, बधिरः, अन्धोऽहमिति । तथाऽन्तःकरणधर्मान्—कामसङ्कल्पविचिकित्साध्यवसायादीन् । एवमहंप्रत्ययिनमशेषस्वप्रचारसाक्षिणि प्रत्यगात्मन्यध्यस्य, तं च प्रत्यगात्मानं सर्वसाक्षिणं तद्विपर्ययेणान्तःकरणादिष्वध्यस्यति । एवमयमनादिरनन्तो नैसर्गिकोऽध्यासो मिथ्याप्रत्ययरूपः कर्तृत्वभोक्तृत्वप्रवर्तकः सर्वलोकप्रत्यक्षः ॥",
      gujaratiHtml: `
        <p>એક વસ્તુમાં (<em>અતદ્</em> માં) બીજી વસ્તુની (<em>તદ્</em> ની) બુદ્ધિ થવી—એનું નામ ‘અધ્યાસ’ છે, એવું અમે પહેલાં કહી ચૂક્યા છીએ. તેના પ્રત્યક્ષ ઉદાહરણો (ભરત પુરુષોત્તમ સરસ્વતી કૃત અનુવાદ પર આધારિત):</p>
        <ul>
          <li><strong>બાહ્ય ધર્મોનો અધ્યાસ:</strong> પુત્ર, પત્ની આદિ સ્વજનો અપૂર્ણ કે પૂર્ણ હોતાં ‘હું જ અપૂર્ણ કે પૂર્ણ છું’—આ પ્રમાણે બાહ્ય પદાર્થોના ધર્મોનો પોતાના આત્મામાં અધ્યાસ કરે છે.</li>
          <li><strong>દેહધર્મોનો અધ્યાસ:</strong> ‘હું સ્થૂળ (જાડો) છું’, ‘હું કૃશ (પાતળો) છું’, ‘હું ગૌર છું’, ‘હું ઊભો છું’, ‘હું જાઉં છું’, ‘હું ઓળંગું છું’—આ પ્રમાણે શરીરના ધર્મોનો પોતાનામાં અધ્યાસ કરે છે.</li>
          <li><strong>ઇન્દ્રિયધર્મોનો અધ્યાસ:</strong> ‘હું મૂક (મૂંગો) છું’, ‘હું કાણો છું’, ‘હું નપુંસક (<em>ક્લીબ</em>) છું’, ‘હું બહેરો છું’, ‘હું આંધળો છું’—આ પ્રમાણે ઇન્દ્રિયોના ધર્મોનો આત્મામાં અધ્યાસ કરે છે.</li>
          <li><strong>અંતઃકરણધર્મોનો અધ્યાસ:</strong> કામ, સંકલ્પ, સંશય (<em>વિચિકિત્સા</em>) અને નિશ્ચય (<em>અધ્યવસાય</em>) આદિ અંતઃકરણ (મન-બુદ્ધિ) ના ધર્મોનો પોતાનામાં અધ્યાસ કરે છે.</li>
        </ul>
        <p>આ જ પ્રમાણે, ‘હું’ એવી પ્રતીતિ (<em>અહંપ્રત્યય</em>) ધરાવતા અંતઃકરણનો, અંતઃકરણની સર્વ વૃત્તિઓના સાક્ષીભૂત એવા <button type="button" class="term-link" data-term="pratyagatman">પ્રત્યગાત્મા</button> માં આરોપ કરીને, અને તેનાથી વિપરીત તે સર્વસાક્ષી પ્રત્યગાત્માનો અંતઃકરણ આદિમાં અધ્યાસ કરે છે. આમ, અનાદિ, અનંત, નૈસર્ગિક, મિથ્યાપ્રત્યયરૂપ અને આત્મામાં કર્તૃત્વ તથા ભોક્તૃત્વનો પ્રવર્તક એવો આ અધ્યાસ સર્વ લોકોના પ્રત્યક્ષ અનુભવમાં સિદ્ધ છે.</p>
      `,
      takeaway: "મૂળ સાર: બાહ્ય સંબંધો, સ્થૂળ દેહ, ઇન્દ્રિયો અને અંતઃકરણ—આ ચાર સ્તરોના ધર્મોનો આત્મામાં આરોપ જ કર્તૃત્વ અને ભોક્તૃત્વને જન્મ આપે છે."
    },
    {
      num: 7,
      guTitle: "અનર્થહેતુની નિવૃત્તિ અને વેદાંતશાસ્ત્રનું પ્રયોજન (ખંડ ૧૯)",
      enTitle: "Removal of Suffering & Purpose of Vedanta (Section 19)",
      sanskrit:
        "अस्यानर्थहेतोः प्रहाणाय आत्मैकत्वविद्याप्रतिपत्तये सर्वे वेदान्ता आरभ्यन्ते । यथा चायमर्थः सर्वेषां वेदान्तानां तथा वयमस्यां शारीरकमीमांसायां प्रदर्शयिष्यामः ॥",
      gujaratiHtml: `
        <p>આ અનર્થના હેતુભૂત અધ્યાસ (અવિદ્યા) ની સમૂળ નિવૃત્તિ (પ્રહાણ) માટે તથા બ્રહ્મ (પરમાત્મા) અને આત્મા (જીવાત્મા) ની એકતાના જ્ઞાન (<button type="button" class="term-link" data-term="atmaikatvavidya">આત્મૈકત્વવિદ્યા</button>) ની પ્રાપ્તિ માટે સર્વ વેદાંતો (ઉપનિષદો) નો આરંભ થાય છે.</p>
        <p>જે પ્રમાણે સર્વ વેદાંતોનો મુખ્ય અર્થ અને પ્રયોજન આ (બ્રહ્મ-આત્મ એકત્વ) છે, તે જ પ્રમાણે અમે અહીં આ <button type="button" class="term-link" data-term="shariraka">શારીરકમીમાંસા</button> (<em>બ્રહ્મસૂત્રભાષ્ય</em>) માં દર્શાવીશું.</p>
        <p><em>— ઇતિ શ્રીમત્પરમહંસ-પરિવ્રાજકાચાર્ય શ્રીગોવિન્દભગવત્પૂજ્યપાદશિષ્ય શ્રીમચ્છંકરભગવત્પાદ કૃત ‘બ્રહ્મસૂત્ર-શારીરકમીમાંસાભાષ્ય’ માં ‘અધ્યાસભાષ્ય’ સમાપ્ત.</em></p>
      `,
      takeaway: "મૂળ સાર: સમસ્ત ઉપનિષદો અને બ્રહ્મસૂત્રનો એકમાત્ર ઉદ્દેશ્ય અનર્થરૂપ અધ્યાસની નિવૃત્તિ કરીને જીવ-બ્રહ્મ એકત્વનો સાક્ષાત્કાર કરાવવાનો છે."
    }
  ];

  /* ---------------------------------------------------------
     3. DATA: CONCENTRIC ADHYASA LAYERS
     --------------------------------------------------------- */
  const adhyasaLayers = [
    {
      shortLabel: "૧. બાહ્ય",
      badge: "સ્તર ૧ • સૌથી બહારનું આવરણ",
      title: "બાહ્ય ધર્મો (બાહ્ય પદાર્થોનો આરોપ)",
      sanskrit: "“पुत्रभार्यादिषु विकलेषु सकलेषु वा अहमेव विकलः सकलो वेति बाह्यधर्मानात्मन्यध्यस्यति”",
      exampleLabel: "શંકરાચાર્યનું પ્રત્યક્ષ ઉદાહરણ:",
      example: "પુત્ર-પત્ની અપૂર્ણ કે પૂર્ણ હોતાં “હું જ અપૂર્ણ કે પૂર્ણ છું” — આ પ્રમાણે બાહ્ય પદાર્થોના ધર્મોનો પોતાનામાં અધ્યાસ કરે છે.",
      role: "દાર્શનિક ભૂમિકા: પરિવાર કે બાહ્ય સંબંધોની સ્થિતિને પોતાની અંગત પૂર્ણતા કે અપૂર્ણતા માની લેવી.",
      accentVar: "var(--ring-0-stroke)",
      tintVar: "var(--ring-0-fill)",
      hint: "અંદરના સ્તર (દેહધર્મો) અથવા કેન્દ્ર પર ક્લિક કરીને આગળ જુઓ"
    },
    {
      shortLabel: "૨. દેહ",
      badge: "સ્તર ૨ • સ્થૂળ શરીરનું આવરણ",
      title: "દેહધર્મો (શારીરિક ગુણ-ક્રિયાનો આરોપ)",
      sanskrit: "“स्थूलोऽहं, कृशोऽहं, गौरोऽहं, तिष्ठामि, गच्छामि, लङ्घयामि चेति”",
      exampleLabel: "શંકરાચાર્યનું પ્રત્યક્ષ ઉદાહરણ:",
      example: "“હું સ્થૂળ છું, હું કૃશ (પાતળો) છું, હું ગૌર છું; હું ઊભો છું, ચાલું છું, ઓળંગું છું” — આ પ્રમાણે દેહના ધર્મોનો આત્મામાં અધ્યાસ કરે છે.",
      role: "દાર્શનિક ભૂમિકા: જડ સ્થૂળ શરીરના આકાર, રંગ અને ગતિને ચેતન આત્માના ધર્મો સમજી લેવા.",
      accentVar: "var(--ring-1-stroke)",
      tintVar: "var(--ring-1-fill)",
      hint: "વધુ સૂક્ષ્મ સ્તર (ઇન્દ્રિયધર્મો) જોવા માટે આગળના વર્તુળ પર ક્લિક કરો"
    },
    {
      shortLabel: "૩. ઇન્દ્રિય",
      badge: "સ્તર ૩ • ઇન્દ્રિયોનું આવરણ",
      title: "ઇન્દ્રિયધર્મો (ઇન્દ્રિય-વિકારોનો આરોપ)",
      sanskrit: "“मूकः, काणः, क्लीबः, बधिरः, अन्धोऽहमिति”",
      exampleLabel: "શંકરાચાર્યનું પ્રત્યક્ષ ઉદાહરણ:",
      example: "“હું મૂંગો છું, કાણો છું, નપુંસક છું, બહેરો છું, આંધળો છું” — આ પ્રમાણે ઇન્દ્રિયોના ધર્મોનો આત્મામાં અધ્યાસ કરે છે.",
      role: "દાર્શનિક ભૂમિકા: વાણી, દૃષ્ટિ કે શ્રવણ જેવી ઇન્દ્રિયોની મર્યાદાઓને આત્માનું સ્વરૂપ માની લેવું.",
      accentVar: "var(--ring-2-stroke)",
      tintVar: "var(--ring-2-fill)",
      hint: "સૂક્ષ્મતમ આવરણ (અંતઃકરણધર્મો) જોવા માટે અંદરના વર્તુળ પર ક્લિક કરો"
    },
    {
      shortLabel: "૪. અંતઃકરણ",
      badge: "સ્તર ૪ • સૂક્ષ્મતમ માનસિક આવરણ",
      title: "અંતઃકરણધર્મો (મન-બુદ્ધિ-અહંકારનો આરોપ)",
      sanskrit: "“कामसङ्कल्पविचिकित्साध्यवसायादीन्... एवमहंप्रत्ययिनम् अशेषस्वप्रचारसाक्षिणि प्रत्यगात्मन्यध्यस्य”",
      exampleLabel: "શંકરાચાર્યનું પ્રત્યક્ષ ઉદાહરણ:",
      example: "કામ, સંકલ્પ, સંશય, નિશ્ચય અને અહંપ્રત્યય (‘હું’ એવી પ્રતીતિ) જેવા અંતઃકરણના ધર્મોનો સાક્ષી આત્મામાં — અને તેનાથી વિપરીત સાક્ષી આત્માનો અંતઃકરણમાં — આરોપ કરે છે.",
      role: "દાર્શનિક ભૂમિકા: અહીંથી જ આત્મામાં કર્તૃત્વ અને ભોક્તૃત્વનો અનાદિ, નૈસર્ગિક વ્યવહાર પ્રવર્તે છે.",
      accentVar: "var(--ring-3-stroke)",
      tintVar: "var(--ring-3-fill)",
      hint: "કેન્દ્રમાં રહેલા સર્વસાક્ષી પ્રત્યગાત્માને જોવા માટે વચ્ચેના વર્તુળ પર ક્લિક કરો"
    },
    {
      shortLabel: "૫. પ્રત્યગાત્મા",
      badge: "કેન્દ્ર • અધ્યાસનું અધિષ્ઠાન",
      title: "સર્વસાક્ષી પ્રત્યગાત્મા",
      sanskrit: "“अशेषस्वप्रचारसाक्षिणि प्रत्यगात्मनि... तं च प्रत्यगात्मानं सर्वसाक्षिणम्”",
      exampleLabel: "સ્વરૂપ વર્ણન:",
      example: "અશેષ સ્વપ્રચાર સાક્ષી • અસંગ, સ્વયંપ્રકાશ અને અવિકારી ચૈતન્ય — જે અંતઃકરણની સર્વ વૃત્તિઓનો સાક્ષીભૂત અંતરાત્મા છે.",
      role: "દાર્શનિક ભૂમિકા: વેદાંત-શાસ્ત્રનું પ્રયોજન આ અનર્થના હેતુભૂત અધ્યાસની નિવૃત્તિ કરી આત્મૈકત્વવિદ્યાની પ્રાપ્તિ કરાવવાનું છે.",
      accentVar: "var(--indigo)",
      tintVar: "var(--indigo-soft)",
      hint: "વિગત જોવા માટે કોઈ પણ બાહ્ય વર્તુળ (૧ થી ૪) પર ક્લિક કરો"
    }
  ];

  /* ---------------------------------------------------------
     4. DATA: KHYATIVADA SCHOOLS
     --------------------------------------------------------- */
  const khyatiData = [
    {
      key: "advaita",
      focal: true,
      badge: "શાંકર સિદ્ધાંત",
      school: "અદ્વૈત વેદાંત (શંકરાચાર્ય)",
      doctrine: "અનિર્વચનીયખ્યાતિવાદ",
      definition: "સ્મૃતિરૂપઃ પરત્ર પૂર્વદૃષ્ટાવભાસઃ",
      mechanism: "પૂર્વદૃષ્ટ વસ્તુનો અન્યત્ર મિથ્યા અવભાસ; અનિર્વચનીય (ન સત્, ન અસત્) પ્રતીતિ જે જ્ઞાન થતાં બાધિત થઈ જાય છે."
    },
    {
      key: "buddhist",
      focal: false,
      school: "બૌદ્ધ દર્શન (વિજ્ઞાનવાદ આદિ)",
      doctrine: "અન્યધર્માધ્યાસ / આત્મખ્યાતિ",
      definition: "એક વસ્તુમાં અન્યના ધર્મોનો આરોપ",
      mechanism: "અંતઃકરણના આંતરિક આકાર કે ધર્મોનો બાહ્ય પદાર્થ પર આરોપ થવાથી બાહ્ય વસ્તુનો આભાસ થાય છે."
    },
    {
      key: "mimamsa",
      focal: false,
      school: "પ્રભાકર મીમાંસા",
      doctrine: "અખ્યાતિવાદ",
      definition: "વિવેકાગ્રહજન્ય ભ્રમ",
      mechanism: "કોઈ સકારાત્મક મિથ્યાજ્ઞાન નથી, પરંતુ અધ્યસ્ત (સ્મૃત ચાંદી) અને અધિષ્ઠાન (પ્રત્યક્ષ છીપ) વચ્ચેના ભેદનું અગ્રહણ છે."
    },
    {
      key: "nyaya",
      focal: false,
      school: "ન્યાય દર્શન (નૈયાયિકો)",
      doctrine: "અન્યથાખ્યાતિવાદ",
      definition: "વિપરીતધર્મકલ્પના",
      mechanism: "અધિષ્ઠાનના સ્વરૂપથી વિપરીત ધર્મની સકારાત્મક કલ્પના (અન્યત્ર રહેલી ચાંદીનો છીપ સાથે તાદાત્મ્ય આરોપ), જે પ્રવૃત્તિ પ્રેરે છે."
    }
  ];

  /* ---------------------------------------------------------
     5. DATA: PHILOSOPHICAL DIALOGUES
     --------------------------------------------------------- */
  const dialoguesData = {
    bhamati: {
      title: "ભાષાકીય સૂક્ષ્મતા: ‘આ’ (ઇદમ્) ને બદલે ‘તું’ (યુષ્મદ્) નો પ્રયોગ કેમ?",
      html: `
        <p>શંકરાચાર્યે <em>અધ્યાસભાષ્ય</em> ની પ્રથમ પંક્તિમાં જ જડ વિષય માટે ‘આ’ (<em>ઇદમ્</em>) શબ્દ વાપરવાને બદલે <strong>‘તું’ (<em>યુષ્મદ્</em>)</strong> શબ્દ પ્રયોજ્યો છે.</p>
        <p>વાચસ્પતિ મિશ્રની <strong>ભામતી</strong> ટીકા અને જ્યોર્જ થિબોના વિવેચન અનુસાર, ભાષામાં પ્રથમ પુરુષ (‘હું’) અને તૃતીય પુરુષ (‘આ’ કે ‘તે’) નો સમાનાધિકરણ (એકરૂપ) પ્રયોગ શક્ય બને છે—જેમ કે “આ અમે બેઠા છીએ” (<em>ઇમે વયમ્ આસ્મહે</em>) અથવા “તે હું છું”.</p>
        <p>પરંતુ પ્રથમ પુરુષ (‘હું’ / <em>અસ્મદ્</em>) અને દ્વિતીય પુરુષ (‘તું’ / <em>યુષ્મદ્</em>) ક્યારેય એક જ અર્થમાં સંયોજાઈ શકતા નથી. ‘હું’ અને ‘તું’ વચ્ચેનો આ તીવ્ર વિરોધ ચેતન આત્મા અને જડ જગત્ વચ્ચેના <strong>અંધકાર અને પ્રકાશ સમાન અત્યંત વિરોધ</strong> ને સ્પષ્ટ કરે છે.</p>
      `
    },
    seed: {
      title: "ચક્રીય તર્ક (અન્યોન્યાશ્રય) નું સમાધાન: બીજ અને વૃક્ષનો ન્યાય",
      html: `
        <p><strong>શંકા:</strong> આત્મા પર અધ્યાસ થવા માટે આત્મા અહંપ્રત્યયનો વિષય બનવો જરૂરી છે, અને અહંપ્રત્યય પોતે પૂર્વના અધ્યાસનું પરિણામ છે—તો શું આ ચક્રીય તર્ક (<em>અન્યોન્યાશ્રય દોષ</em>) નથી?</p>
        <p><strong>સમાધાન:</strong> શાંકર અદ્વૈત પરંપરા આ શંકાનું સમાધાન <strong>બીજ અને વૃક્ષના ન્યાય</strong> (<em>બીજાંકુર ન્યાય</em>) થી કરે છે. જેમ બીજમાંથી વૃક્ષ અને વૃક્ષમાંથી બીજની પરંપરા અનાદિ છે, તેમ અધ્યાસની શૃંખલા પણ અનાદિ છે—વર્તમાન અધ્યાસ પૂર્વના અધ્યાસને લીધે શક્ય બને છે.</p>
        <p>વળી, અધ્યાસ માટે પૂર્વે જોયેલી વસ્તુનું જ્ઞાન પારમાર્થિક સત્ય હોવું જરૂરી નથી; સ્મૃતિ કે ભ્રાંત જ્ઞાન (સંસ્કાર) પણ અધ્યાસ માટે પૂરતું છે.</p>
      `
    },
    thorn: {
      title: "અવિદ્યાના ક્ષેત્રમાં રહીને અવિદ્યાની નિવૃત્તિ અને શાસ્ત્રની પ્રામાણિકતા",
      html: `
        <p>જો પ્રત્યક્ષાદિ સર્વ પ્રમાણો અને વેદાંતશાસ્ત્ર પોતે પણ <strong>અવિદ્યા (અધ્યાસ)</strong> ના ક્ષેત્રમાં જ કાર્યરત હોય, તો અવિદ્યાના ક્ષેત્રમાં રહીને પરમાર્થ સત્યનું જ્ઞાન (<em>વિદ્યા</em>) અને મોક્ષ કેવી રીતે સિદ્ધ થઈ શકે?</p>
        <div class="analogy-list">
          <div class="analogy-item">
            <strong>કાંટાથી કાંટો કાઢવાનું દૃષ્ટાંત (શ્રી રામકૃષ્ણ):</strong>
            <p style="margin-top:6px;">જેમ હાથમાં વાગેલા કાંટાને બીજા કાંટાની મદદથી બહાર કાઢીને પછી બંને કાંટા ફેંકી દેવામાં આવે છે, તેમ શાસ્ત્રજન્ય સાપેક્ષ જ્ઞાન અજ્ઞાનને દૂર કરીને અંતે પોતે પણ શમી જાય છે.</p>
          </div>
          <div class="analogy-item">
            <strong>અગ્નિ અને ઘાસનું દૃષ્ટાંત (ગુજરાતી વિશ્વકોશ):</strong>
            <p style="margin-top:6px;">જેમ અગ્નિ ઘાસને બાળીને અંતે પોતે પણ શાંત થઈ જાય છે, તેમ બ્રહ્મનું વૃત્તિરૂપ સમ્યગ્જ્ઞાન અજ્ઞાનનો નાશ કરીને પોતે નિવૃત્ત થઈ જાય છે—શેષ કેવળ મુક્તિ રહે છે.</p>
          </div>
        </div>
        <p><strong>શ્રુતિ અને પ્રત્યક્ષનો સમન્વય:</strong> શ્રુતિ ઇન્દ્રિય-પ્રત્યક્ષની <em>વ્યાવહારિક પ્રામાણિકતા</em> નો નિષેધ કરતી નથી; તે કેવળ તેની <em>પારમાર્થિક (અંતિમ) સત્યતા</em> નો નિષેધ કરે છે. જ્યાં સુધી આત્મસાક્ષાત્કાર ન થાય ત્યાં સુધી શાસ્ત્રીય વિધિ-નિષેધો સંપૂર્ણપણે પ્રમાણભૂત રહે છે (<em>ભગવદ્ગીતા ૧૬.૨૪</em>); પરંતુ બ્રહ્મજ્ઞાન ઉદિત થયા પછી આત્મજ્ઞાની માટે વેદોનું પ્રયોજન સર્વત્ર જળબંબાકાર થયા પછીના નાના જળાશય જેવું થઈ જાય છે (<em>ભગવદ્ગીતા ૨.૪૬</em>).</p>
      `
    },
    debate: {
      title: "દાર્શનિક સંવાદ: વિશિષ્ટાદ્વૈત (રામાનુજાચાર્ય) વિરુદ્ધ શાંકર અદ્વૈત",
      html: `
        <p>અદ્વૈત વેદાંતના અધ્યાસ અને અવિદ્યા સિદ્ધાંત સામે અનુગામી વેદાંત-સંપ્રદાયોમાં—ખાસ કરીને વિશિષ્ટાદ્વૈતના આચાર્ય શ્રી રામાનુજાચાર્ય દ્વારા—મહત્ત્વના આક્ષેપો ઉઠાવવામાં આવ્યા છે:</p>
        <div class="debate-grid">
          <div class="debate-box objection">
            <h4>વિશિષ્ટાદ્વૈતી આક્ષેપ (શ્રી રામાનુજાચાર્ય)</h4>
            <p>૧. <strong>અવિદ્યાનું સ્વરૂપ:</strong> અવિદ્યા કાં તો સત્ય (<em>સત્</em>) હોવી જોઈએ અથવા અસત્ય (<em>અસત્</em>). જો તે સત્ય હોય તો અદ્વૈત તૂટીને દ્વૈત બને, અને જો અસત્ય હોય તો આત્મવિરોધ કે અનવસ્થા દોષ આવે.</p>
            <p>૨. <strong>બંધનની વાસ્તવિકતા:</strong> બંધન વાસ્તવિક છે અને કોઈ પણ જ્ઞાન વાસ્તવિક વસ્તુને નષ્ટ કરી શકતું નથી; જ્ઞાન તો કેવળ સત્યનું પ્રકાશન કરે છે.</p>
          </div>
          <div class="debate-box response">
            <h4>શાંકર અદ્વૈતનું સમાધાન (વિવર્તવાદ)</h4>
            <p>૧. <strong>અનિર્વચનીયત્વ:</strong> અવિદ્યા કે જગત્ ન તો બ્રહ્મની જેમ ત્રિકાલાબાધિત સત્ય (<em>સત્</em>) છે, ન તો સર્વથા શૂન્ય (<em>અસત્</em>); તે જ્ઞાન થતાં બાધિત થઈ જતું સાપેક્ષ મિથ્યાત્વ ધરાવે છે, જેથી બ્રહ્મના અદ્વૈતને હાનિ થતી નથી.</p>
            <p>૨. <strong>વિવર્તવાદ:</strong> જગત્ બ્રહ્મનું વાસ્તવિક પરિણામ (<em>પરિણામવાદ</em>) નહીં, પરંતુ આભાસી <em>વિવર્ત</em> છે—જેમ દોરડાનું જ્ઞાન સર્પના ભ્રમને નિવૃત્ત કરે છે, તેમ બ્રહ્મજ્ઞાન બંધનરૂપ અધ્યાસની નિવૃત્તિ કરે છે.</p>
          </div>
        </div>
      `
    }
  };

  /* ---------------------------------------------------------
     6. DATA: INTERACTIVE QUIZ (6 Gujarati Questions)
     --------------------------------------------------------- */
  const quizData = [
    {
      question: "૧. અધ્યાસભાષ્યમાં શંકરાચાર્યે ‘વિષયી’ (આત્મા) અને ‘વિષય’ (અનાત્મા) ના વિરોધ માટે કયું ઉપમાન આપ્યું છે?",
      options: [
        "પાણી અને તરંગ જેવો વિરોધ",
        "અંધકાર અને પ્રકાશ જેવો વિરોધ",
        "માટી અને ઘડા જેવો વિરોધ",
        "અગ્નિ અને ધુમાડા જેવો વિરોધ"
      ],
      correct: 1,
      explanation: "શંકરાચાર્ય પ્રથમ પંક્તિમાં જ કહે છે: ‘તમઃપ્રકાશવદ્ વિરુદ્ધસ્વભાવયોઃ’ — વિષય અને વિષયી અંધકાર અને પ્રકાશની જેમ પરસ્પર અત્યંત વિરુદ્ધ સ્વભાવવાળા છે."
    },
    {
      question: "૨. શંકરાચાર્યે આપેલી અધ્યાસની મૂળ વ્યાખ્યા ‘સ્મૃતિરૂપઃ પરત્ર પૂર્વદૃષ્ટાવભાસઃ’ નો અર્થ શો થાય છે?",
      options: [
        "અજાણી વસ્તુનો નવો આવિષ્કાર",
        "પૂર્વે જોયેલી વસ્તુનો અન્ય સ્થાનમાં સ્મૃતિના રૂપમાં થતો અવભાસ",
        "ઇન્દ્રિયો દ્વારા થતું યથાર્થ પ્રત્યક્ષ જ્ઞાન",
        "કેવળ સ્વપ્નમાં થતો માનસિક અનુભવ"
      ],
      correct: 1,
      explanation: "અધ્યાસ એટલે પૂર્વે જોયેલી વસ્તુનો અન્ય સ્થાનમાં સ્મૃતિના રૂપમાં થતો મિથ્યા અવભાસ (જેમ કે છીપમાં ચાંદી ભાસવી)."
    },
    {
      question: "૩. ઇન્દ્રિય-પ્રત્યક્ષનો વિષય ન હોવા છતાં અધ્યાસ થઈ શકે છે—તે સિદ્ધ કરવા શંકરાચાર્યે કયું ઉદાહરણ આપ્યું છે?",
      options: [
        "અપ્રત્યક્ષ આકાશમાં લોકો દ્વારા ઘેરા વાદળી રંગનો આરોપ",
        "રણમાં દેખાતાં મૃગજળનો આરોપ",
        "દર્પણમાં દેખાતા પ્રતિબિંબનો આરોપ",
        "સમુદ્રમાં ઊઠતાં મોજાંનો આરોપ"
      ],
      correct: 0,
      explanation: "અવિવેકી લોકો ઇન્દ્રિય-પ્રત્યક્ષ ન હોવા છતાં આકાશમાં ઘેરા વાદળી રંગ કે મલિનતાનો અધ્યાસ કરે છે; તેમ પ્રત્યગાત્મામાં પણ અનાત્માનો અધ્યાસ સંભવિત છે."
    },
    {
      question: "૪. ‘હું સ્થૂળ છું, હું ચાલું છું’ — આ અધ્યાસના કયા સ્તરનું ઉદાહરણ છે?",
      options: [
        "બાહ્ય ધર્મોનો અધ્યાસ",
        "ઇન્દ્રિયધર્મોનો અધ્યાસ",
        "દેહધર્મોનો અધ્યાસ",
        "અંતઃકરણધર્મોનો અધ્યાસ"
      ],
      correct: 2,
      explanation: "ખંડ ૧૮ અનુસાર સ્થૂળતા, કૃશતા, ગૌરવર્ણ, ઊભા રહેવું, ચાલવું અને ઓળંગવું — આ સર્વ ‘દેહધર્મો’ છે જેનો મનુષ્ય આત્મામાં અધ્યાસ કરે છે."
    },
    {
      question: "૫. લાલ ફૂલની નજીક રહેલો સ્ફટિક લાલ દેખાય છે — આ કયા પ્રકારના અધ્યાસનું દૃષ્ટાંત છે?",
      options: [
        "સ્વરૂપ-અધ્યાસ (નિરુપાધિક)",
        "સંસર્ગ-અધ્યાસ (સોપાધિક)",
        "અખ્યાતિવાદ",
        "પરિણામવાદ"
      ],
      correct: 1,
      explanation: "જ્યારે ઉપાધિ (લાલ ફૂલ) અને અધિષ્ઠાન (સ્ફટિક) બંને દેખાતાં હોય અને એકનો ગુણ બીજામાં ભાસે, ત્યારે તેને ‘સંસર્ગ-અધ્યાસ’ (સોપાધિક) કહેવાય છે."
    },
    {
      question: "૬. અધ્યાસભાષ્યના અંતિમ ખંડ (ખંડ ૧૯) અનુસાર સર્વ વેદાંતો (ઉપનિષદો) નો આરંભ શેના માટે થાય છે?",
      options: [
        "વૈદિક કર્મકાંડ દ્વારા સ્વર્ગની પ્રાપ્તિ માટે",
        "અનર્થહેતુ અધ્યાસની નિવૃત્તિ અને આત્મૈકત્વવિદ્યાની પ્રાપ્તિ માટે",
        "તર્કશાસ્ત્રના નિયમો સ્થાપિત કરવા માટે",
        "પુનર્જન્મની પ્રક્રિયાનું વર્ણન કરવા માટે"
      ],
      correct: 1,
      explanation: "‘અસ્યાનર્થહેતોઃ પ્રહાણાય આત્મૈકત્વવિદ્યાપ્રતિપત્તયે સર્વે વેદાન્તા આરભ્યન્તે’ — અધ્યાસની સમૂળ નિવૃત્તિ અને બ્રહ્મ-આત્મ એકત્વના જ્ઞાન માટે વેદાંતોનો આરંભ થાય છે."
    }
  ];

  /* ---------------------------------------------------------
     7. THEME, FONT SIZE, PROGRESS BAR & MOBILE NAV
     --------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    localStorage.setItem("adhyasa_theme", theme);
  }

  const savedTheme = localStorage.getItem("adhyasa_theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme);

  themeBtn.addEventListener("click", () => {
    const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  // Font Scaling
  let fontScale = parseFloat(localStorage.getItem("adhyasa_font_scale") || "1");
  function updateFontScale(val) {
    fontScale = Math.min(1.28, Math.max(0.86, val));
    htmlEl.style.setProperty("--gu-scale", fontScale.toFixed(2));
    localStorage.setItem("adhyasa_font_scale", fontScale.toFixed(2));
  }
  updateFontScale(fontScale);

  document.getElementById("font-inc").addEventListener("click", () => updateFontScale(fontScale + 0.08));
  document.getElementById("font-dec").addEventListener("click", () => updateFontScale(fontScale - 0.08));
  document.getElementById("font-reset").addEventListener("click", () => updateFontScale(1));

  // Reading Progress Bar
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    progressBar.style.width = pct + "%";
  }, { passive: true });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  mobileMenuBtn.addEventListener("click", () => {
    const isHidden = mobileNav.hasAttribute("hidden");
    if (isHidden) {
      mobileNav.removeAttribute("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileNav.setAttribute("hidden", "");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.setAttribute("hidden", "");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------------------------
     8. RENDER 7-SECTION BHASHYA EXPLORER
     --------------------------------------------------------- */
  const bhashyaContainer = document.getElementById("bhashya-container");
  const jumpPillsContainer = document.getElementById("section-jump-pills");
  const studyProgressText = document.getElementById("study-progress-text");

  let readSections = JSON.parse(localStorage.getItem("adhyasa_read_sections") || "[]");

  function updateReadProgress() {
    studyProgressText.textContent = `Read: ${readSections.length} / ${bhashyaSections.length} sections`;
    document.querySelectorAll(".jump-pill").forEach((pill) => {
      const n = Number(pill.dataset.num);
      pill.classList.toggle("read", readSections.includes(n));
    });
  }

  bhashyaSections.forEach((sec, idx) => {
    // Jump Pill
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "jump-pill";
    pill.dataset.num = sec.num;
    pill.textContent = `Section ${sec.num}`;
    pill.addEventListener("click", () => {
      const card = document.getElementById(`sec-card-${sec.num}`);
      card.classList.add("open");
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    jumpPillsContainer.appendChild(pill);

    // Accordion Card
    const card = document.createElement("article");
    const isRead = readSections.includes(sec.num);
    card.className = `bhashya-card ${idx < 2 ? "open" : ""} ${isRead ? "is-read" : ""}`;
    card.id = `sec-card-${sec.num}`;

    card.innerHTML = `
      <button type="button" class="bhashya-head" aria-expanded="${idx < 2 ? "true" : "false"}">
        <div class="bhashya-head-left">
          <span class="sec-num">${sec.num}</span>
          <div>
            <div class="bhashya-title-gu gu-text">${sec.guTitle}</div>
            <div class="bhashya-title-en">${sec.enTitle}</div>
          </div>
        </div>
        <span class="chevron" aria-hidden="true">▾</span>
      </button>
      <div class="bhashya-body">
        <div class="sanskrit-block">
          <span class="block-label">Original Sanskrit (मूल संस्कृत)</span>
          <div class="sanskrit-text scalable-sa">${sec.sanskrit}</div>
        </div>
        <div class="gujarati-block gu-text scalable-gu">
          <span class="block-label">Gujarati Translation (ગુજરાતી અનુવાદ)</span>
          ${sec.gujaratiHtml}
        </div>
        <div class="key-takeaway gu-text">
          <strong>${sec.takeaway}</strong>
        </div>
        <div class="card-footer">
          <button type="button" class="mark-read-btn ${isRead ? "read" : ""}" data-num="${sec.num}">
            ${isRead ? "✓ Completed" : "Mark Section as Read"}
          </button>
        </div>
      </div>
    `;

    const headBtn = card.querySelector(".bhashya-head");
    headBtn.addEventListener("click", () => {
      const isOpen = card.classList.toggle("open");
      headBtn.setAttribute("aria-expanded", String(isOpen));
    });

    const markBtn = card.querySelector(".mark-read-btn");
    markBtn.addEventListener("click", () => {
      const n = sec.num;
      if (readSections.includes(n)) {
        readSections = readSections.filter((x) => x !== n);
        markBtn.classList.remove("read");
        markBtn.textContent = "Mark Section as Read";
        card.classList.remove("is-read");
      } else {
        readSections.push(n);
        markBtn.classList.add("read");
        markBtn.textContent = "✓ Completed";
        card.classList.add("is-read");
      }
      localStorage.setItem("adhyasa_read_sections", JSON.stringify(readSections));
      updateReadProgress();
    });

    bhashyaContainer.appendChild(card);
  });

  updateReadProgress();

  // Sanskrit Global Toggle & Expand/Collapse All
  const sanskritToggle = document.getElementById("sanskrit-toggle");
  sanskritToggle.addEventListener("click", () => {
    const isHidden = document.body.classList.toggle("hide-sanskrit");
    sanskritToggle.classList.toggle("active", !isHidden);
    sanskritToggle.setAttribute("aria-pressed", String(!isHidden));
    sanskritToggle.innerHTML = `Sanskrit Verses: <strong>${isHidden ? "OFF" : "ON"}</strong>`;
  });

  document.getElementById("expand-all-btn").addEventListener("click", () => {
    document.querySelectorAll(".bhashya-card").forEach((c) => {
      c.classList.add("open");
      c.querySelector(".bhashya-head").setAttribute("aria-expanded", "true");
    });
  });

  document.getElementById("collapse-all-btn").addEventListener("click", () => {
    document.querySelectorAll(".bhashya-card").forEach((c) => {
      c.classList.remove("open");
      c.querySelector(".bhashya-head").setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------------------------
     9. INTERACTIVE CONCENTRIC LAYERS DIAGRAM
     --------------------------------------------------------- */
  const ringGroups = Array.from(document.querySelectorAll(".ring-group"));
  const layerTabsEl = document.getElementById("layer-tabs");
  const detailCard = document.getElementById("detail-card");
  const detailBadge = document.getElementById("detail-badge");
  const detailTitle = document.getElementById("detail-title");
  const detailSanskrit = document.getElementById("detail-sanskrit");
  const detailExampleLabel = document.getElementById("detail-example-label");
  const detailExample = document.getElementById("detail-example");
  const detailRole = document.getElementById("detail-role");
  const detailHintText = document.getElementById("detail-hint-text");

  adhyasaLayers.forEach((layer, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "layer-tab";
    btn.setAttribute("role", "tab");
    btn.dataset.index = idx;
    btn.style.setProperty("--active-accent", layer.accentVar);
    btn.innerHTML = `<span class="layer-tab-dot" style="background:${layer.accentVar}"></span><span>${layer.shortLabel}</span>`;
    btn.addEventListener("click", () => selectLayer(idx));
    btn.addEventListener("mouseenter", () => selectLayer(idx));
    layerTabsEl.appendChild(btn);
  });

  const layerTabButtons = Array.from(layerTabsEl.querySelectorAll(".layer-tab"));

  function selectLayer(index) {
    const layer = adhyasaLayers[index];

    ringGroups.forEach((g) => {
      const active = Number(g.dataset.index) === index;
      g.classList.toggle("active", active);
      g.setAttribute("aria-pressed", String(active));
    });

    layerTabButtons.forEach((btn) => {
      const active = Number(btn.dataset.index) === index;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    detailCard.style.borderLeftColor = layer.accentVar;
    detailBadge.textContent = layer.badge;
    detailBadge.style.backgroundColor = layer.tintVar;
    detailBadge.style.color = index === 4 ? "var(--indigo)" : "var(--text)";
    detailTitle.textContent = layer.title;
    detailSanskrit.textContent = layer.sanskrit;
    detailExampleLabel.textContent = layer.exampleLabel;
    detailExample.textContent = layer.example;
    detailRole.textContent = layer.role;
    detailHintText.textContent = layer.hint;
  }

  ringGroups.forEach((group) => {
    const idx = Number(group.dataset.index);
    group.addEventListener("click", () => selectLayer(idx));
    group.addEventListener("mouseenter", () => selectLayer(idx));
    group.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectLayer(idx);
      }
    });
  });

  selectLayer(4); // Start at Center Core (સર્વસાક્ષી પ્રત્યગાત્મા)

  /* ---------------------------------------------------------
     10. KHYATIVADA GRID & ADHYASA TYPES SWITCH
     --------------------------------------------------------- */
  const khyatiGrid = document.getElementById("khyati-grid");
  khyatiData.forEach((item) => {
    const card = document.createElement("article");
    card.className = `khyati-card gu-text ${item.focal ? "is-focal" : ""}`;
    card.dataset.school = item.key;
    card.innerHTML = `
      <div>
        ${item.badge ? `<span class="focal-badge">${item.badge}</span>` : ""}
        <h3 class="khyati-school">${item.school}</h3>
        <div class="khyati-doctrine">${item.doctrine}</div>
      </div>
      <div class="khyati-divider"></div>
      <div>
        <span class="field-label">વ્યાખ્યા</span>
        <p class="field-def">${item.definition}</p>
      </div>
      <div>
        <span class="field-label">મૂળ પ્રક્રિયા</span>
        <p class="field-text">${item.mechanism}</p>
      </div>
    `;
    khyatiGrid.appendChild(card);
  });

  document.querySelectorAll("#khyati-filter-bar .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#khyati-filter-bar .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      khyatiGrid.querySelectorAll(".khyati-card").forEach((card) => {
        card.classList.toggle("dimmed", filter !== "all" && card.dataset.school !== filter);
      });
    });
  });

  const typesGrid = document.getElementById("types-grid");
  document.querySelectorAll(".switch-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".switch-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.typeView;
      typesGrid.classList.toggle("single-focus", view !== "both");
      typesGrid.querySelectorAll(".type-card").forEach((card) => {
        card.classList.toggle("hidden-card", view !== "both" && card.dataset.type !== view);
      });
    });
  });

  /* ---------------------------------------------------------
     11. PHILOSOPHICAL DIALOGUES TABS
     --------------------------------------------------------- */
  const dialogueContent = document.getElementById("dialogue-content");
  const dialogueTabs = document.querySelectorAll(".dialogue-tab");

  function renderDialogue(key) {
    const d = dialoguesData[key];
    dialogueContent.innerHTML = `<h3>${d.title}</h3>${d.html}`;
  }

  dialogueTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      dialogueTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderDialogue(tab.dataset.dialogue);
    });
  });

  renderDialogue("bhamati");

  /* ---------------------------------------------------------
     12. SEARCHABLE GLOSSARY & INLINE TERM POPOVER MODAL
     --------------------------------------------------------- */
  const glossaryGrid = document.getElementById("glossary-grid");
  const glossarySearch = document.getElementById("glossary-search");
  const glossaryCount = document.getElementById("glossary-count");

  function renderGlossary(query = "") {
    const q = query.trim().toLowerCase();
    const filtered = glossaryData.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.en.toLowerCase().includes(q) ||
        g.synonym.toLowerCase().includes(q) ||
        g.meaning.toLowerCase().includes(q)
    );

    glossaryCount.textContent = `${filtered.length}${filtered.length === 1 ? "term" : "terms"}`;

    if (filtered.length === 0) {
      glossaryGrid.innerHTML = `<p class="gu-text" style="color:var(--text-muted)">કોઈ મેળ ખાતો શબ્દ મળ્યો નથી. અન્ય શબ્દ શોધી જુઓ.</p>`;
      return;
    }

    glossaryGrid.innerHTML = filtered
      .map(
        (g) => `
      <article class="glossary-card gu-text">
        <div class="glossary-top">
          <h3 class="glossary-term">${g.term}</h3>
          <span class="glossary-en">${g.en}</span>
        </div>
        <span class="glossary-syn">${g.synonym}</span>
        <p class="glossary-meaning">${g.meaning}</p>
      </article>
    `
      )
      .join("");
  }

  glossarySearch.addEventListener("input", (e) => renderGlossary(e.target.value));
  renderGlossary();

  // Inline Term Modal
  const termModal = document.getElementById("term-modal");
  const modalEn = document.getElementById("modal-term-en");
  const modalTitle = document.getElementById("modal-term-title");
  const modalSyn = document.getElementById("modal-term-synonym");
  const modalMeaning = document.getElementById("modal-term-meaning");
  const modalClose = document.getElementById("modal-close");

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".term-link");
    if (!trigger) return;
    const data = glossaryMap[trigger.dataset.term];
    if (!data) return;
    modalEn.textContent = data.en;
    modalTitle.textContent = data.term;
    modalSyn.textContent = data.synonym;
    modalMeaning.textContent = data.meaning;
    termModal.removeAttribute("hidden");
    modalClose.focus();
  });

  function closeModal() {
    termModal.setAttribute("hidden", "");
  }

  modalClose.addEventListener("click", closeModal);
  termModal.addEventListener("click", (e) => {
    if (e.target === termModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !termModal.hasAttribute("hidden")) closeModal();
  });

  /* ---------------------------------------------------------
     13. INTERACTIVE GUJARATI CONCEPT QUIZ
     --------------------------------------------------------- */
  const quizStepEl = document.getElementById("quiz-step");
  const quizScoreEl = document.getElementById("quiz-score");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizOptionsEl = document.getElementById("quiz-options");
  const quizFeedbackEl = document.getElementById("quiz-feedback");
  const quizNextBtn = document.getElementById("quiz-next");
  const quizRestartBtn = document.getElementById("quiz-restart");

  let qIndex = 0;
  let score = 0;

  function loadQuestion() {
    const q = quizData[qIndex];
    quizStepEl.textContent = `Question ${qIndex + 1} of${quizData.length}`;
    quizScoreEl.textContent = `Score: ${score}`;
    quizQuestionEl.textContent = q.question;
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.setAttribute("hidden", "");
    quizNextBtn.setAttribute("hidden", "");
    quizRestartBtn.setAttribute("hidden", "");

    q.options.forEach((optText, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt";
      btn.textContent = optText;
      btn.addEventListener("click", () => handleAnswer(i, btn));
      quizOptionsEl.appendChild(btn);
    });
  }

  function handleAnswer(selectedIdx, btnEl) {
    const q = quizData[qIndex];
    const allBtns = quizOptionsEl.querySelectorAll(".quiz-opt");
    allBtns.forEach((b) => (b.disabled = true));

    if (selectedIdx === q.correct) {
      score++;
      btnEl.classList.add("correct");
      quizFeedbackEl.innerHTML = `<strong>સાચો ઉત્તર!</strong> ${q.explanation}`;
    } else {
      btnEl.classList.add("wrong");
      allBtns[q.correct].classList.add("correct");
      quizFeedbackEl.innerHTML = `<strong>ખોટો ઉત્તર.</strong> ${q.explanation}`;
    }

    quizScoreEl.textContent = `Score: ${score}`;
    quizFeedbackEl.removeAttribute("hidden");

    if (qIndex < quizData.length - 1) {
      quizNextBtn.removeAttribute("hidden");
    } else {
      quizFeedbackEl.innerHTML += `<p style="margin-top:10px;"><strong>પ્રશ્નોત્તરી પૂર્ણ!</strong> તમારો અંતિમ સ્કોર: ${score} /${quizData.length}</p>`;
      quizRestartBtn.removeAttribute("hidden");
    }
  }

  quizNextBtn.addEventListener("click", () => {
    qIndex++;
    loadQuestion();
  });

  quizRestartBtn.addEventListener("click", () => {
    qIndex = 0;
    score = 0;
    loadQuestion();
  });

  loadQuestion();
})();
