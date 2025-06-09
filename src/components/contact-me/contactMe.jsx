import React, { useEffect, useState, useRef } from 'react';
import './contactMe.css';
import Form from 'react-bootstrap/Form';

//svg
import send from '../../assets/icons/send.svg'





function ContactMe() {



    return (
        <>
            <div className='title text-center position-relative'>
                <h1 className='text-center'>CONTACT ME</h1>
                <div className='back-title'>CONTACT ME</div>
            </div>
            <p className='w-50 text-center mx-auto mt-5 text-color text-[32px] container subtitle'>I’m currently available for freelance work</p>

            <div className='contact-page container mt-6 '>
                <Form className='row gy-5 '>
                    <div className='col-sm-12 col-md-6'>
                        <Form.Group className="mb-3">
                            <Form.Label>Your name *</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <Form.Group className="mb-3">
                            <Form.Label>Your email *</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                    </div>
                    <div className='col-sm-12 col-md-12'>
                    <Form.Group className="mb-3">
                        <Form.Label>Your message *</Form.Label>
                        <Form.Control as="textarea" rows={1} placeholder='Enter your needs'/>
                    </Form.Group>
                    </div>
                    <button type='submit' className='btn btn-primary  mx-auto mt-5'>Send Message <img src={send} alt="" /></button>

                </Form>
            </div>
        </>
    )
}

export default ContactMe;
