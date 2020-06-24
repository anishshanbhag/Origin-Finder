let params = {
	active:true,
	currentWindow:true
}

chrome.storage.sync.get(['checkStatus'], function(result) {
	if(result.checkStatus==undefined){
          		chrome.storage.sync.set({'checkStatus': true}, function() {
          			console.log("check status set to ",true);
        		});
    }
    else{
    	document.getElementById("status").checked = result.checkStatus;
    }
});

document.getElementById("status").onclick = function(){
	console.log("function launched");
	chrome.tabs.query(params,function(tabs){
		let message = document.getElementById("status").checked;
		chrome.storage.sync.set({'checkStatus': message}, function() {
			console.log("check status set to ",message);
        });
		let msg = {
			"status":message
		}
		chrome.tabs.sendMessage(tabs[0].id,msg); 
	});
}