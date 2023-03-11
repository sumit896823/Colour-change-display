function update(){

	function $( qs ){

		return document.querySelectorAll(qs);

	}

	var sat,lig,hue,satgrad=[],liggrad=[],huegrad=[],s,l,h;

	sat = $(".saturation.slider")[0];

	lig = $(".lightness.slider")[0];

	hue = $(".hue.slider")[0];

	s=sat.value;

	l=lig.value;

	h=hue.value;

	for(let i=0;i<360;i++){

		huegrad.push("hsl("+i+","+s+"%,"+l+"%)");

	}

	for(let i=0;i<100;i++){

		satgrad.push("hsl("+h+","+i+"%,"+l+"%)");

		liggrad.push("hsl("+h+","+s+"%,"+i+"%)");

	}

	sat.style.background = `linear-gradient(to right,`+satgrad+")";

	lig.style.background = `linear-gradient(to right,`+liggrad+")";

	hue.style.background = `linear-gradient(to right,`+huegrad+")";

	for(let i=0;i<3;i++){

		var a = document.querySelectorAll(".slider")[i];

		a.setAttribute("style",a.getAttribute("style") + "--sliderThumbBg:hsl("+h+","+s+"%,"+l+"%);");

	}

	// show result

	document.body.style.background = "hsl("+h+","+s+"%,"+l+"%)";

}

update();