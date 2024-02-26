//note these are all the *content* pages, the exception only being the home page
export const allPages: Array<{
  type: 'videos' | 'about';
  name: string;
  prevName: string;
  nextName: string;
  content: string;
  prevContent: string;
}> = [
  {
    type: 'about',
    name: 'overview', //url path
    content: 'overview', //file name for content
    prevContent: '',
    prevName: '',
    nextName: '',
  },
  {
    type: 'videos',
    name: 'ethereum-staking',
    content: 'ethereumStaking',
    prevContent: '',
    prevName: '',
    nextName: 'run-your-own-node',
  },
  {
    type: 'videos',
    name: 'run-your-own-node',
    content: 'runYourOwnNode',
    prevContent: 'ethereumStaking',
    prevName: 'ethereum-staking',
    nextName: 'maintain-your-node',
  },
  {
    type: 'videos',
    name: 'maintain-your-node',
    content: 'maintainYourNode',
    prevContent: 'runYourOwnNode',
    prevName: 'run-your-own-node',
    nextName: '',
  },
];
