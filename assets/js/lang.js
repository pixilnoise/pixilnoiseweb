(function(){
  const root = document.documentElement;
  const STORAGE_KEY = 'pixilnoise-language-v1';
  const TEXT_MAP = {
  "実績": "WORKS",
  "依頼": "REQUEST",
  "pixilnoiseについて。": "About pixilnoise.",
  "電子音楽・音楽ゲーム的なサウンドを軸に、楽曲制作やMIX / MASTERING、映像などのクリエイティブを行っています。": "I create music, mixing / mastering, and visual works centered on electronic and rhythm-game-inspired sound.",
  "強いビート、細かな音像、デジタルな質感。ジャンルを固定せず、「音として面白いもの」を作ることを目指しています。": "Strong beats, detailed sound design, and digital textures. Rather than locking into one genre, I aim to create things that are simply interesting as sound.",
  "依頼・楽曲利用・その他のご連絡はこちらから。": "For commissions, music usage inquiries, collaborations, or general messages, contact me here.",
  "お問い合わせフォーム": "CONTACT FORM",
  "名前 / 名義": "NAME / CREATOR NAME",
  "件名": "SUBJECT",
  "このページから直接送信できます。": "You can send directly from this page.",
  "お問い合わせを送信しました。 / Your message has been sent.": "Your message has been sent.",
  "内容を確認後、返信いたします。 / I will review your message and reply after confirmation.": "I will review your message and reply after confirmation.",
  "2通目以降は、ご使用のメールから直接送信することをおすすめします。": "For a second or later message, I recommend sending directly from your own email account.",
  "DMでも受付中。": "DMs are welcome.",
  "X（Twitter）のDMからのご連絡も受け付けています。フォームを使わず、直接ご相談いただいても大丈夫です。": "You can also contact me by X (Twitter) DM. Feel free to reach out directly without using the form.",
  "依頼以外もOK。": "General inquiries are welcome.",
  "楽曲利用、イベント、コラボレーション、掲載、その他のご連絡も受け付けています。": "I also accept inquiries about music usage, events, collaborations, features, and other matters.",
  "依頼前に権利をご確認ください。": "Please review the rights before commissioning.",
  "制作物の利用範囲・著作権・禁止事項などをLICENSEページに記載しています。": "Usage scope, copyright, and prohibited uses are explained on the LICENSE page.",
  "開催予定・開催中のイベント、参加情報をここに掲載します。": "Upcoming and ongoing events, appearances, and participation information will be listed here.",
  "現在進行中の制作・参加イベント情報を掲載予定。": "Current production and event participation information will be listed here.",
  "開催予定イベントのタイトル・会場・参加内容などを掲載予定。": "Upcoming event titles, venues, and participation details will be listed here.",
  "新作リリース関連のイベント情報を掲載予定。": "Event information related to new releases will be listed here.",
  "人の心を芯から動かすメロディーを、音楽制作の強みにしています。": "Melodies that move people at their core are at the heart of my music.",
  "音楽・サウンドデザイン・MIX / MASTERING。": "Music production, sound design, mixing / mastering.",
  "電子音楽と音楽ゲーム的な感覚を軸に、音と世界観をつくる。": "Creating sound and worlds through electronic music and a rhythm-game sensibility.",
  "楽曲制作": "MUSIC PRODUCTION",
  "大学クリスマス会 テーマソング採用": "Selected as the theme song for a university Christmas event",
  "Google Developer Groups 関連イベント": "Google Developer Groups Event",
  "イベントオープニング楽曲 制作": "Event opening theme production",
  "依頼受付中。": "COMMISSIONS OPEN.",
  "楽曲制作、MIX・MASTERINGなどの依頼を受け付けています。": "Now accepting commissions for music production, mixing, mastering, and more.",
  "制作物の利用範囲・クレジット・禁止事項・著作権について。": "Usage scope, credits, prohibited uses, and copyright information for commissioned works.",
  "このページの適用範囲について": "SCOPE OF THIS PAGE",
  "このライセンスページの内容は、基本的にpixilnoiseへ依頼し制作された楽曲・制作物に適用されます。": "This license page generally applies to music and other works commissioned from pixilnoise.",
  "一般公開されている楽曲のうち、タイトル・概要欄・配布ページ等に「フリー」「使用可」「自由に使用可能」など、個別の利用条件が明記されている作品については、その作品ごとの記載内容を優先し、本ページの規約は適用されません。": "For publicly released tracks that explicitly state separate terms such as “free to use,” “use permitted,” or similar wording in the title, description, or distribution page, the terms stated for that individual work take priority over this page.",
  "利用規約": "TERMS OF USE",
  "YouTube・VTuber活動での使用": "USE ON YOUTUBE / VTUBER ACTIVITIES",
  "YouTube動画・配信でのBGM使用": "Use as BGM in YouTube videos and livestreams",
  "VTuberの配信待機画面・雑談・ゲーム配信での使用": "Use in VTuber waiting screens, chat streams, and game streams",
  "YouTube Shorts / TikTok / X などSNS動画での使用": "Use in social media videos such as YouTube Shorts, TikTok, and X",
  "メンバーシップ・限定配信・アーカイブ動画での使用": "Use in memberships, subscriber-only streams, and archived videos",
  "ゲーム・アプリ・配信コンテンツへの使用": "Use in games, apps, and streamed content",
  "収益化コンテンツでの使用": "Use in monetized content",
  "音楽ゲーム・ゲーム・イベントでの使用": "USE IN RHYTHM GAMES / GAMES / EVENTS",
  "音楽ゲームへの楽曲実装": "Implementation of the music in rhythm games",
  "ゲーム内BGMとしての使用": "Use as in-game BGM",
  "音楽ゲームの譜面制作・プレイ用途": "Use for rhythm-game chart creation and gameplay",
  "イベント配信・DJミックスでの使用": "Use in event streams and DJ mixes",
  "ゲームやイベントの告知動画・PVでの使用": "Use in promotional videos and PVs for games or events",
  "クレジット": "CREDIT",
  "公開時のお願い": "WHEN PUBLISHING",
  "公開物の概要欄・クレジット欄など、確認できる場所に以下を明記してください。": "Please include the following information in a visible location such as the description or credits.",
  "アーティスト名 : URL": "Artist name : URL",
  "公式サイト : URL": "Official website : URL",
  "クレジットが明記できない形式・媒体の場合は、公開前に個別でご相談ください。": "If the format or medium does not allow visible credits, please contact me before publication.",
  "pixilnoise : https://www.youtube.com/@pix22C3\n公式サイト : https://pixilnoise.github.io/pixilnoiseweb/index.html\nØVERCORE Sound Team : https://pixilnoise.github.io/OVERCORE/index.html": "pixilnoise : https://www.youtube.com/@pix22C3\nOfficial Website : https://pixilnoise.github.io/pixilnoiseweb/index.html\nØVERCORE Sound Team : https://pixilnoise.github.io/OVERCORE/index.html",
  "公式サイトURLを現在のGitHub Pages公開URLに更新済みです。": "The official website URL above is the current GitHub Pages address.",
  "禁止事項": "PROHIBITED USES",
  "楽曲そのものの再配布・販売": "Redistributing or selling the music itself",
  "自作発言・第三者への権利譲渡": "Claiming authorship or falsely transferring rights to a third party",
  "楽曲ファイル単体での配布": "Distributing the standalone music file",
  "AI学習への使用": "Use for AI training",
  "法令や公序良俗に反する用途での使用": "Use for illegal purposes or purposes contrary to public order and morals",
  "作者名・クレジットの偽装": "Falsifying the creator name or credits",
  "その他": "OTHER",
  "活動形態・チャンネル変更": "CHANGES TO ACTIVITY FORMAT / CHANNEL",
  "法人所属から個人活動へ移行した場合は要相談": "Please consult me if you move from corporate affiliation to independent activity",
  "チャンネル移転・転生後の使用は要相談": "Please consult me before using the work after moving or rebranding your channel",
  "すでに公開された動画・アーカイブは残してOK": "Already published videos and archives may remain online",
  "著作権": "COPYRIGHT",
  "特別な取り決めがない限り、制作物の著作権はpixilnoiseに帰属します。": "Unless otherwise agreed, copyright in the commissioned work remains with pixilnoise.",
  "依頼者には、合意した用途の範囲内で制作物を使用できる権利を許諾します。": "The client is granted the right to use the work within the scope agreed upon for the commission.",
  "著作権の譲渡、独占利用、買い取り等をご希望の場合は、内容に応じて個別にご相談ください。": "If you require copyright transfer, exclusive use, a buyout, or similar rights, please contact me to discuss the details.",
  "pixilnoiseの公開楽曲・作品一覧。": "A complete archive of publicly released music and works by pixilnoise.",
  "全リリースから1曲をランダム選出 / SELECT ONE TRACK FROM ALL RELEASES": "SELECT ONE TRACK FROM ALL RELEASES",
  "音ゲー系 / HARD": "RHYTHM GAME / HARD",
  "VOCAL / 歌もの": "VOCAL / SONG",
  "POP / 一般楽曲": "POP / GENERAL",
  "EXPERIMENTAL / くせもの": "EXPERIMENTAL / UNUSUAL",
  "制作内容・予算・納期など、決まっている範囲からご相談ください。": "Tell me what you have in mind, including the scope, budget, and deadline as far as they are decided.",
  "人の心を芯から動かすメロディーを強みに、印象に残る音楽を制作します。": "My strength is creating memorable music with melodies that move people at their core.",
  "料金": "PRICING",
  "音楽制作 / MIX / MASTERING": "MUSIC PRODUCTION / MIX / MASTERING",
  "基本納期：2日〜1週間": "Standard delivery: 2 days–1 week",
  "依頼する": "REQUEST",
  "基本納期：1日〜1週間": "Standard delivery: 1 day–1 week",
  "納期：要相談": "Delivery: To be discussed",
  "歌もの楽曲制作": "VOCAL MUSIC PRODUCTION",
  "映像制作 / VIDEO EDITING": "VIDEO PRODUCTION / VIDEO EDITING",
  "簡単音楽MV制作": "SIMPLE MUSIC VIDEO",
  "文字起こし / 切り抜き / 実況動画作成": "Transcription / clips / gameplay video editing",
  "動画編集": "VIDEO EDITING",
  "実況動画": "GAMEPLAY VIDEO",
  "尺や内容により料金が変動します": "Price varies depending on length and content",
  "※料金・納期は制作内容、トラック数、素材の状態、作業量などにより変動する場合があります。詳細はお問い合わせ時にお見積もりします。": "* Prices and delivery times may vary depending on the scope, track count, condition of source materials, and workload. A detailed quote will be provided when you contact me.",
  "依頼の流れ": "COMMISSION FLOW",
  "お問い合わせ": "Inquiry",
  "内容・料金の確認": "Confirm scope and price",
  "素材受け渡し": "Transfer materials",
  "制作": "Production",
  "確認・修正": "Review / revisions",
  "納品": "Delivery",
  "ご依頼について": "COMMISSION DETAILS",
  "修正回数": "REVISIONS",
  "基本修正：2回まで無料": "Up to 2 standard revisions are free",
  "3回目以降：追加料金": "Additional charge from the 3rd revision onward",
  "納品形式": "DELIVERY FORMAT",
  "48kHz / 24bit など": "48 kHz / 24-bit, etc.",
  "お支払い方法": "PAYMENT",
  "銀行振込、PayPal等に対応。詳細はお問い合わせ時にご案内します。": "Bank transfer, PayPal, and other methods are supported. Details will be provided when you contact me.",
  "権利について": "RIGHTS",
  "著作権・利用範囲については": "For copyright and usage scope, please see",
  "LICENSE / 権利ページ": "LICENSE / RIGHTS",
  "をご確認ください。": "for details.",
  "依頼する。": "START A COMMISSION.",
  "まずはメールでお気軽にお問い合わせください。": "Feel free to contact me by email first.",
  "プランの「依頼する」から進むと、件名テンプレートが自動入力されます。": "Selecting “REQUEST” on a plan will automatically fill in a subject template.",
  "音源・素材・デジタルコンテンツを展開予定。": "Music, sound assets, and other digital content are planned for release here.",
  "オリジナル楽曲・音源の販売ページ。": "A storefront for original music and audio releases.",
  "サンプル・素材などを公開予定。": "Samples and production assets are planned for release.",
  "イベント採用・テーマソング・案件制作など、pixilnoiseの制作実績。": "Selected pixilnoise works including event commissions, theme songs, and production projects.",
  "公開可能な実績のみ掲載しています。": "Only publicly shareable projects are listed.",
  "raythm 第1回楽曲公募": "1st raythm Music Contest",
  "楽曲公募 採用": "Selected in the music contest"
};
  const ATTR_MAP = {
  "メニューを開く": "Open menu",
  "メニューを閉じる": "Close menu",
  "お問い合わせ内容": "Inquiry subject",
  "ご依頼内容・使用用途・予算・納期など、決まっている範囲でご記入ください。": "Please enter the details of your request, intended use, budget, deadline, and anything else you have decided.",
  "ランダム選出画面を閉じる": "Close random selection"
};
  const ATTRS = ['aria-label', 'placeholder', 'title', 'alt'];
  const textState = new WeakMap();
  const attrState = new WeakMap();
  let current = 'ja';
  let applying = false;

  function readLanguage(){
    try{ return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ja'; }catch(_){ return 'ja'; }
  }

  function writeLanguage(lang){
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(_){}
  }

  function textFor(ja, en){
    return current === 'en' ? en : ja;
  }
  window.pixilnoiseText = textFor;
  window.pixilnoiseLanguage = function(){ return current; };

  function splitEdgeWhitespace(value){
    const m = String(value).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return { lead:m ? m[1] : '', core:m ? m[2] : value, tail:m ? m[3] : '' };
  }

  function englishAttribute(value){
    if(ATTR_MAP[value]) return ATTR_MAP[value];
    if(/をYou[Tt]ubeで聴く$/.test(value)) return value.replace(/をYou[Tt]ubeで聴く$/, ' — listen on YouTube');
    if(/をSoundcloudで聴く$/i.test(value)) return value.replace(/をSoundcloudで聴く$/i, ' — listen on SoundCloud');
    if(/の実績をYouTubeで開く$/.test(value)) return value.replace(/の実績をYouTubeで開く$/, ' — open project on YouTube');
    if(/用楽曲のジャケット$/.test(value)) return value.replace(/用楽曲のジャケット$/, ' project artwork');
    if(/ 仮ジャケット$/.test(value)) return value.replace(/ 仮ジャケット$/, ' placeholder artwork');
    if(/ ジャケット$/.test(value)) return value.replace(/ ジャケット$/, ' cover artwork');
    return null;
  }

  function registerTextNode(node){
    if(!node || node.nodeType !== Node.TEXT_NODE || textState.has(node)) return;
    const parent = node.parentElement;
    if(!parent || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(parent.tagName)) return;
    const parts = splitEdgeWhitespace(node.nodeValue || '');
    if(!parts.core) return;
    const en = TEXT_MAP[parts.core];
    if(!en) return;
    textState.set(node, {ja:parts.core, en, lead:parts.lead, tail:parts.tail});
  }

  function registerAttributes(el){
    if(!el || el.nodeType !== Node.ELEMENT_NODE) return;
    let state = attrState.get(el);
    if(!state){ state={}; attrState.set(el,state); }
    ATTRS.forEach(attr=>{
      if(state[attr] || !el.hasAttribute(attr)) return;
      const ja = el.getAttribute(attr);
      const en = englishAttribute(ja);
      if(en && en !== ja) state[attr]={ja,en};
    });
  }

  function scan(scope){
    const start = scope && scope.nodeType ? scope : document.body;
    if(!start) return;
    if(start.nodeType === Node.TEXT_NODE) registerTextNode(start);
    if(start.nodeType === Node.ELEMENT_NODE) registerAttributes(start);
    const walker = document.createTreeWalker(start, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      if(node.nodeType === Node.TEXT_NODE) registerTextNode(node);
      else registerAttributes(node);
    }
  }

  function applyRegistered(scope){
    const start = scope && scope.nodeType ? scope : document.body;
    if(!start) return;
    const applyNode = node=>{
      if(node.nodeType === Node.TEXT_NODE){
        const state=textState.get(node);
        if(state) node.nodeValue = state.lead + (current === 'en' ? state.en : state.ja) + state.tail;
      }else if(node.nodeType === Node.ELEMENT_NODE){
        const state=attrState.get(node);
        if(state) Object.keys(state).forEach(attr=>node.setAttribute(attr, current === 'en' ? state[attr].en : state[attr].ja));
      }
    };
    applyNode(start);
    const walker=document.createTreeWalker(start, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())) applyNode(node);
  }

  function updateButton(){
    document.querySelectorAll('[data-language-toggle]').forEach(btn=>{
      const isEnglish=current==='en';
      btn.setAttribute('aria-pressed', String(isEnglish));
      btn.setAttribute('aria-label', isEnglish ? '日本語に切り替える' : 'Switch to English');
      btn.dataset.language = current;
    });
  }

  function applyLanguage(lang, persist, announce){
    current = lang === 'en' ? 'en' : 'ja';
    root.dataset.lang=current;
    root.lang=current;
    if(persist) writeLanguage(current);
    applying=true;
    scan(document.body);
    applyRegistered(document.body);
    applying=false;
    updateButton();
    if(announce) window.dispatchEvent(new CustomEvent('pixilnoise:languagechange', {detail:{language:current}}));
  }

  function toggleLanguage(){
    root.classList.add('language-switching');
    applyLanguage(current === 'en' ? 'ja' : 'en', true, true);
    window.setTimeout(()=>root.classList.remove('language-switching'), 260);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    applyLanguage(readLanguage(), false, false);
    document.querySelectorAll('[data-language-toggle]').forEach(btn=>btn.addEventListener('click', toggleLanguage));

    const observer = new MutationObserver(records=>{
      if(applying) return;
      applying=true;
      records.forEach(record=>{
        record.addedNodes.forEach(node=>{ scan(node); applyRegistered(node); });
      });
      applying=false;
    });
    observer.observe(document.body, {childList:true, subtree:true});
  });

  window.addEventListener('pageshow', ()=>{
    const lang=readLanguage();
    if(document.body) applyLanguage(lang, false, false);
  });
})();
