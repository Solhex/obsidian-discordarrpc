# Custom RPC

## My Fork

I noticed the original plugin wasnt being maintained! So i decided to create my own fork that I'll try to update!

If you find any issues or have any suggestions, please report them in the discussions post.

### Installing

I'm not sure how BRAT works so for now you'll have to do it manually.

- Go to the install folder
- Download main.js and manifest.json
- put em in a folder in your .obsidian/plugins folder
- You'll notice the plugin is under a different name
- Just enable it.

### TODO

- Finish up Folder Names
- Add a way to include custom strings in the status.

### Usage

After enabling the plugin in settings, your Discord status should show that you are using Obsidian.md.

If Discord isn't open, then you will see "Reconnect to Discord" at the botton of the screen. You can click that to attempt to reconnect. It will only connect if Discord is open.

You can also reconnect to discord rich presence via the `Reconnect to Discord` command in the command palette. If there is an issue.

### Features

- Updates your Discord Status with Obsidian info, **Vault Name** and/or **Current File Name**.
- Allows you to customise what info is shown.

### Settings

#### Privacy Settings

##### Folder Name Settings

- Toggle whether or not to show **Folder Name**

##### Vault Name Settings

- Toggle whether or not to show **Vault Name**
- Set a custom **Vault Name** to show publicly

##### File Name Settings

- Toggle whether or not to show **Current File Name**
- Toggle whether or not to show the current file **extension**

#### Time Settings

- Toggle Whether or not to use the total time you have been using Obsidian, instead of the time spent editing a single file.

#### Notice Settings

- Toggle whether or not to show **Connection Notices**

### Contributors

#### @leoccyao

- Added the disconnect feature
- Made the plugin much more user friendly
