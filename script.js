// Show current timestamp at the header

function updateTime() {
    var timerInterval = setInterval(function() {
        $("#current_time").text(dayjs());
    }, 1000);
  };

  updateTime();