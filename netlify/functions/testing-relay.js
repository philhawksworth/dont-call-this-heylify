exports.handler = async (event) => {

  console.log(`Testing the email relay`);
  
  // get what we need from the webhook payload
  const {
    subject,
    text,
    to,
    from,
    messageId
  } = JSON.parse(event.body)

  const {
    REPOSITORY_URL
  } = process.env

  
  console.log(`Payload from ${from.value[0].address} received`);
  console.log(`We should get vars we need from the provided REPOSITORY_URL env var: ${REPOSITORY_URL}`);
}