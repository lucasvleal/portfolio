import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { 
    Contact,
    ContactFormBox,
    Form,
    FormRow,
    ContainerInput,
    Input,
    TextArea,
    ButtonBox,
    ButtonSend,
} from './styles';

import TitleBox from '../../../general/TitleBox';
import { MontserratText } from '../../../general/Texts';

export default function ContactSection() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }, [])

    const handleChangePhone = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }, [])

    const handleChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }, [])

    const handleChangeMessage = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }, [])

    const handleSendEmail = useCallback((event: FormEvent) => {
        event.preventDefault();
        
        if (!email || !name || !message) {
            alert("Please, insert a valid email, name and message!");
            
            return;
        }
        
        let body = `
        Hello Lucas! I am ${name}, I came to you through your portfolio, I would like to leave a message %0D%0A%0D%0A
        
        My infos ---- %0D%0A
        Phone: ${phone} %0D%0A
        Email: ${email} %0D%0A%0D%0A
        
        Message ---- %0D%0A
        ${message} %0D%0A%0D%0A
        `;
        
        const mailTo = `mailto:lucasleal.dev@gmail.com?subject=Contact%20From%20Portfolio&body=${body}`;
        
        window.location.href = mailTo;
    }, [name, phone, email, message]);

    return (
        <Contact id="contact">
            <TitleBox title="contact" />

            <ContactFormBox>
                <Form>
                    <FormRow>
                        <ContainerInput>
                            <label htmlFor="name">NAME <MontserratText color="tomato" weight="600">*</MontserratText></label>
                            <Input 
                            id="name" 
                            type="text" 
                            placeholder="Your name here..." 
                            onChange={handleChangeName}
                            required 
                            />
                        </ContainerInput>

                        <ContainerInput>
                            <label htmlFor="phone">PHONE</label>
                            <Input 
                            id="phone" 
                            type="text" 
                            placeholder="Your phone here..."
                            onChange={handleChangePhone}
                            />
                        </ContainerInput>
                    </FormRow>

                    <ContainerInput>
                        <label htmlFor="email">EMAIL <MontserratText color="tomato" weight="600">*</MontserratText></label>
                        <Input 
                            id="email" 
                            type="text" 
                            placeholder="Your email here..." 
                            onChange={handleChangeEmail}
                            required 
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <label htmlFor="message">MESSAGE <MontserratText color="tomato" weight="600">*</MontserratText></label>
                        <TextArea 
                            id="message" 
                            placeholder="Your message here..."
                            onChange={handleChangeMessage}
                            required 
                        ></TextArea>
                    </ContainerInput>

                    <ButtonBox>
                        <ButtonSend onClick={handleSendEmail}>
                            SEND
                        </ButtonSend>
                    </ButtonBox>
                </Form>
            </ContactFormBox>
        </Contact>
    )
}