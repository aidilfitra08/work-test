// import logo from '../logo.svg';
import '../App.css';
import React, { useState } from 'react'
import axios from 'axios';

function ListUpload() {
    const [lists, setList] = useState([]);
    axios.get('https://mpindo.sgp1.digitaloceanspaces.com')
        .then(res => {
            console.log(res.data);
            var convert = require('xml-js');
            // var xml =
            // '<?xml version="1.0" encoding="utf-8"?>' +
            // '<note importance="high" logged="true">' +
            // '    <title>Happy</title>' +
            // '    <todo>Work</todo>' +
            // '    <todo>Play</todo>' +
            // '</note>';
            var result = convert.xml2json(res.data, {compact: true, spaces: 4});
            // var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
            // console.log(result);
            setList(result);
        })
        .catch(err => {
            console.log(err);
        });
    return (
        <div className="listUpload">
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="logo"/>
                        Coding Test  
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Upload Image With CDN
                            </h1>
                            <table class="table-auto">
                                <thead>
                                    
                                </thead>
                                <tbody>
                            {/* {lists.map((list) => {
                                console.log(list)
                               return (<tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                                </tr> )
                            }

                            )} */}
                                </tbody>
                            </table>
                            <div>
                                <a href="/">
                                    <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</button>
                                </a>
                                    
                            </div>
                                
                               
                                
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
  );
}

export default ListUpload;
