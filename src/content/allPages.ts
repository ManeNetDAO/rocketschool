//note these are all the *content* pages, the exception only being the home page
export const allPages: Array<{
  type: 'videos' | 'about';
  name: string;
  content: string;
}> = [
  {
    type: 'about',
    name: 'overview', //url path
    content: 'overview', //file name for content
  },
  {
    type: 'videos',
    name: 'ethereum-staking',
    content: 'ethereumStaking',
  },
  {
    type: 'videos',
    name: 'run-your-own-node',
    content: 'runYourOwnNode',
  },
  {
    type: 'videos',
    name: 'maintain-your-node',
    content: 'maintainYourNode',
  },
];
