import axios from 'axios';
import React, { useState } from 'react'
import aws from 'aws-sdk'
import "./index.css"

const UploadImage = () => {
    const [image, setImage] = useState('');
    const onSubmit = () => {
        console.log('image: ', image)
    }

    const fileSelectedHandler = event => {
        console.log(event.target.files[0])
        console.log(event.target.files[0].name)
        setImage(event.target.files[0])
    }

    const region = "ap-southeast-1"
    const bucketName = "mpindo"
    const accessKeyId = "EN7KLGSM2IIEXYSXQG5Y"
    const secretAccessKey = "Ox3K1JPiDcXMUN6kZueMjiHHIi0g3ptK/ttdicQ5y/4"
    // console.log(image.name)
    const s3 = new aws.S3({
        accessKeyId,
        secretAccessKey
    })
    const fileUploadHandler = () => {
        // axios.get('https://mpindo.sgp1.digitaloceanspaces.com')
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        const uploadedImage =  s3.upload({
            Bucket: bucketName,
            Key: image.name,
            Body: image
        }).promise();
        console.log(uploadedImage.Location);
    }
    return (
        <div className='upload-page'>
            
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
                            
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                                    <input type="file" accept='image/*' onChange={fileSelectedHandler} class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input"/>
                                </div>
                                <div>
                                    <button onClick={fileUploadHandler} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Upload</button>
                                </div>
                                <div>
                                    <a href="/list">
                                    <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">List Uploaded</button>
                                    </a>
                                    
                                </div>
                                
                            
                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
        
    )
}

export default UploadImage;