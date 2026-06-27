const FACTS = {
  1: ["北海道", "畑作、酪農、米、てんさい、じゃがいもなどが全国上位。広い土地を生かした大規模農業が特徴。", "食品加工、紙・パルプ、鉄鋼、観光関連が大きい。苫小牧や室蘭の工業地帯も有名。", "開拓使、アイヌ文化、箱館戦争など近代史の学びどころが多い。", "榎本武揚、土方歳三、新渡戸稲造などゆかりの人物がいる。"],
  2: ["青森県", "りんごの生産が全国トップ級。にんにく、ごぼう、ながいもも強い。", "食品加工、紙、電子部品、エネルギー関連が目立つ。", "三内丸山遺跡や津軽氏、南部氏の歴史がある。", "太宰治、棟方志功、津軽為信が知られる。"],
  3: ["岩手県", "米、畜産、りんご、雑穀が盛ん。南部杜氏の酒造文化もある。", "自動車関連、半導体、食品加工が伸びている。", "平泉の奥州藤原氏と中尊寺金色堂が代表的。", "宮沢賢治、石川啄木、原敬が有名。"],
  4: ["宮城県", "米、いちご、畜産に加え、三陸の水産も強い。", "電子部品、食品、紙・パルプ、自動車関連が集まる。", "伊達政宗の仙台藩、松島、震災復興の歩みが学べる。", "伊達政宗、支倉常長が有名。"],
  5: ["秋田県", "あきたこまちなど米どころ。枝豆、畜産、林業も盛ん。", "電子部品、医療機器、木材加工、食品加工がある。", "久保田藩、なまはげ、鉱山文化が特色。", "佐竹義宣、小野小町、白瀬矗が知られる。"],
  6: ["山形県", "さくらんぼが全国トップ級。米、ラ・フランス、ぶどうも有名。", "電子部品、機械、食品加工、鋳物が盛ん。", "最上義光、出羽三山、紅花交易の歴史がある。", "最上義光、上杉鷹山、斎藤茂吉が有名。"],
  7: ["福島県", "桃、米、きゅうり、畜産が盛ん。会津の米と酒も知られる。", "電子部品、化学、医療関連、再生可能エネルギーが強い。", "会津藩、戊辰戦争、白虎隊の歴史が有名。", "野口英世、松平容保、蒲生氏郷が知られる。"],
  8: ["茨城県", "メロン、れんこん、白菜、ピーマンなどが全国上位。", "鹿島臨海工業地帯の鉄鋼、石油化学、研究開発が目立つ。", "水戸徳川家、水戸学、筑波研究学園都市が特徴。", "徳川光圀、徳川斉昭、間宮林蔵が有名。"],
  9: ["栃木県", "いちごが全国トップ級。米、かんぴょう、畜産も盛ん。", "自動車、航空宇宙、医療機器、食品加工が強い。", "日光東照宮、足利学校、宇都宮城の歴史がある。", "徳川家康、田中正造、足利尊氏ゆかりの地。"],
  10: ["群馬県", "こんにゃくいも、キャベツ、畜産が全国上位。", "輸送機器、電機、食品、医薬品の工業が盛ん。", "富岡製糸場、上野国分寺、養蚕の歴史が学べる。", "新田義貞、内村鑑三、萩原朔太郎が知られる。"],
  11: ["埼玉県", "野菜、ねぎ、ほうれんそう、さといもなど都市近郊農業が強い。", "輸送機器、食品、印刷、化学など多様な工業が集まる。", "川越の蔵造り、忍城、中山道の宿場町が有名。", "渋沢栄一、塙保己一、太田道灌ゆかりの地。"],
  12: ["千葉県", "落花生、梨、米、野菜、花きが全国上位。水産も強い。", "京葉工業地域の石油化学、鉄鋼、食品が大きい。", "房総の里見氏、佐倉藩、成田山新勝寺の歴史がある。", "伊能忠敬、日蓮、里見義堯が知られる。"],
  13: ["東京都", "小松菜、花き、島しょ部の農水産物など都市型農業がある。", "出版、情報通信、精密機器、研究開発、サービス産業が集中。", "江戸幕府、明治維新、近代都市形成の中心地。", "徳川家康、勝海舟、渋沢栄一などゆかりが深い。"],
  14: ["神奈川県", "三浦だいこん、キャベツ、みかん、畜産などがある。", "自動車、化学、電機、造船、研究開発が盛ん。", "鎌倉幕府、横浜開港、小田原北条氏が代表的。", "源頼朝、北条早雲、二宮尊徳が有名。"],
  15: ["新潟県", "米の生産が全国トップ級。枝豆、すいか、日本酒も有名。", "金属加工、食品、化学、機械、石油関連が強い。", "上杉謙信、佐渡金山、北前船の歴史がある。", "上杉謙信、田中角栄、良寛が知られる。"],
  16: ["富山県", "米、チューリップ球根、薬草、白ねぎなどが有名。", "医薬品、アルミ、機械、化学が盛ん。", "越中売薬、立山信仰、五箇山合掌造りが特徴。", "佐々成政、前田利長、浅野総一郎が知られる。"],
  17: ["石川県", "米、加賀野菜、ぶどう、能登牛などがある。", "繊維、機械、食品、伝統工芸が強い。", "加賀百万石、金沢城、兼六園、能登の祭礼文化が有名。", "前田利家、前田利常、鈴木大拙が知られる。"],
  18: ["福井県", "米、そば、らっきょう、梅が有名。", "眼鏡、繊維、機械、化学、原子力関連が目立つ。", "一乗谷朝倉氏遺跡、越前和紙、恐竜化石が特徴。", "朝倉義景、由利公正、橋本左内が有名。"],
  19: ["山梨県", "ぶどう、もも、すももが全国トップ級。ワイン産業も強い。", "電子部品、宝飾、食品、精密機械が盛ん。", "甲斐武田氏、甲州街道、富士山信仰の歴史がある。", "武田信玄、山本勘助、樋口一葉ゆかりの地。"],
  20: ["長野県", "レタス、りんご、ぶどう、きのこが全国上位。", "精密機械、電子部品、食品、味噌が有名。", "信濃国、善光寺、松本城、川中島の戦いが代表的。", "真田幸村、島崎藤村、小林一茶が知られる。"],
  21: ["岐阜県", "ほうれんそう、トマト、柿、飛騨牛が有名。", "航空機、陶磁器、刃物、繊維、木工が強い。", "関ヶ原の戦い、斎藤道三、白川郷が学びどころ。", "斎藤道三、明智光秀、織田信長ゆかりの地。"],
  22: ["静岡県", "茶、みかん、わさび、メロンが全国上位。", "輸送機器、楽器、製紙、食品が強い。", "駿府城、徳川家康、東海道の宿場町が代表的。", "徳川家康、今川義元、井伊直虎が有名。"],
  23: ["愛知県", "キャベツ、花き、畜産、抹茶原料のてん茶が盛ん。", "自動車、航空宇宙、工作機械など日本有数の工業県。", "尾張徳川、三英傑、熱田神宮、名古屋城が有名。", "織田信長、豊臣秀吉、徳川家康が代表的。"],
  24: ["三重県", "米、茶、みかん、真珠養殖、畜産が有名。", "石油化学、電子部品、輸送機器、食品が盛ん。", "伊勢神宮、熊野古道、伊賀忍者の歴史がある。", "松尾芭蕉、本居宣長、藤堂高虎が知られる。"],
  25: ["滋賀県", "米、近江牛、茶、野菜が盛ん。琵琶湖の水産も特徴。", "電機、機械、化学、医薬品が集まる内陸工業県。", "近江商人、安土城、比叡山延暦寺が代表的。", "織田信長、浅井長政、井伊直弼ゆかりの地。"],
  26: ["京都府", "京野菜、宇治茶、丹波黒大豆が有名。", "精密機器、電子部品、伝統工芸、観光産業が強い。", "平安京、室町幕府、寺社文化、日本文化の中心地。", "紫式部、足利義満、明智光秀が知られる。"],
  27: ["大阪府", "なす、しゅんぎく、ぶどうなど都市近郊農業がある。", "機械、化学、金属、食品、医薬品、商業が発達。", "難波宮、豊臣秀吉の大坂城、天下の台所が有名。", "豊臣秀吉、与謝野晶子、緒方洪庵が知られる。"],
  28: ["兵庫県", "米、淡路島たまねぎ、丹波黒大豆、但馬牛が有名。", "鉄鋼、造船、化学、機械、食品が強い。", "姫路城、神戸開港、赤穂義士、但馬・播磨の歴史がある。", "黒田官兵衛、平清盛、大石内蔵助が有名。"],
  29: ["奈良県", "柿、茶、いちご、そうめん原料の小麦などがある。", "靴下、木材、医薬品、食品加工が目立つ。", "平城京、東大寺、法隆寺、古墳文化の中心地。", "聖徳太子、藤原不比等、行基が知られる。"],
  30: ["和歌山県", "みかん、梅、柿が全国トップ級。", "石油、鉄鋼、化学、食品、木材加工がある。", "紀伊徳川家、熊野古道、高野山が代表的。", "徳川吉宗、空海、南方熊楠が有名。"],
  31: ["鳥取県", "二十世紀梨、らっきょう、すいか、白ねぎが有名。", "電子部品、食品、紙、金属加工がある。", "因幡の白兎、鳥取城、たたら製鉄の歴史がある。", "水木しげる、岡野貞一、山中鹿介が知られる。"],
  32: ["島根県", "米、ぶどう、畜産、しじみなどが有名。", "鉄鋼、電子部品、食品、木材加工がある。", "出雲大社、石見銀山、たたら製鉄が代表的。", "小泉八雲、尼子経久、大国主命ゆかりの地。"],
  33: ["岡山県", "白桃、ぶどう、米、畜産が有名。", "水島臨海工業地帯の石油化学、鉄鋼、自動車が強い。", "吉備文化、岡山城、倉敷美観地区が特徴。", "犬養毅、雪舟、宇喜多秀家が知られる。"],
  34: ["広島県", "レモン、米、かき養殖、野菜が有名。", "自動車、造船、鉄鋼、機械、食品が盛ん。", "厳島神社、毛利氏、広島城、平和記念の歴史がある。", "毛利元就、頼山陽、平清盛ゆかりの地。"],
  35: ["山口県", "米、みかん、はなっこりー、水産が有名。", "化学、石油、鉄鋼、造船が瀬戸内側に集まる。", "長州藩、明治維新、萩城下町が代表的。", "吉田松陰、高杉晋作、伊藤博文が有名。"],
  36: ["徳島県", "すだち、なると金時、れんこん、にんじんが有名。", "化学、医薬品、LED、食品が強い。", "阿波藩、阿波おどり、藍の栽培と交易が特色。", "蜂須賀家政、三木武夫、賀川豊彦が知られる。"],
  37: ["香川県", "オリーブ、レタス、米、うどん用小麦が有名。", "造船、石油、食品、手袋、機械が盛ん。", "讃岐国、金刀比羅宮、高松城、瀬戸内交易が特徴。", "空海、平賀源内、菊池寛が知られる。"],
  38: ["愛媛県", "みかんなど柑橘が全国トップ級。米、畜産、真珠も有名。", "紙・パルプ、造船、化学、タオルが強い。", "松山城、宇和島伊達家、村上海賊の歴史がある。", "正岡子規、秋山真之、伊達宗城が有名。"],
  39: ["高知県", "なす、しょうが、ゆず、みょうがなど園芸農業が強い。", "食品、紙、機械、木材加工がある。", "土佐藩、坂本龍馬、自由民権運動が代表的。", "坂本龍馬、板垣退助、中岡慎太郎が有名。"],
  40: ["福岡県", "いちご、米、小麦、茶、畜産が盛ん。", "自動車、鉄鋼、半導体、食品、ロボット関連が強い。", "太宰府、黒田氏、炭鉱、アジア交流の歴史がある。", "菅原道真、黒田官兵衛、広田弘毅が知られる。"],
  41: ["佐賀県", "米、たまねぎ、いちご、みかん、畜産が有名。", "陶磁器、食品、電子部品、自動車関連がある。", "吉野ヶ里遺跡、鍋島藩、有田焼の歴史が代表的。", "大隈重信、鍋島直正、江藤新平が有名。"],
  42: ["長崎県", "びわ、じゃがいも、茶、畜産、水産が有名。", "造船、機械、食品、観光関連が強い。", "出島、キリシタン文化、平和学習、海外交流の歴史がある。", "大浦慶、シーボルト、福沢諭吉ゆかりの地。"],
  43: ["熊本県", "トマト、すいか、米、畜産、い草が全国上位。", "半導体、食品、輸送機器、化学が伸びている。", "熊本城、加藤清正、阿蘇信仰、水俣の公害学習がある。", "加藤清正、宮本武蔵、横井小楠が有名。"],
  44: ["大分県", "かぼす、しいたけ、米、畜産が有名。", "鉄鋼、石油化学、半導体、自動車関連が強い。", "宇佐神宮、府内南蛮文化、温泉文化が代表的。", "大友宗麟、福沢諭吉、広瀬淡窓が知られる。"],
  45: ["宮崎県", "きゅうり、ピーマン、マンゴー、畜産が全国上位。", "食品、化学、電子部品、木材加工がある。", "神話の里、高千穂、飫肥城下町が特徴。", "小村寿太郎、伊東マンショ、神武天皇ゆかりの地。"],
  46: ["鹿児島県", "さつまいも、茶、畜産、黒豚、さとうきびが強い。", "食品、電子部品、焼酎、畜産加工が盛ん。", "薩摩藩、明治維新、島津氏、奄美文化が代表的。", "西郷隆盛、大久保利通、島津斉彬が有名。"],
  47: ["沖縄県", "さとうきび、パイナップル、マンゴー、花きが有名。", "観光、食品、情報通信、泡盛、物流が目立つ。", "琉球王国、首里城、独自の海洋交流文化がある。", "尚巴志、尚真王、蔡温が知られる。"],
};

const canvas = document.querySelector("#drawCanvas");
const targetCanvas = document.querySelector("#targetCanvas");
const board = document.querySelector("#board");
const ctx = canvas.getContext("2d");
const targetCtx = targetCanvas.getContext("2d");
const nameEl = document.querySelector("#prefectureName");
const scorePill = document.querySelector("#scorePill");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const scoreText = document.querySelector("#scoreText");
const scoreMeter = document.querySelector("#scoreMeter");
const factsEl = document.querySelector("#facts");

let prefectures = [];
let current = null;
let strokes = [];
let activeStroke = null;
let revealed = false;

function resizeCanvasToDisplaySize(item) {
  const rect = item.getBoundingClientRect();
  const size = Math.max(320, Math.round(rect.width * devicePixelRatio));
  if (item.width !== size || item.height !== size) {
    item.width = size;
    item.height = size;
  }
}

function getPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  };
}

function getPrefectureFrame(context, prefecture, pad = 0.1) {
  const size = Math.min(context.canvas.width, context.canvas.height);
  const max = size * (1 - pad * 2);
  const aspect = Math.max(0.08, prefecture.aspect || 1);
  let width = max;
  let height = max;
  if (aspect >= 1) {
    height = max / aspect;
  } else {
    width = max * aspect;
  }
  return {
    x: (context.canvas.width - width) / 2,
    y: (context.canvas.height - height) / 2,
    width,
    height,
  };
}

function pathPrefecture(context, prefecture, pad = 0.1) {
  const frame = getPrefectureFrame(context, prefecture, pad);
  context.beginPath();
  prefecture.rings.forEach((ring) => {
    ring.forEach(([x, y], index) => {
      const px = frame.x + x * frame.width;
      const py = frame.y + y * frame.height;
      if (index === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    });
    context.closePath();
  });
}

function drawTarget() {
  targetCtx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
  pathPrefecture(targetCtx, current);
  targetCtx.fillStyle = "rgba(31, 143, 106, 0.18)";
  targetCtx.strokeStyle = "rgba(31, 143, 106, 0.9)";
  targetCtx.lineWidth = targetCanvas.width * 0.012;
  targetCtx.lineJoin = "round";
  targetCtx.fill("evenodd");
  targetCtx.stroke();
}

function redraw() {
  resizeCanvasToDisplaySize(canvas);
  resizeCanvasToDisplaySize(targetCanvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(9, canvas.width * 0.018);
  strokes.forEach((stroke) => {
    ctx.strokeStyle = stroke.color;
    ctx.beginPath();
    stroke.points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
  });
  if (current) drawTarget();
  board.classList.toggle("has-drawing", strokes.length > 0);
}

function makeMask(draw) {
  const offscreen = document.createElement("canvas");
  offscreen.width = 256;
  offscreen.height = 256;
  const off = offscreen.getContext("2d");
  draw(off);
  return off.getImageData(0, 0, 256, 256).data;
}

function scoreDrawing() {
  const targetEdge = makeMask((off) => {
    pathPrefecture(off, current, 0.1);
    off.strokeStyle = "#000";
    off.lineWidth = 16;
    off.lineJoin = "round";
    off.stroke();
  });
  const userLine = makeMask((off) => {
    const factor = 256 / canvas.width;
    off.lineCap = "round";
    off.lineJoin = "round";
    off.lineWidth = 13;
    off.strokeStyle = "#000";
    strokes.filter((stroke) => !stroke.correction).forEach((stroke) => {
      off.beginPath();
      stroke.points.forEach((point, index) => {
        const x = point.x * factor;
        const y = point.y * factor;
        if (index === 0) off.moveTo(x, y);
        else off.lineTo(x, y);
      });
      off.stroke();
    });
  });

  let targetPixels = 0;
  let userPixels = 0;
  let hitPixels = 0;
  for (let i = 3; i < targetEdge.length; i += 4) {
    const target = targetEdge[i] > 10;
    const user = userLine[i] > 10;
    if (target) targetPixels += 1;
    if (user) userPixels += 1;
    if (target && user) hitPixels += 1;
  }
  const recall = hitPixels / Math.max(1, targetPixels);
  const precision = hitPixels / Math.max(1, userPixels);
  const f1 = (2 * recall * precision) / Math.max(0.01, recall + precision);
  const leniency = 100 * Math.pow(f1, 0.74) + 10;
  return Math.max(0, Math.min(100, Math.round(leniency)));
}

function grade(score) {
  if (score >= 88) return "すごい一致";
  if (score >= 72) return "かなり近い";
  if (score >= 55) return "形が見えてる";
  if (score >= 35) return "雰囲気あり";
  return "もう一筆いこう";
}

function renderFacts(prefecture) {
  const facts = FACTS[prefecture.id] || [prefecture.name, "地域の農業を調べてみよう。", "地域の工業を調べてみよう。", "地域の歴史を調べてみよう。", "ゆかりの人物を調べてみよう。"];
  const labels = [
    ["稲", "農業・水産"],
    ["工", "工業"],
    ["史", "歴史"],
    ["人", "有名人"],
  ];
  factsEl.innerHTML = labels.map(([icon, label], index) => `
    <article class="fact">
      <div class="fact-icon">${icon}</div>
      <div>
        <h3>${label}</h3>
        <p>${facts[index + 1]}</p>
      </div>
    </article>
  `).join("");
}

function reveal() {
  if (!strokes.length || revealed) return;
  revealed = true;
  board.classList.add("revealed");
  const score = scoreDrawing();
  scorePill.textContent = `${score}点`;
  resultPanel.hidden = false;
  resultTitle.textContent = grade(score);
  scoreText.textContent = `${current.name}の輪郭と描いた線を比べました。答え合わせ後は赤線で描けます。緑の形をなぞりながら、海岸線や細長さ、ふくらみの位置を見直してみましょう。`;
  scoreMeter.style.width = `${score}%`;
  renderFacts(current);
}

function newRound() {
  const next = prefectures[Math.floor(Math.random() * prefectures.length)];
  current = next;
  strokes = [];
  activeStroke = null;
  revealed = false;
  nameEl.textContent = current.name;
  scorePill.textContent = "未採点";
  resultPanel.hidden = true;
  scoreMeter.style.width = "0%";
  board.classList.remove("revealed", "has-drawing");
  redraw();
}

canvas.addEventListener("pointerdown", (event) => {
  canvas.setPointerCapture(event.pointerId);
  activeStroke = {
    color: revealed ? "#e33b2f" : "#17202a",
    correction: revealed,
    points: [getPoint(event)],
  };
  strokes.push(activeStroke);
  redraw();
});

canvas.addEventListener("pointermove", (event) => {
  if (!activeStroke) return;
  activeStroke.points.push(getPoint(event));
  redraw();
});

canvas.addEventListener("pointerup", () => {
  activeStroke = null;
});

canvas.addEventListener("pointercancel", () => {
  activeStroke = null;
});

document.querySelector("#undoButton").addEventListener("click", () => {
  strokes.pop();
  redraw();
});

document.querySelector("#clearButton").addEventListener("click", () => {
  strokes = revealed ? strokes.filter((stroke) => !stroke.correction) : [];
  redraw();
});

document.querySelector("#checkButton").addEventListener("click", reveal);
document.querySelector("#nextButton").addEventListener("click", newRound);
document.querySelector("#newRoundButton").addEventListener("click", newRound);

window.addEventListener("resize", redraw);

fetch("data/prefectures-lite.json")
  .then((response) => response.json())
  .then((data) => {
    prefectures = data;
    newRound();
  })
  .catch(() => {
    nameEl.textContent = "データを読み込めません";
    scorePill.textContent = "要確認";
  });
