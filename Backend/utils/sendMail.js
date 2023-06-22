async function sendEmailViaSendinBlue(toEmail, subject, content) {
    const apiKey = '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';
  
    try {
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          sender: { email: 'sender@example.com' },
          to: [{ email: toEmail }],
          subject: subject,
          htmlContent: content
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey
          }
        }
      );
  
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('An error occurred while sending the email:', error.response.data);
    }
  }