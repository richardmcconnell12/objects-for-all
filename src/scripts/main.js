
handleGetJunkClick = () => {
    API.getJunk()
        .then(result => {
            console.log("junk", result);
            buildJunkDom(result);
        });
};

handleGetCategoryClick = () => {
    API.getCategories()
        .then(result => {
            console.log("category", result);
            buildCategoryDom(result);
        });
};

handleGetCategoryDetailClick = () => {
    API.getCategoryWithJunk()
        .then(result => {
            console.log("category list", result);
            buildCategoryDetailDom(result);
        });
};

document.querySelector("#btn-saveCategory").addEventListener("click", event => {
    const category = document.querySelector(".junk__category").value;

    // Once you have collected all the values, build your data structure
    const categoryObj = {
        name: category
    };

    API.saveCategory(categoryObj)
        .then(parsedResult => {
            console.log("what is the result", parsedResult);
        });

});

document.querySelector("#btn-saveInput").addEventListener("click", event => {
    const junk = document.querySelector(".junk__input").value
    const category = parseInt(document.querySelector("#catagories__option").value)

    const junkObj = {
        name: junk,
        categoryId: category

    };

    API.saveNewJunk(junkObj)
        .then(result => {
            console.log("What's the new junk", result)
        })
});

API.getCategories()
    .then(results => {
        buildOptions(results)
    })

document.querySelector("#btn-getJunk").addEventListener("click", handleGetJunkClick);
document.querySelector("#btn-getCategories").addEventListener("click", handleGetCategoryClick);
document.querySelector("#btn-getCategoryDetails").addEventListener("click", handleGetCategoryDetailClick);

const mainContainer = document.querySelector("#container");
const optionContainer = document.querySelector("#catagories__option");






