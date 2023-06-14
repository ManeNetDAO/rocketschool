export const allPages: Array<{
  type: 'videos' | 'about';
  name: string;
  content: string;
}> = [
  {
    type: 'videos',
    name: 'videos', //url path
    content: 'videoPage', //file name for content
  },
  {
    type: 'videos',
    name: 'videos2',
    content: 'videoPage', //NOTE: this 2nd page will have the same content as the first just a different URL, a new file should be created and referenced here
  },
  {
    type: 'about',
    name: 'learn-about', //url path
    content: 'aboutPage', //file name for content
  },
  {
    type: 'about',
    name: 'learn-about-deez-nuts', //url path
    content: 'aboutPage', //file name for content
  },
];
