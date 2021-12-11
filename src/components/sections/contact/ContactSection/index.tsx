import React, { ChangeEvent, FormEvent, useCallback, useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import Loader from '../../../general/Loader';

import { constructEmailBody } from '../../../../store/utilities/formatters';
import { isValidEmail } from '../../../../store/utilities/validations';
import useAlert, { alertTypes } from '../../../../store/hooks/useAlert';

import { sendEmail } from '../../../../store/api/sendEmail';

export default function ContactSection() {
    const alert = useAlert();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isSending, setIsSending] = useState(false);

    const [hasNameInputError, setHasNameInputError] = useState(false);
    const [hasPhoneInputError, setHasPhoneInputError] = useState(false);
    const [hasEmailInputError, setHasEmailInputError] = useState(false);
    const [hasMessageInputError, setHasMessageInputError] = useState(false);

    const isNameInputFullfilled = useMemo(() => name !== '', [name]);
    const isPhoneInputFullfilled = useMemo(() => phone !== '', [phone]);
    const isEmailInputFullfilled = useMemo(() => email !== '', [email]);
    const isMessageInputFullfilled = useMemo(() => message !== '', [message]);

    useEffect(() => {
        if (hasNameInputError) {
            setHasNameInputError(false);
        }
    }, [name])

    useEffect(() => {
        if (hasEmailInputError) {
            setHasEmailInputError(false);
        }
    }, [email])

    useEffect(() => {
        if (hasMessageInputError) {
            setHasMessageInputError(false);
        }
    }, [message])

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

    const handleSendEmail = useCallback(async (event: FormEvent) => {
        setIsSending(true);

        event.preventDefault();
        
        if (!email || !name || !message) {
            if (!email) {
                setHasEmailInputError(true);
            }

            if (!name) {
                setHasNameInputError(true);
            }

            if (!message) {
                setHasMessageInputError(true);
            }

            alert.show({
                message: "Please, insert all mandatory fields.", 
                type: alertTypes.ERROR,
            });
            
            setIsSending(false);
            return;
        }

        if (!isValidEmail(email)) {
            setHasEmailInputError(true);

            alert.show({
                message: "Please, insert a valid email.", 
                type: alertTypes.ERROR,
            });
            
            setIsSending(false);
            return;
        }
        
        const body = constructEmailBody({
            email,
            name,
            message,
            phone,
        });

        const response = await sendEmail(body);

        if (response) {
            alert.show({
                message: "Your email was been sent and I'll return you soon.", 
                type: alertTypes.SUCCESS,
            });
            
            clearData();
            return;
        }

        alert.show({
            message: "Something went wrong sending your email, please try again later.", 
            type: alertTypes.ERROR,
        });

        setIsSending(false);
    }, [name, phone, email, message]);

    const clearData = useCallback(() => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setIsSending(false);
    }, []);

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

                            <ContainerInput hasError={hasNameInputError} fullfilled={isNameInputFullfilled}>
                                <FontAwesomeIcon icon="user" />

                                <Input 
                                    id="name" 
                                    type="text" 
                                    placeholder="Your name here..." 
                                    onChange={handleChangeName}
                                    value={name}
                                    required 
                                />
                            </ContainerInput>
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="phone">PHONE</label>
                            
                            <ContainerInput hasError={hasPhoneInputError} fullfilled={isPhoneInputFullfilled}>
                                <FontAwesomeIcon icon="phone-alt" />

                                <Input 
                                    id="phone" 
                                    type="text" 
                                    placeholder="Your phone here..."
                                    onChange={handleChangePhone}
                                    value={phone}
                                />
                            </ContainerInput>
                        </InputGroup>
                    </FormRow>

                    <FormRow>
                        <InputGroup>
                            <label htmlFor="email">
                                EMAIL <MontserratText color="tomato" weight="600">*</MontserratText>
                            </label>

                            <ContainerInput hasError={hasEmailInputError} fullfilled={isEmailInputFullfilled}>
                                <FontAwesomeIcon icon="envelope" />

                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="Your email here..." 
                                    onChange={handleChangeEmail}
                                    value={email}
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
                                hasError={hasMessageInputError} 
                                fullfilled={isMessageInputFullfilled}
                                id="message" 
                                placeholder="Your message here..."
                                onChange={handleChangeMessage}
                                value={message}
                                required 
                            ></TextArea>
                        </InputGroup>
                    </FormRow>

                    <ButtonBox>
                        <ButtonSend disabled={isSending} onClick={handleSendEmail}>
                            { isSending ? <Loader size="small" /> : 'SEND'}
                        </ButtonSend>
                    </ButtonBox>
                </Form>
            </ContactFormBox>
        </Contact>
    )
}