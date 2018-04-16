
var Index = {
    onload: function() {
	console.log("onload");
	$('#menu-aboutme').click(function() {
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
	$('#menu-articles').click(function() {
	    console.log("onclick");
	    $.ajax('/article/index.html', {
		timeout : 1000, // 1000 ms
		datatype:'html'
	    }).then(function(data){
		var out_html = $($.parseHTML(data));
		$('#main-article')
		    .empty()
		    .append(out_html.filter('#content')[0].innerHTML);
		onMenuClick();
	    });
	});

	$('.diary-items').click(function(data) {
	    var filename = $(this).data("diary-filename");
	    $.ajax(filename, {
		timeout : 1000, // 1000 ms
		datatype:'html'
	    }).then(function(data){
		var out_html = $($.parseHTML(data));
		$('#main-article')
		    .empty()
		    .append(out_html.filter('#content')[0].innerHTML);
	    });
	});
    },

    onMenuClick: function() {
	$('.article-items').click(function(data) {
            var filename = $(this).data("article-filename");
            $.ajax(filename, {
		timeout : 1000, // 1000 ms
		datatype:'html'
            }).then(function(data){
		var out_html = $($.parseHTML(data));
		$('#main-article')
                    .empty()
                    .append(out_html.filter('#content')[0].innerHTML);
            });
	});
    },

    setClickListner: function(targetElement, dataElement, callback) {
	$(targetElement).click(function(data) {
	    var filename = $(this).data(dataElement);
	    $.ajax(filename, {
		timeout : 1000, // 1000 ms
		datatype:'html'
            }).then(function(data){
		var out_html = $($.parseHTML(data));
		$('#main-article')
                    .empty()
                    .append(out_html.filter('#content')[0].innerHTML);
		if (callback) {
		    callback();
		}
            });
	});
    }
    
};


$(document).ready(function() {
    console.log("ready");
    Index.onload();
});

