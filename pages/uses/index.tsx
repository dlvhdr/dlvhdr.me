import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./uses.module.css";

export default function Uses() {
  return (
    <Layout className={styles.root} showBack={false}>
      <div className={styles.content}>
        <h1>Uses</h1>
        <h2>Intro</h2>
        <p>
          This is a list of the things I’m currently using for work and play.
        </p>
        <p>
          See the <a href="https://slashpages.net/">Slash Pages</a> site for an
          explanation of these kinds of pages.
        </p>
        <p>
          Also see my <a href="https://github.com/dlvhdr/dotfiles">dotfiles.</a>
        </p>
        <h2>Coding / Terminal</h2>
        <ul>
          <li>
            <a
              href="https://neovim.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neovim
            </a>
            : my editor of choice. Completely customizable and in my control,
            not bloated, keyboard centric. I use the following notable plugins:
            <details className={styles.nvimPlugins}>
              <summary>click to see my plugins...</summary>
              <ul>
                <li>
                  <a href="https://github.com/folke/lazy.nvim">
                    Lazy plugin manager
                  </a>{" "}
                  - the great plugin manager by the legend folke.
                </li>
                <li>
                  <a href="https://github.com/echasnovski/mini.files">
                    mini.files
                  </a>{" "}
                  - a delightful non intrusive file tree explorer.
                </li>
                <li>
                  <a href="https://github.com/so1ve/snacks-fff.nvim">
                    fff.nvim
                  </a>{" "}
                  - the fastest and smartest file picker and grep.
                </li>
                <li>
                  <a href="https://github.com/folke/snacks.nvim">snacks.nvim</a>{" "}
                  - the great folke - pickers, image previews, dashboard and
                  more.
                </li>
                <li>
                  <a href="https://github.com/Chaitanyabsprip/fastaction.nvim">
                    fastaction.nvim
                  </a>{" "}
                  - press <code>ga</code> for LSP code actions with easy to
                  remember hotkeys.
                </li>
                <li>
                  <a href="https://github.com/chrisgrieser/nvim-chainsaw">
                    chainsaw
                  </a>{" "}
                  - quickly log the variable under the cursor or just a BEEP.
                </li>
                <li>
                  <a href="https://github.com/dlyongemallo/diffview.nvim">
                    diffview.nvim
                  </a>{" "}
                  - handle merge conflicts, see file history or diff against
                  main.
                </li>
                <li>
                  <a href="https://github.com/dlvhdr/gh-blame.nvim">
                    gh-blame.nvim
                  </a>{" "}
                  - show the PR that changed the current line.
                </li>
                <li>
                  <a href="https://github.com/linrongbin16/gitlinker.nvim">
                    gitlinker.nvim
                  </a>{" "}
                  - open the current file on GitHub.
                </li>
                <li>
                  <a href="https://github.com/MagicDuck/grug-far.nvim">
                    grug-far.nvim
                  </a>{" "}
                  - a very capable find and replace.
                </li>
                <li>
                  <a href="https://github.com/pwntester/octo.nvim">octo.nvim</a>{" "}
                  - code reviews in nvim.
                </li>
                <li>
                  <a href="https://github.com/aaronik/treewalker.nvim">
                    treewalker.nvim
                  </a>{" "}
                  - walk up/down the AST with <code>K</code> and <code>J</code>.
                </li>
                <li>
                  Check out my full config on{" "}
                  <a href="https://github.com/dlvhdr/dotfiles">GitHub</a>.
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              href="https://ghostty.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghostty
            </a>
            : a fast terminal emulator. Though I'm thinking moving to kitty to
            use its sessions feature and drop tmux.
          </li>
          <li>
            <a
              href="https://github.com/tmux/tmux"
              target="_blank"
              rel="noopener noreferrer"
            >
              tmux
            </a>
            : terminal multiplexer, I mainly use it for having different
            sessions - which allows me to quickly switch between different
            projects.
          </li>
          <li>
            <a
              href="https://github.com/joshmedeski/sesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              sesh
            </a>
            : flexible and configurable CLI for quickly switching tmux sessions
          </li>
          <li>
            <a
              href="https://fishshell.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              fish
            </a>
            : modern shell with great autocomplete and other features built-in
          </li>
          <li>
            <a
              href="https://github.com/folke/tokyonight.nvim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tokyo Night
            </a>
            : As someone with red/green color blindness the colors on this
            really pop out. It's pretty :)
          </li>
          <li>
            <a
              href="https://commitmono.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CommitMono
            </a>
            : monospace/programming font, can be tweaked and configured, really
            well balanced
          </li>
          <li>
            <a
              href="https://starship.rs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Starship
            </a>
            : shell prompt, fast and configurable
          </li>
          <li>
            <a
              href="https://yazi-rs.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yazi
            </a>
            : file explorer TUI, with image previews. I have it bound to{" "}
            <code>option+i</code> to quickly open up Kitty with Yazi as a
            replacment for Finder.
          </li>
          <li>
            <a
              href="https://github.com/junegunn/fzf"
              target="_blank"
              rel="noopener noreferrer"
            >
              fzf
            </a>
            : fuzzy finder CLI
          </li>
          <li>
            <a
              href="https://github.com/ynqa/jnv"
              target="_blank"
              rel="noopener noreferrer"
            >
              jnv
            </a>
            : Interactive JSON filter using jq.
          </li>
          <li>
            <a
              href="https://github.com/ajeetdsouza/zoxide"
              target="_blank"
              rel="noopener noreferrer"
            >
              zoxide
            </a>
            : A smarter <code>cd</code> command.
          </li>
          <li>
            <a
              href="https://github.com/eza-community/eza"
              target="_blank"
              rel="noopener noreferrer"
            >
              eza
            </a>
            : A better <code>ls</code> command.
          </li>
          <li>
            <a
              href="https://atuin.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              atuin
            </a>
            : magical shell history.
          </li>
          <li>
            <a
              href="https://github.com/jesseduffield/lazygit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lazygit
            </a>
            : simple terminal UI for git commands. I have it bound to{" "}
            <code>cmd+g</code> to open it in a new tmux window.
          </li>
          <li>
            <a
              href="https://github.com/F1bonacc1/process-compose"
              target="_blank"
              rel="noopener noreferrer"
            >
              process-compose
            </a>
            : a simple scheduler and orchestrator to manage non-containerized
            applications - I use this on every monorepo I worked on to start up
            the various services.
          </li>
          <li>
            <a
              href="https://www.jetify.com/docs/devbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devbox
            </a>
            : isolated, reproducible shell environment where you define which
            programs you want installed - great for onboarding to a new repo.
          </li>
          <li>
            ... and of course my own tools -{" "}
            <a href="https://github.com/dlvhdr/gh-dash">DASH</a>,{" "}
            <a href="https://github.com/dlvhdr/gh-enhance">ENHANCE</a> and{" "}
            <a href="https://github.com/dlvhdr/diffnav">DIFFNAV</a>
          </li>
        </ul>
        <h2 id="productivity">Productivity</h2>
        <ul>
          <li>
            <a
              href="https://github.com/nikitabobko/AeroSpace"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aerospace
            </a>
            : an i3-like tiling window manager for macOS. I have one full screen
            window all the time and use <code>opt+&lt;a mnemonic key&gt;</code>{" "}
            to instantly switch between them.
          </li>
          <li>
            <a
              href="https://github.com/imputnet/helium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Helium
            </a>{" "}
            : chromium based browser with a builtin ublock origin, vertical tabs
            / compact search bar and customizable keyboard shortcuts.
          </li>
          <li>
            <a
              href="https://1password.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              1Password
            </a>
            : my password manager of choice.
          </li>
          <li>
            <a
              href="https://www.raycast.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raycast
            </a>
            : macOS launcher, shortcuts, color picker, floating notes (
            <code>opt+r</code>), clipboard manager (<code>cmd+y</code>),
            snippets (<code>cmd+shift+y</code>), converter, synonyms and more
          </li>
          <li>
            <a
              href="https://www.ticktick.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TickTick
            </a>
            : To-Do app where I hoard links and don't usually do anything about
            them :D
          </li>
          <li>
            <a
              href="https://shottr.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shottr
            </a>
            : screenshot tool on macOS, with great annotation features
          </li>
          <li>
            <a
              href="https://github.com/exelban/stats"
              target="_blank"
              rel="noopener noreferrer"
            >
              stats
            </a>
            : shows the CPU and memory usage on my status bar.
          </li>
          <li>
            <a
              href="https://justgetflux.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              f.lux
            </a>
            : red shifts the colors on my Mac in sync with the sunset.
          </li>
          <li>
            <a
              href="https://chromewebstore.google.com/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vimium
            </a>
            : Chromium extension to control your browser with vim keybinds.
          </li>
        </ul>
        <h2 id="gear">Gear</h2>
        <ul>
          <li>
            <a
              href="https://cyboard.digital/products/imprint"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cyboard Imprint
            </a>
            : a split ergonomic mechanical keyboard with a trackball on each
            half, using the{" "}
            <a
              href="https://milktooth.com/products/retro-sakura"
              target="_blank"
              rel="noopener noreferrer"
            >
              Retro Sakura Silent Linear
            </a>{" "}
            switches
          </li>
          <li>
            <a
              href="https://www.keychron.com/collections/keychron-v-series-keyboard/products/keychron-v5-qmk-custom-mechanical-keyboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZSA Moonlander
            </a>
            : my 1st bought mechanical split ergonomic keyboard, used at my
            workplace.
          </li>
          <li>
            <a
              href="https://www.rtings.com/monitor/reviews/msi/mag-274upf"
              target="_blank"
              rel="noopener noreferrer"
            >
              MSI MAG-274UPF
            </a>
            : a 27" 4K monitor with 144hz refresh rate and decent color accuracy
          </li>
          <li>
            <a
              href="https://opalcamera.com/opal-c1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Opal C1
            </a>
            : a 4K camera webcam
          </li>
          <li>
            <a
              href="https://www.shure.com/en-US/products/microphones/mv7x?variant=MV7X"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shure MV7
            </a>
            : my microphone
          </li>
        </ul>
      </div>
    </Layout>
  );
}
