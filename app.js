// 德语动词数据
const GERMAN_VERBS = [
    {verb: "backen", praesens: "backt (bäckt)", praeteritum: "backte (buk)", perfekt: "hat gebacken", meaning: "烤，烘"},
    {verb: "beginnen", praesens: "beginnt", praeteritum: "begann", perfekt: "hat begonnen", meaning: "开始"},
    {verb: "beißen", praesens: "beißt", praeteritum: "biss", perfekt: "hat gebissen", meaning: "咬"},
    {verb: "bersten", praesens: "birst", praeteritum: "barst", perfekt: "ist geborsten", meaning: "爆裂"},
    {verb: "betrügen", praesens: "betrügt", praeteritum: "betrog", perfekt: "hat betrogen", meaning: "欺骗"},
    {verb: "biegen", praesens: "biegt", praeteritum: "bog", perfekt: "hat gebogen", meaning: "弯曲"},
    {verb: "bieten", praesens: "bietet", praeteritum: "bot", perfekt: "hat geboten", meaning: "提供，出价"},
    {verb: "binden", praesens: "bindet", praeteritum: "band", perfekt: "hat gebunden", meaning: "绑，捆"},
    {verb: "bitten", praesens: "bittet", praeteritum: "bat", perfekt: "hat gebeten", meaning: "请求，乞求"},
    {verb: "blasen", praesens: "bläst", praeteritum: "blies", perfekt: "hat geblasen", meaning: "吹"},
    {verb: "bleiben", praesens: "bleibt", praeteritum: "blieb", perfekt: "ist geblieben", meaning: "停留，保持"},
    {verb: "braten", praesens: "brät", praeteritum: "briet", perfekt: "hat gebraten", meaning: "烤，煎"},
    {verb: "brechen", praesens: "bricht", praeteritum: "brach", perfekt: "hat gebrochen", meaning: "打破，折断"},
    {verb: "brennen", praesens: "brennt", praeteritum: "brannte", perfekt: "hat gebrannt", meaning: "燃烧"},
    {verb: "bringen", praesens: "bringt", praeteritum: "brachte", perfekt: "hat gebracht", meaning: "带来"},
    {verb: "denken", praesens: "denkt", praeteritum: "dachte", perfekt: "hat gedacht", meaning: "思考"},
    {verb: "dringen", praesens: "dringt", praeteritum: "drang", perfekt: "ist gedrungen", meaning: "渗透，涌入"},
    {verb: "dürfen", praesens: "darf", praeteritum: "durfte", perfekt: "ist/hat gedurft/dürfen", meaning: "可以"},
    {verb: "empfehlen", praesens: "empfiehlt", praeteritum: "empfahl", perfekt: "hat empfohlen", meaning: "推荐"},
    {verb: "erschrecken", praesens: "erschrickt", praeteritum: "erschrak", perfekt: "ist erschrocken", meaning: "惊吓"},
    {verb: "erwägen", praesens: "erwägt", praeteritum: "erwog", perfekt: "hat erwogen", meaning: "考虑"},
    {verb: "essen", praesens: "isst", praeteritum: "aß", perfekt: "hat gegessen", meaning: "吃"},
    {verb: "fahren", praesens: "fährt", praeteritum: "fuhr", perfekt: "ist/hat gefahren", meaning: "开车，行驶"},
    {verb: "fallen", praesens: "fällt", praeteritum: "fiel", perfekt: "ist gefallen", meaning: "落下"},
    {verb: "fangen", praesens: "fängt", praeteritum: "fing", perfekt: "hat gefangen", meaning: "抓住"},
    {verb: "finden", praesens: "findet", praeteritum: "fand", perfekt: "hat gefunden", meaning: "找到"},
    {verb: "fliegen", praesens: "fliegt", praeteritum: "flog", perfekt: "ist/hat geflogen", meaning: "飞"},
    {verb: "fliehen", praesens: "flieht", praeteritum: "floh", perfekt: "ist geflohen", meaning: "逃跑"},
    {verb: "fließen", praesens: "fließt", praeteritum: "floss", perfekt: "ist geflossen", meaning: "流动"},
    {verb: "fressen", praesens: "frisst", praeteritum: "fraß", perfekt: "hat gefressen", meaning: "（动物）吃"},
    {verb: "frieren", praesens: "friert", praeteritum: "fror", perfekt: "hat gefroren", meaning: "冻结"},
    {verb: "geben", praesens: "gibt", praeteritum: "gab", perfekt: "hat gegeben", meaning: "给"},
    {verb: "gedeihen", praesens: "gedeiht", praeteritum: "gedieh", perfekt: "ist gediehen", meaning: "繁荣"},
    {verb: "gehen", praesens: "geht", praeteritum: "ging", perfekt: "ist gegangen", meaning: "走，去"},
    {verb: "gelingen", praesens: "gelingt", praeteritum: "gelang", perfekt: "ist gelungen", meaning: "成功"},
    {verb: "gelten", praesens: "gilt", praeteritum: "galt", perfekt: "hat gegolten", meaning: "有效，适用"},
    {verb: "genießen", praesens: "genießt", praeteritum: "genoss", perfekt: "hat genossen", meaning: "享受"},
    {verb: "geschehen", praesens: "geschieht", praeteritum: "geschah", perfekt: "ist geschehen", meaning: "发生"},
    {verb: "gewinnen", praesens: "gewinnt", praeteritum: "gewann", perfekt: "hat gewonnen", meaning: "赢"},
    {verb: "gießen", praesens: "gießt", praeteritum: "goss", perfekt: "hat gegossen", meaning: "倒，浇"},
    {verb: "gleichen", praesens: "gleicht", praeteritum: "glich", perfekt: "hat geglichen", meaning: "相似"},
    {verb: "gleiten", praesens: "gleitet", praeteritum: "glitt", perfekt: "ist geglitten", meaning: "滑行"},
    {verb: "graben", praesens: "gräbt", praeteritum: "grub", perfekt: "hat gegraben", meaning: "挖"},
    {verb: "greifen", praesens: "greift", praeteritum: "griff", perfekt: "hat gegriffen", meaning: "抓住"},
    {verb: "haben", praesens: "hat", praeteritum: "hatte", perfekt: "hat gehabt", meaning: "有"},
    {verb: "halten", praesens: "hält", praeteritum: "hielt", perfekt: "hat gehalten", meaning: "握住，保持"},
    {verb: "hängen", praesens: "hängt", praeteritum: "hing", perfekt: "hat gehangen", meaning: "挂"},
    {verb: "hauen", praesens: "haut", praeteritum: "haute (hieb)", perfekt: "hat gehauen", meaning: "砍"},
    {verb: "heben", praesens: "hebt", praeteritum: "hob", perfekt: "hat gehoben", meaning: "举起"},
    {verb: "heißen", praesens: "heißt", praeteritum: "hieß", perfekt: "hat geheißen", meaning: "叫"},
    {verb: "helfen", praesens: "hilft", praeteritum: "half", perfekt: "hat geholfen", meaning: "帮助"},
    {verb: "kennen", praesens: "kennt", praeteritum: "kannte", perfekt: "hat gekannt", meaning: "认识"},
    {verb: "klingen", praesens: "klingt", praeteritum: "klang", perfekt: "hat geklungen", meaning: "听起来"},
    {verb: "kommen", praesens: "kommt", praeteritum: "kam", perfekt: "ist gekommen", meaning: "来"},
    {verb: "können", praesens: "kann", praeteritum: "konnte", perfekt: "hat gekonnt/können", meaning: "能"},
    {verb: "laden", praesens: "lädt", praeteritum: "lud", perfekt: "hat geladen", meaning: "装载，邀请"},
    {verb: "lassen", praesens: "lässt", praeteritum: "ließ", perfekt: "hat gelassen", meaning: "让，放"},
    {verb: "laufen", praesens: "läuft", praeteritum: "lief", perfekt: "ist gelaufen", meaning: "跑"},
    {verb: "leiden", praesens: "leidet", praeteritum: "litt", perfekt: "hat gelitten", meaning: "遭受"},
    {verb: "leihen", praesens: "leiht", praeteritum: "lieh", perfekt: "hat geliehen", meaning: "借出"},
    {verb: "lesen", praesens: "liest", praeteritum: "las", perfekt: "hat gelesen", meaning: "读"},
    {verb: "liegen", praesens: "liegt", praeteritum: "lag", perfekt: "hat gelegen", meaning: "躺，位于"},
    {verb: "lügen", praesens: "lügt", praeteritum: "log", perfekt: "hat gelogen", meaning: "说谎"},
    {verb: "mahlen", praesens: "mahlt", praeteritum: "mahlte", perfekt: "hat gemahlen", meaning: "磨"},
    {verb: "meiden", praesens: "meidet", praeteritum: "mied", perfekt: "hat gemieden", meaning: "避开"},
    {verb: "messen", praesens: "misst", praeteritum: "maß", perfekt: "hat gemessen", meaning: "测量"},
    {verb: "mögen", praesens: "mag", praeteritum: "mochte", perfekt: "hat gemocht", meaning: "喜欢"},
    {verb: "müssen", praesens: "muss", praeteritum: "musste", perfekt: "hat gemusst/müssen", meaning: "必须"},
    {verb: "nehmen", praesens: "nimmt", praeteritum: "nahm", perfekt: "hat genommen", meaning: "拿，取"},
    {verb: "nennen", praesens: "nennt", praeteritum: "nannte", perfekt: "hat genannt", meaning: "称呼"},
    {verb: "pfeifen", praesens: "pfeift", praeteritum: "pfiff", perfekt: "hat gepfiffen", meaning: "吹口哨"},
    {verb: "quellen", praesens: "quillt", praeteritum: "quoll", perfekt: "ist gequollen", meaning: "涌出"},
    {verb: "raten", praesens: "rät", praeteritum: "riet", perfekt: "hat geraten", meaning: "建议"},
    {verb: "reiben", praesens: "reibt", praeteritum: "rieb", perfekt: "hat gerieben", meaning: "摩擦"},
    {verb: "reiten", praesens: "reitet", praeteritum: "ritt", perfekt: "ist/hat geritten", meaning: "骑"},
    {verb: "rennen", praesens: "rennt", praeteritum: "rannte", perfekt: "ist gerannt", meaning: "奔跑"},
    {verb: "riechen", praesens: "riecht", praeteritum: "roch", perfekt: "hat gerochen", meaning: "闻"},
    {verb: "rufen", praesens: "ruft", praeteritum: "rief", perfekt: "hat gerufen", meaning: "叫喊"},
    {verb: "saufen", praesens: "sauft", praeteritum: "soff", perfekt: "hat gesoffen", meaning: "（粗）喝酒"},
    {verb: "schaffen", praesens: "schafft", praeteritum: "schuf", perfekt: "hat geschaffen", meaning: "创造"},
    {verb: "scheiden", praesens: "scheidet", praeteritum: "schied", perfekt: "hat geschieden", meaning: "分离"},
    {verb: "scheinen", praesens: "scheint", praeteritum: "schien", perfekt: "hat geschienen", meaning: "似乎"},
    {verb: "schieben", praesens: "schiebt", praeteritum: "schob", perfekt: "hat geschoben", meaning: "推"},
    {verb: "schießen", praesens: "schießt", praeteritum: "schoss", perfekt: "hat geschossen", meaning: "射击"},
    {verb: "schlafen", praesens: "schläft", praeteritum: "schlief", perfekt: "hat geschlafen", meaning: "睡觉"},
    {verb: "schlagen", praesens: "schlägt", praeteritum: "schlug", perfekt: "hat geschlagen", meaning: "打"},
    {verb: "schleichen", praesens: "schleicht", praeteritum: "schlich", perfekt: "ist geschlichen", meaning: "偷偷走"},
    {verb: "schleifen", praesens: "schleift", praeteritum: "schliff", perfekt: "hat geschliffen", meaning: "磨"},
    {verb: "schließen", praesens: "schließt", praeteritum: "schloss", perfekt: "hat geschlossen", meaning: "关闭"},
    {verb: "schmeißen", praesens: "schmeißt", praeteritum: "schmiss", perfekt: "hat geschmissen", meaning: "扔"},
    {verb: "schmelzen", praesens: "schmilzt", praeteritum: "schmolz", perfekt: "ist/hat geschmolzen", meaning: "融化"},
    {verb: "schneiden", praesens: "schneidet", praeteritum: "schnitt", perfekt: "hat geschnitten", meaning: "切"},
    {verb: "schreiben", praesens: "schreibt", praeteritum: "schrieb", perfekt: "hat geschrieben", meaning: "写"},
    {verb: "schreien", praesens: "schreit", praeteritum: "schrie", perfekt: "hat geschrien", meaning: "尖叫"},
    {verb: "schweigen", praesens: "schweigt", praeteritum: "schwieg", perfekt: "hat geschwiegen", meaning: "沉默"},
    {verb: "schwellen", praesens: "schwillt", praeteritum: "schwoll", perfekt: "ist angeschwollen", meaning: "肿胀"},
    {verb: "schwimmen", praesens: "schwimmt", praeteritum: "schwamm", perfekt: "ist/hat geschwommen", meaning: "游泳"},
    {verb: "schwinden", praesens: "schwindet", praeteritum: "schwand", perfekt: "ist geschwunden", meaning: "消失"},
    {verb: "schwingen", praesens: "schwingt", praeteritum: "schwang", perfekt: "hat geschwungen", meaning: "挥动"},
    {verb: "schwören", praesens: "schwört", praeteritum: "schwor", perfekt: "hat geschworen", meaning: "发誓"},
    {verb: "sehen", praesens: "sieht", praeteritum: "sah", perfekt: "hat gesehen", meaning: "看，见"},
    {verb: "sein", praesens: "ist", praeteritum: "war", perfekt: "ist gewesen", meaning: "是，在"},
    {verb: "senden", praesens: "sendet", praeteritum: "sendete (sandte)", perfekt: "hat gesandt", meaning: "发送"},
    {verb: "singen", praesens: "singt", praeteritum: "sang", perfekt: "hat gesungen", meaning: "唱"},
    {verb: "sinken", praesens: "sinkt", praeteritum: "sank", perfekt: "ist gesunken", meaning: "下沉"},
    {verb: "sitzen", praesens: "sitzt", praeteritum: "saß", perfekt: "hat gesessen", meaning: "坐"},
    {verb: "sollen", praesens: "soll", praeteritum: "sollte", perfekt: "hat gesollt/sollen", meaning: "应该"},
    {verb: "spinnen", praesens: "spinnt", praeteritum: "spann", perfekt: "hat gesponnen", meaning: "纺纱"},
    {verb: "sprechen", praesens: "spricht", praeteritum: "sprach", perfekt: "hat gesprochen", meaning: "说话"},
    {verb: "springen", praesens: "springt", praeteritum: "sprang", perfekt: "ist gesprungen", meaning: "跳"},
    {verb: "stechen", praesens: "sticht", praeteritum: "stach", perfekt: "hat gestochen", meaning: "刺"},
    {verb: "stehen", praesens: "steht", praeteritum: "stand", perfekt: "hat gestanden", meaning: "站"},
    {verb: "stehlen", praesens: "stiehlt", praeteritum: "stahl", perfekt: "hat gestohlen", meaning: "偷"},
    {verb: "steigen", praesens: "steigt", praeteritum: "stieg", perfekt: "ist gestiegen", meaning: "上升"},
    {verb: "sterben", praesens: "stirbt", praeteritum: "starb", perfekt: "ist gestorben", meaning: "死"},
    {verb: "stinken", praesens: "stinkt", praeteritum: "stank", perfekt: "hat gestunken", meaning: "臭"},
    {verb: "stoßen", praesens: "stößt", praeteritum: "stieß", perfekt: "hat gestoßen", meaning: "推，撞"},
    {verb: "streichen", praesens: "streicht", praeteritum: "strich", perfekt: "hat gestrichen", meaning: "涂抹"},
    {verb: "streiten", praesens: "streitet", praeteritum: "stritt", perfekt: "hat gestritten", meaning: "争吵"},
    {verb: "tragen", praesens: "trägt", praeteritum: "trug", perfekt: "hat getragen", meaning: "携带"},
    {verb: "treffen", praesens: "trifft", praeteritum: "traf", perfekt: "hat getroffen", meaning: "遇见"},
    {verb: "treiben", praesens: "treibt", praeteritum: "trieb", perfekt: "hat/ist getrieben", meaning: "驱使"},
    {verb: "treten", praesens: "tritt", praeteritum: "trat", perfekt: "ist/hat getreten", meaning: "踩"},
    {verb: "trinken", praesens: "trinkt", praeteritum: "trank", perfekt: "hat getrunken", meaning: "喝"},
    {verb: "tun", praesens: "tut", praeteritum: "tat", perfekt: "hat getan", meaning: "做"},
    {verb: "vergessen", praesens: "vergisst", praeteritum: "vergaß", perfekt: "hat vergessen", meaning: "忘记"},
    {verb: "verlieren", praesens: "verliert", praeteritum: "verlor", perfekt: "hat verloren", meaning: "失去"},
    {verb: "verleihen", praesens: "verleiht", praeteritum: "verlieh", perfekt: "hat verliehen", meaning: "借出"},
    {verb: "verscheißen", praesens: "verscheißt", praeteritum: "verschiss", perfekt: "hat verscheißen", meaning: "（粗）欺骗"},
    {verb: "verzeihen", praesens: "verzeiht", praeteritum: "verzieh", perfekt: "hat verziehen", meaning: "原谅"},
    {verb: "wachsen", praesens: "wächst", praeteritum: "wuchs", perfekt: "ist gewachsen", meaning: "生长"},
    {verb: "waschen", praesens: "wäscht", praeteritum: "wusch", perfekt: "hat gewaschen", meaning: "洗"},
    {verb: "weisen", praesens: "weist", praeteritum: "wies", perfekt: "hat gewiesen", meaning: "指出"},
    {verb: "wenden", praesens: "wendet", praeteritum: "wandte", perfekt: "hat gewandt", meaning: "转向"},
    {verb: "werben", praesens: "wirbt", praeteritum: "warb", perfekt: "hat geworben", meaning: "招募"},
    {verb: "werden", praesens: "wird", praeteritum: "wurde", perfekt: "ist geworden", meaning: "成为，将要"},
    {verb: "werfen", praesens: "wirft", praeteritum: "warf", perfekt: "hat geworfen", meaning: "扔"},
    {verb: "wiegen", praesens: "wiegt", praeteritum: "wog", perfekt: "hat gewogen", meaning: "称重"},
    {verb: "wissen", praesens: "weiß", praeteritum: "wusste", perfekt: "hat gewusst", meaning: "知道"},
    {verb: "wollen", praesens: "will", praeteritum: "wollte", perfekt: "hat gewollt/wollen", meaning: "想要"},
    {verb: "ziehen", praesens: "zieht", praeteritum: "zog", perfekt: "hat/ist gezogen", meaning: "拉"},
    {verb: "zwingen", praesens: "zwingt", praeteritum: "zwang", perfekt: "hat gezwungen", meaning: "强迫"}
];

// 应用状态
let currentView = 'dashboard';
let stats = {
    totalPracticed: 0,
    correctCount: 0,
    mistakes: {},
    practiced: {},
    lastPracticeDate: null
};
let quizState = {
    isActive: false,
    mode: 'all',
    queue: [],
    currentIndex: 0,
    answers: {
        prat: '',
        perf: ''
    },
    feedback: {
        prat: null,
        perf: null,
        submitted: false
    }
};

// 存储相关函数
const STORAGE_KEY = 'german_verbs_pro_stats_v3';

function getInitialStats() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return { ...stats, ...parsed };
        }
    } catch (error) {
        console.error('Failed to load stats', error);
    }
    return stats;
}

function saveStats() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (error) {
        console.error('Failed to save stats', error);
    }
}

// 视图切换
function showView(viewName) {
    // 隐藏所有视图
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });
    
    // 显示选中的视图
    document.getElementById(`${viewName}-view`).classList.remove('hidden');
    
    // 更新导航状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-ios-blue');
        btn.classList.add('text-ios-gray');
    });
    
    const activeBtn = document.querySelector(`[data-view="${viewName}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('text-ios-gray');
        activeBtn.classList.add('text-ios-blue');
    }
    
    currentView = viewName;
    
    // 根据视图执行相应操作
    if (viewName === 'study') {
        renderStudyView();
    } else if (viewName === 'dictionary') {
        renderDictionaryView();
    } else if (viewName === 'stats') {
        renderStatsView();
    } else if (viewName === 'dashboard') {
        updateDashboard();
    }
}

// 更新仪表板
function updateDashboard() {
    document.getElementById('total-practiced').textContent = stats.totalPracticed;
    document.getElementById('correct-count').textContent = stats.correctCount;
    
    const accuracy = stats.totalPracticed > 0 
        ? Math.round((stats.correctCount / stats.totalPracticed) * 100) 
        : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    // 显示最近错题
    const mistakesDiv = document.getElementById('recent-mistakes');
    const mistakes = Object.entries(stats.mistakes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    if (mistakes.length > 0) {
        mistakesDiv.innerHTML = mistakes.map(([verb, count]) => 
            `<div class="flex justify-between items-center p-2 bg-red-50 rounded">
                <span class="font-medium">${verb}</span>
                <span class="text-red-600 text-sm">错误 ${count} 次</span>
            </div>`
        ).join('');
    } else {
        mistakesDiv.innerHTML = '<p class="text-gray-500">暂无错题记录</p>';
    }
}

// 开始测试
function startQuiz(mode) {
    quizState.mode = mode;
    quizState.isActive = true;
    quizState.currentIndex = 0;
    quizState.answers = { prat: '', perf: '' };
    quizState.feedback = { prat: null, perf: null, submitted: false };
    
    // 准备测试队列
    if (mode === 'all') {
        quizState.queue = [...GERMAN_VERBS].sort(() => Math.random() - 0.5);
    } else if (mode === '20') {
        quizState.queue = [...GERMAN_VERBS].sort(() => Math.random() - 0.5).slice(0, 20);
    } else if (mode === 'mistakes') {
        const mistakeVerbs = GERMAN_VERBS.filter(verb => stats.mistakes[verb.verb]);
        quizState.queue = mistakeVerbs.length > 0 ? mistakeVerbs.sort(() => Math.random() - 0.5) : [...GERMAN_VERBS].slice(0, 10);
    }
    
    showView('quiz');
    renderQuiz();
}

// 渲染测试
function renderQuiz() {
    if (!quizState.isActive || quizState.currentIndex >= quizState.queue.length) {
        showQuizResults();
        return;
    }
    
    const currentVerb = quizState.queue[quizState.currentIndex];
    const progress = quizState.currentIndex + 1;
    const total = quizState.queue.length;
    
    // 更新进度
    document.getElementById('quiz-progress').textContent = `${progress} / ${total}`;
    document.getElementById('progress-bar').style.width = `${(progress / total) * 100}%`;
    
    // 渲染测试内容
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="space-y-6">
            <div class="text-center">
                <h3 class="text-2xl font-bold mb-2">${currentVerb.verb}</h3>
                <p class="text-gray-600">${currentVerb.meaning}</p>
            </div>
            
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        过去时 (Präteritum)
                    </label>
                    <input type="text" id="prat-input" value="${quizState.answers.prat}" 
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ios-blue focus:outline-none"
                           placeholder="输入过去时形式"
                           onkeyup="updateAnswer('prat', this.value)">
                    ${quizState.feedback.prat !== null ? 
                        (quizState.feedback.prat ? 
                            '<p class="text-green-600 text-sm mt-1">✓ 正确</p>' : 
                            `<p class="text-red-600 text-sm mt-1">✗ 错误，正确答案: ${currentVerb.praeteritum}</p>`) 
                        : ''}
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        现在完成时 (Perfekt)
                    </label>
                    <input type="text" id="perf-input" value="${quizState.answers.perf}" 
                           class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-ios-blue focus:outline-none"
                           placeholder="输入现在完成时形式"
                           onkeyup="updateAnswer('perf', this.value)">
                    ${quizState.feedback.perf !== null ? 
                        (quizState.feedback.perf ? 
                            '<p class="text-green-600 text-sm mt-1">✓ 正确</p>' : 
                            `<p class="text-red-600 text-sm mt-1">✗ 错误，正确答案: ${currentVerb.perfekt}</p>`) 
                        : ''}
                </div>
            </div>
            
            <div class="flex justify-between">
                <button onclick="showAnswer()" 
                        class="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        ${quizState.feedback.submitted ? 'disabled' : ''}>
                    ${quizState.feedback.submitted ? '已提交' : '查看答案'}
                </button>
                
                ${quizState.feedback.submitted ? 
                    `<button onclick="nextQuestion()" class="bg-ios-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        ${quizState.currentIndex < quizState.queue.length - 1 ? '下一题' : '完成测试'}
                    </button>` : 
                    `<button onclick="submitAnswer()" class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                        提交答案
                    </button>`
                }
            </div>
        </div>
    `;
}

// 更新答案
function updateAnswer(type, value) {
    quizState.answers[type] = value;
}

// 查看答案
function showAnswer() {
    const currentVerb = quizState.queue[quizState.currentIndex];
    quizState.feedback.prat = false;
    quizState.feedback.perf = false;
    quizState.feedback.submitted = true;
    renderQuiz();
}

// 提交答案
function submitAnswer() {
    const currentVerb = quizState.queue[quizState.currentIndex];
    
    // 检查答案
    const pratCorrect = normalizeAnswer(quizState.answers.prat) === normalizeAnswer(currentVerb.praeteritum);
    const perfCorrect = normalizeAnswer(quizState.answers.perf) === normalizeAnswer(currentVerb.perfekt);
    
    quizState.feedback.prat = pratCorrect;
    quizState.feedback.perf = perfCorrect;
    quizState.feedback.submitted = true;
    
    // 更新统计
    const bothCorrect = pratCorrect && perfCorrect;
    stats.totalPracticed++;
    
    if (bothCorrect) {
        stats.correctCount++;
    } else {
        // 记录错误
        if (!stats.mistakes[currentVerb.verb]) {
            stats.mistakes[currentVerb.verb] = 0;
        }
        stats.mistakes[currentVerb.verb]++;
    }
    
    // 记录练习过的动词
    stats.practiced[currentVerb.verb] = true;
    stats.lastPracticeDate = new Date().toISOString();
    
    saveStats();
    renderQuiz();
}

// 下一题
function nextQuestion() {
    quizState.currentIndex++;
    quizState.answers = { prat: '', perf: '' };
    quizState.feedback = { prat: null, perf: null, submitted: false };
    renderQuiz();
}

// 显示测试结果
function showQuizResults() {
    quizState.isActive = false;
    
    const correctCount = stats.correctCount;
    const totalCount = stats.totalPracticed;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="text-center space-y-6">
            <div class="text-6xl mb-4">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
            <h3 class="text-2xl font-bold">测试完成！</h3>
            
            <div class="bg-gray-50 rounded-lg p-6">
                <div class="text-3xl font-bold text-ios-blue mb-2">${accuracy}%</div>
                <p class="text-gray-600">正确率</p>
                <div class="mt-4 text-sm text-gray-500">
                    正确: ${correctCount} / 总计: ${totalCount}
                </div>
            </div>
            
            <div class="space-y-3">
                <button onclick="showView('dashboard')" class="w-full bg-ios-blue text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                    返回主页
                </button>
                <button onclick="startQuiz('${quizState.mode}')" class="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">
                    再来一次
                </button>
            </div>
        </div>
    `;
}

// 渲染学习视图
function renderStudyView() {
    const studyList = document.getElementById('study-list');
    const searchTerm = document.getElementById('search-verb').value.toLowerCase();
    
    const filteredVerbs = GERMAN_VERBS.filter(verb => 
        verb.verb.toLowerCase().includes(searchTerm) ||
        verb.meaning.includes(searchTerm)
    );
    
    studyList.innerHTML = filteredVerbs.map(verb => `
        <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-lg">${verb.verb}</h4>
                <span class="text-gray-600 text-sm">${verb.meaning}</span>
            </div>
            <div class="space-y-1 text-sm">
                <div><span class="font-medium">现在时:</span> ${verb.praesens}</div>
                <div><span class="font-medium">过去时:</span> ${verb.praeteritum}</div>
                <div><span class="font-medium">现在完成时:</span> ${verb.perfekt}</div>
            </div>
        </div>
    `).join('');
}

// 渲染词典视图
function renderDictionaryView() {
    const dictList = document.getElementById('dictionary-list');
    const searchTerm = document.getElementById('dict-search').value.toLowerCase();
    
    const filteredVerbs = GERMAN_VERBS.filter(verb => 
        verb.verb.toLowerCase().includes(searchTerm) ||
        verb.meaning.includes(searchTerm) ||
        verb.praeteritum.toLowerCase().includes(searchTerm) ||
        verb.perfekt.toLowerCase().includes(searchTerm)
    );
    
    dictList.innerHTML = filteredVerbs.map(verb => `
        <div class="border rounded-lg p-4">
            <div class="flex justify-between items-start mb-3">
                <h4 class="font-bold text-lg">${verb.verb}</h4>
                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${verb.meaning}</span>
            </div>
            <div class="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                    <span class="font-medium text-green-600">现在时:</span>
                    <div class="text-gray-700">${verb.praesens}</div>
                </div>
                <div>
                    <span class="font-medium text-blue-600">过去时:</span>
                    <div class="text-gray-700">${verb.praeteritum}</div>
                </div>
                <div>
                    <span class="font-medium text-purple-600">现在完成时:</span>
                    <div class="text-gray-700">${verb.perfekt}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染统计视图
function renderStatsView() {
    const accuracy = stats.totalPracticed > 0 
        ? Math.round((stats.correctCount / stats.totalPracticed) * 100) 
        : 0;
    
    document.getElementById('stat-total').textContent = stats.totalPracticed;
    document.getElementById('stat-correct').textContent = stats.correctCount;
    document.getElementById('stat-accuracy').textContent = accuracy + '%';
    
    // 错误详情
    const mistakesDetail = document.getElementById('mistakes-detail');
    const mistakes = Object.entries(stats.mistakes)
        .sort((a, b) => b[1] - a[1]);
    
    if (mistakes.length > 0) {
        mistakesDetail.innerHTML = mistakes.map(([verb, count]) => 
            `<div class="flex justify-between items-center p-2 bg-red-50 rounded">
                <span class="font-medium">${verb}</span>
                <span class="text-red-600">错误 ${count} 次</span>
            </div>`
        ).join('');
    } else {
        mistakesDetail.innerHTML = '<p class="text-gray-500">暂无错误记录</p>';
    }
    
    // 已练习动词
    const practicedDetail = document.getElementById('practiced-detail');
    const practiced = Object.keys(stats.practiced);
    
    if (practiced.length > 0) {
        practicedDetail.innerHTML = `
            <div class="text-sm text-gray-600 mb-2">已练习 ${practiced.length} 个动词</div>
            <div class="flex flex-wrap gap-2">
                ${practiced.map(verb => 
                    `<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">${verb}</span>`
                ).join('')}
            </div>
        `;
    } else {
        practicedDetail.innerHTML = '<p class="text-gray-500">暂无练习记录</p>';
    }
}

// 重置统计
function resetStats() {
    if (confirm('确定要重置所有统计数据吗？此操作不可撤销。')) {
        stats = {
            totalPracticed: 0,
            correctCount: 0,
            mistakes: {},
            practiced: {},
            lastPracticeDate: null
        };
        saveStats();
        renderStatsView();
        alert('统计数据已重置');
    }
}

// 辅助函数：标准化答案用于比较
function normalizeAnswer(answer) {
    return answer.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/[()]/g, '')
        .replace(/\//g, ' ');
}

// 搜索事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 加载统计数据
    stats = getInitialStats();
    updateDashboard();
    
    // 搜索监听
    document.getElementById('search-verb')?.addEventListener('input', renderStudyView);
    document.getElementById('dict-search')?.addEventListener('input', renderDictionaryView);
    
    // 回车提交
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && currentView === 'quiz' && quizState.isActive) {
            if (!quizState.feedback.submitted) {
                submitAnswer();
            } else {
                nextQuestion();
            }
        }
    });
});