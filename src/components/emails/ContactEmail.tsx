import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  topic,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from {name} via your Portfolio</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={logo}>PORTFOLIO INQUIRY</Text>
        </Section>
        <Heading style={heading}>You've received a new message!</Heading>
        <Section style={section}>
          <Text style={label}>FROM</Text>
          <Text style={value}>{name} ({email})</Text>
          
          <Text style={label}>TOPIC / PROJECT</Text>
          <Text style={topicBadge}>{topic}</Text>
          
          <Hr style={hr} />
          
          <Text style={label}>MESSAGE</Text>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Section style={footer}>
          <Text style={footerText}>
            This email was sent from your portfolio website.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: '#0a0a0a',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const header = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const logo = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#ffffff',
  letterSpacing: '2px',
  margin: '0',
};

const heading = {
  fontSize: '24px',
  color: '#ffffff',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const section = {
  backgroundColor: '#171717',
  padding: '32px',
  borderRadius: '12px',
  border: '1px solid #262626',
};

const label = {
  fontSize: '11px',
  fontWeight: 'bold',
  color: '#a3a3a3',
  letterSpacing: '1px',
  margin: '0 0 8px 0',
  textTransform: 'uppercase' as const,
};

const value = {
  fontSize: '16px',
  color: '#ffffff',
  margin: '0 0 24px 0',
};

const topicBadge = {
  fontSize: '14px',
  color: '#ffffff',
  backgroundColor: '#2563eb',
  padding: '4px 12px',
  borderRadius: '20px',
  display: 'inline-block',
  margin: '0 0 24px 0',
};

const hr = {
  borderColor: '#262626',
  margin: '24px 0',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#d4d4d4',
  margin: '0',
};

const footer = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#525252',
};
