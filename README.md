<h1>Discord Voice Disconnect Bot</h1>
<p>Disconnect people from Discord calls using a CLI application.</p>

<h4>Dependancies:</h4>
<ul>
  <li><a href="https://nodejs.org/en/download/">node.js</a> - (12.18.3 or later)</li>
  <li><a href="https://discord.js.org/#/">discord.js</a></li>
</ul>

<h4>Setting Up:</h4>
<ul>
  <li><code>npm install discord.js</code></li>
  <li>Replace client token in <code>bot.js</code></li>
  <li>Add users to blacklist using <code>addUser(name, id)</code> within the file</li>
</ul>

<h4>Using:</h4>
<ul>
  <li>Run using <code>node bot.js</code></li>
  <li>Tag the user in a text channel, creating an initial disconnect, if the user's id is contained in the blacklist, they will not be able to join a call as long as the bot is running</li>
</ul>
