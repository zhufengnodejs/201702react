import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from './components/Pagination';
render(<Pagination pageNum={1} totalPages={5}/>,document.querySelector('#root'));