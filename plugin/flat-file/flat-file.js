/*
 * loads what is defined in data-markdown path and renders it
 */

$(document).ready(
	function(){
		var renderer = new marked.Renderer();

		renderer.heading = function(text, level){
			return `<h${level}>${text}</h${level}>`;
		};

		marked.setOptions({
			renderer: renderer,
			gfm: true,
			tables: true,
			highlight: function(code){
				return hljs.highlightAuto(code).value;
			}
		});

		$('[data-markdown]').each(function(){
			var $element = $(this);

			$
				.get($element.data('markdown'), function(data){

					var result = '';

					jQuery.each(data.split(/\r?\n----?\s*\r?\n/g), function(key, value){
						var sectionStart = '<section>';
						var className = value.match(/^<!-- .slide: data-state="(.+?)" -->$/m);
						if (className) sectionStart = '<section class="' + className[1] + '">';
						result += sectionStart + marked(value) + '</section>';
					});

					$element.html(result);

					$('.toc').toc({
						'selectors': 'h1,h2,h3', //elements to use as headings
						'container': 'section', //element to find all selectors in
						'smoothScrolling': false, //enable or disable smooth scrolling on click
						'prefix': 'toc-' + $element.data('markdown').match('/([^/]+)\.md')[1] + '-', //prefix for anchor tags and class names
						'onHighlight': function(el){
						}, //called when a new section is highlighted
						'highlightOnScroll': true, //add class to heading that is currently in focus
						'highlightOffset': 100, //offset to trigger the next headline
						'anchorName': function(i, heading, prefix){ //custom function for anchor name
							return prefix + i;
						},
						'headerText': function(i, heading, $heading){ //custom function building the header-item text
							return $heading.text();
						},
						'itemClass': function(i, heading, $heading, prefix){ // custom function for item class
							return $heading[0].tagName.toLowerCase();
						}
					});

				})
				.fail(function(){
					$element.html('<p>Could not find: <code>' + $element.data('markdown') + '</code></p>');
				});
		});

	}
);