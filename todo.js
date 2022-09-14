let input=prompt("what would you like to do?");
const todos =['Collect chicken eggs','Clean Litter Box'];
while(input !== 'quit' && input !=='q'){
    if(input === 'List'){
        console.log('************');
        for( let i=0; i<todos.length;i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('************');
    } else if( input ==='new'){
        const newTodo = prompt(' OK,What is the new tado?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if(input === 'delete'){
        const index =parseInt(prompt('Ok,enter an index to delet:'));
        if(!Number.isNaN(index)){ 
            const deleted = todos.splice(index,1);
             console.log(`ok , deleted  ${deleted[0]}`);
        }
    }
    input=prompt("what would you like to do?");
}
console.log("Ok QUIT THE APP!");