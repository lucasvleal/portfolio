import React, { ChangeEvent, FormEvent, useCallback, useState, useRef, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { types, useAlert } from 'react-alert';

import { 
    Contact,
    ContactFormBox,
    Form,
    FormRow,
    InputGroup,
    ContainerInput,
    Input,
    TextArea,
    ButtonBox,
    ButtonSend,
} from './styles';

import TitleBox from '../../../general/TitleBox';
import { MontserratText } from '../../../general/Texts';

export default function ContactSection() {
    const alert = useAlert();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const isNameInputColorized = useMemo(() => name !== '', [name]);
    const isPhoneInputColorized = useMemo(() => phone !== '', [phone]);
    const isEmailInputColorized = useMemo(() => email !== '', [email]);
    const isMessageInputColorized = useMemo(() => message !== '', [message]);

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
            alert.show("You need to insert a valid email, name and message.", { type: types.ERROR });
            
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
                        <InputGroup>
                            <label htmlFor="name">
                                NAME <MontserratText color="tomato" weight="600">*</MontserratText>
                            </label>

                            <ContainerInput colorized={isNameInputColorized}>
                                <FontAwesomeIcon icon="user" />

                                <Input 
                                    id="name" 
                                    type="text" 
                                    placeholder="Your name here..." 
                                    onChange={handleChangeName}
                                    required 
                                />
                            </ContainerInput>
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="phone">PHONE</label>
                            
                            <ContainerInput colorized={isPhoneInputColorized}>
                                <FontAwesomeIcon icon="phone-alt" />

                                <Input 
                                    id="phone" 
                                    type="text" 
                                    placeholder="Your phone here..."
                                    onChange={handleChangePhone}
                                />
                            </ContainerInput>
                        </InputGroup>
                    </FormRow>

                    <FormRow>
                        <InputGroup>
                            <label htmlFor="email">
                                EMAIL <MontserratText color="tomato" weight="600">*</MontserratText>
                            </label>

                            <ContainerInput colorized={isEmailInputColorized}>
                                <FontAwesomeIcon icon="envelope" />

                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Your email here..." 
                                    onChange={handleChangeEmail}
                                    required 
                                />
                            </ContainerInput>
                        </InputGroup>
                    </FormRow>

                    <FormRow>
                        <InputGroup>
                            <label htmlFor="message">
                                MESSAGE <MontserratText color="tomato" weight="600">*</MontserratText>
                            </label>

                            <TextArea
                                colorized={isMessageInputColorized}
                                id="message" 
                                placeholder="Your message here..."
                                onChange={handleChangeMessage}
                                required 
                            ></TextArea>
                        </InputGroup>
                    </FormRow>

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