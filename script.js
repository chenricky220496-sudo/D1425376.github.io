// 【集中整理的占卜資料區】
// 可在此處自由新增、修改占卜結果
const fortunesData = [
    {
        title: "🌟 大吉",
        work: "靈感爆發，表現亮眼，主管對你刮目相看！",
        study: "考神附體，過目不忘，學習效率極高。",
        love: "桃花朵朵開，魅力無法擋，有機會遇到心儀對象。",
        money: "財神爺敲門，意外之財降臨，投資有不錯的回報。",
        summary: "今天是充滿奇蹟與幸運的一天，做什麼都特別順利！",
        quote: "「好運是努力的代名詞，大膽去創造你的奇蹟吧！」"
    },
    {
        title: "☀️ 中吉",
        work: "穩紮穩打，順利完成任務，與同事合作愉快。",
        study: "理解力提升，按部就班就能獲得好成績。",
        love: "感情穩定升溫，單身者可多參加聚會增加機遇。",
        money: "收支平衡，可能有小額獎金或請客。",
        summary: "平順安康的一天，享受每一個微小的美好。",
        quote: "「踏實前進的每一步，都會化為明日的花朵。」"
    },
    {
        title: "✨ 小吉",
        work: "雖然有些忙碌，但遇到的問題都能迎刃而解。",
        study: "需要多花點時間複習，但你的努力絕對不會白費。",
        love: "平淡見真情，一個溫暖的問候就能拉近距離。",
        money: "避免衝動購物，可以省下一筆小錢。",
        summary: "平凡就是福，微小的幸運都藏在生活細節裡。",
        quote: "「微笑是最好的好運磁鐵，今天也要開心喔！」"
    },
    {
        title: "🌙 平平",
        work: "按部就班，沒有太多波動，適合整理待辦事項。",
        study: "進度適中，不要給自己太大壓力。",
        love: "需要多點包容與溝通，單身者享受獨處時光。",
        money: "財運平平，適合記帳理財，保守為宜。",
        summary: "適合沉澱的一天，無風無雨也是一種難得的寧靜。",
        quote: "「平靜的水面，才能映照出最真實的星空。」"
    },
    {
        title: "☁️ 稍息",
        work: "可能會遇到一點挑戰，多向同事請教能迅速過關。",
        study: "注意力較難集中，建議分段學習、多起來走動休息。",
        love: "可能會有些小誤會，先深呼吸再來溝通。",
        money: "有意外支出的可能，出門記得看緊錢包。",
        summary: "腳步放慢一點也沒關係，今天是適合休息的日子。",
        quote: "「休息，是為了能夠走更長遠的路。」"
    },
    {
        title: "🔥 逆轉勝",
        work: "開頭有些阻礙，但下午會突然迎來奇蹟般的轉機！",
        study: "卡關已久的難題，今天靈光一閃就能解開。",
        love: "破冰好時機，勇敢一點就能改變目前的現狀。",
        money: "原本以為損失的錢，有機會以其他方式補回來。",
        summary: "不要被早上的小挫折打敗，精彩的好戲在後頭！",
        quote: "「風箏逆風才能飛得最高，挑戰即是轉機！」"
    },
    {
        title: "🌸 桃花旺",
        work: "人際關係極佳，靠著好人緣能順利促成合作。",
        study: "和同學一起討論、組讀書會，效果會出奇的好。",
        love: "萬眾矚目！散發迷人氣場，小心不要到處放電。",
        money: "有機會收到別人送的小禮物或請吃點心。",
        summary: "今天是屬於「人」的一天，多與人交流會有意想不到的收穫。",
        quote: "「你散發的光芒，自然會吸引懂你的人靠近。」"
    },
    {
        title: "💡 靈感閃現",
        work: "創意滿分！提出的獨特點子會大受歡迎。",
        study: "找到新的學習方法，事半功倍，效率倍增。",
        love: "安排一場別出心裁的約會或是給對方一個小驚喜吧！",
        money: "對市場敏銳度高，適合研究新的理財資訊。",
        summary: "充滿創造力的一天，把腦海中的想法都寫下來吧！",
        quote: "「每一個偉大的發明，都源於一個瘋狂的念頭。」"
    },
    {
        title: "🐢 穩健",
        work: "細心度點滿，能抓出別人沒發現的錯誤，成為可靠的靠山。",
        study: "適合背誦或複習基礎觀念，把地基打得更穩固。",
        love: "不需要華麗的浪漫，實質的陪伴最能打動人心。",
        money: "適合將錢存入銀行，看著數字增加會很有成就感。",
        summary: "不求快但求穩，耐心是你今天最強大的武器。",
        quote: "「滴水穿石，不是力量大，而是功夫深。」"
    },
    {
        title: "🎭 驚喜",
        work: "計畫趕不上變化，但這個變化帶來了更好的機會！",
        study: "可能會意外發現自己對某個不熟悉的領域很有天分。",
        love: "偶然的浪漫相遇或是突如其來的表白，心跳加速中。",
        money: "出門或許會在口袋裡摸到忘記的鈔票，或買到打折好物。",
        summary: "請抱持著開放的心態，迎接充滿驚喜與意外的一天！",
        quote: "「生活就像一盒巧克力，你永遠不知道下一顆是什麼口味。」"
    }
];

// 取得DOM元素
const drawBtn = document.getElementById('draw-btn');
const resetBtn = document.getElementById('reset-btn');
const drawArea = document.getElementById('draw-area');
const loadingArea = document.getElementById('loading-area');
const resultArea = document.getElementById('result-area');

const resultTitle = document.getElementById('result-title');
const resultWork = document.getElementById('result-work');
const resultStudy = document.getElementById('result-study');
const resultLove = document.getElementById('result-love');
const resultMoney = document.getElementById('result-money');
const resultDesc = document.getElementById('result-desc');
const resultQuote = document.getElementById('result-quote');

// 占卜功能
function drawFortune() {
    // 隱藏按鈕區，顯示載入動畫
    drawArea.classList.add('hidden');
    resultArea.classList.add('hidden');
    loadingArea.classList.remove('hidden');

    // 模擬與宇宙共鳴的等待時間 (1.5秒)
    setTimeout(() => {
        // 隨機抽取一個結果
        const randomIndex = Math.floor(Math.random() * fortunesData.length);
        const fortune = fortunesData[randomIndex];

        // 填入資料
        resultTitle.innerText = fortune.title;
        resultWork.innerText = fortune.work;
        resultStudy.innerText = fortune.study;
        resultLove.innerText = fortune.love;
        resultMoney.innerText = fortune.money;
        resultDesc.innerText = fortune.summary;
        resultQuote.innerText = fortune.quote;

        // 隱藏載入動畫，顯示結果
        loadingArea.classList.add('hidden');
        resultArea.classList.remove('hidden');
    }, 1500);
}

// 重新占卜功能
function resetFortune() {
    // 隱藏結果區，顯示按鈕區
    resultArea.classList.add('hidden');
    drawArea.classList.remove('hidden');
}

// 綁定事件
drawBtn.addEventListener('click', drawFortune);
resetBtn.addEventListener('click', resetFortune);
