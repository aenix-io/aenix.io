/* blog-quiz.js — interactive 5-question quiz at end of blog posts.
 * Driven by data-quiz-* attributes rendered by partials/blog/quiz.html.
 */
(function () {
  var quiz = document.querySelector('[data-blog-quiz]');
  if (!quiz) return;

  var lang = quiz.dataset.quizLang || 'en';
  var questions = quiz.querySelectorAll('[data-quiz-question]');
  var screens = {
    intro: quiz.querySelector('[data-quiz-screen="intro"]'),
    game: quiz.querySelector('[data-quiz-screen="game"]'),
    result: quiz.querySelector('[data-quiz-screen="result"]')
  };
  var current = 0;
  var score = 0;

  // Localized result tiers
  var tiers = lang === 'de' ? [
    { min: 0,  title: 'Aller Anfang ist schwer',  praise: 'Schau dir den Artikel nochmal an — du wirst es beim zweiten Mal knacken.' },
    { min: 2,  title: 'Solide Basis',              praise: 'Du hast das Wesentliche mitgenommen.' },
    { min: 4,  title: 'Fast perfekt',              praise: 'Sehr gut — du verstehst das Thema.' },
    { min: 5,  title: 'Volle Punktzahl',           praise: 'Beeindruckend. Du kannst diesen Artikel jetzt selbst schreiben.' }
  ] : [
    { min: 0,  title: 'Just getting started',      praise: 'Worth a re-read — you\'ll get it next time.' },
    { min: 2,  title: 'Solid grasp',               praise: 'You picked up the essentials.' },
    { min: 4,  title: 'Almost perfect',            praise: 'Strong — you really know the material.' },
    { min: 5,  title: 'Full score',                praise: 'Impressive. You could have written this article.' }
  ];

  function show(name) {
    Object.keys(screens).forEach(function (k) {
      if (screens[k]) screens[k].hidden = (k !== name);
    });
  }

  function showQuestion(i) {
    questions.forEach(function (q, idx) { q.hidden = idx !== i; });
    current = i;
  }

  function pickTier(s) {
    var t = tiers[0];
    tiers.forEach(function (x) { if (s >= x.min) t = x; });
    return t;
  }

  // Start
  quiz.addEventListener('click', function (e) {
    var act = e.target.closest('[data-quiz-action]');
    if (act) {
      if (act.dataset.quizAction === 'start') {
        show('game');
        showQuestion(0);
      } else if (act.dataset.quizAction === 'next') {
        if (current + 1 < questions.length) {
          showQuestion(current + 1);
        } else {
          var t = pickTier(score);
          quiz.querySelector('[data-quiz-score]').textContent = score;
          quiz.querySelector('[data-quiz-tier]').textContent = t.title;
          quiz.querySelector('[data-quiz-praise]').textContent = t.praise;
          show('result');
        }
      } else if (act.dataset.quizAction === 'retry') {
        score = 0;
        questions.forEach(function (q) {
          q.querySelectorAll('[data-quiz-option]').forEach(function (o) {
            o.classList.remove('blog-quiz__option--correct', 'blog-quiz__option--wrong', 'blog-quiz__option--chosen');
            o.disabled = false;
          });
          var nx = q.querySelector('[data-quiz-action="next"]');
          if (nx) nx.hidden = true;
          var ex = q.querySelector('[data-quiz-explanation]');
          if (ex) ex.hidden = true;
        });
        show('intro');
      }
      return;
    }

    var opt = e.target.closest('[data-quiz-option]');
    if (!opt) return;
    if (opt.disabled) return;

    var qBlock = opt.closest('[data-quiz-question]');
    var allOpts = qBlock.querySelectorAll('[data-quiz-option]');
    allOpts.forEach(function (o) {
      o.disabled = true;
      if (o.dataset.quizCorrect === 'true') {
        o.classList.add('blog-quiz__option--correct');
      } else if (o === opt) {
        o.classList.add('blog-quiz__option--wrong');
      }
    });
    opt.classList.add('blog-quiz__option--chosen');
    if (opt.dataset.quizCorrect === 'true') score += 1;

    var ex = qBlock.querySelector('[data-quiz-explanation]');
    if (ex) ex.hidden = false;
    var nx = qBlock.querySelector('[data-quiz-action="next"]');
    if (nx) nx.hidden = false;
  });
})();
