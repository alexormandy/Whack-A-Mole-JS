var $countdownOptionEnd = $("#countdown-option-end");

$(document).ready(function() {
  $countdownOptionEnd.countdown({
    date: new Date().getTime() + 60 * 1000, // 1 minute later
    fast: true,
    end: function() {
      $countdownOptionEnd.text("GAME OVER!");
    }
  });
});
