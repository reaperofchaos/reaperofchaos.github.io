class macAddressClass {
	constructor(macAddress, macPrefix, company){
			this.macAddress = macAddress;
			this.macPrefix = macPrefix;
			this.company = company;
		}
}

class macAddressInput {
constructor(macAddress, ipAddress){
			this.macAddress = macAddress;
			this.ipAddress = ipAddress;
		}
}
class macAddressLookup {
	constructor(){
		}
	 static lookupMacAddress(){
		 var html = ""; 
		 var macAddress = document.getElementById('macAddress').value;
		 var macAddressPrefix = macAddress.substring(0, 8);
		 html = `<table class = 'table'>
							 <tr>
								 <th>Mac Address</th>
								 <th>Prefix</th>
								 <th>Company</th>
								</tr>`;
		 var isMacAddress = macList => macList.macPrefix == macAddress;
		 var isMacAddressPre = macList => macList.macPrefix == macAddressPrefix;
		 var macAddressArray = macList.filter(isMacAddress)
									  .map((currentElement)=>{
											html += `<tr><td>${macAddress}</td>
													<td>${currentElement.macPrefix}</td>
													<td>${currentElement.company}</td></tr>`;
									  });
		var macAddressArrayLength = macAddressArray.length * 1;
		if(macAddressArrayLength == 0){
			var macAddressArray2 = macList.filter(isMacAddressPre)
										  .map((currentElement)=>{
										html += `<tr><td>${macAddress}</td>
										            <td>${currentElement.macPrefix}</td>
													<td>${currentElement.company}</td></tr>`;
										  });
		}
		html += `</table>`;
		document.getElementById('macAddressResult').innerHTML = html;
	}

	static lookupMacAddresses(macAddress){
		 var html = ""; 
		 var macAddressPrefix = macAddress.macAddress.substring(0, 8);
		  var macAddressObj = [];
		 var isMacAddress = macList => macList.macPrefix == macAddress.macAddress;
		 var isMacAddressPre = macList => macList.macPrefix == macAddressPrefix;
		 var macAddressArray = macList.filter(isMacAddress)
									  .map((currentElement)=>{
									var mac = new macAddressClass(macAddress.macAddress, currentElement.macPrefix, currentElement.company);
									macAddressObj.push(mac);
									  });
		var macAddressArrayLength = macAddressArray.length * 1;
		if(macAddressArrayLength == 0){
			var macAddressArray2 = macList.filter(isMacAddressPre)
										  .map((currentElement)=>{
										var mac = new macAddressClass(macAddress.macAddress, currentElement.macPrefix, currentElement.company);
										macAddressObj.push(mac);
										  });
		}
		return macAddressObj; 
	}
	
	static readNomadix(){
		var nomadixRe = /([A-Za-z0-9][A-Za-z0-9]\:[A-Za-z0-9][A-Za-z0-9]\:[A-Za-z0-9][A-Za-z0-9]\:[A-Za-z0-9][A-Za-z0-9]\:[A-Za-z0-9][A-Za-z0-9]\:[A-Za-z0-9][A-Za-z0-9])\t(10.\d{1,3}.\d{1,3}.\d{1,3})/g;
		var nomadixMacs = document.getElementById('txtBoxMacAddress').value;
		var nomadixResults = macAddressLookup.matchAll(nomadixMacs, nomadixRe);
		macAddressLookup.getAllMacAddresses(nomadixResults);
	}
	
	
	static getAllMacAddresses(macAddressArray){
		var html = "";
		html = `<table class = 'table'><tr><th>Mac Address</th><th>IP</th><th>Prefix</th><th>Company</th></tr>`;
		macAddressArray.sort(function(a, b) {
									a = a.ipAddress.split( '.');
									b = b.ipAddress.split( '.' );
									for( var i = 0; i < a.length; i++ )
										{
											if( ( a[i] = parseInt( a[i] ) ) < ( b[i] = parseInt( b[i] ) ) )
												return -1;
											else if( a[i] > b[i] )
												return 1;
										}
										return 0;
									})
		                      .map((currentElement)=>{
			var result = macAddressLookup.lookupMacAddresses(currentElement);
			html += `<tr><td>${result[0].macAddress}</td><td>${currentElement.ipAddress}</td><td>${result[0].macPrefix}</td><td>${result[0].company}</td></tr>`
		});
				document.getElementById('macAddressResult').innerHTML = html;
	}
static matchAll(str, regex) {
		var res = [];
		var m;
		if (regex.global) {
			while (m = regex.exec(str)) {
				var input = new macAddressInput(m[1], m[2]);
				res.push(input);
			}
		} else {
			if (m = regex.exec(str)) {
				var input = new macAddressInput(m[1], m[2]);
				res.push(input);
			}
		}
		return res;
	}

	static buildForm(){
		var formName = 'macAddressSearch';
		var html = `<div id='macAddressLookup'>
									<form name='macAddressSearch'>
				    				<table class='table borderless'>
					 						<tr>
												<td colspan='3' style='text-align: center; vertical-align: middle;'>
													<label for='macAddress'>Type Mac Address</label>
													<input type='text' id='macAddress'></input><br />
													<input type='button' id='btnMacAddress' onclick='macAddressLookup.lookupMacAddress()' value='Search'>
												</td>
					 						</tr>
										</table>
									</form>
				 					<div id='macAddressResult'></div>
				 				</div>`
		 createTab('macAddressSearch', 'MAC Address Lookup', html);
	}
}