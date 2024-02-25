import { ElemData } from '@/components/molecules/ColumnList/ColumnList';

export const primaryHeading = 'Run Your Own Node';

export const videos: Array<ElemData> = [
  {
    number: '2.1',
    title: 'Deciding To Become A Node Operator',
    about:
      'Learn about node operator responsibilities, rewards, penalties, requirements, and gas',
    url: 'https://www.youtube.com/embed/v1VW-n3ShwQ',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.2.1',
    title: 'Preparing a Local Node - Hardware and Internet Requirements',
    about: 'Learn about the required hardware and internet specs to operate a node',
    url: 'https://www.youtube.com/embed/A3fc9xNvYXs',
    commands: `https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038`,
    transcript: ``,
  },
  {
    number: '2.2.2',
    title: 'Preparing a Local Node - Installing The Operating System',
    about: 'Install Ubuntu Desktop Linux from a bootable USB on your node hardware',
    url: 'https://www.youtube.com/embed/mpNwtEKjfy4',
    commands: `https://releases.ubuntu.com/

https://pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/`,
    transcript: ``,
  },
  {
    number: '2.2.3 ',
    title: 'Preparing a Local Node - Installing OpenSSH Server',
    about: 'Install software on your node that will allow you to access it remotely',
    url: 'https://www.youtube.com/embed/Wzr7oDgOxVI',
    commands: `sudo apt update

sudo apt upgrade

sudo apt install openssh-server

sudo systemctl start ssh

sudo systemctl enable ssh

sudo systemctl status ssh

hostname -I`,
    transcript: ``,
  },
  {
    number: '2.2.4',
    title: 'Preparing a Local Node - SSH Keypair Login',
    about: 'Create and install an SSH keypair so you can securely access your node from your daily driver computer',
    url: 'https://www.youtube.com/embed/HZIrV_4PK0Y',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.3.1',
    title: 'Securing Your Node - Hardening SSH',
    about: 'Disable insecure ways of accessing your node over SSH',
    url: 'https://www.youtube.com/embed/RuWVS2VKWjY',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.3.2',
    title: 'Securing Your Node - Enabling the Firewall',
    about:
      'Set up and enable a firewall to block unsolicited external communication with your node',
    url: 'https://www.youtube.com/embed/rIZEFv6zA9s',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.3.3',
    title: 'Securing Your Node - Enabling Automatic Security Updates',
    about: 'Set up and enable automatic security updates for your node',
    url: 'https://www.youtube.com/embed/pXKM6GtGAJk',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.4.1',
    title: 'Installing Rocket Pool - Installing the CLI',
    about: 'Download the Rocket Pool command-line interface software',
    url: 'https://www.youtube.com/embed/-n5QPP1phr4',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.4.2',
    title: 'Installing Rocket Pool - Installing the Smartnode Stack',
    about: 'Install the Rocket Pool Smartnode Stack',
    url: 'https://www.youtube.com/embed/4ziQKs7PlKo',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.5',
    title: 'Deciding on Testnet',
    about:
      'Decide whether to run a node on testnet before committing to mainnet',
    url: 'https://www.youtube.com/embed/PUtxAvNdw9I',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.6',
    title: 'Configuring Via the Wizard',
    about:
      'Configure a network, choose execution and consensus clients, and configure a fallback node and metrics',
    url: 'https://www.youtube.com/embed/RVD36t-a_Ao',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.7',
    title: 'Starting Rocket Pool',
    about:
      'Start and stop the Rocket Pool service, check the version, and check sync status',
    url: 'https://www.youtube.com/embed/Rckk-QIACx8',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.8',
    title: 'Creating the Node Wallet',
    about: 'Create the account that your node will use to automatically operate and manage some funds',
    url: 'https://www.youtube.com/embed/RB3kVBqHOvE',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.9',
    title: 'Preparing Your Node for Operation',
    about:
      'Load your node wallet, register your node, and set your withdrawal address',
    url: 'https://www.youtube.com/embed/eoMSaAkOPvY',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.10',
    title: 'The Smoothing Pool and MEV',
    about: 'Learn about MEV, join the smoothing pool, and review configuration of MEV-Boost',
    url: 'https://www.youtube.com/embed/4ahiGkZU238',
    commands: ``,
    transcript: ``,
  },
  {
    number: '2.11',
    title: 'Creating a Minipool',
    about:
      'Take the final step - stake your RPL and ETH and create your Rocket Pool minipool',
    url: 'https://www.youtube.com/embed/39PQPX58MrI',
    commands: ``,
    transcript: ``,
  },
];
