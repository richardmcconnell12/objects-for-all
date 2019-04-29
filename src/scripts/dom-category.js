const categoryDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.id}
            </div>`;
};

const categoryDetailDom = (obj) => {
    return `<div>
                ${obj.name}
                ${obj.junk}
            </div>`;
};

document.querySelector("#junk__category");

const categoryDropDown = (data) => {
    let options = `<option value="${data.id}>${data.name}</option>`
    console.log(options)
    return `<option value="${data.id}">${data.name}</option>`
};

const buildOptions = (data) => {
    data.forEach(element => {
        console.log(element)
        optionContainer.innerHTML += categoryDropDown(element);
    })
}

const buildCategoryDom = (data) => {
    mainContainer.innerHTML = "";
    data.forEach(element => {
        mainContainer.innerHTML += categoryDom(element);
    });
};

const buildCategoryDetailDom = (data) => {
    console.log("data", data);
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += `<h2>${data.name}</h2>`;
    data.junk.forEach(element => {
        mainContainer.innerHTML += categoryDetailDom(element);
    });
};