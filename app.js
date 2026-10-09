const surahs = [
  { number: 1, name: "الفاتحة", emoji: "🗝️" },
  { number: 2, name: "البقرة", emoji: "🐄" },
  { number: 3, name: "آل عمران", emoji: "👨‍👩‍👧" },
  { number: 4, name: "النساء", emoji: "👩" },
  { number: 5, name: "المائدة", emoji: "🍽️" },
  { number: 6, name: "الأنعام", emoji: "🐏" },
  { number: 7, name: "الأعراف", emoji: "⛰️" },
  { number: 8, name: "الأنفال", emoji: "🎁" },
  { number: 9, name: "التوبة", emoji: "🤲" },
  { number: 10, name: "يونس", emoji: "🐋" },
  { number: 11, name: "هود", emoji: "🚢" },
  { number: 12, name: "يوسف", emoji: "👕" },
  { number: 13, name: "الرعد", emoji: "⚡" },
  { number: 14, name: "إبراهيم", emoji: "🔥" },
  { number: 15, name: "الحجر", emoji: "🪨" },
  { number: 16, name: "النحل", emoji: "🐝" },
  { number: 17, name: "الإسراء", emoji: "🌙" },
  { number: 18, name: "الكهف", emoji: "🕳️" },
  { number: 19, name: "مريم", emoji: "👶" },
  { number: 20, name: "طه", emoji: "🌿" },
  { number: 21, name: "الأنبياء", emoji: "📜" },
  { number: 22, name: "الحج", emoji: "🕋" },
  { number: 23, name: "المؤمنون", emoji: "🕌" },
  { number: 24, name: "النور", emoji: "💡" },
  { number: 25, name: "الفرقان", emoji: "⚖️" },
  { number: 26, name: "الشعراء", emoji: "✍️" },
  { number: 27, name: "النمل", emoji: "🐜" },
  { number: 28, name: "القصص", emoji: "📖" },
  { number: 29, name: "العنكبوت", emoji: "🕷️" },
  { number: 30, name: "الروم", emoji: "🏛️" },
  { number: 31, name: "لقمان", emoji: "👴" },
  { number: 32, name: "السجدة", emoji: "🙇" },
  { number: 33, name: "الأحزاب", emoji: "🛡️" },
  { number: 34, name: "سبأ", emoji: "👑" },
  { number: 35, name: "فاطر", emoji: "🌌" },
  { number: 36, name: "يس", emoji: "💚" },
  { number: 37, name: "الصافات", emoji: "🪽" },
  { number: 38, name: "ص", emoji: "🐑" },
  { number: 39, name: "الزمر", emoji: "👥" },
  { number: 40, name: "غافر", emoji: "🤍" },
  { number: 41, name: "فصلت", emoji: "📚" },
  { number: 42, name: "الشورى", emoji: "🗣️" },
  { number: 43, name: "الزخرف", emoji: "💎" },
  { number: 44, name: "الدخان", emoji: "🌫️" },
  { number: 45, name: "الجاثية", emoji: "🧎" },
  { number: 46, name: "الأحقاف", emoji: "🏜️" },
  { number: 47, name: "محمد", emoji: "☝️" },
  { number: 48, name: "الفتح", emoji: "🔓" },
  { number: 49, name: "الحجرات", emoji: "🚪" },
  { number: 50, name: "ق", emoji: "🌳" },
  { number: 51, name: "الذاريات", emoji: "🌬️" },
  { number: 52, name: "الطور", emoji: "🏔️" },
  { number: 53, name: "النجم", emoji: "⭐" },
  { number: 54, name: "القمر", emoji: "🌕" },
  { number: 55, name: "الرحمن", emoji: "🌸" },
  { number: 56, name: "الواقعة", emoji: "🌍" },
  { number: 57, name: "الحديد", emoji: "🔩" },
  { number: 58, name: "المجادلة", emoji: "💬" },
  { number: 59, name: "الحشر", emoji: "➡️" },
  { number: 60, name: "الممتحنة", emoji: "📝" },
  { number: 61, name: "الصف", emoji: "🧱" },
  { number: 62, name: "الجمعة", emoji: "📅" },
  { number: 63, name: "المنافقون", emoji: "🎭" },
  { number: 64, name: "التغابن", emoji: "🔄" },
  { number: 65, name: "الطلاق", emoji: "💔" },
  { number: 66, name: "التحريم", emoji: "🚫" },
  { number: 67, name: "الملك", emoji: "🏰" },
  { number: 68, name: "القلم", emoji: "🖊️" },
  { number: 69, name: "الحاقة", emoji: "❗" },
  { number: 70, name: "المعارج", emoji: "🪜" },
  { number: 71, name: "نوح", emoji: "🌧️" },
  { number: 72, name: "الجن", emoji: "👤" },
  { number: 73, name: "المزمل", emoji: "🧣" },
  { number: 74, name: "المدثر", emoji: "🛏️" },
  { number: 75, name: "القيامة", emoji: "🌋" },
  { number: 76, name: "الإنسان", emoji: "🧍" },
  { number: 77, name: "المرسلات", emoji: "💨" },
  { number: 78, name: "النبأ", emoji: "📰" },
  { number: 79, name: "النازعات", emoji: "✨" },
  { number: 80, name: "عبس", emoji: "🙁" },
  { number: 81, name: "التكوير", emoji: "☀️" },
  { number: 82, name: "الانفطار", emoji: "🌐" },
  { number: 83, name: "المطففين", emoji: "⚱️" },
  { number: 84, name: "الانشقاق", emoji: "🌑" },
  { number: 85, name: "البروج", emoji: "🌟" },
  { number: 86, name: "الطارق", emoji: "🌠" },
  { number: 87, name: "الأعلى", emoji: "⬆️" },
  { number: 88, name: "الغاشية", emoji: "🌪️" },
  { number: 89, name: "الفجر", emoji: "🌅" },
  { number: 90, name: "البلد", emoji: "🏙️" },
  { number: 91, name: "الشمس", emoji: "🌞" },
  { number: 92, name: "الليل", emoji: "🌚" },
  { number: 93, name: "الضحى", emoji: "🌤️" },
  { number: 94, name: "الشرح", emoji: "🫀" },
  { number: 95, name: "التين", emoji: "🍈" },
  { number: 96, name: "العلق", emoji: "🩸" },
  { number: 97, name: "القدر", emoji: "🌃" },
  { number: 98, name: "البينة", emoji: "🔎" },
  { number: 99, name: "الزلزلة", emoji: "🫨" },
  { number: 100, name: "العاديات", emoji: "🐎" },
  { number: 101, name: "القارعة", emoji: "💥" },
  { number: 102, name: "التكاثر", emoji: "💰" },
  { number: 103, name: "العصر", emoji: "⏳" },
  { number: 104, name: "الهمزة", emoji: "🗯️" },
  { number: 105, name: "الفيل", emoji: "🐘" },
  { number: 106, name: "قريش", emoji: "🐫" },
  { number: 107, name: "الماعون", emoji: "🥣" },
  { number: 108, name: "الكوثر", emoji: "⛲" },
  { number: 109, name: "الكافرون", emoji: "↔️" },
  { number: 110, name: "النصر", emoji: "🏆" },
  { number: 111, name: "المسد", emoji: "🪢" },
  { number: 112, name: "الإخلاص", emoji: "💠" },
  { number: 113, name: "الفلق", emoji: "🌄" },
  { number: 114, name: "الناس", emoji: "🫂" }
];

const grid = document.getElementById("surahGrid");
const audio = document.getElementById("quranAudio");
const playButton = document.getElementById("mainPlayButton");
const currentSurahName = document.getElementById("currentSurahName");
const setupAudioButton = document.getElementById("setupAudioButton");

let currentSurah = null;
let lastSaveTime = 0;


// مسار ملف الصوت
function audioFile(number) {
  const num = String(number).padStart(3, "0");
  return `audio/hafs-an-asim/${num}.mp3`;
}


// نخفي زر إعداد الصوت مؤقتًا
if (setupAudioButton) {
  setupAudioButton.style.display = "none";
}


// إنشاء أزرار السور
surahs.forEach((surah) => {
  const button = document.createElement("button");

  button.className = "surah-button";
  button.textContent = `${surah.name} ${surah.emoji}`;

  button.addEventListener("click", () => {
    playSurah(surah);
  });

  grid.appendChild(button);
});


// حفظ مكان التوقف
function saveCurrentPosition() {
  if (!currentSurah) return;
  if (!Number.isFinite(audio.currentTime)) return;

  localStorage.setItem(
    `surahPosition_${currentSurah.number}`,
    String(audio.currentTime)
  );
}


// تشغيل السورة
function playSurah(surah) {
  saveCurrentPosition();

  currentSurah = surah;

  currentSurahName.textContent =
    `${surah.name} ${surah.emoji}`;

  localStorage.setItem(
    "lastSurah",
    String(surah.number)
  );

  const savedTime = Number(
    localStorage.getItem(
      `surahPosition_${surah.number}`
    ) || 0
  );

  audio.pause();

  audio.src = audioFile(surah.number);

  audio.addEventListener(
    "loadedmetadata",
    () => {
      if (
        Number.isFinite(savedTime) &&
        savedTime > 0 &&
        savedTime < audio.duration
      ) {
        audio.currentTime = savedTime;
      }
    },
    { once: true }
  );

  audio.load();

  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        playButton.textContent = "⏸";
      })
      .catch((error) => {
        console.log("تعذر تشغيل الصوت:", error);

        playButton.textContent = "▶";
      });
  }
}


// زر التشغيل الكبير
playButton.addEventListener("click", () => {
  if (!currentSurah) {
    const lastSurahNumber = Number(
      localStorage.getItem("lastSurah")
    );

    if (lastSurahNumber) {
      const lastSurah = surahs.find(
        (surah) =>
          surah.number === lastSurahNumber
      );

      if (lastSurah) {
        playSurah(lastSurah);
        return;
      }
    }

    playSurah(surahs[0]);
    return;
  }

  if (audio.paused) {
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playButton.textContent = "⏸";
        })
        .catch((error) => {
          console.log(
            "تعذر تشغيل الصوت:",
            error
          );
        });
    }
  } else {
    audio.pause();

    playButton.textContent = "▶";

    saveCurrentPosition();
  }
});


// حفظ الموقع كل ثانيتين تقريبًا
audio.addEventListener("timeupdate", () => {
  if (
    Math.abs(
      audio.currentTime - lastSaveTime
    ) >= 2
  ) {
    saveCurrentPosition();

    lastSaveTime = audio.currentTime;
  }
});


// عند الضغط على إيقاف
audio.addEventListener("pause", () => {
  saveCurrentPosition();
});


// عند انتهاء السورة
audio.addEventListener("ended", () => {
  playButton.textContent = "▶";

  if (currentSurah) {
    localStorage.setItem(
      `surahPosition_${currentSurah.number}`,
      "0"
    );
  }
});


// عند فتح الموقع
window.addEventListener("load", () => {
  const lastSurahNumber = Number(
    localStorage.getItem("lastSurah")
  );

  if (!lastSurahNumber) {
    return;
  }

  const lastSurah = surahs.find(
    (surah) =>
      surah.number === lastSurahNumber
  );

  if (!lastSurah) {
    return;
  }

  currentSurah = lastSurah;

  currentSurahName.textContent =
    `${lastSurah.name} ${lastSurah.emoji}`;

  audio.src = audioFile(lastSurah.number);
});


// عند إغلاق الصفحة
window.addEventListener("beforeunload", () => {
  saveCurrentPosition();
});