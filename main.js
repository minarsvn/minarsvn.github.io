$(document).ready(() => {
  $("#input").focus()
})
$("#form").submit(e => {
  e.preventDefault()
  var input = $("#input").val()
  
  var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=${input}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
		"x-rapidapi-key": "cd22898490msh3b852c3007dbb5cp15e82cjsn102a10a3f29d"
	}
}
$.ajax(settings).done(function (response) {
  let output = response.cnt
  $("#output").text("")
  let i = 0
    setInterval(() => {
     if (i < output.length) {
             $("#output").text($("#output").text()+output[i])
        }
    i++
   },50)
});
  $(".printed").first().text(input)
  gsap.to(".printed", .5, {y: "-=40", scale: "-=.25", opacity: "-=.25"})
  $("#container").prepend($(`<p class="printed"><p>`))
  $("#input").val("")
  $("#input").focus()
 
  
  gsap.from(".printed:first-child", .5, {scaleY: 0, delay: .5})
  
})