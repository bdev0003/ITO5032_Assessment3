<template>
    <div class="contact-form-div">
        <h3>Got more questions?</h3>
        <p>Please use the form below to reach out</p>
        <div class="contact-form">
            <form action="">
                <div class="name">
                    <input type="text" placeholder="Name" id="name" class="item" required />
                    <div class="error-txt">Name cannot be blank</div>
                </div>
                <div class="subject">
                    <input type="text" placeholder="Subject" id="subject" class="item" required />
                    <div class="error-txt">Subject cannot be blank</div>
                </div>
                <div class="email">
                    <input type="email" placeholder="Email" id="email" class="item" required />
                    <div class="error-txt">Email cannot be blank</div>
                </div>
                <div class="textarea-field field">
                    <textarea name="" id="message" cols="20" rows="10" placeholder="Your Message" class="item" autocomplete="off"></textarea>
                    <div class="error-txt">Message cannot be blank</div>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
</template>

<script setup>

/*import '@sendgrid/mail';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
    to: 'beth.de.vries.1997@gmail.com',
    from: 'beth.de.vries.1997@gmail.com',
    subject: 'test',
    text:'test'
};

function sendMail(message) {
    sgMail
    .send(message)
    .then(() => {
        console.log('Email sent')
    }).catch((error) => {
        console.error(error)
    })
};*/

</script>

<style scoped>
* {
    box-sizing: border-box;
}

.contact-form-div {
    padding: 20px;
    
}

.contact-form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-form .error-txt {
    font-size: 1rem;
    color: #d93025;
    text-align: left;
    display: none;
}


button {
    padding: 1rem 2rem;
    background: var(--background-side-alt);
    border-radius: 4px;
}
</style>