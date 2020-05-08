function promena(p)
{
	document.getElementById("slika").src=p;
	x = p.split("/");
	document.getElementById("Naslov").innerHTML=x[x.length-1]
	
}
