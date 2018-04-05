
var Index = {
    onload: function() {
	console.log("onload");
	$('#about').click(function() {
	    console.log("onclick");
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
    console.log("ready");
    Index.onload();
});
