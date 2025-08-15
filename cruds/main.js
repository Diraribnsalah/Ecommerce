  //repeat=>for repeating a string 
//length=>for compting a size of the string
//for accessing on any thing in the string we can use name of the string[index] or charAt() or indexOf() or lastIndexOf()
//slice=>for cuting the string slice(first index,last index)
//console.log(name.includes('u'));
//console.log(name.startsWith('t'));
// console.log(name.endsWith('e'));
//push=>for adding the elements in the end of the array 
//unshift=>for adding the elements in start of the array
//shift=splice=>for deleting an element of the array(the end of the array)
//pop=>for deleting an element of the array(the start of the array)
//splice(start,count,add,add,...)
//slice(start,end)
//includes=>for searching in the array ,this function can return false or true
//reverse=>for reversing an elements of the array
//pop=>for deleting an element of the array(the end of the array)
//sort=> for ordering an elements of the array 
//let array=array1.concat(array2);

//let product='tv-samsung';
//let salary=10000;
//let price=prompt('enter a raisonnable price');

//if(price==salary){
//  console.log('you can buy this product');
//}
//else{
//  con
//
//console.log('that is not a raisonnable price 
//enter other price if as possible') 
//let container=document.createElement('div');
//let content=document.createTextNode('hello world');
//container.apppendChild(content);
//console.log(container);
//sdfghjklrtyuik,nbg
//let names=['dirar','ahmed','omar','Nabil','mohamed','Ibrahim'];
//let ages=['18 years old','21 years old','14 years old','16 years old','17 years old','20 years old'];
//let container=document.createElement('div');
//document.body.appendChild(container);
//container.style.textAlign='center';
//.body.style.backgroundColor='black';
//document.body.style.width='100%';
//document.body.style.height='100vh';
//function element(name,ages){
    //let card=document.createElement('div');
    //let title=document.createElement('h2');
    //let age=document.createElement('p');
    //let img=document.createElement('img');
    //card.style.display='inline-block';
    //let head=document.createTextNode(name);
    //let ageContent=document.createTextNode(ages)
    //img.src='image.jpg.jpg'
    //title.appendChild(head);
    //age.appendChild(ageContent);
    //card.style.width='192px';
   // card.style.margin='2px';
   // card.style.padding='10px'; 
//card.style.backgroundColor='#444'
   // card.appendChild(title);
    //card.appendChild(age);
    //card.appendChild(img);
    //container.appendChild(card);
//}
//for(let i=0;i<6;i++){
   // element(names[i],ages[i]);
//} 
//https://www.instagram.com/dirar_ibnsalah/==href
 //https:==protocol
 //www.instagram.com==host name
 ///dirar_ibnsalah/==path name
 let title=document.getElementById('title');
 let price=document.getElementById('price');
 let taxes=document.getElementById('taxes');
 let ads=document.getElementById('ads');
 let discount=document.getElementById('discount');
 let category=document.getElementById('category');
 let count=document.getElementById('count');
 let total=document.getElementById('total');
 let submit=document.getElementById('submit');
 let mood='create';
 let tmp;
 function TOTAL(){
    if(price.value!=''){
   let result=( +price.value+ +taxes.value+ +ads.value)- +discount.value;
   total.innerHTML=result; 
   total.style.background='green'; 
    }else{
       total.innerHTML='';
       total.style.background=' #a00d02';
    } 
 }
 let datapro;
 if(localStorage.length>0){
    datapro=JSON.parse(localStorage.product);
 }else{
  datapro=[];
 }
  submit.onclick=function(){
    let dict={title:title.value ,
       price:price.value,
       taxes:taxes.value,
       ads:ads.value,
       discount:discount.value,
       total:total.innerHTML,
       count:count.value,
       category:category.value }
      if(title.value!=''&& price.value!=''&& category.value!='' && count.value<100){
       if(mood==='create'){
          if(dict.count>1){
             for(let i=0;i<dict.count;i++){
             datapro.push(dict);
             }
          }else{
             datapro.push(dict);
             mood='create';
             submit.innerHTML='create';
             count.style.dislay='block';
          } 
        }else{
          datapro[tmp]=dict;
          count.style.display='inline';
          submit.innerHTML='create';
        }
        DeletData();
      }
       localStorage.setItem('product',JSON.stringify(datapro));
       
       showData();
  }
  function DeletData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
  }
 function showData()
 {
 
 let table='';
 for(let i=0;i<datapro.length;i++){
    table += `<tr>
    <td>${i+1}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td><button onclick="UpdateData(${i})" id="update">update</button></td>
       <td><button onclick="DeleteProd(${i})" id="delete">delete</button></td>`
 
 }
 document.getElementById('tbody').innerHTML=table;
 let deleteAll=document.getElementById('deleteAll');    
 if(datapro.length>0) {
 deleteAll.innerHTML=`<button onclick="deleteAll()">deleteAll</button>`;
 } else{
   deleteAll.innerHTML=''; 
 }
 
 } 
 showData();
 function DeleteProd(i)
 {
  datapro.splice(i,1);
  localStorage.product=JSON.stringify(datapro);
  showData();
 }  
  function deleteAll()
  {
    localStorage.clear();
    datapro.splice(0);
    showData();
 
  }
  
 function UpdateData(i)
 {
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    ads.value=datapro[i].ads; 
    discount.value=datapro[i].discount;
    TOTAL();
    count.style.display= 'none';
    category.value=datapro[i].category;
 submit.innerHTML='update';
 mood='update';
 tmp=i; 
 scroll({
    top:0,
    behavior:'smooth'
 })
 }
 let searchMood='title';
 function getSreachMood(id)
 {
    let search =document.getElementById('search');
 if(id=='searchTitle'){
    searchMood='title';
    search.placeholder='search By Title';
 }else{
    searchMood='category';
    search.placeholder='search By category'; 
 }
 search.focus();
 search.value='';
 }
 function  searchProd(value)
 {
    let table='';
    if(searchMood=='title'){
  for(let i=0;i<datapro.length;i++){
    if(datapro[i].title.toLowerCase().includes(value.toLowerCase())){
    table += `<tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td><button onclick="UpdateData(${i})" id="update">update</button></td>
       <td><button onclick="DeleteProd(${i})" id="delete">delete</button></td>`;
    }
  }
    }else{
       for(let i=0;i<datapro.length;i++){
          if(datapro[i].category.toLowerCase().includes(value.toLowerCase())){
          table += `<tr>
          <td>${i}</td>
          <td>${datapro[i].title}</td>
          <td>${datapro[i].price}</td>
          <td>${datapro[i].taxes}</td>
          <td>${datapro[i].ads}</td>
          <td>${datapro[i].discount}</td>
          <td>${datapro[i].total}</td>
          <td>${datapro[i].category}</td>
          <td><button onclick="UpdateData(${i})" id="update">update</button></td>
             <td><button onclick="DeleteProd(${i})" id="delete">delete</button></td>`;
          }
        }
    }
    document.getElementById('tbody').innerHTML=table;
 }