var context = require.context('./tests', true, /_spec\.js$/);
context.keys().forEach(context);
