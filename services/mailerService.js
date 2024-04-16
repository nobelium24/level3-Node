//@ts-check
const nodemailer = require("nodemailer");
const {MAILER_PASSWORD, MAILER_GMAIL} = require("../constants")

const sendMail = async (email, name ) => {
    const messageTemplate = `
        <div>
            <h2>Welcome message</h2>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
            </ul>
            <div>
                Dear ${name}, welcome to our application. We hope you love it here.
                <br>
                Sincerely yours, the test app team.
            </div>
        </div>
    `;

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: MAILER_GMAIL,
            pass:MAILER_PASSWORD
        }
    });

    const mailOptions = {
        from:MAILER_GMAIL,
        to:email,
        subject:"Registration mail",
        text: "Level 3 application",
        html:messageTemplate
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Mail sent");
    } catch (error) {
        throw error;
    }

}

module.exports = sendMail;