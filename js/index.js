
var Index = {
    onload: function() {
	$('#about').click(function() {
	    $.ajax('/about/about.html', {
		timeout : 1000, // 1000 ms
		datatype:'html'
	    }).then(function(data){
		var out_html = $($.parseHTML(data));
		$('#main-article')
		    .empty()
		    .append(out_html.filter('#content')[0].innerHTML);
	    });
	});
    }
};


$(document).ready(function() {
    Index.onload();
});
