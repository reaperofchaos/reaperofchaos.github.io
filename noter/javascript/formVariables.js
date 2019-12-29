	function frmCustomer(id)
		{
			return `<label for='customer_${id}'>Customer: </label>
					<input type='text' id='customer_${id}' name='customer'/>`;
		};

	function frmRecipienetName(id)
		{
			return `<label for='recipientName_${id}'>Recipient: </label>
					<input type='text' id='recipientName_${id}' name='toName'/>`;
		};

	function frmSenderName(id)
	{
		return `<label for='senderName_${id}'>Sender: </label>
				<input type='text' id='senderName_${id}' name='sender'/>`;
	}	
	
	function frmStartTime(id)
		{
			return `<label for='startTime_${id}'>Start Time: </label>
					<input type='text' id='startTime_${id}' name='startTime' list='startTimes' onChange='updateEndTime(${id})'/>
					<datalist id='startTimes'>
						<option value='8 A.M.'>
						<option value='10 A.M.'>
					</datalist>`;
		};
	
	function frmEndTime(id)
		{
			return `<label for='endTime_${id}'>End Time: </label>
					<input type='text' id='endTime_${id}' name='endTime'/>`;
		};
		
	function frmStartDay(id)
		{
			return `<label for='startDay_${id}'>Start Day: </label>
					<input type='text' id='startDay_${id}' name='startDay' list='startDays' onchange='updateEndDay(${id})'/>
					<datalist id='startDays'>
						<option value='Monday'>
						<option value='Tuesday'>
					</datalist>`;
		};
		
	function frmEndDay(id)
		{
			return `<label for='endDay_${id}'>End Day: </label>
					<input type='text' id='endDay_${id}' name='endDay'/>`;
		};
	
	function frmDates(id, no){
		return `<label for='dates${no}_${id}'>Date: </label>
					<input type='date' id='dates${no}_${id}' name='date'/>`;
	}
	
	function frmNoSpace(id)
	{
		return `<label for='fixWS_${id}'>Fix white Space: </label>
				<input type='text' id='fixWS_${id}' name='fixWS' />	<br/>
				<label for='removeChar_${id}'>Also Remove This: </label>
				<select name='removeChar' class='removeCharClass_${id}' id='removeChar_${id}'>
				  <option id=':'>:</option>
				  <option id=':'>:</option>
				  <option id='_'>_</option>
				  <option id='-'>-</option>
				</select>`;
	};
	
	function formatAddress(address, space){
		var newAddress = checkForSAST(address, space);
		return newAddress;
	}
	
	function frmBlank(id){
		return ``;
	}

	function frmAddress(id)
		{
			var html = `<fieldset>
				<legend>Address: </legend>
				<div style='display: flex; flex-direction: column;'>
					<div id='addressRow1' style='display: flex; flex-direction: row; padding: 10px;'>
					<label for='streetAddress_${id}'>Street Address: </label>
					<input type='text' id='street_${id}' name='street'/>
					</div>
				<div style='display: flex; flex-direction: row; padding: 10px;'>
				<label for='city_${id}'>City: </label>
				<input type='text' id='city_${id}' name='city'/>
				<label for='state_${id}'>State: </label>
				<input type='text' list='usStates' id='state_${id}' name='state'/>
				<label for='zipCode_${id}'>Zip Code: </label>
				<input type='text' id='zipCode_${id}' name='zipCode'/>
				</div>
				</div>
			</fieldset>`;
			html += `<datalist id='usStates'>`;
			states.map((currElement)=>{
				html += `<option label=' ${currElement.state}' value='${currElement.abbreviation}'>`;
			});
			html += `</datalist>`;
			return html;
		}
	
	function checkForSAST(address, space){
		const SAST = ["DR", "ST", "RD", "HWY", "CIR", "PKY", "AVE", "CT", "BND", "BR", "CYN", "CT", "CV","FLD", "TRL", "BLVD", "WAY", "TPKE", "TRCE", "TER", "SQ", "SPUR", "PATH", "LN", "LNDG", "JCT", "PASS", "PT", "PIKE", "LOOP"];
		if (space === true){
			address = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + address;
			SAST.map((currentElement) => 
			{
				var regex = new RegExp(" " + currentElement  +"?", "g");
				address = address.replace(regex, "&nbsp;"+currentElement+"<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")	
			});
		}else {
			SAST.map((currentElement) => 
			{
				var regex = new RegExp(" " +currentElement  +"?", "g");
				address = address.replace(regex, "&nbsp;" + currentElement + "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")	
			});
		}
		return address; 
	}
	
	function frmPhoneNo(id)
		{
			return `<label for='phoneNo_${id}'>Phone No: </label>
					<input type='text' id='phoneNo_${id}' name='phoneNo'/>`;
		};	
	function frmAccountNo(id)
		{
			return `<label for='accountNo_${id}'>Account No: </label>
					<input type='text' id='accountNo_${id}' name='accountNo'/>`;
		};	
	function frmEmail(id)
		{
			return `<label for='email_${id}'>Email: </label>
					<input type='text' id='email_${id}' name='email'/>`;
		};	
	function frmUsername(id)
		{frmNewWorkOrderNo
			return `<label for='username_${id}'>Username: </label>
					<input type='text' id='username_${id}' name='username'/>`;
		};	

	function frmPassword(id)
		{
			return `<label for='password_${id}'>Password: </label>
					<input type='text' id='password_${id}' name='password'/>`;
		};	
		
	function frmDocumentType(id){
		var html = `<label for='requestType_${id}'>Request Type: </label>
					<select id='requestType_${id}' onChange='showAddressFields(${id})'>
						<option id=''></option><option id='email'>Email</option>
						<option id='mail'>Mail</option>
					</select>
					<div id='addressFields_${id}'></div>`;
		return html;
	}		
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
		if(documentType =='Mail'){
			html += `<label for='address_${id}'>Mailing Address: </label>
					<input type='text' id='address_${id}'/>`;
		}else{
			html += `<label for='emailAddress_${id}'>Email Address: </label>
					<input type='text' id='emailAddress_${id}'/>`;
		}
		document.getElementById('addressFields_'+id).innerHTML = html; 
	}
	
	function frmOrderID(id)
		{
			return `<label for='orderId_${id}'>Order ID: </label>
					<input type='text' id='orderId_${id}' name='orderId'/>`;
		};	
	function frmDueDate(id)
		{
			return `<label for='duedate_${id}'>Due Date: </label>
					<input type='date' id='duedate_${id}' name='duedate'/>`;
		};	
	function frmAppointmentDate(id)
		{
			return `<label for='apptDate_${id}'>Appointment Date: </label>
					<input type='date' id='apptDate_${id}' name='duedate'/>`;
		};	
	function frmServicePeriod(id)
		{
			return `<label for='startDate_${id}'>Start Date: </label>
					<input type='date' id='startDate_${id}'/><br/>
					<label for='endDate_${id}'>End Date:</label>
					<input type='date' id='endDate_${id}'/>`;
		};	
	function frmShippedDate(id)
		{
			return `<label for='duedate_${id}'>Shipment Delivery Date: </label>
					<input type='text' class='datepicker_recurring_start' id='duedate_${id}' name='duedate'/>`;
		};	
	
	function frmTextArea(id)	
		{
			return `<textArea id='frmTextArea_${id}'></textarea>`;
		}
		
	function frmTracking(id)
		{
			return `<label for='trackingNo${id}'>Tracking Number: </label>
					<input type='text' class='trackingNo' id='trackingNo_${id}' onchange='DDCM.formatTracking(${id})' />`;
		};
	
	function frmDiv(name)
		{
			return (id)=>
			{
				return `<div id='${name}_${id}'></div>`;
			}
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
	//Time
	
	function frmMonthSelectBox(id, question=1){
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var html = `<label for='month${question}_${id}'>Month</label>
					<select id='month${question}_${id}'>`;
		months.map((currentElement)=>{
			console.log(currentElement);
			html += `<option name='${currentElement}'> ${currentElement} </option>`;
		})
		html += `</select>`;
	return html;
	}
	
	function frmYearSelectBox(id, question=1){
		var years = [];
		var date = new Date();
		var year = d.getFullYear();
		while (year >= 1900){
			years.push(year);
			year--;
		}
		console.log(year);
		var html = `<label for='year${question}_${id}' style='display: inline;'>Year</label>
					<select id='year${question}_${id}'>`;
		years.map((currentElement)=>{
			html += `<option name='${currentElement}'>${currentElement}</option>`;
		})
		html +=`</select>`;
		return html;
	}
	
	function GetFormattedDate(date) {
		var todayTime = new Date(date);
		var month = formatNum(todayTime.getMonth() + 1);
		var day = formatNum(todayTime.getDate());
		var year = todayTime.getFullYear();
		return month + "/" + day + "/" + year;
	}
	
	//functions to create and add steps
	function frmStepsToRecreate(id)
	{
		return	`<input type='button' value='+' id='btnstepsToRecreate_${id}' onclick='toggleShow("stepsToRecreate_${id}")'></input>
					<label for='btnstepsToRecreate_${id}' style='display: inline;'>Steps to Recreate: </label>
					<br />
					<div id='stepsToRecreate_${id}' style='display: block'>
					<input type='button' onclick='addStep(${id})' value='Add Step'></input><br/>
						<label for='step1_${id}' style='display: inline;'>Step 1:  </label>
						<input type='text' class='step_${id}' id='step1_${id}'></input><br/>
					</div>`;
	}
		
	function addStep(id){
		var steps = document.getElementsByClassName('step_'+ id);
		var lastStepElement = steps[steps.length -1].id;
		var clicksStep = lastStepElement.replace(/_\d.*/, "")
									   .replace("step", ""); 
		clicksStep++;
		var html = `<label for='step${clicksStep}_${id}' style='display: inline;'>Step ${clicksStep} : </label>
					<input type='text' id='step${clicksStep}_${id}' class='step_${id}'></input><br/>`;
		$( "#stepsToRecreate_" + id).append(html);
	}
	function addWorkAroundSteps(id){
		var wa = document.getElementsByClassName('workAround_'+ id);
		var lastWAElement = wa[wa.length -1].id;
		var clicksWorkAround = lastWAElement.replace(/_\d.*/, "")
											.replace("workAround", ""); 
		clicksWorkAround++;
		var html = `<label for='workAround${clicksWorkAround}_${id}' style='display: inline;'>Step ${clicksWorkAround} : </label>
					<input type='text' class='workAround_${id}' id='workAround${clicksWorkAround}_${id}'></input><br/>`;
		$( "#workAround_"+ id).append(html);
	}
	
	function frmIssueDescription(id)	
		{
			return `<input type='button' value='+' id='btnissueDescriptionDiv_${id}' onclick='toggleShow(\"issueDescriptionDiv_${id}\")'></input>
						<label for='btnissueDescriptionDiv_${id}' style='display: inline;'>Issue Description</label>
						<div id='issueDescriptionDiv_${id}'>
						<textArea id='issueDescription_${id}'></textarea>
						</div>`;
		}
	
	function addScreenshot(id){
		var screenshots = document.getElementsByClassName('screenshots_'+ id);
		var lastScreenshotsElement = screenshots[screenshots.length -1].id;
		var screenshotClicks = lastScreenshotsElement.replace(/_\d.*/, "")
											.replace("screenshot", ""); 
		console.log(screenshotClicks);
		screenshotClicks++;
			var html = 	`<p class='screenshot'>Screenshot ${screenshotClicks}: </p>
						<label for='screenshot${screenshotClicks}_${id}'>Name of Screenshot ${screenshotClicks}: </label>
						<input type='text' id='screenshot${screenshotClicks}_${id}' onchange='generatePCDate(${screenshotClicks}, ${id})' class='screenshots_${id}'/><br/>
						<label for='pcName${screenshotClicks}_${id}'>PC Name: </label>
						<input id='pcName${screenshotClicks}_${id}' class='pcName_${id}'></input> <br/>
						<label for=''duedate${screenshotClicks}_${id}'>Date: </label>
						<input type='text' class='date' id='duedate${screenshotClicks}_${id}'/>
						<br/>`;
						
		$('#screenshots_' + id).append(html);					
	}
	
	function frmErrorMessage(id)
		{
			
			return `<input type='button' value='+' id='btnerrorMessage_${id}' onclick='toggleShow(\"errorMessage_${id}\")'></input>
					  <label for='btnerrorMessage_${id}' style='display: inline;'>Error Message: <br/> </label>
					  <div id='errorMessage_${id}' style='display: block'> 
					  <textarea id='errorMsg_${id}'></textarea>
					  </div>`;
		};
	
	//generic function to show and hide elements
	function toggleShow(div){
		var button1 = "btn" + div;
		if(document.getElementById(div).style.display =='block'){
		document.getElementById(div).style.display='none';
		document.getElementById(button1).value='+';
		}else if(document.getElementById(div).style.display =='none'){
		document.getElementById(div).style.display='block';
		document.getElementById(button1).value='-';
		}else{	
		document.getElementById(div).style.display='none';
		document.getElementById(button1).value='+';	
		}
	}					