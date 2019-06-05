var todo = [];
var id = 0;

function addTodo(e) {
    e.preventDefault();
    if(document.getElementById('title').value != ''){
        var title = document.getElementById('title').value;
        id++;
        todo.push({'title' : title} );
        var list = document.getElementById('ol');
        var item = document.createElement('li');
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.value =  id;
        button.addEventListener ("click", function deleteItem(e){
            todo.splice(e.target.value - 1 ,1);
        });
        item.appendChild(document.createTextNode(title));
        item.appendChild(button);
        list.appendChild(item);
        document.getElementById('title').value = '';
        document.getElementById('ol').replaceWith(makeOL(todo));
        
    }

    check();

}



function makeOL(array) {
    // Create the list element:
    var list = document.createElement('ol');
    list.id ='ol';
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i].title));
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.value =  i;
        button.addEventListener ("click", function deleteItem(e){
            todo.splice(e.target.value,1);
            document.getElementById('ol').replaceWith(makeOL(todo));check();
        
        });
        item.appendChild(button);
        // Add it to the list:
        list.appendChild(item);
    }
    
    // Finally, return the constructed list:
    return list;
}

function check(){
    var array = document.getElementById('ol');
    array.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
}