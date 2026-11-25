document.addEventListener('DOMContentLoaded',()=>{
  const root=document.documentElement;
  const translations={
"Let’s build":"خلّينا نبني","Let’s build something":"خلّينا نبني حاجة","remarkable.":"مميزة.","A collection of":"مجموعة من","digital explorations.":"المشاريع الرقمية.",
"Education platform":"منصة تعليمية","Device assembly & traceability":"تجميع الأجهزة وتتبعها","Restaurant ordering system":"نظام طلبات مطعم","Education · Productivity":"تعليم وإنتاجية","AI research workspace":"مساحة بحث بالذكاء الاصطناعي","Music · Social app":"موسيقى وتواصل اجتماعي","Education · Study planner":"تعليم وتخطيط للمذاكرة","Laboratory management":"إدارة المعامل",
"A full education platform for IGCSE and American Diploma programs, with courses, faculty profiles, testimonials, media gallery and trial lesson booking.":"منصة تعليمية متكاملة لبرامج IGCSE والدبلومة الأمريكية، تشمل الكورسات والمدرسين والتقييمات ومعرض الصور وحجز الحصص التجريبية.",
"A device assembly and traceability system for managing supplier parts, serial numbers and automated QR-code generation.":"نظام لتجميع الأجهزة وتتبعها وإدارة قطع الموردين والأرقام التسلسلية وإنشاء رموز QR تلقائيًا.",
"A restaurant ordering experience with a menu, food categories, cart, checkout and order tracking.":"تجربة طلبات مطعم تشمل قائمة الطعام والتصنيفات وسلة المشتريات وإتمام الطلب وتتبع حالته.",
"A workbook-powered study planner with daily schedules, subject tracking, backlog management and progress dashboards.":"مخطط مذاكرة يعتمد على جداول منظمة، لمتابعة المواد والمهام المتراكمة ولوحات التقدم.",
"An AI-powered research workspace for organizing documents and asking questions grounded in uploaded sources, with cited answers.":"مساحة بحث بالذكاء الاصطناعي لتنظيم المستندات وطرح أسئلة والإجابة بالاعتماد على المصادر المرفوعة مع توثيقها.",
"A mobile-focused red-and-black music and social experience with Home, Store, Songs, Challenges and Profile areas.":"تجربة موسيقية واجتماعية باللونين الأحمر والأسود، تضم الرئيسية والمتجر والأغاني والتحديات والملف الشخصي.",
"A focused daily and weekly planner for subjects, saved progress, backlog and daily review.":"مخطط يومي وأسبوعي للمواد والتقدم المحفوظ والمهام المتراكمة والمراجعة اليومية.",
"A role-based laboratory management system with staff workflows, database-backed records and a frosted-glass interface.":"نظام لإدارة المعامل بصلاحيات مختلفة وسير عمل للموظفين وسجلات مرتبطة بقاعدة بيانات وواجهة زجاجية.",
"About Project":"عن المشروع","View screenshots":"عرض لقطات الشاشة","Screenshot gallery":"معرض لقطات الشاشة","Project profile":"بطاقة تعريف المشروع","Screenshot 1 of 1 · Latest capture currently available":"لقطة الشاشة المتاحة حاليًا","Explore all projects and screenshots ↗":"استكشف كل المشاريع ولقطات الشاشة ↗","Home":"الرئيسية","About":"من نحن","Services":"خدماتنا","Portfolio":"أعمالنا","Contact":"تواصل معنا","Start a project ↗":"ابدأ مشروعك ↗","Digital experiences":"تجارب رقمية",
"Dream · Design · Develop":"احلم · صمّم · طوّر","We engineer":"نصمّم ونطوّر","experiences.":"تجارب.","Ideas deserve more than just a place online. They deserve a digital experience that makes an impact. We build thoughtful, modern websites that help businesses move forward.":"الأفكار تستحق أكثر من مجرد مكان على الإنترنت. تستحق تجربة رقمية تترك أثرًا. نصمّم مواقع عصرية ومدروسة تساعد أعمالك على التقدّم.",
"Let’s build together":"خلّينا نبني حاجة سوا","Let’s build":"خلّينا نبني","Explore our work":"استكشف أعمالنا","Independent web development studio · Based in Egypt · Working worldwide":"استوديو مستقل لتطوير الويب · من مصر إلى العالم",
"CODEXIRA / DIGITAL STUDIO":"كودكسيرا / استوديو رقمي","Your next idea,":"فكرتك القادمة،","beautifully built.":"ننّفذها بإبداع.","digital":"رقمية","Light":"فاتح","Dark":"داكن","Digital experiences designed to make your business clearer, stronger and easier to discover.":"تجارب رقمية تجعل نشاطك أوضح وأقوى وأسهل في الوصول إليه.",
"✦ Design that feels considered":"✦ تصميم بكل عناية","⌘ Built for every screen":"⌘ مناسب لكل الشاشات",
"Selected projects":"مشاريع مختارة","A closer look at":"نظرة أقرب على","what we create.":"ما نصنعه.","Explore selected projects and interface previews. Each one shows a different way thoughtful design can solve a real-world problem.":"استكشف مجموعة من المشاريع ومعاينات الواجهات. كل مشروع يوضح كيف يمكن للتصميم المدروس حل مشكلة حقيقية.",
"View preview ↗":"شاهد المعاينة ↗","Explore the portfolio ↗":"استكشف كل الأعمال ↗","Education platform":"منصة تعليمية","Education":"تعليم","AI research workspace":"مساحة بحث بالذكاء الاصطناعي","AI workspace":"مساحة ذكاء اصطناعي","Ordering system":"نظام طلبات","Hospitality":"مطاعم وضيافة",
"An education experience designed to make courses, programs and learning paths easier to explore.":"تجربة تعليمية تسهّل استكشاف الكورسات والبرامج والمسارات التعليمية.","A focused research workspace concept for organizing material and exploring information.":"تصوّر لمساحة بحث تساعد على تنظيم المصادر واستكشاف المعلومات.","A restaurant experience concept with a clear menu, food categories and a simple browsing journey.":"تصوّر لموقع مطعم بقائمة واضحة وتصنيفات طعام وتجربة تصفح سهلة.",
"What we do":"ماذا نقدم","Digital solutions,":"حلول رقمية،","built with purpose.":"مصممة لهدف.","From a first online presence to a focused campaign page, we shape websites around what your business needs to achieve.":"من أول حضور رقمي إلى صفحة حملة تسويقية، نصمّم موقعك وفق أهداف نشاطك.",
"Business websites":"مواقع الشركات","Professional websites that explain what you do and build confidence with potential customers.":"مواقع احترافية تشرح خدماتك وتبني الثقة مع عملائك المحتملين.",
"Landing pages":"صفحات هبوط","Focused pages that communicate one clear offer and guide visitors toward action.":"صفحات مركّزة تعرض عرضك بوضوح وتوجّه الزائر للخطوة التالية.",
"E-commerce":"متاجر إلكترونية","Product-led online storefront experiences designed to make browsing and buying easier.":"متاجر إلكترونية تعرض منتجاتك وتجعل التصفح والشراء أسهل.",
"Portfolio websites":"مواقع معرض الأعمال","Distinctive spaces for professionals and creators to present their work with confidence.":"مساحات مميزة لعرض أعمال المحترفين والمبدعين بثقة.",
"Website redesign":"إعادة تصميم المواقع","A clearer structure, refreshed visual language and a more useful experience for your visitors.":"هيكل أوضح وهوية بصرية متجددة وتجربة أفضل لزوار موقعك.",
"Responsive design":"تصميم متجاوب","Layouts that adapt smoothly across phones, tablets, laptops and desktop screens.":"تصميم يتكيّف بسلاسة مع الهاتف والتابلت والكمبيوتر.",
"Our approach":"منهجيتنا","From first thought":"من أول فكرة","to":"إلى","finished product.":"منتج جاهز.","A straightforward process keeps the work collaborative, focused and transparent.":"خطوات واضحة تجعل العمل تعاونيًا ومنظمًا وشفافًا.",
"01 / DISCOVER":"01 / اكتشاف","Understand":"نفهم","We learn about your business, audience, goals and what success should look like.":"نتعرّف على نشاطك وجمهورك وأهدافك ومعنى النجاح بالنسبة لك.",
"02 / SHAPE":"02 / تخطيط","Plan & design":"نخطط ونصمّم","We organize the content and shape a visual direction that fits your brand.":"ننظم المحتوى ونحدد اتجاهًا بصريًا يناسب علامتك.",
"03 / BUILD":"03 / تنفيذ","Develop":"نطوّر","We turn the approved direction into a responsive, working website.":"نحوّل التصميم المتفق عليه إلى موقع متجاوب وجاهز للعمل.",
"04 / REFINE":"04 / مراجعة","Launch ready":"جاهز للإطلاق","We review the details, test the experience and prepare the site for launch.":"نراجع التفاصيل ونختبر التجربة ونجهّز الموقع للإطلاق.",
"The next chapter starts here":"الفصل الجديد يبدأ هنا","together.":"معًا.","Your next big idea deserves a bold digital home. Let’s turn it into something people remember.":"فكرتك الكبيرة تستحق حضورًا رقميًا مميزًا. دعنا نحوّلها إلى تجربة لا تُنسى.",
"Start your project ↗":"ابدأ مشروعك ↗","See what we create ↗":"شاهد أعمالنا ↗","✦ Thoughtful design":"✦ تصميم مدروس","⌘ Built around your goals":"⌘ مبني على أهدافك","↗ Ready for every screen":"↗ جاهز لكل الشاشات",
"About Codexira Studio":"عن كودكسيرا ستوديو","An independent digital studio building clear, modern web experiences for businesses, creators and ideas worth bringing online.":"استوديو رقمي مستقل يصمّم تجارب ويب عصرية وواضحة للشركات والمبدعين والأفكار التي تستحق الظهور.",
"Who we are":"من نحن","Thoughtful websites.":"مواقع مدروسة.","Real-world purpose.":"لها هدف حقيقي.","Codexira Studio is an independent web development studio based in Egypt, working with clients and ideas beyond borders. We design and build modern websites, landing pages, portfolios and focused digital products that help people present their work and businesses with confidence.":"كودكسيرا ستوديو هو استوديو مستقل لتطوير الويب في مصر، يعمل مع عملاء وأفكار تتجاوز الحدود. نصمّم ونطوّر مواقع عصرية وصفحات هبوط ومعارض أعمال ومنتجات رقمية تساعد الأفراد والشركات على تقديم أعمالهم بثقة.",
"Every project starts with its purpose: who it needs to reach, what visitors should understand, and what action should feel natural. The design and technology follow those answers — not the other way around.":"كل مشروع يبدأ بتحديد هدفه: من نريد الوصول إليه؟ ماذا يجب أن يفهم الزائر؟ وما الخطوة الطبيعية التالية؟ بعدها نختار التصميم والتقنية المناسبين.",
"Our principles":"مبادئنا","Clarity before complexity":"الوضوح قبل التعقيد","Design that serves the user":"تصميم يخدم المستخدم","Responsive from the first screen":"تجاوب من أول شاشة","Honest communication and expectations":"تواصل وتوقعات واضحة","Careful details, accessible experiences":"تفاصيل دقيقة وتجارب سهلة الاستخدام",
"Our promise":"وعدنا","Good work starts":"العمل الجيد يبدأ","good understanding.":"بفهم جيد.","We take time to understand the problem before choosing the solution. We keep the process collaborative and expectations clear: understand the brief, agree on a direction, build carefully, then review the details before launch.":"نأخذ وقتنا لفهم المشكلة قبل اختيار الحل. نعمل معك بخطوات واضحة: نفهم المطلوب، نتفق على الاتجاه، ننفّذ بعناية، ثم نراجع التفاصيل قبل الإطلاق.",
"Web design & development services":"خدمات تصميم وتطوير المواقع","From a focused landing page to a complete business website, choose the right starting point for your next digital step.":"من صفحة هبوط مركّزة إلى موقع شركة متكامل، نساعدك تختار البداية المناسبة لخطوتك الرقمية القادمة.",
"Business Website Development":"تطوير مواقع الشركات","A professional multi-page website that introduces your business, services and values.":"موقع احترافي متعدد الصفحات يعرّف بنشاطك وخدماتك وقيمك.",
"Landing Page Development":"تطوير صفحات الهبوط","A focused page for a product, service, campaign or specific business goal.":"صفحة مركزة لمنتج أو خدمة أو حملة أو هدف تجاري محدد.",
"E-commerce Website Development":"تطوير المتاجر الإلكترونية","An organized storefront experience for presenting products and helping customers shop.":"متجر منظم لعرض المنتجات ومساعدة العملاء على التسوق.",
"Portfolio Website Development":"تطوير مواقع معرض الأعمال","A distinctive showcase for your work, skills, projects and professional story.":"واجهة مميزة لعرض أعمالك ومهاراتك ومشاريعك ومسيرتك المهنية.",
"Website Redesign":"إعادة تصميم المواقع","Improve the look, structure, usability and responsive behavior of an existing website.":"تحسين مظهر الموقع الحالي وهيكله وسهولة استخدامه واستجابته.",
"Responsive Web Design":"تصميم ويب متجاوب","Carefully adapted layouts that work across mobile, tablet and desktop screens.":"تصميمات مدروسة تعمل على الهاتف والتابلت والكمبيوتر.",
"Not sure what you need?":"مش متأكد محتاج إيه؟","Let’s find the right":"دعنا نحدد","starting point.":"نقطة البداية المناسبة.","Share your idea, your audience and what you want your website to achieve. We’ll help you define a sensible scope.":"شاركنا فكرتك وجمهورك والهدف من موقعك، وسنساعدك في تحديد نطاق مناسب للمشروع.",
"Discuss your project ↗":"ناقش مشروعك ↗","A collection of":"مجموعة من","digital explorations.":"المشاريع الرقمية.","Explore a selection of interfaces and digital product experiences. Project links open previews; they are not presented as live client services.":"استكشف مجموعة من الواجهات والتجارب الرقمية. الروابط تفتح معاينات للمشاريع وليست خدمات تشغيلية مباشرة.",
"Selected work · Built projects":"أعمال مختارة · مشاريع منفذة","Gendouzi Study Compass":"مخطط جندوزي الدراسي","A workbook-powered study planner with daily schedules, subject tracking, backlog management and progress dashboards.":"مخطط مذاكرة لتنظيم اليوم والمواد والتراكمات ومتابعة التقدم.",
"Learnweave":"Learnweave","An education platform preview for exploring programs, faculty profiles and learning options.":"معاينة لمنصة تعليمية لاستكشاف البرامج وأعضاء هيئة التدريس وخيارات التعلم.",
"Sahlala Restaurant":"Sahlala Restaurant","A restaurant experience concept with a clear menu, food categories and a simple browsing journey.":"تصوّر لتجربة مطعم بقائمة واضحة وتصنيفات طعام وتصفح بسيط.",
"Notebook LM":"Notebook LM","An AI research workspace where users organize documents and ask questions grounded in their own sources, with cited answers.":"مساحة بحث بالذكاء الاصطناعي لتنظيم المستندات وطرح أسئلة بإجابات مرتبطة بالمصادر.",
"Your Web Creator":"Your Web Creator","A device assembly and traceability tool for supplier parts, serial numbers and automated QR-code generation.":"أداة لتجميع الأجهزة وتتبع المكونات وأرقامها التسلسلية وإنشاء QR تلقائيًا.",
"Taleta Shemal":"تالتة شمال","A red-and-black music and social experience with music discovery, store, challenges and profile areas.":"تجربة موسيقية واجتماعية بالأحمر والأسود تضم اكتشاف الأغاني ومتجرًا وتحديات وملفات شخصية.",
"Gendouzi Study Planner":"مخطط جندوزي للمذاكرة","A focused daily and weekly planner for Arabic, English, History and Programming, with saved progress and daily review.":"مخطط يومي وأسبوعي للعربي والإنجليزي والتاريخ والبرمجة مع حفظ التقدم والمراجعة.",
"Pixel Perfect Clone":"Pixel Perfect Clone","A role-based laboratory management system with staff workflows, database-backed records and a frosted-glass interface.":"نظام لإدارة معمل وصلاحيات الموظفين وسجلات قاعدة البيانات بواجهة زجاجية.",
"Preview":"معاينة","Built with Lovable":"مبني باستخدام Lovable","These links open project previews, not production services. Interactive features may be limited. Our Web Realm is intentionally excluded from this portfolio.":"هذه الروابط تفتح معاينات للمشاريع وليست خدمات إنتاجية. قد تكون بعض التفاعلات محدودة. مشروع Our Web Realm غير مدرج هنا.",
"Have a project in mind?":"عندك مشروع في بالك؟","Let’s build something":"لنبنِ شيئًا","remarkable.":"استثنائيًا.","Your next big idea deserves a bold digital home. Let’s make it real.":"فكرتك الكبيرة تستحق حضورًا رقميًا مميزًا. دعنا نحولها إلى واقع.",
"Let’s build something meaningful":"لنبنِ شيئًا له معنى","Tell us what you have in mind. Share a few details and we’ll start a conversation about the right solution.":"احكِ لنا عن فكرتك. شارك بعض التفاصيل ولنبدأ الحديث عن الحل المناسب.",
"Get in touch":"تواصل معنا","Every great project":"كل مشروع عظيم","starts with a":"يبدأ بـ","conversation.":"محادثة.","Whether you have a clear brief or just the beginning of an idea, tell us a little about it.":"سواء كانت لديك تفاصيل واضحة أو مجرد بداية فكرة، أخبرنا عنها.",
"Message us directly for project inquiries.":"راسلنا مباشرة بخصوص مشروعك.","Open WhatsApp ↗":"افتح واتساب ↗","Prefer email? Send us your project details.":"تفضّل البريد؟ أرسل تفاصيل مشروعك.","Send an email ↗":"أرسل بريدًا ↗","Follow our updates and project showcases.":"تابع تحديثاتنا وعروض مشاريعنا.","Visit Facebook ↗":"زر فيسبوك ↗","Project inquiry":"طلب مشروع","A few details to get us started":"بعض التفاصيل لنبدأ","Your name":"اسمك","How should we address you?":"بماذا نناديك؟","Email address":"البريد الإلكتروني","What can we help you build?":"ما الذي تريد أن نبنيه لك؟","Business website":"موقع شركة","Landing page":"صفحة هبوط","E-commerce website":"متجر إلكتروني","Portfolio website":"موقع معرض أعمال","Website redesign":"إعادة تصميم موقع","Not sure yet":"لم أحدد بعد","Estimated Project Budget":"الميزانية المتوقعة للمشروع","A little about your project":"نبذة عن مشروعك","Tell us about your business, your goals, and what you’d like the website to do...":"أخبرنا عن نشاطك وأهدافك وما الذي تريد من الموقع أن يحققه...","Send project inquiry ↗":"إرسال طلب المشروع ↗","Submitting opens your WhatsApp with the project details pre-filled. Review the message and press Send.":"سيتم فتح واتساب مع تفاصيل المشروع جاهزة. راجع الرسالة واضغط إرسال.",
"© ":"© ","Codexira Studio. All rights reserved.":"كودكسيرا ستوديو. جميع الحقوق محفوظة.","Privacy":"الخصوصية","Facebook ↗":"فيسبوك ↗","Start a conversation ↗":"ابدأ محادثة ↗","Tell us about your project ↗":"احكِ لنا عن مشروعك ↗","Start your project":"ابدأ مشروعك","The next chapter starts here":"الفصل الجديد يبدأ هنا"
};
  const langBtn=document.getElementById('language-toggle');
  const themeBtn=document.getElementById('theme-toggle');
  let currentLanguage=localStorage.getItem('codexira-language')||'en';
  const attrMap={"Open navigation":"فتح القائمة","Close navigation":"إغلاق القائمة","Your name":"اسمك","How should we address you?":"بماذا نناديك؟","Email address":"البريد الإلكتروني","What can we help you build?":"ما الذي تريد أن نبنيه لك؟","A little about your project":"نبذة عن مشروعك","Tell us about your business, your goals, and what you’d like the website to do...":"أخبرنا عن نشاطك وأهدافك وما الذي تريد من الموقع أن يحققه...","Enter your budget (e.g. $800 or EGP 25,000)":"اكتب ميزانيتك (مثال: 800 دولار أو 25,000 جنيه)"};
  function setLanguage(lang){
    currentLanguage=lang;
    root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
      const node=walker.currentNode;
      if(!node.nodeValue.trim())continue;
      if(node.__codexiraOriginalText===undefined)node.__codexiraOriginalText=node.nodeValue;
      const original=node.__codexiraOriginalText;
      const key=original.trim();
      node.nodeValue=lang==='ar'&&translations[key]?original.replace(key,translations[key]):original;
    }
    document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>['placeholder','aria-label','title'].forEach(a=>{
      const dataKey='en'+a;
      if(!el.dataset[dataKey])el.dataset[dataKey]=el.getAttribute(a)||'';
      const original=el.dataset[dataKey];
      if(lang==='ar'&&attrMap[original])el.setAttribute(a,attrMap[original]);
      else if(lang==='en'&&original)el.setAttribute(a,original);
    }));
    if(langBtn)langBtn.textContent=lang==='ar'?'English':'Arabic';
    document.title=lang==='ar'?'كودكسيرا ستوديو — تجارب رقمية تصنع فرقًا':'Codexira Studio — We Engineer Digital Experiences';
    try{localStorage.setItem('codexira-language',lang);}catch(error){console.warn('Could not persist language preference',error);}
  }
  function setTheme(theme){
    root.dataset.theme=theme;
    if(themeBtn){const icon=themeBtn.querySelector('.utility-icon'),label=themeBtn.querySelector('.theme-label');if(icon)icon.textContent=theme==='dark'?'☼':'☾';if(label)label.textContent=theme==='dark'?'Light':'Dark';}
    localStorage.setItem('codexira-theme',theme);
  }
  if(langBtn)langBtn.addEventListener('click',()=>setLanguage(root.lang==='ar'?'en':'ar'));
  if(themeBtn)themeBtn.addEventListener('click',()=>setTheme(root.dataset.theme==='light'?'dark':'light'));
  setTheme(localStorage.getItem('codexira-theme')||'dark');
  setLanguage(currentLanguage);
  const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
  if(menu&&links)menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  const projects=[{"name":"Learnweave","tag":"Education platform","desc":"A full education platform for IGCSE and American Diploma programs, with courses, faculty profiles, testimonials, media gallery and trial lesson booking.","img":"https://screenshot2.lovable.dev/lovp_5n1x0kdtng8tbvr7tym31ezscm/87ee967a09512592a53adcfbcdbd234d_1791843262062.png"},{"name":"ATEN Archive","tag":"Device assembly & traceability","desc":"A device assembly and traceability system for managing supplier parts, serial numbers and automated QR-code generation.","img":"https://screenshot2.lovable.dev/lovp_13jq9ywn0x9yn98hng8ctjw248/1186fe35789935ebac110955f223f24f_1791140683728.png"},{"name":"Sahlala","tag":"Restaurant ordering system","desc":"A restaurant ordering experience with a menu, food categories, cart, checkout and order tracking.","img":"https://screenshot2.lovable.dev/lovp_5b8g9ac6zw99ery39wdm68x7bp/8f371133dd3fbd8e957538f6603a9ea0_1791223528072.png"},{"name":"Gendouzi Study Compass","tag":"Education · Productivity","desc":"A workbook-powered study planner with daily schedules, subject tracking, backlog management and progress dashboards.","img":"https://screenshot2.lovable.dev/lovp_5r8ca462kc83es1hshskdjbxkq/b7fd7496bfd624a3eaec9fc5b3092747_1795392774429.png"},{"name":"Notebook LM","tag":"AI research workspace","desc":"An AI-powered research workspace for organizing documents and asking questions grounded in uploaded sources, with cited answers.","img":"https://screenshot2.lovable.dev/lovp_4yqxfcgt209en8bn5qnqaa8feb/5dda428d8a398a46ccb5536d73b8a31d_1791145278507.png"},{"name":"Taleta Shemal","tag":"Music · Social app","desc":"A mobile-focused red-and-black music and social experience with Home, Store, Songs, Challenges and Profile areas.","img":"https://screenshot2.lovable.dev/lovp_59g65nrbfj90rtgszd37y65d6q/0a7144ebbf83ef8856e6886904c51cba_1791049850855.png"},{"name":"Gendouzi Study Planner","tag":"Education · Study planner","desc":"A focused daily and weekly planner for subjects, saved progress, backlog and daily review.","img":"https://screenshot2.lovable.dev/lovp_4pq3wm2vxg9t98ksdnwkfka42e/e039e3980f1ab6f67e0148b32a481a1f_1795393284682.png"},{"name":"Pixel Perfect Clone","tag":"Laboratory management","desc":"A role-based laboratory management system with staff workflows, database-backed records and a frosted-glass interface.","img":"https://screenshot2.lovable.dev/lovp_4h4csg1jx388b9nz1pd4q26qk3/4be1605e1f626c2d2e9d4b324718ab41_1792439649635.png"}];
  if(document.querySelector('.project-gallery')){
    const overlay=document.createElement('div');overlay.className='project-overlay';overlay.innerHTML='<div class="project-dialog"><button class="project-dialog-close" type="button" aria-label="Close">×</button><div class="project-dialog-inner"><img class="project-dialog-image" alt=""><div class="project-dialog-copy"><div class="project-dialog-kicker"></div><h2></h2><p></p><div class="project-dialog-count"></div></div></div></div>';document.body.appendChild(overlay);
    const close=()=>{overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.style.overflow='';};overlay.setAttribute('aria-hidden','true');overlay.querySelector('.project-dialog-close').addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    function show(idx,mode){
      const p=projects[idx];if(!p)return;
      overlay.querySelector('.project-dialog-image').src=p.img;
      overlay.querySelector('.project-dialog-image').alt=p.name+' screenshot';
      overlay.querySelector('.project-dialog-kicker').textContent=currentLanguage==='ar'?(mode==='about'?'عن المشروع':'معرض لقطات الشاشة'):(mode==='about'?'Project profile':'Screenshot gallery');
      overlay.querySelector('h2').textContent=p.name;overlay.querySelector('h2').dir='ltr';overlay.querySelector('h2').style.textAlign='left';
      overlay.querySelector('.project-dialog-copy p').textContent=currentLanguage==='ar'?(translations[p.desc]||p.desc):p.desc;
      overlay.querySelector('.project-dialog-count').textContent=currentLanguage==='ar'?'أحدث لقطة شاشة متاحة':'Latest available screenshot';
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    }
    const gallery=document.querySelector('.project-gallery');
    if(gallery)gallery.addEventListener('click',event=>{
      const about=event.target.closest('[data-about]');
      const screenshots=event.target.closest('[data-gallery]');
      if(about)show(Number(about.dataset.about),'about');
      else if(screenshots)show(Number(screenshots.dataset.gallery),'gallery');
    });
      }
  const form=document.getElementById('contact-form');
  if(form)form.addEventListener('submit',e=>{
    e.preventDefault();if(!form.reportValidity())return;
    const d=new FormData(form);
    const msg='New project inquiry — Codexira Studio%0A%0A'
      +'Name: '+encodeURIComponent(d.get('name'))+'%0A'
      +'Email: '+encodeURIComponent(d.get('email'))+'%0A'
      +'Project type: '+encodeURIComponent(d.get('type'))+'%0A'
      +'Estimated budget: '+encodeURIComponent(d.get('budget')||'Not specified')+'%0A%0A'
      +'Project details: '+encodeURIComponent(d.get('message'));
    window.open('https://wa.me/201554006628?text='+msg,'_blank','noopener,noreferrer');
  });
  const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
});
