{/* <tr>
<td class="w-1/5">${index + 1}</td>
<td>${element[0]}</td>
<td class="w-1/5">
    <div class="flex flex-col  items-center justify-center">
        <div class="flex"><p class="text-green-600">Marked done</p></div>
        <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:${element[1]}</p>
    </div>
</td>
</tr> */}

function updatelist() {
    const taskdate = new Date();
    const taskday = taskdate.getDay();
    const taskmonth = taskdate.getMonth();
    const taskyear = taskdate.getFullYear();

    const fullTaskYear = `${taskday}/${taskmonth}/${taskyear}`; // It will save the date of the task without asking for the input

    let task = document.getElementById('task').value; // This will get the value of the input task box
    let localArray = []; // The values will be saved in this Array


    if (task != "") {  //This codition will prevent it from saving empty strings 
        if (localStorage.getItem('itemsJson') == null) {  // This condition will the array on the local storage when there isn't anything on the local storage

            localArray.push([task, fullTaskYear]);  // adding the values to the array we made
            localStorage.setItem('itemsJson', JSON.stringify(localArray));  // pushing arrow to the localStorage
        }
        else {
            newLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
            localArray = JSON.parse(newLocalArray);  // Parsing the details available on local storage
            localArray.push([task, fullTaskYear])
            localStorage.setItem('itemsJson', JSON.stringify(localArray));  // pushing arrow to the localStorage
        }
    }
    if (localStorage.getItem('itemsJson') == null) {  // This condition will the array on the local storage when there isn't anything on the local storage

        localArray.push([task, fullTaskYear]);  // adding the values to the array we made
        // localStorage.setItem('itemsJson', JSON.stringify(localArray));  // pushing arrow to the localStorage
    }
}

function pendingUpdate() {
    let localArray = []
    let newLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
    localArray = JSON.parse(newLocalArray);  // Parsing the details available on locala storage
    tbody = document.getElementById('tbody')

    let str = ""; // Creating an empty string to save the table code

    // console.log(localArray);
    localArray.forEach((element, index) => {  //Running for each loop to put the td according to the row
        str += `<tr>
    <td class="w-1/5">${index + 1}</td>
    <td>${element[0]}</td>
    <td class="w-1/5">
        <div class="flex flex-col  items-center justify-center">
            <div class="flex"><button
                class="bg-red-600 text-white px-2 rounded-sm mr-1" onclick="deleted(${index})">Delete</button><button
                    class="bg-green-600 text-white px-2 rounded-sm" id="complete" onclick="done(${index})">Complete</button></div>
            <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:${element[1]}</p>
        </div>
    </td>
</tr>`
    });
    tbody.innerHTML = str;  // Finally adding the code to the html
    document.getElementById('task').value = "";
}

function deleted(deletingIndex) {
    newnewLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
    localarray = JSON.parse(newnewLocalArray)
    //Deletes the item from the array
    localarray.splice(deletingIndex, 1)
    // console.log(typeof (deletingIndex))  Verifying the type of the array more like object
    localStorage.setItem('itemsJson', JSON.stringify(localarray))
    pendingUpdate()
}

function done(doneindex) {
    let doneArray = []; // creating an empty array to push the completed tasks to local storage in another key.
    if (localStorage.getItem('doneJson') == null) {
        newLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
        newdonearray = JSON.parse(newLocalArray) // Parsing the local storage details
        doneArray.push(newdonearray[doneindex]) // Pushing the completed task to the new Array
        localStorage.setItem('doneJson', JSON.stringify(doneArray))
        console.log('condition0')
    }

    else {
        newLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
        newdonearray = JSON.parse(newLocalArray) // Parsing the local storage details

        mydonearray = localStorage.getItem('doneJson');
        doneArray = JSON.parse(mydonearray);
        // console.log(typeof(doneArray)) Also verifying the type of the object 
        doneArray.push(newdonearray[doneindex])
        localStorage.setItem('doneJson', JSON.stringify(doneArray))
    }
    newLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
    newdonearray = JSON.parse(newLocalArray) // Parsing the local storage details

    //Deletes the item from the array
    newdonearray.splice(doneindex, 1)

    localStorage.setItem('itemsJson', JSON.stringify(newdonearray))
    console.log('its secret i am working on it')
    pendingUpdate()
    doneupdate()
}

function doneupdate() {
    let gotArray = [];
    let getStorage = localStorage.getItem('doneJson'); // Getting the done tasks from the local array
    gotArray = JSON.parse(getStorage);  // Parsing it and assigning it to another array

    let doneStr = "";
    if (localStorage.getItem('doneJson')!=null){
        gotArray.forEach((element, index) => {
            doneStr += ` <tr>
            <td class="w-1/5">${index + 1}</td>
            <td>${element[0]}</td>
            <td class="w-1/5">
                <div class="flex flex-col  items-center justify-center">
                    <div class="flex"><p class="text-green-600">Marked done</p></div>
                    <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:${element[1]}</p>
                </div>
            </td>
        </tr>`
        });
        document.getElementById('doneBody').innerHTML = doneStr;
    }
}
setInterval(updatelist(), 1000)
document.getElementById('Add-button').addEventListener('click', updatelist);
document.getElementById('Add-button').addEventListener('click', pendingUpdate);
doneupdate();
pendingUpdate();