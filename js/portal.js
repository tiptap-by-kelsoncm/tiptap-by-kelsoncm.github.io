// Filters the project cards (data-search) by the search box of the hero.
(function () {
  var input = document.getElementById('searchInput');
  if (!input) {
    return;
  }
  var normalize = function (text) {
    return String(text).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
  };
  input.addEventListener('input', function () {
    var query = normalize(input.value.trim());
    document.querySelectorAll('[data-search]').forEach(function (card) {
      card.hidden = query !== '' && normalize(card.getAttribute('data-search')).indexOf(query) === -1;
    });
    if (query) {
      document.getElementById('projetos').scrollIntoView({block: 'start'});
    }
  });
})();
