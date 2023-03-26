let myForm = document.getElementById('myform');
let description= document.getElementById('descriptionInput')
let category= document.getElementById('category')
let expanse= document.getElementById('expanse')
let expanseId= document.getElementById('expanseId');
const userList = document.getElementById('displayList');

const url= "http://localhost:3000";


myForm.addEventListener('submit',add);
userList.addEventListener('click',remove);


window.addEventListener('DOMContentLoaded',()=>{   
axios.get(url+'/getExpenses').then(res=>{ 
    console.log('<lodingExpenses>',res);
    displayExpanses(res.expanses);
   }).catch(err=>{console.log("error found"); console.log(err)});  

});


async function add(e){
e.preventDefault();
if(description.value===''||expanse.value===''){ alert('please enter all fields')}
else{
   
  let obj={"amount":expanse.value, "category":category.value,"description": description.value}
await axios.post(url+'/addExpenses',obj).then(res=> {console.log('<sqlNewDataRecieved>',res)}).catch(err=>{console.log(err);})
await axios.get(url+'/getExpenses').then(res=>{ 
  console.log('<gettingAllExpenses>',res)
  displayExpanses(res.expanses)
  ; }).catch(err=>{console.log(err)});  
}
}

//display expanses
function displayExpanses(data){
let ul = document.getElementById('displayList')
while (userList.firstChild) {
  userList.removeChild(userList.lastChild);
  }
for (let i = 0; i < data.length  ; i++){
  
    let destring=data[i];
//creating li object
let li= document.createElement('li');
li.id=destring.id;
li.appendChild(document.createTextNode(destring.ammount + ': ' ))
li.appendChild(document.createTextNode(destring.category+ " - "))
li.appendChild(document.createTextNode(destring.description))


let btn = document.createElement('button');
btn.className='delete'
btn.appendChild(document.createTextNode('DEL_EXP'))
li.appendChild(btn)
userList.appendChild(li);

expanse.value=''
description.value=''

}
};
async function remove(e){
  if(e.target.classList.contains('delete')){
    var li= e.target.parentElement;
     let key = li.id;
     console.log(key);
    await axios.delete(url+'/deleteExpenses'+key).
     then( res=>{console.log('<deletedExpense>',res);
     }).catch(err=>{console.log(err);})
    }
  
   await axios.get(url+'/getExpenses').then(res=>{
  displayExpanses(res.expanses);
  } )
  .catch(err=>console.log(err))
}

