let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

let sortByValue =  (items, parameter, isAsc) => {
    let type = typeof (items[0][parameter]);
    let result, reveresdArray = [];
    if (type === 'string') {
        result = items.sort((a, b) => {
            let aValue = a[parameter].toUpperCase();
            let bValue = b[parameter].toUpperCase();
            if (aValue > bValue) { return 1; }
            if (aValue < bValue) { return -1; }
            return 0;
        });

    } else {
        result = items.sort((a, b) => {
            a[parameter] - b[parameter];
        });

    }
    if (isAsc) {
       reveresdArray =  result.reverse();
    }else {
        reveresdArray =  result;
    }

    console.log("Sort by",parameter,reveresdArray);
}


// sortByValue(users, 'name', false);
// sortByValue(users, 'name', true);
// sortByValue(users, 'id', false);
sortByValue(users, 'id', true);