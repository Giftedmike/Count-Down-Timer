

var intervalId;
var initialTimerValue;


		function startTimer() {
			var hoursInput = document.getElementById("hours");
			var minutesInput = document.getElementById("minutes");
			var secondsInput = document.getElementById("seconds");

			var hours = parseInt(hoursInput.value) || 0;
			var minutes = parseInt(minutesInput.value) || 0;
			var seconds = parseInt(secondsInput.value) || 0;

			var totalSeconds = hours * 3600 + minutes * 60 + seconds;

			var showTimer = totalSeconds, hours, minutes, seconds;
			initialTimerValue = totalSeconds;
			intervalId = setInterval(function () {
				hours = parseInt(showTimer / 3600, 10);
				minutes = parseInt((showTimer % 3600) / 60, 10);
				seconds = parseInt(showTimer % 60, 10);

				hours = hours < 10 ? "0" + hours : hours;
				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				document.getElementById("showTimer").innerHTML = hours + ":" + minutes + ":" + seconds;

				if (--showTimer < 0) {
					clearInterval(intervalId);
					alert("TIMES'S UP!");
                    
				}

			}, 1000);
		}

		function stopTimer() {
			clearInterval(intervalId);
		}

		function resetTimer() {
			clearInterval(intervalId);
			document.getElementById("hours").value = "";
			document.getElementById("minutes").value = "";
			document.getElementById("seconds").value = "";
			document.getElementById("showTimer").innerHTML = "00:00:00";
			initialTimerValue = undefined;
		}
