	
	function frmCustomer(id)
		{
			return "Customer: <br /> <br/><input type='text' id='customer_" + id + "' name='customer'/>";
		};
	function frmNoSpace(id)
	{
		return "Fix white Space: <br /> <input type='text' id='fixWS_" + id +"' name='fixWS' /><br/>"
			  +"Also Remove This: <select name='removeChar' class='removeCharClass_" + id + "' id='removeChar_" + id + "'>"
			  +"<option id=':'>:</option>"
			  +"<option id=':'>:</option>"
			  +"<option id='_'>_</option>"
			  +"<option id='-'>-</option>"
			  +"</select> <button onClick='removeMore(" + id + ")'>+</button>";
	};
	function checkForSAST(address, space){
		const SAST = ["DR", "ST", "RD", "HWY", "CIR", "PKY", "AVE", "CT", "BND", "BR", "CYN", "CT", "CV","FLD", "TRL", "BLVD", "WAY", "TPKE", "TRCE", "TER", "SQ", "SPUR", "PATH", "LN", "LNDG", "JCT", "PASS", "PT", "PIKE", "LOOP"];
		if (space === true){
			address = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + address;
			SAST.map((currentElement) => 
			{
				var regex = new RegExp(" " + currentElement + " +?", "g");
				address = address.replace(regex, "&nbsp;"+currentElement+"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")	
			});
		}else {
			SAST.map((currentElement) => 
			{
				var regex = new RegExp(" " +currentElement + " +?", "g");
				address = address.replace(regex, "&nbsp;"+currentElement+"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")	
			});
		}
		return address; 
	}
	function formatAddress(address, space){
		var newAddress = checkForSAST(address, space);
		return newAddress;
	}

	function removeMore(id){
		var removeCount = document.getElementsByClassName('removeCharClass').length;
		console.log(removeCount);
	}
	
	function frmBlank(id){
		return "";
	}
	function frmAddress(id)
		{
			return "Address: <br /> <input type='text' id='address_" + id  +"' name='address'/>";
		}
	function frmPhoneNo(id)
		{
			return "Phone No: <br /> <input type='text' id='phoneNo_" + id  + "' name='phoneNo'/>";
		};	
	function frmAccountNo(id)
		{
			return "Account No: <br /> <input type='text' id='accountNo_" + id  + "' name='accountNo'/>";
		};	
	function frmEmail(id)
		{
			return "Email: <br /> <input type='text' id='email_" + id  + "' name='email'/>";
		};	
	function frmUsername(id)
		{frmNewWorkOrderNo
			return "Username: <br /> <input type='text' id='username_" + id  + "' name='username'/>";
		};	
	function frmPassword(id)
		{
			return "Password: <br /> <input type='text' id='password_" + id  + "' name='password'/>";
		};	
	function showAddressFields(id){
		document.getElementById('addressFields_'+id).innerHTML = ""; 
		if (document.getElementById("address_"+id) != undefined){
			document.getElementById("address_"+id).value = ""
		}; 
		
		if (document.getElementById("emailAddress_"+id) != undefined){
			document.getElementById("emailAddress_"+id).value = ""
		}; 
		var d = document.getElementById('requestType_'+id);
		var documentType = d.options[d.selectedIndex].value;
		var html =''; 
		if(documentType == 'Mail'){
			html += `<label for='address_${id}'>Mailing Address: </label><input type='text' id='address_${id}'/>`;
		}else{
			html += `<label for='emailAddress_${id}'>Email Address: </label><input type='text' id='emailAddress_${id}'/>`;
		}
		document.getElementById('addressFields_'+id).innerHTML = html; 
	}
	function frmDueDate(id)
		{
			return "Due Date: <br /> <input type='date' id='duedate_" + id  + "' name='duedate'/>";
		};	
	function frmErrorMessage(id)
		{
			
			return "<input type='button' value='+' id='btnerrorMessage_" + id + "' onclick='toggleShow(\"errorMessage_" + id + "\")'></input>"
								  +"Error Message: <br />"
								  +"<div id='errorMessage_" + id + "' style='display: <br /> block'>" 
								  +"<textarea id='errorMsg_" + id + "'></textarea>"
								  +"</div>";
		};
	function frmIssueDescription(id)	
		{
			return "<input type='button' value='+' id='btnissueDescriptionDiv_" + id + "' onclick='toggleShow(\"issueDescriptionDiv_" + id + "\")'></input>"
									+"Issue Description: <br /> "
									+"<div id='issueDescriptionDiv_" + id + "'>"
									+"<textArea id='issueDescription_" + id + "'></textarea>"
									+"</div>";
		}
	function frmTextArea(id)	
		{
			return "<textArea id='frmTextArea_" + id + "'></textarea>";
		}
	function frmStepsToRecreate(id)
		{
			return "<input type='button' value='+' id='btnstepsToRecreate_" + id +"' onclick='toggleShow(\"stepsToRecreate_" + id +"\")'></input>"
								 +"Steps to Recreate: <br />"
								 +"<input type='button' onclick=\"addStep("+id+")\" value='Add Step'></input><br/>"
								 +"<div id='stepsToRecreate_" + id +"' style='display: <br /> block'>"
								  +"Step 1: <br /> <input type='text' class='step_" + id + "' id='step1_" + id +"'></input><br/>"
								 +"</div>";
		}
	function frmWorkAround(id)	
		{
			return "<input type='button' value='+' id='btnworkAroundStepsDiv_"+id+"' onclick='toggleShow(\"workAroundStepsDiv_"+id+"\")'></input>Work Around Steps: <br />"
									 +"<div id='workAroundStepsDiv_" + id + "' style='display: <br /> none'>"
									 +"Work Around: <br />"
									 +"<select name='approvedWA' id='approvedWA_" + id + "' onChange='MiscTools.showWA(" + id + ")'>"
											+"<option id=''></option>"
											+"<option id='Yes'>Yes</option>"
											+"<option id='No'>No</option>"
										 +"</select><br/>"
									 +"<div id='workAround_"+ id+"' style='display: <br /> none'>"
									 +"<input type='button' onclick=\"addWorkAroundSteps(" + id + ")\" value='Add Step'></input><br/>"
									  +"Step 1: <br /> <input type='text' class='workAround_"+id+"' id='workAround1_"+ id+"'></input><br/>"
									 +"</div></div>";
		}
	function frmExpectedResult(id)	
		{
			return "<input type='button' value='+' id='btnexpectedResultDiv_" + id + "' onclick='toggleShow(\"expectedResultDiv_"+ id+ "\")'></input>"
								+"Expected Result: <br />"
								+"<div id='expectedResultDiv_" + id + "' style='display: <br /> block'>"
								+"<textArea id='expectedResult_" + id + "'></textarea>"
								+"</div>";
		}
	function frmDiv(name)
		{
			return (id)=>
			{
				return "<div id='" + name + "_" + id + "'></div>";
			}
		}
	function frmImpact(id)	
		{
			return "<input type='button' value='+' id='btnimpact_" + id + "' onclick='toggleShow(\"impact_" + id + "\")'></input>"
					+"Impact: <br />"
					+"<div id='impact_" + id + "'style='display: <br /> block'>"
					+"Total of Confirmed Accounts: <br /><input type='text' id='confirmedAccountTotal_" + id + "'></input><br/>"
					+"Volume expected to increase: <br />"
									+"<select name='expectedToIncrease' id='expectedToIncrease_" + id + "'>"
									+"<option id=''></option>"
                                    +"<option id='Yes'>Yes</option>"
                                    +"<option id='No'>No</option>"
                                 +"</select>"
								 +"<br />"
					+"Bridge Needed: <br />"
									+"<select name='bridgeNeeded' id='bridgeNeeded_" + id + "'>"
									+"<option id=''></option>"
                                    +"<option id='Yes'>Yes</option>"
                                    +"<option id='No'>No</option>"
                                 +"</select>"
								 +"</div>";		 
		}
	function frmMonthSelectBox(id, question=1){
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var html = `<label for='month${question}_${id}'>Month</label>
				<select id='month${question}_${id}'>`;
				months.map((currentElement)=>{
					console.log(currentElement);
					html += `<option name='${currentElement}'> ${currentElement} </option>`;
				})
		html += `</select>`
	return html;
	}
	function frmYearSelectBox(id, question=1){
		var years = [];
		var year = 2018;
		while (year >= 1900){
			years.push(year);
			year--;
		}
		console.log(year);
		var html = `<label for='year${question}_${id}'>Year</label>
				<select id='year${question}_${id}'>`;
				years.map((currentElement)=>{
				html += `<option name='${currentElement}'>${currentElement}</option>`;
				})
				html +=`</select>`
			return html;
	}
	function frmScreenshot(id)	
			{
				return "<input type='button' id='btnscreenshots_" + id + "' value='+' onclick='toggleShow(\"screenshots_" + id + "\")'>"
									+"<p class='screenshot'>Screenshots: </p><br /> "
									+"<input type='button' onclick=\"addScreenshot("+id+")\" value='Add Screenshot'></input><br/>"
									+"<div id='screenshots_" + id + "' style='display: <br /> block'>"
									+"Screenshot 1: <br /><br/>"
									+"Name of Screenshot: <br /> <input type='text' id='screenshot1_" + id + "' onchange='generatePCDate(1, "+ id + ")'class='screenshots_" + id + "' placeholder = 'Ex. PCNAME – NT Login.0000'/><br/>"
									+"PC Name: <br /> <input id='pcName1_" + id + "' class='pcName_" + id + "'></input> <br/>"
									+ "Date: <br /> <input type='text' class='date' id='duedate1_" + id + "'/><br/>"
									+"</div>";
			}
			
	
	function addStep(id){
		var steps = document.getElementsByClassName('step_'+ id);
		var lastStepElement = steps[steps.length -1].id;
		var clicksStep = lastStepElement.replace(/_\d.*/, "")
									   .replace("step", ""); 
		clicksStep++;
		var html = "Step " + clicksStep + ": <br /> <input type='text' id='step" + clicksStep + "_"+ id + "' class='step_" + id + "'></input><br/>";
		$( "#stepsToRecreate_" + id).append(html);
	}
	function addWorkAroundSteps(id){
		var wa = document.getElementsByClassName('workAround_'+ id);
		var lastWAElement = wa[wa.length -1].id;
		var clicksWorkAround = lastWAElement.replace(/_\d.*/, "")
											.replace("workAround", ""); 
		clicksWorkAround++;
		var html = "Step " + clicksWorkAround + ": <br /> <input type='text' class='workAround_"+ id + "' id='workAround" + clicksWorkAround + "_" + id + "'></input><br/>";
		$( "#workAround_"+ id).append(html);
	}
	
	
	function addScreenshot(id){
		var screenshots = document.getElementsByClassName('screenshots_'+ id);
		var lastScreenshotsElement = screenshots[screenshots.length -1].id;
		var screenshotClicks = lastScreenshotsElement.replace(/_\d.*/, "")
											.replace("screenshot", ""); 
		console.log(screenshotClicks);
		screenshotClicks++;
			var html = 	"<p class='screenshot'>Screenshot "+screenshotClicks + ": </p>"
						+ "Name of Screenshot "+screenshotClicks+": <br /> <input type='text' id='screenshot"+screenshotClicks+"_" + id + "' onchange='generatePCDate("+screenshotClicks + ", " + id + ")' class='screenshots_" + id + "'/><br/>"
						+"PC Name: <br /> <input id='pcName" + screenshotClicks + "_" + id + "' class='pcName_" + id + "'></input> <br/>"
						+ "Date: <br /> <input type='text' class='date' id='duedate" + screenshotClicks +"_" + id + "'/> <br/>";
						
		$( '#screenshots_' + id).append(html);					
	}
	function frmColorPicker(id){
		var html = `<fieldset>
					<legend>Modify Button Noter Colors</legend>
					<label for='groupColorPicker'>Group color</label>
					<input type='color' id='groupColorPicker'  name='color' value='#d6a022' style='margin: .4rem; width: 80px; height: 40px;' onChange='changeColor(this, "level1Buttons")'></input> <div class='level1Buttons'><p>Here is a bunch of text that should have a new background<br />More Text<br/> More Text<br/></p></div><br />
					<label for='subGroupAColorPicker'>SubGroup A color</label>
					<input type='color' id='subGroupAColorPicker' name='color' value='#c1d8ff' style='margin: .4rem; width: 80px; height: 40px;' onChange='changeColor(this, "level2Buttons")'></input><br/>
					<label for='subGroupBColorPicker'>SubGroup B color</label>
					<input type='color' id='subGroupBColorPicker' name='color' value='#c0c1bd' style='margin: .4rem; width: 80px; height: 40px;' onChange='changeColor(this, "level3Buttons")'></input><br />
					<label for='buttonColorPicker'>Button color</label>
					<input type='color' id='buttonColorPicker' name='color' value='#afc6c6' style='margin: .4rem; width: 80px; height: 40px;' onChange='changeColor(this, "level1Buttons")'></input>
					</fieldset>`;
	return html;
	}
	
	function changeColor(id, buttonClass){
		var style = id.value;
		splitHex(style);
		console.log(style);
		var divClasses = document.getElementsByClassName(buttonClass);
		console.log(divClasses);
		i = 0; 
		while (i < divClasses.length){
		divClasses[i].style.backgroundColor=style;
		i++;
		}
		//Array.prototype.map.call(classes, (currentElement)=>{
		//classes.style.backgroundColor=style;	
		//});
	}
	
	function splitHex(value){
		var hexArray = [];
		hexArray.push(value.slice(1, 3));
		hexArray.push(value.slice(3, 5));
		hexArray.push(value.slice(5, 7));		
		var decArray = [];
		hexArray.map((currentElement)=>{
			decArray.push(convertHex(currentElement));
		});
		var complArray = findComplementDec(decArray);
		console.log(decArray);
	}
	function convertHex(value){
		var length = value.length; 
		var result = 0; 
		var results; 
		var i = 0; 
		while(i < length){
		var position = length - i - 1;
		var digit = value.charAt(i);
		digit == 'A' || digit == 'a'
		? digit = 10
		:digit == 'B' || digit == 'b'
			? digit = 11
			:digit == 'C' || digit == 'c'
				? digit = 12
				:digit == 'D' || digit == 'd'
					? digit = 13
					:digit == 'E' || digit == 'e'
						? digit = 14
						:digit == 'F' || digit == 'f'
							? digit = 15
							: digit = digit * 1;
			results = digit * Math.pow(16, (position)); 
				result = result + results;
			i++;
		}
		//console.log(result);
		return result; 
	}
	
	function findComplementDec(decArray){
		var complArray = [];
		decArray.map((currentElement)=>{
			complArray.push(currentElement * 1  - 255);
		});
		console.log(complArray);
		return complArray; 
	}
	
	function returnHex(value){
		var length = value.length;
		var i = 0; 
		while (i > 0){
			var testValue = Math.pow(16 * (length - i - 1));
			if (value - testValue > 0){
				var digit = F; 
				
			}
		}		
	}
	/*
	function ReturnHex(value){
		var length = value.length; 
		var result = 0; 
		var results; 
		var i = 0; 
		if value
		while(i < length){
		var position = length - i - 1;
		var digit = value.charAt(i);
		digit == 'A' || digit == 'a'
		? digit = 10
		:digit == 'B' || digit == 'b'
			? digit = 11
			:digit == 'C' || digit == 'c'
				? digit = 12
				:digit == 'D' || digit == 'd'
					? digit = 13
					:digit == 'E' || digit == 'e'
						? digit = 14
						:digit == 'F' || digit == 'f'
							? digit = 15
							: digit = digit * 1;
			results = digit * Math.pow(16, (position)); 
				result = result + results;
			i++;
	}
	*/
	function frmBtnGroupName(id){
		var html = `<div id='buttonBuilderFields_${id}'>`; 
		html += `<div id='groupName1_div_${id}' class='buttonGroup'>
						<label for='groupName1_${id}'>Group1 Name: </label>
						<input id='groupName1_${id}' class='groupField'\>
						<button name='addGroup_${id}' type='button' onClick='addButtonGroup(${id})'>+</button>
						<div id='groupName1_subGroupA1_div_${id}' class='subGroupA'><br />
							<label for='groupName1_subGroupA1_${id}'>SubGroup A1 Name: </label>
							<input id='groupName1_subGroupA1_${id}' class='subGroupAField'\>
							<button name='addSubGroupA_${id}' type='button' onclick='addSubGroupA(1, ${id})'>+</button>
							<div id='groupName1_subGroupA1_subGroupB1_div_${id}' class='subGroupB'><br />
								<label for='groupName1_subGroupA1_subGroupB1_${id}'>SubGroup B1 Name: </label>
								<input id='groupName1_subGroupA1_subGroupB1_${id}' class='subGroupBField'\>
								<button name='addSubGroupB_btn' type='button' onClick='addSubGroupB(1, 1, ${id})'>+</button>
								<div id='groupName1_subGroupA1_subGroupB1_button1_div_${id}' class='buttonDiv'><br />
									<label for='groupName1_subGroupA1_subGroupB1_button1_${id}'>Button1 Name: </label>
									<input id='groupName1_subGroupA1_subGroupB1_button1_${id}' class='buttonField'\>
									<label for='groupName1_subGroupA1_subGroupB1_button1action_${id}'>Button1 Action: </label>
									<input id='groupName1_subGroupA1_subGroupB1_button1action_${id}' class='buttonAction'\>
									<button name='Button1_${id}' type='button' onclick='addButton(1, 1, 1, ${id})'>+</button><br />
								</div>
							</div>
						</div>
					</div>
				</div>`;					
		return html;
	}
	
	function addButtonGroup(id){
		var groups = document.getElementsByClassName('buttonGroup');
		var groupNumber = groups.length + 1; 
		var html = `<div id='groupName${groupNumber}_div_${id}' class='buttonGroup'>
						<label for='groupName${groupNumber}_${id}'>Group${groupNumber} Name: </label>
						<input id='groupName${groupNumber}_${id}' class='groupField'\>
						<button name='addGroup_${id}' type='button' onClick='addButtonGroup(${id})'>+</button>
						<div id='groupName${groupNumber}_subGroupA1_div_${id}' class='subGroupA'><br />
							<label for='groupName${groupNumber}_subGroupA_${id}'>SubGroup A1 Name: </label>
							<input id='groupName${groupNumber}_subGroupA_${id}' class='subGroupAField'\>
							<button name='addSubGroupA_${id}' type='button' onclick='addSubGroupA(${groupNumber}, ${id})'>+</button>
							<div id='groupName${groupNumber}_subGroupA1_subGroupB1_div_${id}' class='subGroupB'><br />
								<label for='groupName1_subGroupA1_subGroupB1_${id}'>SubGroup B1 Name: </label>
								<input id='groupName1_subGroupA1_subGroupB1_${id}' class='subGroupBField'\>
								<button name='addSubGroupB_btn' type='button' onClick='addSubGroupB(${groupNumber}, 1, ${id})'>+</button>
								<div id='groupName${groupNumber}_subGroupA1_subGroupB1_button1_div_${id}' class='buttonDiv'>
									<label for='groupName${groupNumber}_subGroupA1_subGroupB1_button1_${id}'>Button1 Name: </label>
									<input id='groupName${groupNumber}_subGroupA1_subGroupB1_button1_${id}' class='buttonField'\>
									<label for='groupName${groupNumber}_subGroupA1_subGroupB1_button1action_${id}'>Button1 Action: </label>
									<input id='groupName${groupNumber}_subGroupA1_subGroupB1_button1action_${id}' class='buttonAction'\>
									<button name='Button1_${id}' type='button' onclick='addButton(${groupNumber}, 1, 1, ${id})'>+</button><br />
								</div>
							</div>
						</div>
					</div>`;
		var div = document.getElementById('buttonBuilderFields_'+id)
		div.insertAdjacentHTML( 'beforeend', html);
	}
	
	function addSubGroupA(groupNumber, id){
		var group = document.getElementById("groupName"+groupNumber+"_div_"+id);
		var subGroups = group.getElementsByClassName('subGroupA');
		var subGroupNumber = subGroups.length + 1; 
		var html = `<div id='groupName${groupNumber}_subGroupA${subGroupNumber}_div_${id}' class='subGroupA'>
							<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_${id}'>SubGroup A${subGroupNumber} Name: </label>
							<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_${id}' class='subGroupAField'\>
							<button name='addSubGroupA${subGroupNumber}_${id}' type='button' onclick='addSubGroupA(${groupNumber}, ${id})'>+</button>
							<div id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_div_${id}' class='subGroupB'><br />
								<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_${id}'>SubGroup B1 Name: </label>
								<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_${id}' class='subGroupBField'\>
								<button name ='addSubGroupB_btn' type='button' onclick='addSubGroupB(${groupNumber},${subGroupNumber},${id})'>+</button><br />
								<div id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_button1_div_${id}' class='buttonDiv'>
									<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_button1_${id}'>Button1 Name: </label>
									<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_button1_${id}' class='buttonField'\>
									<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_button1action_${id}'>Button1 Action: </label>
									<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB1_button1action_${id}' class='buttonAction'\>
									<button name='Button1_${id}' type='button' onclick='addButton(${groupNumber}, ${subGroupNumber}, 1, ${id})'>+</button
							</div>
						</div>
					</div>`;
		var div = document.getElementById('groupName'+groupNumber+'_div_'+id)
		div.insertAdjacentHTML( 'beforeend', html );
	}
	
	function addSubGroupB(groupNumber, subGroupNumber, id){
		var group = document.getElementById("groupName"+groupNumber+"_subGroupA"+subGroupNumber+"_div_"+id);
		var subGroups = group.getElementsByClassName('subGroupB');
		var subGroupNumberB = subGroups.length + 1; 
		console.log(subGroupNumberB);
		var html = `<div id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_div_${id}' class='subGroupB'><br />
								<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB{subGroupNumberB}_${id}'>SubGroup B${subGroupNumberB} Name: </label>
								<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_${id}' class='subGroupBField'\>
								<button name ='addSubGroupB${subGroupNumberB}_${id}' type='button' onclick='addSubGroupB(${groupNumber},${subGroupNumber},${id})'>+</button><br />
								<div id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button1_div_${id}' class='buttonDiv'>
									<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button1_${id}'>Button1 Name: </label>
									<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button1_${id}' class='buttonField'\>
									<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button1action_${id}'>Button1 Action: </label>
									<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button1action_${id}' class='buttonAction'\>
									<button name='Button1_${id}' type='button' onclick='addButton(${groupNumber}, ${subGroupNumber}, ${subGroupNumberB}, ${id})'>+</button><br />
								</div>
							</div>`;
		var div = document.getElementById('groupName'+groupNumber+'_subGroupA'+subGroupNumber+'_div_'+id)
		div.insertAdjacentHTML( 'beforeend', html );
	}
	function addButton(groupNumber, subGroupNumber, subGroupNumberB, id){
		var group = document.getElementById("groupName"+groupNumber+"_subGroupA"+subGroupNumber+"_subGroupB"+subGroupNumberB+"_div_"+id);
		var buttons = group.getElementsByClassName('buttonDiv');
		var buttonNumber = buttons.length + 1; 
		console.log(subGroupNumberB);
		var html = `<div id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button1_div_${id}' class='buttonDiv'>
						<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button${buttonNumber}_${id}'>Button${buttonNumber} Name: </label>
									<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button${buttonNumber}_${id}' class='buttonField'\>
									<label for='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button${buttonNumber}action_${id}'>Button${buttonNumber} Action: </label>
									<input id='groupName${groupNumber}_subGroupA${subGroupNumber}_subGroupB${subGroupNumberB}_button${buttonNumber}action_${id}' class='buttonAction'\>
									<button name='Button${buttonNumber}_${id}' type='button' onclick='addButton(${groupNumber}, ${subGroupNumber}, ${subGroupNumberB}, ${id})'>+</button><br />
								</div>
							</div>`;
		var div = document.getElementById('groupName'+groupNumber+'_subGroupA'+subGroupNumber+'_subGroupB'+subGroupNumberB+'_div_'+id)
		div.insertAdjacentHTML( 'beforeend', html );
	}
	
	function toggleShow(div){
		var button1 = "btn" + div;
		if(document.getElementById(div).style.display == 'block'){
		document.getElementById(div).style.display='none';
		document.getElementById(button1).value='+';
		}else if(document.getElementById(div).style.display == 'none'){
		document.getElementById(div).style.display='block';
		document.getElementById(button1).value='-';
		}else{	
		document.getElementById(div).style.display='none';
		document.getElementById(button1).value='+';	
		}
	}
					