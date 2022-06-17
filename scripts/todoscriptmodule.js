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

    newLocalArray = localStorage.getItem('itemsJson'); // Extracting info from the local storage
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
                    class="bg-green-600 text-white px-2 rounded-sm">Complete</button></div>
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
    localarray.splice(deletingIndex,1)
    console.log(typeof(deletingIndex))
    console.log(localarray)
    localStorage.setItem('itemsJson',JSON.stringify(localarray))
    updatelist()
}

document.getElementById('Add-button').addEventListener('click',updatelist);
updatelist();
