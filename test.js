var todo= 
[
    // {
//     id:1,
//     title : 'First TODO',

// },
// {
//     id:2,
//     title : 'TODO 2',
    
// },
// {
//     id:3,
//     title : 'First TODO 3',
    
// },
// {
//     id:4,
//     title : 'First TODO 4 ',
    
// },
// {
//     id:5,
//     title : 'First TODO 5',
    
// },
// {
//     id:6,
//     title : 'First TODO 6',
    
// }
]
var id = 0;

function addTodo() {
    
    if(document.getElementById('title').value != ''){
        var title = document.getElementById('title').value;
        id++;
        todo.push({'title' : title, 'id' : id} );
        var list = document.getElementById('ol');
        var item = document.createElement('li');
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        // button.id = "delete";
        button.value =  id;
        button.addEventListener ("click", function deleteItem(e){
            console.log(e.target.value);
            let id = e.target.value;
            todo.splice(id - 1 ,1);
            // console.log(todo);
            document.getElementById('ol').replaceWith(makeOL(todo));
            
        
        });
        item.appendChild(document.createTextNode(title));
        item.appendChild(button);
        list.appendChild(item);
        // document.getElementById('title').value = '';
        
    }
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
        button.innerHTML = "Delete";
        button.value =  i;
        button.addEventListener ("click", function deleteItem(e){
            console.log(e.target.value);
            let id = e.target.value;
            todo.splice(id - 1,1);
            console.log(todo);
            document.getElementById('ol').replaceWith(makeOL(todo));
            
        
        });
        item.appendChild(button);
        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
// document.getElementById('list').appendChild(makeOL(todo));