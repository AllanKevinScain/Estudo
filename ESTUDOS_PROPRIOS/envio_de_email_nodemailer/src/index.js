const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../config/smtp');

const trasnporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function run() {
    const mailSent = await trasnporter.sendMail({
        text:"Texto do E-mail",
        subject: "Assunto do e-mail",
        from: "Vastaia <vastaiascain@gmail.com",
        to: ["emailtestestesmtp@gmail.com"],
        html: `
            <html>
                <body>
                    <p> Se cuida rapai </p>
                </body>
            </html>
        `    
    })

    console.log(mailSent);
}

run();