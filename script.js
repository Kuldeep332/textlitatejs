// $('h1').textillate({ in: { effect: 'shake' } });
// $('h2').textillate({ in: { effect: 'fadeOutUp' } });
$('h3').textillate({ in: { effect: 'hinge' } });
gsap.from("h3",{
	y:-200,
	setupClick(){$('h3').textillate({ in: { effect: 'hinge' } });

}
})