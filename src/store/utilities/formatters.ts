interface EmailBodyProps {
    name: string;
    email: string;
    message: string;
    phone?: string;
}

export const constructEmailBody = ({ name, email, message, phone }: EmailBodyProps) => {
    const body = `
    <h2>Novo contato via Portfolio</h2>

    <b>Nome:</b> ${name}
    <br />
    <b>Email:</b> ${email}
    <br />
    <b>Phone:</b> ${phone || '---'}
    <br /><br/>

    <b>Mensagem:</b>
    <br />
    ${message}
    <br/><br/>

    <h3>------------------------------------</h3>
    `;

    return body;
}