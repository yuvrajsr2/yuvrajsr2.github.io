
document.addEventListener('DOMContentLoaded', function() {
  var checkBtn = document.getElementById('checkAnswerBtn');
  var result = document.getElementById('quizResult');
  checkBtn.addEventListener('click', function() {
    var questions = [
      { name: 'q1', correct: 'Cascading Style Sheets' },
      { name: 'q2', correct: 'HyperText Markup Language' },
      { name: 'q3', correct: 'Document Object Model' },
      { name: 'q4', correct: 'console.log()' },
      { name: 'q5', correct: 'To make web pages interactive' }
    ];
    var score = 0;
    var feedback = [];
    questions.forEach(function(q, idx) {
      var selected = document.querySelector('input[name="' + q.name + '"]:checked');
      if (!selected) {
        feedback.push('Question ' + (idx+1) + ': No answer selected.');
        return;
      }
      if (selected.value === 'correct') {
        score++;
        feedback.push('Question ' + (idx+1) + ': Correct!');
      } else {
        feedback.push('Question ' + (idx+1) + ': Incorrect.');
      }
    });
    result.innerHTML = 'Score: ' + score + '/5<br>' + feedback.join('<br>');
    result.style.color = score === 5 ? '#27ae60' : '#c0392b';
  });
});
