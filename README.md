## Obsidian Discord Rich Presence Plugin (with arRPC support)

Want to show your friends what you're working on in Obsidian but you can only use arRPC? Well now you can with added arRPC support to obsidian-discordrpc!

![Rich Presence Preview](https://raw.githubusercontent.com/Solhex/obsidian-discordarrpc/master/assets/presence.gif)

### Usage

After enabling the plugin in settings, your Discord status should show that you are using Obsidian.md.

If Discord isn't open, then you will see "Reconnect to Discord" at the botton of the screen. You can click that to attempt to reconnect. It will only connect if Discord is open.

You can also reconnect to discord rich presence via the `Reconnect to Discord` command in the command palette. If there is an issue.

### Features

- Updates your Discord Status with Obsidian info, **Vault Name** and/or **Current File Name**.
- Allows you to customise what info is shown.
- Added arRPC support for opensource clients.

### Settings

#### Vault Name Settings

- Toggle whether or not to show **Vault Name**
- Set a custom **Vault Name** to show publicly

#### File Name Settings

- Toggle whether or not to show **Current File Name**
- Toggle whether or not to show the current file **extension**

#### Time Settings

- Toggle Whether or not to use the total time you have been using Obsidian, instead of the time spent editing a single file.

#### Notice Settings

- Toggle whether or not to show **Connection Notices**

### Contributors

#### @lukeleppan, @leoccyao, and @BlankParticle
- For the original Obsidian plugin

#### @Apoo711
- For the fork of which this is forked off of

### Issues

If you have any issues or suggestions please create an **issue** or a **pull request**.

#### Manually installing the plugin

- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
