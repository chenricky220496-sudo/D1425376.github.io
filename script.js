// 占卜資料集：集中管理，方便修改
const fortuneData = [
    {
        type: "大吉 🌟",
        desc: "💼 工作：如魚得水，有升遷或重大表現機會！<br>📚 學業：過目不忘，考運與學習效率極佳。<br>❤️ 愛情：桃花朵朵開，感情甜蜜穩定。<br>💰 金錢：財源滾滾，投資會有意想不到的收穫！",
        closing: "幸運之神正對著你微笑，大膽去想做的事吧！"
    },
    {
        type: "中吉 🌠",
        desc: "💼 工作：計畫順利推進，努力會被主管看見。<br>📚 學業：穩紮穩打，成績能維持在水準之上。<br>❤️ 愛情：平淡中見真情，適合與伴侶深度溝通。<br>💰 金錢：有穩定的收入，小額投資有回報。",
        closing: "好運正在醞釀，保持現有的節奏繼續前進！"
    },
    {
        type: "小吉 🍀",
        desc: "💼 工作：日常業務平穩，無太大波瀾。<br>📚 學業：需要稍微調整讀書計畫，效果會更好。<br>❤️ 愛情：有機會結識新朋友，或與伴侶有小驚喜。<br>💰 金錢：收支平衡，偶爾有小確幸降臨。",
        closing: "生活中的小美好就在身邊，記得用心感受哦！"
    },
    {
        type: "財運旺盛 🤑",
        desc: "💼 工作：有額外獎金的機會，業績達標。<br>📚 學業：稍微分心，請記得將心思拉回書本上喔。<br>❤️ 愛情：陪伴時間減少，別忘了給另一半一句問候。<br>💰 金錢：吉星高照！正財偏財皆得意，是大豐收的時刻。",
        closing: "財神爺來敲門啦，但也要理智消費唷！"
    },
    {
        type: "學神附體 🎓",
        desc: "💼 工作：適合學習新技能，對未來職涯大有幫助。<br>📚 學業：突飛猛進，任何難題都能迎刃而解！<br>❤️ 愛情：隨緣發展，目前的你在自身成長上更有魅力。<br>💰 金錢：夠用就好，適合把錢投資在自我提升上。",
        closing: "智慧之光閃耀，現在是你吸收知識的最佳時機！"
    },
    {
        type: "末吉 ⛅",
        desc: "💼 工作：初期會遇上挑戰，但堅持下去就能解決。<br>📚 學業：漸入佳境，不懂的地方請勇敢提問。<br>❤️ 愛情：需主動一點，不要讓緣分從指尖溜走。<br>💰 金錢：守成為宜，不宜做高風險投資。",
        closing: "雨過總會天晴，先苦後甘的果實最甜美！"
    },
    {
        type: "平 🍃",
        desc: "💼 工作：平凡就是福，安穩度過每一天。<br>📚 學業：維持現狀，不要給自己太大的壓力。<br>❤️ 愛情：平靜無波瀾，單身者享受自在時光吧。<br>💰 金錢：不多不少，剛剛好夠你的日常開銷。",
        closing: "順其自然，享受這份安穩與寧靜吧！"
    },
    {
        type: "桃花開 🌸",
        desc: "💼 工作：能得到貴人相助，人際關係是致勝關鍵。<br>📚 學業：學長姊或同學會成為你的好幫手。<br>❤️ 愛情：魅力四射！有機會遇到讓你心動的浪漫邂逅。<br>💰 金錢：可能會因為社交活動而增加花費。",
        closing: "人見人愛的你，請展現自信的笑容吧！"
    },
    {
        type: "挑戰 ⚔️",
        desc: "💼 工作：壓力較大，需留意時間管理與細節。<br>📚 學業：可能遇到瓶頸，建議轉換學習環境。<br>❤️ 愛情：容易因為小事產生摩擦，多一點包容。<br>💰 金錢：開銷增多，請看緊你的荷包，謹慎理財。",
        closing: "這只是一個關卡，跨過去你將變得更強大！"
    },
    {
        type: "大翻盤 🚀",
        desc: "💼 工作：將迎來重要轉機，勇敢把握機會！<br>📚 學業：找到適合自己的新方法，效率大增。<br>❤️ 愛情：過去的誤會將冰釋，關係更進一步。<br>💰 金錢：有意外的額外進帳，解除財務壓力。",
        closing: "逆境中重生！這就是你展現爆發力的時刻！"
    }
];

// DOM 元素選取
const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const actionArea = document.getElementById('actionArea');
const resultArea = document.getElementById('resultArea');
const fortuneType = document.getElementById('fortuneType');
const fortuneDesc = document.getElementById('fortuneDesc');
const fortuneClosing = document.getElementById('fortuneClosing');

// 占卜按鈕點擊事件
drawBtn.addEventListener('click', () => {
    // 加上簡單的晃動動畫模擬「占卜中」
    drawBtn.textContent = "星空指引中... 🌠";
    drawBtn.classList.add('shaking');

    // 延遲 1.5 秒後顯示結果
    setTimeout(() => {
        drawBtn.classList.remove('shaking');
        drawBtn.textContent = "🔮 開始占卜";
        
        generateFortune();
        
        // 切換顯示區域
        actionArea.classList.add('hidden');
        resultArea.classList.remove('hidden');
    }, 1500);
});

// 再占卜一次按鈕點擊事件
resetBtn.addEventListener('click', () => {
    resultArea.classList.add('hidden');
    actionArea.classList.remove('hidden');
});

// 產生隨機占卜結果
function generateFortune() {
    const randomIndex = Math.floor(Math.random() * fortuneData.length);
    const result = fortuneData[randomIndex];

    fortuneType.textContent = result.type;
    fortuneDesc.innerHTML = result.desc; // 使用 innerHTML 因為資料中有 <br>
    fortuneClosing.textContent = result.closing;
}

// ==========================================
// 畫布背景特效 (Canvas 星空) - 滿足趣味性與畫布需求
// ==========================================
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];

function initResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function createStars() {
    stars = [];
    const numStars = Math.floor((width * height) / 2000); // 根據螢幕大小決定星星數量
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.2, // 水平移動速度
            vy: (Math.random() - 0.5) * 0.2, // 垂直移動速度
            alpha: Math.random()
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, width, height);
    for (let star of stars) {
        // 更新位置
        star.x += star.vx;
        star.y += star.vy;

        // 邊界回繞
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // 星星閃爍效果
        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.2) star.alpha = 0.2;
        if (star.alpha > 1) star.alpha = 1;

        // 畫星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    }
    requestAnimationFrame(drawStars);
}

// 初始化畫布
window.addEventListener('resize', () => {
    initResize();
    createStars();
});

initResize();
createStars();
drawStars();
