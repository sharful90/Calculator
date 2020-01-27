
const qa = (a)=>{
	return document.querySelectorAll(a);
}
const qs = (t)=>{
	return document.querySelector(t);
}

let eql = qs(".eql");
let res = qs("#result");
let btn = qa(".cal");
let del = qs("#del");
let cle = qs("#clear");


btn.forEach((i)=>{
	i.addEventListener("click",(e)=>{
		let v = e.target.value;
         show=res.value=res.value+v
	})
})

eql.addEventListener("click",()=>{
	res.value = eval(show)
})
cle.addEventListener("click",()=>{
	res.value = ""
})
del.addEventListener('click',()=>{
	let cut = res.value.slice(0,-1);
	res.value = cut
})


