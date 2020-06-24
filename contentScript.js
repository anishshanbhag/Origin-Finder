sender = {
	id :"abc",
	origin:"null"
}
msg = {
			"status":true
		}
chrome.storage.sync.get(['checkStatus'], function(result) {
	if(result.checkStatus==undefined){
          		chrome.storage.sync.set({'checkStatus': true}, function() {
          			console.log("check status set to ",true);
          			msg['status'] = true;
    				gotMessage(msg,sender,"abc");
        		});
    }
    else{
    	msg['status'] = result.checkStatus;
    	gotMessage(msg,sender,"abc");
    }
});



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
	if(message['status']==true){
			var chineseProducts = ["asus","acer","amazfit","iffalcon","realme","tcl","fortex","lenovo","meitu","meizu","smartisan","zuk","zte","honor","huawei","konka","leeco","hisense","haier","gfive","cubot","coolpad","bbk","amoi","xiaomi","redmi","oneplus","vivo","oppo","lenovo","coolpad","zopo","huawei","gionee","10.Or","mi","shinco"];
			var indianProducts = ["godrej","blue star","voltas","noisefit","fasttrack","thomson","kevin","creo","celkon","iball","intex","karbonn","lava","hcl","jio","lyf","micromax","onida","spice","videocon","xolo","vu","kodak","bpl","eairtec"];
			var finlandProducts = ["nokia"];
			var japanProducts = ["daikin","casio","hitachi","mitsubishi","panasonic","sony","toshiba","sansui","sanyo"];
			var southKoreaProducts = ["samsung","lg","pantech"];
			var usProducts = ["dell","carrier","fitbit","fossil","apple","google","hp","motorola"];
			var netherlandProducts = ["philips","jokin"];		
			var i,j;
		myInterval = setInterval(function(){
			var productList = document.getElementsByTagName('body')[0].innerText.split("\n");
			var chi = [];
			var ind = [];
			var fin = [];
			var jap = [];
			var sk = [];
			var us = [];
			var neth = [];
			var prod1=0;var prod2=0;var prod3=0;var prod4=0;var prod5=0;var prod6=0;
			for(i=0;i<productList.length;i++){
				prod1=0;prod2=0;prod3=0;prod4=0;prod5=0;prod6=0;
				for(j=0;j<chineseProducts.length;j++){
					if(productList[i].toLowerCase().includes(chineseProducts[j])){
						if(chineseProducts[j]=="mi"){
							if(productList[i].toLowerCase().includes(" mi") || productList[i].toLowerCase().includes("mi ")){
								chi.push(productList[i]);
								prod1=1;
								break;
							}
						}
						else{
							prod1=1;
							chi.push(productList[i]);
							break;
						}
					}
				}
				if(prod1==0){
					for(j=0;j<indianProducts.length;j++){
						if(productList[i].toLowerCase().includes(indianProducts[j])){
							ind.push(productList[i]);
							prod2=1;
							break;
						}
					}
				}
				if(prod2==0){
					for(j=0;j<finlandProducts.length;j++){
						if(productList[i].toLowerCase().includes(finlandProducts[j])){
							fin.push(productList[i]);
							prod3=1;
							break;
						}
					}
				}
				if(prod3==0){
					for(j=0;j<japanProducts.length;j++){
						if(productList[i].toLowerCase().includes(japanProducts[j])){
							jap.push(productList[i]);
							prod4=1;
							break;
						}
					}	
				}
				if(prod4==0){
					for(j=0;j<southKoreaProducts.length;j++){
						if(productList[i].toLowerCase().includes(southKoreaProducts[j])){
							sk.push(productList[i]);
							prod5=1;
							break;
						}
					}
				}
				if(prod5==0){
					for(j=0;j<usProducts.length;j++){
						if(productList[i].toLowerCase().includes(usProducts[j])){
							us.push(productList[i]);
							prod6=1;
							break;
						}
					}
				}
				if(prod6==0){
					for(j=0;j<netherlandProducts.length;j++){
						if(productList[i].toLowerCase().includes(netherlandProducts[j])){
							neth.push(productList[i]);
							break;
						}
					}
				}
				
			}
			var tags = Array.from(document.getElementsByTagName('span'));
			tags = tags.concat(Array.from(document.getElementsByTagName('div')));
			tags = tags.concat(Array.from(document.getElementsByTagName('p')));
			tags = tags.concat(Array.from(document.getElementsByTagName('a')));
			for(i=0;i<tags.length;i++){
				prod1=0;prod2=0;prod3=0;prod4=0;prod5=0;prod6=0;
				for(j=0;j < ind.length; j++){
					if (tags[i].textContent.trim() == ind[j] && !tags[i].textContent.includes("Origin")) {
						found = tags[i];
					    var p = document.createElement("span");				
						p.innerHTML = 'Origin : India';
						p.style.margin = '10px';
						p.style.color = '#f0470e';
						p.className = "addOn";
						found.appendChild(p);
						prod1=1;
					    break;
			  		}
				}
				if(prod1==0){
					for(j=0;j < fin.length; j++){
						if (tags[i].textContent.trim() == fin[j] && !tags[i].textContent.includes("Origin")) {
							found = tags[i];
					    	var p = document.createElement("span");
					    	p.style.margin = '10px';
							p.innerHTML = 'Origin : Finland';
							p.style.color = '#f0470e';
							p.className = "addOn";
							found.appendChild(p);
							prod2=1;
					    	break;
			  			}
					}
				}
				if(prod2==0){
					for(j=0;j < jap.length; j++){
						if (tags[i].textContent.trim() == jap[j] && !tags[i].textContent.includes("Origin")) {
							found = tags[i];
						    var p = document.createElement("span");
						    p.style.margin = '10px';
							p.innerHTML = 'Origin : Japan';
							p.style.color = '#f0470e';
							p.className = "addOn";				
							found.appendChild(p);
							prod3=1;
						    break;
				  		}
					}
				}
				if(prod3==0){
					for(j=0;j < us.length; j++){
						if (tags[i].textContent.trim() == us[j] && !tags[i].textContent.includes("Origin")) {
							found = tags[i];
						    var p = document.createElement("span");
						    p.style.margin = '10px';
							p.innerHTML = 'Origin : US';
							p.style.color = '#f0470e';
							p.className = "addOn";
							found.appendChild(p);
							prod4=1;
						    break;
				  		}
					}
				}
				if(prod4==0){
					for(j=0;j < chi.length; j++){
						if (tags[i].textContent.trim() == chi[j] && !tags[i].textContent.includes("Origin")) {
							found = tags[i];
						    var p = document.createElement("span");
							p.innerHTML = 'Origin : China';
							p.style.margin = '10px';
							p.style.color = '#f0470e';
							p.className = "addOn";
							found.appendChild(p);
							prod5=1;
						    break;
				  		}
					}
				}
				if(prod5==0){
					for(j=0;j < sk.length; j++){
						if (tags[i].textContent.trim() == sk[j] && !tags[i].textContent.includes("Origin")) {
							found = tags[i];
						    var p = document.createElement("span");
						    p.style.margin = '10px';
							p.innerHTML = 'Origin : South Korea';
							p.style.color = '#f0470e';
							p.className = "addOn";
							found.appendChild(p);
							prod6=1;
						    break;
			  			}
					}
				}
				if(prod6==0){
					for(j=0;j < neth.length; j++){
						if (tags[i].textContent.trim() == neth[j] && !tags[i].textContent.includes("Origin")) {
							found = tags[i];
						    var p = document.createElement("span");
						    p.style.margin = '10px';
							p.innerHTML = 'Origin : Netherland';
							p.style.color = '#f0470e';
							p.className = "addOn";
							found.appendChild(p);
						    break;
				  		}
					}
				}	
			}
		 },1000);
	}
	else{
		if(typeof myInterval != "undefined"){
						clearInterval(myInterval);
						
		}
		removeTags = Array.from(document.getElementsByTagName('span'));
		removeTags = removeTags.concat(Array.from(document.getElementsByTagName('div')));
		removeTags = removeTags.concat(Array.from(document.getElementsByTagName('p')));
		removeTags = removeTags.concat(Array.from(document.getElementsByTagName('a')));
		for(i=0;i<removeTags.length;i++){
			if(removeTags[i].className=="addOn"){
				removeTags[i].remove();
			}
		}

	}
}


