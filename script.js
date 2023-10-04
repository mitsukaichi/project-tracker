// Show current timestamp at the header

function updateTime() {
    var timerInterval = setInterval(function() {
        var time = dayjs().format("MMM DD, YYYY") + " at " + dayjs().format("hh:mm:ss a") 
        $("#current_time").text(time);
    }, 1000);
  };

updateTime();