import { ElemData } from '@/components/molecules/ColumnList/ColumnList';

export const primaryHeading = 'Ethereum Staking';

export const videos: Array<ElemData> = [
  {
    number: '1.1',
    title: 'How Ethereum Staking Works',
    about:
      'Learn the basics of decentralized networks, nodes, consensus, validation, proposing, and attestation on Ethereum.',
    url: 'https://www.youtube.com/embed/-0v_58F_mas',
    commands: ``,
    transcript: `
JT: Hello, all, and welcome to Rocket School. If you're just joining us, this course aims to provide a friendly and thorough walkthrough on how to run an Ethereum node and stake, using the decentralized staking protocol Rocket Pool. In this first video of the course we’ll review how Ethereum staking works at a level that should help you understand every part of the process later on. For more on this, let's bring in SuperPhiz. How's it going, dude? 

SuperPhiz: Hey, what’s up. 

JT: Oh, our mics probably touched, ooh, careful now. Well, it's good to have you here. What a surprise. And I'm really glad that you could join us for this first video of this series. 

SuperPhiz: I'm excited to participate. I'm glad you let me come over. 

JT: All right. So we're going to turn to you and you're going to help me read through the script, what do you say. 

SuperPhiz: I, you know, I can do this. I'm all game. I love Rocket Pool and I love the opportunity to join you. 

JT: All right. Thank you. 

SuperPhiz: Since you're here, you probably already have some idea of what Ethereum is. But to review, it's a decentralized, permissionless, smart contract blockchain layer that uses Proof of Stake for its consensus. Blockchains are distributed computer systems that manage some set of data called state and ensure that any changes to the state follow certain rules and are not reversible. One simple example of state might be, “how much money does each account have”? And one example of a rule might be, “no one can send the same money twice to two different people”. 

JT: That's right. They are called blockchains because those state changes, called transactions, are grouped together into bundles called blocks, which are chained one after the other, in a mathematically verifiable way. Unlike many simpler blockchains that are only money ledgers, Ethereum supports, and in fact was the first blockchain to support, arbitrary state and rules via pieces of code that anyone can write. Those are called smart contracts. 

SuperPhiz: Decentralized systems like blockchains are made up of many so-called nodes, which are computers that run certain pieces of client software and all talk to each other across the internet, forming one big network. Everything that happens on a blockchain is ultimately just nodes, rapidly validating and sharing messages between themselves and updating their internal databases accordingly. Ethereum’s tens of thousands of nodes are operated by a similarly large number of different entities, including individuals and companies. The more decentralized the blockchain’s nodes’ operators are, the more difficult it becomes to break any of these rules. 

JT: A core challenge for a blockchain is getting everyone to agree, or "reach consensus", about how its state gets updated. Even if all the nodes automatically throw out transactions that break the rules, there is still a lot of money to be made by picking valid transactions, and so the right to decide is valuable. It needs to be shared in a fair manner that everyone running and using the chain can agree on. Updating the chain boils down to selecting one person to create each block, picking which rule-following transactions it contains, and in which order. Older blockchains use Proof of Work to solve this problem, where people called "miners" race fast computers to find brute-force solutions to math problems and be paid to create the next block. But this approach is very inefficient, both in money and in environmental terms. 

SuperPhiz: As we mentioned earlier, Ethereum now uses Proof of Stake for its consensus mechanism, a newer and much more efficient approach. This means that people who operate a node and also hold Ether can choose to put it up "at stake" on part of the Ethereum network related to consensus, which is called the Beacon Chain, or the “consensus layer”, in contrast to the “execution layer” where smart contracts and transactions live. Stakers put their Ether at stake like this in exchange for the right to get paid "consensus rewards", in the form of freshly minted Ether, for performing certain duties. These duties include voting on, or “attesting to”, new blocks as they get added to the chain, actually choosing, or “proposing”, new blocks themselves, and very rarely, “sync committee participation”, which is beyond the scope of this introduction. Consensus rewards are paid on the Beacon Chain where they can't be used for anything, but are automatically withdrawn back to the execution layer address of the Eth staker’s choice every few days.

JT: You're the Beacon Chain health consultant. Man, you really got this stuff down. Awesome. Well, Ether is currently being staked on the Beacon Chain in bundles of 32, and each staked bundle is called a “validator”. The more Ether someone stakes as validators, the more often they are assigned the above duties and the more consensus rewards they stand to earn by performing those duties successfully. The more total validators on the network, the lower the consensus rewards for everyone. 

SuperPhiz: Staking isn't risk free. A node and its validators going offline is one possible mistake. But fortunately, and surprisingly for some people, the penalties for this are minor and only results in staked Ether slowly leaking away over time at roughly the same rate consensus rewards would have been earned. However, duplicating assigned duties like double proposing or attesting is seen by the Ethereum network as an attack, even if it was just a mistake. And it's a major infraction punishable by slashing, resulting in the validator being ejected from the network and losing a larger fraction of its staked Ether, between one Ether and all of it, depending on how many other slashings happen around the same time. Slashing is Ethereum's automatic immune system. It's very easy to avoid getting slashed. Never ever use the same staking keys in more than one place. It's also worth noting that Ether used for staking is locked on the Beacon Chain and cannot be used for anything else until the validator is exited and the stake withdrawn back to the execution layer. 

JT: These consensus rewards are only one part of the income a staker can expect. Whenever a validator proposes a block, which happens randomly, but on average several times a year per validator, its operator can also expect to be paid “tips”, also known as “priority fees”, by each of the transactions in their chosen block. And they may also receive payments for “MEV”, which we will talk more about later. Together, these tips and MEV make up a staker’s so-called "execution rewards", because they accrue directly and immediately on the execution layer, and they vary heavily based on how busy Ethereum is at any given time. Transactions that wish to be included in blocks must also pay Ethereum itself with what is called the “basefee”. This is a fee that increases the more complicated the transaction is, and the more busy Ethereum is. This fee is burned by the protocol. This burning of Ether often fully counteracts the inflation caused by the minting of consensus rewards to pay stakers. And this can lead to Ethereum being deflationary, or, as some people call it - 

Both: "Ultrasound"!

JT: The priority fee and basefee users pay for their transactions are together better known as “gas”. 

SuperPhiz: The total yield earned by staking on Ethereum is a combination of consensus rewards and execution rewards and varies according to many factors. Overall, staking on Ethereum with your own node and your own Ether is called “solo staking”. It's a real responsibility and not just passive income. Many holders of Ether, especially those with less than 32 Ether, choose or are forced to skip that responsibility, and instead give their Ether to large businesses running so-called “centralized staking pools” to stake for them. These pools typically give back IOU tokens for the staked Ether called “Liquid Staking Derivatives” or LSDs (or Liquid Staking Tokens, LSTs) that allow users to trade the rights to their staked Ether and accumulated rewards at any time, even though the Ether itself is locked in the Beacon Chain in the pool’s validators. Unfortunately, using centralized staking pools harms the decentralization of the network and often requires trusting those centralized businesses not to mess up and lose, or turn malicious and steal, all of their customers’ Ether. This is not all made up risk! Millions of dollars in Ether have been lost this way in the past. Wouldn't it be nice if there were a middle ground where people unwilling or unable to run their own nodes could pool their Ether and receive staking rewards and an LSD while also minimizing risk and contributing to Ethereum's decentralization by allowing and incentivizing thousands of dedicated individuals to operate their own nodes and stake that Ether along with some of their own? If that idea appeals to you, this course is for you. 

JT: Wow, great job, SuperPhiz. Thanks so much for stopping by today. Man, this is an amazing step. We're getting ready to go on this journey together. Stay tuned for the next episode where we do a deep dive on what's inside the staking thrusters within the Rocket Pool engine. On behalf of Rocket School, my name is JT.

SuperPhiz: And I'm SuperPhiz!
`},
  {
    number: '1.2',
    title: 'Staking with Rocket Pool',
    about:
      'Learn about rETH and RPL, LSTs, collateral/bond, minority staking, minipools, node operation, and commissions.',
    url: 'https://www.youtube.com/embed/qXCR7XoKJvs',
    commands: ``,
    transcript: ``,
  },
];
