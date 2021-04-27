const StopWatch = function () {
	var startTime = null;
	var stopTime = null;
	var running = false;

	function getTime() {
		var day = new Date();
		return day.getTime();
	}

	function start() {
		if (running == true) return;
		else if (startTime != null) stopTime = null;

		running = true;
		startTime = getTime();
	}

	function stop() {
		if (running == false) {
			return;
		}

		stopTime = getTime();
		running = false;
	}

	function duration() {
		if (startTime == null || stopTime == null) return 'Undefined';
		else return (stopTime - startTime) / 1000;
	}

	return { duration, start, stop };
};

export default StopWatch;
