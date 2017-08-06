/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var statsUrl = 'https://raw.githubusercontent.com/povilasb/triatlonoreitingas.lt/master/data/stats.json';

/**
 * @param data array json encoded ratings.
 */
function renderTop10(data) {
    var top10Table = $('#top10');
    var top10 = data.slice(0, 10);
    for (var i = 0; i < top10.length; ++i) {
        var row = '<tr><td>' + (i + 1).toString() + '</td>' +
            '<td>' + top10[i].name + '</td>' +
            '<td>' + top10[i].score + '</td></tr>';
        top10Table.append(row);
    }
}

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');

                $.getJSON(statsUrl, renderTop10);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly links.
			$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
			skel.on('+narrow -narrow', function() {
				$.prioritize(
					'.important\\28 narrow\\29',
					skel.breakpoint('narrow').active
				);
			});

	});

})(jQuery);
