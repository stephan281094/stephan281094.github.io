$ ->
	# Get content based on menu items
	getContent = (file) ->
		$.get "#{file}.html", (data) ->
			$('main').removeClass "offscreen"
			$('main').html data
			focusable ".field, input, textarea"

		$("menu > .active.item").removeClass 'active'
		$("[data-content='#{file}']").addClass 'active'

		window.location.replace "#" + file


	$('aside > menu > .item').click () ->
		content = $(@).attr "data-content"
		$('aside').removeClass "center-aside";

		$("menu > .active.item").removeClass 'active'
		$("[data-content='#{content}']").addClass 'active'

		getContent $(@).attr "data-content"

	$('aside > .logo').click () ->
		$('aside').addClass "center-aside"
		$('main').addClass "offscreen"
		$("menu > .active.item").removeClass 'active'
		window.location.replace "#"
		console.log $('aside .logo').height()

		if $('aside').hasClass "small"
			$('aside').removeClass "small"
			$('aside > menu').slideDown()


	if window.location.hash
		$('aside').removeClass "center-aside small";
		$('aside > menu').slideDown()
		getContent window.location.hash.substr 1

# ---

# Enables fields to be focused
focusable = (selector) ->
	$(selector).focus () ->
		$(".field").removeClass "focused"
		$(@).parent(".field").addClass "focused"
	$(selector).blur () ->
		$(".field").removeClass "focused"
# ---