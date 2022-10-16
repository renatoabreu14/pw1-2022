var list = [
    {"description":"arroz", "amount":1, "value":"25.00"},
    {"description":"cerveja", "amount":12, "value":"2.50"},
    {"description":"carne", "amount":1, "value":"29.00"}
];

function subTotal(amount, value){
    return amount * value;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2);
    str = str.replace(".", ",");
    str = 'R$ ' + str;
    return str;
}

function formatDescription(description){
    var str = description.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function setList(list){
    var table = '<thead>\n' +
        '                <tr>\n' +
        '                    <th>Descricão</th>\n' +
        '                    <th>Quantidade</th>\n' +
        '                    <th>Valor</th>\n' +
        '                    <th>Subtotal</th>\n' +
        '                    <th>-</th>\n' +
        '                </tr>\n' +
        '                </thead>\n'+
        '               <tbody>';

    /*repeticao*/
    for (var key in list){
        table += '<tr>\n' +
            '      <td>'+formatDescription(list[key].description)+'</td>\n' +
            '      <td>'+list[key].amount+'</td>\n' +
            '      <td>'+formatValue(list[key].value)+'</td>\n' +
            '      <td>'+formatValue(subTotal(list[key].amount, list[key].value))+'</td>\n' +
            '      <td>Edit | Delete</td>\n' +
            '     </tr>';
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function addData(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({"description":description, "amount":amount, "value":value});

    setList(list);

}

setList(list);
