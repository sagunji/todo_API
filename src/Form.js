import axios from 'axios';
import * as httpUtil from './httpUtil';
import TupleGenerator from './TupleGenerator';

// const BASE_URL = 'https://todo-simple-api.herokuapp.com';

// const TODO_URL = `${BASE_URL}/todos`;

class Form{
	constructor(){
    this.form = document.createElement('form');
    this.element1;
    this.element3;
    this.element2;
	}
	create() {
	    // var form = document.createElement("form");
      this.element1 = document.createElement("input"); 
	    this.element3 = document.createElement("input"); 
      this.element2 = document.createElement("button");  
	    this.element4 = document.createElement("button");  

	    // this.form.method = "POST";
	    // form.action = "login.php";   

	    this.element1.value="";
	    this.element1.name="userName";
      this.element1.id = "nameId";

	    this.form.appendChild(this.element1);  

      this.element3.value="";
      this.element3.name="description";
      this.element3.id = "descriptionId";
      this.form.appendChild(this.element3);

	    this.element2.type='button';
	    this.element2.name="btnSubmit";
      this.element2.value = "Add New";
      this.element2.style.width = 100;
      this.element2.style.height = 30;
      this.element2.innerHTML = 'Entry';
      this.element2.addEventListener('click',(e)=> {
        this.postData(e);
      });
      this.form.appendChild(this.element2);

      this.element4.type='button';
      this.element4.name="btnUpdate";
      this.element4.value = "Update";
      this.element4.style.width = 100;
      this.element4.style.height = 30;
      this.element4.innerHTML = 'Update';
      this.element4.style.visibility = 'hidden';
      // this.element4 .addEventListener('click',(e)=> {
      //   this.updateData(e);
      // });
      this.form.appendChild(this.element4);



	    // document.body.appendChild(form);

	    // this.form.submit();
	}
  postData(e){
    // debugger;
    e.preventDefault();

    let name = document.getElementById('nameId').value;
    // alert(name);
    let description = document.getElementById('descriptionId').value;
    if(name === "" && description === "")
      return;
    // debugger;
    // debugger;
    // console.log(this);
    let data = {
      "title": name,
      "description":description
    };
    // console.log(data);
    this.placeInServer(data);
    document.getElementById('nameId').value = "";
    document.getElementById('descriptionId').value = "";
  }
  placeInServer(data){
    // debugger;
    // console.log(TODO_URL);
    httpUtil.post(httpUtil.getTODOURL(), data).then(response => {
      this.placeInWindow(response.data.data);
    });    
  }

  placeInWindow(todo){
    this.tupleGenerator = new TupleGenerator();
    
    document.getElementById('container').appendChild(this.tupleGenerator.generate(todo));

  }  
}
export default Form;