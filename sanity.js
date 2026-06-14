import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '376dycjx',
  dataset: 'production',
  apiVersion: '2025-06-13',
  useCdn: false,
});

client
  .fetch('*[_type == "post"][0]')
  .then((data) => {
    console.log('Connected ✅');
    console.log(data);
  })
  .catch((err) => {
    console.error('Connection Failed ❌');
    console.error(err);
  });