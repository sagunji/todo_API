import axios from 'axios';
import * as httpUtil from './httpUtil';
import Container from './Container'
import Form from './Form'
import TupleGenerator from './TupleGenerator'

let container = new Container('container');
container.create();

let form = new Form();
form.create();
container.append(form.form); 

let tuple;

httpUtil.get(httpUtil.getTODOURL()).then(response => {

  response.data.data.forEach((todo) => {
    tuple = new TupleGenerator();
    container.append(tuple.generate(todo));
    
  });
});
