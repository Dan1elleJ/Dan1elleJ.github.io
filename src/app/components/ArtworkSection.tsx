'use client'

import styles from '../../styles/ArtworkSection.module.css';
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import ImageGrid from './ImageGrid';

const grid1Images = [
  { src: '/images/printmaking_1.jpg', alt: 'Artwork from Grid 1 - 1' },
  { src: '/images/printmaking_2.jpg', alt: 'Artwork from Grid 1 - 2' },
  { src: '/images/printmaking_3.jpg', alt: 'Artwork from Grid 1 - 3' },
  { src: '/images/printmaking_4.jpg', alt: 'Artwork from Grid 1 - 4' },
  { src: '/images/printmaking_5.jpg', alt: 'Artwork from Grid 1 - 5' },
  { src: '/images/printmaking_6.jpg', alt: 'Artwork from Grid 1 - 6' },
  { src: '/images/printmaking_7.jpg', alt: 'Artwork from Grid 1 - 7' },
  { src: '/images/printmaking_8.jpg', alt: 'Artwork from Grid 1 - 8' },
  { src: '/images/printmaking_9.jpg', alt: 'Artwork from Grid 1 - 9' },
  { src: '/images/printmaking_10.jpg', alt: 'Artwork from Grid 1 - 10' },
  { src: '/images/printmaking_11.jpg', alt: 'Artwork from Grid 1 - 11' },
  { src: '/images/printmaking_12.jpg', alt: 'Artwork from Grid 1 - 12' },
  { src: '/images/printmaking_13.jpg', alt: 'Artwork from Grid 1 - 13' },
  { src: '/images/printmaking_14.jpg', alt: 'Artwork from Grid 1 - 14' },
  { src: '/images/printmaking_15.jpg', alt: 'Artwork from Grid 1 - 15' },
];

const grid2Images = [
  { src: '/images/photography_1.jpg', alt: 'Artwork from Grid 2 - 1' },
  { src: '/images/photography_2.jpg', alt: 'Artwork from Grid 2 - 2' },
  { src: '/images/photography_3.jpg', alt: 'Artwork from Grid 2 - 3' },
  { src: '/images/photography_4.jpg', alt: 'Artwork from Grid 2 - 4' },
  { src: '/images/photography_5.jpg', alt: 'Artwork from Grid 2 - 5' },
  { src: '/images/photography_6.jpg', alt: 'Artwork from Grid 2 - 6' },
  { src: '/images/photography_7.jpg', alt: 'Artwork from Grid 2 - 7' },
  { src: '/images/photography_8.jpg', alt: 'Artwork from Grid 2 - 8' },
  { src: '/images/photography_9.jpg', alt: 'Artwork from Grid 2 - 9' },
  { src: '/images/photography_10.jpg', alt: 'Artwork from Grid 2 - 10' },
  { src: '/images/photography_11.jpg', alt: 'Artwork from Grid 2 - 11' },
  { src: '/images/photography_12.jpg', alt: 'Artwork from Grid 2 - 12' },
  { src: '/images/photography_13.jpg', alt: 'Artwork from Grid 2 - 13' },
  { src: '/images/photography_14.jpg', alt: 'Artwork from Grid 2 - 14' },
  { src: '/images/photography_15.jpg', alt: 'Artwork from Grid 2 - 15' },
];

const grid3Images = [
  { src: '/images/mixedmedia_1.jpg', alt: 'Artwork from Grid 3 - 1' },
  { src: '/images/mixedmedia_2.jpg', alt: 'Artwork from Grid 3 - 2' },
  { src: '/images/mixedmedia_3.jpg', alt: 'Artwork from Grid 3 - 3' },
  { src: '/images/mixedmedia_4.jpg', alt: 'Artwork from Grid 3 - 4' },
  { src: '/images/mixedmedia_5.jpg', alt: 'Artwork from Grid 3 - 5' },
  { src: '/images/mixedmedia_6.jpg', alt: 'Artwork from Grid 3 - 6' },
  { src: '/images/mixedmedia_7.jpg', alt: 'Artwork from Grid 3 - 7' },
  { src: '/images/mixedmedia_8.jpg', alt: 'Artwork from Grid 3 - 8' },
  { src: '/images/mixedmedia_9.jpg', alt: 'Artwork from Grid 3 - 9' },
  { src: '/images/mixedmedia_10.jpg', alt: 'Artwork from Grid 3 - 10' },
  { src: '/images/mixedmedia_11.jpg', alt: 'Artwork from Grid 3 - 11' },
  { src: '/images/mixedmedia_12.jpg', alt: 'Artwork from Grid 3 - 12' },
  { src: '/images/mixedmedia_13.jpg', alt: 'Artwork from Grid 3 - 13' },
  { src: '/images/mixedmedia_14.jpg', alt: 'Artwork from Grid 3 - 14' },
  { src: '/images/mixedmedia_15.jpg', alt: 'Artwork from Grid 3 - 15' },
];


let tabs = [
  {
    id: "grid1",
    label: "Print Making",
    content: <ImageGrid images={grid1Images} />,
  },
  {
    id: "grid2",
    label: "Photography",
    content: <ImageGrid images={grid2Images} />,
  },
  {
    id: "grid3",
    label: "Mixed Media",
    content: <ImageGrid images={grid3Images} />,
  },
];

function ArtworkSection() {
  return (
    <section id="artwork" className={styles.artworkSection}>
      <h2 className={styles.heading}>Gallery</h2>
      <div className="flex w-full flex-col items-center">
      <Tabs aria-label="Dynamic Tabs" items={tabs} radius="full" color='warning'>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card className='bg-[#FEF3E2] border-[#FA812F] border-2'>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
    </section>
  );
}

export default ArtworkSection;