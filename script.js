function showNextTip() {
    var tipContainer = document.getElementById('tip-container');
    var exampleContainer = document.getElementById('example-container');
  
    if (tipContainer.classList.contains('hidden')) {
      tipContainer.classList.remove('hidden');
    } else if (exampleContainer.classList.contains('hidden')) {
      exampleContainer.classList.remove('hidden');
    } else {
      alert('You have reached the end of the tutorial.');
    }
  }
  