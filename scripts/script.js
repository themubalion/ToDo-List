{/* <tr>
    <td class="w-1/5">1</td>
    <td>Coffee</td>
    <td class="w-1/5">
        <div class="flex flex-col  items-center justify-center">
            <div class="flex"><button
                class="bg-red-600 text-white px-2 rounded-sm mr-1">Delete</button><button
                    class="bg-green-600 text-white px-2 rounded-sm">Complete</button></div>
            <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:17/06/2022</p>
        </div>
    </td>
</tr> */}

function updatelist() {
    const taskdate = new Date();
    const taskday = taskdate.getDay();
    const taskmonth = taskdate.getMonth();
    const taskyear = taskdate.getFullYear();

    const fullTaskYear = `${taskday}/${taskmonth}/${taskyear}`;

    let task = document.getElementById('task').value; // This will get the value of the input task box
    let localArray = [];

    // console.log(task) // console output for testing the above variable

    //Trying to avoid bugging by the conditional statements on reload
    if (task != "") {
        // console.log(task);
        if (localStorage.getItem('itemsJson') == null) {
            localArray.push([task, fullTaskYear]);
            localStorage.setItem('itemsJson', JSON.stringify(localArray));
            console.log('condition 1')

            let str = "";
            // console.log(localArray);
            localArray.forEach((element, index) => {
                str += `<tr>
            <td class="w-1/5">${index + 1}</td>
            <td>${element[0]}</td>
            <td class="w-1/5">
                <div class="flex flex-col  items-center justify-center">
                    <div class="flex"><button
                        class="bg-red-600 text-white px-2 rounded-sm mr-1">Delete</button><button
                            class="bg-green-600 text-white px-2 rounded-sm">Complete</button></div>
                    <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:${element[1]}</p>
                </div>
            </td>
        </tr>`
            });
            tbody.innerHTML = str;
            localStorage.setItem('itemsJson', JSON.stringify(localArray));
        }

        else {
            myLocalArray = localStorage.getItem('itemsJson');
            localArray = JSON.parse(myLocalArray);
            localArray.push([task, fullTaskYear]);
            localStorage.setItem('itemsJson', JSON.stringify(localArray));
            console.log('condition 2')

            let str = "";
            // console.log(localArray);
            localArray.forEach((element, index) => {
                str += `<tr>
            <td class="w-1/5">${index + 1}</td>
            <td>${element[0]}</td>
            <td class="w-1/5">
                <div class="flex flex-col  items-center justify-center">
                    <div class="flex"><button
                        class="bg-red-600 text-white px-2 rounded-sm mr-1">Delete</button><button
                            class="bg-green-600 text-white px-2 rounded-sm">Complete</button></div>
                    <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:${element[1]}</p>
                </div>
            </td>
        </tr>`
            });
            tbody.innerHTML = str;
            localStorage.setItem('itemsJson', JSON.stringify(localArray));
        }



    }
    else {
        console.log('Please add the task first');
        console.log('condition 3')
        myLocalArray = localStorage.getItem('itemsJson');
        localArray = JSON.parse(myLocalArray);
        // console.log(localArray)
        localStorage.setItem('itemsJson', JSON.stringify(localArray));

        let str = "";
        localArray.forEach((element, index) => {
            str += `<tr>
            <td class="w-1/5">${index + 1}</td>
            <td>${element[0]}</td>
            <td class="w-1/5">
                <div class="flex flex-col  items-center justify-center">
                    <div class="flex"><button
                        class="bg-red-600 text-white px-2 rounded-sm mr-1">Delete</button><button
                            class="bg-green-600 text-white px-2 rounded-sm">Complete</button></div>
                    <p class="text-xs text-gray-700"><span class="font-bold">Date</span>:${element[1]}</p>
                </div>
            </td>
        </tr>`
        });
        tbody.innerHTML = str;
        localStorage.setItem('itemsJson', JSON.stringify(localArray));
    }
}
document.getElementById('Add-button').addEventListener('click', updatelist);
// updatelist()
