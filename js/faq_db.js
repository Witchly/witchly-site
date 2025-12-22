// Central Knowledgebase Database
// Paste new entries generated from the Admin Panel at the bottom of this list.

const faqDatabase = [
    // --- GETTING STARTED ---
    {
        id: "account",
        game: "getting-started",
        title: "How to Create an Account",
        answer: "Accounts are created automatically when you place your first order (even the Free Trial). Check your email for login details to the <strong>Game Panel</strong> and <strong>Billing Area</strong>."
    },
    {
        id: "trial",
        game: "getting-started",
        title: "How does the Free Trial work?",
        answer: "Select the 'Benchmark' plan on the pricing page. It costs $0.00. No credit card is required. The server stays online for 48 hours and then automatically deletes unless you upgrade."
    },
    {
        id: "upgrade",
        game: "getting-started",
        title: "Upgrading from Trial to Paid",
        answer: "Login to the Billing Area. Go to Services > My Services. Click on your Trial server and select 'Upgrade/Downgrade'. Your files will be preserved."
    },

    // --- MINECRAFT ---
    {
        id: "join",
        game: "minecraft",
        title: "How to Join Server",
        answer: "1. Navigate to the Witchly Panel and copy your <strong>Server Address</strong> (IP:Port).<br>2. Open Minecraft, go to <strong>Multiplayer > Add Server</strong>.<br>3. Paste the IP address."
    },
    {
        id: "op",
        game: "minecraft",
        title: "OP Yourself (Admin)",
        answer: "To make yourself an admin, go to the Panel > Console.<br>Type: <code>op YourUsername</code> (Do not use a slash <code>/</code> in the console)."
    },
    {
        id: "whitelist",
        game: "minecraft",
        title: "Enable Whitelist",
        answer: "Run these commands in the Console:<br><code>whitelist on</code> (Enables the list)<br><code>whitelist add PlayerName</code> (Adds a player)"
    },
    {
        id: "modpacks",
        game: "minecraft",
        title: "Installing Modpacks",
        answer: "We recommend using our <strong>One-Click Installer</strong>:<br>1. Go to the 'Modpack Installer' tab in the panel.<br>2. Search for the pack (e.g. 'ATM9').<br>3. Click Install. <span class='text-red-400 font-bold'>Warning: This deletes all current files.</span>"
    },
    {
        id: "icon",
        game: "minecraft",
        title: "Change Server Icon",
        answer: "1. Create a <strong>64x64 pixel</strong> PNG image.<br>2. Rename it exactly to <code>server-icon.png</code>.<br>3. Upload it to the main directory via File Manager and restart."
    },
    {
        id: "ram",
        game: "minecraft",
        title: "Fix Lag / Can't Keep Up",
        answer: "1. <strong>Pre-generate chunks:</strong> Use the 'Chunky' plugin.<br>2. <strong>Optimization:</strong> Switch from Vanilla to Paper/Purpur.<br>3. <strong>View Distance:</strong> Lower `view-distance` in `server.properties`."
    },
    {
        id: "sftp",
        game: "minecraft",
        title: "SFTP File Access",
        answer: "To upload large files, use <strong>FileZilla</strong>.<br>Go to Panel > Settings > SFTP Details to find your Host, Username, and Port."
    },

    // --- RUST ---
    {
        id: "connect",
        game: "rust",
        title: "Connecting via F1",
        answer: "1. Open Rust.<br>2. Press <strong>F1</strong>.<br>3. Type: <code>client.connect IP:PORT</code> and hit Enter."
    },
    {
        id: "admin",
        game: "rust",
        title: "Adding Admins",
        answer: "1. Get Steam64 ID.<br>2. Console: <code>ownerid STEAM64ID Name</code><br>3. Type <code>server.writecfg</code> to save.<br>4. Relog."
    },
    {
        id: "seed",
        game: "rust",
        title: "Change Map Size/Seed",
        answer: "Navigate to the <strong>Startup</strong> tab in the panel.<br>Edit 'World Size' (1000-6000) and 'World Seed' (Random Numbers)."
    },
    {
        id: "wipe",
        game: "rust",
        title: "How to Wipe Server",
        answer: "Stop server. Go to File Manager > <code>/server/rust/</code>. Delete all <code>.map</code> and <code>.sav</code> files."
    },
    {
        id: "oxide",
        game: "rust",
        title: "Installing Oxide",
        answer: "Go to <strong>Mod Manager</strong> in the panel. Click Install on Oxide/UMod.<br><strong>Note: Reinstall after every game update.</strong>"
    },

    // --- PALWORLD ---
    {
        id: "join",
        game: "palworld",
        title: "Joining Your Server",
        answer: "1. Select 'Join Multiplayer Game'.<br>2. Check 'Community Servers'.<br>3. Enter IP:PORT at the bottom and click Connect."
    },
    {
        id: "admin",
        game: "palworld",
        title: "Set Admin Password",
        answer: "1. Stop Server.<br>2. Edit <code>/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini</code>.<br>3. Find <code>AdminPassword=''</code> and insert password.<br>4. In-game: <code>/AdminPassword YOURPASS</code>."
    },
    {
        id: "settings",
        game: "palworld",
        title: "Changing Settings",
        answer: "All settings are in: <code>/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini</code>. Restart required."
    },
    {
        id: "save",
        game: "palworld",
        title: "Save Data Location",
        answer: "World data is at: <code>/Pal/Saved/SaveGames/0/RandomID/</code>"
    }
];

window.faqDatabase = faqDatabase;