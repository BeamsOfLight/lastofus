if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
        console.log('Successfully registered');
    }).catch(err => {
        console.log('Error while registering SW')
    });
}




function get_BPAs() {
    var BPAs = new Array;
    var BPAs_str = localStorage.getItem('BloodPressureApp');
    if (BPAs_str !== null) {
        BPAs = JSON.parse(BPAs_str);
    }
    return BPAs;
}

function add() {
    var task = document.getElementById('task').value;

    var BPAs = get_BPAs();
    BPAs.push(task);
    localStorage.setItem('BloodPressureApp', JSON.stringify(BPAs));

    show();

    return false;
}

function clearDefault(a) {
    if (a.defaultValue == a.value) { a.value = "" }

};
function remove() {
    var id = this.getAttribute('id');
    var BPAs = get_BPAs();
    todos.splice(id, 1);
    localStorage.setItem('PBAs', JSON.stringify(BPAs));

    show();

    return false;
}

/*function show() {
    var BPAs = get_BPAs();

    var html = '<ul>';
    for (var i = 0; i < BPAs.length; i++) {
        html += '<li>' + BPAs[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    };
    html += '</ul>';

    document.getElementById('PBAs').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}*/

//document.getElementById('add').addEventListener('click', add);
//show();
