function getCategories() {
    let defaultCategories = ['cs.CL', 'cs.LG', 'cs.AI', 'cs.CV', 'stat.ML'];
    let Categories = JSON.parse(localStorage.getItem('Categories')) || defaultCategories;
    return Categories;
}
function showCategories() {
    let Categories = getCategories();
    for (let i = 0; i < Categories.length; i++) {
        var container = document.getElementById('cat-' + Categories[i]);
        container.style.display = 'inline-block';
    }
}
showCategories();
function setCategories() {
    let Categories = getCategories();
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (Categories.indexOf(input.value) !== -1) {
            input.checked = true;
        }
    }
    document.getElementById('category-list').style.display = 'none';
    document.getElementById('category-form').style.display = 'block';
}
function saveCategories() {
    var checkedCategories = [];
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checked) {
            checkedCategories.push(input.value);
        }
    }
    let oldCategories = getCategories();
    for (let i = 0; i < oldCategories.length; i++) {
        var container = document.getElementById('cat-' + oldCategories[i]);
        container.style.display = 'none';
    }
    localStorage.setItem('Categories', JSON.stringify(checkedCategories));
    showCategories();
    document.getElementById('category-list').style.display = 'block';
    document.getElementById('category-form').style.display = 'none';
}
function showAnswer() {
    var container = document.getElementById('when-how');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}