// Game_Лейкина_Матрешка.js
// Один модуль с логикой игры "Матрешка"

(function () {
    const LEVEL_CONFIG = {
      1: { timeLimit: 60, correctScore: 10, penaltyScore: -5 },
      2: { timeLimit: 50, correctScore: 20, penaltyScore: -10 },
      3: { timeLimit: 40, correctScore: 30, penaltyScore: -15 }
    };
  
    const QUESTIONS = {
      1: [
        { text: 'Выберите самую маленькую матрешку', correct: 'small' },
        { text: 'Выберите красную матрешку', correct: 'red' },
        { text: 'Выберите синюю матрешку', correct: 'blue' }
      ],
      2: [
        { text: 'Перетащите красную матрешку в центр', correctColor: 'red' },
        { text: 'Перетащите жёлтую матрешку в центр', correctColor: 'yellow' },
        { text: 'Перетащите синюю матрешку в центр', correctColor: 'blue' }
      ],
      3: [
        {
          text: 'Столица России — это…',
          options: ['Санкт‑Петербург', 'Москва', 'Новосибирск', 'Казань'],
          correctIndex: 1
        },
        {
          text: 'Какая планета является третьей от Солнца?',
          options: ['Меркурий', 'Венера', 'Земля', 'Марс'],
          correctIndex: 2
        },
        {
          text: 'Как называется самая длинная река в мире (по большинству источников)?',
          options: ['Амазонка', 'Нил', 'Енисей', 'Миссисипи'],
          correctIndex: 0
        },
        {
          text: 'Кто написал роман «Война и мир»?',
          options: ['Ф. М. Достоевский', 'А. С. Пушкин', 'Л. Н. Толстой', 'Н. В. Гоголь'],
          correctIndex: 2
        },
        {
          text: 'Как называется самая маленькая по площади страна мира?',
          options: ['Монако', 'Ватикан', 'Лихтенштейн', 'Андорра'],
          correctIndex: 1
        },
        {
          text: 'Сколько минут в одном часе?',
          options: ['30', '45', '60', '90'],
          correctIndex: 2
        },
        {
          text: 'Каким цветом в основном бывает спелая клубника?',
          options: ['Зелёным', 'Красным', 'Синим', 'Жёлтым'],
          correctIndex: 1
        },
        {
          text: 'Как называют человека, который лечит зубы?',
          options: ['Терапевт', 'Хирург', 'Стоматолог', 'Кардиолог'],
          correctIndex: 2
        },
        {
          text: 'Как называется прибор для измерения температуры?',
          options: ['Барометр', 'Термометр', 'Динамометр', 'Компас'],
          correctIndex: 1
        },
        {
          text: 'Сколько цветов в классической радуге?',
          options: ['5', '6', '7', '8'],
          correctIndex: 2
        },
        {
          text: 'Какая фигура имеет четыре равные стороны и четыре прямых угла?',
          options: ['Круг', 'Треугольник', 'Квадрат', 'Трапеция'],
          correctIndex: 2
        },
        {
          text: 'Как называется наука о живой природе?',
          options: ['Физика', 'Биология', 'География', 'Химия'],
          correctIndex: 1
        },
        {
          text: 'Сколько будет 5 × 6?',
          options: ['25', '30', '35', '40'],
          correctIndex: 1
        },
        {
          text: 'Какой океан самый большой по площади?',
          options: ['Атлантический', 'Индийский', 'Тихий', 'Северный Ледовитый'],
          correctIndex: 2
        },
        {
          text: 'Кто является автором музыки к гимну России (современная версия)?',
          options: ['С. Рахманинов', 'М. Глинка', 'А. Александров', 'И. Стравинский'],
          correctIndex: 2
        },
        {
          text: 'Какое время года следует за весной?',
          options: ['Зима', 'Лето', 'Осень', 'Снова весна'],
          correctIndex: 1
        },
        {
          text: 'Как называется самая высокая гора в мире?',
          options: ['Эльбрус', 'Килиманджаро', 'Эверест', 'Монблан'],
          correctIndex: 2
        },
        {
          text: 'Кто из этих животных относится к млекопитающим?',
          options: ['Лягушка', 'Синица', 'Дельфин', 'Акула'],
          correctIndex: 2
        },
        {
          text: 'Какая часть речи отвечает на вопросы «кто?» и «что?»',
          options: ['Глагол', 'Существительное', 'Прилагательное', 'Наречие'],
          correctIndex: 1
        },
        {
          text: 'Сколько дней обычно в високосном году?',
          options: ['365', '366', '364', '360'],
          correctIndex: 1
        },
        {
          text: 'Какая планета Солнечной системы известна своими кольцами?',
          options: ['Марс', 'Юпитер', 'Сатурн', 'Меркурий'],
          correctIndex: 2
        },
        {
          text: 'Как называется главная река в Санкт‑Петербурге?',
          options: ['Волга', 'Нева', 'Дон', 'Лена'],
          correctIndex: 1
        },
        {
          text: 'Какой газ люди вдыхают для дыхания?',
          options: ['Углекислый газ', 'Кислород', 'Азот', 'Водород'],
          correctIndex: 1
        },
        {
          text: 'К какому жанру относится произведение «Колобок»?',
          options: ['Сказка', 'Басня', 'Рассказ', 'Поэма'],
          correctIndex: 0
        },
        {
          text: 'Как называют фигуру, у которой три стороны и три угла?',
          options: ['Квадрат', 'Круг', 'Треугольник', 'Ромб'],
          correctIndex: 2
        },
        {
          text: 'Какой континент самый холодный?',
          options: ['Африка', 'Евразия', 'Антарктида', 'Австралия'],
          correctIndex: 2
        },
        {
          text: 'Как называется прибор для ориентирования по сторонам света?',
          options: ['Телескоп', 'Компас', 'Перископ', 'Термометр'],
          correctIndex: 1
        },
        {
          text: 'Кто из перечисленных является композитором?',
          options: ['И. Репин', 'П. Чайковский', 'Л. Толстой', 'И. Тургенев'],
          correctIndex: 1
        },
        {
          text: 'Что из перечисленного — не птица?',
          options: ['Сова', 'Голубь', 'Пингвин', 'Дельфин'],
          correctIndex: 3
        },
        {
          text: 'Какой металл традиционно ценится как драгоценный?',
          options: ['Железо', 'Медь', 'Алюминий', 'Золото'],
          correctIndex: 3
        }
      ]
    };
  
    const STORAGE_KEY_RATING = 'matreshka_ratingList';
  
    const state = {
      playerName: '',
      currentLevel: 1,
      currentQuestionIndex: 0,
      score: 0,
      lives: 3,
      timeLeft: 0,
      timerId: null,
      levelStartTime: 0,
      totalStartTime: 0,
      finishedLevels: 0,
      availableQuestions: [] // Массив доступных вопросов для уровня 3 (без повторов)
    };
  
    function shuffle(array) {
      return array.slice().sort(() => Math.random() - 0.5);
    }
  
    function formatDuration(ms) {
      const totalSec = Math.round(ms / 1000);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      return `${m}:${s.toString().padStart(2, '0')}`;
    }
  
    function loadCurrentPlayer() {
      const raw = localStorage.getItem('matreshka_currentPlayer');
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    }
  
    function saveRatingRecord(name, score, totalTimeMs) {
      const raw = localStorage.getItem(STORAGE_KEY_RATING);
      let list = [];
      if (raw) {
        try {
          list = JSON.parse(raw);
        } catch {
          list = [];
        }
      }
      const now = new Date();
      const record = {
        name,
        bestScore: score,
        durationMs: totalTimeMs,
        date: now.toISOString()
      };
  
      const existingIndex = list.findIndex(r => r.name === name);
      if (existingIndex >= 0) {
        const existing = list[existingIndex];
        if (score > existing.bestScore) {
          list[existingIndex] = record;
        }
      } else {
        list.push(record);
      }
  
      list.sort((a, b) => b.bestScore - a.bestScore || a.durationMs - b.durationMs);
      localStorage.setItem(STORAGE_KEY_RATING, JSON.stringify(list));
    }
  
    // === Инициализация страницы игры ===
  
    function initGamePage() {
      const player = loadCurrentPlayer();
      if (!player) {
        window.location.href = 'index.html';
        return;
      }
  
      state.playerName = player.name;
      state.currentLevel = player.startLevel || 1;
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.finishedLevels = 0;
      state.totalStartTime = performance.now();
  
      const nameEl = document.getElementById('playerNameDisplay');
      const levelEl = document.getElementById('levelDisplay');
      const scoreEl = document.getElementById('scoreDisplay');
      const timerEl = document.getElementById('timerDisplay');
      const livesEl = document.getElementById('livesDisplay');
      const endLevelBtn = document.getElementById('endLevelBtn');
      const toMenuBtn = document.getElementById('toMenuBtn');
  
      nameEl.textContent = state.playerName;
      scoreEl.textContent = state.score;
      timerEl.textContent = '—';
      if (livesEl) livesEl.textContent = state.lives;
  
      endLevelBtn.addEventListener('click', () => {
        showConfirm(
          'Завершить уровень?',
          'Вы уверены, что хотите завершить текущий уровень?',
          () => completeCurrentLevel(false)
        );
      });

      toMenuBtn.addEventListener('click', () => {
        showConfirm(
          'Завершить игру?',
          'Завершить игру и вернуться на заставку?',
          () => finishGame(false)
        );
      });
  
      function updateLevelLabel() {
        levelEl.textContent = state.currentLevel;
      }
  
      updateLevelLabel();
      startLevel(state.currentLevel);
    }
  
    function setTimerForLevel(level) {
      clearInterval(state.timerId);
      const cfg = LEVEL_CONFIG[level];
      state.timeLeft = cfg.timeLimit;
      const timerEl = document.getElementById('timerDisplay');
  
      timerEl.textContent = state.timeLeft;
      state.timerId = setInterval(() => {
        state.timeLeft -= 1;
        if (state.timeLeft < 0) {
          clearInterval(state.timerId);
          showMessage(
            'Время вышло!',
            'Время уровня истекло. Уровень завершён.',
            'warning',
            () => completeCurrentLevel(false)
          );
          return;
        }
        timerEl.textContent = state.timeLeft;
      }, 1000);
    }
  
    function startLevel(level) {
      state.currentLevel = level;
      state.currentQuestionIndex = 0;
      setTimerForLevel(level);
      state.levelStartTime = performance.now();
      
      // Для уровня 3 создаём перемешанный массив доступных вопросов
      if (level === 3) {
        const allQuestions = QUESTIONS[3].slice();
        // Перемешиваем вопросы
        for (let i = allQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }
        state.availableQuestions = allQuestions;
      } else {
        state.availableQuestions = [];
      }
      
      renderCurrentLevel();
    }
  
    function jumpToLevel(level, isCheckMode) {
      clearInterval(state.timerId);
      state.currentLevel = level;
      state.currentQuestionIndex = 0;
      setTimerForLevel(level);
      state.levelStartTime = performance.now();
      
      // Для уровня 3 создаём перемешанный массив доступных вопросов
      if (level === 3) {
        const allQuestions = QUESTIONS[3].slice();
        // Перемешиваем вопросы
        for (let i = allQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }
        state.availableQuestions = allQuestions;
      } else {
        state.availableQuestions = [];
      }
      
      renderCurrentLevel(isCheckMode);
    }
  
    function renderCurrentLevel(isCheckMode = false) {
      const area = document.getElementById('gameArea');
      area.innerHTML = '';
  
      if (state.currentLevel === 1) {
        renderLevel1(area, isCheckMode);
      } else if (state.currentLevel === 2) {
        renderLevel2(area, isCheckMode);
      } else if (state.currentLevel === 3) {
        renderLevel3(area, isCheckMode);
      }
    }
  
    // === Уровень 1: Найди матрешку по описанию (внимание и запоминание) ===
  
    function renderLevel1(container) {
      const title = document.createElement('h2');
      title.textContent = 'Уровень 1 — Найди матрешку по описанию';
  
      const qBox = document.createElement('div');
      qBox.className = 'question-box';
  
      const row = document.createElement('div');
      row.className = 'matreshka-row';

      // Сначала выбираем целевую матрешку (уникальную комбинацию размера и цвета)
      const sizes = ['small', 'medium', 'big'];
      const colors = ['red', 'blue', 'yellow'];
      const target = {
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      // Генерируем матрешки, гарантируя уникальность целевой
      const configs = [];
      const usedCombinations = new Set();
      
      // Добавляем целевую матрешку первой
      configs.push({ size: target.size, color: target.color });
      usedCombinations.add(`${target.size}-${target.color}`);

      // Генерируем остальные 4 матрешки, избегая дубликатов целевой
      for (let i = 0; i < 4; i++) {
        let size, color, combination;
        let attempts = 0;
        do {
          size = sizes[Math.floor(Math.random() * sizes.length)];
          color = colors[Math.floor(Math.random() * colors.length)];
          combination = `${size}-${color}`;
          attempts++;
        } while (usedCombinations.has(combination) && attempts < 50);
        
        configs.push({ size, color });
        usedCombinations.add(combination);
      }

      // Перемешиваем матрешки, чтобы целевая не всегда была первой
      for (let i = configs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [configs[i], configs[j]] = [configs[j], configs[i]];
      }
      
      // Находим индекс целевой матрешки после перемешивания
      const finalTargetIndex = configs.findIndex(cfg => 
        cfg.size === target.size && cfg.color === target.color
      );

      const sizeNames = {
        small: 'самую МАЛЕНЬКУЮ',
        medium: 'СРЕДНЮЮ',
        big: 'самую БОЛЬШУЮ'
      };
      const colorNames = {
        red: 'КРАСНУЮ',
        blue: 'СИНЮЮ',
        yellow: 'ЖЁЛТУЮ'
      };

      qBox.textContent = `Найдите матрешку: ${colorNames[target.color]} и ${sizeNames[target.size]}. Дважды щёлкните по ней.`;
  
      configs.forEach((cfg, index) => {
        const m = document.createElement('div');
        m.className = 'matreshka ' + (cfg.size !== 'medium' ? cfg.size : '') + ' ' + cfg.color;
        m.dataset.size = cfg.size;
        m.dataset.color = cfg.color;
        m.textContent = '';
  
        m.addEventListener('mouseover', () => {
          m.classList.add('hint');
        });
        m.addEventListener('mouseout', () => {
          m.classList.remove('hint');
        });
  
        m.addEventListener('dblclick', () => {
          const isCorrect = index === finalTargetIndex;
          handleLevel1MatreshkaOpen(isCorrect, m);
        });
  
        row.appendChild(m);
      });
  
      container.appendChild(title);
      container.appendChild(qBox);
      container.appendChild(row);
    }
  
    function handleLevel1MatreshkaOpen(isCorrect, matreshkaEl) {
      applyAnswerResult(isCorrect, 1);

      if (isCorrect) {
        matreshkaEl.classList.add('opened');
        setTimeout(() => {
          proceedToNextQuestionOrLevel();
        }, 600);
      }
    }

    // === Уровень 2: «Повтори последовательность» (игра на память) ===

    function renderLevel2(container) {
      const title = document.createElement('h2');
      title.textContent = 'Уровень 2 — Запомни и повтори последовательность';

      const qBox = document.createElement('div');
      qBox.className = 'question-box';
      qBox.textContent =
        'Сейчас матрешки загорятся по очереди. Запомните порядок, затем повторите его кликами по матрешкам.';

      // Ряд из трёх матрешек разных цветов
      const row = document.createElement('div');
      row.className = 'matreshka-row';

      const colors = ['red', 'blue', 'yellow'];
      const colorNames = {
        red: 'красную',
        blue: 'синюю',
        yellow: 'жёлтую'
      };

      const matreshkasByColor = {};

      colors.forEach((color) => {
        const m = document.createElement('div');
        m.className = 'matreshka medium ' + color;
        m.dataset.color = color;
        m.textContent = '';
        row.appendChild(m);
        matreshkasByColor[color] = m;
      });

      // Длина последовательности растёт с вопросом (3, 4, 5)
      const sequenceLength = 3 + state.currentQuestionIndex;
      const sequence = [];
      for (let i = 0; i < sequenceLength; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(color);
      }

      let playerIndex = 0;
      let inputEnabled = false;

      function playSequence() {
        inputEnabled = false;
        playerIndex = 0;
        qBox.textContent =
          'Смотрите внимательно: запоминайте порядок подсветки матрешек.';

        sequence.forEach((color, idx) => {
          const el = matreshkasByColor[color];
          const startTime = idx * 800;

          setTimeout(() => {
            el.classList.add('hint');
          }, startTime);

          setTimeout(() => {
            el.classList.remove('hint');
          }, startTime + 500);
        });

        setTimeout(() => {
          inputEnabled = true;
          qBox.textContent =
            'Теперь повторите последовательность, нажимая по матрешкам в нужном порядке.';
        }, sequenceLength * 800 + 200);
      }

      function handlePlayerClick(color) {
        if (!inputEnabled) return;

        const expectedColor = sequence[playerIndex];
        const isCorrectStep = color === expectedColor;

        if (!isCorrectStep) {
          inputEnabled = false;
          applyAnswerResult(false, 2);
          qBox.textContent =
            'Ошибка в последовательности. Сейчас она будет показана ещё раз — попробуйте запомнить лучше.';

          // Дадим игроку ещё одну попытку с той же последовательностью
          setTimeout(() => {
            playSequence();
          }, 1000);
          return;
        }

        playerIndex += 1;

        if (playerIndex >= sequence.length) {
          // Вся последовательность введена верно
          inputEnabled = false;
          applyAnswerResult(true, 2);
          setTimeout(() => {
            proceedToNextQuestionOrLevel();
          }, 600);
        }
      }

      // Навешиваем обработчики клика после определения последовательности
      colors.forEach((color) => {
        const el = matreshkasByColor[color];
        el.addEventListener('click', () => handlePlayerClick(color));
      });

      container.appendChild(title);
      container.appendChild(qBox);
      container.appendChild(row);

      // Запускаем первый показ последовательности
      playSequence();
    }

    // === Уровень 3: нажми на матрешку, затем ответь на вопрос с клавиатуры (1–4) ===

    function renderLevel3(container) {
      const title = document.createElement('h2');
      title.textContent = 'Уровень 3 — Вопросы для самых внимательных';

      const qBox = document.createElement('div');
      qBox.className = 'question-box';
      qBox.textContent =
        'Нажмите на любую матрешку, чтобы получить вопрос. Затем выберите ответ клавишами 1–4.';

      const row = document.createElement('div');
      row.className = 'matreshka-row';

      const colors = ['red', 'blue', 'yellow'];

      let activeQuestion = null;
      let keyHandlerAttached = false;

      function showQuestion() {
        if (activeQuestion) return;

        // Если вопросы закончились, перемешиваем заново
        if (state.availableQuestions.length === 0) {
          const allQuestions = QUESTIONS[3].slice();
          for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
          }
          state.availableQuestions = allQuestions;
        }

        // Выбираем случайный вопрос из доступных
        const randomIndex = Math.floor(Math.random() * state.availableQuestions.length);
        activeQuestion = state.availableQuestions[randomIndex];
        // Удаляем использованный вопрос, чтобы он не повторялся
        state.availableQuestions.splice(randomIndex, 1);

        qBox.innerHTML = '';

        const questionText = document.createElement('div');
        questionText.textContent = activeQuestion.text;
        qBox.appendChild(questionText);

        const answersList = document.createElement('ul');
        answersList.style.listStyle = 'none';
        answersList.style.paddingLeft = '0';
        answersList.style.marginTop = '8px';

        activeQuestion.options.forEach((opt, idx) => {
          const li = document.createElement('li');
          li.textContent = `${idx + 1}) ${opt}`;
          answersList.appendChild(li);
        });

        const hint = document.createElement('p');
        hint.className = 'hint';
        hint.textContent = 'Выберите ответ, нажав клавишу 1, 2, 3 или 4.';

        qBox.appendChild(answersList);
        qBox.appendChild(hint);

        if (!keyHandlerAttached) {
          const keyHandler = (e) => {
            if (!activeQuestion) return;
            if (!['1', '2', '3', '4'].includes(e.key)) return;

            const answerIndex = Number(e.key) - 1;
            const isCorrect = answerIndex === activeQuestion.correctIndex;

            applyAnswerResult(isCorrect, 3);
            activeQuestion = null;
            document.removeEventListener('keydown', keyHandler);
            keyHandlerAttached = false;

            if (isCorrect) {
              setTimeout(() => {
                proceedToNextQuestionOrLevel();
              }, 600);
            } else {
              // При ошибке даём ещё одну попытку с НОВЫМ вопросом этого уровня
              setTimeout(() => {
                qBox.textContent =
                  'Нажмите на матрешку, чтобы получить следующий вопрос. Будьте внимательнее!';
              }, 600);
            }
          };

          document.addEventListener('keydown', keyHandler);
          keyHandlerAttached = true;
        }
      }

      colors.forEach((color) => {
        const m = document.createElement('div');
        m.className = 'matreshka medium ' + color;
        m.dataset.color = color;
        m.textContent = '';

        m.addEventListener('click', () => {
          showQuestion();
        });

        row.appendChild(m);
      });

      container.appendChild(title);
      container.appendChild(qBox);
      container.appendChild(row);
    }
  
    // === Общая логика ответов, переходов и завершения ===

    // Универсальная функция для показа модальных сообщений
    function showMessage(title, message, type = 'info', onClose = null) {
      // Удаляем предыдущий модал, если он есть
      const old = document.querySelector('.modal-overlay');
      if (old) old.remove();

      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';

      const modal = document.createElement('div');
      modal.className = 'modal-window modal-' + type;

      const h2 = document.createElement('h2');
      h2.textContent = title;
      modal.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = message;
      modal.appendChild(p);

      const btn = document.createElement('button');
      btn.className = 'btn primary';
      btn.textContent = 'OK';
      btn.addEventListener('click', () => {
        overlay.remove();
        if (onClose) onClose();
      });
      modal.appendChild(btn);

      overlay.appendChild(modal);
      document.body.appendChild(overlay);
    }

    // Функция для подтверждения действий (замена confirm)
    function showConfirm(title, message, onConfirm, onCancel = null) {
      // Удаляем предыдущий модал, если он есть
      const old = document.querySelector('.modal-overlay');
      if (old) old.remove();

      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';

      const modal = document.createElement('div');
      modal.className = 'modal-window modal-warning';

      const h2 = document.createElement('h2');
      h2.textContent = title;
      modal.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = message;
      modal.appendChild(p);

      const btnContainer = document.createElement('div');
      btnContainer.style.display = 'flex';
      btnContainer.style.gap = '12px';
      btnContainer.style.justifyContent = 'flex-end';
      btnContainer.style.marginTop = '20px';

      const btnCancel = document.createElement('button');
      btnCancel.className = 'btn ghost';
      btnCancel.textContent = 'Отмена';
      btnCancel.addEventListener('click', () => {
        overlay.remove();
        if (onCancel) onCancel();
      });
      btnContainer.appendChild(btnCancel);

      const btnConfirm = document.createElement('button');
      btnConfirm.className = 'btn primary';
      btnConfirm.textContent = 'Да';
      btnConfirm.addEventListener('click', () => {
        overlay.remove();
        if (onConfirm) onConfirm();
      });
      btnContainer.appendChild(btnConfirm);

      modal.appendChild(btnContainer);
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
    }

    function showEndModal(title, message, isWin, onClose) {
      // Удаляем предыдущий модал, если он есть
      const old = document.querySelector('.modal-overlay');
      if (old) old.remove();

      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';

      const win = document.createElement('div');
      win.className = 'modal-window';

      const h2 = document.createElement('h2');
      h2.textContent = title;
      win.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = message;
      win.appendChild(p);

      const scoreInfo = document.createElement('div');
      scoreInfo.className = 'modal-score';
      scoreInfo.textContent = `Ваш результат: ${state.score} очков`;
      win.appendChild(scoreInfo);

      const btn = document.createElement('button');
      btn.className = 'btn primary';
      btn.textContent = isWin ? 'Перейти к результатам' : 'Посмотреть рейтинг';
      btn.addEventListener('click', () => {
        overlay.remove();
        if (onClose) onClose();
      });
      win.appendChild(btn);

      overlay.appendChild(win);
      document.body.appendChild(overlay);
    }
  
    function applyAnswerResult(isCorrect, level) {
      const cfg = LEVEL_CONFIG[level];
      const scoreDelta = isCorrect ? cfg.correctScore : cfg.penaltyScore;
      state.score += scoreDelta;
      const scoreEl = document.getElementById('scoreDisplay');
      if (scoreEl) scoreEl.textContent = state.score;
  
      if (!isCorrect) {
        // Ошибка: снимаем жизнь и немного ускоряем окончание уровня
        state.lives = Math.max(0, state.lives - 1);
        const livesEl = document.getElementById('livesDisplay');
        if (livesEl) livesEl.textContent = state.lives;

        // Дополнительное усложнение: за ошибку убираем несколько секунд с таймера
        state.timeLeft = Math.max(0, state.timeLeft - 5);
        const timerEl = document.getElementById('timerDisplay');
        if (timerEl) timerEl.textContent = state.timeLeft;

        // Если жизни закончились — игра завершается поражением
        if (state.lives === 0) {
          clearInterval(state.timerId);
          showEndModal(
            'Игра окончена',
            'У вас закончились жизни. Ваш результат сохранён в рейтинге.',
            false,
            () => finishGame(false)
          );
          return;
        } else {
          showMessage(
            'Неправильно!',
            'Штрафные баллы и вы теряете одну жизнь.',
            'error'
          );
        }
      } else {
        showMessage(
          'Верно!',
          'Вы получаете баллы.',
          'success'
        );
      }
    }
  
    function proceedToNextQuestionOrLevel() {
      state.currentQuestionIndex += 1;
      // На каждом уровне случайное количество вопросов: 3, 4 или 5
      const questionsPerLevel = state.questionsPerLevel || (3 + Math.floor(Math.random() * 3));
      if (!state.questionsPerLevel) {
        state.questionsPerLevel = questionsPerLevel;
      }
      
      if (state.currentQuestionIndex >= questionsPerLevel) {
        state.questionsPerLevel = null; // Сброс для следующего уровня
        completeCurrentLevel(true);
      } else {
        renderCurrentLevel();
      }
    }
  
    function completeCurrentLevel(success) {
      clearInterval(state.timerId);
      state.finishedLevels += 1;
  
      if (state.currentLevel < 3 && success) {
        state.currentLevel += 1;
        const levelEl = document.getElementById('levelDisplay');
        if (levelEl) levelEl.textContent = state.currentLevel;
        startLevel(state.currentLevel);
      } else {
        finishGame(true);
      }
    }
  
    function finishGame(fromLevels) {
      const totalTimeMs = performance.now() - state.totalStartTime;
      if (fromLevels) {
        saveRatingRecord(state.playerName, state.score, totalTimeMs);
      }

      const isWin = fromLevels && state.lives > 0;

      showEndModal(
        isWin ? 'Победа!' : 'Игра завершена',
        isWin
          ? 'Вы успешно прошли все уровни. Ваш результат сохранён в рейтинге.'
          : 'Игра окончена. Ваш текущий результат сохранён в рейтинге.',
        isWin,
        () => {
          window.location.href = 'rating.html';
        }
      );
    }
  
    // === Инициализация страницы рейтинга ===
  
    function initRatingPage() {
      const body = document.getElementById('ratingTableBody');
      const backBtn = document.getElementById('backToStartBtn');
  
      backBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
  
      const raw = localStorage.getItem(STORAGE_KEY_RATING);
      let list = [];
      if (raw) {
        try {
          list = JSON.parse(raw);
        } catch {
          list = [];
        }
      }
  
      body.innerHTML = '';
      if (list.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 5;
        td.textContent = 'Пока нет результатов.';
        tr.appendChild(td);
        body.appendChild(tr);
        return;
      }
  
      list.forEach((rec, idx) => {
        const tr = document.createElement('tr');
  
        const tdIdx = document.createElement('td');
        tdIdx.textContent = idx + 1;
  
        const tdName = document.createElement('td');
        tdName.textContent = rec.name;
  
        const tdScore = document.createElement('td');
        tdScore.textContent = rec.bestScore;
  
        const tdDuration = document.createElement('td');
        tdDuration.textContent = formatDuration(rec.durationMs);
  
        const tdDate = document.createElement('td');
        const d = new Date(rec.date);
        tdDate.textContent = d.toLocaleString('ru-RU');
  
        tr.appendChild(tdIdx);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
        tr.appendChild(tdDuration);
        tr.appendChild(tdDate);
  
        body.appendChild(tr);
      });
    }
  
    // Экспортируем методы инициализации и утилиты
    window.MatreshkaGame = {
      initGamePage,
      initRatingPage,
      showMessage,
      showConfirm
    };
  })();