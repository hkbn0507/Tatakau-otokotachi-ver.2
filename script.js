const CHARACTERS = {
  kawakami: {
    id: "kawakami",
    name: "川上",
    hp: 100,
    atk: 80,
    spd: 60,
    gaugeMultiplier: 1,
    skill: "かたいほね",
    skillDescription:
      "ガード性能が大幅に上昇。ガード時に受けるダメージを1まで軽減する。",
    specialName: "頭突き",
    specialDescription:
      "頭を巨大化させて前方へ振り下ろす。30ダメージを与え、大きく吹き飛ばす。"
  },

  okazaki: {
    id: "okazaki",
    name: "岡崎",
    hp: 100,
    atk: 60,
    spd: 110,
    gaugeMultiplier: 1.5,
    skill: "FLOW",
    skillDescription:
      "攻撃・被弾によって得られるSPECIALゲージが1.5倍になる。SPECIALゲージが満タンの状態でSPECIALを使わずパンチ・キックを命中させると、さらにピンク色の極ゲージが蓄積する。",
    specialName: "すね毛ビーム / すね毛ビーム・極",
    specialDescription:
      "通常時は脛からステージ端までビームを放ち18ダメージ。極ゲージまで満タンになると「すね毛ビーム・極」に変化。巨大な赤いビームを放ち、ガードを無視して相手の現在HPの70%を削る。"
  },

  yamada: {
    id: "yamada",
    name: "山田",
    hp: 110,
    atk: 50,
    spd: 60,
    gaugeMultiplier: 1,
    skill: "ヤマダノオロチ",
    skillDescription:
      "8秒ごとに最大HPの5%を回復する。",
    specialName: "デストロイモード起動",
    specialDescription:
      "最大HPの50%を回復し、8秒間ATK150・SPD130になる。パンチは30ダメージになり、強烈に吹き飛ばす。発動中はSPECIALゲージが増えない。"
  },

  sakurai: {
    id: "sakurai",
    name: "櫻井",
    hp: 140,
    atk: 40,
    spd: 100,
    gaugeMultiplier: 1,
    skill: "ポラリス壱",
    skillDescription:
      "パンチが命中したとき、30%の確率で相手を1秒間氷漬けにして行動不能にする。",
    specialName: "北極星　零",
    specialDescription:
      "敵の頭上へ青い隕石群を落とす必中攻撃。ガードを無視し、相手の現在残っているHPの60%を削る。"
  },

  sato: {
    id: "sato",
    name: "佐藤",
    hp: 120,
    atk: 70,
    spd: 120,
    gaugeMultiplier: 1,
    skill: "スロースターター",
    skillDescription:
      "バトル開始から20秒間は頭上にzzzが表示される。20秒経過すると目を覚まし、ATKが+50、最大HPが+70され、HPも70回復する。",
    specialName: "アブソリュート・レイト",
    specialDescription:
      "相手を30秒間弱体化する。ATKを40%ダウンさせ、SPDを30に固定する。効果中の相手は薄い青色になる。デバフが続いている30秒間、佐藤自身のSPECIALゲージは増加しない。"
  },

  tani: {
    id: "tani",
    name: "谷",
    hp: 200,
    atk: 180,
    spd: 150,
    gaugeMultiplier: 1,
    skill: "なし",
    skillDescription:
      "固有スキルを持たない。その代わり、非常に高い基礎ステータスを持つ。",
    specialName: "アッパー",
    specialDescription:
      "強烈なアッパーで敵を斜め上へ吹き飛ばす。落下した敵は地面に伏せて気絶し、攻撃を受けるまで起き上がれない。"
  },

  abe: {
    id: "abe",
    name: "安倍",
    hp: 300,
    atk: 10,
    spd: 70,
    gaugeMultiplier: 1,
    skill: "毒パーカー",
    skillDescription:
      "近くにいる敵へ毒を付与する。毒状態では3秒ごとに10ダメージを受け、効果時間は6秒。安倍の近くに居続ける限り効果時間は6秒に更新され続ける。毒は重複せず、毒ダメージはガードを無視する。",
    specialName: "冷笑",
    specialDescription:
      "必中。相手を10秒間凍結状態にする。凍結中は安倍自身のSPECIALゲージが一切増加しない。"
  }
};


const DIFFICULTIES = {
  easy: { name: "優", statBonus: 0 },
  normal: { name: "並", statBonus: 0 },
  hard: { name: "強", statBonus: 0 },
  oni: { name: "鬼", statBonus: 100 }
};


let selectedCharacterId = "kawakami";
let selectedCpuId = "kawakami";
let selectedDifficulty = "easy";


function getPlayerCharacter() {
  return CHARACTERS[selectedCharacterId];
}

function getCpuCharacter() {
  return CHARACTERS[selectedCpuId];
}


/* SCREEN */

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}


/* HOME */

document.getElementById("homeFight").addEventListener("click", () => {
  showScreen("modeScreen");
});

document.querySelectorAll(".back-button").forEach(button => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screen);
  });
});

document.getElementById("cpuBattle").addEventListener("click", () => {
  showScreen("selectScreen");
});


/* POPUPS */

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

function comingSoon(title, text) {
  popupTitle.textContent = title;
  popupText.innerHTML = text;
  popup.classList.add("show");
}

document.getElementById("playerBattle").addEventListener("click", () => {
  comingSoon("PLAYER BATTLE", "対人戦は現在準備中！");
});

document.getElementById("homeFighters").addEventListener("click", () => {
  comingSoon("FIGHTERS", "キャラクター一覧は現在開発中！");
});

document.getElementById("closePopup").addEventListener("click", () => {
  popup.classList.remove("show");
});


/* SELECT */

document.querySelectorAll(".player-card").forEach(card => {
  card.addEventListener("click", event => {
    if (event.target.classList.contains("detail-button")) return;

    selectedCharacterId = card.dataset.fighter;

    document.querySelectorAll(".player-card").forEach(other => {
      other.classList.remove("selected");
    });

    card.classList.add("selected");

    document.getElementById("selectedCharacterText").textContent =
      "SELECTED：" + getPlayerCharacter().name;
  });
});

document.getElementById("toCpuSelect").addEventListener("click", () => {
  showScreen("cpuSelectScreen");
});


document.querySelectorAll(".cpu-card").forEach(card => {
  card.addEventListener("click", () => {
    selectedCpuId = card.dataset.cpu;

    document.querySelectorAll(".cpu-card").forEach(other => {
      other.classList.remove("selected");
    });

    card.classList.add("selected");

    document.getElementById("selectedCpuText").textContent =
      "CPU：" + getCpuCharacter().name;
  });
});

document.getElementById("toDifficulty").addEventListener("click", () => {
  showScreen("difficultyScreen");
});


document.querySelectorAll(".difficulty-card").forEach(card => {
  card.addEventListener("click", () => {
    selectedDifficulty = card.dataset.difficulty;

    document.querySelectorAll(".difficulty-card").forEach(other => {
      other.classList.remove("selected");
    });

    card.classList.add("selected");

    document.getElementById("difficultyText").textContent =
      "CPU LEVEL：" + DIFFICULTIES[selectedDifficulty].name;
  });
});


/* DETAILS */

const detailPopup = document.getElementById("characterDetailPopup");

document.querySelectorAll(".detail-button").forEach(button => {
  button.addEventListener("click", event => {
    event.stopPropagation();

    const character = CHARACTERS[button.dataset.detail];

    document.getElementById("detailName").textContent = character.name;
    document.getElementById("detailHP").textContent = character.hp;
    document.getElementById("detailATK").textContent = character.atk;
    document.getElementById("detailSPD").textContent = character.spd;
    document.getElementById("detailSkill").textContent = character.skill;
    document.getElementById("detailSkillDescription").textContent =
      character.skillDescription;
    document.getElementById("detailSpecial").textContent =
      character.specialName;
    document.getElementById("detailSpecialDescription").textContent =
      character.specialDescription;

    document.querySelector(".detail-scroll").scrollTop = 0;
    detailPopup.classList.add("show");
  });
});

document.getElementById("closeCharacterDetail").addEventListener("click", () => {
  detailPopup.classList.remove("show");
});


/* DOM */

const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const arena = document.getElementById("arena");

const beamLayer = document.getElementById("beamLayer");
const meteorLayer = document.getElementById("meteorLayer");

const playerHPBar = document.getElementById("playerHP");
const enemyHPBar = document.getElementById("enemyHP");

const playerGaugeBar = document.getElementById("playerGauge");
const enemyGaugeBar = document.getElementById("enemyGauge");

const playerExtremeFrame = document.getElementById("playerExtremeFrame");
const enemyExtremeFrame = document.getElementById("enemyExtremeFrame");
const playerExtremeGaugeBar = document.getElementById("playerExtremeGauge");
const enemyExtremeGaugeBar = document.getElementById("enemyExtremeGauge");

const specialButton = document.getElementById("special");
const message = document.getElementById("message");
const hitText = document.getElementById("hitText");

const resultPopup = document.getElementById("resultPopup");
const resultText = document.getElementById("resultText");


/* STATE */

let playerX = 120;
let enemyX = 600;
let playerY = 0;
let enemyY = 0;

let playerVelocityY = 0;
let enemyVelocityY = 0;

let playerHorizontalVelocity = 0;
let enemyHorizontalVelocity = 0;

let playerJumpCount = 0;

let playerHP = 100;
let enemyHP = 100;

let playerGauge = 0;
let enemyGauge = 0;

let playerExtremeGauge = 0;
let enemyExtremeGauge = 0;

let moveLeft = false;
let moveRight = false;

let playerAttacking = false;
let enemyAttacking = false;

let playerStunned = false;
let enemyStunned = false;

let playerGuarding = false;
let enemyGuarding = false;

let playerDestroy = false;
let enemyDestroy = false;

let playerFrozen = false;
let enemyFrozen = false;

let playerUppercutFlying = false;
let enemyUppercutFlying = false;

let playerKnockedDown = false;
let enemyKnockedDown = false;

let playerSlowStarterActive = false;
let enemySlowStarterActive = false;

let playerAbsoluteLateDebuff = false;
let enemyAbsoluteLateDebuff = false;

let playerSatoSpecialLock = false;
let enemySatoSpecialLock = false;


/* 安倍 */

let playerPoisoned = false;
let enemyPoisoned = false;

let playerPoisonExpire = 0;
let enemyPoisonExpire = 0;

let playerLastPoisonDamage = 0;
let enemyLastPoisonDamage = 0;

let playerAbeSpecialLock = false;
let enemyAbeSpecialLock = false;

let playerAbeFreezeTimer = null;
let enemyAbeFreezeTimer = null;


let playerSlowStarterTimer = null;
let enemySlowStarterTimer = null;

let playerDebuffTimer = null;
let enemyDebuffTimer = null;

let yamadaPlayerHealTimer = null;
let yamadaEnemyHealTimer = null;

let playerDestroyTimer = null;
let enemyDestroyTimer = null;

let playerFreezeTimer = null;
let enemyFreezeTimer = null;

let cpuDecisionCooldown = 0;

let battleRunning = false;
let gameOver = true;

const fighterWidth = 72;
const bodyDistance = 65;
const gravity = .8;
const passOverHeight = 38;

const ABE_POISON_RANGE = 125;
const ABE_POISON_DURATION = 6000;
const ABE_POISON_INTERVAL = 3000;
const ABE_POISON_DAMAGE = 10;


/* HP */

function getPlayerMaxHP() {
  let hp = getPlayerCharacter().hp;

  if (selectedCharacterId === "sato" && playerSlowStarterActive) {
    hp += 70;
  }

  return hp;
}

function getEnemyBaseHP() {
  let hp =
    getCpuCharacter().hp +
    DIFFICULTIES[selectedDifficulty].statBonus;

  if (selectedCpuId === "sato" && enemySlowStarterActive) {
    hp += 70;
  }

  return hp;
}


/* STATS */

function getPlayerATK() {
  let atk =
    selectedCharacterId === "yamada" && playerDestroy
      ? 150
      : getPlayerCharacter().atk;

  if (selectedCharacterId === "sato" && playerSlowStarterActive) {
    atk += 50;
  }

  if (playerAbsoluteLateDebuff) {
    atk *= .6;
  }

  return atk;
}

function getPlayerSPD() {
  if (playerAbsoluteLateDebuff) return 30;
  if (selectedCharacterId === "yamada" && playerDestroy) return 130;
  return getPlayerCharacter().spd;
}

function getEnemyATK() {
  const character = getCpuCharacter();
  const bonus = DIFFICULTIES[selectedDifficulty].statBonus;

  let atk =
    character.id === "yamada" && enemyDestroy
      ? 150 + bonus
      : character.atk + bonus;

  if (character.id === "sato" && enemySlowStarterActive) {
    atk += 50;
  }

  if (enemyAbsoluteLateDebuff) {
    atk *= .6;
  }

  return atk;
}

function getEnemySPD() {
  const character = getCpuCharacter();
  const bonus = DIFFICULTIES[selectedDifficulty].statBonus;

  if (enemyAbsoluteLateDebuff) return 30;
  if (character.id === "yamada" && enemyDestroy) return 130 + bonus;

  return character.spd + bonus;
}

function playerSpeed() {
  return 1.8 + getPlayerSPD() * .03;
}

function enemySpeed() {
  return 1.5 + getEnemySPD() * .025;
}

function playerPunchDamage() {
  if (selectedCharacterId === "yamada" && playerDestroy) {
    return Math.max(
      1,
      Math.round(30 * (playerAbsoluteLateDebuff ? .6 : 1))
    );
  }

  return Math.max(1, Math.round(6 * getPlayerATK() / 80));
}

function playerKickDamage() {
  return Math.max(1, Math.round(10 * getPlayerATK() / 80));
}

function enemyPunchDamage() {
  if (selectedCpuId === "yamada" && enemyDestroy) {
    return Math.max(
      1,
      Math.round(30 * (enemyAbsoluteLateDebuff ? .6 : 1))
    );
  }

  return Math.max(1, Math.round(6 * getEnemyATK() / 80));
}

function enemyKickDamage() {
  return Math.max(1, Math.round(10 * getEnemyATK() / 80));
}


/* GAUGE */

function addPlayerGauge(amount) {
  if (selectedCharacterId === "yamada" && playerDestroy) return;
  if (selectedCharacterId === "sato" && playerSatoSpecialLock) return;

  /* 安倍の冷笑で敵が凍っている間 */
  if (selectedCharacterId === "abe" && playerAbeSpecialLock) return;

  if (selectedCharacterId === "okazaki" && playerGauge >= 100) return;

  playerGauge += amount * getPlayerCharacter().gaugeMultiplier;
  playerGauge = Math.min(100, playerGauge);
}

function addEnemyGauge(amount) {
  if (selectedCpuId === "yamada" && enemyDestroy) return;
  if (selectedCpuId === "sato" && enemySatoSpecialLock) return;

  /* CPU安倍の冷笑中 */
  if (selectedCpuId === "abe" && enemyAbeSpecialLock) return;

  if (selectedCpuId === "okazaki" && enemyGauge >= 100) return;

  enemyGauge += amount * getCpuCharacter().gaugeMultiplier;
  enemyGauge = Math.min(100, enemyGauge);
}

function addPlayerExtremeGauge(amount) {
  if (
    selectedCharacterId !== "okazaki" ||
    playerGauge < 100 ||
    playerExtremeGauge >= 100
  ) return;

  playerExtremeGauge = Math.min(100, playerExtremeGauge + amount);

  if (playerExtremeGauge >= 100) {
    showHit("極 READY!");
  }
}

function addEnemyExtremeGauge(amount) {
  if (
    selectedCpuId !== "okazaki" ||
    enemyGauge < 100 ||
    enemyExtremeGauge >= 100
  ) return;

  enemyExtremeGauge = Math.min(100, enemyExtremeGauge + amount);
}


/* START */

document.getElementById("startFight").addEventListener("click", () => {
  showScreen("battleScreen");

  requestAnimationFrame(() => {
    requestAnimationFrame(startBattle);
  });
});


function clearBattleTimers() {
  clearInterval(yamadaPlayerHealTimer);
  clearInterval(yamadaEnemyHealTimer);

  clearTimeout(playerDestroyTimer);
  clearTimeout(enemyDestroyTimer);

  clearTimeout(playerFreezeTimer);
  clearTimeout(enemyFreezeTimer);

  clearTimeout(playerSlowStarterTimer);
  clearTimeout(enemySlowStarterTimer);

  clearTimeout(playerDebuffTimer);
  clearTimeout(enemyDebuffTimer);

  clearTimeout(playerAbeFreezeTimer);
  clearTimeout(enemyAbeFreezeTimer);
}


function startBattle() {
  clearBattleTimers();

  const playerCharacter = getPlayerCharacter();
  const enemyCharacter = getCpuCharacter();

  playerSlowStarterActive = false;
  enemySlowStarterActive = false;

  playerAbsoluteLateDebuff = false;
  enemyAbsoluteLateDebuff = false;

  playerSatoSpecialLock = false;
  enemySatoSpecialLock = false;

  playerAbeSpecialLock = false;
  enemyAbeSpecialLock = false;

  playerPoisoned = false;
  enemyPoisoned = false;

  playerPoisonExpire = 0;
  enemyPoisonExpire = 0;

  playerLastPoisonDamage = 0;
  enemyLastPoisonDamage = 0;

  playerUppercutFlying = false;
  enemyUppercutFlying = false;

  playerKnockedDown = false;
  enemyKnockedDown = false;

  playerHorizontalVelocity = 0;
  enemyHorizontalVelocity = 0;

  playerExtremeGauge = 0;
  enemyExtremeGauge = 0;

  player.className = "fighter " + playerCharacter.id;
  enemy.className = "fighter enemy " + enemyCharacter.id;

  document.getElementById("battlePlayerName").textContent =
    playerCharacter.name;

  document.getElementById("battleEnemyName").textContent =
    enemyCharacter.name + " CPU・" + DIFFICULTIES[selectedDifficulty].name;

  const arenaWidth = arena.getBoundingClientRect().width;

  playerX = arenaWidth * .18;
  enemyX = arenaWidth * .72;

  playerY = 0;
  enemyY = 0;

  playerVelocityY = 0;
  enemyVelocityY = 0;

  playerJumpCount = 0;

  playerHP = playerCharacter.hp;
  enemyHP =
    enemyCharacter.hp +
    DIFFICULTIES[selectedDifficulty].statBonus;

  playerGauge = 0;
  enemyGauge = 0;

  moveLeft = false;
  moveRight = false;

  playerAttacking = false;
  enemyAttacking = false;

  playerStunned = false;
  enemyStunned = false;

  playerGuarding = false;
  enemyGuarding = false;

  playerDestroy = false;
  enemyDestroy = false;

  playerFrozen = false;
  enemyFrozen = false;

  beamLayer.innerHTML = "";
  meteorLayer.innerHTML = "";

  cpuDecisionCooldown = 0;

  battleRunning = true;
  gameOver = false;

  resetPose(player);
  resetPose(enemy);

  if (playerCharacter.id === "sato") {
    player.classList.add("sleeping");
    playerSlowStarterTimer =
      setTimeout(activatePlayerSlowStarter, 20000);
  }

  if (enemyCharacter.id === "sato") {
    enemy.classList.add("sleeping");
    enemySlowStarterTimer =
      setTimeout(activateEnemySlowStarter, 20000);
  }

  updatePositions();
  updateHUD();

  message.textContent = "FIGHT!";
  message.style.display = "block";

  setTimeout(() => {
    if (!gameOver) message.style.display = "none";
  }, 800);


  if (playerCharacter.id === "yamada") {
    yamadaPlayerHealTimer = setInterval(() => {
      if (!battleRunning || gameOver) return;

      playerHP = Math.min(
        getPlayerMaxHP(),
        playerHP + getPlayerMaxHP() * .05
      );

      updateHUD();
    }, 8000);
  }


  if (enemyCharacter.id === "yamada") {
    yamadaEnemyHealTimer = setInterval(() => {
      if (!battleRunning || gameOver) return;

      const maxHP = getEnemyBaseHP();

      enemyHP = Math.min(
        maxHP,
        enemyHP + maxHP * .05
      );

      updateHUD();
    }, 8000);
  }
}


/* SATO */

function activatePlayerSlowStarter() {
  if (
    gameOver ||
    !battleRunning ||
    selectedCharacterId !== "sato" ||
    playerSlowStarterActive
  ) return;

  playerSlowStarterActive = true;
  player.classList.remove("sleeping");

  playerHP = Math.min(
    getPlayerMaxHP(),
    playerHP + 70
  );

  showHit("WAKE UP! ATK +50 / HP +70");
  updateHUD();
}

function activateEnemySlowStarter() {
  if (
    gameOver ||
    !battleRunning ||
    selectedCpuId !== "sato" ||
    enemySlowStarterActive
  ) return;

  enemySlowStarterActive = true;
  enemy.classList.remove("sleeping");

  enemyHP = Math.min(
    getEnemyBaseHP(),
    enemyHP + 70
  );

  showHit("CPU WAKE UP!");
  updateHUD();
}


/* 安倍 毒パーカー */

function updateAbePoison(now) {
  if (!battleRunning || gameOver) return;

  /*
    プレイヤーが安倍:
    敵が範囲内なら毒6秒を更新し続ける
  */
  if (
    selectedCharacterId === "abe" &&
    distance() <= ABE_POISON_RANGE
  ) {
    if (!enemyPoisoned) {
      enemyPoisoned = true;
      enemyLastPoisonDamage = now;
      enemy.classList.add("poisoned");
      showHit("POISON");
    }

    enemyPoisonExpire = now + ABE_POISON_DURATION;
  }


  /*
    CPUが安倍
  */
  if (
    selectedCpuId === "abe" &&
    distance() <= ABE_POISON_RANGE
  ) {
    if (!playerPoisoned) {
      playerPoisoned = true;
      playerLastPoisonDamage = now;
      player.classList.add("poisoned");
      showHit("POISON");
    }

    playerPoisonExpire = now + ABE_POISON_DURATION;
  }


  /*
    敵への毒継続ダメージ
    ガード完全無視
  */
  if (enemyPoisoned) {
    if (now >= enemyPoisonExpire) {
      enemyPoisoned = false;
      enemy.classList.remove("poisoned");
    }

    else if (
      now - enemyLastPoisonDamage >=
      ABE_POISON_INTERVAL
    ) {
      enemyLastPoisonDamage = now;

      enemyHP -= ABE_POISON_DAMAGE;

      enemy.classList.add("hurt");

      showHit("POISON -10");

      setTimeout(() => {
        enemy.classList.remove("hurt");
      }, 180);

      updateHUD();
    }
  }


  /*
    プレイヤーへの毒
  */
  if (playerPoisoned) {
    if (now >= playerPoisonExpire) {
      playerPoisoned = false;
      player.classList.remove("poisoned");
    }

    else if (
      now - playerLastPoisonDamage >=
      ABE_POISON_INTERVAL
    ) {
      playerLastPoisonDamage = now;

      playerHP -= ABE_POISON_DAMAGE;

      player.classList.add("hurt");

      showHit("POISON -10");

      setTimeout(() => {
        player.classList.remove("hurt");
      }, 180);

      updateHUD();
    }
  }
}


/* POSE */

function resetPose(fighter) {
  fighter.classList.remove(
    "headbutt-windup",
    "headbutt-strike",
    "uppercut-windup",
    "uppercut-strike",
    "guarding"
  );

  fighter.querySelector(".arm-left").style.transform = "rotate(12deg)";
  fighter.querySelector(".arm-right").style.transform = "rotate(-15deg)";
  fighter.querySelector(".leg-right").style.transform = "rotate(-5deg)";
}


/* POSITION */

function facingRight() {
  return playerX < enemyX;
}

function updatePositions() {
  let width = arena.getBoundingClientRect().width;

  if (width < 100) width = window.innerWidth;

  const maxX = Math.max(0, width - fighterWidth);

  playerX = Math.max(0, Math.min(maxX, playerX));
  enemyX = Math.max(0, Math.min(maxX, enemyX));

  player.style.left = playerX + "px";
  enemy.style.left = enemyX + "px";

  player.style.bottom = (14 + playerY) + "px";
  enemy.style.bottom = (14 + enemyY) + "px";

  if (!playerKnockedDown) {
    player.style.transform =
      facingRight() ? "scaleX(1)" : "scaleX(-1)";
  } else {
    player.style.transform = "";
  }

  if (!enemyKnockedDown) {
    enemy.style.transform =
      facingRight() ? "scaleX(-1)" : "scaleX(1)";
  } else {
    enemy.style.transform = "";
  }
}

function distance() {
  return Math.abs(playerX - enemyX);
}

function canPlayerMove(newX) {
  if (
    playerY >= passOverHeight ||
    enemyY >= passOverHeight ||
    enemyKnockedDown
  ) return true;

  if (playerX < enemyX) {
    return newX + bodyDistance <= enemyX;
  }

  return newX - bodyDistance >= enemyX;
}


/* HUD */

function updateHUD() {
  const playerMax = getPlayerMaxHP();
  const enemyMax = getEnemyBaseHP();

  playerHP = Math.max(0, Math.min(playerMax, playerHP));
  enemyHP = Math.max(0, Math.min(enemyMax, enemyHP));

  playerGauge = Math.max(0, Math.min(100, playerGauge));
  enemyGauge = Math.max(0, Math.min(100, enemyGauge));

  playerExtremeGauge =
    Math.max(0, Math.min(100, playerExtremeGauge));

  enemyExtremeGauge =
    Math.max(0, Math.min(100, enemyExtremeGauge));

  playerHPBar.style.width =
    (playerHP / playerMax * 100) + "%";

  enemyHPBar.style.width =
    (enemyHP / enemyMax * 100) + "%";

  playerGaugeBar.style.width = playerGauge + "%";
  enemyGaugeBar.style.width = enemyGauge + "%";

  playerExtremeGaugeBar.style.width =
    playerExtremeGauge + "%";

  enemyExtremeGaugeBar.style.width =
    enemyExtremeGauge + "%";

  playerExtremeFrame.classList.toggle(
    "active",
    selectedCharacterId === "okazaki"
  );

  enemyExtremeFrame.classList.toggle(
    "active",
    selectedCpuId === "okazaki"
  );

  playerExtremeFrame.classList.toggle(
    "full",
    selectedCharacterId === "okazaki" &&
    playerExtremeGauge >= 100
  );

  enemyExtremeFrame.classList.toggle(
    "full",
    selectedCpuId === "okazaki" &&
    enemyExtremeGauge >= 100
  );

  specialButton.classList.remove("ready", "extreme-ready");

  if (
    selectedCharacterId === "okazaki" &&
    playerGauge >= 100 &&
    playerExtremeGauge >= 100 &&
    !playerKnockedDown
  ) {
    specialButton.classList.add("extreme-ready");
    specialButton.textContent = "すね毛ビーム・極";
  }

  else if (
    playerGauge >= 100 &&
    !playerDestroy &&
    !playerKnockedDown
  ) {
    specialButton.classList.add("ready");

    specialButton.textContent =
      selectedCharacterId === "okazaki"
        ? "すね毛ビーム"
        : getPlayerCharacter().specialName;
  }

  else {
    specialButton.textContent =
      playerDestroy ? "DESTROY" : "SPECIAL";
  }

  if (enemyHP <= 0) finishGame("YOU WIN!");
  if (playerHP <= 0) finishGame("YOU LOSE");
}


/* TEXT */

let hitTimer = null;

function showHit(text) {
  hitText.textContent = text;

  clearTimeout(hitTimer);

  hitTimer = setTimeout(() => {
    hitText.textContent = "";
  }, 450);
}


/* KNOCKDOWN */

function knockDownEnemy() {
  enemyUppercutFlying = false;
  enemyHorizontalVelocity = 0;

  enemyY = 0;
  enemyVelocityY = 0;

  enemyKnockedDown = true;
  enemyStunned = true;
  enemyGuarding = false;
  enemyAttacking = false;

  enemy.classList.remove("uppercut-launched", "guarding");
  enemy.classList.add("knocked-down");

  showHit("KNOCK DOWN!");
  updatePositions();
}

function knockDownPlayer() {
  playerUppercutFlying = false;
  playerHorizontalVelocity = 0;

  playerY = 0;
  playerVelocityY = 0;

  playerKnockedDown = true;
  playerStunned = true;
  playerGuarding = false;
  playerAttacking = false;

  player.classList.remove("uppercut-launched", "guarding");
  player.classList.add("knocked-down");

  showHit("KNOCK DOWN!");
  updatePositions();
}

function wakeEnemyFromKnockDown() {
  if (!enemyKnockedDown) return;

  enemyKnockedDown = false;
  enemyStunned = false;

  enemy.classList.remove("knocked-down");

  resetPose(enemy);
  updatePositions();
}

function wakePlayerFromKnockDown() {
  if (!playerKnockedDown) return;

  playerKnockedDown = false;
  playerStunned = false;

  player.classList.remove("knocked-down");

  resetPose(player);
  updatePositions();
}


/* FREEZE */

function freezeEnemy() {
  if (
    gameOver ||
    enemyKnockedDown ||
    enemyUppercutFlying
  ) return;

  clearTimeout(enemyFreezeTimer);

  enemyFrozen = true;
  enemyStunned = true;
  enemyGuarding = false;

  enemy.classList.remove("guarding");
  enemy.classList.add("frozen");

  showHit("FREEZE!");

  enemyFreezeTimer = setTimeout(() => {
    enemyFrozen = false;

    if (!enemyKnockedDown) {
      enemyStunned = false;
    }

    enemy.classList.remove("frozen");
  }, 1000);
}

function freezePlayer() {
  if (
    gameOver ||
    playerKnockedDown ||
    playerUppercutFlying
  ) return;

  clearTimeout(playerFreezeTimer);

  playerFrozen = true;
  playerStunned = true;
  playerGuarding = false;

  player.classList.remove("guarding");
  player.classList.add("frozen");

  showHit("FREEZE!");

  playerFreezeTimer = setTimeout(() => {
    playerFrozen = false;

    if (!playerKnockedDown) {
      playerStunned = false;
    }

    player.classList.remove("frozen");
  }, 1000);
}


/* 安倍 冷笑 */

function playerColdLaugh() {
  playerAttacking = true;

  message.textContent = "冷笑";
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";

    /*
      必中。
      櫻井と同じ氷結演出。
    */
    clearTimeout(enemyFreezeTimer);
    clearTimeout(enemyAbeFreezeTimer);

    enemyFrozen = true;
    enemyStunned = true;
    enemyGuarding = false;
    enemyAttacking = false;

    enemy.classList.remove("guarding");
    enemy.classList.add("frozen");

    /*
      この10秒間は安倍のゲージ増加禁止
    */
    playerAbeSpecialLock = true;

    showHit("冷笑・FREEZE 10s");

    enemyAbeFreezeTimer = setTimeout(() => {
      enemyFrozen = false;

      if (!enemyKnockedDown) {
        enemyStunned = false;
      }

      enemy.classList.remove("frozen");

      playerAbeSpecialLock = false;
    }, 10000);

    playerAttacking = false;

  }, 350);
}


function cpuColdLaugh() {
  enemyAttacking = true;

  message.textContent = "CPU 冷笑";
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";

    clearTimeout(playerFreezeTimer);
    clearTimeout(playerAbeFreezeTimer);

    playerFrozen = true;
    playerStunned = true;
    playerGuarding = false;
    playerAttacking = false;

    player.classList.remove("guarding");
    player.classList.add("frozen");

    enemyAbeSpecialLock = true;

    showHit("CPU 冷笑・FREEZE 10s");

    playerAbeFreezeTimer = setTimeout(() => {
      playerFrozen = false;

      if (!playerKnockedDown) {
        playerStunned = false;
      }

      player.classList.remove("frozen");

      enemyAbeSpecialLock = false;
    }, 10000);

    enemyAttacking = false;

  }, 350);
}


/* STUN */

function stunEnemy(duration, knockback) {
  if (enemyKnockedDown) {
    wakeEnemyFromKnockDown();
    return;
  }

  enemyStunned = true;
  enemyGuarding = false;

  enemy.classList.remove("guarding");
  enemy.classList.add("hurt");

  if (enemyX > playerX) {
    enemyX += knockback;
  } else {
    enemyX -= knockback;
  }

  updatePositions();

  setTimeout(() => {
    enemy.classList.remove("hurt");

    if (
      !enemyFrozen &&
      !enemyKnockedDown &&
      !enemyUppercutFlying
    ) {
      enemyStunned = false;
    }
  }, duration);
}

function stunPlayer(duration, knockback) {
  if (playerKnockedDown) {
    wakePlayerFromKnockDown();
    return;
  }

  playerStunned = true;
  playerGuarding = false;

  player.classList.remove("guarding");
  player.classList.add("hurt");

  if (playerX < enemyX) {
    playerX -= knockback;
  } else {
    playerX += knockback;
  }

  updatePositions();

  setTimeout(() => {
    player.classList.remove("hurt");

    if (
      !playerFrozen &&
      !playerKnockedDown &&
      !playerUppercutFlying
    ) {
      playerStunned = false;
    }
  }, duration);
}


/* CONTROLS */

function holdButton(button, start, end) {
  button.addEventListener("pointerdown", event => {
    event.preventDefault();
    button.classList.add("pressed");
    start();
  });

  function release() {
    button.classList.remove("pressed");
    end();
  }

  button.addEventListener("pointerup", release);
  button.addEventListener("pointercancel", release);
  button.addEventListener("pointerleave", release);
}

holdButton(
  document.getElementById("left"),
  () => moveLeft = true,
  () => moveLeft = false
);

holdButton(
  document.getElementById("right"),
  () => moveRight = true,
  () => moveRight = false
);


document.getElementById("jump").addEventListener("pointerdown", event => {
  event.preventDefault();

  if (
    gameOver ||
    playerStunned ||
    playerFrozen ||
    playerAttacking ||
    playerGuarding ||
    playerKnockedDown ||
    playerUppercutFlying ||
    playerJumpCount >= 2
  ) return;

  playerJumpCount++;
  playerVelocityY = 14;
});


holdButton(
  document.getElementById("guard"),

  () => {
    if (
      gameOver ||
      playerStunned ||
      playerFrozen ||
      playerAttacking ||
      playerKnockedDown ||
      playerUppercutFlying
    ) return;

    playerGuarding = true;
    player.classList.add("guarding");
  },

  () => {
    playerGuarding = false;
    player.classList.remove("guarding");
  }
);


/* PLAYER PUNCH */

document.getElementById("punch").addEventListener("pointerdown", event => {
  event.preventDefault();

  if (
    gameOver ||
    playerAttacking ||
    playerStunned ||
    playerFrozen ||
    playerGuarding ||
    playerKnockedDown ||
    playerUppercutFlying
  ) return;

  playerAttacking = true;

  const arm = player.querySelector(".arm-right");
  arm.style.transform = "rotate(-90deg)";

  setTimeout(() => {
    if (distance() < 108 && !gameOver) {
      const wasKnockedDown = enemyKnockedDown;

      if (enemyGuarding && !wasKnockedDown) {
        enemyHP -= selectedCpuId === "kawakami" ? 1 : 3;

        addEnemyGauge(4);
        showHit("BLOCK!");
      }

      else {
        const destroyPunch =
          selectedCharacterId === "yamada" &&
          playerDestroy;

        enemyHP -= playerPunchDamage();

        if (
          selectedCharacterId === "okazaki" &&
          playerGauge >= 100
        ) {
          addPlayerExtremeGauge(12);
        } else {
          addPlayerGauge(12);
        }

        addEnemyGauge(5);

        if (wasKnockedDown) {
          wakeEnemyFromKnockDown();
        }

        else if (destroyPunch) {
          showHit("DESTROY PUNCH!!");
          stunEnemy(650, 240);
        }

        else {
          showHit("HIT!");
          stunEnemy(260, 18);

          if (
            selectedCharacterId === "sakurai" &&
            Math.random() < .30
          ) {
            freezeEnemy();
          }
        }
      }

      updateHUD();
    }
  }, 70);

  setTimeout(() => {
    arm.style.transform = "rotate(-15deg)";
    playerAttacking = false;
  }, 240);
});


/* PLAYER KICK */

document.getElementById("kick").addEventListener("pointerdown", event => {
  event.preventDefault();

  if (
    gameOver ||
    playerAttacking ||
    playerStunned ||
    playerFrozen ||
    playerGuarding ||
    playerKnockedDown ||
    playerUppercutFlying
  ) return;

  playerAttacking = true;

  const leg = player.querySelector(".leg-right");
  leg.style.transform = "rotate(-75deg)";

  setTimeout(() => {
    if (distance() < 125 && !gameOver) {
      const wasKnockedDown = enemyKnockedDown;

      if (enemyGuarding && !wasKnockedDown) {
        enemyHP -= selectedCpuId === "kawakami" ? 1 : 3;

        addEnemyGauge(5);
        showHit("BLOCK!");
      }

      else {
        enemyHP -= playerKickDamage();

        if (
          selectedCharacterId === "okazaki" &&
          playerGauge >= 100
        ) {
          addPlayerExtremeGauge(18);
        } else {
          addPlayerGauge(18);
        }

        addEnemyGauge(8);

        if (wasKnockedDown) {
          wakeEnemyFromKnockDown();
        } else {
          showHit("HEAVY!");
          stunEnemy(420, 35);
        }
      }

      updateHUD();
    }
  }, 120);

  setTimeout(() => {
    leg.style.transform = "rotate(-5deg)";
    playerAttacking = false;
  }, 390);
});


/* PLAYER SPECIAL */

specialButton.addEventListener("pointerdown", event => {
  event.preventDefault();

  if (
    gameOver ||
    playerGauge < 100 ||
    playerAttacking ||
    playerStunned ||
    playerFrozen ||
    playerGuarding ||
    playerDestroy ||
    playerKnockedDown ||
    playerUppercutFlying
  ) return;


  if (
    selectedCharacterId === "okazaki" &&
    playerExtremeGauge >= 100
  ) {
    playerGauge = 0;
    playerExtremeGauge = 0;

    playerExtremeBeam();
    updateHUD();
    return;
  }


  playerGauge = 0;

  if (selectedCharacterId === "okazaki") {
    playerExtremeGauge = 0;
  }


  switch (selectedCharacterId) {
    case "kawakami":
      playerHeadbutt();
      break;

    case "okazaki":
      playerBeam();
      break;

    case "yamada":
      playerDestroyMode();
      break;

    case "sakurai":
      playerPolarisZero();
      break;

    case "sato":
      playerAbsoluteLate();
      break;

    case "tani":
      playerUppercut();
      break;

    case "abe":
      playerColdLaugh();
      break;
  }

  updateHUD();
});


/* HEADBUTT */

function playerHeadbutt() {
  playerAttacking = true;

  const direction = facingRight();

  player.classList.add("headbutt-windup");

  message.textContent = "頭突き！";
  message.style.display = "block";

  setTimeout(() => {
    player.classList.remove("headbutt-windup");
    player.classList.add("headbutt-strike");

    message.style.display = "none";

    playerX += direction ? 24 : -24;

    updatePositions();

    if (distance() <= 145 && enemyY < 65) {
      const wasKnockedDown = enemyKnockedDown;

      if (enemyGuarding && !wasKnockedDown) {
        enemyHP -= selectedCpuId === "kawakami" ? 1 : 3;
        showHit("BLOCK!");
      } else {
        enemyHP -= 30;

        if (wasKnockedDown) {
          wakeEnemyFromKnockDown();
        } else {
          stunEnemy(900, 105);
          showHit("HEADBUTT!!");
        }
      }

      updateHUD();
    }
  }, 280);

  setTimeout(() => {
    player.classList.remove(
      "headbutt-strike",
      "headbutt-windup"
    );

    resetPose(player);
    playerAttacking = false;
  }, 780);
}


/* 谷 */

function playerUppercut() {
  playerAttacking = true;

  const shootRight = facingRight();

  message.textContent = "アッパー！";
  message.style.display = "block";

  player.classList.add("uppercut-windup");

  setTimeout(() => {
    player.classList.remove("uppercut-windup");
    player.classList.add("uppercut-strike");

    message.style.display = "none";

    if (
      distance() <= 125 &&
      enemyY < 55 &&
      !gameOver
    ) {
      if (enemyGuarding) {
        enemyHP -= selectedCpuId === "kawakami" ? 1 : 3;
        showHit("BLOCK!");
      } else {
        enemyHP -= 25;
        launchEnemyByUppercut(shootRight);
        showHit("UPPERCUT!!");
      }

      updateHUD();
    }
  }, 220);

  setTimeout(() => {
    player.classList.remove(
      "uppercut-strike",
      "uppercut-windup"
    );

    resetPose(player);
    playerAttacking = false;
  }, 650);
}

function launchEnemyByUppercut(toRight) {
  enemyGuarding = false;
  enemyAttacking = false;
  enemyStunned = true;
  enemyFrozen = false;

  enemy.classList.remove(
    "guarding",
    "frozen",
    "knocked-down"
  );

  enemyKnockedDown = false;
  enemyUppercutFlying = true;

  enemyVelocityY = 18;
  enemyHorizontalVelocity = toRight ? 8 : -8;

  enemy.classList.add("uppercut-launched");
}


/* NORMAL BEAM */

function createShinBeam(shooterX, shooterY, shootRight) {
  const arenaWidth = arena.getBoundingClientRect().width;

  const beamY =
    arena.getBoundingClientRect().height -
    14 -
    shooterY -
    55;

  const startX =
    shootRight ? shooterX + 48 : shooterX + 24;

  const beamWidth =
    shootRight
      ? Math.max(0, arenaWidth - startX)
      : Math.max(0, startX);

  const beam = document.createElement("div");

  beam.className =
    "shin-beam" + (shootRight ? "" : " reverse");

  beam.style.top = beamY + "px";
  beam.style.width = beamWidth + "px";

  if (shootRight) {
    beam.style.left = startX + "px";
  } else {
    beam.style.left = "0px";
  }

  const glow = document.createElement("div");
  glow.className = "shin-beam-glow";

  const core = document.createElement("div");
  core.className = "shin-beam-core";

  const start = document.createElement("div");
  start.className = "shin-beam-start";

  beam.appendChild(glow);
  beam.appendChild(core);
  beam.appendChild(start);

  beamLayer.appendChild(beam);

  setTimeout(() => beam.remove(), 500);
}

function playerBeam() {
  playerAttacking = true;

  message.textContent = "すね毛ビーム！";
  message.style.display = "block";

  const shootRight = facingRight();

  setTimeout(() => {
    createShinBeam(playerX, playerY, shootRight);

    message.style.display = "none";

    const enemyInFront =
      shootRight
        ? enemyX > playerX
        : enemyX < playerX;

    if (enemyInFront && enemyY < 55) {
      const wasKnockedDown = enemyKnockedDown;

      if (enemyGuarding && !wasKnockedDown) {
        enemyHP -= selectedCpuId === "kawakami" ? 1 : 3;
        showHit("BLOCK!");
      } else {
        enemyHP -= 18;

        if (wasKnockedDown) {
          wakeEnemyFromKnockDown();
        } else {
          stunEnemy(520, 40);
        }

        showHit("BEAM HIT!");
      }

      updateHUD();
    }
  }, 350);

  setTimeout(() => {
    playerAttacking = false;
  }, 750);
}


/* EXTREME BEAM */

function createExtremeBeam(shooterX, shooterY, shootRight) {
  const arenaWidth = arena.getBoundingClientRect().width;
  const arenaHeight = arena.getBoundingClientRect().height;

  const beamTop =
    arenaHeight -
    14 -
    shooterY -
    150;

  const startX =
    shootRight ? shooterX + 42 : shooterX + 30;

  const beamWidth =
    shootRight
      ? Math.max(0, arenaWidth - startX)
      : Math.max(0, startX);

  const beam = document.createElement("div");

  beam.className =
    "extreme-beam" + (shootRight ? "" : " reverse");

  beam.style.top = beamTop + "px";
  beam.style.width = beamWidth + "px";

  if (shootRight) {
    beam.style.left = startX + "px";
  } else {
    beam.style.left = "0px";
  }

  const glow = document.createElement("div");
  glow.className = "extreme-beam-glow";

  const outer = document.createElement("div");
  outer.className = "extreme-beam-outer";

  const core = document.createElement("div");
  core.className = "extreme-beam-core";

  const start = document.createElement("div");
  start.className = "extreme-beam-start";

  beam.appendChild(glow);
  beam.appendChild(outer);
  beam.appendChild(core);
  beam.appendChild(start);

  beamLayer.appendChild(beam);

  setTimeout(() => beam.remove(), 850);
}

function playerExtremeBeam() {
  playerAttacking = true;

  const shootRight = facingRight();

  message.textContent = "すね毛ビーム・極";
  message.style.display = "block";

  setTimeout(() => {
    createExtremeBeam(playerX, playerY, shootRight);

    message.style.display = "none";

    const enemyInFront =
      shootRight
        ? enemyX > playerX
        : enemyX < playerX;

    if (enemyInFront) {
      const damage = enemyHP * .70;

      enemyHP -= damage;

      if (enemyKnockedDown) {
        wakeEnemyFromKnockDown();
      }

      enemyGuarding = false;
      enemy.classList.remove("guarding");
      enemy.classList.add("hurt");

      showHit("極!! -" + Math.round(damage) + " HP");

      updateHUD();

      setTimeout(() => {
        enemy.classList.remove("hurt");
      }, 550);
    }
  }, 500);

  setTimeout(() => {
    playerAttacking = false;
  }, 1200);
}


/* DESTROY */

function playerDestroyMode() {
  playerDestroy = true;
  playerGauge = 0;

  const maxHP = getPlayerMaxHP();

  playerHP = Math.min(
    maxHP,
    playerHP + maxHP * .5
  );

  player.classList.add("destroy-mode");

  message.textContent = "DESTROY MODE";
  message.style.display = "block";

  showHit("HP +50%");
  updateHUD();

  setTimeout(() => {
    if (!gameOver) message.style.display = "none";
  }, 700);

  clearTimeout(playerDestroyTimer);

  playerDestroyTimer = setTimeout(() => {
    playerDestroy = false;
    playerGauge = 0;

    player.classList.remove("destroy-mode");
    updateHUD();
  }, 8000);
}


/* METEOR */

function createMeteorStorm(targetX) {
  const arenaHeight = arena.getBoundingClientRect().height;

  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      if (gameOver) return;

      const meteor = document.createElement("div");
      meteor.className = "blue-meteor";

      const randomX =
        targetX - 75 + Math.random() * 150;

      meteor.style.left = randomX + "px";
      meteor.style.top = "-120px";

      meteor.style.animationDuration =
        (.34 + Math.random() * .20) + "s";

      meteorLayer.appendChild(meteor);

      setTimeout(() => meteor.remove(), 800);
    }, i * 45);
  }

  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      if (gameOver) return;

      const impact = document.createElement("div");
      impact.className = "meteor-impact";

      impact.style.left =
        (targetX - 65 + Math.random() * 45) + "px";

      impact.style.top =
        Math.max(0, arenaHeight - 90) + "px";

      meteorLayer.appendChild(impact);

      setTimeout(() => impact.remove(), 500);
    }, 300 + i * 80);
  }
}

function playerPolarisZero() {
  playerAttacking = true;

  message.textContent = "北極星　零";
  message.style.display = "block";

  createMeteorStorm(enemyX + 36);

  const damage = enemyHP * .60;

  setTimeout(() => {
    if (gameOver) {
      playerAttacking = false;
      return;
    }

    enemyHP -= damage;

    if (enemyKnockedDown) {
      wakeEnemyFromKnockDown();
    }

    enemy.classList.add("hurt");

    showHit("-" + Math.round(damage) + " HP");

    updateHUD();

    setTimeout(() => {
      enemy.classList.remove("hurt");
    }, 400);
  }, 650);

  setTimeout(() => {
    message.style.display = "none";
    playerAttacking = false;
  }, 1250);
}


/* SATO */

function playerAbsoluteLate() {
  playerAttacking = true;
  playerSatoSpecialLock = true;

  message.textContent = "アブソリュート・レイト";
  message.style.display = "block";

  setTimeout(() => {
    applyAbsoluteLateToEnemy();

    message.style.display = "none";
    playerAttacking = false;
  }, 450);
}

function applyAbsoluteLateToEnemy() {
  clearTimeout(enemyDebuffTimer);

  enemyAbsoluteLateDebuff = true;

  if (selectedCharacterId === "sato") {
    playerSatoSpecialLock = true;
  }

  enemy.classList.add("absolute-late-debuff");

  showHit("ATK -40% / SPD 30");

  enemyDebuffTimer = setTimeout(() => {
    enemyAbsoluteLateDebuff = false;
    enemy.classList.remove("absolute-late-debuff");

    if (selectedCharacterId === "sato") {
      playerSatoSpecialLock = false;
    }
  }, 30000);
}

function applyAbsoluteLateToPlayer() {
  clearTimeout(playerDebuffTimer);

  playerAbsoluteLateDebuff = true;

  if (selectedCpuId === "sato") {
    enemySatoSpecialLock = true;
  }

  player.classList.add("absolute-late-debuff");

  showHit("ATK -40% / SPD 30");

  playerDebuffTimer = setTimeout(() => {
    playerAbsoluteLateDebuff = false;
    player.classList.remove("absolute-late-debuff");

    if (selectedCpuId === "sato") {
      enemySatoSpecialLock = false;
    }
  }, 30000);
}


/* CPU */

function cpuGuard(duration = 450) {
  if (
    enemyAttacking ||
    enemyStunned ||
    enemyFrozen ||
    enemyKnockedDown ||
    enemyUppercutFlying ||
    gameOver
  ) return;

  enemyGuarding = true;
  enemy.classList.add("guarding");

  setTimeout(() => {
    enemyGuarding = false;
    enemy.classList.remove("guarding");
  }, duration);
}

function cpuJump() {
  if (
    enemyY > 0 ||
    enemyAttacking ||
    enemyStunned ||
    enemyFrozen ||
    enemyKnockedDown ||
    enemyUppercutFlying
  ) return;

  enemyVelocityY = 14;
}


/* CPU PUNCH */

function cpuPunch() {
  if (
    enemyAttacking ||
    enemyStunned ||
    enemyFrozen ||
    enemyGuarding ||
    enemyKnockedDown ||
    enemyUppercutFlying ||
    gameOver
  ) return;

  enemyAttacking = true;

  const arm = enemy.querySelector(".arm-right");
  arm.style.transform = "rotate(-90deg)";

  setTimeout(() => {
    if (
      distance() < 110 &&
      playerY < 75 &&
      !gameOver
    ) {
      const wasKnockedDown = playerKnockedDown;

      if (playerGuarding && !wasKnockedDown) {
        playerHP -= selectedCharacterId === "kawakami" ? 1 : 3;

        addPlayerGauge(4);
        showHit("BLOCK!");
      }

      else {
        const destroyPunch =
          selectedCpuId === "yamada" &&
          enemyDestroy;

        playerHP -= enemyPunchDamage();

        if (
          selectedCpuId === "okazaki" &&
          enemyGauge >= 100
        ) {
          addEnemyExtremeGauge(12);
        } else {
          addEnemyGauge(12);
        }

        addPlayerGauge(5);

        if (wasKnockedDown) {
          wakePlayerFromKnockDown();
        }

        else if (destroyPunch) {
          stunPlayer(650, 240);
          showHit("CPU DESTROY!!");
        }

        else {
          stunPlayer(320, 22);
          showHit("CPU HIT!");

          if (
            selectedCpuId === "sakurai" &&
            Math.random() < .30
          ) {
            freezePlayer();
          }
        }
      }

      updateHUD();
    }
  }, 120);

  setTimeout(() => {
    arm.style.transform = "rotate(-15deg)";
    enemyAttacking = false;
  }, 330);
}


/* CPU KICK */

function cpuKick() {
  if (
    enemyAttacking ||
    enemyStunned ||
    enemyFrozen ||
    enemyGuarding ||
    enemyKnockedDown ||
    enemyUppercutFlying ||
    gameOver
  ) return;

  enemyAttacking = true;

  const leg = enemy.querySelector(".leg-right");
  leg.style.transform = "rotate(-75deg)";

  setTimeout(() => {
    if (
      distance() < 125 &&
      playerY < 75 &&
      !gameOver
    ) {
      const wasKnockedDown = playerKnockedDown;

      if (playerGuarding && !wasKnockedDown) {
        playerHP -= selectedCharacterId === "kawakami" ? 1 : 3;

        addPlayerGauge(5);
        showHit("BLOCK!");
      }

      else {
        playerHP -= enemyKickDamage();

        if (
          selectedCpuId === "okazaki" &&
          enemyGauge >= 100
        ) {
          addEnemyExtremeGauge(18);
        } else {
          addEnemyGauge(18);
        }

        addPlayerGauge(8);

        if (wasKnockedDown) {
          wakePlayerFromKnockDown();
        } else {
          stunPlayer(450, 38);
          showHit("CPU KICK!");
        }
      }

      updateHUD();
    }
  }, 150);

  setTimeout(() => {
    leg.style.transform = "rotate(-5deg)";
    enemyAttacking = false;
  }, 430);
}


/* CPU SPECIAL */

function cpuSpecial() {
  if (
    enemyGauge < 100 ||
    enemyAttacking ||
    enemyStunned ||
    enemyFrozen ||
    enemyGuarding ||
    enemyDestroy ||
    enemyKnockedDown ||
    enemyUppercutFlying
  ) return;


  if (
    selectedCpuId === "okazaki" &&
    enemyExtremeGauge >= 100
  ) {
    enemyGauge = 0;
    enemyExtremeGauge = 0;

    cpuExtremeBeam();
    updateHUD();
    return;
  }


  enemyGauge = 0;

  if (selectedCpuId === "okazaki") {
    enemyExtremeGauge = 0;
  }

  switch (selectedCpuId) {
    case "kawakami":
      cpuHeadbutt();
      break;

    case "okazaki":
      cpuBeam();
      break;

    case "yamada":
      cpuDestroyMode();
      break;

    case "sakurai":
      cpuPolarisZero();
      break;

    case "sato":
      cpuAbsoluteLate();
      break;

    case "tani":
      cpuUppercut();
      break;

    case "abe":
      cpuColdLaugh();
      break;
  }

  updateHUD();
}


/* CPU HEADBUTT */

function cpuHeadbutt() {
  enemyAttacking = true;

  enemy.classList.add("headbutt-windup");

  setTimeout(() => {
    enemy.classList.remove("headbutt-windup");
    enemy.classList.add("headbutt-strike");

    if (enemyX > playerX) {
      enemyX -= 24;
    } else {
      enemyX += 24;
    }

    updatePositions();

    if (distance() <= 145 && playerY < 65) {
      const wasKnockedDown = playerKnockedDown;

      if (playerGuarding && !wasKnockedDown) {
        playerHP -= selectedCharacterId === "kawakami" ? 1 : 3;
        showHit("BLOCK!");
      } else {
        playerHP -= 30;

        if (wasKnockedDown) {
          wakePlayerFromKnockDown();
        } else {
          stunPlayer(900, 105);
          showHit("CPU HEADBUTT!");
        }
      }

      updateHUD();
    }
  }, 280);

  setTimeout(() => {
    enemy.classList.remove(
      "headbutt-strike",
      "headbutt-windup"
    );

    resetPose(enemy);
    enemyAttacking = false;
  }, 780);
}


/* CPU 谷 */

function cpuUppercut() {
  enemyAttacking = true;

  const launchRight = enemyX < playerX;

  message.textContent = "CPU アッパー！";
  message.style.display = "block";

  enemy.classList.add("uppercut-windup");

  setTimeout(() => {
    enemy.classList.remove("uppercut-windup");
    enemy.classList.add("uppercut-strike");

    message.style.display = "none";

    if (
      distance() <= 125 &&
      playerY < 55 &&
      !gameOver
    ) {
      if (playerGuarding) {
        playerHP -= selectedCharacterId === "kawakami" ? 1 : 3;
        showHit("BLOCK!");
      } else {
        playerHP -= 25;
        launchPlayerByUppercut(launchRight);
        showHit("CPU UPPERCUT!!");
      }

      updateHUD();
    }
  }, 220);

  setTimeout(() => {
    enemy.classList.remove(
      "uppercut-strike",
      "uppercut-windup"
    );

    resetPose(enemy);
    enemyAttacking = false;
  }, 650);
}

function launchPlayerByUppercut(toRight) {
  playerGuarding = false;
  playerAttacking = false;
  playerStunned = true;
  playerFrozen = false;

  player.classList.remove(
    "guarding",
    "frozen",
    "knocked-down"
  );

  playerKnockedDown = false;
  playerUppercutFlying = true;

  playerVelocityY = 18;
  playerHorizontalVelocity = toRight ? 8 : -8;

  player.classList.add("uppercut-launched");
}


/* CPU BEAM */

function cpuBeam() {
  enemyAttacking = true;

  message.textContent = "CPU すね毛ビーム！";
  message.style.display = "block";

  const shootRight = enemyX < playerX;

  setTimeout(() => {
    createShinBeam(enemyX, enemyY, shootRight);

    message.style.display = "none";

    if (playerY < 55) {
      const wasKnockedDown = playerKnockedDown;

      if (playerGuarding && !wasKnockedDown) {
        playerHP -= selectedCharacterId === "kawakami" ? 1 : 3;
        showHit("BLOCK!");
      } else {
        playerHP -= 18;

        if (wasKnockedDown) {
          wakePlayerFromKnockDown();
        } else {
          stunPlayer(520, 40);
        }

        showHit("CPU BEAM!");
      }

      updateHUD();
    }
  }, 350);

  setTimeout(() => {
    enemyAttacking = false;
  }, 750);
}


/* CPU EXTREME */

function cpuExtremeBeam() {
  enemyAttacking = true;

  const shootRight = enemyX < playerX;

  message.textContent = "CPU すね毛ビーム・極";
  message.style.display = "block";

  setTimeout(() => {
    createExtremeBeam(enemyX, enemyY, shootRight);

    message.style.display = "none";

    const playerInFront =
      shootRight
        ? playerX > enemyX
        : playerX < enemyX;

    if (playerInFront) {
      const damage = playerHP * .70;

      playerHP -= damage;

      if (playerKnockedDown) {
        wakePlayerFromKnockDown();
      }

      playerGuarding = false;
      player.classList.remove("guarding");
      player.classList.add("hurt");

      showHit("CPU 極!! -" + Math.round(damage) + " HP");

      updateHUD();

      setTimeout(() => {
        player.classList.remove("hurt");
      }, 550);
    }
  }, 500);

  setTimeout(() => {
    enemyAttacking = false;
  }, 1200);
}


/* CPU DESTROY */

function cpuDestroyMode() {
  enemyDestroy = true;
  enemyGauge = 0;

  const maxHP = getEnemyBaseHP();

  enemyHP = Math.min(
    maxHP,
    enemyHP + maxHP * .5
  );

  enemy.classList.add("destroy-mode");

  message.textContent = "CPU DESTROY MODE";
  message.style.display = "block";

  updateHUD();

  setTimeout(() => {
    if (!gameOver) message.style.display = "none";
  }, 700);

  clearTimeout(enemyDestroyTimer);

  enemyDestroyTimer = setTimeout(() => {
    enemyDestroy = false;
    enemyGauge = 0;

    enemy.classList.remove("destroy-mode");
    updateHUD();
  }, 8000);
}


/* CPU POLARIS */

function cpuPolarisZero() {
  enemyAttacking = true;

  message.textContent = "CPU 北極星　零";
  message.style.display = "block";

  createMeteorStorm(playerX + 36);

  const damage = playerHP * .60;

  setTimeout(() => {
    if (gameOver) {
      enemyAttacking = false;
      return;
    }

    playerHP -= damage;

    if (playerKnockedDown) {
      wakePlayerFromKnockDown();
    }

    player.classList.add("hurt");

    showHit("-" + Math.round(damage) + " HP");

    updateHUD();

    setTimeout(() => {
      player.classList.remove("hurt");
    }, 400);
  }, 650);

  setTimeout(() => {
    message.style.display = "none";
    enemyAttacking = false;
  }, 1250);
}


/* CPU SATO */

function cpuAbsoluteLate() {
  enemyAttacking = true;
  enemySatoSpecialLock = true;

  message.textContent = "CPU アブソリュート・レイト";
  message.style.display = "block";

  setTimeout(() => {
    applyAbsoluteLateToPlayer();

    message.style.display = "none";
    enemyAttacking = false;
  }, 450);
}


/* CPU MOVEMENT */

function moveCpuTowardPlayer() {
  const speed = enemySpeed();

  if (enemyX > playerX) {
    enemyX -= speed;
  } else {
    enemyX += speed;
  }

  updatePositions();
}

function moveCpuAwayFromPlayer() {
  const speed = enemySpeed();

  if (enemyX > playerX) {
    enemyX += speed;
  } else {
    enemyX -= speed;
  }

  updatePositions();
}


/* CPU AI */

function cpuAI() {
  if (
    !battleRunning ||
    gameOver ||
    enemyStunned ||
    enemyFrozen ||
    enemyAttacking ||
    enemyKnockedDown ||
    enemyUppercutFlying
  ) return;

  cpuDecisionCooldown--;

  if (cpuDecisionCooldown > 0) return;

  const d = distance();


  /* EASY */

  if (selectedDifficulty === "easy") {
    cpuDecisionCooldown = 7;

    /*
      安倍も毒を付けるため近づく
    */
    if (d > 95) {
      moveCpuTowardPlayer();
    } else {
      cpuPunch();
      cpuDecisionCooldown = 18;
    }

    return;
  }


  /* NORMAL */

  if (selectedDifficulty === "normal") {
    cpuDecisionCooldown = 6;

    if (
      playerAttacking &&
      d < 145 &&
      Math.random() < .35
    ) {
      cpuGuard(450);
      cpuDecisionCooldown = 15;
      return;
    }


    if (
      selectedCpuId === "okazaki" &&
      enemyGauge >= 100
    ) {
      if (enemyExtremeGauge >= 100) {
        cpuSpecial();
        cpuDecisionCooldown = 30;
        return;
      }

      if (d > 115) {
        moveCpuTowardPlayer();
        return;
      }

      Math.random() < .5
        ? cpuPunch()
        : cpuKick();

      cpuDecisionCooldown = 15;
      return;
    }


    /*
      安倍は冷笑が溜まったら必中なので即使用
    */
    if (
      selectedCpuId === "abe" &&
      enemyGauge >= 100
    ) {
      cpuSpecial();
      cpuDecisionCooldown = 30;
      return;
    }


    if (enemyGauge >= 100) {
      if (
        selectedCpuId === "kawakami" &&
        d < 155
      ) {
        cpuSpecial();
        cpuDecisionCooldown = 25;
        return;
      }

      if (
        selectedCpuId === "yamada" ||
        selectedCpuId === "sakurai" ||
        selectedCpuId === "sato"
      ) {
        cpuSpecial();
        cpuDecisionCooldown = 25;
        return;
      }

      if (
        selectedCpuId === "tani" &&
        d <= 125
      ) {
        cpuSpecial();
        cpuDecisionCooldown = 25;
        return;
      }
    }


    if (d > 120) {
      moveCpuTowardPlayer();
      return;
    }

    Math.random() < .45
      ? cpuKick()
      : cpuPunch();

    cpuDecisionCooldown = 16;
    return;
  }


  /* HARD / ONI */

  if (
    selectedDifficulty === "hard" ||
    selectedDifficulty === "oni"
  ) {
    cpuDecisionCooldown = 3;

    if (
      playerAttacking &&
      d < 150
    ) {
      const reactionChance =
        selectedDifficulty === "oni"
          ? .88
          : .80;

      if (Math.random() < reactionChance) {
        if (
          selectedCharacterId === "okazaki" &&
          Math.random() < .55
        ) {
          cpuJump();
        } else {
          cpuGuard(500);
        }

        cpuDecisionCooldown = 10;
        return;
      }
    }


    if (
      selectedCpuId === "okazaki" &&
      enemyGauge >= 100
    ) {
      if (enemyExtremeGauge >= 100) {
        cpuSpecial();
        cpuDecisionCooldown = 30;
        return;
      }

      if (d > 118) {
        moveCpuTowardPlayer();
        return;
      }

      if (
        playerGuarding &&
        Math.random() < .5
      ) {
        moveCpuAwayFromPlayer();
        return;
      }

      Math.random() < .5
        ? cpuPunch()
        : cpuKick();

      cpuDecisionCooldown = 10;
      return;
    }


    /*
      安倍は毒の範囲を維持しやすくする
    */
    if (selectedCpuId === "abe") {
      if (enemyGauge >= 100) {
        cpuSpecial();
        cpuDecisionCooldown = 30;
        return;
      }

      if (d > 105) {
        moveCpuTowardPlayer();
        return;
      }
    }


    if (
      playerY > 45 &&
      d < 120
    ) {
      moveCpuAwayFromPlayer();
      return;
    }


    if (enemyGauge >= 100) {
      if (
        selectedCpuId === "kawakami" &&
        d < 150
      ) {
        cpuSpecial();
        cpuDecisionCooldown = 24;
        return;
      }

      if (selectedCpuId === "yamada") {
        const hpRatio =
          enemyHP / getEnemyBaseHP();

        if (
          hpRatio < .75 ||
          Math.random() < .55
        ) {
          cpuSpecial();
          cpuDecisionCooldown = 24;
          return;
        }
      }

      if (
        selectedCpuId === "sakurai" ||
        selectedCpuId === "sato"
      ) {
        cpuSpecial();
        cpuDecisionCooldown = 30;
        return;
      }

      if (
        selectedCpuId === "tani" &&
        d <= 130 &&
        playerY < 45
      ) {
        cpuSpecial();
        cpuDecisionCooldown = 24;
        return;
      }
    }


    if (d > 118) {
      moveCpuTowardPlayer();
      return;
    }

    if (playerGuarding) {
      if (Math.random() < .45) {
        moveCpuAwayFromPlayer();
      } else {
        cpuKick();
      }

      cpuDecisionCooldown = 12;
      return;
    }

    Math.random() < .48
      ? cpuPunch()
      : cpuKick();

    cpuDecisionCooldown = 12;
  }
}


/* GAME LOOP */

function gameLoop(timestamp) {
  if (
    battleRunning &&
    !gameOver
  ) {

    /*
      安倍の毒判定。
      毎フレーム距離を見るので、
      範囲内にいる間は毒の残り6秒が更新され続ける。
    */
    updateAbePoison(timestamp);


    /* PLAYER MOVEMENT */

    if (
      !playerStunned &&
      !playerFrozen &&
      !playerAttacking &&
      !playerGuarding &&
      !playerKnockedDown &&
      !playerUppercutFlying
    ) {
      const speed = playerSpeed();

      if (moveLeft) {
        const newX = playerX - speed;

        if (canPlayerMove(newX)) {
          playerX = newX;
        }
      }

      if (moveRight) {
        const newX = playerX + speed;

        if (canPlayerMove(newX)) {
          playerX = newX;
        }
      }
    }


    if (playerUppercutFlying) {
      playerX += playerHorizontalVelocity;
      playerHorizontalVelocity *= .985;
    }


    if (
      playerY > 0 ||
      playerVelocityY !== 0
    ) {
      playerY += playerVelocityY;
      playerVelocityY -= gravity;

      if (playerY <= 0) {
        playerY = 0;
        playerVelocityY = 0;
        playerJumpCount = 0;

        if (playerUppercutFlying) {
          knockDownPlayer();
        }
      }
    }


    if (enemyUppercutFlying) {
      enemyX += enemyHorizontalVelocity;
      enemyHorizontalVelocity *= .985;
    }


    if (
      enemyY > 0 ||
      enemyVelocityY !== 0
    ) {
      enemyY += enemyVelocityY;
      enemyVelocityY -= gravity;

      if (enemyY <= 0) {
        enemyY = 0;
        enemyVelocityY = 0;

        if (enemyUppercutFlying) {
          knockDownEnemy();
        }
      }
    }

    updatePositions();
  }

  requestAnimationFrame(gameLoop);
}


/* FINISH */

function finishGame(text) {
  if (gameOver) return;

  gameOver = true;
  battleRunning = false;

  clearBattleTimers();

  playerDestroy = false;
  enemyDestroy = false;

  playerFrozen = false;
  enemyFrozen = false;

  playerPoisoned = false;
  enemyPoisoned = false;

  playerAbeSpecialLock = false;
  enemyAbeSpecialLock = false;

  playerUppercutFlying = false;
  enemyUppercutFlying = false;

  playerKnockedDown = false;
  enemyKnockedDown = false;

  playerHorizontalVelocity = 0;
  enemyHorizontalVelocity = 0;

  playerSlowStarterActive = false;
  enemySlowStarterActive = false;

  playerAbsoluteLateDebuff = false;
  enemyAbsoluteLateDebuff = false;

  playerSatoSpecialLock = false;
  enemySatoSpecialLock = false;

  playerExtremeGauge = 0;
  enemyExtremeGauge = 0;

  player.classList.remove(
    "destroy-mode",
    "frozen",
    "poisoned",
    "sleeping",
    "absolute-late-debuff",
    "uppercut-launched",
    "uppercut-windup",
    "uppercut-strike",
    "knocked-down"
  );

  enemy.classList.remove(
    "destroy-mode",
    "frozen",
    "poisoned",
    "sleeping",
    "absolute-late-debuff",
    "uppercut-launched",
    "uppercut-windup",
    "uppercut-strike",
    "knocked-down"
  );

  resultText.textContent = text;

  setTimeout(() => {
    resultPopup.classList.add("show");
  }, 450);
}


/* REMATCH */

document.getElementById("rematch").addEventListener("click", () => {
  resultPopup.classList.remove("show");
  startBattle();
});


/* HOME */

document.getElementById("returnHome").addEventListener("click", () => {
  resultPopup.classList.remove("show");

  clearBattleTimers();

  battleRunning = false;
  gameOver = true;

  playerDestroy = false;
  enemyDestroy = false;

  playerFrozen = false;
  enemyFrozen = false;

  playerPoisoned = false;
  enemyPoisoned = false;

  playerAbeSpecialLock = false;
  enemyAbeSpecialLock = false;

  playerUppercutFlying = false;
  enemyUppercutFlying = false;

  playerKnockedDown = false;
  enemyKnockedDown = false;

  playerSlowStarterActive = false;
  enemySlowStarterActive = false;

  playerAbsoluteLateDebuff = false;
  enemyAbsoluteLateDebuff = false;

  playerSatoSpecialLock = false;
  enemySatoSpecialLock = false;

  playerExtremeGauge = 0;
  enemyExtremeGauge = 0;

  player.classList.remove(
    "destroy-mode",
    "frozen",
    "poisoned",
    "sleeping",
    "absolute-late-debuff",
    "uppercut-launched",
    "uppercut-windup",
    "uppercut-strike",
    "knocked-down"
  );

  enemy.classList.remove(
    "destroy-mode",
    "frozen",
    "poisoned",
    "sleeping",
    "absolute-late-debuff",
    "uppercut-launched",
    "uppercut-windup",
    "uppercut-strike",
    "knocked-down"
  );

  beamLayer.innerHTML = "";
  meteorLayer.innerHTML = "";

  showScreen("homeScreen");
});


window.addEventListener("resize", () => {
  if (
    battleRunning &&
    !gameOver
  ) {
    updatePositions();
  }
});


setInterval(cpuAI, 35);

requestAnimationFrame(gameLoop);
