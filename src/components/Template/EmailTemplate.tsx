import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #eee' }}>
        <h1>Welcome, {firstName}!</h1>
        <p>Thanks for joining our platform. We're excited to have you here!</p>
        <hr />
        <p style={{ fontSize: '12px', color: '#666' }}>Sent via Resend & Next.js</p>
    </div>
);