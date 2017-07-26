import axios from 'axios';
import * as httpUtil from './httpUtil';

const BASE_URL = 'https://todo-simple-api.herokuapp.com';

const TODO_URL = `${BASE_URL}/todos`;

class TupleGenerator{
  constructor(){
    this.mainDiv = this.elementCreator('div',500, 25);
    this.sn = this.elementCreator('div',100, 25);
    this.name = this.elementCreator('div',100, 25);
    this.desc = this.elementCreator('div',100, 25);
    this.cross = this.elementCreator('button',100, 25);
    this.updateBtn = this.elementCreator('button',100, 25);
  }
  generate(todo){
    this.mainDiv.setAttribute('id', todo.id);
    this.sn.innerHTML = todo.id;
    this.name.innerHTML = todo.title;
    this.desc.innerHTML = todo.description;

    this.cross.setAttribute('id', todo.id);
    this.cross.innerHTML = "X";
    this.cross.addEventListener('click', (e)=> { this.deleteData(e, todo.id)});

    this.updateBtn.setAttribute('value', todo.id);
    this.updateBtn.innerHTML = "Update";
    this.updateBtn.addEventListener('click', (e)=> { this.updateData(e, todo)});

    this.mainDiv.appendChild(this.sn);
    this.mainDiv.appendChild(this.name);
    this.mainDiv.appendChild(this.desc);
    this.mainDiv.appendChild(this.cross);
    this.mainDiv.appendChild(this.updateBtn);
    return this.mainDiv;
  }

  elementCreator(element, width, height){
    let ele = document.createElement(element);
    ele.style.width = width;
    ele.style.height = height;
    ele.style.float = 'left';
    return ele;
  }

  deleteData(e, sn){
    // debugger;
  // console.log(sn);
  httpUtil.remove(TODO_URL, sn).then(response => {
    document.getElementById('container').removeChild(document.getElementById(sn));
  });

  e.preventDefault();
  }

updateData(e, data){
  // console.log(data);
  let name = document.getElementById('nameId');
  name.value = data.title;

  let desc = document.getElementById('descriptionId');
  desc.value = data.description;
  
  let frm = document.getElementsByTagName('form')[0];
  let btns = frm.getElementsByTagName('button');
  // for (var i = 0; i < btns.length; i++) {
    btns[0].style.visibility = "hidden";
    btns[1].style.visibility = "visible";

    btns[1].onclick = (e)=>{
      this.dothis(data.id);
    }
    e.preventDefault();
  }

  dothis(id){
    let tuple = new TupleGenerator();
  // alert('do smth');
  let name = document.getElementById('nameId').value;
  let desc = document.getElementById('descriptionId').value;

  let data = {
      "title": name,
      "description":desc
    };

  httpUtil.put(TODO_URL, id, data).then(response => {
    document.getElementById('container').removeChild(document.getElementById(id));
    console.log(this.generate(response.data.data));
    document.getElementById('container').appendChild(this.generate(response.data.data));

  });
  let frm = document.getElementsByTagName('form')[0];
    let btns = frm.getElementsByTagName('button');
     btns[0].style.visibility = "visible";
      btns[1].style.visibility = "hidden";
      document.getElementById('nameId').value = "";
      document.getElementById('descriptionId').value = "";
  }
}


export default TupleGenerator; 