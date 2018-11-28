function first(){
	//
	setTimeout(function(){
		console.log(1);
	}, 500);
}

function second(){
	console.log(2);
}

first(); //какого то хера эти функции выполняются не по порядку их вызова
second(); // такое бывает, и чтобы этого избежать, нужно юзать калбек, см ниже
		// калбек нужно указать в параметрах и написать слово калбек внутри 
		// функции и тогда после ее вызова указав имя новой функции"done" 
		// в свойствах этой она выполнится второй по счету, полюбому

function lernJS(lang, callback) {
	console.log("I lern " + lang);
	callback();}
	
function done() {console.log("Я прошел 3-й урок")}

lernJS("JavaScript", done);