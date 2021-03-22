// Functions:
// 1. function to get DOM element from string
getElementFromString = (string) => {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// 2. function for fetching data
fetchData = async (url, requestType, contentType, data) => {
    let requestParams = {
        method: requestType
    }
    if (contentType == 'POST') {
        requestParams[headers] = {
            'Content-type': 'application/json; charset=UTF-8',
        }
        requestParams[body] = JSON.stringify(data);
    }
    let response = await fetch(url, requestParams)
    let text = await response.text()
    return text
}

// Init params count
let paramsCount = 1;

// Init hide parameters box
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

let jsonBox = document.getElementById('jsonBox');

// when click on json box hide params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    parametersBox.style.display = 'none';
    jsonBox.style.display = 'block';
})

// when click on params box hide json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    jsonBox.style.display = 'none';
    parametersBox.style.display = 'block';
})


// when click on plus button add more parameters
let addParams = document.getElementById('addParams');
addParams.addEventListener('click', () => {
    let moreParams = document.getElementById('moreParams');
    let htmlString = `
    <div class="form-row my-3">
        <label for="paramsKey${paramsCount + 1}" class="col-sm-2 col-form-label">Parameter ${paramsCount + 1}</label>
        <div class="col-md-4">
            <input type="text" class="form-control" id="paramsKey${paramsCount + 1}" placeholder="Enter Parameter ${paramsCount + 1} Key">
        </div>
        <div class="col-md-4">
            <input type="text" class="form-control" id="paramsValue${paramsCount + 1}" placeholder="Enter Parameter ${paramsCount + 1} Value">
        </div>
        <button type="button" class="btn btn-primary deleteParams">&minus;</button>
    </div>
    `
    // convert the element string to dom node
    let paramElement = getElementFromString(htmlString);
    moreParams.appendChild(paramElement);
    paramsCount++;

    // Add an eventlistener to remove params
    let deleteParams = document.getElementsByClassName('deleteParams');
    for (const param of deleteParams) {
        param.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }
})

// when click on submit button
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    document.getElementById('responseText').innerHTML = 'Please wait .... Fetching data ....';

    // getting form data
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // collect params when content type params
    if (contentType == 'Params') {
        data = {};
        for (let i = 1; i <= paramsCount; i++) {
            if (document.getElementById(`paramsKey${i}`) != undefined) {
                let key = document.getElementById(`paramsKey${i}`).value;
                let value = document.getElementById(`paramsValue${i}`).value;
                data[key] = value;
            }
        }
    } else {
        data = document.getElementById('jsonBoxText').value;
    }
    data = JSON.stringify(data);
    console.log(url, requestType, contentType, data)

    fetchData(url, requestType, contentType, data).then((result) => {
        document.getElementById('responseText').innerHTML = result;
        Prism.highlightAll();
    });
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 9) {
        let editor = document.getElementById("jsonBoxText");
        let doc = editor.ownerDocument.defaultView;
        let sel = doc.getSelection();
        let range = sel.getRangeAt(0);

        let tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
        range.insertNode(tabNode);

        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode); 
        sel.removeAllRanges();
        sel.addRange(range);
    }
});